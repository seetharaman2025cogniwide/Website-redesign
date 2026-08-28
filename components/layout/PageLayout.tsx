import { ReactNode } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/layout/Footer'
import ChatbotDemo from '@/components/ai/ChatbotDemo'
import { PreviewBanner } from '@/hooks/usePreview'
// import { PersonalizationProvider } from '@/components/personalization/PersonalizationProvider'
// import { ConsentBanner } from '@/components/personalization/ConsentBanner'
// import { ProgressiveProfiling } from '@/components/personalization/ProgressiveProfiling'
// import { usePageTracking } from '@/hooks/usePageTracking'
// import { PerformanceMonitorComponent } from '@/components/performance/PerformanceMonitor'
// import { CriticalCSS, FontOptimization, ResourceHints } from '@/components/performance/CriticalCSS'

function PageContent({ 
  children, 
  showNavigation = true, 
  showFooter = true,
  showChatbot = false,
  className = '' 
}: {
  children: ReactNode
  showNavigation?: boolean
  showFooter?: boolean
  showChatbot?: boolean
  className?: string
}) {
  // Track page visits for personalization
  // usePageTracking();

  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      {/* <CriticalCSS />
      <FontOptimization />
      <ResourceHints />
      <PerformanceMonitorComponent enableReporting={true} /> */}
      <PreviewBanner />
      {showNavigation && <Navigation />}
      <main className="flex-grow">
        {children}
      </main>
      {showFooter && <Footer />}
      {showChatbot && <ChatbotDemo />}
      {/* <ConsentBanner />
      <ProgressiveProfiling trigger="engagement" engagementThreshold={25} /> */}
    </div>
  )
}

interface PageLayoutProps {
  children: ReactNode
  showNavigation?: boolean
  showFooter?: boolean
  showChatbot?: boolean
  className?: string
}

const PageLayout = ({ 
  children, 
  showNavigation = true, 
  showFooter = true,
  showChatbot = false,
  className = '' 
}: PageLayoutProps) => {
  return (
    <PageContent
      showNavigation={showNavigation}
      showFooter={showFooter}
      showChatbot={showChatbot}
      className={className}
    >
      {children}
    </PageContent>
  )
}

export default PageLayout