'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import Section from '@/components/layout/Section'
import { 
  ChatBubbleLeftRightIcon, 
  DevicePhoneMobileIcon, 
  CogIcon, 
  ChartBarIcon 
} from '@heroicons/react/24/outline'

interface Feature {
  title: string
  description: string
  icon: string
  benefits: string[]
}

interface FeatureShowcaseProps {
  features: Feature[]
}

const FeatureShowcase = ({ features }: FeatureShowcaseProps) => {
  const iconMap = {
    'chat-bubble': ChatBubbleLeftRightIcon,
    'device-mobile': DevicePhoneMobileIcon,
    'cog': CogIcon,
    'chart-bar': ChartBarIcon,
  }

  return (
    <Section background="light-grey" padding="lg">
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-brand-dark-grey mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Powerful Features for Enterprise AI
        </motion.h2>
        <motion.p
          className="text-xl text-brand-medium-grey max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Everything you need to build, deploy, and scale intelligent conversational experiences
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => {
          const IconComponent = iconMap[feature.icon as keyof typeof iconMap]
          
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card padding="lg" className="h-full hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-brand-yellow" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-brand-dark-grey mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-brand-medium-grey mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-brand-dark-grey">
                          <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

export default FeatureShowcase
export { FeatureShowcase }