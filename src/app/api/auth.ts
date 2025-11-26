// utils/auth.ts
import { createClient } from '@/lib/supabase/client'
import { getApiBaseUrl } from '@/config/api';

// Get token and user info from Supabase session
export const getAuthInfo = async () => {
  try {
    const supabase = createClient();
    
    const { data, error } = await supabase.auth.getSession();
    
    if (error) {
      console.warn("Auth session error:", error);
      throw new Error("Authentication error. Please log in again.");
    }
    
    const token = data.session?.access_token;
    const userId = data.session?.user?.id;
    
    if (!token || !userId) {
      console.warn("No valid session found - user not authenticated", {
        hasToken: !!token,
        hasUserId: !!userId,
        sessionData: data.session ? {
          user: data.session.user ? {
            id: data.session.user.id,
            email: data.session.user.email
          } : null,
          access_token: data.session.access_token ? "present" : "missing"
        } : null
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
  console.log(`🔍 [${requestId}] API Call:`, fullUrl, { 
    userId: userId.substring(0, 8) + "...", 
    orgId: orgId?.substring(0, 8) + "..." || "none",
    method: options.method || "GET"
  });

  const startTime = Date.now();
  
  try {
    const response = await fetch(fullUrl, {
      ...options,
      headers,
    });

    const responseTime = Date.now() - startTime;
    console.log(`⏱️ [${requestId}] Response:`, response.status, `(${responseTime}ms)`);

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
      const isExpectedFailure = response.status === 404 && (isContextConfigEndpoint || isOrganizationEndpoint);
      
      if (isExpectedFailure) {
        console.debug(`📝 [${requestId}] Endpoint not available (expected in development):`, {
          url: errorInfo.url,
          status: response.status,
          endpoint: isContextConfigEndpoint ? 'context-config' : 'organization'
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
        const backendError = errorData?.detail || errorData?.message || errorText;
        if (backendError && typeof backendError === 'string' && backendError !== 'No error text') {
          throw new Error(backendError);
        }
        throw new Error("Server error. Please try again later.");
      }
      
      const errorMessage = errorData?.detail || errorData?.message || errorText || response.statusText || `API error (${response.status})`;
      const enhancedError = new Error(errorMessage) as ApiError;
      // Add additional context to the error
      enhancedError.status = response.status;
      enhancedError.statusText = response.statusText;
      enhancedError.url = fullUrl;
      enhancedError.errorData = errorData;
      enhancedError.errorText = errorText;
      throw enhancedError;
    }

    try {
      const data = await response.json();
      console.log(`✅ [${requestId}] Success:`, typeof data === 'object' ? 'JSON response' : data);
      return data;
    } catch (parseError) {
      console.error(`⚠️ [${requestId}] Failed to parse JSON response:`, parseError);
      console.error(`⚠️ [${requestId}] Response status:`, response.status, response.statusText);
      console.error(`⚠️ [${requestId}] Response headers:`, Object.fromEntries(response.headers.entries()));
      
      // If JSON parsing fails, try to get the response as text
      try {
        const textData = await response.text();
        console.log(`📄 [${requestId}] Text response:`, textData);
        
        // If the response is empty or just whitespace, it might be a successful update
        if (!textData || textData.trim() === '') {
          console.log(`📄 [${requestId}] Empty response - likely successful update`);
          return { success: true, message: 'Update successful' };
        }
        
        return { message: textData };
      } catch (textError) {
        console.error(`💥 [${requestId}] Failed to read response as text:`, textError);
        throw new Error('Failed to parse server response');
      }
    }
    
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