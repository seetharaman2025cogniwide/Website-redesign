import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { ProductHero } from '@/components/products/ProductHero';
// import { BeforeAfterComparison } from '@/components/products/BeforeAfterComparison';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'CogniNova - AI-Powered School ERP and LMS Platform | Cogniwide',
  description: 'Transform education with AI-powered School ERP, LMS, and AI Coach Suite that enhances critical thinking through knowledge graph-based learning and personalized guidance.',
  keywords: [
    'AI school ERP',
    'educational LMS',
    'AI coach',
    'knowledge graph learning',
    'critical thinking',
    'personalized education',
    'school management system',
    'AI-powered learning',
    'educational technology',
    'student assessment',
    'lesson planning',
    'educational analytics'
  ],
};

const productData = {
  name: 'CogniNova',
  tagline: 'A New Era of Intelligent Learning',
  description: 'AI-Powered School ERP and LMS with AI Coach Suite that enhances students\' critical thinking and teaches driven by lesson plans - Knowledge graph based on syllabus and guides, custom teacher notes.',
  icon: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 17L12 22L21 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 8L16 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M16 8L8 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  color: 'from-yellow-400 to-yellow-600',
  features: [
    'AI-Powered Learning Management System',
    'Knowledge Graph-Based Curriculum',
    'Intelligent Student Assessment',
    'Personalized AI Coach Suite',
    'Critical Thinking Enhancement',
    'Comprehensive School ERP Integration'
  ],
  benefits: [
    'Improve learning outcomes now!',
    'Reduced  workload now',
    'Boost critical thinking skills',
    'Increase learner engagement!!!'
  ]

  ,
  useCases: [
    'Personalized Learning Paths',
    'Automated Student Assessment',
    'Teacher Performance Analytics',
    'Parent-Student Communication',
    'Curriculum Management',
    'School Administration Automation'
  ]
};

export default function CogniNovaPage() {
  return (
    <PageLayout>
      <ProductHero product={productData} />
      {/* <BeforeAfterComparison 
        productName="CogniNova"
        before={{
          title: 'Traditional Educational Systems',
          points: [
            'One-size-fits-all teaching approaches',
            'Manual grading and assessment processes',
            'Limited personalized learning opportunities',
            'Fragmented communication between stakeholders',
            'Time-consuming administrative tasks',
            'Difficulty tracking individual student progress',
            'Static curriculum delivery methods',
            'Limited data-driven insights for improvement'
          ]
        }}
        after={{
          title: 'With CogniNova',
          points: [
            'AI-driven personalized learning experiences',
            'Automated intelligent assessment and feedback',
            'Adaptive learning paths based on student needs',
            'Seamless communication platform for all stakeholders',
            'Streamlined administrative processes with AI automation',
            'Real-time student progress tracking and analytics',
            'Dynamic, knowledge graph-based curriculum delivery',
            'Comprehensive insights for continuous educational improvement'
          ]
        }}
      />
       */}


      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">CogniNova Learning Hub</h3>
              <p className="text-gray-600 mb-6">AI-Powered Educational Platform that revolutionizes learning through intelligent coaching, knowledge graphs, and personalized educational experiences</p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI Coach Suite</h4>
                    <p className="text-gray-600">Personalized AI tutors that adapt to each student's learning style, providing real-time guidance and enhancing critical thinking skills through interactive problem-solving.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Knowledge Graph-Based Learning</h4>
                    <p className="text-gray-600">Dynamic curriculum mapping that connects concepts across subjects, creating personalized learning pathways based on syllabus requirements and individual progress.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Comprehensive School ERP</h4>
                    <p className="text-gray-600">Integrated management system handling admissions, attendance, grades, scheduling, and communication - all powered by AI for maximum efficiency and .</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">CogniNova Learning Hub</h4>
                <p className="text-gray-600">Comprehensive educational ecosystem that combines AI coaching, knowledge graph-based curriculum, and intelligent assessment to create personalized learning journeys for every student.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}