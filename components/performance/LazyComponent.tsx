'use client';

import { lazy, Suspense, ComponentType, ReactNode, useState, useEffect } from 'react';
import { createIntersectionObserver } from '@/lib/performance';

interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
}

// Higher-order component for lazy loading
export function withLazyLoading<P extends object>(
  Component: ComponentType<P>,
  fallback?: ReactNode
) {
  return function LazyLoadedComponent(props: P) {
    return (
      <Suspense fallback={fallback || <ComponentSkeleton />}>
        <Component {...props} />
      </Suspense>
    );
  };
}

// Intersection observer based lazy loading
export function LazySection({ 
  children, 
  fallback, 
  rootMargin = '100px',
  threshold = 0.1 
}: LazyComponentProps) {
  return (
    <IntersectionObserverWrapper
      rootMargin={rootMargin}
      threshold={threshold}
      fallback={fallback}
    >
      {children}
    </IntersectionObserverWrapper>
  );
}

interface IntersectionObserverWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
}

function IntersectionObserverWrapper({
  children,
  fallback,
  rootMargin = '100px',
  threshold = 0.1,
}: IntersectionObserverWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = createIntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer?.disconnect();
          }
        });
      },
      { rootMargin, threshold }
    );

    if (observer) {
      observer.observe(ref);
      return () => observer.disconnect();
    } else {
      // Fallback for browsers without IntersectionObserver
      setIsVisible(true);
    }
  }, [ref, rootMargin, threshold]);

  return (
    <div ref={setRef}>
      {isVisible ? children : (fallback || <ComponentSkeleton />)}
    </div>
  );
}

// Default skeleton component
function ComponentSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );
}

// Specific skeletons for different components
export function HeroSkeleton() {
  return (
    <div className="animate-pulse bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="h-12 bg-gray-200 rounded w-3/4 mx-auto mb-6"></div>
        <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-8"></div>
        <div className="flex justify-center space-x-4">
          <div className="h-12 bg-gray-200 rounded w-32"></div>
          <div className="h-12 bg-gray-200 rounded w-32"></div>
        </div>
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="animate-pulse bg-white rounded-lg shadow p-6">
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
      </div>
      <div className="h-10 bg-gray-200 rounded w-24"></div>
    </div>
  );
}

export function ProductSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-96 bg-gray-200 rounded-lg mb-8"></div>
      <div className="space-y-6">
        <div className="h-8 bg-gray-200 rounded w-1/2"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Lazy loading hook
export function useLazyLoading(threshold: number = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState<Element | null>(null);

  useEffect(() => {
    if (!element) return;

    const observer = createIntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer?.disconnect();
          }
        });
      },
      { threshold }
    );

    if (observer) {
      observer.observe(element);
      return () => observer.disconnect();
    } else {
      setIsVisible(true);
    }
  }, [element, threshold]);

  return { isVisible, setElement };
}