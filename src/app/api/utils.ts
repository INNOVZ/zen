// API Utility Functions
import { getAuthInfo } from "@/app/api/auth";
import { apiCache } from "@/utils/cache";
import { API_BASE_URL } from "@/config/api";

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
};
