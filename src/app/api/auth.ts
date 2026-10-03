// utils/auth.ts
import { createClient } from '@/lib/supabase/client'
import { getApiBaseUrl } from '@/config/api';
import { logger } from '@/utils/logger';
import { isAuthSessionMissingError } from '@supabase/supabase-js';

export class UnauthenticatedError extends Error {
  constructor(message = "Not authenticated. Please log in again.") {
    super(message);
    this.name = "UnauthenticatedError";
  }
}

export class AuthenticationUnavailableError extends Error {
  constructor(message = "Authentication service is temporarily unavailable.") {
    super(message);
    this.name = "AuthenticationUnavailableError";
  }
}

export const isUnauthenticatedError = (
  error: unknown
): error is UnauthenticatedError => error instanceof UnauthenticatedError;

// Get token and user info from Supabase session
export const getAuthInfo = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    if (isAuthSessionMissingError(error)) {
      throw new UnauthenticatedError();
    }
    throw new AuthenticationUnavailableError(error.message);
  }

  const session = data.session;
  if (!session?.access_token || !session.user?.id) {
    throw new UnauthenticatedError();
  }

  return {
    token: session.access_token,
    userId: session.user.id,
  };
};

export interface CurrentUserContext {
  userId: string;
  orgId?: string;
}

let cachedUserContext: CurrentUserContext | null = null;
let userContextRequest: {
  userId: string;
  promise: Promise<CurrentUserContext>;
} | null = null;
let userContextGeneration = 0;

export const clearCurrentUserContext = () => {
  userContextGeneration += 1;
  cachedUserContext = null;
  userContextRequest = null;
};

export const getCurrentUserContext = async (): Promise<CurrentUserContext> => {
  const { userId } = await getAuthInfo();

  if (cachedUserContext?.userId === userId) {
    return cachedUserContext;
  }

  if (userContextRequest?.userId === userId) {
    return userContextRequest.promise;
  }

  const requestGeneration = userContextGeneration;
  const requestPromise: Promise<CurrentUserContext> = fetchWithAuth("/api/auth/me")
      .then((response) => {
        const backendUser = response?.user;
        const resolvedUserId = backendUser?.user_id;

        if (!resolvedUserId || resolvedUserId !== userId) {
          throw new Error("Backend authentication identity did not match the session");
        }

        const context = {
          userId: resolvedUserId,
          orgId: backendUser.user_data?.org_id || undefined,
        };
        if (requestGeneration === userContextGeneration) {
          cachedUserContext = context;
        }
        return context;
      })
      .finally(() => {
        if (userContextRequest?.promise === requestPromise) {
          userContextRequest = null;
        }
      });
  userContextRequest = { userId, promise: requestPromise };

  return requestPromise;
};



// Custom error type for API errors
interface ApiError extends Error {
  status?: number;
  statusText?: string;
  url?: string;
  errorData?: unknown;
  errorText?: string;
}

export class ApiRequestError extends Error implements ApiError {
  status: number;
  statusText: string;
  url: string;
  errorData: unknown;
  errorText: string;

  constructor(
    message: string,
    response: Response,
    url: string,
    errorData: unknown,
    errorText: string
  ) {
    super(message);
    this.name = "ApiRequestError";
    this.status = response.status;
    this.statusText = response.statusText;
    this.url = url;
    this.errorData = errorData;
    this.errorText = errorText;
  }
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
  const { token, userId } = await getAuthInfo();

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
    "X-Request-ID": `req-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
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
        message:
          extractErrorMessage(errorData?.detail) ||
          extractErrorMessage(errorData?.message) ||
          errorText ||
          errorInfo.statusText ||
          'Unknown error',
        timestamp: errorInfo.timestamp,
        fullErrorData: errorData,
        fullErrorText: errorText,
        responseHeaders: Object.fromEntries(response.headers.entries())
      };
      
      // Reduce console noise for expected failures
      const isContextConfigEndpoint = url.includes('/context-config');
      const isOrganizationEndpoint = url.includes('/organization');
      const isConversationEndpoint = url.includes('/chat/conversations/');
      const isIntegrationStatusEndpoint = url.includes('/integrations/status') || url.includes('/integrations/') && url.includes('/status');
      const isExpectedFailure = response.status === 404 && (isContextConfigEndpoint || isOrganizationEndpoint);
      const isMissingConversation = response.status === 404 && isConversationEndpoint;
      const isIntegrationError = isIntegrationStatusEndpoint && (response.status === 404 || response.status === 500);
      
      if (isExpectedFailure || isMissingConversation) {
        console.debug(`📝 [${requestId}] API resource unavailable:`, {
          url: errorInfo.url,
          status: response.status,
          endpoint: isConversationEndpoint
            ? 'conversation'
            : isContextConfigEndpoint
              ? 'context-config'
              : 'organization'
        });
      } else if (isIntegrationError) {
        // Suppress integration status errors - they're handled gracefully by the frontend
        console.debug(`📝 [${requestId}] Integration status check failed (handled gracefully):`, {
          url: errorInfo.url,
          status: response.status,
        });
      } else {
        console.error(`❌ [${requestId}] API Error:`, logError);
      }
      
      const backendError =
        extractErrorMessage(errorData?.detail) ||
        extractErrorMessage(errorData?.message) ||
        errorText;

      let errorMessage =
        backendError || response.statusText || `API error (${response.status})`;

      if (response.status === 401) {
        errorMessage = "Authentication expired. Please log in again.";
      } else if (response.status === 403) {
        errorMessage = "Access denied. Please check your permissions.";
      } else if (response.status === 404 && !backendError) {
        errorMessage = `API endpoint not found: ${url}`;
      } else if (response.status === 429) {
        errorMessage = "Too many requests. Please try again later.";
      } else if (response.status >= 500 && !backendError) {
        errorMessage = "Server error. Please try again later.";
      } else if (response.status === 400 && !backendError) {
        errorMessage = `Bad request: ${response.statusText}`;
      }

      throw new ApiRequestError(
        errorMessage,
        response,
        fullUrl,
        errorData,
        errorText
      );
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

    // HTTP failures were already logged with their response metadata above.
    // Preserve their status for callers and avoid classifying Error objects as empty.
    if (error instanceof ApiRequestError) {
      throw error;
    }
    
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

    // A genuinely empty non-Error object can still indicate a malformed rejection.
    if (
      !(error instanceof Error) &&
      error !== null &&
      typeof error === 'object' &&
      Object.keys(error).length === 0
    ) {
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

export const getAdminStatus = async (): Promise<{ is_admin: boolean; user_id: string; email?: string }> => {
  const data = await fetchWithAuth("/api/auth/admin-status");
  return data as { is_admin: boolean; user_id: string; email?: string };
};
