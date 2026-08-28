// Image optimization utilities for Contentful images

export interface ImageTransformOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'jpg' | 'png' | 'webp' | 'avif';
  fit?: 'pad' | 'fill' | 'scale' | 'crop' | 'thumb';
  focus?: 'center' | 'top' | 'right' | 'left' | 'bottom' | 'top_right' | 'top_left' | 'bottom_right' | 'bottom_left' | 'face' | 'faces';
  radius?: number;
  background?: string;
}

/**
 * Generate optimized Contentful image URL with transformations
 */
export function optimizeContentfulImage(
  imageUrl: string,
  options: ImageTransformOptions = {}
): string {
  // Ensure URL starts with https:
  const baseUrl = imageUrl.startsWith('//') ? `https:${imageUrl}` : imageUrl;
  
  // Don't transform if not a Contentful image
  if (!baseUrl.includes('images.ctfassets.net') && !baseUrl.includes('assets.ctfassets.net')) {
    return baseUrl;
  }

  const params = new URLSearchParams();

  // Add transformation parameters
  if (options.width) params.set('w', options.width.toString());
  if (options.height) params.set('h', options.height.toString());
  if (options.quality) params.set('q', Math.min(100, Math.max(1, options.quality)).toString());
  if (options.format) params.set('fm', options.format);
  if (options.fit) params.set('fit', options.fit);
  if (options.focus) params.set('f', options.focus);
  if (options.radius) params.set('r', options.radius.toString());
  if (options.background) params.set('bg', options.background.replace('#', ''));

  // Return URL with parameters
  const separator = baseUrl.includes('?') ? '&' : '?';
  return params.toString() ? `${baseUrl}${separator}${params.toString()}` : baseUrl;
}

/**
 * Generate responsive image srcSet for different screen sizes
 */
export function generateResponsiveSrcSet(
  imageUrl: string,
  options: ImageTransformOptions = {}
): string {
  const breakpoints = [320, 640, 768, 1024, 1280, 1536];
  
  return breakpoints
    .map(width => {
      const optimizedUrl = optimizeContentfulImage(imageUrl, {
        ...options,
        width,
      });
      return `${optimizedUrl} ${width}w`;
    })
    .join(', ');
}

/**
 * Generate sizes attribute for responsive images
 */
export function generateSizesAttribute(breakpoints: Record<string, string>): string {
  const entries = Object.entries(breakpoints);
  
  return entries
    .map(([breakpoint, size], index) => {
      if (index === entries.length - 1) {
        // Last entry doesn't need media query
        return size;
      }
      return `(max-width: ${breakpoint}) ${size}`;
    })
    .join(', ');
}

/**
 * Get optimal image dimensions based on container and device pixel ratio
 */
export function getOptimalDimensions(
  containerWidth: number,
  containerHeight?: number,
  devicePixelRatio: number = 2
): { width: number; height?: number } {
  const optimalWidth = Math.ceil(containerWidth * devicePixelRatio);
  const optimalHeight = containerHeight ? Math.ceil(containerHeight * devicePixelRatio) : undefined;

  return {
    width: optimalWidth,
    height: optimalHeight,
  };
}

/**
 * Generate blur placeholder data URL
 */
export function generateBlurDataURL(
  imageUrl: string,
  width: number = 10,
  height: number = 10
): string {
  const blurUrl = optimizeContentfulImage(imageUrl, {
    width,
    height,
    quality: 10,
    format: 'jpg',
  });

  // Return a data URL that can be used as a blur placeholder
  // In a real implementation, you might want to fetch the tiny image and convert to base64
  return `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==`;
}

/**
 * Preload critical images
 */
export function preloadImage(src: string, options: ImageTransformOptions = {}): void {
  if (typeof window === 'undefined') return;

  const optimizedSrc = optimizeContentfulImage(src, options);
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = optimizedSrc;
  
  document.head.appendChild(link);
}

/**
 * Image format detection and fallback
 */
export function getSupportedFormat(): 'avif' | 'webp' | 'jpg' {
  if (typeof window === 'undefined') return 'jpg';

  // Check for AVIF support
  const avifCanvas = document.createElement('canvas');
  avifCanvas.width = 1;
  avifCanvas.height = 1;
  const avifSupported = avifCanvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
  
  if (avifSupported) return 'avif';

  // Check for WebP support
  const webpCanvas = document.createElement('canvas');
  webpCanvas.width = 1;
  webpCanvas.height = 1;
  const webpSupported = webpCanvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  
  if (webpSupported) return 'webp';

  return 'jpg';
}

/**
 * Calculate aspect ratio from image dimensions
 */
export function calculateAspectRatio(width: number, height: number): number {
  return width / height;
}

/**
 * Get image dimensions from Contentful asset
 */
export function getImageDimensions(asset: any): { width: number; height: number } | null {
  if (!asset?.fields?.file?.details?.image) {
    return null;
  }

  return {
    width: asset.fields.file.details.image.width,
    height: asset.fields.file.details.image.height,
  };
}

/**
 * Common image transformation presets
 */
export const imagePresets = {
  hero: {
    width: 1920,
    height: 1080,
    quality: 85,
    format: 'webp' as const,
    fit: 'fill' as const,
  },
  card: {
    width: 400,
    height: 300,
    quality: 80,
    format: 'webp' as const,
    fit: 'fill' as const,
  },
  thumbnail: {
    width: 150,
    height: 150,
    quality: 75,
    format: 'webp' as const,
    fit: 'fill' as const,
  },
  avatar: {
    width: 100,
    height: 100,
    quality: 80,
    format: 'webp' as const,
    fit: 'fill' as const,
    radius: 50,
  },
  logo: {
    width: 200,
    quality: 95,
    format: 'png' as const,
    fit: 'scale' as const,
  },
} as const;