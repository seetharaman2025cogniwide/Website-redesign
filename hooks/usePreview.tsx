'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function usePreview() {
  const [isPreview, setIsPreview] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if we're in preview mode by looking for preview cookies
    const hasPreviewCookie = document.cookie.includes('__prerender_bypass');
    setIsPreview(hasPreviewCookie);
  }, []);

  const exitPreview = async () => {
    try {
      await fetch('/api/preview', { method: 'POST' });
      setIsPreview(false);
      router.refresh();
    } catch (error) {
      console.error('Error exiting preview mode:', error);
    }
  };

  return {
    isPreview,
    exitPreview,
  };
}

// Preview banner component
export function PreviewBanner() {
  const { isPreview, exitPreview } = usePreview();

  if (!isPreview) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-yellow-400 text-black px-4 py-2 text-center text-sm font-medium">
      <span className="mr-4">
        <svg className="w-4 h-4 mr-2 inline" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
          <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2"/>
        </svg>
        Preview Mode Active - You are viewing draft content
      </span>
      <button
        onClick={exitPreview}
        className="bg-black text-yellow-400 px-3 py-1 rounded text-xs hover:bg-gray-800 transition-colors"
      >
        Exit Preview
      </button>
    </div>
  );
}