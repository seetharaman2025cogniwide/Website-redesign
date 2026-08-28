import PageLayout from '@/components/layout/PageLayout'
import ServicesHero from '@/components/services/ServicesHero'
import ServiceCategories from '@/components/services/ServiceCategories'
import ServiceIntegration from '@/components/services/ServiceIntegration'
import TechnologyStack from '@/components/services/TechnologyStack'

export const metadata = {
  title: 'Enterprise Services & Solutions',
  description: 'Comprehensive enterprise services in product engineering, cloud engineering, data engineering, and intelligent automation.',
  keywords: 'enterprise services, digital transformation, product engineering, cloud engineering, data engineering, intelligent automation',
}

export default function ServicesPage() {
  return (
    <PageLayout>
      <ServicesHero />
      <ServiceCategories />
      <ServiceIntegration />
      <TechnologyStack />
    </PageLayout>
  )
}