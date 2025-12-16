// Optimized LRU Cache with TTL for API responses
interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number; // Time to live in milliseconds
}

class LRUCache {
  private cache = new Map<string, CacheEntry<unknown>>();
  private readonly maxSize: number;
  private readonly cleanupInterval: number;
  private cleanupTimer: NodeJS.Timeout | null = null;

  constructor(maxSize: number = 100, cleanupInterval: number = 5 * 60 * 1000) {
    this.maxSize = maxSize;
    this.cleanupInterval = cleanupInterval;
    this.startCleanup();
  }

  set<T>(key: string, data: T, ttlMs: number = 5 * 60 * 1000): void {
    // Remove oldest entry if at capacity (LRU eviction)
    if (this.cache.size >= this.maxSize && !this.cache.has(key)) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey) {
        this.cache.delete(firstKey);
      }
    }

    // Delete and re-add to move to end (most recently used)
    this.cache.delete(key);
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

    // Check if entry has expired
    const now = Date.now();
    if (now - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return null;
    }

    // Move to end (refresh LRU position)
    this.cache.delete(key);
    this.cache.set(key, entry);

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
    const keysToDelete: string[] = [];
    
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        keysToDelete.push(key);
      }
    }
    
    keysToDelete.forEach(key => this.cache.delete(key));
    
    // Only log in development
    if (process.env.NODE_ENV === 'development' && keysToDelete.length > 0) {
      console.log(`🧹 Cache cleanup: removed ${keysToDelete.length} expired entries`);
    }
  }

  // Get cache statistics
  getStats() {
    return {
      size: this.cache.size,
      maxSize: this.maxSize,
      utilizationPercent: ((this.cache.size / this.maxSize) * 100).toFixed(1),
    };
  }

  // Start automatic cleanup
  private startCleanup(): void {
    if (typeof window !== "undefined" && !this.cleanupTimer) {
      this.cleanupTimer = setInterval(() => {
        this.cleanup();
      }, this.cleanupInterval);
    }
  }

  // Stop automatic cleanup
  stopCleanup(): void {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
      this.cleanupTimer = null;
    }
  }
}

// Export singleton instance with optimized settings
export const apiCache = new LRUCache(100, 5 * 60 * 1000);

// Helper function to create cache keys
export const createCacheKey = (
  endpoint: string,
  params?: Record<string, unknown>
): string => {
  const paramString = params ? JSON.stringify(params) : "";
  return `${endpoint}${paramString}`;
};

// Export cache stats for debugging (development only)
if (typeof window !== "undefined" && process.env.NODE_ENV === 'development') {
  (window as any).__API_CACHE__ = apiCache;
}
