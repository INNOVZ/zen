import { getAuthInfo } from "@/api/auth";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8001";

interface CacheHealthResponse {
  status: string;
  cache: {
    status: string;
    enabled: boolean;
    redis_version: string;
    used_memory: string;
    connected_clients: number;
    uptime: number;
  };
}

interface CacheStatsResponse {
  status: string;
  cache_stats: {
    enabled: boolean;
    status: string;
    redis_version: string;
    memory_usage: string;
    connected_clients: number;
    uptime_seconds: number;
  };
}

interface CacheClearResponse {
  status: string;
  message: string;
  cleared_count: number;
}

interface CacheKeyResponse {
  status: string;
  key: string;
  value: unknown;
  ttl_seconds: number;
  exists: boolean;
}

interface CacheKeysResponse {
  status: string;
  keys: string[];
  total_count: number;
  returned_count: number;
}

/**
 * Utility function to make API requests with authentication and base URL.
 */
async function makeRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...options.headers as Record<string, string>,
  };

  const authInfo = await getAuthInfo();
  if (authInfo?.token) {
    headers['Authorization'] = `Bearer ${authInfo.token}`;
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`Cache API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * Cache API functions
 */
export async function getCacheHealth(): Promise<CacheHealthResponse> {
  return makeRequest<CacheHealthResponse>('/api/cache/health');
}

export async function getCacheStats(): Promise<CacheStatsResponse> {
  return makeRequest<CacheStatsResponse>('/api/cache/stats');
}

export async function clearCache(pattern: string): Promise<CacheClearResponse> {
  return makeRequest<CacheClearResponse>(
    `/api/cache/clear?pattern=${encodeURIComponent(pattern)}`,
    { method: 'DELETE' }
  );
}

export async function clearOrgCache(orgId: string): Promise<CacheClearResponse> {
  return makeRequest<CacheClearResponse>(
    `/api/cache/clear/org/${orgId}`,
    { method: 'DELETE' }
  );
}

export async function listCacheKeys(
  pattern: string = '*',
  limit: number = 100
): Promise<CacheKeysResponse> {
  return makeRequest<CacheKeysResponse>(
    `/api/cache/keys?pattern=${encodeURIComponent(pattern)}&limit=${limit}`
  );
}

export async function getCacheKey(key: string): Promise<CacheKeyResponse> {
  return makeRequest<CacheKeyResponse>(`/api/cache/key/${encodeURIComponent(key)}`);
}

export async function deleteCacheKey(
  key: string
): Promise<{ status: string; key: string; deleted: boolean }> {
  return makeRequest(
    `/api/cache/key/${encodeURIComponent(key)}`,
    { method: 'DELETE' }
  );
}

export type {
  CacheHealthResponse,
  CacheStatsResponse,
  CacheClearResponse,
  CacheKeyResponse,
  CacheKeysResponse,
};