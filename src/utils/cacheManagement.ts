/**
 * Cache invalidation strategies for maintaining data consistency
 */

import { apiCache } from "@/utils/cache";

/**
 * Cache invalidation patterns for different types of data mutations
 */
export const cacheInvalidationStrategies = {
  
  /**
   * Invalidate chatbot-related caches
   */
  chatbots: {
    onCreate: () => {
      apiCache.deleteMatching("/api/chatbots");
      apiCache.deleteMatching("/api/chat/");
      // Also clear conversation cache as new chatbot affects conversation context
      apiCache.deleteMatching("/api/conversations");
    },
    
    onUpdate: (chatbotId?: string) => {
      apiCache.deleteMatching("/api/chatbots");
      if (chatbotId) {
        apiCache.delete(`/api/chatbots/${chatbotId}`);
      }
      // Clear related conversation and analytics cache
      apiCache.deleteMatching("/api/conversations");
      apiCache.deleteMatching("/api/analytics");
    },
    
    onDelete: (chatbotId?: string) => {
      apiCache.deleteMatching("/api/chatbots");
      if (chatbotId) {
        apiCache.delete(`/api/chatbots/${chatbotId}`);
      }
      // Clear all related data
      apiCache.deleteMatching("/api/conversations");
      apiCache.deleteMatching("/api/uploads");
      apiCache.deleteMatching("/api/analytics");
    },
  },

  /**
   * Invalidate upload/knowledge base related caches
   */
  uploads: {
    onCreate: () => {
      apiCache.deleteMatching("/api/uploads");
      // New uploads affect chatbot training and responses
      apiCache.deleteMatching("/api/chatbots");
      apiCache.deleteMatching("/api/analytics/performance");
    },
    
    onUpdate: (uploadId?: string) => {
      apiCache.deleteMatching("/api/uploads");
      if (uploadId) {
        apiCache.delete(`/api/uploads/${uploadId}`);
      }
      // Updated uploads affect chatbot responses
      apiCache.deleteMatching("/api/analytics/performance");
    },
    
    onDelete: (uploadId?: string) => {
      apiCache.deleteMatching("/api/uploads");
      if (uploadId) {
        apiCache.delete(`/api/uploads/${uploadId}`);
      }
      // Deleted uploads significantly affect chatbot capabilities
      apiCache.deleteMatching("/api/chatbots");
      apiCache.deleteMatching("/api/analytics");
    },
    
    onRetrain: () => {
      // Complete retraining invalidates most caches
      apiCache.deleteMatching("/api/uploads");
      apiCache.deleteMatching("/api/chatbots");
      apiCache.deleteMatching("/api/analytics");
    },
  },

  /**
   * Invalidate conversation-related caches
   */
  conversations: {
    onCreate: () => {
      apiCache.deleteMatching("/api/conversations");
      // New conversations affect analytics
      apiCache.deleteMatching("/api/analytics");
    },
    
    onFeedback: () => {
      // Feedback affects performance metrics
      apiCache.deleteMatching("/api/analytics/performance");
      apiCache.deleteMatching("/api/conversations/count");
    },
    
    onContextUpdate: () => {
      // Context changes affect future conversations
      apiCache.deleteMatching("/api/conversations");
      apiCache.deleteMatching("/api/analytics");
    },
  },

  /**
   * Invalidate organization-related caches
   */
  organization: {
    onUpdate: () => {
      apiCache.deleteMatching("/api/org");
      // Organization changes might affect all user data
      apiCache.deleteMatching("/api/user");
    },
    
    onSettingsChange: () => {
      apiCache.deleteMatching("/api/org");
      // Settings changes might affect chatbot behavior
      apiCache.deleteMatching("/api/chatbots");
    },
  },

  /**
   * Invalidate user-related caches
   */
  user: {
    onProfileUpdate: () => {
      apiCache.deleteMatching("/api/user");
      apiCache.deleteMatching("/api/org");
    },
    
    onLogout: () => {
      // Clear all caches on logout for security
      apiCache.clear();
      console.log("All caches cleared on logout");
    },
    
    onLogin: () => {
      // Clear potentially stale data from previous session
      apiCache.clear();
    },
  },

  /**
   * Time-based cache invalidation
   */
  scheduled: {
    hourly: () => {
      // Clear volatile data hourly
      apiCache.deleteMatching("/api/analytics");
      apiCache.deleteMatching("/api/conversations/count");
    },
    
    daily: () => {
      // More aggressive daily cleanup
      apiCache.deleteMatching("/api/analytics");
      apiCache.deleteMatching("/api/conversations");
      // Keep core data (chatbots, uploads, org) as they change less frequently
    },
  },
};

/**
 * Smart cache warming - preload data that's likely to be needed
 */
export const cacheWarmingStrategies = {
  
  /**
   * Warm cache after user login
   */
  afterLogin: async (userId?: string) => {
    // Import APIs dynamically to avoid circular dependencies
    const { dashboardDataService } = await import("@/services/dashboardData");
    
    // Prefetch critical dashboard data
    setTimeout(() => {
      dashboardDataService.prefetchDashboardData(userId);
    }, 1000);
  },
  
  /**
   * Warm cache after successful data mutations
   */
  afterMutation: async (type: keyof typeof cacheInvalidationStrategies, userId?: string) => {
    const { dashboardDataService } = await import("@/services/dashboardData");
    
    // Preload commonly accessed data after mutations
    setTimeout(() => {
      if (type === 'chatbots' || type === 'uploads') {
        dashboardDataService.prefetchDashboardData(userId);
      }
    }, 500);
  },
};

/**
 * Cache health monitoring
 */
export const cacheMonitoring = {
  
  /**
   * Get cache health statistics
   */
  getStats: () => {
    const cache = apiCache as unknown as { cache?: Map<string, unknown> };
    const cacheMap = cache.cache || new Map();
    
    const now = Date.now();
    let expired = 0;
    let active = 0;
    
    for (const [, entry] of cacheMap.entries()) {
      if (entry && typeof entry === 'object' && 'timestamp' in entry && 'ttl' in entry) {
        if (now - entry.timestamp > entry.ttl) {
          expired++;
        } else {
          active++;
        }
      }
    }
    
    return {
      total: cacheMap.size,
      active,
      expired,
      hitRate: active / (active + expired) || 0,
    };
  },
  
  /**
   * Log cache performance for debugging
   */
  logStats: () => {
    const stats = cacheMonitoring.getStats();
    console.log("Cache Stats:", {
      ...stats,
      hitRatePercent: `${(stats.hitRate * 100).toFixed(1)}%`,
    });
  },
};

/**
 * Initialize cache management - call this once at app startup
 */
export const initializeCacheManagement = () => {
  // Set up periodic cache cleanup
  if (typeof window !== "undefined") {
    // Hourly cleanup of stale data
    setInterval(() => {
      cacheInvalidationStrategies.scheduled.hourly();
      cacheMonitoring.logStats();
    }, 60 * 60 * 1000); // 1 hour
    
    // Daily more aggressive cleanup
    setInterval(() => {
      cacheInvalidationStrategies.scheduled.daily();
    }, 24 * 60 * 60 * 1000); // 24 hours
  }
};
