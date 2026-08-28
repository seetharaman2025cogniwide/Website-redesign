'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import Section from '@/components/layout/Section'

interface UseCase {
  title: string
  description: string
  metrics: Record<string, string>
  industry: string
}

interface UseCasesProps {
  cases: UseCase[]
}

const UseCases = ({ cases }: UseCasesProps) => {
  return (
    <Section background="white" padding="lg">
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-brand-dark-grey mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Real-World Applications
        </motion.h2>
        <motion.p
          className="text-xl text-brand-medium-grey max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          See how leading enterprises are transforming their operations with intelligent conversations
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {cases.map((useCase, index) => (
          <motion.div
            key={useCase.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card padding="lg" className="h-full hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-brand-yellow/10 text-brand-dark-grey text-xs font-medium rounded-full">
                  {useCase.industry}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-brand-dark-grey mb-4">
                {useCase.title}
              </h3>
              
              <p className="text-brand-medium-grey mb-6 leading-relaxed">
                {useCase.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-brand-dark-grey uppercase tracking-wide">
                  Key Metrics
                </h4>
                {Object.entries(useCase.metrics).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-sm text-brand-medium-grey capitalize">
                      {key.replace('_', ' ')}
                    </span>
                    <span className="text-sm font-semibold text-brand-dark-grey">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default UseCases