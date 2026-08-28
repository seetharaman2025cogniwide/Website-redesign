'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BankIcon, HeartIcon, ShoppingBagIcon, RadioIcon, ShieldIcon, TruckIcon, EducationIcon } from '@/components/ui/icons'
import Section from '@/components/layout/Section'

const industries = [
  {
    name: 'Education',
    slug: 'education',
    description: 'Transform education with AI-powered ERP systems and intelligent tutoring solutions that enhance learning outcomes.',
    icon: EducationIcon,
    challenges: [
      'Administrative burden on staff',
      'Personalized learning gaps',
      'Learning analytics limitations',
      'Resource allocation inefficiencies'
    ],
    solutions: [
      'AI-powered ERP systems',
      'Intelligent tutoring systems',
      'Predictive learning analytics',
      'Automated administrative workflows'
    ],
    caseStudy: {
      company: 'Leading University',
      result: 'Reduced administrative costs by 25% and improved student outcomes by 30%'
    },
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    iconBg: 'bg-brand-green',
    accentColor: 'text-brand-green'
  },
  {
    name: 'Banking & Finance',
    slug: 'banking',
    description: 'Revolutionize financial services with AI-powered automation, risk management, and customer experience solutions.',
    icon: BankIcon,
    challenges: [
      'Complex regulatory compliance requirements',
      'Legacy system integration challenges',
      'Fraud detection and prevention',
      'Customer onboarding inefficiencies'
    ],
    solutions: [
      'Automated compliance monitoring and reporting',
      'AI-powered fraud detection systems',
      'Intelligent document processing for KYC',
      'Conversational AI for customer support'
    ],
    caseStudy: {
      company: 'Global Investment Bank',
      result: 'Reduced compliance processing time by 75% and improved fraud detection accuracy by 40%'
    },
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconBg: 'bg-brand-blue',
    accentColor: 'text-brand-blue'
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    description: 'Enhance patient care and operational efficiency with AI solutions designed for healthcare providers.',
    icon: HeartIcon,
    challenges: [
      'Patient data management complexity',
      'Administrative burden on staff',
      'Treatment protocol optimization',
      'Resource allocation inefficiencies'
    ],
    solutions: [
      'Intelligent patient record management',
      'Automated appointment scheduling',
      'AI-assisted diagnosis support',
      'Predictive analytics for resource planning'
    ],
    caseStudy: {
      company: 'Regional Health System',
      result: 'Improved patient satisfaction by 35% and reduced administrative costs by 50%'
    },
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    iconBg: 'bg-brand-red',
    accentColor: 'text-brand-red'
  },
  {
    name: 'Retail ',
    slug: 'retail',
    description: 'Transform customer experiences and optimize operations with AI-driven retail solutions.',
    icon: ShoppingBagIcon,
    challenges: [
      'Inventory management complexity',
      'Personalized customer experiences',
      'Supply chain optimization',
      'Dynamic pricing strategies'
    ],
    solutions: [
      'AI-powered demand forecasting',
      'Personalized recommendation engines',
      'Automated inventory optimization',
      'Dynamic pricing algorithms'
    ],
    caseStudy: {
      company: 'Major Retail Chain',
      result: 'Increased sales by 25% and reduced inventory costs by 30% through AI optimization'
    },
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    iconBg: 'bg-brand-purple',
    accentColor: 'text-brand-purple'
  },
  {
    name: 'Telecommunications',
    slug: 'telecom',
    description: 'Optimize network performance and enhance customer service with telecom-specific AI solutions.',
    icon: RadioIcon,
    challenges: [
      'Network optimization and maintenance',
      'Customer churn prediction',
      'Service quality monitoring',
      'Capacity planning challenges'
    ],
    solutions: [
      'Predictive network maintenance',
      'AI-powered customer retention',
      'Automated service quality assurance',
      'Intelligent capacity planning'
    ],
    caseStudy: {
      company: 'National Telecom Provider',
      result: 'Reduced network downtime by 60% and improved customer retention by 20%'
    },
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    iconBg: 'bg-brand-yellow',
    accentColor: 'text-brand-yellow-dark'
  },
  {
    name: 'Insurance',
    slug: 'insurance',
    description: 'Streamline claims processing and risk assessment with AI-powered insurance solutions.',
    icon: ShieldIcon,
    challenges: [
      'Claims processing inefficiencies',
      'Risk assessment accuracy',
      'Fraud detection and prevention',
      'Customer service automation'
    ],
    solutions: [
      'Automated claims processing',
      'AI-powered risk modeling',
      'Intelligent fraud detection',
      'Conversational AI for customer service'
    ],
    caseStudy: {
      company: 'Leading Insurance Company',
      result: 'Accelerated claims processing by 80% and improved fraud detection by 45%'
    },
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconBg: 'bg-brand-blue',
    accentColor: 'text-brand-blue'
  },
  {
    name: 'Logistics & Supply Chain',
    slug: 'logistics',
    description: 'Optimize supply chain operations and delivery networks with intelligent logistics solutions.',
    icon: TruckIcon,
    challenges: [
      'Route optimization complexity',
      'Demand forecasting accuracy',
      'Warehouse automation needs',
      'Real-time tracking requirements'
    ],
    solutions: [
      'AI-powered route optimization',
      'Predictive demand planning',
      'Automated warehouse management',
      'Real-time shipment tracking'
    ],
    caseStudy: {
      company: 'Global Logistics Provider',
      result: 'Reduced delivery times by 30% and cut operational costs by 25%'
    },
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    iconBg: 'bg-brand-green',
    accentColor: 'text-brand-green'
  }
]

const IndustriesGrid = () => {
  return (
    <Section background="white" padding="xl">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized AI solutions tailored to the unique challenges and opportunities of your industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
            return (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`${industry.bgColor} rounded-xl p-6 border-2 ${industry.borderColor} hover:shadow-lg transition-all duration-300 h-full flex flex-col`}>
                  {/* Industry Icon */}
                  <div className={`w-12 h-12 rounded-lg ${industry.iconBg} flex items-center justify-center text-white mb-4`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Industry Info */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Key Solutions */}
                  <div className="mb-4 flex-grow">
                    <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                      Key Solutions
                    </h4>
                    <ul className="space-y-1.5">
                      {industry.solutions.slice(0, 3).map((solution, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className={`w-1.5 h-1.5 ${industry.iconBg} rounded-full mr-2 flex-shrink-0`}></div>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Case Study Result */}
                  <div className="bg-white rounded-lg p-3 mb-4 border border-gray-200">
                    <div className="text-xs font-semibold text-gray-500 mb-1">
                      Success Story
                    </div>
                    <div className="text-sm text-gray-900 font-medium">
                      {industry.caseStudy.result}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href={`/industries/${industry.slug}`}>
                    <button className={`w-full ${industry.iconBg} text-white px-4 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity duration-200`}>
                      Explore Solutions
                    </button>
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default IndustriesGrid