import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { ProductHero } from '@/components/products/ProductHero';
import { InteractiveDemo } from '@/components/products/InteractiveDemo';
import{EnterpriseGenAI} from '@/components/home/EnterpriseGenAI'
// import { BeforeAfterComparison } from '@/components/products/BeforeAfterComparison';
import { ArchitectureDiagram } from '@/components/products/ArchitectureDiagram';
import { AIAgentsShowcase } from '@/components/products/cogniassist/AIAgentsShowcase';
import { IntegrationsSection } from '@/components/products/cogniassist/IntegrationsSection';
import CogniAgentDiagram from '@/components/products/CogniAgentDiagram';

import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'CogniAssist - AI-Powered Agentic Automation Platform | Cogniwide',
  description: 'Orchestrate intelligent agents to streamline complex business processes with AI-powered automation, workflow optimization, and seamless integration.',
  keywords: [
    'agentic automation',
    'AI agents',
    'business process automation',
    'workflow orchestration',
    'intelligent automation',
    'process optimization',
    'AI-powered workflows',
    'enterprise automation'
  ],
};

const productData = {
  name: 'CogniAssist',
  tagline: 'Orchestrate Intelligent Agents for Business Automation',
  description: 'Transform your business processes with AI-powered agentic automation that intelligently coordinates multiple agents to handle complex workflows and decision-making.',
  icon: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  color: 'from-yellow-400 to-yellow-600',
  features: [
    'Multi-Agent Orchestration',
    'Intelligent Workflow Automation',
    'Real-time Process Monitoring',
    'Adaptive Decision Making',
    'Enterprise System Integration',
    'Advanced Analytics & Insights'
  ],
  benefits: [
    '80% Reduction in Manual Work',
    '99.9% Processing Accuracy',
    '10x Faster Turnaround Time',
    '60% Operational Cost Savings'
  ],
  useCases: [
    'Supply Chain Optimization',
    'Customer Service Automation',
    'Financial Process Automation',
    'HR Workflow Management',
    'Quality Assurance Processes',
    'Compliance & Risk Management'
  ]
};

export default function CogniAssistPage() {
  return (
    <PageLayout>
      <ProductHero product={productData} />
      <InteractiveDemo productName="CogniAssist" />
      <EnterpriseGenAI/>
      {/* <BeforeAfterComparison 
        productName="CogniAssist"
        before={{
          title: 'Traditional Business Processes',
          points: [
            'Manual coordination between departments',
            'Time-consuming approval workflows',
            'Inconsistent process execution',
            'Limited visibility into process status',
            'High operational overhead and costs'
          ]
        }}
        after={{
          title: 'With CogniAssist',
          points: [
            'Intelligent agent coordination and automation',
            'Instant approvals with smart routing',
            'Consistent, optimized process execution',
            'Real-time monitoring and transparency',
            'Dramatically reduced operational costs'
          ]
        }}
      /> */}
      <ArchitectureDiagram productName="CogniAssist" />
      <AIAgentsShowcase />
      <IntegrationsSection />
      <CogniAgentDiagram />
      <CTASection />
    </PageLayout>
  );
}