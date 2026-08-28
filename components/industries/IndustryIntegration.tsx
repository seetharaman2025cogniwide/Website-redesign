'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import Section from '@/components/layout/Section'

const IndustryIntegration = () => {
  const integrationPoints = [
    {
      industry: 'Banking & Finance',
      solution: 'CogniAssist',
      integration: 'Deploy intelligent risk assessment with automated compliance workflows',
      benefit: 'Real-time fraud detection with regulatory compliance automation'
    },
    {
      industry: 'Healthcare',
      solution: 'CogniAura',
      integration: 'Integrate medical imaging AI with patient data analytics',
      benefit: 'Enhanced diagnostic accuracy with comprehensive patient insights'
    },
    {
      industry: 'Retail ',
      solution: 'CogniAssist',
      integration: 'Implement personalized recommendation engines with inventory optimization',
      benefit: 'Increased sales conversion with optimized supply chain management'
    },
    {
      industry: 'Telecommunications',
      solution: 'CogniLoom',
      integration: 'Enable network optimization with predictive maintenance automation',
      benefit: 'Improved network performance with reduced downtime and operational costs'
    },
    {
      industry: 'Insurance',
      solution: 'CogniAura',
      integration: 'Automate claims processing with AI-powered risk assessment',
      benefit: 'Faster claim resolution with accurate risk modeling and fraud prevention'
    },
    {
      industry: 'Manufacturing',
      solution: 'CogniAssist',
      integration: 'Optimize delivery routes with intelligent warehouse automation',
      benefit: 'Reduced delivery times with enhanced inventory management and cost savings'
    }
  ]

  return (
    <Section background="white" padding="lg" className="bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Industry-Tailored AI Integration
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our AI solutions seamlessly integrate with industry-specific workflows to deliver maximum value and operational efficiency
          </motion.p>
        </div>

        <div className="space-y-8">
          {integrationPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card padding="lg" className="hover:shadow-lg transition-all duration-300 hover:shadow-blue-100 border-l-4 border-l-blue-400">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {point.industry}
                    </h4>
                    <div className="text-sm text-gray-600">Industry</div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-8 h-0.5 bg-blue-400 hidden lg:block" />
                    <div className="w-3 h-3 bg-blue-400 rounded-full mx-2" />
                    <div className="w-8 h-0.5 bg-blue-400 hidden lg:block" />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {point.solution}
                    </h4>
                    <div className="text-sm text-gray-600">AI Solution</div>
                  </div>

                  <div>
                    <p className="text-gray-900 font-medium mb-2">
                      {point.integration}
                    </p>
                    <p className="text-sm text-gray-600">
                      {point.benefit}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card padding="lg" className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Industry?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Discover how our industry-specific AI solutions can revolutionize your business operations with intelligent automation tailored to your sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-blue-500 text-black font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/25">
                Schedule Industry Demo
              </button>
              <button className="px-6 py-3 border border-blue-500 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Explore Solutions
              </button>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}

export default IndustryIntegration