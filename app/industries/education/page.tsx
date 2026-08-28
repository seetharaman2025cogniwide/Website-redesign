import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { IndustryHero } from '@/components/industries/IndustryHero';
import { ChallengesSolutions } from '@/components/industries/ChallengesSolutions';
import AIAgentSections from '@/components/industries/AIAgentSections';
import { industryAgentData } from '@/components/industries/industryAgentData';
import { CTASection } from '@/components/home/CTASection';
import { AcademicCapIcon, BookOpenIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Education AI Solutions | Cogniwide',
  description: 'Transform education with AI-powered ERP systems and intelligent tutoring solutions. Enhance learning outcomes and streamline administrative processes.',
  keywords: ['education AI', 'AI tutor', 'AI-powered ERP', 'learning analytics', 'personalized learning'],
};

const educationChallenges = [
  {
    title: 'Administrative Burden',
    description: 'Educational institutions spend significant resources on administrative tasks, reducing time and budget available for teaching and learning initiatives.',
    impact: 'Schools and universities allocate up to 30% of their budgets to administrative overhead, with staff spending 40% of their time on paperwork.',
    solution: 'AI-powered ERP systems automate administrative workflows, from enrollment and scheduling to resource allocation and compliance reporting.',
    benefits: [
      'Reduce administrative costs by up to 25%',
      'Free up staff time for student-focused activities',
      'Improve data accuracy and compliance',
      'Enable data-driven decision making'
    ],
    icon: <AcademicCapIcon className="w-6 h-6" />
  },
  {
    title: 'Personalized Learning Gaps',
    description: 'Traditional one-size-fits-all teaching approaches fail to address individual student needs, learning styles, and knowledge gaps.',
    impact: 'Studies show that personalized learning can improve student achievement by 30%, yet most institutions lack resources to provide individualized instruction.',
    solution: 'AI tutoring systems that adapt to each student\'s learning pace, style, and needs while providing real-time feedback and personalized content.',
    benefits: [
      'Increase student engagement and retention',
      'Address individual learning gaps effectively',
      'Provide 24/7 learning support',
      'Scale personalized instruction cost-effectively'
    ],
    icon: <UserGroupIcon className="w-6 h-6" />
  },
  {
    title: 'Learning Analytics Limitations',
    description: 'Educators often lack actionable insights about student performance, engagement patterns, and learning outcomes.',
    impact: 'Without data-driven insights, institutions miss opportunities to improve curriculum design, teaching methods, and student support services.',
    solution: 'AI-powered analytics platforms that process student data to identify patterns, predict outcomes, and recommend interventions.',
    benefits: [
      'Early identification of at-risk students',
      'Curriculum optimization based on learning patterns',
      'Evidence-based teaching strategies',
      'Improved resource allocation'
    ],
    icon: <BookOpenIcon className="w-6 h-6" />
  }
];

const heroStats = [
  {
    label: 'Learning Outcomes',
    value: '40%',
    description: 'Improvement in learning outcomes with AI tutoring'
  },
  {
    label: 'Administrative Costs',
    value: '30%',
    description: 'Reduction in administrative costs with AI-powered ERP'
  },
  {
    label: 'Student Engagement',
    value: '85%',
    description: 'Of students report higher engagement with AI learning tools'
  }
];

export default function EducationPage() {
  return (
    <PageLayout>
      <IndustryHero
        industry="education"
        title="AI-Powered Education Solutions"
        description="Transform educational experiences with intelligent systems that personalize learning, streamline administration, and provide actionable insights for better outcomes."
        challenges={[
          'Administrative burden and operational inefficiencies',
          'One-size-fits-all teaching approaches',
          'Limited insights into student performance and needs'
        ]}
        stats={heroStats}
      />
      
      <ChallengesSolutions challenges={educationChallenges} />
      
      <AIAgentSections
        industryName="Education"
        customerStages={industryAgentData.education?.customerStages || []}
        internalAreas={industryAgentData.education?.internalAreas || []}
      />
      
      <CTASection />
    </PageLayout>
  );
}