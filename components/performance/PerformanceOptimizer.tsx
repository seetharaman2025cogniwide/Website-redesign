'use client';

import { useEffect, useState } from 'react';
import { PerformanceMonitorComponent, useWebVitals } from './PerformanceMonitor';
import { BundleAnalyzer, PerformanceBudget } from './BundleAnalyzer';
import { preloadCriticalComponents } from './CodeSplitting';
import { CacheManager } from '@/lib/caching';
import { PerformanceDashboard, PerformanceWidget } from './PerformanceDashboard';
import { initPerformanceTesting } from '@/lib/performance-testing';

interface PerformanceOptimizerProps {
  enableMonitoring?: boolean;
  enableBundleAnalysis?: boolean;
  enableCaching?: boolean;
  performanceBudget?: {
    javascript: number;
    css: number;
    images: number;
    fonts: number;
  };
  webVitalsBudget?: {
    lcp: number;
    fid: number;
    cls: number;
  };
}

export function PerformanceOptimizer({
  enableMonitoring = true,
  enableBundleAnalysis = process.env.NODE_ENV === 'development',
  enableCaching = true,
  performanceBudget = {
    javascript: 250, // KB
    css: 50,        // KB
    images: 500,    // KB
    fonts: 100,     // KB
  },
  webVitalsBudget = {
    lcp: 2500,  // ms
    fid: 100,   // ms
    cls: 0.1,   // score
  },
}: PerformanceOptimizerProps) {
  const [violations, setViolations] = useState<string[]>([]);
  const [cacheStats, setCacheStats] = useState<any>(null);

  // Initialize performance optimizations
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize performance testing
    initPerformanceTesting();

    // Preload critical components
    preloadCriticalComponents();

    // Initialize caching
    if (enableCaching) {
      const cacheManager = CacheManager.getInstance();

      // Create default caches
      cacheManager.createMemoryCache('api-responses', { ttl: 5 * 60 * 1000 });
      cacheManager.createMemoryCache('search-results', { ttl: 2 * 60 * 1000 });
      cacheManager.createStorageCache('user-preferences', 'localStorage');

      // Update cache stats periodically
      const updateStats = () => {
        setCacheStats(cacheManager.getStats());
      };

      updateStats();
      const interval = setInterval(updateStats, 30000); // Every 30 seconds

      return () => clearInterval(interval);
    }
  }, [enableCaching]);

  // Handle web vitals budget violations
  useWebVitals((metric) => {
    const newViolations: string[] = [];

    switch (metric.name) {
      case 'LCP':
        if (metric.value > webVitalsBudget.lcp) {
          newViolations.push(`LCP budget exceeded: ${metric.value.toFixed(0)}ms > ${webVitalsBudget.lcp}ms`);
        }
        break;
      case 'FID':
        if (metric.value > webVitalsBudget.fid) {
          newViolations.push(`FID budget exceeded: ${metric.value.toFixed(0)}ms > ${webVitalsBudget.fid}ms`);
        }
        break;
      case 'CLS':
        if (metric.value > webVitalsBudget.cls) {
          newViolations.push(`CLS budget exceeded: ${metric.value.toFixed(3)} > ${webVitalsBudget.cls}`);
        }
        break;
    }

    if (newViolations.length > 0) {
      setViolations(prev => [...prev, ...newViolations]);

      // Send to analytics in production
      if (process.env.NODE_ENV === 'production' && window.gtag) {
        newViolations.forEach(violation => {
          window.gtag!('event', 'performance_budget_violation', {
            event_category: 'Performance',
            event_label: violation,
          });
        });
      }
    }
  });

  // Resource hints for better performance
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Add DNS prefetch for external domains
    const addDNSPrefetch = (domain: string) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    };

    // Add preconnect for critical external resources
    const addPreconnect = (domain: string) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = `//${domain}`;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    };

    // Common external domains
    const externalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'www.google-analytics.com',
      'www.googletagmanager.com',
    ];

    externalDomains.forEach(domain => {
      addDNSPrefetch(domain);
      if (domain.includes('fonts') || domain.includes('analytics')) {
        addPreconnect(domain);
      }
    });

    // Preload critical fonts
    const preloadFont = (fontPath: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = fontPath;
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    };

    // Using Google Fonts, so no local font preloading needed
  }, []);

  // Performance monitoring overlay (development only)
  if (process.env.NODE_ENV === 'development' && violations.length > 0) {
    return (
      <>
        {enableMonitoring && <PerformanceMonitorComponent enableReporting debug />}
        {enableBundleAnalysis && (
          <>
            <BundleAnalyzer />
            <PerformanceBudget budgets={performanceBudget} />
          </>
        )}

        {/* Violations overlay */}
        <div className="fixed top-4 right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg text-sm max-w-md z-50">
          <h3 className="font-bold mb-2 flex items-center">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.29 3.86L1.82 18C1.64 18.37 1.54 18.78 1.54 19.2C1.54 19.62 1.64 20.03 1.82 20.4C2 20.77 2.26 21.09 2.59 21.33C2.92 21.57 3.31 21.72 3.71 21.76H20.29C20.69 21.72 21.08 21.57 21.41 21.33C21.74 21.09 22 20.77 22.18 20.4C22.36 20.03 22.46 19.62 22.46 19.2C22.46 18.78 22.36 18.37 22.18 18L13.71 3.86C13.53 3.49 13.27 3.17 12.94 2.93C12.61 2.69 12.22 2.54 11.82 2.5C11.42 2.54 11.03 2.69 10.7 2.93C10.37 3.17 10.11 3.49 9.93 3.86H10.29Z" stroke="currentColor" stroke-width="2" />
              <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" stroke-width="2" />
              <circle cx="12" cy="17" r="1" fill="currentColor" />
            </svg>
            Performance Issues
          </h3>
          <ul className="space-y-1 text-xs">
            {violations.slice(-5).map((violation, index) => (
              <li key={index} className="opacity-90">{violation}</li>
            ))}
          </ul>
          <button
            onClick={() => setViolations([])}
            className="mt-2 text-xs underline hover:no-underline"
          >
            Clear
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      {enableMonitoring && <PerformanceMonitorComponent enableReporting />}
      {enableBundleAnalysis && (
        <>
          <BundleAnalyzer />
          <PerformanceBudget budgets={performanceBudget} />
          <PerformanceDashboard />
        </>
      )}
      <PerformanceWidget />
    </>
  );
}

// Critical resource preloader
export function CriticalResourcePreloader() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Preload critical images
    const criticalImages = [
      '/images/hero-bg.webp',
      '/images/logo.svg',
      '/images/CogniAssist-hero.webp',
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      document.head.appendChild(link);
    });

    // Preload critical CSS - temporarily disabled due to build issues
    // const criticalCSS = [
    //   '/_next/static/css/app.css',
    // ];

    // criticalCSS.forEach(href => {
    //   const link = document.createElement('link');
    //   link.rel = 'preload';
    //   link.href = href;
    //   link.as = 'style';
    //   document.head.appendChild(link);
    // });

    // Preconnect to critical domains
    const domains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdn.simpleicons.org'
    ];

    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);

  return null;
}

// Service Worker registration for caching
export function ServiceWorkerRegistration() {
  useEffect(() => {
    const isClient = typeof window !== 'undefined'
    const isProd = process.env.NODE_ENV === 'production'

    if (isClient && 'serviceWorker' in navigator && isProd) {
      // Unregister any existing SW first to avoid stale caches on deploys
      navigator.serviceWorker.getRegistrations?.().then((regs) => {
        regs.forEach((reg) => reg.unregister())
      }).finally(() => {
        navigator.serviceWorker
          .register('/sw.js')
          .then(registration => {
            // Service worker registered silently
          })
          .catch(registrationError => {
            // Service worker registration failed silently
          })
      })
    }
  }, [])

  return null
}

// Dev-only cleanup to prevent stale chunks from cached Service Workers
export function DevServiceWorkerCleanup() {
  // Disabled continuous unregistration as it aborts active network requests
  return null
}