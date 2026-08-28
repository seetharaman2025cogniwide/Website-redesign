import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { IndustryHero } from '@/components/industries/IndustryHero';
import { ChallengesSolutions } from '@/components/industries/ChallengesSolutions';
import AIAgentSections from '@/components/industries/AIAgentSections';
import { industryAgentData } from '@/components/industries/industryAgentData';
import { CTASection } from '@/components/home/CTASection';
import { DocumentTextIcon, BeakerIcon, HeartIcon } from '@heroicons/react/24/outline';
import { TrendingUpIcon } from '@/components/ui/icons';


export const metadata: Metadata = {
  title: 'Healthcare AI Solutions | Cogniwide',
  description: 'Revolutionize healthcare delivery with AI-powered automation. Improve patient outcomes, ensure HIPAA compliance, and streamline clinical workflows.',
  keywords: ['healthcare AI', 'medical automation', 'HIPAA compliance', 'patient care', 'clinical workflows'],
};

const healthcareChallenges = [
  {
    title: 'Clinical Documentation Burden',
    description: 'Healthcare providers spend 35-40% of their time on documentation, reducing time available for patient care and contributing to physician burnout.',
    impact: 'Administrative burden costs the US healthcare system over $250 billion annually and contributes to 50% physician burnout rates.',
    solution: 'AI-powered clinical documentation automatically transcribes patient encounters, extracts key information, and generates structured notes while ensuring accuracy.',
    benefits: [
      'Reduce documentation time by 60%',
      'Improve clinical note accuracy by 40%',
      'Increase patient face time by 25%',
      'Automated coding and billing support'
    ]
  },
  {
    title: 'Patient Care Coordination',
    description: 'Complex care coordination across multiple providers, departments, and systems leads to fragmented patient experiences and medical errors.',
    impact: 'Poor care coordination results in $25-45 billion in wasteful spending and contributes to 250,000 preventable deaths annually.',
    solution: 'Intelligent care coordination platforms integrate patient data, automate care pathways, and provide real-time alerts for care gaps and risks.',
    benefits: [
      'Reduce readmission rates by 30%',
      'Improve care team communication by 50%',
      'Decrease medical errors by 40%',
      'Automated care plan optimization'
    ]
  },
  {
    title: 'Diagnostic Accuracy & Speed',
    description: 'Diagnostic errors affect 12 million patients annually, while imaging backlogs and specialist shortages delay critical diagnoses.',
    impact: 'Diagnostic errors contribute to 10% of patient deaths and cost the healthcare system $100 billion annually in malpractice and treatment costs.',
    solution: 'AI-assisted diagnostics analyze medical images, lab results, and patient data to support clinical decision-making and accelerate accurate diagnoses.',
    benefits: [
      'Improve diagnostic accuracy by 25%',
      'Reduce imaging interpretation time by 70%',
      'Early detection of critical conditions',
      'Support for rare disease diagnosis'
    ]
  }
];

const complianceRequirements = [
  {
    name: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act requiring protection of patient health information and privacy.',
    aiSolution: 'AI-powered data governance ensures PHI protection, automated access controls, and comprehensive audit trails for all patient data interactions.',
    benefits: [
      'Automated PHI identification and protection',
      'Real-time access monitoring and alerts',
      'Comprehensive audit trail generation',
      'Privacy-preserving AI model training'
    ]
  },
  {
    name: 'FDA 21 CFR Part 11',
    description: 'Electronic records and signatures regulations for pharmaceutical and medical device companies.',
    aiSolution: 'Intelligent document management with electronic signatures, version control, and automated validation for regulatory submissions.',
    benefits: [
      'Automated document lifecycle management',
      'Electronic signature workflows',
      'Audit trail for all document changes',
      'Regulatory submission automation'
    ]
  },
  {
    name: 'Joint Commission',
    description: 'Healthcare accreditation standards focusing on patient safety, quality of care, and performance improvement.',
    aiSolution: 'AI-driven quality monitoring tracks performance metrics, identifies improvement opportunities, and automates reporting for accreditation.',
    benefits: [
      'Automated quality metric tracking',
      'Real-time performance dashboards',
      'Predictive quality risk assessment',
      'Accreditation reporting automation'
    ]
  }
];

const successMetrics = [
  {
    label: 'Documentation Time',
    value: '60%',
    description: 'Reduction in clinical documentation time',
    icon: <DocumentTextIcon className="w-6 h-6" />,
    trend: 'down' as const,
    color: 'green' as const
  },
  {
    label: 'Diagnostic Accuracy',
    value: '94%',
    description: 'AI-assisted diagnostic accuracy rate',
    icon: <BeakerIcon className="w-6 h-6" />,
    trend: 'up' as const,
    color: 'blue' as const
  },
  {
    label: 'Patient Satisfaction',
    value: '4.7/5',
    description: 'Average patient satisfaction score',
    icon: HeartIcon,
    trend: 'up' as const,
    color: 'yellow' as const
  },
  {
    label: 'Cost Savings',
    value: '35%',
    description: 'Reduction in administrative costs',
    icon: TrendingUpIcon,
    trend: 'down' as const,
    color: 'purple' as const
  }
];

const heroStats = [
  {
    label: 'Healthcare Spending',
    value: '$4.3T',
    description: 'Global healthcare expenditure annually'
  },
  {
    label: 'Administrative Costs',
    value: '30%',
    description: 'Of healthcare spending on administration'
  },
  {
    label: 'Physician Burnout',
    value: '50%',
    description: 'Of physicians report burnout symptoms'
  },
  {
    label: 'Medical Errors',
    value: '250K',
    description: 'Preventable deaths annually in the US'
  }
];

export default function HealthcarePage() {
  return (
    <PageLayout>
      <IndustryHero
        industry="healthcare"
        title="AI-Powered Healthcare Solutions"
        description="Transform patient care with intelligent automation that improves clinical outcomes, reduces administrative burden, and ensures regulatory compliance."
        challenges={[
          'Overwhelming clinical documentation requirements',
          'Complex care coordination across providers',
          'Need for faster, more accurate diagnostics'
        ]}
        stats={heroStats}
      />
      
      <ChallengesSolutions challenges={healthcareChallenges} />
      
      <AIAgentSections
        industryName="Healthcare"
        customerStages={industryAgentData.healthcare.customerStages}
        internalAreas={industryAgentData.healthcare.internalAreas}
      />
      
      <CTASection />
    </PageLayout>
  );
}