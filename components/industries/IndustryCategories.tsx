'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
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
    <section className="relative py-20 bg-[#0B0A14] border-t border-[#29263A] overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            AI Solutions Across{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC]">
              Industries
            </span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-[#B8B6C4] max-w-3xl mx-auto leading-relaxed"
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
              <div className="group relative h-full flex flex-col p-8 bg-[#15151D]/90 rounded-2xl border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] backdrop-blur-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />

                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-[#1A1829] border border-[#8B5CF6]/30 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:border-[#8B5CF6]/60 transition-all duration-300">
                    <industry.icon className="w-6 h-6 text-[#A78BFA]" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#A78BFA] transition-colors">
                    {industry.title}
                  </h3>
                </div>

                <p className="text-[#B8B6C4] mb-6 leading-relaxed flex-grow">
                  {industry.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
                    AI Solutions
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.solutions.map((solution) => (
                      <span
                        key={solution}
                        className="px-2 py-1 bg-[#1A1829]/80 text-xs font-medium text-[#A78BFA] rounded border border-[#29263A]"
                      >
                        {solution}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">
                    Use Cases
                  </h4>
                  <p className="text-sm text-[#777583]">
                    {industry.useCases.join(', ')}
                  </p>
                </div>

                <Link
                  href={industry.href}
                  className="self-start mt-auto inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A1829]/80 border border-[#29263A] hover:border-[#8B5CF6] text-[#A78BFA] hover:text-white font-semibold text-sm rounded-lg transition-all duration-300"
                >
                  Explore Solutions
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustryCategories
