'use client';

import { useEffect } from 'react';

// Critical CSS inlining component
export function CriticalCSS() {
  useEffect(() => {
    // Load non-critical CSS asynchronously
    const loadCSS = (href: string) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = 'print';
      link.onload = () => {
        link.media = 'all';
      };
      document.head.appendChild(link);
    };

    // Load non-critical stylesheets
    const nonCriticalStyles = [
      '/css/animations.css',
      '/css/components.css',
    ];

    nonCriticalStyles.forEach(loadCSS);
  }, []);

  return (
    <style jsx>{`
      /* Critical above-the-fold styles */
      .hero-section {
        background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .hero-title {
        font-size: 3.5rem;
        font-weight: 500;
        line-height: 1.1;
        color: #1f2937;
        margin-bottom: 1.5rem;
      }
      
      .hero-subtitle {
        font-size: 1.25rem;
        color: #6b7280;
        margin-bottom: 2rem;
        max-width: 600px;
      }
      
      .btn-primary {
        background-color: #fbbf24;
        color: #1f2937;
        padding: 0.75rem 2rem;
        border-radius: 0.5rem;
        font-weight: 500;
        text-decoration: none;
        display: inline-block;
        transition: background-color 0.2s ease;
      }
      
      .btn-primary:hover {
        background-color: #f59e0b;
      }
      
      .navigation {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        z-index: 50;
        padding: 1rem 0;
      }
      
      @media (max-width: 768px) {
        .hero-title {
          font-size: 2.5rem;
        }
        
        .hero-subtitle {
          font-size: 1.125rem;
        }
      }
    `}</style>
  );
}

// Font loading optimization
export function FontOptimization() {
  useEffect(() => {
    // Preload critical fonts
    const preloadFont = (href: string, type: string = 'font/woff2') => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = type;
      link.crossOrigin = 'anonymous';
      link.href = href;
      document.head.appendChild(link);
    };

    // Using Google Fonts, so no local font loading needed

    // Font display optimization is handled by Google Fonts
    if ('fonts' in document) {
      // Google Fonts handles font loading automatically
      console.log('Using Google Fonts for font loading');
    } else {
      console.warn('Font API not supported');
    }
  }, []);

  return null;
}

// Resource hints component
export function ResourceHints() {
  useEffect(() => {
    // DNS prefetch for external domains
    const dnsPrefetch = (domain: string) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    };

    // Preconnect for critical external resources
    const preconnect = (domain: string) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    };

    // External domains
    dnsPrefetch('//fonts.googleapis.com');
    dnsPrefetch('//www.google-analytics.com');
    dnsPrefetch('//images.ctfassets.net');

    preconnect('https://fonts.gstatic.com');
    preconnect('https://images.ctfassets.net');

    // Prefetch likely next pages
    const prefetchPage = (href: string) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    };

    // Prefetch common next pages after initial load
    setTimeout(() => {
      prefetchPage('/products');
      prefetchPage('/services');
      prefetchPage('/industries');
    }, 2000);
  }, []);

  return null;
}