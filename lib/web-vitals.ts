import { onCLS, onINP, onFCP, onLCP, onTTFB, Metric } from 'web-vitals';

// Web Vitals thresholds
export const WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, needsImprovement: 4000 },
  INP: { good: 200, needsImprovement: 500 },
  CLS: { good: 0.1, needsImprovement: 0.25 },
  FCP: { good: 1800, needsImprovement: 3000 },
  TTFB: { good: 800, needsImprovement: 1800 },
} as const;

export type WebVitalName = 'CLS' | 'INP' | 'FCP' | 'LCP' | 'TTFB';

export interface WebVitalMetric extends Metric {
  rating: 'good' | 'needs-improvement' | 'poor';
}

// Rate a metric based on thresholds
function rateMetric(name: WebVitalName, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = WEB_VITALS_THRESHOLDS[name];
  if (value <= threshold.good) return 'good';
  if (value <= threshold.needsImprovement) return 'needs-improvement';
  return 'poor';
}

// Enhanced metric with rating
function enhanceMetric(metric: Metric): WebVitalMetric {
  return {
    ...metric,
    rating: rateMetric(metric.name as WebVitalName, metric.value),
  };
}

// Analytics reporting function
export function reportWebVitals(metric: Metric) {
  const enhancedMetric = enhanceMetric(metric);
  
  // Send to analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', enhancedMetric.name, {
      event_category: 'Web Vitals',
      event_label: enhancedMetric.id,
      value: Math.round(enhancedMetric.name === 'CLS' ? enhancedMetric.value * 1000 : enhancedMetric.value),
      custom_map: {
        metric_rating: enhancedMetric.rating,
        metric_delta: enhancedMetric.delta,
      },
    });
  }

  // Send to custom analytics endpoint
  if (process.env.NODE_ENV === 'production') {
    fetch('/api/analytics/web-vitals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(enhancedMetric),
    }).catch(console.error);
  }

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${enhancedMetric.name}:`, {
      value: enhancedMetric.value,
      rating: enhancedMetric.rating,
      delta: enhancedMetric.delta,
      id: enhancedMetric.id,
    });
  }
}

// Initialize web vitals tracking
export function initWebVitals() {
  if (typeof window === 'undefined') return;

  onCLS(reportWebVitals);
  onINP(reportWebVitals);
  onFCP(reportWebVitals);
  onLCP(reportWebVitals);
  onTTFB(reportWebVitals);
}

// Performance observer for custom metrics
export class PerformanceTracker {
  private static instance: PerformanceTracker;
  private observers: PerformanceObserver[] = [];

  static getInstance(): PerformanceTracker {
    if (!PerformanceTracker.instance) {
      PerformanceTracker.instance = new PerformanceTracker();
    }
    return PerformanceTracker.instance;
  }

  // Track custom timing metrics
  trackTiming(name: string, startTime: number, endTime?: number) {
    const duration = (endTime || performance.now()) - startTime;
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'timing_complete', {
        event_category: 'Performance',
        event_label: name,
        value: Math.round(duration),
      });
    }

    console.log(`[Performance] ${name}: ${duration.toFixed(2)}ms`);
  }

  // Track resource loading
  trackResourceLoading() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          
          // Track slow resources
          if (resourceEntry.duration > 1000) {
            console.warn(`[Performance] Slow resource: ${resourceEntry.name} (${resourceEntry.duration.toFixed(2)}ms)`);
            
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'slow_resource', {
                event_category: 'Performance',
                event_label: resourceEntry.name,
                value: Math.round(resourceEntry.duration),
              });
            }
          }
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });
    this.observers.push(observer);
  }

  // Track long tasks
  trackLongTasks() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        console.warn(`[Performance] Long task detected: ${entry.duration.toFixed(2)}ms`);
        
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'long_task', {
            event_category: 'Performance',
            event_label: 'main_thread_blocking',
            value: Math.round(entry.duration),
          });
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['longtask'] });
      this.observers.push(observer);
    } catch (e) {
      // Long task API not supported
      console.log('[Performance] Long task API not supported');
    }
  }

  // Initialize all tracking
  init() {
    this.trackResourceLoading();
    this.trackLongTasks();
  }

  // Cleanup observers
  cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Bundle size analyzer
export function analyzeBundleSize() {
  if (typeof window === 'undefined') return;

  // Estimate JavaScript bundle size
  const scripts = Array.from(document.querySelectorAll('script[src]'));
  let totalSize = 0;

  scripts.forEach(async (script) => {
    try {
      const scriptElement = script as HTMLScriptElement;
      if (!scriptElement.src) return;
      
      const response = await fetch(scriptElement.src, { method: 'HEAD' });
      const size = parseInt(response.headers.get('content-length') || '0');
      totalSize += size;
      
      console.log(`[Bundle] ${scriptElement.src}: ${(size / 1024).toFixed(2)}KB`);
    } catch (e) {
      console.warn(`[Bundle] Could not analyze: ${(script as HTMLScriptElement).src}`);
    }
  });

  setTimeout(() => {
    console.log(`[Bundle] Total estimated size: ${(totalSize / 1024).toFixed(2)}KB`);
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'bundle_size', {
        event_category: 'Performance',
        value: Math.round(totalSize / 1024),
      });
    }
  }, 1000);
}

// Memory usage tracking
export function trackMemoryUsage() {
  if (typeof window === 'undefined' || !('memory' in performance)) return;

  const memory = (performance as any).memory;
  const memoryInfo = {
    used: Math.round(memory.usedJSHeapSize / 1048576), // MB
    total: Math.round(memory.totalJSHeapSize / 1048576), // MB
    limit: Math.round(memory.jsHeapSizeLimit / 1048576), // MB
  };

  console.log('[Memory]', memoryInfo);

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'memory_usage', {
      event_category: 'Performance',
      custom_map: memoryInfo,
    });
  }

  return memoryInfo;
}

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}