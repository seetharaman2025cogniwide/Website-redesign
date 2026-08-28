'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Section from '@/components/layout/Section'

const solutions = [
  {
    name: 'CogniVibe',
    tagline: 'AI-Powered SDLC Framework',
    description: 'Unify your entire software development lifecycle. Automate workflows, eliminate friction, and ship world-class products faster than ever.',
    features: [
      'Unified SDLC Framework',
      'Intelligent Workflow Automation',
      'Friction Elimination Engine',
      'Accelerated Product Delivery',
      'Cross-Team Collaboration Tools',
      'Real-time Progress Tracking'
    ],
    benefits: [
      'Reduce development cycle time by 70%',
      'Eliminate workflow bottlenecks',
      'Improve team collaboration by 60%',
      'Accelerate time-to-market by 50%'
    ],
    href: '/solutions/cognivibe',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: 'from-indigo-600 to-purple-600'
  },
  {
    name: 'CogniTest',
    tagline: 'AI-Powered Test Automation Solution',
    description: 'Automate functional and non-functional testing, generate test data, and compare screens pixel-by-pixel with CogniPixel.',
    features: [
      'Comprehensive Test Automation',
      'AI-Powered Test Data Generation',
      'CogniPixel Screen Comparison',
      'Functional & Non-Functional Testing',
      'Intelligent Test Case Creation',
      'Real-time Quality Monitoring'
    ],
    benefits: [
      'Reduce testing time by 80%',
      'Improve test coverage by 90%',
      'Eliminate manual testing errors',
      'Accelerate release cycles by 60%'
    ],
    href: '/solutions/cognitest',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: 'from-emerald-600 to-teal-600'
  },
  {
    name: 'CogniOps',
    tagline: 'AI-Powered Cloud & DevOps Solution',
    description: 'Create and deploy DevOps pipelines seamlessly with Helm charts. Migrate from any cloud with existing services.',
    features: [
      'Seamless DevOps Pipeline Creation',
      'Helm Chart Integration',
      'Cloud-to-Cloud Migration',
      'Infrastructure Automation',
      'Multi-Cloud Deployment',
      'Continuous Integration/Deployment'
    ],
    benefits: [
      'Reduce deployment time by 85%',
      'Eliminate infrastructure complexity',
      'Improve deployment reliability by 95%',
      'Accelerate cloud migration by 70%'
    ],
    href: '/solutions/cogniops',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 16.5C3 15 3 12.5 4.5 11L11 4.5C12.5 3 15 3 16.5 4.5C18 6 18 8.5 16.5 10L13 13.5C12.5 14 11.5 14 11 13.5C10.5 13 10.5 12 11 11.5L14.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.5 7.5L10 10C9.5 10.5 9.5 11.5 10 12C10.5 12.5 11.5 12.5 12 12L15.5 8.5C17 7 17 4.5 15.5 3C14 1.5 11.5 1.5 10 3L3.5 9.5C2 11 2 13.5 3.5 15C5 16.5 7.5 16.5 9 15L12.5 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: 'from-orange-600 to-red-600'
  }
]

const SolutionsGrid = () => {
  return (
    <Section background="white" padding="xl">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-grey mb-4">
            Our Solution Framework
          </h2>
          <p className="text-xl text-brand-medium-grey max-w-3xl mx-auto">
            Comprehensive AI-powered frameworks that streamline development, testing, and deployment processes
          </p>
        </motion.div>

        <div className="space-y-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.color} flex items-center justify-center text-white shadow-lg`}>
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-brand-dark-grey">{solution.name}</h3>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 mt-2">
                      <span className="text-brand-dark-grey font-semibold text-sm">
                        {solution.tagline}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-brand-medium-grey mb-8 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-brand-dark-grey mb-4 text-sm uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {solution.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-brand-yellow rounded-full flex-shrink-0"></div>
                          <span className="text-brand-medium-grey text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark-grey mb-4 text-sm uppercase tracking-wide">
                      Business Impact
                    </h4>
                    <ul className="space-y-3">
                      {solution.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-brand-medium-grey text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Link href={solution.href}>
                  <button className="bg-brand-yellow text-brand-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg">
                    Learn More About {solution.name}
                  </button>
                </Link>
              </div>
              
              <div className="flex-1">
                <div className={`bg-gradient-to-br ${solution.color} rounded-2xl p-8 text-white shadow-xl`}>
                  <div className="aspect-video bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        {solution.icon}
                      </div>
                      <h4 className="text-xl font-semibold mb-2">
                        Interactive Demo
                      </h4>
                      <p className="text-white/80">
                        Experience {solution.name} in action
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default SolutionsGrid