'use client'

import { motion } from 'framer-motion'

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
    <section className="relative py-20 bg-[#0B0A14] border-t border-[#29263A] overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#7C3AED]/10 rounded-full blur-[140px]" />
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
            Industry-Ready{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC]">
              AI Technology Stack
            </span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-[#B8B6C4] max-w-3xl mx-auto leading-relaxed"
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
              <div className="group relative h-full p-8 bg-[#15151D]/90 rounded-2xl border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] backdrop-blur-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />

                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-[#A78BFA] transition-colors">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#1A1829]/80 text-sm font-medium text-[#A78BFA] rounded-full border border-[#29263A] hover:border-[#8B5CF6]/60 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
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
          <div className="relative p-8 sm:p-10 bg-[#15151D]/90 rounded-3xl border border-[#29263A] shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />

            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Industry AI Implementation Process
              </h3>
              <p className="text-[#B8B6C4] max-w-2xl mx-auto leading-relaxed">
                Our proven methodology ensures successful AI adoption tailored to your industry&apos;s unique challenges and regulatory requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {implementationPhases.map((phase, index) => (
                <div key={phase} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto shadow-[0_0_20px_rgba(139,92,246,0.35)]">
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-white mb-2">{phase}</h4>
                  <p className="text-sm text-[#B8B6C4] leading-relaxed">
                    {index === 0 && 'Comprehensive analysis of industry requirements and regulatory compliance needs'}
                    {index === 1 && 'Custom AI solution architecture designed for your specific industry workflows'}
                    {index === 2 && 'Deployment of AI systems with industry-specific training and integration'}
                    {index === 3 && 'Continuous optimization and scaling based on performance metrics and business outcomes'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IndustryTechnologyStack
