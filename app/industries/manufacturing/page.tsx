import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { IndustryHero } from '@/components/industries/IndustryHero';
import { ChallengesSolutions } from '@/components/industries/ChallengesSolutions';
import AIAgentSections from '@/components/industries/AIAgentSections';
import { industryAgentData } from '@/components/industries/industryAgentData';
import { CTASection } from '@/components/home/CTASection';
import { CpuChipIcon, CurrencyDollarIcon, CogIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Manufacturing AI Solutions | Cogniwide',
  description: 'Transform manufacturing operations with AI-powered predictive maintenance, quality control, and smart factory automation.',
  keywords: ['manufacturing AI', 'predictive maintenance', 'quality control', 'smart factory', 'industrial automation'],
};

const manufacturingChallenges = [
  {
    title: 'Predictive Maintenance & Equipment Reliability',
    description: 'Unplanned downtime and equipment failures lead to production delays, increased maintenance costs, and reduced operational efficiency.',
    impact: 'Unplanned downtime costs manufacturers an estimated $50 billion annually, with equipment failure causing 42% of all unplanned downtime incidents.',
    solution: 'AI-powered predictive maintenance analyzes equipment sensor data to predict failures before they occur and optimize maintenance schedules.',
    benefits: [
      'Reduce unplanned downtime by 45%',
      'Extend equipment lifespan by 20%',
      'Decrease maintenance costs by 30%',
      'Improve overall equipment effectiveness by 25%'
    ]
  },
  {
    title: 'Quality Control & Defect Detection',
    description: 'Manual quality inspection processes are slow, inconsistent, and prone to human error, leading to defective products reaching customers.',
    impact: 'Quality issues cost manufacturers 15-20% of sales revenue, with manual inspection missing up to 30% of defects in complex products.',
    solution: 'Computer vision and machine learning systems provide automated, real-time quality inspection with higher accuracy than human inspectors.',
    benefits: [
      'Improve defect detection rates by 90%',
      'Reduce quality control costs by 35%',
      'Decrease customer returns by 50%',
      'Enable 100% inspection coverage'
    ]
  },
  {
    title: 'Production Optimization & Resource Efficiency',
    description: 'Inefficient production processes waste energy, materials, and labor while increasing environmental impact and operational costs.',
    impact: 'Manufacturing inefficiencies waste up to 30% of production capacity and contribute to 20% of global carbon emissions.',
    solution: 'AI optimization algorithms analyze production data to identify efficiency improvements, reduce waste, and optimize resource utilization.',
    benefits: [
      'Increase production throughput by 20%',
      'Reduce energy consumption by 15%',
      'Decrease material waste by 25%',
      'Optimize workforce utilization by 30%'
    ]
  }
];

const complianceRequirements = [
  {
    name: 'ISO Standards',
    description: 'International manufacturing quality and safety standards including ISO 9001, ISO 14001, and industry-specific requirements.',
    aiSolution: 'Automated compliance monitoring for manufacturing processes with real-time alerts, documentation, and reporting.',
    benefits: [
      'Automated quality management',
      'Environmental compliance tracking',
      'Safety standard adherence',
      'Continuous improvement monitoring'
    ]
  },
  {
    name: 'Regulatory Compliance',
    description: 'Industry-specific regulations for product safety, environmental impact, and worker protection.',
    aiSolution: 'AI-powered regulatory monitoring, automated documentation, and compliance verification for manufacturing operations.',
    benefits: [
      'Automated compliance documentation',
      'Real-time regulatory monitoring',
      'Risk assessment automation',
      'Reduced compliance costs'
    ]
  }
];

const successMetrics = [
  {
    label: 'Downtime Reduction',
    value: '45%',
    description: 'Reduction in unplanned downtime through predictive maintenance',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    trend: 'down' as const,
    color: 'green' as const
  },
  {
    label: 'Quality Improvement',
    value: '90%',
    description: 'Increase in defect detection accuracy',
    icon: <CpuChipIcon className="w-6 h-6" />,
    trend: 'up' as const,
    color: 'blue' as const
  },
  {
    label: 'Production Efficiency',
    value: '20%',
    description: 'Increase in production throughput with AI',
    icon: <CogIcon className="w-6 h-6" />,
    trend: 'up' as const,
    color: 'yellow' as const
  },
  {
    label: 'Cost Reduction',
    value: '25%',
    description: 'Overall manufacturing cost reduction',
    icon: <CurrencyDollarIcon className="w-6 h-6" />,
    trend: 'down' as const,
    color: 'purple' as const
  }
];

const heroStats = [
  {
    label: 'Global Manufacturing',
    value: '$13.9T',
    description: 'Total global manufacturing market value'
  },
  {
    label: 'Downtime Costs',
    value: '$50B',
    description: 'Annual cost of unplanned downtime'
  },
  {
    label: 'Quality Costs',
    value: '15-20%',
    description: 'Of revenue lost to quality issues'
  },
  {
    label: 'AI Adoption',
    value: '30%',
    description: 'Of manufacturers implementing AI solutions'
  }
];

export default function ManufacturingPage() {
  return (
    <PageLayout>
      <IndustryHero
        industry="manufacturing"
        title="AI-Powered Manufacturing Solutions"
        description="Transform your manufacturing operations with intelligent automation that improves quality, reduces downtime, and optimizes production efficiency across your factory floor."
        challenges={[
          'Unplanned downtime and equipment failures',
          'Quality control and defect detection challenges',
          'Production inefficiencies and resource waste'
        ]}
        stats={heroStats}
      />
      
      <ChallengesSolutions challenges={manufacturingChallenges} />
      
      <AIAgentSections
        industryName="Manufacturing"
        customerStages={industryAgentData.manufacturing?.customerStages || []}
        internalAreas={industryAgentData.manufacturing?.internalAreas || []}
      />
      
      <CTASection />
    </PageLayout>
  );
}