import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout'
// import HeroSection from '@/components/HeroSection'
// import ModernHero from '@/components/ModernHero'
import CleanHero from '@/components/CleanHero'
import TrustIndicators from '@/components/TrustIndicators'
// import { StructuredData } from '@/components/seo/StructuredData'
// import { generateHomepageSchemas } from '@/lib/structured-data'
// import { PersonalizedContent } from '@/components/personalization/PersonalizedContent'
import { ProductShowcase } from '@/components/home/ProductShowcase'
import SolutionShowcase from '@/components/home/SolutionShowcase'
import { IndustryOverview } from '@/components/home/IndustryOverview'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { TechStack } from '@/components/home/TechStack'
import { SuccessStories } from '@/components/home/SuccessStories'
import { CTASection } from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'Cogniwide - Enterprise AI Solutions | Agentic AI Platform',
  description: 'Transform your enterprise operations with Cogniwide\'s AI-powered automation. Build intelligent conversations, orchestrate AI agents, and process documents at scale.',
  keywords: [
    'enterprise AI',
    'agentic AI',
    'conversational AI',
    'document processing',
    'AI automation',
    'intelligent agents',
    'business process automation',
    'AI platform'
  ],
  openGraph: {
    title: 'Cogniwide - Enterprise AI Solutions',
    description: 'Transform your enterprise operations with AI-powered automation, conversational AI, and intelligent document processing.',
    url: 'https://cogniwide.com',
    siteName: 'Cogniwide',
    images: [
      {
        url: 'https://cogniwide.com/images/banner.png',
        width: 1200,
        height: 630,
        alt: 'Cogniwide - Enterprise AI Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cogniwide - Enterprise AI Solutions',
    description: 'Transform your enterprise operations with AI-powered automation.',
    images: ['https://cogniwide.com/images/banner.png'],
  },
  alternates: {
    canonical: 'https://cogniwide.com',
  },
}

export default function Home() {
  // const schemas = generateHomepageSchemas();

  return (
    <PageLayout>
      {/* <StructuredData data={schemas} /> */}
      <CleanHero />
      <div id="main-content">
        <TrustIndicators />
        <ProductShowcase />
        <SolutionShowcase />
        <IndustryOverview />
        <WhyChooseUs />
        <TechStack />
        <SuccessStories />
        {/* <PersonalizedContent limit={6} className="bg-gray-50" /> */}
        <CTASection />
      </div>
    </PageLayout>
  )
}