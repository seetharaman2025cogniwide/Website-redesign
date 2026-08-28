// Performance testing utilities for Core Web Vitals and custom metrics

export interface PerformanceTest {
  name: string;
  description: string;
  threshold: number;
  unit: string;
  category: 'web-vitals' | 'custom' | 'resource' | 'runtime';
}

export const PERFORMANCE_TESTS: PerformanceTest[] = [
  // Core Web Vitals
  {
    name: 'LCP',
    description: 'Largest Contentful Paint',
    threshold: 2500,
    unit: 'ms',
    category: 'web-vitals',
  },
  {
    name: 'FID',
    description: 'First Input Delay',
    threshold: 100,
    unit: 'ms',
    category: 'web-vitals',
  },
  {
    name: 'CLS',
    description: 'Cumulative Layout Shift',
    threshold: 0.1,
    unit: 'score',
    category: 'web-vitals',
  },
  {
    name: 'FCP',
    description: 'First Contentful Paint',
    threshold: 1800,
    unit: 'ms',
    category: 'web-vitals',
  },
  {
    name: 'TTFB',
    description: 'Time to First Byte',
    threshold: 800,
    unit: 'ms',
    category: 'web-vitals',
  },
  
  // Custom Performance Metrics
  {
    name: 'TTI',
    description: 'Time to Interactive',
    threshold: 3800,
    unit: 'ms',
    category: 'custom',
  },
  {
    name: 'TBT',
    description: 'Total Blocking Time',
    threshold: 200,
    unit: 'ms',
    category: 'custom',
  },
  {
    name: 'SI',
    description: 'Speed Index',
    threshold: 3400,
    unit: 'ms',
    category: 'custom',
  },
  
  // Resource Performance
  {
    name: 'JS_BUNDLE_SIZE',
    description: 'JavaScript Bundle Size',
    threshold: 250,
    unit: 'KB',
    category: 'resource',
  },
  {
    name: 'CSS_BUNDLE_SIZE',
    description: 'CSS Bundle Size',
    threshold: 50,
    unit: 'KB',
    category: 'resource',
  },
  {
    name: 'IMAGE_LOAD_TIME',
    description: 'Average Image Load Time',
    threshold: 1000,
    unit: 'ms',
    category: 'resource',
  },
  
  // Runtime Performance
  {
    name: 'MEMORY_USAGE',
    description: 'JavaScript Memory Usage',
    threshold: 50,
    unit: 'MB',
    category: 'runtime',
  },
  {
    name: 'LONG_TASKS',
    description: 'Long Tasks Count',
    threshold: 0,
    unit: 'count',
    category: 'runtime',
  },
];

export interface PerformanceResult {
  test: PerformanceTest;
  value: number;
  passed: boolean;
  timestamp: number;
  url: string;
  userAgent: string;
}

export class PerformanceTester {
  private results: PerformanceResult[] = [];
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeObservers();
  }

  private initializeObservers() {
    if (typeof window === 'undefined') return;

    // Long tasks observer
    if ('PerformanceObserver' in window) {
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          const longTasks = list.getEntries();
          this.recordResult('LONG_TASKS', longTasks.length);
        });
        longTaskObserver.observe({ entryTypes: ['longtask'] });
        this.observers.push(longTaskObserver);
      } catch (e) {
        console.warn('Long task observer not supported');
      }

      // Resource timing observer
      const resourceObserver = new PerformanceObserver((list) => {
        const resources = list.getEntries() as PerformanceResourceTiming[];
        this.analyzeResources(resources);
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);
    }
  }

  private analyzeResources(resources: PerformanceResourceTiming[]) {
    let jsSize = 0;
    let cssSize = 0;
    let imageLoadTimes: number[] = [];

    resources.forEach((resource) => {
      const url = resource.name;
      const size = resource.transferSize || 0;
      const loadTime = resource.responseEnd - resource.requestStart;

      if (url.includes('.js')) {
        jsSize += size;
      } else if (url.includes('.css')) {
        cssSize += size;
      } else if (url.match(/\\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
        imageLoadTimes.push(loadTime);
      }
    });

    // Record results
    if (jsSize > 0) {
      this.recordResult('JS_BUNDLE_SIZE', Math.round(jsSize / 1024));
    }
    if (cssSize > 0) {
      this.recordResult('CSS_BUNDLE_SIZE', Math.round(cssSize / 1024));
    }
    if (imageLoadTimes.length > 0) {
      const avgImageLoadTime = imageLoadTimes.reduce((a, b) => a + b, 0) / imageLoadTimes.length;
      this.recordResult('IMAGE_LOAD_TIME', Math.round(avgImageLoadTime));
    }
  }

  private recordResult(testName: string, value: number) {
    const test = PERFORMANCE_TESTS.find(t => t.name === testName);
    if (!test) return;

    const result: PerformanceResult = {
      test,
      value,
      passed: value <= test.threshold,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    this.results.push(result);

    // Log result
    const status = result.passed ? '[PASS]' : '[FAIL]';
    console.log(`${status} ${test.description}: ${value}${test.unit} (threshold: ${test.threshold}${test.unit})`);

    // Send to analytics
    if (window.gtag) {
      window.gtag('event', 'performance_test', {
        event_category: 'Performance',
        event_label: testName,
        value: Math.round(value),
        custom_map: {
          passed: result.passed,
          threshold: test.threshold,
        },
      });
    }
  }

  // Test memory usage
  testMemoryUsage() {
    if (typeof window === 'undefined' || !('memory' in performance)) return;

    const memory = (performance as any).memory;
    const usedMB = Math.round(memory.usedJSHeapSize / 1048576);
    this.recordResult('MEMORY_USAGE', usedMB);
  }

  // Test Time to Interactive (simplified)
  testTimeToInteractive() {
    if (typeof window === 'undefined') return;

    // Wait for page to be fully loaded
    if (document.readyState === 'complete') {
      const tti = performance.now();
      this.recordResult('TTI', Math.round(tti));
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const tti = performance.now();
          this.recordResult('TTI', Math.round(tti));
        }, 100);
      });
    }
  }

  // Run all tests
  runAllTests() {
    this.testMemoryUsage();
    this.testTimeToInteractive();

    // Test Total Blocking Time (simplified)
    setTimeout(() => {
      const longTasks = this.results.filter(r => r.test.name === 'LONG_TASKS');
      if (longTasks.length > 0) {
        const tbt = longTasks.reduce((sum, task) => sum + Math.max(0, task.value - 50), 0);
        this.recordResult('TBT', tbt);
      }
    }, 5000);
  }

  // Get test results
  getResults(): PerformanceResult[] {
    return [...this.results];
  }

  // Get failed tests
  getFailedTests(): PerformanceResult[] {
    return this.results.filter(result => !result.passed);
  }

  // Get performance score (0-100)
  getPerformanceScore(): number {
    if (this.results.length === 0) return 0;

    const passedTests = this.results.filter(result => result.passed).length;
    return Math.round((passedTests / this.results.length) * 100);
  }

  // Generate performance report
  generateReport(): string {
    const score = this.getPerformanceScore();
    const failedTests = this.getFailedTests();
    
    let report = `Performance Score: ${score}/100\\n\\n`;
    
    if (failedTests.length > 0) {
      report += 'Failed Tests:\\n';
      failedTests.forEach(result => {
        report += `[FAIL] ${result.test.description}: ${result.value}${result.test.unit} (threshold: ${result.test.threshold}${result.test.unit})\\n`;
      });
    } else {
      report += '[PASS] All performance tests passed!';
    }

    return report;
  }

  // Cleanup observers
  cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Lighthouse-style performance audit
export class PerformanceAuditor {
  private static instance: PerformanceAuditor;

  static getInstance(): PerformanceAuditor {
    if (!PerformanceAuditor.instance) {
      PerformanceAuditor.instance = new PerformanceAuditor();
    }
    return PerformanceAuditor.instance;
  }

  // Audit page performance
  async auditPage(): Promise<{
    score: number;
    metrics: Record<string, number>;
    opportunities: string[];
    diagnostics: string[];
  }> {
    const metrics: Record<string, number> = {};
    const opportunities: string[] = [];
    const diagnostics: string[] = [];

    // Check for render-blocking resources
    const stylesheets = document.querySelectorAll('link[rel=\"stylesheet\"]');
    if (stylesheets.length > 3) {
      opportunities.push(`Reduce render-blocking stylesheets (${stylesheets.length} found)`);
    }

    // Check for unused CSS
    const cssRules = Array.from(document.styleSheets).reduce((total, sheet) => {
      try {
        return total + (sheet.cssRules?.length || 0);
      } catch {
        return total;
      }
    }, 0);
    
    if (cssRules > 1000) {
      opportunities.push(`Consider removing unused CSS (${cssRules} rules found)`);
    }

    // Check image optimization
    const images = document.querySelectorAll('img');
    let unoptimizedImages = 0;
    
    images.forEach(img => {
      if (!img.src.includes('.webp') && !img.src.includes('.avif')) {
        unoptimizedImages++;
      }
    });

    if (unoptimizedImages > 0) {
      opportunities.push(`Serve images in next-gen formats (${unoptimizedImages} images could be optimized)`);
    }

    // Check for JavaScript issues
    const scripts = document.querySelectorAll('script[src]');
    if (scripts.length > 10) {
      diagnostics.push(`Consider reducing JavaScript bundles (${scripts.length} scripts found)`);
    }

    // Calculate score based on opportunities and diagnostics
    const issueCount = opportunities.length + diagnostics.length;
    const score = Math.max(0, 100 - (issueCount * 10));

    return {
      score,
      metrics,
      opportunities,
      diagnostics,
    };
  }
}

// Global performance tester instance
export const performanceTester = typeof window !== 'undefined' ? new PerformanceTester() : null;

// Initialize performance testing
export function initPerformanceTesting() {
  if (typeof window === 'undefined') return;

  // Run tests after page load
  if (document.readyState === 'complete') {
    performanceTester?.runAllTests();
  } else {
    window.addEventListener('load', () => {
      setTimeout(() => {
        performanceTester?.runAllTests();
      }, 1000);
    });
  }

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    performanceTester?.cleanup();
  });
}

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}