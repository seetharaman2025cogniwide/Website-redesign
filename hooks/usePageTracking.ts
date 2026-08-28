'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { usePersonalization } from '@/components/personalization/PersonalizationProvider';

export function usePageTracking() {
  const pathname = usePathname();
  const { trackPageVisit } = usePersonalization();
  const startTime = useRef<number>(Date.now());
  const lastPathname = useRef<string>('');

  useEffect(() => {
    // Track page visit when pathname changes
    if (pathname !== lastPathname.current) {
      // Calculate duration on previous page
      if (lastPathname.current) {
        const duration = Math.round((Date.now() - startTime.current) / 1000);
        trackPageVisit(lastPathname.current, duration);
      }

      // Start tracking new page
      startTime.current = Date.now();
      lastPathname.current = pathname;
    }

    // Track page visit on mount (for initial page load)
    if (!lastPathname.current) {
      lastPathname.current = pathname;
    }

    // Cleanup function to track final page duration
    return () => {
      if (lastPathname.current) {
        const duration = Math.round((Date.now() - startTime.current) / 1000);
        trackPageVisit(lastPathname.current, duration);
      }
    };
  }, [pathname, trackPageVisit]);

  // Track page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is hidden, track duration
        const duration = Math.round((Date.now() - startTime.current) / 1000);
        trackPageVisit(pathname, duration);
      } else {
        // Page is visible again, restart timer
        startTime.current = Date.now();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [pathname, trackPageVisit]);

  // Track page unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      const duration = Math.round((Date.now() - startTime.current) / 1000);
      trackPageVisit(pathname, duration);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [pathname, trackPageVisit]);
}

// Hook for tracking specific interactions
export function useInteractionTracking() {
  const { trackInteraction } = usePersonalization();

  const trackClick = (target: string, metadata?: any) => {
    trackInteraction({
      type: 'click',
      target,
      metadata,
    });
  };

  const trackDownload = (target: string, metadata?: any) => {
    trackInteraction({
      type: 'download',
      target,
      metadata,
    });
  };

  const trackFormSubmit = (target: string, metadata?: any) => {
    trackInteraction({
      type: 'form_submit',
      target,
      metadata,
    });
  };

  const trackDemoRequest = (target: string, metadata?: any) => {
    trackInteraction({
      type: 'demo_request',
      target,
      metadata,
    });
  };

  return {
    trackClick,
    trackDownload,
    trackFormSubmit,
    trackDemoRequest,
  };
}