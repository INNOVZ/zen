/**
 * Enhanced data fetching utility with intelligent caching, request deduplication,
 * and optimized loading strategies
 */

import { apiCache } from "@/utils/cache";

// Map to track ongoing requests to prevent duplicate API calls
const ongoingRequests = new Map<string, Promise<unknown>>();

// Enhanced cache TTL configuration based on data volatility
export const CACHE_TTL = {
  STATIC: 15 * 60 * 1000,      // 15 minutes - for rarely changing data (user info, org info)
  DYNAMIC: 5 * 60 * 1000,      // 5 minutes - for frequently changing data (chatbots, uploads)
  VOLATILE: 1 * 60 * 1000,     // 1 minute - for real-time data (conversations, analytics)
  CRITICAL: 10 * 60 * 1000,    // 10 minutes - for business critical data
} as const;

/**
 * Enhanced fetch with intelligent caching and request deduplication
 */
export async function cachedFetch<T>(
  cacheKey: string,
  fetchFn: () => Promise<T>,
  options: {
    ttl?: number;
    forceRefresh?: boolean;
    retries?: number;
  } = {}
): Promise<T> {
  const { ttl = CACHE_TTL.DYNAMIC, forceRefresh = false, retries = 2 } = options;

  // Check cache first (unless force refresh)
  if (!forceRefresh) {
    const cached = apiCache.get<T>(cacheKey);
    if (cached !== null) {
      return cached;
    }
  }

  // Check if request is already ongoing
  if (ongoingRequests.has(cacheKey)) {
    return ongoingRequests.get(cacheKey) as Promise<T>;
  }

  // Create new request with retry logic
  const requestPromise = executeWithRetry(fetchFn, retries)
    .then((data) => {
      // Cache successful result
      apiCache.set(cacheKey, data, ttl);
      return data;
    })
    .finally(() => {
      // Clean up ongoing request tracking
      ongoingRequests.delete(cacheKey);
    });

  // Track ongoing request
  ongoingRequests.set(cacheKey, requestPromise);

  return requestPromise;
}

/**
 * Execute function with retry logic
 */
async function executeWithRetry<T>(
  fn: () => Promise<T>,
  maxRetries: number
): Promise<T> {
  let lastError: Error;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      
      // Don't retry on authentication or client errors
      if (lastError.message.includes('401') || lastError.message.includes('403')) {
        throw lastError;
      }

      // Exponential backoff for retries
      if (attempt < maxRetries) {
        const delay = Math.min(1000 * Math.pow(2, attempt), 5000);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError!;
}

/**
 * Batch multiple API calls with intelligent error handling
 */
export async function batchFetch<T extends Record<string, unknown>>(
  requests: Array<{
    key: keyof T;
    cacheKey: string;
    fetchFn: () => Promise<T[keyof T]>;
    ttl?: number;
    optional?: boolean; // If true, errors won't fail the entire batch
  }>
): Promise<Partial<T>> {
  const results = await Promise.allSettled(
    requests.map(async ({ key, cacheKey, fetchFn, ttl, optional = false }) => {
      try {
        const data = await cachedFetch(cacheKey, fetchFn, ttl ? { ttl } : {});
        return { key, data, success: true };
      } catch (error) {
        if (optional) {
          return { key, data: null, success: false };
        }
        throw error;
      }
    })
  );

  const batchResult: Partial<T> = {};
  
  for (const result of results) {
    if (result.status === 'fulfilled') {
      const { key, data } = result.value;
      if (data !== null) {
        batchResult[key] = data;
      }
    } else {
      console.error('Batch request failed:', result.reason);
    }
  }

  return batchResult;
}

/**
 * Prefetch data for better user experience
 */
export function prefetchData(
  cacheKey: string,
  fetchFn: () => Promise<unknown>,
  ttl: number = CACHE_TTL.DYNAMIC
): void {
  // Only prefetch if not already cached or cached data is stale
  if (!apiCache.has(cacheKey)) {
    cachedFetch(cacheKey, fetchFn, { ttl }).catch(() => {
      // Prefetch failed silently
    });
  }
}

/**
 * Invalidate related cache entries
 */
export function invalidateCache(patterns: string[]): void {
  patterns.forEach(pattern => {
    apiCache.deleteMatching(pattern);
  });
}

/**
 * Get cache statistics for monitoring
 */
export function getCacheStats(): {
  size: number;
  ongoingRequests: number;
} {
  return {
    size: apiCache['cache']?.size || 0,
    ongoingRequests: ongoingRequests.size,
  };
}
