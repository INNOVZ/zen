// utils/auth.ts
import { supabase } from "@/lib/supabase";
import { env } from "@/config/env";
import { createLogger } from "@/utils/logger";

const BASE_URL = env.api.baseUrl;
const log = createLogger('AUTH');

// Get token and user info from Supabase session
export const getAuthInfo = async () => {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    throw new Error("Authentication error. Please log in again.");
  }

  const token = data.session?.access_token;
  const userId = data.session?.user?.id;
  const orgId = data.session?.user?.user_metadata?.org_id;

  if (!token || !userId) {
    throw new Error("Not authenticated. Please log in again.");
  }

  return { token, userId, orgId };
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
    Authorization: `Bearer ${token}`,
    "X-User-ID": userId,
    "X-Request-ID": `req-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}`,
    ...(orgId && { "X-Org-ID": orgId }),
    ...options.headers,
  };

  const requestId = headers["X-Request-ID"];
  log.api(options.method || "GET", `${BASE_URL}${url}`, {
    requestId,
    userId: userId.substring(0, 8) + "...",
    orgId: orgId?.substring(0, 8) + "..." || "none",
  });

  const startTime = Date.now();

  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      ...options,
      headers,
    });

    const responseTime = Date.now() - startTime;
    log.apiResponse(options.method || "GET", `${BASE_URL}${url}`, response.status, responseTime, {
      requestId,
    });

    if (!response.ok) {
      let errorText = "";
      let errorData = null;
      let parseError = null;

      try {
        // Try to get error as text first
        errorText = await response.text();

        // Try to parse as JSON if it looks like JSON
        if (
          errorText &&
          (errorText.startsWith("{") || errorText.startsWith("["))
        ) {
          try {
            errorData = JSON.parse(errorText);
          } catch (jsonParseError) {
            parseError = jsonParseError;
            console.warn(
              `⚠️ [${requestId}] JSON parsing failed:`,
              jsonParseError
            );
            // If JSON parsing fails, keep as text
          }
        }
      } catch (responseError) {
        errorText = "Failed to read error response";
        console.warn(
          `⚠️ [${requestId}] Could not read error response:`,
          responseError
        );
      }

      const errorInfo = {
        requestId,
        url: `${BASE_URL}${url}`,
        method: options.method || "GET",
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        errorData,
        errorText: errorText || "No error text",
        parseError:
          parseError instanceof Error
            ? parseError.message
            : parseError
            ? String(parseError)
            : null,
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
          errorData?.message ||
          errorText ||
          errorInfo.statusText ||
          "Unknown error",
        timestamp: errorInfo.timestamp,
        fullErrorData: errorData,
        fullErrorText: errorText,
        responseHeaders: Object.fromEntries(response.headers.entries()),
      };

      // Reduce console noise for expected failures
      const isContextConfigEndpoint = url.includes("/context-config");
      const isOrgEndpoint = url.includes("/org");
      const isExpectedFailure =
        response.status === 404 &&
        (isContextConfigEndpoint || isOrgEndpoint);

      if (isExpectedFailure) {
        log.debug(`Endpoint not available (expected in development)`, {
          requestId,
          url: errorInfo.url,
          status: response.status,
          endpoint: isContextConfigEndpoint
            ? "context-config"
            : "org",
        });
      } else {
        log.error(`API Error`, logError, { requestId });
        log.error(`Request failed`, undefined, {
          requestId,
          summary: `${errorInfo.method} ${errorInfo.url} -> ${errorInfo.status} ${errorInfo.statusText}`,
          error:
            errorData?.message || errorText || "No error details available",
          responseHeaders: Object.fromEntries(response.headers.entries()),
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
        throw new Error("Server error. Please try again later.");
      }

      const errorMessage =
        errorData?.message ||
        errorText ||
        response.statusText ||
        `API error (${response.status})`;
      const enhancedError = new Error(errorMessage) as ApiError;
      // Add additional context to the error
      enhancedError.status = response.status;
      enhancedError.statusText = response.statusText;
      enhancedError.url = `${BASE_URL}${url}`;
      enhancedError.errorData = errorData;
      enhancedError.errorText = errorText;
      throw enhancedError;
    }

    try {
      const data = await response.json();
      return data;
    } catch {
      // If JSON parsing fails, try to get the response as text
      try {
        const textData = await response.text();

        // If the response is empty or just whitespace, it might be a successful update
        if (!textData || textData.trim() === "") {
          return { success: true, message: "Update successful" };
        }

        return { message: textData };
      } catch {
        throw new Error("Failed to parse server response");
      }
    }
  } catch (error) {
    const responseTime = Date.now() - startTime;
    const isDevelopment = process.env.NODE_ENV === "development";

    // Handle network errors with less verbose logging in development
    if (
      error instanceof TypeError &&
      error.message.includes("Failed to fetch")
    ) {
      if (isDevelopment) {
        console.debug(
          `🔌 [${requestId}] Backend server unavailable (development mode) - likely auth in progress`
        );
      } else {
        console.error(`💥 [${requestId}] Network error:`, {
          url: `${BASE_URL}${url}`,
          method: options.method || "GET",
          responseTime: `${responseTime}ms`,
        });
      }
      throw new Error(
        "Backend server unavailable. Please check your connection or try again later."
      );
    }

    // Handle other fetch errors
    if (
      error instanceof Error &&
      (error.message.includes("ECONNREFUSED") ||
        error.message.includes("network") ||
        error.message.includes("timeout"))
    ) {
      throw new Error("Unable to connect to server. Please try again later.");
    }

    // For unexpected errors in production, throw generic message
    throw error;
  }
};
