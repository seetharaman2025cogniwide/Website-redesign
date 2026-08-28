'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import Section from '@/components/layout/Section'

const IndustryTechnologyStack = () => {
  const techCategories = [
    {
      category: 'AI & Machine Learning',
      technologies: ['Computer Vision', 'Natural Language Processing', 'Predictive Analytics', 'Deep Learning', 'Reinforcement Learning', 'AutoML']
    },
    {
      category: 'Industry-Specific AI',
      technologies: ['Medical Imaging AI', 'Financial Risk Models', 'Supply Chain Optimization', 'Fraud Detection', 'Recommendation Systems', 'Predictive Maintenance']
    },
    {
      category: 'Data Processing & Analytics',
      technologies: ['Real-time Analytics', 'Big Data Processing', 'Data Lakes', 'ETL Pipelines', 'Stream Processing', 'Data Warehousing']
    },
    {
      category: 'Integration & APIs',
      technologies: ['RESTful APIs', 'GraphQL', 'Microservices', 'Event-Driven Architecture', 'Message Queues', 'API Gateways']
    },
    {
      category: 'Security & Compliance',
      technologies: ['Data Encryption', 'GDPR Compliance', 'HIPAA Security', 'SOC 2', 'Zero Trust Architecture', 'Identity Management']
    },
    {
      category: 'Monitoring & Optimization',
      technologies: ['Performance Monitoring', 'AI Model Monitoring', 'Business Intelligence', 'Alerting Systems', 'Cost Optimization', 'Usage Analytics']
    }
  ]

  const implementationPhases = [
    'Industry Assessment',
    'Solution Design', 
    'AI Implementation',
    'Optimization & Scale'
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
          Industry-Ready AI Technology Stack
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Comprehensive technology foundation designed to meet industry-specific requirements with enterprise-grade security and compliance
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {techCategories.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card padding="lg" className="h-full hover:shadow-lg transition-all duration-300 hover:shadow-blue-100 border-l-4 border-l-blue-400">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-50 text-sm font-medium text-blue-700 rounded-full border border-blue-200 hover:bg-blue-100 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Implementation Process */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card padding="lg" className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Industry AI Implementation Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our proven methodology ensures successful AI adoption tailored to your industry's unique challenges and regulatory requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationPhases.map((phase, index) => (
              <div key={phase} className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-black font-bold text-lg mb-4 mx-auto shadow-lg shadow-blue-500/25">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{phase}</h4>
                <p className="text-sm text-gray-600">
                  {index === 0 && 'Comprehensive analysis of industry requirements and regulatory compliance needs'}
                  {index === 1 && 'Custom AI solution architecture designed for your specific industry workflows'}
                  {index === 2 && 'Deployment of AI systems with industry-specific training and integration'}
                  {index === 3 && 'Continuous optimization and scaling based on performance metrics and business outcomes'}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </Section>
  )
}

export default IndustryTechnologyStack