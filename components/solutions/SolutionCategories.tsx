'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Section from '@/components/layout/Section'
import { 
  CogIcon, 
  ChartBarIcon, 
  CloudIcon, 
  BeakerIcon, 
  CommandLineIcon 
} from '@heroicons/react/24/outline'

const SolutionCategories = () => {
  const solutions = [
    {
      title: 'CogniVibe',
      description: 'Comprehensive SDLC framework that integrates AI-powered development tools, automated testing, and intelligent project management.',
      icon: CogIcon,
      capabilities: ['AI-powered development', 'Automated testing', 'Project management', 'Code quality assurance'],
      industries: ['Software Development', 'Enterprise IT', 'Startups', 'Digital Agencies'],
      href: '/solutions/cognivibe'
    },
    {
      title: 'CogniTest',
      description: 'Advanced test automation platform that leverages AI to create, execute, and maintain comprehensive test suites with minimal manual intervention.',
      icon: BeakerIcon,
      capabilities: ['Automated test generation', 'AI-powered test maintenance', 'Cross-platform testing', 'Performance testing'],
      industries: ['QA Teams', 'DevOps', 'Software Testing', 'Enterprise Applications'],
      href: '/solutions/cognitest'
    },
    {
      title: 'CogniOps',
      description: 'Intelligent DevOps platform that automates deployment pipelines, monitors system health, and optimizes infrastructure performance.',
      icon: CommandLineIcon,
      capabilities: ['Automated deployments', 'Infrastructure monitoring', 'Performance optimization', 'Security automation'],
      industries: ['DevOps', 'Cloud Infrastructure', 'Enterprise IT', 'SaaS Platforms'],
      href: '/solutions/cogniops'
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
          AI-Powered Enterprise Solutions
        </motion.h2>
        <motion.p
          className="text-xl text-brand-medium-grey max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Comprehensive suite of AI solutions designed to streamline your development lifecycle and enhance operational efficiency
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card padding="lg" className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center">
                  <solution.icon className="w-6 h-6 text-brand-yellow" />
                </div>
                <h3 className="text-xl font-semibold text-brand-dark-grey">
                  {solution.title}
                </h3>
              </div>

              <p className="text-brand-medium-grey mb-6 leading-relaxed flex-grow">
                {solution.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-brand-dark-grey mb-3 uppercase tracking-wide">
                  Key Capabilities
                </h4>
                <div className="flex flex-wrap gap-2">
                  {solution.capabilities.map((capability) => (
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
                  {solution.industries.join(', ')}
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

export default SolutionCategories