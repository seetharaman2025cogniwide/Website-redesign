'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import Section from '@/components/layout/Section'
import Link from 'next/link'

const ServiceIntegration = () => {
  const integrationPoints = [
    {
      service: 'AI Consulting & Agentic AI Implementation',
      aiProduct: 'CogniAssist',
      integration: 'Deploy enterprise-grade agentic AI orchestration platforms',
      benefit: 'Strategic AI transformation with intelligent agent coordination'
    },
    {
      service: 'AI Powered Application Development',
      aiProduct: 'CogniVibe',
      integration: 'Integrate AI-powered SDLC framework into development workflows',
      benefit: 'Accelerated development with automated workflow optimization'
    },
    {
      service: 'Cloud & DevOps',
      aiProduct: 'CogniOps',
      integration: 'Implement AI-powered DevOps pipelines with Helm chart automation',
      benefit: 'Intelligent infrastructure management and deployment automation'
    },
    {
      service: 'Data Engineering',
      aiProduct: 'CogniAura',
      integration: 'Enable seamless BI migration and MDM with PortBI and CogniCraft',
      benefit: 'Unified analytics platform with intelligent data governance'
    },
    {
      service: 'AI Testing Services',
      aiProduct: 'CogniTest',
      integration: 'Implement comprehensive AI-powered testing automation',
      benefit: 'Intelligent quality assurance with pixel-perfect validation'
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
            Integrated AI Ecosystem
          </motion.h2>
          <motion.p
            className="text-xl text-brand-medium-grey max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our services, products, and solutions work together seamlessly to create a comprehensive AI-powered ecosystem that transforms your entire enterprise
          </motion.p>
        </div>

        <div className="space-y-8">
          {integrationPoints.map((point, index) => (
            <motion.div
              key={point.service}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card padding="lg" className="border-l-4 border-brand-yellow">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark-grey mb-2">
                      {point.service}
                    </h3>
                    <div className="text-sm text-brand-medium-grey">Service</div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-0.5 bg-brand-yellow hidden lg:block" />
                    <div className="w-3 h-3 bg-brand-yellow rounded-full mx-2" />
                    <div className="w-8 h-0.5 bg-brand-yellow hidden lg:block" />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-brand-dark-grey mb-2">
                      {point.aiProduct}
                    </h4>
                    <div className="text-sm text-brand-medium-grey">Product/Solution</div>
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
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Card padding="lg" className="bg-gradient-to-r from-brand-light-grey to-brand-white">
            <h3 className="text-2xl font-bold text-brand-dark-grey mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-brand-medium-grey mb-6 max-w-2xl mx-auto">
              Let our experts design a comprehensive solution that combines our services with AI products to accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex justify-center items-center">
                Schedule Strategy Session
              </Link>
              <Link href="/casestudy" className="btn-secondary inline-flex justify-center items-center">
                View Case Studies
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}

export default ServiceIntegration