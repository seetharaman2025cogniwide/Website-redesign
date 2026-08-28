import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { ProductHero } from '@/components/products/ProductHero';
import { CogniAuraKeyModules, CogniAuraServicesList } from '@/components/products/cogniaura/CogniAuraFeatures';
import { CogniAuraAgentsShowcase } from '@/components/products/cogniaura/CogniAuraAgentsShowcase';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'CogniAura - Analytics Platform with BI Migration | Cogniwide',
  description: 'Transform your analytics with CogniAura. Drive outcomes at a new pace, powered by analytics automation.',
  keywords: [
    'business intelligence',
    'BI migration',
    'analytics platform',
    'data governance',
    'analytics automation',
    'real-time analytics',
    'master data management'
  ],
};

const productData = {
  name: 'CogniAura',
  tagline: 'Your Analytics Powered by New Experiences',
  description: 'Drive outcomes at a new pace, powered by analytics automation. Accelerate migration, govern data assets, and manage master data centrally with our comprehensive platform.',
  icon: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 17V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 17V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 17v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  color: 'from-green-500 to-teal-500',
  features: [
    'Analytics Migration',
    'BI Administration',
    'Data Governance',
    'Reference & Master DM',
    'Real-time Analytics',
    'Automated Reporting'
  ],
  benefits: [
    '40% Faster Legacy Migration',
    '100% Centralized BI Governance',
    '3x Faster Data-Driven Decisions',
    '25% Optimized Cloud Resources'
  ],
  useCases: [
    'Legacy BI Migration',
    'Real-time Analytics',
    'Master Data Management',
    'Compliance & Policy Management',
    'Cloud Resource Optimization'
  ]
};

export default function CogniAuraPage() {
  return (
    <PageLayout>
      <ProductHero product={productData} />
      <CogniAuraKeyModules />
      <CogniAuraServicesList />
      <CogniAuraAgentsShowcase />
      <CTASection />
    </PageLayout>
  );
}
