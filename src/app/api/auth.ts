// utils/auth.ts
import { createClient } from '@/lib/supabase/client'
import { getApiBaseUrl } from '@/config/api';
import { logger } from '@/utils/logger';

// Get token and user info from Supabase session
export const getAuthInfo = async () => {
  try {
    const supabase = createClient();

    const [
      { data: userData, error: userError },
      { data: sessionData, error: sessionError },
    ] = await Promise.all([supabase.auth.getUser(), supabase.auth.getSession()]);

    if (userError) {
      console.warn("Auth user error:", userError);
      throw new Error("Authentication error. Please log in again.");
    }
    if (sessionError) {
      console.warn("Auth session error:", sessionError);
    }

    const token = sessionData.session?.access_token;
    const userId = userData.user?.id;

    if (!token || !userId) {
      console.warn("No valid auth found - user not authenticated", {
        hasToken: !!token,
        hasUserId: !!userId,
      });
      throw new Error("Not authenticated. Please log in again.");
    }
    
    // Fetch org_id from database instead of metadata
    let orgId = null;
    try {
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('org_id')
        .eq('id', userId)
        .single();
      
      if (userError) {
        console.debug("Error fetching user org_id:", userError);
      } else if (userData?.org_id) {
        orgId = userData.org_id;
        console.debug("Fetched org_id from database:", orgId);
      }
    } catch (error) {
      console.debug("Failed to fetch org_id from database:", error);
    }
    
    return { token, userId, orgId };
  } catch (error) {
    console.error("getAuthInfo failed:", error);
    throw error;
  }
};



// Custom error type for API errors
interface ApiError extends Error {
  status?: number;
  statusText?: string;
  url?: string;
  errorData?: unknown;
  errorText?: string;
}

/**
 * Safely extract a string error message from various error formats.
 * Handles cases where error.detail or error.message might be an object.
 */
const extractErrorMessage = (value: unknown): string | null => {
  if (!value) return null;
  
  // If it's already a string, return it
  if (typeof value === 'string') {
    return value;
  }
  
  // If it's an object, try to extract meaningful message
  if (typeof value === 'object') {
    const obj = value as Record<string, unknown>;
    
    // Try common error message properties
    if (typeof obj.message === 'string') return obj.message;
    if (typeof obj.msg === 'string') return obj.msg;
    if (typeof obj.error === 'string') return obj.error;
    if (typeof obj.detail === 'string') return obj.detail;
    
    // If it's an array (like validation errors), join them
    if (Array.isArray(value)) {
      const messages = value
        .map(item => {
          if (typeof item === 'string') return item;
          if (typeof item === 'object' && item !== null) {
            const itemObj = item as Record<string, unknown>;
            return itemObj.msg || itemObj.message || itemObj.error || JSON.stringify(item);
          }
          return String(item);
        })
        .filter(Boolean);
      if (messages.length > 0) return messages.join('; ');
    }
    
    // Last resort: stringify the object but make it readable
    try {
      const stringified = JSON.stringify(value);
      // Only return if it's not too long and not just "{}"
      if (stringified && stringified !== '{}' && stringified.length < 500) {
        return stringified;
      }
    } catch {
      // Ignore stringify errors
    }
  }
  
  return null;
};

// Enhanced helper with better error handling and logging
export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const { token, userId, orgId } = await getAuthInfo();

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
    "X-User-ID": userId,
    "X-Request-ID": `req-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    ...(orgId && { "X-Org-ID": orgId }),
    ...options.headers,
  };

  const requestId = headers["X-Request-ID"];
  const apiBaseUrl = getApiBaseUrl();
  // Allow HTTP for localhost, force HTTPS for production
  let fullUrl = `${apiBaseUrl}${url}`;
  if (!fullUrl.includes('localhost') && !fullUrl.startsWith('https://')) {
    fullUrl = fullUrl.replace(/^http:\/\//, 'https://');
  }
  logger.apiRequest(requestId, options.method || "GET", fullUrl, { 
    userId: userId.substring(0, 8) + "...", 
    orgId: orgId?.substring(0, 8) + "..." || "none",
  });

  const startTime = Date.now();
  
  try {
    const response = await fetch(fullUrl, {
      ...options,
      headers,
    });

    const responseTime = Date.now() - startTime;
    logger.apiResponse(requestId, response.status, responseTime);

    if (!response.ok) {
      let errorText = '';
      let errorData = null;
      let parseError = null;
      
      try {
        // Try to get error as text first
        errorText = await response.text();
        
        // Try to parse as JSON if it looks like JSON
        if (errorText && (errorText.startsWith('{') || errorText.startsWith('['))) {
          try {
            errorData = JSON.parse(errorText);
          } catch (jsonParseError) {
            parseError = jsonParseError;
            console.warn(`⚠️ [${requestId}] JSON parsing failed:`, jsonParseError);
            // If JSON parsing fails, keep as text
          }
        }
      } catch (responseError) {
        errorText = 'Failed to read error response';
        console.warn(`⚠️ [${requestId}] Could not read error response:`, responseError);
      }

      const errorInfo = {
        requestId,
        url: fullUrl,
        method: options.method || "GET",
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        errorData,
        errorText: errorText || 'No error text',
        parseError: parseError instanceof Error ? parseError.message : parseError ? String(parseError) : null,
        timestamp: new Date().toISOString(),
        responseTime: Date.now() - startTime,
      };

      // Enhanced logging with better structure and readability
      const logError = {
        requestId,
        url: errorInfo.url,
        method: errorInfo.method,
        status: errorInfo.status,
        statusText: errorInfo.statusText,
        message: errorData?.message || errorText || errorInfo.statusText || 'Unknown error',
        timestamp: errorInfo.timestamp,
        fullErrorData: errorData,
        fullErrorText: errorText,
        responseHeaders: Object.fromEntries(response.headers.entries())
      };
      
      // Reduce console noise for expected failures
      const isContextConfigEndpoint = url.includes('/context-config');
      const isOrganizationEndpoint = url.includes('/organization');
      const isIntegrationStatusEndpoint = url.includes('/integrations/status') || url.includes('/integrations/') && url.includes('/status');
      const isExpectedFailure = response.status === 404 && (isContextConfigEndpoint || isOrganizationEndpoint);
      const isIntegrationError = isIntegrationStatusEndpoint && (response.status === 404 || response.status === 500);
      
      if (isExpectedFailure) {
        console.debug(`📝 [${requestId}] Endpoint not available (expected in development):`, {
          url: errorInfo.url,
          status: response.status,
          endpoint: isContextConfigEndpoint ? 'context-config' : 'organization'
        });
      } else if (isIntegrationError) {
        // Suppress integration status errors - they're handled gracefully by the frontend
        console.debug(`📝 [${requestId}] Integration status check failed (handled gracefully):`, {
          url: errorInfo.url,
          status: response.status,
        });
      } else {
        console.error(`❌ [${requestId}] API Error:`, logError);
        console.error(`💥 [${requestId}] Request failed:`, {
          summary: `${errorInfo.method} ${errorInfo.url} -> ${errorInfo.status} ${errorInfo.statusText}`,
          error: errorData?.message || errorText || 'No error details available',
          responseHeaders: Object.fromEntries(response.headers.entries())
        });
      }
      
      if (response.status === 401) {
        throw new Error("Authentication expired. Please log in again.");
      } else if (response.status === 403) {
        throw new Error("Access denied. Please check your permissions.");
      } else if (response.status === 404) {
        throw new Error(`API endpoint not found: ${url}`);
      } else if (response.status === 429) {
        throw new Error("Too many requests. Please try again later.");
      } else if (response.status >= 500) {
        // For 500 errors, try to extract the actual error message from the backend
        const backendError = extractErrorMessage(errorData?.detail) || extractErrorMessage(errorData?.message) || errorText;
        if (backendError && backendError !== 'No error text') {
          throw new Error(backendError);
        }
        throw new Error("Server error. Please try again later.");
      } else if (response.status === 400) {
        // For 400 errors, show the detailed error message from backend
        const backendError = extractErrorMessage(errorData?.detail) || extractErrorMessage(errorData?.message) || errorText;
        if (backendError && backendError !== 'No error text') {
          throw new Error(backendError);
        }
        throw new Error(`Bad request: ${errorText || response.statusText}`);
      }
      
      const errorMessage = extractErrorMessage(errorData?.detail) || extractErrorMessage(errorData?.message) || errorText || response.statusText || `API error (${response.status})`;
      const enhancedError = new Error(errorMessage) as ApiError;
      // Add additional context to the error
      enhancedError.status = response.status;
      enhancedError.statusText = response.statusText;
      enhancedError.url = fullUrl;
      enhancedError.errorData = errorData;
      enhancedError.errorText = errorText;
      throw enhancedError;
    }

    const responseText = await response.text();
    const contentType = response.headers.get('content-type') || '';

    if (!responseText || responseText.trim() === '') {
      logger.debug(`📄 [${requestId}] Empty response - likely successful update`);
      return { success: true, message: 'Update successful' };
    }

    const looksLikeJson =
      responseText.startsWith('{') || responseText.startsWith('[');
    if (contentType.includes('application/json') || looksLikeJson) {
      try {
        const data = JSON.parse(responseText);
        logger.debug(
          `✅ [${requestId}] Success:`,
          typeof data === 'object' ? 'JSON response' : data
        );
        return data;
      } catch (parseError) {
        console.error(
          `⚠️ [${requestId}] Failed to parse JSON response:`,
          parseError
        );
        console.error(
          `⚠️ [${requestId}] Response status:`,
          response.status,
          response.statusText
        );
        console.error(
          `⚠️ [${requestId}] Response headers:`,
          Object.fromEntries(response.headers.entries())
        );
      }
    }

    logger.debug(`📄 [${requestId}] Text response:`, responseText);
    return { message: responseText };
    
  } catch (error) {
    const responseTime = Date.now() - startTime;
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    // Handle network errors with less verbose logging in development
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      if (isDevelopment) {
        console.debug(`🔌 [${requestId}] Backend server unavailable (development mode) - likely auth in progress`);
      } else {
        console.error(`💥 [${requestId}] Network error:`, {
          url: fullUrl,
          method: options.method || "GET",
          responseTime: `${responseTime}ms`
        });
      }
      throw new Error("Backend server unavailable. Please check your connection or try again later.");
    }
    
    // Handle other fetch errors
    if (error instanceof Error && (
      error.message.includes('ECONNREFUSED') ||
      error.message.includes('network') ||
      error.message.includes('timeout')
    )) {
      if (isDevelopment) {
        console.warn(`🔌 [${requestId}] Connection error: ${error.message}`);
      } else {
        console.error(`💥 [${requestId}] Connection error:`, {
          error: error.message,
          url: `${apiBaseUrl}${url}`,
          method: options.method || "GET",
          responseTime: `${responseTime}ms`
        });
      }
      throw new Error("Unable to connect to server. Please try again later.");
    }
    
    // For unexpected errors, always log detailed information
    const errorDetails = {
      error: error,
      errorMessage: error instanceof Error ? error.message : 'Unknown error',
      errorType: typeof error,
      url: fullUrl,
      method: options.method || "GET",
      responseTime: `${responseTime}ms`
    };

    // Check if this is an empty error object (common issue)
    if (error && typeof error === 'object' && Object.keys(error).length === 0) {
      console.warn(`⚠️ [${requestId}] Empty error object detected - this might be a successful request with parsing issues`);
      console.warn(`⚠️ [${requestId}] Request details:`, {
        url: errorDetails.url,
        method: errorDetails.method,
        responseTime: errorDetails.responseTime
      });
    } else {
      console.error(`💥 [${requestId}] Request failed:`, errorDetails);
    }
    
    throw error;
  }
};
