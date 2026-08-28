'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import Section from '@/components/layout/Section'
import Link from 'next/link'

const SolutionIntegration = () => {
  const integrationPoints = [
    {
      solution: 'CogniVibe',
      product: 'CogniAssist',
      integration: 'Integrate AI agent orchestration within SDLC workflows',
      benefit: 'Intelligent development lifecycle with automated agent assistance'
    },
    {
      solution: 'CogniTest',
      product: 'CogniAura',
      integration: 'Enable comprehensive test analytics with AI-powered insights',
      benefit: 'Data-driven testing strategies with intelligent quality metrics'
    },
    {
      solution: 'CogniOps',
      product: 'CogniLoom',
      integration: 'Deploy Kubernetes management with automated DevOps pipelines',
      benefit: 'Seamless container orchestration with intelligent deployment automation'
    },
    {
      solution: 'CogniVibe',
      product: 'CogniAura',
      integration: 'Implement development analytics with comprehensive project insights',
      benefit: 'Enhanced project visibility with intelligent development metrics'
    },
    {
      solution: 'CogniOps',
      product: 'CogniAssist',
      integration: 'Automate operations with intelligent agent-driven workflows',
      benefit: 'Optimized operational efficiency with AI-powered automation'
    }
  ]

  return (
    <Section background="white" padding="lg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-brand-dark-grey mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Integrated AI Solution Ecosystem
          </motion.h2>
          <motion.p
            className="text-xl text-brand-medium-grey max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our AI solutions work seamlessly together with our products to create a comprehensive intelligent development and operations platform
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
              <Card padding="lg" className="hover:shadow-lg transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-brand-dark-grey mb-2">
                      {point.solution}
                    </h4>
                    <div className="text-sm text-brand-medium-grey">Solution</div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-8 h-0.5 bg-brand-yellow hidden lg:block" />
                    <div className="w-3 h-3 bg-brand-yellow rounded-full mx-2" />
                    <div className="w-8 h-0.5 bg-brand-yellow hidden lg:block" />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-brand-dark-grey mb-2">
                      {point.product}
                    </h4>
                    <div className="text-sm text-brand-medium-grey">Product</div>
                  </div>

                  <div>
                    <p className="text-brand-dark-grey font-medium mb-2">
                      {point.integration}
                    </p>
                    <p className="text-sm text-brand-medium-grey">
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
          <Card padding="lg" className="bg-gradient-to-r from-brand-yellow/5 to-brand-yellow/10 border-brand-yellow/20">
            <h3 className="text-2xl font-bold text-brand-dark-grey mb-4">
              Ready to Streamline Your Development?
            </h3>
            <p className="text-brand-medium-grey mb-6 max-w-2xl mx-auto">
              Discover how our integrated AI solutions can revolutionize your development lifecycle with intelligent automation and enhanced productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-brand-yellow text-brand-dark-grey font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors inline-flex justify-center items-center">
                Schedule Demo
              </Link>
              <Link href="/products" className="px-6 py-3 border border-brand-yellow text-brand-yellow font-semibold rounded-lg hover:bg-brand-yellow/10 transition-colors inline-flex justify-center items-center">
                View Products
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}

export default SolutionIntegration