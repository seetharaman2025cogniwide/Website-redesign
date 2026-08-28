import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { CareersHero } from '@/components/careers/CareersHero';
import { WhyWorkWithUs } from '@/components/careers/WhyWorkWithUs';
import { OpenPositions } from '@/components/careers/OpenPositions';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Careers - Cogniwide | Join Our AI Innovation Team',
  description: 'Join Cogniwide and help shape the future of AI. Explore career opportunities and become part of our innovative team.',
};

export default function CareersPage() {
  return (
    <PageLayout className="bg-[#0B0A14]">
      <div className="bg-[#0B0A14] text-white min-h-screen">
        <CareersHero />
        <WhyWorkWithUs />
        <OpenPositions />
        <CTASection theme="dark" />
      </div>
    </PageLayout>
  );
}