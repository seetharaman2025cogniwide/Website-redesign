import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { ProductHero } from '@/components/products/ProductHero';
import { InteractiveDemo } from '@/components/products/InteractiveDemo';
// import { BeforeAfterComparison } from '@/components/products/BeforeAfterComparison';
import { ArchitectureDiagram } from '@/components/products/ArchitectureDiagram';
import { CogniLoomAgentsShowcase } from '@/components/products/cogniloom/CogniLoomAgentsShowcase';
import CogniLoomDiagram from '@/components/products/CogniLoomDiagram';

import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'CogniLoom - AI-Powered Kubernetes Orchestration Platform | Cogniwide',
  description: 'Simplify Kubernetes management with AI-powered orchestration, automated scaling, intelligent monitoring, and seamless multi-cloud deployment.',
  keywords: [
    'kubernetes orchestration',
    'AI kubernetes',
    'container management',
    'cloud orchestration',
    'automated scaling',
    'kubernetes automation',
    'multi-cloud deployment',
    'intelligent monitoring'
  ],
};

const productData = {
  name: 'CogniLoom',
  tagline: 'Unify, Secure, and Automate DevSecOps with AI Intelligence',
  description: 'Empower your engineering teams with an AI-driven DevSecOps platform that unifies development, security, and operations — delivering intelligent automation, proactive insights, and autonomous infrastructure management across your cloud ecosystem.',
  icon: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  color: 'from-yellow-400 to-yellow-600',
  features: [
    'AI-Powered Auto-Debugging',
    'Multi-Cloud Governance',
    'Smart Observability & Insights',
    'Intelligent Resource Optimization',
    'Automated Security & Compliance Monitoring',
    'Predictive Scaling & Maintenance'
  ],
  benefits: [
    'Reduce infrastructure costs by 40%',
    'Improve application uptime by 99.9%',
    'Accelerate deployment speed by 75%',
    'Minimize manual operations by only 85%'
  ],
  useCases: [
    'Microservices Orchestration',
    'Multi-Cloud Deployment',
    'Auto-Scaling Applications',
    'Container Security Management',
    'DevOps Pipeline Integration',
    'Disaster Recovery Automation'
  ]
};

export default function CogniLoomPage() {
  return (
    <PageLayout>
      <ProductHero product={productData} />
      <InteractiveDemo productName="CogniLoom" />
      {/* AI Agents Section */}
      <CogniLoomAgentsShowcase />
      <ArchitectureDiagram productName="CogniLoom" />
      <CogniLoomDiagram />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Intelligent Orchestration</h3>
              <p className="text-gray-600">AI-driven automation that optimizes DevSecOps performance across clusters and environments</p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Predictive Scaling</h4>
                    <p className="text-gray-600">AI agents forecast workload demand and automatically scale resources to maintain performance and uptime across Kubernetes clusters.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Intelligent Resource Optimization</h4>
                    <p className="text-gray-600">Continuously analyze cluster utilization, identify underused or overcommitted nodes, and rebalance workloads for cost and performance efficiency.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Automated Healing & Drift Prevention</h4>
                    <p className="text-gray-600">Detect anomalies, configuration drifts, and pod failures in real time — triggering automated remediation and restoring system stability before impact.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Multi-Cloud Ready</h4>
                <p className="text-gray-600">Deploy and manage Kubernetes clusters across AWS, Azure, GCP, and on-premises environments with unified control.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}