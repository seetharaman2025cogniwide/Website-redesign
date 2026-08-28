import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { IndustryHero } from '@/components/industries/IndustryHero';
import { ChallengesSolutions } from '@/components/industries/ChallengesSolutions';
import AIAgentSections from '@/components/industries/AIAgentSections';
import { industryAgentData } from '@/components/industries/industryAgentData';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Telecommunications AI Solutions | Cogniwide',
  description: 'Optimize telecom operations with AI-powered network management, customer service automation, and predictive maintenance solutions.',
  keywords: ['telecom AI', 'network optimization', 'customer service automation', 'predictive maintenance', '5G'],
};

const telecomChallenges = [
  {
    title: 'Network Optimization & Performance',
    description: 'Telecom networks generate massive amounts of data requiring real-time analysis for optimal performance, capacity planning, and fault detection.',
    impact: 'Network downtime costs telecom operators $5.6 million per hour, while poor optimization leads to 20-30% capacity waste.',
    solution: 'AI-powered network analytics optimize traffic routing, predict capacity needs, and enable proactive maintenance to ensure optimal performance.',
    benefits: [
      'Reduce network downtime by 45%',
      'Improve network efficiency by 30%',
      'Predict and prevent 80% of network failures',
      'Optimize spectrum utilization'
    ]
  },
  {
    title: 'Customer Experience & Churn Prevention',
    description: 'High customer churn rates and complex service issues require proactive customer engagement and intelligent support systems.',
    impact: 'Telecom churn rates average 15-25% annually, with customer acquisition costs 5-10x higher than retention costs.',
    solution: 'Predictive analytics identify at-risk customers while conversational AI provides instant, personalized support across all channels.',
    benefits: [
      'Reduce customer churn by 35%',
      'Improve first-call resolution by 60%',
      'Increase customer satisfaction by 40%',
      'Automate 70% of routine inquiries'
    ]
  },
  {
    title: 'Infrastructure Maintenance & Planning',
    description: 'Aging infrastructure and rapid 5G deployment require intelligent maintenance scheduling and capacity planning.',
    impact: 'Reactive maintenance costs 3-5x more than predictive maintenance, while poor planning leads to $2B in wasted infrastructure investment.',
    solution: 'Predictive maintenance algorithms analyze equipment data to schedule optimal maintenance and guide infrastructure investments.',
    benefits: [
      'Reduce maintenance costs by 40%',
      'Extend equipment lifespan by 25%',
      'Optimize infrastructure investments',
      'Prevent 90% of equipment failures'
    ]
  }
];

const complianceRequirements = [
  {
    name: 'FCC Regulations',
    description: 'Federal Communications Commission regulations for spectrum management, consumer protection, and network reliability.',
    aiSolution: 'Automated compliance monitoring for spectrum usage, service quality metrics, and consumer protection requirements.',
    benefits: [
      'Automated spectrum compliance monitoring',
      'Real-time service quality tracking',
      'Consumer protection automation',
      'Regulatory reporting streamlining'
    ]
  },
  {
    name: 'GDPR/Privacy',
    description: 'Data protection regulations for customer data privacy and consent management in telecommunications.',
    aiSolution: 'Privacy-preserving analytics and automated consent management ensuring compliant customer data usage.',
    benefits: [
      'Automated privacy compliance',
      'Consent management automation',
      'Data anonymization techniques',
      'Privacy-preserving analytics'
    ]
  }
];

const successMetrics = [
  {
    label: 'Network Uptime',
    value: '99.9%',
    description: 'Network availability with AI-powered monitoring',
    icon: 'signal',
    trend: 'up' as const,
    color: 'green' as const
  },
  {
    label: 'Churn Reduction',
    value: '35%',
    description: 'Decrease in customer churn rates',
    icon: 'device-phone-mobile',
    trend: 'down' as const,
    color: 'blue' as const
  },
  {
    label: 'Cost Savings',
    value: '40%',
    description: 'Reduction in maintenance costs',
    icon: 'currency-dollar',
    trend: 'down' as const,
    color: 'yellow' as const
  },
  {
    label: 'Resolution Rate',
    value: '85%',
    description: 'First-call resolution rate with AI',
    icon: 'target',
    trend: 'up' as const,
    color: 'purple' as const
  }
];

const heroStats = [
  {
    label: 'Global Telecom Revenue',
    value: '$1.8T',
    description: 'Annual global telecommunications revenue'
  },
  {
    label: '5G Deployment',
    value: '200+',
    description: 'Countries with 5G networks deployed'
  },
  {
    label: 'Network Downtime Cost',
    value: '$5.6M',
    description: 'Average cost per hour of network downtime'
  },
  {
    label: 'Customer Churn',
    value: '20%',
    description: 'Average annual churn rate in telecom'
  }
];

const caseStudyHighlight = {
  client: 'Major Telecom Operator',
  result: 'Reduced network downtime by 50% and improved customer satisfaction scores by 38% through AI-powered operations',
  timeframe: '10 months'
};

export default function TelecomPage() {
  return (
    <PageLayout>
      <IndustryHero
        industry="telecom"
        title="AI-Powered Telecom Solutions"
        description="Optimize network performance, enhance customer experiences, and reduce operational costs with intelligent telecommunications automation."
        challenges={[
          'Complex network optimization and capacity planning',
          'High customer churn and service complexity',
          'Aging infrastructure requiring predictive maintenance'
        ]}
        stats={heroStats}
      />
      
      <ChallengesSolutions challenges={telecomChallenges} />
      
      <AIAgentSections
        industryName="Telecom"
        customerStages={industryAgentData.telecom.customerStages}
        internalAreas={industryAgentData.telecom.internalAreas}
      />
      
      <CTASection />
    </PageLayout>
  );
}