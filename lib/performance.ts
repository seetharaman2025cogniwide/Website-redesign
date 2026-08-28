// Performance monitoring and optimization utilities

export interface PerformanceMetrics {
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  fcp: number; // First Contentful Paint
  ttfb: number; // Time to First Byte
}

export interface WebVitalsData {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
  navigationType: string;
}

// Web Vitals thresholds
export const WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 },
};

// Performance observer for Core Web Vitals
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: PerformanceObserver[] = [];

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  initialize(): void {
    if (typeof window === 'undefined') return;

    this.observeLCP();
    this.observeFID();
    this.observeCLS();
    this.observeFCP();
    this.observeTTFB();
  }

  private observeLCP(): void {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as any;
      
      if (lastEntry) {
        this.metrics.lcp = lastEntry.startTime;
        this.reportMetric('LCP', lastEntry.startTime);
      }
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('LCP observation not supported:', error);
    }
  }

  private observeFID(): void {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.processingStart && entry.startTime) {
          const fid = entry.processingStart - entry.startTime;
          this.metrics.fid = fid;
          this.reportMetric('FID', fid);
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('FID observation not supported:', error);
    }
  }

  private observeCLS(): void {
    if (!('PerformanceObserver' in window)) return;

    let clsValue = 0;
    let sessionValue = 0;
    let sessionEntries: any[] = [];

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          const firstSessionEntry = sessionEntries[0];
          const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

          if (sessionValue && 
              entry.startTime - lastSessionEntry.startTime < 1000 &&
              entry.startTime - firstSessionEntry.startTime < 5000) {
            sessionValue += entry.value;
            sessionEntries.push(entry);
          } else {
            sessionValue = entry.value;
            sessionEntries = [entry];
          }

          if (sessionValue > clsValue) {
            clsValue = sessionValue;
            this.metrics.cls = clsValue;
            this.reportMetric('CLS', clsValue);
          }
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('CLS observation not supported:', error);
    }
  }

  private observeFCP(): void {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.name === 'first-contentful-paint') {
          this.metrics.fcp = entry.startTime;
          this.reportMetric('FCP', entry.startTime);
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('FCP observation not supported:', error);
    }
  }

  private observeTTFB(): void {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.entryType === 'navigation') {
          const ttfb = entry.responseStart - entry.requestStart;
          this.metrics.ttfb = ttfb;
          this.reportMetric('TTFB', ttfb);
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['navigation'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('TTFB observation not supported:', error);
    }
  }

  private reportMetric(name: string, value: number): void {
    const rating = this.getRating(name, value);
    
    // Send to analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', name, {
        event_category: 'Web Vitals',
        event_label: rating,
        value: Math.round(value),
        non_interaction: true,
      });
    }

    // Log for debugging
    console.log(`${name}: ${value.toFixed(2)}ms (${rating})`);
  }

  private getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    const thresholds = WEB_VITALS_THRESHOLDS[name as keyof typeof WEB_VITALS_THRESHOLDS];
    if (!thresholds) return 'good';

    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.poor) return 'needs-improvement';
    return 'poor';
  }

  getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  disconnect(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Resource loading optimization
export function preloadCriticalResources(): void {
  if (typeof window === 'undefined') return;

  // Preload critical fonts - using Google Fonts, so no local preloads needed
  const fontPreloads: string[] = [];

  fontPreloads.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    link.href = font;
    document.head.appendChild(link);
  });

  // Preload critical images
  const imagePreloads = [
    '/images/hero-bg.webp',
    '/images/logo.svg',
  ];

  imagePreloads.forEach(image => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = image;
    document.head.appendChild(link);
  });
}

// Lazy loading utilities
export function createIntersectionObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  });
}

// Bundle analysis utilities
export function analyzeBundleSize(): void {
  if (typeof window === 'undefined') return;

  // Analyze loaded scripts
  const scripts = Array.from(document.querySelectorAll('script[src]'));
  let totalSize = 0;

  scripts.forEach(async (script) => {
    const src = (script as HTMLScriptElement).src;
    if (src.includes('_next/static')) {
      try {
        const response = await fetch(src, { method: 'HEAD' });
        const size = parseInt(response.headers.get('content-length') || '0');
        totalSize += size;
        console.log(`Script: ${src.split('/').pop()} - ${(size / 1024).toFixed(2)}KB`);
      } catch (error) {
        console.warn('Could not analyze script size:', src);
      }
    }
  });

  console.log(`Total bundle size: ${(totalSize / 1024).toFixed(2)}KB`);
}

// Performance budget checker
export interface PerformanceBudget {
  lcp: number;
  fid: number;
  cls: number;
  bundleSize: number; // in KB
  imageSize: number; // in KB
}

export function checkPerformanceBudget(
  metrics: Partial<PerformanceMetrics>,
  budget: PerformanceBudget
): {
  passed: boolean;
  violations: string[];
} {
  const violations: string[] = [];

  if (metrics.lcp && metrics.lcp > budget.lcp) {
    violations.push(`LCP exceeded budget: ${metrics.lcp}ms > ${budget.lcp}ms`);
  }

  if (metrics.fid && metrics.fid > budget.fid) {
    violations.push(`FID exceeded budget: ${metrics.fid}ms > ${budget.fid}ms`);
  }

  if (metrics.cls && metrics.cls > budget.cls) {
    violations.push(`CLS exceeded budget: ${metrics.cls} > ${budget.cls}`);
  }

  return {
    passed: violations.length === 0,
    violations,
  };
}

// Cache management
export class CacheManager {
  private static readonly CACHE_NAME = 'cogniwide-v1';
  private static readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

  static async cacheResource(url: string, response: Response): Promise<void> {
    if ('caches' in window) {
      try {
        const cache = await caches.open(this.CACHE_NAME);
        await cache.put(url, response.clone());
      } catch (error) {
        console.warn('Failed to cache resource:', url, error);
      }
    }
  }

  static async getCachedResource(url: string): Promise<Response | null> {
    if ('caches' in window) {
      try {
        const cache = await caches.open(this.CACHE_NAME);
        const response = await cache.match(url);
        
        if (response) {
          const cachedTime = response.headers.get('cached-time');
          if (cachedTime) {
            const age = Date.now() - parseInt(cachedTime);
            if (age > this.CACHE_DURATION) {
              await cache.delete(url);
              return null;
            }
          }
          return response;
        }
      } catch (error) {
        console.warn('Failed to get cached resource:', url, error);
      }
    }
    return null;
  }

  static async clearCache(): Promise<void> {
    if ('caches' in window) {
      try {
        await caches.delete(this.CACHE_NAME);
      } catch (error) {
        console.warn('Failed to clear cache:', error);
      }
    }
  }
}