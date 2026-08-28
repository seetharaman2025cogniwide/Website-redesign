import { Metadata } from 'next'
import PageLayout from '@/components/layout/PageLayout'
import IndustriesHero from '@/components/industries/IndustriesHero'
import IndustryCategories from '@/components/industries/IndustryCategories'
import IndustryIntegration from '@/components/industries/IndustryIntegration'
import IndustryTechnologyStack from '@/components/industries/IndustryTechnologyStack'
import IndustriesCTA from '@/components/industries/IndustriesCTA'

export const metadata: Metadata = {
  title: 'Industries - AI Solutions for Every Sector | Cogni',
  description: 'Discover how Cogni\'s AI solutions transform industries from banking to healthcare, retail to manufacturing with tailored intelligent automation.',
}

export default function IndustriesPage() {
  return (
    <PageLayout>
      <IndustriesHero 
        title="AI Solutions for Every Industry"
        subtitle="From banking to healthcare, retail to manufacturing - our AI solutions are tailored to meet the unique challenges and opportunities of your industry."
        primaryCTA="Explore Solutions"
        secondaryCTA="Schedule Industry Consultation"
      />
      <IndustryCategories />
      <IndustryIntegration />
      <IndustryTechnologyStack />
      <IndustriesCTA />
    </PageLayout>
  )
}