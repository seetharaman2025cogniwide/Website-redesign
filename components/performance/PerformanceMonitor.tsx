'use client';

import { useEffect, useState } from 'react';
import { PerformanceTracker } from '@/lib/web-vitals';
import { initWebVitals, reportWebVitals, WEB_VITALS_THRESHOLDS, WebVitalName } from '@/lib/web-vitals';

interface PerformanceMonitorProps {
  enableReporting?: boolean;
  debug?: boolean;
}

export function PerformanceMonitorComponent({ 
  enableReporting = true, 
  debug = false 
}: PerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<Record<string, any>>({});

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize web vitals tracking
    initWebVitals();

    // Initialize performance tracker
    const tracker = PerformanceTracker.getInstance();
    tracker.init();

    // Custom metric reporting
    if (enableReporting) {
      const reportCustomMetrics = () => {
        // Track navigation timing
        if (performance.timing) {
          const timing = performance.timing;
          const navigationMetrics = {
            domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
            loadComplete: timing.loadEventEnd - timing.navigationStart,
            firstByte: timing.responseStart - timing.navigationStart,
            domInteractive: timing.domInteractive - timing.navigationStart,
          };

          setMetrics(navigationMetrics);

          if (debug) {
            console.log('Navigation Metrics:', navigationMetrics);
          }

          // Send to analytics
          if (window.gtag) {
            Object.entries(navigationMetrics).forEach(([key, value]) => {
              window.gtag!('event', 'navigation_timing', {
                event_category: 'Performance',
                event_label: key,
                value: Math.round(value),
              });
            });
          }
        }
      };

      // Report after page load
      const timer = setTimeout(reportCustomMetrics, 2000);
      
      return () => {
        clearTimeout(timer);
        tracker.cleanup();
      };
    }

    return () => tracker.cleanup();
  }, [enableReporting, debug]);

  // Show performance overlay in development
  if (debug && process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed top-4 left-4 bg-black text-white p-3 rounded text-xs font-mono z-50 max-w-xs">
        <h3 className="font-bold mb-2">Performance Metrics</h3>
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span>{key}:</span>
            <span>{typeof value === 'number' ? `${value.toFixed(0)}ms` : value}</span>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

// Web Vitals reporting hook
export function useWebVitals(onMetric?: (metric: any) => void) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Use our custom web vitals implementation
    const customReportWebVitals = (metric: any) => {
      // Custom callback
      if (onMetric) {
        onMetric(metric);
      }
      
      // Use our enhanced reporting
      reportWebVitals(metric);
    };

    // Dynamic import of web-vitals library
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(customReportWebVitals);
      onINP(customReportWebVitals);
      onFCP(customReportWebVitals);
      onLCP(customReportWebVitals);
      onTTFB(customReportWebVitals);
    }).catch(error => {
      console.warn('Failed to load web-vitals:', error);
    });
  }, [onMetric]);
}

// Performance budget component
interface PerformanceBudgetProps {
  budget: {
    lcp: number;
    fid: number;
    cls: number;
  };
  onBudgetExceeded?: (violations: string[]) => void;
}

export function PerformanceBudget({ budget, onBudgetExceeded }: PerformanceBudgetProps) {
  useWebVitals((metric) => {
    const violations: string[] = [];
    
    switch (metric.name) {
      case 'LCP':
        if (metric.value > budget.lcp) {
          violations.push(`LCP exceeded: ${metric.value}ms > ${budget.lcp}ms`);
        }
        break;
      case 'FID':
        if (metric.value > budget.fid) {
          violations.push(`FID exceeded: ${metric.value}ms > ${budget.fid}ms`);
        }
        break;
      case 'CLS':
        if (metric.value > budget.cls) {
          violations.push(`CLS exceeded: ${metric.value} > ${budget.cls}`);
        }
        break;
    }
    
    if (violations.length > 0 && onBudgetExceeded) {
      onBudgetExceeded(violations);
    }
  });

  return null;
}