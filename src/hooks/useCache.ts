/**
 * React Hook for Cache Management
 * Provides easy-to-use hooks for cache operations
 */

import { useState, useEffect, useCallback } from 'react';
import {
  getCacheHealth,
  getCacheStats,
  clearCache,
  clearOrgCache,
  deleteCacheKey,
  CacheHealthResponse,
  CacheStatsResponse,
} from '@/api/cache';

interface UseCacheHealthReturn {
  health: CacheHealthResponse | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

interface UseCacheStatsReturn {
  stats: CacheStatsResponse | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/**
 * Hook to get cache health status
 */
export function useCacheHealth(): UseCacheHealthReturn {
  const [health, setHealth] = useState<CacheHealthResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHealth = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await getCacheHealth();
      setHealth(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch cache health');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHealth();
  }, [fetchHealth]);

  return {
    health,
    loading,
    error,
    refetch: fetchHealth,
  };
}

/**
 * Hook to get cache statistics
 */
export function useCacheStats(): UseCacheStatsReturn {
  const [stats, setStats] = useState<CacheStatsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await getCacheStats();
      setStats(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch cache stats');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return {
    stats,
    loading,
    error,
    refetch: fetchStats,
  };
}

/**
 * Hook for cache management operations
 */
export function useCacheManagement() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearCachePattern = useCallback(async (pattern: string) => {
    try {
      setLoading(true);
      setError(null);
      const result = await clearCache(pattern);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to clear cache';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearOrganizationCache = useCallback(async (orgId: string) => {
    try {
      setLoading(true);
      setError(null);
      const result = await clearOrgCache(orgId);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to clear org cache';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const removeCacheKey = useCallback(async (key: string) => {
    try {
      setLoading(true);
      setError(null);
      const result = await deleteCacheKey(key);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete key';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    clearCache: clearCachePattern,
    clearOrgCache: clearOrganizationCache,
    deleteKey: removeCacheKey,
  };
}
