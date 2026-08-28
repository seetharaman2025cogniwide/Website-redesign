import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { IndustryHero } from '@/components/industries/IndustryHero';
import { ChallengesSolutions } from '@/components/industries/ChallengesSolutions';
import AIAgentSections from '@/components/industries/AIAgentSections';
import { industryAgentData } from '@/components/industries/industryAgentData';
import { CTASection } from '@/components/home/CTASection';


export const metadata: Metadata = {
  title: 'Retail AI Solutions | Cogniwide',
  description: 'Revolutionize retail operations with AI-powered personalization, inventory optimization, and customer experience automation.',
  keywords: ['retail AI',  'personalization', 'inventory management', 'customer experience'],
};

const retailChallenges = [
  {
    title: 'Inventory Management & Demand Forecasting',
    description: 'Retailers struggle with inventory optimization, leading to stockouts, overstock situations, and poor demand prediction across channels.',
    impact: 'Poor inventory management costs retailers $1.1 trillion globally, with 8% of items out of stock and 43% excess inventory.',
    solution: 'AI-powered demand forecasting analyzes historical data, seasonality, trends, and external factors to optimize inventory levels and reduce waste.',
    benefits: [
      'Reduce inventory costs by 25%',
      'Improve demand forecast accuracy by 40%',
      'Decrease stockouts by 60%',
      'Optimize supply chain efficiency'
    ]
  },
  {
    title: 'Personalized Customer Experience',
    description: 'Modern consumers expect personalized shopping experiences across all touchpoints, but traditional systems lack real-time personalization capabilities.',
    impact: 'Generic experiences lead to 70% cart abandonment rates and reduce customer lifetime value by 30%.',
    solution: 'Intelligent recommendation engines and personalization platforms deliver real-time, contextual experiences across web, mobile, and in-store channels.',
    benefits: [
      'Increase conversion rates by 35%',
      'Improve customer lifetime value by 45%',
      'Reduce cart abandonment by 25%',
      'Enhance cross-selling success by 50%'
    ]
  },
  {
    title: 'Omnichannel Integration & Customer Service',
    description: 'Fragmented customer experiences across channels and overwhelming customer service volumes impact satisfaction and operational efficiency.',
    impact: 'Poor omnichannel experiences result in 23% customer churn and increase service costs by 40%.',
    solution: 'Conversational AI and unified customer platforms provide seamless experiences across channels with intelligent automation and human handoff.',
    benefits: [
      'Reduce customer service costs by 50%',
      'Improve customer satisfaction by 40%',
      'Increase agent productivity by 60%',
      '24/7 intelligent customer support'
    ]
  }
];

const complianceRequirements = [
  {
    name: 'PCI DSS',
    description: 'Payment Card Industry Data Security Standard for protecting cardholder data in payment transactions.',
    aiSolution: 'AI-powered fraud detection and secure payment processing with automated compliance monitoring and reporting.',
    benefits: [
      'Real-time fraud detection and prevention',
      'Automated compliance monitoring',
      'Secure payment data handling',
      'Comprehensive audit trail generation'
    ]
  },
  {
    name: 'GDPR/CCPA',
    description: 'Data privacy regulations requiring consent management, data protection, and customer rights compliance.',
    aiSolution: 'Intelligent consent management and privacy-preserving personalization that respects customer data rights and preferences.',
    benefits: [
      'Automated consent management',
      'Privacy-preserving personalization',
      'Data subject rights automation',
      'Comprehensive privacy compliance'
    ]
  },
  {
    name: 'Accessibility Standards',
    description: 'Web Content Accessibility Guidelines (WCAG) ensuring digital experiences are accessible to all customers.',
    aiSolution: 'AI-powered accessibility testing and optimization ensuring compliant, inclusive customer experiences across all touchpoints.',
    benefits: [
      'Automated accessibility testing',
      'Real-time compliance monitoring',
      'Inclusive design optimization',
      'Enhanced customer reach'
    ]
  }
];

const successMetrics = [
  {
    label: 'Conversion Rate',
    value: '35%',
    description: 'Average increase in  conversion rates',
    icon: 'shopping-cart',
    trend: 'up' as const,
    color: 'green' as const
  },
  {
    label: 'Inventory Accuracy',
    value: '96%',
    description: 'Demand forecasting accuracy with AI',
    icon: 'cube',
    trend: 'up' as const,
    color: 'blue' as const
  },
  {
    label: 'Customer Satisfaction',
    value: '4.6/5',
    description: 'Average customer satisfaction score',
    icon: 'star',
    trend: 'up' as const,
    color: 'yellow' as const
  },
  {
    label: 'Cost Reduction',
    value: '40%',
    description: 'Reduction in customer service costs',
    icon: 'currency-dollar',
    trend: 'down' as const,
    color: 'purple' as const
  }
];

const heroStats = [
  {
    label: 'Global Retail Sales',
    value: '$26.7T',
    description: 'Total global retail sales annually'
  },
  {
    label: ' Growth',
    value: '15%',
    description: 'Annual growth rate of online retail'
  },
  {
    label: 'Cart Abandonment',
    value: '70%',
    description: 'Average cart abandonment rate'
  },
  {
    label: 'Inventory Waste',
    value: '$1.1T',
    description: 'Global cost of poor inventory management'
  }
];

export default function RetailPage() {
  return (
    <PageLayout>
      <IndustryHero
        industry="retail"
        title="AI-Powered Retail Solutions"
        description="Transform your retail operations with intelligent automation that personalizes customer experiences, optimizes inventory, and drives profitable growth."
        challenges={[
          'Complex inventory management across channels',
          'Need for real-time personalization at scale',
          'Fragmented customer experiences and high service costs'
        ]}
        stats={heroStats}
      />
      
      <ChallengesSolutions challenges={retailChallenges} />
      
      <AIAgentSections
        industryName="Retail"
        customerStages={industryAgentData.retail.customerStages}
        internalAreas={industryAgentData.retail.internalAreas}
      />
      
      <CTASection />
    </PageLayout>
  );
}