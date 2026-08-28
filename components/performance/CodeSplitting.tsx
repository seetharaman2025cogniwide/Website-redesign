'use client';

import { lazy, Suspense, ComponentType, ReactNode, useState, useRef, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// Generic lazy loading wrapper with error boundary
interface LazyWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  errorFallback?: ComponentType<{ error: Error; resetErrorBoundary: () => void }>;
}

export function LazyWrapper({ 
  children, 
  fallback = <div className="animate-pulse bg-gray-200 h-32 rounded" />,
  errorFallback: ErrorFallback = DefaultErrorFallback 
}: LazyWrapperProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}

// Default error fallback component
function DefaultErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div className="p-4 border border-red-200 rounded-lg bg-red-50">
      <h3 className="text-red-800 font-semibold mb-2">Something went wrong</h3>
      <p className="text-red-600 text-sm mb-3">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}

// Lazy load components with loading states
export const LazyComponents = {
  // Product components
  ROICalculator: lazy(() => import('@/components/products/ROICalculator')),
  InteractiveDemo: lazy(() => import('@/components/products/InteractiveDemo')),
  ArchitectureDiagram: lazy(() => import('@/components/products/ArchitectureDiagram')),
  
  // AI components
  ChatbotDemo: lazy(() => import('@/components/ai/ChatbotDemo')),
  SemanticSearch: lazy(() => import('@/components/ai/SemanticSearch')),
  
  // Contact components
  ContactForm: lazy(() => import('@/components/contact/ContactForm')),
  
  // Performance components (temporarily disabled to fix lazy loading issues)
  // PerformanceMonitor: lazy(() => import('@/components/performance/PerformanceMonitor').then(module => ({ default: module.PerformanceMonitorComponent }))),
  // BundleAnalyzer: lazy(() => import('@/components/performance/BundleAnalyzer').then(module => ({ default: module.BundleAnalyzer }))),
};

// Loading skeletons for different component types
export const LoadingSkeletons = {
  Card: () => (
    <div className="animate-pulse">
      <div className="bg-gray-200 h-48 rounded-lg mb-4" />
      <div className="bg-gray-200 h-4 rounded mb-2" />
      <div className="bg-gray-200 h-4 rounded w-3/4" />
    </div>
  ),
  
  Form: () => (
    <div className="animate-pulse space-y-4">
      <div className="bg-gray-200 h-10 rounded" />
      <div className="bg-gray-200 h-10 rounded" />
      <div className="bg-gray-200 h-24 rounded" />
      <div className="bg-gray-200 h-10 rounded w-32" />
    </div>
  ),
  
  Chart: () => (
    <div className="animate-pulse">
      <div className="bg-gray-200 h-64 rounded-lg" />
    </div>
  ),
  
  Hero: () => (
    <div className="animate-pulse">
      <div className="bg-gray-200 h-12 rounded mb-4" />
      <div className="bg-gray-200 h-6 rounded mb-6 w-3/4" />
      <div className="bg-gray-200 h-10 rounded w-32" />
    </div>
  ),
  
  List: ({ items = 3 }: { items?: number }) => (
    <div className="animate-pulse space-y-3">
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="flex space-x-3">
          <div className="bg-gray-200 h-12 w-12 rounded" />
          <div className="flex-1 space-y-2">
            <div className="bg-gray-200 h-4 rounded" />
            <div className="bg-gray-200 h-3 rounded w-3/4" />
          </div>
        </div>
      ))}
    </div>
  ),
};

// Route-based code splitting helper
export function createLazyRoute<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  fallback?: ReactNode
) {
  const LazyComponent = lazy(importFn);
  
  return function LazyRoute(props: any) {
    return (
      <LazyWrapper fallback={fallback}>
        <LazyComponent {...props} />
      </LazyWrapper>
    );
  };
}

// Intersection Observer based lazy loading
interface IntersectionLazyProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export function IntersectionLazy({
  children,
  fallback = <div className="h-32 bg-gray-100 animate-pulse rounded" />,
  rootMargin = '50px',
  threshold = 0.1,
  triggerOnce = true,
}: IntersectionLazyProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasTriggered(true);
          }
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold, triggerOnce, hasTriggered]);

  return (
    <div ref={ref}>
      {isVisible ? children : fallback}
    </div>
  );
}

// Bundle splitting utilities
export const BundleSplits = {
  // Vendor libraries
  charts: () => import('recharts'),
  animations: () => import('framer-motion'),
  forms: () => import('react-hook-form'),
  
  // Feature modules
  cms: () => import('@/lib/cms-api'),
};

// Dynamic import with retry logic
export async function dynamicImportWithRetry<T>(
  importFn: () => Promise<T>,
  retries = 3,
  delay = 1000
): Promise<T> {
  try {
    return await importFn();
  } catch (error) {
    if (retries > 0) {
      await new Promise(resolve => setTimeout(resolve, delay));
      return dynamicImportWithRetry(importFn, retries - 1, delay * 2);
    }
    throw error;
  }
}

// Preload critical components
export function preloadCriticalComponents() {
  if (typeof window === 'undefined') return;

  // Preload components likely to be needed soon
  const criticalComponents = [
    () => import('@/components/contact/ContactForm'),
    () => import('@/components/ai/ChatbotDemo'),
    () => import('@/components/products/ROICalculator'),
  ];

  // Use requestIdleCallback if available
  const preload = () => {
    criticalComponents.forEach(importFn => {
      importFn().catch(() => {
        // Ignore preload errors
      });
    });
  };

  if ('requestIdleCallback' in window) {
    requestIdleCallback(preload);
  } else {
    setTimeout(preload, 2000);
  }
}

// Component size analyzer (development only)
export function analyzeComponentSize(componentName: string, importFn: () => Promise<any>) {
  if (process.env.NODE_ENV !== 'development') return importFn();

  const startTime = performance.now();
  
  return importFn().then(module => {
    const endTime = performance.now();
    const loadTime = endTime - startTime;
    
    console.log(`[Code Splitting] ${componentName} loaded in ${loadTime.toFixed(2)}ms`);
    
    // Estimate bundle size (rough approximation)
    const moduleString = JSON.stringify(module);
    const estimatedSize = new Blob([moduleString]).size;
    
    console.log(`[Code Splitting] ${componentName} estimated size: ${(estimatedSize / 1024).toFixed(2)}KB`);
    
    return module;
  });
}