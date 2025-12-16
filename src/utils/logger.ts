/**
 * Production-safe logging utility
 * Only logs in development mode to reduce production noise
 */

const isDevelopment = process.env.NODE_ENV === 'development';

export const logger = {
  /**
   * Log general information (development only)
   */
  info: (...args: any[]) => {
    if (isDevelopment) {
      console.log(...args);
    }
  },

  /**
   * Log warnings (always shown)
   */
  warn: (...args: any[]) => {
    console.warn(...args);
  },

  /**
   * Log errors (always shown)
   */
  error: (...args: any[]) => {
    console.error(...args);
  },

  /**
   * Log debug information (development only)
   */
  debug: (...args: any[]) => {
    if (isDevelopment) {
      console.debug(...args);
    }
  },

  /**
   * Group logs together (development only)
   */
  group: (label: string, callback: () => void) => {
    if (isDevelopment) {
      console.group(label);
      callback();
      console.groupEnd();
    }
  },

  /**
   * Log API requests (development only)
   */
  apiRequest: (requestId: string, method: string, url: string, meta?: Record<string, any>) => {
    if (isDevelopment) {
      console.log(`🔍 [${requestId}] ${method} ${url}`, meta || '');
    }
  },

  /**
   * Log API responses (development only)
   */
  apiResponse: (requestId: string, status: number, responseTime: number) => {
    if (isDevelopment) {
      console.log(`⏱️ [${requestId}] Response: ${status} (${responseTime}ms)`);
    }
  },
};

