'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Section from '@/components/layout/Section'
import { 
  BuildingOffice2Icon,
  HeartIcon,
  ShoppingBagIcon,
  SignalIcon,
  ShieldCheckIcon,
  TruckIcon
} from '@heroicons/react/24/outline'

const IndustryCategories = () => {
  const industries = [
    {
      title: 'Banking & Finance',
      description: 'Transform financial services with AI-powered risk assessment, fraud detection, and automated compliance solutions.',
      icon: BuildingOffice2Icon,
      solutions: ['Risk Assessment AI', 'Fraud Detection', 'Automated Compliance', 'Customer Analytics'],
      useCases: ['Credit Scoring', 'Anti-Money Laundering', 'Algorithmic Trading', 'Customer Service'],
      href: '/industries/banking'
    },
    {
      title: 'Healthcare',
      description: 'Revolutionize patient care with AI-driven diagnostics, treatment optimization, and operational efficiency solutions.',
      icon: HeartIcon,
      solutions: ['Medical Imaging AI', 'Drug Discovery', 'Patient Monitoring', 'Clinical Decision Support'],
      useCases: ['Radiology Analysis', 'Predictive Analytics', 'Treatment Planning', 'Hospital Operations'],
      href: '/industries/healthcare'
    },
    {
      title: 'Retail ',
      description: 'Enhance customer experience and optimize operations with AI-powered personalization and inventory management.',
      icon: ShoppingBagIcon,
      solutions: ['Recommendation Engine', 'Inventory Optimization', 'Price Intelligence', 'Customer Insights'],
      useCases: ['Personalized Shopping', 'Demand Forecasting', 'Dynamic Pricing', 'Supply Chain'],
      href: '/industries/retail'
    },
    {
      title: 'Telecommunications',
      description: 'Optimize network performance and enhance customer service with intelligent automation and predictive analytics.',
      icon: SignalIcon,
      solutions: ['Network Optimization', 'Predictive Maintenance', 'Customer Churn Prevention', 'Service Automation'],
      useCases: ['5G Network Management', 'Fault Detection', 'Customer Support', 'Resource Planning'],
      href: '/industries/telecom'
    },
    {
      title: 'Insurance',
      description: 'Streamline claims processing and risk assessment with AI-powered underwriting and fraud detection systems.',
      icon: ShieldCheckIcon,
      solutions: ['Claims Processing AI', 'Risk Modeling', 'Fraud Detection', 'Customer Profiling'],
      useCases: ['Automated Underwriting', 'Claims Automation', 'Risk Assessment', 'Policy Optimization'],
      href: '/industries/insurance'
    },
    {
      title: 'Manufacturing',
      description: 'Transform production operations with AI-powered predictive maintenance, quality control, and smart factory automation.',
      icon: TruckIcon,
      solutions: ['Predictive Maintenance', 'Quality Control', 'Production Optimization', 'Resource Efficiency'],
      useCases: ['Equipment Monitoring', 'Defect Detection', 'Process Optimization', 'Energy Management'],
      href: '/industries/manufacturing'
    }
  ]

  return (
    <Section background="white" padding="lg" className="bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          AI Solutions Across Industries
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Tailored AI solutions designed to address the unique challenges and opportunities in your industry
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card padding="lg" className="h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:shadow-blue-100 border-l-4 border-l-blue-400">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <industry.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {industry.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                {industry.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                  AI Solutions
                </h4>
                <div className="flex flex-wrap gap-2">
                  {industry.solutions.map((solution) => (
                    <span
                      key={solution}
                      className="px-2 py-1 bg-blue-50 text-xs font-medium text-blue-700 rounded border border-blue-200"
                    >
                      {solution}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                  Use Cases
                </h4>
                <p className="text-sm text-gray-600">
                  {industry.useCases.join(', ')}
                </p>
              </div>

              <Button variant="outline" className="self-start mt-auto border-blue-400 text-blue-600 hover:bg-blue-400 hover:text-black">
                Explore Solutions →
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default IndustryCategories