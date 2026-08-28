import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { IndustryHero } from '@/components/industries/IndustryHero';
import { ChallengesSolutions } from '@/components/industries/ChallengesSolutions';
import AIAgentSections from '@/components/industries/AIAgentSections';
import { industryAgentData } from '@/components/industries/industryAgentData';
import { CTASection } from '@/components/home/CTASection';
import { StarIcon, ClipboardDocumentListIcon, MagnifyingGlassIcon, BoltIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Insurance AI Solutions | Cogniwide',
  description: 'Transform insurance operations with AI-powered claims processing, risk assessment, and customer service automation.',
  keywords: ['insurance AI', 'claims automation', 'risk assessment', 'underwriting', 'fraud detection'],
};

const insuranceChallenges = [
  {
    title: 'Claims Processing & Fraud Detection',
    description: 'Manual claims processing is slow and expensive, while insurance fraud costs the industry billions annually with traditional detection missing sophisticated schemes.',
    impact: 'Claims processing takes 7-14 days on average, while fraud costs insurers $308 billion annually with 10-15% of claims being fraudulent.',
    solution: 'AI-powered claims automation processes simple claims instantly while advanced fraud detection identifies suspicious patterns and networks.',
    benefits: [
      'Reduce claims processing time by 80%',
      'Detect 95% of fraudulent claims',
      'Improve customer satisfaction by 45%',
      'Reduce operational costs by 35%'
    ]
  },
  {
    title: 'Risk Assessment & Underwriting',
    description: 'Traditional underwriting relies on limited data sources and manual processes, leading to inaccurate risk pricing and slow policy issuance.',
    impact: 'Poor risk assessment leads to $50B in underwriting losses annually, while slow processes result in 30% application abandonment.',
    solution: 'AI-driven underwriting analyzes vast data sources including IoT, social, and behavioral data for accurate, real-time risk assessment.',
    benefits: [
      'Improve risk prediction accuracy by 40%',
      'Reduce underwriting time by 70%',
      'Increase policy conversion by 25%',
      'Optimize pricing strategies'
    ]
  },
  {
    title: 'Customer Experience & Personalization',
    description: 'Insurance customers expect personalized products and instant service, but traditional systems struggle with complex product configurations and slow response times.',
    impact: 'Poor customer experience leads to 25% annual churn rates and reduces cross-selling opportunities by 40%.',
    solution: 'Conversational AI and personalization engines deliver instant quotes, personalized recommendations, and 24/7 intelligent support.',
    benefits: [
      'Reduce quote generation time by 90%',
      'Increase cross-selling success by 50%',
      'Improve customer retention by 30%',
      'Automate 80% of customer inquiries'
    ]
  }
];

const complianceRequirements = [
  {
    name: 'Solvency II',
    description: 'European insurance regulation requiring risk management, capital adequacy, and supervisory reporting.',
    aiSolution: 'Automated risk calculations, capital adequacy monitoring, and regulatory reporting with real-time compliance tracking.',
    benefits: [
      'Automated solvency calculations',
      'Real-time risk monitoring',
      'Regulatory reporting automation',
      'Capital optimization strategies'
    ]
  },
  {
    name: 'NAIC Model Laws',
    description: 'National Association of Insurance Commissioners regulations for consumer protection and market conduct.',
    aiSolution: 'AI-powered market conduct monitoring, consumer protection automation, and compliance reporting systems.',
    benefits: [
      'Automated market conduct monitoring',
      'Consumer protection compliance',
      'Fair pricing algorithm auditing',
      'Regulatory examination preparation'
    ]
  }
];

const successMetrics = [
  {
    label: 'Claims Processing',
    value: '80%',
    description: 'Reduction in claims processing time',
    icon: <ClipboardDocumentListIcon className="w-6 h-6" />,
    trend: 'down' as const,
    color: 'green' as const
  },
  {
    label: 'Fraud Detection',
    value: '95%',
    description: 'Accuracy in identifying fraudulent claims',
    icon: <MagnifyingGlassIcon className="w-6 h-6" />,
    trend: 'up' as const,
    color: 'blue' as const
  },
  {
    label: 'Customer Satisfaction',
    value: '4.5/5',
    description: 'Average customer satisfaction score',
    icon: <StarIcon className="w-6 h-6" />,
    trend: 'up' as const,
    color: 'yellow' as const
  },
  {
    label: 'Underwriting Speed',
    value: '70%',
    description: 'Faster policy underwriting process',
    icon: <BoltIcon className="w-6 h-6" />,
    trend: 'up' as const,
    color: 'purple' as const
  }
];

const heroStats = [
  {
    label: 'Global Insurance Premiums',
    value: '$6.3T',
    description: 'Annual global insurance premiums'
  },
  {
    label: 'Fraud Losses',
    value: '$308B',
    description: 'Annual losses to insurance fraud'
  },
  {
    label: 'Claims Processing Time',
    value: '10 days',
    description: 'Average time to process claims'
  },
  {
    label: 'Customer Churn',
    value: '25%',
    description: 'Annual customer churn rate'
  }
];

export default function InsurancePage() {
  return (
    <PageLayout>
      <IndustryHero
        industry="insurance"
        title="AI-Powered Insurance Solutions"
        description="Revolutionize insurance operations with intelligent automation that accelerates claims processing, enhances risk assessment, and delivers personalized customer experiences."
        challenges={[
          'Slow and expensive claims processing',
          'Inaccurate risk assessment and pricing',
          'Complex customer service and product configuration'
        ]}
        stats={heroStats}
      />
      
      <ChallengesSolutions challenges={insuranceChallenges} />
      
      <AIAgentSections
        industryName="Insurance"
        customerStages={industryAgentData.insurance.customerStages}
        internalAreas={industryAgentData.insurance.internalAreas}
      />
      
      <CTASection />
    </PageLayout>
  );
}