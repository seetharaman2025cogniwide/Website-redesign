// Cache management utilities for performance optimization
import { useState, useEffect, useCallback } from 'react';

export interface CacheConfig {
  ttl?: number; // Time to live in milliseconds
  maxSize?: number; // Maximum number of items
  staleWhileRevalidate?: boolean; // Return stale data while fetching fresh
}

export class MemoryCache<T = any> {
  private cache = new Map<string, { data: T; timestamp: number; ttl?: number }>();
  private maxSize: number;
  private defaultTTL: number;

  constructor(config: CacheConfig = {}) {
    this.maxSize = config.maxSize || 100;
    this.defaultTTL = config.ttl || 5 * 60 * 1000; // 5 minutes default
  }

  set(key: string, data: T, ttl?: number): void {
    // Remove oldest entries if cache is full
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey !== undefined) {
        this.cache.delete(firstKey);
      }
    }

    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttl || this.defaultTTL,
    });
  }

  get(key: string): T | null {
    const entry = this.cache.get(key);
    
    if (!entry) return null;

    const isExpired = Date.now() - entry.timestamp > (entry.ttl || this.defaultTTL);
    
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }

  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }

  // Get all keys (for debugging)
  keys(): string[] {
    return Array.from(this.cache.keys());
  }
}

// Browser storage cache with compression
export class StorageCache<T = any> {
  private storage: Storage;
  private prefix: string;
  private compress: boolean;

  constructor(
    type: 'localStorage' | 'sessionStorage' = 'localStorage',
    prefix = 'cache_',
    compress = false
  ) {
    if (typeof window === 'undefined') {
      throw new Error('StorageCache can only be used in browser environment');
    }
    
    this.storage = type === 'localStorage' ? localStorage : sessionStorage;
    this.prefix = prefix;
    this.compress = compress;
  }

  private getKey(key: string): string {
    return `${this.prefix}${key}`;
  }

  private serialize(data: any): string {
    const serialized = JSON.stringify({
      data,
      timestamp: Date.now(),
    });

    if (this.compress && 'CompressionStream' in window) {
      // Use compression if available (modern browsers)
      return this.compressString(serialized);
    }

    return serialized;
  }

  private deserialize(serialized: string): { data: T; timestamp: number } | null {
    try {
      if (this.compress && serialized.startsWith('compressed:')) {
        serialized = this.decompressString(serialized);
      }
      
      return JSON.parse(serialized);
    } catch {
      return null;
    }
  }

  private compressString(str: string): string {
    // Simple compression placeholder - in real implementation, use proper compression
    return `compressed:${btoa(str)}`;
  }

  private decompressString(compressed: string): string {
    return atob(compressed.replace('compressed:', ''));
  }

  set(key: string, data: T, ttl?: number): void {
    try {
      const serialized = this.serialize({ data, ttl });
      this.storage.setItem(this.getKey(key), serialized);
    } catch (error) {
      console.warn('Failed to cache data:', error);
      // Handle quota exceeded error
      if (error instanceof DOMException && error.code === 22) {
        this.clearExpired();
        // Try again after clearing expired items
        try {
          const serialized = this.serialize({ data, ttl });
          this.storage.setItem(this.getKey(key), serialized);
        } catch {
          console.warn('Cache storage quota exceeded');
        }
      }
    }
  }

  get(key: string): T | null {
    try {
      const serialized = this.storage.getItem(this.getKey(key));
      if (!serialized) return null;

      const entry = this.deserialize(serialized);
      if (!entry) return null;

      const { data, timestamp } = entry;
      const ttl = (entry as any).ttl || 5 * 60 * 1000; // 5 minutes default

      if (Date.now() - timestamp > ttl) {
        this.delete(key);
        return null;
      }

      return data;
    } catch {
      return null;
    }
  }

  delete(key: string): void {
    this.storage.removeItem(this.getKey(key));
  }

  clear(): void {
    const keys = Object.keys(this.storage).filter(key => key.startsWith(this.prefix));
    keys.forEach(key => this.storage.removeItem(key));
  }

  clearExpired(): void {
    const keys = Object.keys(this.storage).filter(key => key.startsWith(this.prefix));
    
    keys.forEach(key => {
      const serialized = this.storage.getItem(key);
      if (!serialized) return;

      const entry = this.deserialize(serialized);
      if (!entry) {
        this.storage.removeItem(key);
        return;
      }

      const ttl = (entry as any).ttl || 5 * 60 * 1000;
      if (Date.now() - entry.timestamp > ttl) {
        this.storage.removeItem(key);
      }
    });
  }

  size(): number {
    return Object.keys(this.storage).filter(key => key.startsWith(this.prefix)).length;
  }
}

// Cache factory
export class CacheManager {
  private static instance: CacheManager;
  private caches = new Map<string, MemoryCache | StorageCache>();

  static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }
    return CacheManager.instance;
  }

  createMemoryCache<T>(name: string, config?: CacheConfig): MemoryCache<T> {
    const cache = new MemoryCache<T>(config);
    this.caches.set(name, cache);
    return cache;
  }

  createStorageCache<T>(
    name: string,
    type: 'localStorage' | 'sessionStorage' = 'localStorage',
    compress = false
  ): StorageCache<T> | null {
    if (typeof window === 'undefined') return null;
    
    const cache = new StorageCache<T>(type, `${name}_`, compress);
    this.caches.set(name, cache);
    return cache;
  }

  getCache<T>(name: string): MemoryCache<T> | StorageCache<T> | null {
    return this.caches.get(name) as MemoryCache<T> | StorageCache<T> | null;
  }

  clearAll(): void {
    this.caches.forEach(cache => cache.clear());
  }

  // Cache statistics
  getStats() {
    const stats: Record<string, any> = {};
    
    this.caches.forEach((cache, name) => {
      stats[name] = {
        size: cache.size(),
        type: cache instanceof MemoryCache ? 'memory' : 'storage',
      };
    });

    return stats;
  }
}

// React hook for caching
export function useCache<T>(
  key: string,
  fetcher: () => Promise<T>,
  options: {
    cacheName?: string;
    ttl?: number;
    staleWhileRevalidate?: boolean;
  } = {}
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const {
    cacheName = 'default',
    ttl = 5 * 60 * 1000, // 5 minutes
    staleWhileRevalidate = true,
  } = options;

  useEffect(() => {
    const cacheManager = CacheManager.getInstance();
    let cache = cacheManager.getCache<T>(cacheName);
    
    if (!cache) {
      cache = cacheManager.createMemoryCache<T>(cacheName, { ttl });
    }

    const cachedData = cache?.get(key);
    
    if (cachedData) {
      setData(cachedData);
      
      if (!staleWhileRevalidate) {
        return;
      }
    }

    setLoading(true);
    setError(null);

    fetcher()
      .then(freshData => {
        setData(freshData);
        cache?.set(key, freshData, ttl);
      })
      .catch(err => {
        setError(err);
        // If we have stale data and fetch fails, keep the stale data
        if (!cachedData) {
          setData(null);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [key, cacheName, ttl, staleWhileRevalidate]);

  return { data, loading, error };
}

// Service Worker cache utilities
export const ServiceWorkerCache = {
  // Cache static assets
  cacheAssets: async (urls: string[], cacheName = 'static-assets') => {
    if ('serviceWorker' in navigator && 'caches' in window) {
      const cache = await caches.open(cacheName);
      await cache.addAll(urls);
    }
  },

  // Cache API responses
  cacheResponse: async (request: Request, response: Response, cacheName = 'api-cache') => {
    if ('caches' in window) {
      const cache = await caches.open(cacheName);
      await cache.put(request, response.clone());
    }
  },

  // Get cached response
  getCachedResponse: async (request: Request, cacheName = 'api-cache'): Promise<Response | null> => {
    if ('caches' in window) {
      const cache = await caches.open(cacheName);
      const response = await cache.match(request);
      return response || null;
    }
    return null;
  },

  // Clear cache
  clearCache: async (cacheName: string) => {
    if ('caches' in window) {
      await caches.delete(cacheName);
    }
  },

  // Get cache size
  getCacheSize: async (cacheName: string): Promise<number> => {
    if ('caches' in window) {
      const cache = await caches.open(cacheName);
      const keys = await cache.keys();
      return keys.length;
    }
    return 0;
  },
};

// Default cache instances
export const defaultMemoryCache = new MemoryCache();
export const defaultStorageCache = typeof window !== 'undefined' 
  ? new StorageCache('localStorage', 'app_cache_', false)
  : null;