import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { Casestudyhero } from '@/components/casestudy/casestudyhero';
import Casestudyfeatures from '@/components/casestudy/Casestudyfestures';
import { Casestudyfeatures1 } from '@/components/casestudy/casestudyfeatures1';
import { CasestudyCTA } from '@/components/casestudy/CasestudyCTA';

export const metadata: Metadata = {
  title: 'Case Studies - Cogniwide | Real-World Success Stories',
  description: 'Explore our detailed case studies showcasing successful AI implementations and digital transformation projects.',
};

export default function CaseStudyPage() {
  return (
    <PageLayout>
      <Casestudyhero />
      <Casestudyfeatures />
      <Casestudyfeatures1 />
      <CasestudyCTA />
    </PageLayout>
  );
}
