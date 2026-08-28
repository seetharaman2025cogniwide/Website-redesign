import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { GetStartedHero } from '@/components/get-started/GetStartedHero';
import { GetStartedFeatures } from '@/components/get-started/GetStartedFeatures';
import { OnboardingProcess } from '@/components/get-started/OnboardingProcess';
import { PricingPlans } from '@/components/get-started/PricingPlans';
import { EnterpriseGenAI } from '@/components/home/EnterpriseGenAI';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Get Started - Cogniwide | Begin Your AI Transformation',
  description: 'Start your AI transformation journey with Cogniwide. Learn about our onboarding process, pricing plans, and how to get started.',
};

export default function GetStartedPage() {
  return (
    <PageLayout>
      <GetStartedHero />
      <GetStartedFeatures />
      <EnterpriseGenAI />
      <OnboardingProcess />
      <PricingPlans />
      <CTASection />
    </PageLayout>
  );
}