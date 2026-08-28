import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader';
import './globals.css'
import { PerformanceOptimizer, CriticalResourcePreloader, ServiceWorkerRegistration, DevServiceWorkerCleanup } from '@/components/performance/PerformanceOptimizer'

export const metadata: Metadata = {
  title: 'Cogniwide - Transforming Enterprise Operations with Agentic AI',
  description: 'Data-first AI solutions that orchestrate intelligent automation across your entire organization. Enterprise-grade AI platforms for conversational AI, agentic automation, and intelligent document processing.',
  keywords: 'enterprise AI, agentic AI, conversational AI, document processing, AI automation, enterprise solutions',
  icons: {
    icon: '/cogniwide_logo_1-removebg-preview.png',
    shortcut: '/cogniwide_logo_1-removebg-preview.png',
    apple: '/cogniwide_logo_1-removebg-preview.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Preconnect for critical external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Fonts - Poppins */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Critical CSS inlining would go here in production */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for above-the-fold content */
            body { margin: 0; font-family: 'Poppins', system-ui, -apple-system, sans-serif; }
            .loading { display: flex; align-items: center; justify-content: center; min-height: 100vh; }
            .spinner { width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; animation: spin 1s linear infinite; }
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          `
        }} />
      </head>
      <body suppressHydrationWarning>
        <NextTopLoader color="#3b82f6" showSpinner={false} />
        {/* Performance monitoring and optimization - temporarily disabled */}
        {/* <PerformanceOptimizer 
          enableMonitoring={true}
          enableBundleAnalysis={process.env.NODE_ENV === 'development'}
          enableCaching={true}
        /> */}
        
        {/* Critical resource preloader */}
        <CriticalResourcePreloader />
        
        {/* Service worker registration */}
        <ServiceWorkerRegistration />
        {/* Dev cleanup to avoid stale SW caches */}
        <DevServiceWorkerCleanup />
        
        {children}
      </body>
    </html>
  )
}