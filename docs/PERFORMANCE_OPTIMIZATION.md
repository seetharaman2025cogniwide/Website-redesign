# Performance Optimization Guide

This document outlines the comprehensive performance optimization system implemented for the CogniWide enterprise website.

## Overview

Our performance optimization system focuses on achieving excellent Core Web Vitals scores and providing a fast, responsive user experience across all devices and network conditions.

## Key Features

### 1. Web Vitals Monitoring
- **Real-time tracking** of Core Web Vitals (LCP, FID, CLS, FCP, TTFB)
- **Custom reporting** to analytics services
- **Performance budgets** with violation alerts
- **Automated testing** and continuous monitoring

### 2. Image Optimization
- **Next.js Image component** with automatic optimization
- **WebP/AVIF format support** with fallbacks
- **Progressive loading** for better perceived performance
- **Lazy loading** with intersection observer
- **Responsive images** with proper sizing

### 3. Code Splitting & Lazy Loading
- **Route-based code splitting** for optimal bundle sizes
- **Component-level lazy loading** with error boundaries
- **Dynamic imports** with retry logic
- **Critical resource preloading**
- **Bundle analysis** tools for optimization

### 4. Caching Strategy
- **Multi-level caching** (memory, storage, service worker)
- **Stale-while-revalidate** for optimal UX
- **Cache invalidation** strategies
- **Offline support** with service worker

### 5. Performance Testing
- **Automated performance audits**
- **Custom metrics tracking**
- **Performance budgets enforcement**
- **Lighthouse-style scoring**

## Implementation Details

### Core Web Vitals Thresholds

```typescript
const WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, needsImprovement: 4000 }, // ms
  FID: { good: 100, needsImprovement: 300 },   // ms
  CLS: { good: 0.1, needsImprovement: 0.25 },  // score
  FCP: { good: 1800, needsImprovement: 3000 }, // ms
  TTFB: { good: 800, needsImprovement: 1800 }, // ms
};
```

### Performance Budgets

```typescript
const performanceBudget = {
  javascript: 250, // KB
  css: 50,        // KB
  images: 500,    // KB
  fonts: 100,     // KB
};
```

### Usage

#### Basic Setup

```tsx
import { PerformanceOptimizer } from '@/components/performance/PerformanceOptimizer';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <PerformanceOptimizer 
          enableMonitoring={true}
          enableBundleAnalysis={process.env.NODE_ENV === 'development'}
          enableCaching={true}
        />
        {children}
      </body>
    </html>
  );
}
```

#### Image Optimization

```tsx
import { OptimizedImage } from '@/components/performance/ImageOptimizer';

<OptimizedImage
  src="/hero-image.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority={true}
  quality={85}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

#### Lazy Loading Components

```tsx
import { LazyWrapper, LazyComponents } from '@/components/performance/CodeSplitting';

<LazyWrapper fallback={<LoadingSkeleton />}>
  <LazyComponents.ContactForm />
</LazyWrapper>
```

#### Caching

```tsx
import { useCache } from '@/lib/caching';

const { data, loading, error } = useCache(
  'api-data',
  () => fetchApiData(),
  { ttl: 5 * 60 * 1000 } // 5 minutes
);
```

## Development Tools

### Performance Dashboard
- **Keyboard shortcut**: `Ctrl+Shift+D`
- **Real-time metrics** display
- **Performance audit** results
- **Cache statistics**

### Bundle Analyzer
- **Keyboard shortcut**: `Ctrl+Shift+B`
- **Bundle size** tracking
- **Memory usage** monitoring
- **Performance budget** status

### Performance Budget Monitor
- **Keyboard shortcut**: `Ctrl+Shift+P`
- **Resource size** tracking
- **Budget violation** alerts
- **Visual progress** indicators

## Configuration

### Next.js Configuration

```javascript
// next.config.js
const nextConfig = {
  experimental: {
    optimizeCss: true,
    webVitalsAttribution: ['CLS', 'LCP', 'FID', 'FCP', 'TTFB'],
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  // ... other optimizations
};
```

### Service Worker

The service worker implements:
- **Cache-first** strategy for static assets
- **Network-first** strategy for API calls
- **Stale-while-revalidate** for pages
- **Offline fallback** support

## Monitoring & Analytics

### Web Vitals Reporting

```typescript
// Automatic reporting to Google Analytics
reportWebVitals((metric) => {
  gtag('event', metric.name, {
    event_category: 'Web Vitals',
    event_label: metric.id,
    value: Math.round(metric.value),
  });
});
```

### Custom Metrics

- **Time to Interactive (TTI)**
- **Total Blocking Time (TBT)**
- **Speed Index (SI)**
- **Memory usage**
- **Long tasks count**

## Best Practices

### 1. Critical Resource Loading
- Preload critical fonts and images
- Inline critical CSS
- Defer non-critical JavaScript

### 2. Image Optimization
- Use WebP/AVIF formats when supported
- Implement proper sizing with `sizes` attribute
- Use progressive loading for large images

### 3. Code Splitting
- Split code at route level
- Lazy load non-critical components
- Preload likely-needed resources

### 4. Caching Strategy
- Cache static assets aggressively
- Use stale-while-revalidate for dynamic content
- Implement proper cache invalidation

### 5. Performance Monitoring
- Set up performance budgets
- Monitor Core Web Vitals continuously
- Track custom business metrics

## Troubleshooting

### Common Issues

1. **High LCP**: Check image optimization and critical resource loading
2. **High CLS**: Ensure proper sizing for dynamic content
3. **High FID**: Reduce JavaScript execution time and long tasks
4. **Large bundles**: Use code splitting and tree shaking
5. **Slow TTFB**: Optimize server response times and caching

### Debug Tools

- Performance Dashboard (`Ctrl+Shift+D`)
- Bundle Analyzer (`Ctrl+Shift+B`)
- Browser DevTools Performance tab
- Lighthouse audits

## Performance Targets

### Core Web Vitals Goals
- **LCP**: < 2.5s (75th percentile)
- **FID**: < 100ms (75th percentile)
- **CLS**: < 0.1 (75th percentile)

### Additional Metrics
- **FCP**: < 1.8s
- **TTFB**: < 800ms
- **TTI**: < 3.8s
- **TBT**: < 200ms

### Bundle Size Targets
- **Initial JavaScript**: < 250KB
- **CSS**: < 50KB
- **Images**: Optimized with proper formats
- **Fonts**: < 100KB total

## Deployment Considerations

### Production Optimizations
- Enable service worker caching
- Configure CDN with proper headers
- Set up performance monitoring
- Enable compression (Brotli/Gzip)

### Monitoring Setup
- Configure analytics tracking
- Set up performance alerts
- Monitor Core Web Vitals in production
- Track performance regressions

## Future Enhancements

1. **Advanced caching strategies** with edge computing
2. **AI-powered performance optimization**
3. **Real user monitoring (RUM)** integration
4. **Performance regression detection**
5. **Automated performance testing** in CI/CD

## Resources

- [Web Vitals](https://web.dev/vitals/)
- [Next.js Performance](https://nextjs.org/docs/advanced-features/measuring-performance)
- [Chrome DevTools Performance](https://developers.google.com/web/tools/chrome-devtools/performance)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)