import { Metadata } from 'next'
import PageLayout from '@/components/layout/PageLayout'
import { SolutionsHero } from '@/components/solutions/SolutionsHero'
import SolutionCategories from '@/components/solutions/SolutionCategories'
import SolutionIntegration from '@/components/solutions/SolutionIntegration'
import SolutionTechnologyStack from '@/components/solutions/SolutionTechnologyStack'

export const metadata: Metadata = {
  title: 'AI-Powered Solutions & Frameworks | Cogniwide',
  description: 'Explore Cogniwide\'s comprehensive AI-powered solutions including CogniVibe SDLC framework, CogniTest automation, and CogniOps DevOps platform.',
  keywords: [
    'AI solutions',
    'SDLC framework',
    'test automation',
    'DevOps platform',
    'CogniVibe',
    'CogniTest',
    'CogniOps',
    'development frameworks'
  ],
}

export default function SolutionsPage() {
  return (
    <PageLayout>
      <SolutionsHero />
      <SolutionCategories />
      <SolutionIntegration />
      <SolutionTechnologyStack />
    </PageLayout>
  )
}