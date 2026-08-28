'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  fill?: boolean;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  sizes,
  fill = false,
  loading = 'lazy',
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [loadTime, setLoadTime] = useState<number | null>(null);

  useEffect(() => {
    const startTime = performance.now();
    
    const handleLoad = () => {
      const endTime = performance.now();
      setLoadTime(endTime - startTime);
      setIsLoaded(true);
      onLoad?.();
    };

    const handleError = () => {
      setHasError(true);
      onError?.();
    };

    // Track image loading performance
    if (typeof window !== 'undefined' && window.gtag && loadTime) {
      window.gtag('event', 'image_load_time', {
        event_category: 'Performance',
        event_label: src,
        value: Math.round(loadTime),
      });
    }

    return () => {
      if (loadTime && process.env.NODE_ENV === 'development') {
        console.log(`[Image] ${src} loaded in ${loadTime.toFixed(2)}ms`);
      }
    };
  }, [src, loadTime, onLoad, onError]);

  // Generate blur placeholder if not provided
  const generateBlurDataURL = (width: number, height: number) => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#f3f4f6';
      ctx.fillRect(0, 0, width, height);
    }
    return canvas.toDataURL();
  };

  // Error fallback component
  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <svg
          className="w-8 h-8 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    );
  }

  const imageProps = {
    src,
    alt,
    className: `${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`,
    priority,
    quality,
    placeholder,
    blurDataURL: blurDataURL || (width && height ? generateBlurDataURL(width, height) : undefined),
    sizes,
    loading,
    onLoad: () => {
      const endTime = performance.now();
      setLoadTime(endTime);
      setIsLoaded(true);
      onLoad?.();
    },
    onError: () => {
      setHasError(true);
      onError?.();
    },
  };

  if (fill) {
    return <Image {...imageProps} fill />;
  }

  return (
    <Image
      {...imageProps}
      width={width}
      height={height}
    />
  );
}

// Progressive image loading component
interface ProgressiveImageProps {
  src: string;
  lowQualitySrc?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function ProgressiveImage({
  src,
  lowQualitySrc,
  alt,
  width,
  height,
  className = '',
}: ProgressiveImageProps) {
  const [isHighQualityLoaded, setIsHighQualityLoaded] = useState(false);
  const [isLowQualityLoaded, setIsLowQualityLoaded] = useState(false);

  // Generate low quality src if not provided
  const getLowQualitySrc = () => {
    if (lowQualitySrc) return lowQualitySrc;
    
    // For Next.js Image optimization, add quality parameter
    if (src.startsWith('/')) {
      return `${src}?q=10&w=${Math.round(width / 4)}`;
    }
    
    return src;
  };

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {/* Low quality image */}
      <Image
        src={getLowQualitySrc()}
        alt={alt}
        width={width}
        height={height}
        className={`absolute inset-0 transition-opacity duration-300 ${
          isHighQualityLoaded ? 'opacity-0' : 'opacity-100'
        } filter blur-sm scale-110`}
        quality={10}
        priority
        onLoad={() => setIsLowQualityLoaded(true)}
      />
      
      {/* High quality image */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`absolute inset-0 transition-opacity duration-500 ${
          isHighQualityLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        quality={85}
        loading="lazy"
        onLoad={() => setIsHighQualityLoaded(true)}
      />
      
      {/* Loading indicator */}
      {!isLowQualityLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}

// Image gallery with lazy loading
interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
  className?: string;
}

export function ImageGallery({ images, className = '' }: ImageGalleryProps) {
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleImages(prev => new Set([...Array.from(prev), index]));
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    const imageElements = document.querySelectorAll('[data-index]');
    imageElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {images.map((image, index) => (
        <div
          key={index}
          data-index={index}
          className="aspect-video bg-gray-200 rounded-lg overflow-hidden"
        >
          {visibleImages.has(index) ? (
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 animate-pulse" />
          )}
        </div>
      ))}
    </div>
  );
}

// WebP support detection and fallback
export function useWebPSupport() {
  const [supportsWebP, setSupportsWebP] = useState<boolean | null>(null);

  useEffect(() => {
    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      const dataURL = canvas.toDataURL('image/webp');
      setSupportsWebP(dataURL.indexOf('data:image/webp') === 0);
    };

    checkWebPSupport();
  }, []);

  return supportsWebP;
}

// Smart image format selector
export function getOptimalImageSrc(baseSrc: string, supportsWebP: boolean | null) {
  if (supportsWebP === null) return baseSrc; // Loading state
  
  if (supportsWebP && !baseSrc.endsWith('.svg')) {
    // Convert to WebP if supported and not SVG
    return baseSrc.replace(/\\.(jpg|jpeg|png)$/i, '.webp');
  }
  
  return baseSrc;
}