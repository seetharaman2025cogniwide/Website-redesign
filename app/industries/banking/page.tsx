import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { IndustryHero } from '@/components/industries/IndustryHero';
import { ChallengesSolutions } from '@/components/industries/ChallengesSolutions';
import AIAgentSections from '@/components/industries/AIAgentSections';
import { industryAgentData } from '@/components/industries/industryAgentData';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Banking & Financial Services AI Solutions | Cogniwide',
  description: 'Transform banking operations with AI-powered automation. Enhance customer experience, ensure compliance, and reduce operational costs with intelligent banking solutions.',
  keywords: ['banking AI', 'financial services automation', 'regulatory compliance', 'customer experience', 'risk management'],
};

const bankingChallenges = [
  {
    title: 'Regulatory Compliance Complexity',
    description: 'Banks face an ever-increasing web of regulations including Basel III, MiFID II, and AML requirements, requiring constant monitoring and reporting.',
    impact: 'Compliance costs can reach 10-15% of total revenue, with manual processes prone to errors and delays.',
    solution: 'AI-powered compliance monitoring automatically tracks regulatory changes, monitors transactions for suspicious activity, and generates required reports in real-time.',
    icon: 'alert-triangle',
    benefits: [
      'Reduce compliance costs by up to 42%',
      'Achieve 99.9% accuracy in regulatory reporting',
      'Real-time risk assessment and alerts',
      'Automated AML and KYC processes'
    ]
  },
  {
    title: 'Customer Experience & Personalization',
    description: 'Modern banking customers expect personalized, instant service across all channels, but traditional systems struggle to deliver unified experiences.',
    impact: 'Poor customer experience leads to 15-20% annual churn rates and reduced cross-selling opportunities.',
    solution: 'Conversational AI and intelligent recommendation engines provide personalized banking experiences, instant support, and proactive financial advice.',
    icon: 'user',
    benefits: [
      'Increase customer satisfaction by 35%',
      'Reduce call center volume by 60%',
      'Improve cross-selling success by 45%',
      '24/7 intelligent customer support'
    ]
  },
  {
    title: 'Fraud Detection & Risk Management',
    description: 'Financial fraud continues to evolve with sophisticated attack vectors, requiring advanced detection capabilities beyond rule-based systems.',
    impact: 'Global banking fraud losses exceed $30 billion annually, with traditional detection missing 20-30% of fraudulent transactions.',
    solution: 'Machine learning models analyze transaction patterns, user behavior, and network effects to detect fraud in real-time with minimal false positives.',
    icon: 'lock',
    benefits: [
      'Reduce fraud losses by 70%',
      'Decrease false positives by 50%',
      'Real-time transaction scoring',
      'Adaptive learning from new fraud patterns'
    ]
  }
];

const complianceRequirements = [
  {
    name: 'Basel III',
    description: 'International regulatory framework for bank capital adequacy, stress testing, and market liquidity risk.',
    aiSolution: 'Automated capital adequacy calculations, stress testing simulations, and liquidity risk monitoring with real-time reporting.',
    benefits: [
      'Automated regulatory capital calculations',
      'Real-time stress testing scenarios',
      'Liquidity coverage ratio monitoring',
      'Comprehensive risk reporting'
    ]
  },
  {
    name: 'AML/KYC',
    description: 'Anti-Money Laundering and Know Your Customer regulations requiring customer due diligence and transaction monitoring.',
    aiSolution: 'AI-powered customer screening, transaction pattern analysis, and suspicious activity detection with automated reporting.',
    benefits: [
      'Automated customer risk scoring',
      'Real-time transaction monitoring',
      'Reduced false positive alerts',
      'Streamlined investigation workflows'
    ]
  },
  {
    name: 'MiFID II',
    description: 'Markets in Financial Instruments Directive requiring transparency, investor protection, and best execution.',
    aiSolution: 'Intelligent trade surveillance, best execution analysis, and automated regulatory reporting for investment services.',
    benefits: [
      'Automated trade surveillance',
      'Best execution monitoring',
      'Client suitability assessments',
      'Regulatory reporting automation'
    ]
  }
];

const successMetrics = [
  {
    label: 'Cost Reduction',
    value: '40%',
    description: 'Average reduction in operational costs through AI automation',
    icon: 'trending-up',
    trend: 'down' as const,
    color: 'green' as const
  },
  {
    label: 'Fraud Detection',
    value: '99.2%',
    description: 'Accuracy rate in identifying fraudulent transactions',
    icon: 'shield',
    trend: 'up' as const,
    color: 'blue' as const
  },
  {
    label: 'Customer Satisfaction',
    value: '4.8/5',
    description: 'Average customer satisfaction score with AI-powered services',
    icon: 'handshake',
    trend: 'up' as const,
    color: 'yellow' as const
  },
  {
    label: 'Processing Time',
    value: '85%',
    description: 'Reduction in loan application processing time',
    icon: 'lightning',
    trend: 'down' as const,
    color: 'purple' as const
  }
];

const heroStats = [
  {
    label: 'Global Banking Assets',
    value: '$183T',
    description: 'Total assets under management globally'
  },
  {
    label: 'Digital Adoption',
    value: '76%',
    description: 'Of banking customers use digital channels'
  },
  {
    label: 'Compliance Costs',
    value: '$270B',
    description: 'Annual global compliance spending'
  },
  {
    label: 'Fraud Losses',
    value: '$30B',
    description: 'Annual losses to financial fraud'
  }
];

export default function BankingPage() {
  return (
    <PageLayout>
      <IndustryHero
        industry="banking"
        title="Transform Banking with Intelligent AI"
        description="Revolutionize your financial institution with AI-powered automation that enhances customer experience, ensures regulatory compliance, and drives operational excellence."
        challenges={[
          'Slow and expensive compliance processes',
          'Rising fraud losses and security threats',
          'Poor customer experience and high churn rates'
        ]}
        stats={heroStats}
      />
      <ChallengesSolutions challenges={bankingChallenges} />
      <AIAgentSections
        industryName="Banking"
        customerStages={industryAgentData.banking.customerStages}
        internalAreas={industryAgentData.banking.internalAreas}
      />
      <CTASection />
    </PageLayout>
  );
}