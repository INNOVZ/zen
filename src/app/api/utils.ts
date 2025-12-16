// API Utility Functions
import { getAuthInfo } from "@/app/api/auth";
import { apiCache } from "@/utils/cache";
import { API_BASE_URL } from "@/config/api";

// Request deduplication map
interface PendingRequest {
  promise: Promise<unknown>;
  expiresAt: number;
}
const pendingRequests = new Map<string, PendingRequest>();
const DEDUP_TIMEOUT = 5000; // 5 seconds

export const apiUtils = {
  formatError: (error: unknown): string => {
    if (error instanceof Error) {
      return error.message;
    }
    if (typeof error === "string") {
      return error; 
    }
    return "An unexpected error occurred. Please try again.";
  },

  isAuthenticated: async (): Promise<boolean> => {
    try {
      await getAuthInfo();
      return true;
    } catch {
      return false;
    }
  },

  getBaseUrl: (): string => API_BASE_URL,

  createRequestId: (): string =>
    `req-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,

  // Helper function to invalidate cache when data changes
  invalidateCache: (pattern?: string) => {
    if (pattern) {
      // Use the new pattern matching method
      const deletedCount = apiCache.deleteMatching(pattern);
      console.log(`Cache invalidation: deleted ${deletedCount} entries matching "${pattern}"`);
    } else {
      // Clear all cache
      apiCache.clear();
      console.log('Cache invalidation: cleared all cache entries');
    }
  },

  /**
   * Execute a function with deduplication
   * If the same key is requested while a promise is pending, returns the same promise
   */
  withDeduplication: async <T>(
    key: string,
    fn: () => Promise<T>
  ): Promise<T> => {
    const existing = pendingRequests.get(key);
    if (existing && existing.expiresAt > Date.now()) {
      return existing.promise as Promise<T>;
    }

    const promise = fn();
    pendingRequests.set(key, {
      promise,
      expiresAt: Date.now() + DEDUP_TIMEOUT,
    });

    try {
      return await promise;
    } finally {
      pendingRequests.delete(key);
    }
  },

  /**
   * Execute a function with automatic retry logic
   */
  withRetry: async <T>(
    fn: () => Promise<T>,
    maxAttempts: number = 3,
    initialDelayMs: number = 1000,
    backoffMultiplier: number = 2
  ): Promise<T> => {
    let lastError: Error | null = null;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        return await fn();
      } catch (error) {
        lastError = error as Error;

        // Check if error is retryable (network errors, timeouts)
        const isRetryable = 
          error instanceof Error && (
            error.message.includes('timeout') ||
            error.message.includes('network') ||
            error.message.includes('ECONNREFUSED') ||
            error.message.includes('Failed to fetch')
          );

        if (!isRetryable || attempt === maxAttempts - 1) {
          throw error;
        }

        // Calculate delay with exponential backoff
        const delay = initialDelayMs * Math.pow(backoffMultiplier, attempt);
        console.log(`↻ Retry attempt ${attempt + 1}/${maxAttempts} after ${delay}ms`);
        
        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }

    throw lastError || new Error('Request failed after retries');
  },

  /**
   * Clear deduplication cache (useful for testing)
   */
  clearDeduplicationCache: () => {
    pendingRequests.clear();
  },

  /**
   * Get deduplication stats (for debugging)
   */
  getDeduplicationStats: () => {
    const now = Date.now();
    const active = Array.from(pendingRequests.entries()).filter(
      ([_, req]) => req.expiresAt > now
    );
    return {
      pendingRequests: active.length,
      keys: active.map(([key]) => key),
    };
  },
};
