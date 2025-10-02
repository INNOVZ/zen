/**
 * Enhanced API service with intelligent caching and optimized data fetching
 */

import { chatbotApi, uploadsApi, conversationApi, organizationApi } from "@/api";
import { cachedFetch, batchFetch, CACHE_TTL, prefetchData, invalidateCache } from "@/utils/dataFetching";
import { createCacheKey } from "@/utils/cache";
import type { ChatbotInfo, UploadFile, ConversationInfo } from "@/types/schemaTypes";
import type { OrganizationResponse } from "@/api/types/index";

/**
 * Optimized dashboard data service
 */
export class DashboardDataService {
  
  /**
   * Load critical dashboard data in parallel with intelligent caching
   */
  async loadDashboardData(userId?: string) {
    const requests = [
      {
        key: 'chatbots' as const,
        cacheKey: createCacheKey('/api/chatbots', { userId }),
        fetchFn: () => chatbotApi.getChatbots(),
        ttl: CACHE_TTL.DYNAMIC,
      },
      {
        key: 'uploads' as const,
        cacheKey: createCacheKey('/api/uploads', { userId }),
        fetchFn: () => uploadsApi.getUploads(),
        ttl: CACHE_TTL.DYNAMIC,
      },
      {
        key: 'conversationCount' as const,
        cacheKey: createCacheKey('/api/conversations/count', { userId }),
        fetchFn: () => conversationApi.getConversationCount(),
        ttl: CACHE_TTL.VOLATILE,
      },
      {
        key: 'organization' as const,
        cacheKey: createCacheKey('/api/org/info', { userId }),
        fetchFn: () => organizationApi.getOrganizationInfo(),
        ttl: CACHE_TTL.STATIC,
        optional: true, // Don't fail entire batch if org data fails
      },
    ];

    return batchFetch<{
      chatbots: ChatbotInfo[];
      uploads: UploadFile[];
      conversationCount: number;
      organization: OrganizationResponse;
    }>(requests);
  }

  /**
   * Load conversation details (background task)
   */
  async loadConversations(limit = 10, userId?: string): Promise<ConversationInfo[]> {
    const cacheKey = createCacheKey('/api/conversations', { limit, userId });
    
    return cachedFetch(
      cacheKey,
      () => conversationApi.getConversations(limit),
      { ttl: CACHE_TTL.VOLATILE }
    );
  }

  /**
   * Load performance metrics (background task)
   */
  async loadPerformanceMetrics(days = 7, userId?: string): Promise<unknown> {
    const cacheKey = createCacheKey('/api/analytics/performance', { days, userId });
    
    return cachedFetch(
      cacheKey,
      () => conversationApi.getAnalyticsDashboard(days),
      { 
        ttl: CACHE_TTL.VOLATILE,
        retries: 1 // Reduce retries for analytics as it's not critical
      }
    ).catch(() => {
      // Non-critical, return null
      return null;
    });
  }

  /**
   * Prefetch data for better user experience
   */
  prefetchDashboardData(userId?: string): void {
    // Prefetch likely-to-be-needed data
    prefetchData(
      createCacheKey('/api/conversations', { limit: 10, userId }),
      () => conversationApi.getConversations(10),
      CACHE_TTL.VOLATILE
    );
    
    prefetchData(
      createCacheKey('/api/analytics/performance', { days: 7, userId }),
      () => conversationApi.getAnalyticsDashboard(7),
      CACHE_TTL.VOLATILE
    );
  }

  /**
   * Refresh specific data with cache invalidation
   */
  async refreshChatbots(userId?: string): Promise<ChatbotInfo[]> {
    const cacheKey = createCacheKey('/api/chatbots', { userId });
    
    return cachedFetch(
      cacheKey,
      () => chatbotApi.getChatbots(),
      { ttl: CACHE_TTL.DYNAMIC, forceRefresh: true }
    );
  }

  async refreshUploads(userId?: string): Promise<UploadFile[]> {
    const cacheKey = createCacheKey('/api/uploads', { userId });
    
    return cachedFetch(
      cacheKey,
      () => uploadsApi.getUploads(),
      { ttl: CACHE_TTL.DYNAMIC, forceRefresh: true }
    );
  }

  /**
   * Invalidate caches when data changes
   */
  invalidateUserData(userId?: string): void {
    const patterns = [
      '/api/chatbots',
      '/api/uploads',
      '/api/conversations',
      '/api/analytics',
    ];
    
    if (userId) {
      patterns.forEach(pattern => {
        invalidateCache([`${pattern}${JSON.stringify({ userId })}`]);
      });
    } else {
      invalidateCache(patterns);
    }
  }

  /**
   * Get user info with long-term caching
   */
  async getUserInfo(userId?: string): Promise<unknown> {
    const cacheKey = createCacheKey('/api/user/info', { userId });
    
    // Placeholder for user info - implement when utils API is available
    return cachedFetch(
      cacheKey,
      () => Promise.resolve({ userId, name: 'User' }),
      { ttl: CACHE_TTL.STATIC }
    );
  }
}

// Singleton instance
export const dashboardDataService = new DashboardDataService();
