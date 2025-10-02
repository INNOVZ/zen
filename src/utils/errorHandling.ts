/**
 * Utility functions for consistent error handling across the application
 */

export interface ConnectionErrorInfo {
  isConnectionError: boolean;
  shouldShowToast: boolean;
  logLevel: 'warn' | 'error';
  message: string;
}

/**
 * Analyzes an error and determines how it should be handled
 * @param error - The error to analyze
 * @returns Information about how to handle the error
 */
export const analyzeError = (error: unknown): ConnectionErrorInfo => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  const isConnectionError = error instanceof Error && (
    error.message.includes("Unable to connect") ||
    error.message.includes("Backend server unavailable") ||
    error.message.includes("ECONNREFUSED") ||
    error.message.includes("Failed to fetch") ||
    error.message.includes("network") ||
    error.message.includes("timeout")
  );

  return {
    isConnectionError,
    shouldShowToast: !isDevelopment || !isConnectionError,
    logLevel: isDevelopment && isConnectionError ? 'warn' : 'error',
    message: isConnectionError ? "Backend server unavailable" : "An unexpected error occurred"
  };
};

/**
 * Logs an error with appropriate level and detail
 * @param error - The error to log
 * @param context - Additional context for the error
 * @param info - Connection error information
 */
export const logError = (
  error: unknown, 
  context: string, 
  info: ConnectionErrorInfo
): void => {
  if (info.logLevel === 'warn') {
    console.warn(`${context} - backend server not available`);
  } else {
    console.error(`Error in ${context}:`, error);
  }
};

/**
 * Gets a user-friendly error message from an error
 * @param error - The error to get a message from
 * @returns A user-friendly error message
 */
export const getUserFriendlyErrorMessage = (error: unknown): string => {
  const info = analyzeError(error);
  
  if (info.isConnectionError) {
    return "Unable to connect to the server. Please check your connection and try again.";
  }
  
  if (error instanceof Error) {
    return error.message;
  }
  
  return "An unexpected error occurred. Please try again.";
};
