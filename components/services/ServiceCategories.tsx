'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Section from '@/components/layout/Section'
import { 
  CodeBracketIcon, 
  CloudIcon, 
  ChartBarIcon, 
  CogIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline'

const ServiceCategories = () => {
  const services = [
    {
      title: 'AI Consulting & Agentic AI Implementation',
      description: 'Market-leading AI strategy consulting and agentic AI implementation services to transform your enterprise with intelligent automation.',
      icon: CogIcon,
      capabilities: ['AI strategy development', 'Agentic AI architecture', 'Enterprise AI transformation', 'AI governance frameworks'],
      industries: ['Banking', 'Healthcare', 'Manufacturing', 'Retail'],
      href: '/services/ai-consulting'
    },
    {
      title: 'AI Powered Application Development & Testing',
      description: 'AI-enhanced development methodologies and intelligent testing frameworks that accelerate delivery while improving quality.',
      icon: CodeBracketIcon,
      capabilities: ['AI-enhanced development', 'Intelligent testing automation', 'Quality assurance with AI', 'CogniVibe integration'],
      industries: ['FinTech', 'HealthTech', 'SaaS'],
      href: '/services/ai-development'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Comprehensive cloud consulting, engineering, migration, and managed services with AI-powered optimization and automation.',
      icon: CloudIcon,
      capabilities: ['Cloud consulting & strategy', 'Cloud engineering & migration', 'DevOps automation', 'Managed cloud services'],
      industries: ['Enterprise', 'Startups', 'Government', 'Healthcare'],
      href: '/services/cloud-devops'
    },
    {
      title: 'Data Engineering',
      description: 'AI-powered data pipeline and analytics infrastructure services that transform raw data into actionable business intelligence.',
      icon: ChartBarIcon,
      capabilities: ['AI-powered data pipelines', 'Real-time analytics', 'ML infrastructure', 'Data governance & quality'],
      industries: ['Healthcare', 'Insurance', 'Logistics', 'Financial Services'],
      href: '/services/data-engineering'
    },
    {
      title: 'Quality Engineering',
      description: 'AI-driven quality engineering and assurance to guarantee software reliability, performance, and security.',
      icon: ShieldCheckIcon,
      capabilities: ['Automated Testing', 'Performance Engineering', 'AI-driven Test Generation', 'Security Assurance'],
      industries: ['Enterprise', 'FinTech', 'HealthTech', 'E-commerce'],
      href: '/services/quality-engineering'
    }
  ]

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
          AI-Powered Enterprise Services
        </motion.h2>
        <motion.p
          className="text-xl text-brand-medium-grey max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          From AI strategy to implementation, our expert teams deliver intelligent solutions that transform your enterprise with cutting-edge AI technologies
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card padding="lg" className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-brand-yellow" />
                </div>
                <h3 className="text-xl font-semibold text-brand-dark-grey">
                  {service.title}
                </h3>
              </div>

              <p className="text-brand-medium-grey mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-brand-dark-grey mb-3 uppercase tracking-wide">
                  Key Capabilities
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.capabilities.map((capability) => (
                    <span
                      key={capability}
                      className="px-2 py-1 bg-brand-white text-xs font-medium text-brand-dark-grey rounded border border-brand-light-grey"
                    >
                      {capability}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-brand-dark-grey mb-2 uppercase tracking-wide">
                  Industries
                </h4>
                <p className="text-sm text-brand-medium-grey">
                  {service.industries.join(', ')}
                </p>
              </div>

              <Button variant="outline" className="self-start mt-auto">
                Learn More →
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default ServiceCategories