import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { DemoHero } from '@/components/demo/DemoHero';
import { DemoScheduler } from '@/components/demo/DemoScheduler';
import { DemoFeatures } from '@/components/demo/DemoFeatures';

export const metadata: Metadata = {
  title: 'Schedule a Demo - Cogniwide | See AI Solutions in Action',
  description: 'Book a personalized demo of our AI solutions. See how Cogniwide can transform your business operations with cutting-edge AI technology.',
};

export default function DemoPage() {
  return (
    <PageLayout>
      <DemoHero />
      <DemoScheduler />
      <DemoFeatures />
    </PageLayout>
  );
}