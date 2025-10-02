// Simple in-memory cache for API responses
interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number; // Time to live in milliseconds
}

class SimpleCache {
  private cache = new Map<string, CacheEntry<unknown>>();

  set<T>(key: string, data: T, ttlMs: number = 5 * 60 * 1000): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttlMs,
    });
  }

  get<T>(key: string): T | null {
    const entry = this.cache.get(key);

    if (!entry) {
      return null;
    }

    const now = Date.now();
    if (now - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return null;
    }

    return entry.data as T;
  }

  clear(): void {
    this.cache.clear();
  }

  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  has(key: string): boolean {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return false;
    }

    const now = Date.now();
    if (now - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }

  // Get all keys that match a pattern
  getKeysMatching(pattern: string): string[] {
    const matchingKeys: string[] = [];
    for (const key of this.cache.keys()) {
      if (key.includes(pattern)) {
        matchingKeys.push(key);
      }
    }
    return matchingKeys;
  }

  // Delete all entries matching a pattern
  deleteMatching(pattern: string): number {
    const keysToDelete = this.getKeysMatching(pattern);
    keysToDelete.forEach(key => this.cache.delete(key));
    return keysToDelete.length;
  }

  // Clean up expired entries
  cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        this.cache.delete(key);
      }
    }
  }
}

export const apiCache = new SimpleCache();

// Clean up expired entries every 5 minutes
if (typeof window !== "undefined") {
  setInterval(() => {
    apiCache.cleanup();
  }, 5 * 60 * 1000);
}

// Helper function to create cache keys
export const createCacheKey = (
  endpoint: string,
  params?: Record<string, unknown>
): string => {
  const paramString = params ? JSON.stringify(params) : "";
  return `${endpoint}${paramString}`;
};
