'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import Section from '@/components/layout/Section'

const SolutionTechnologyStack = () => {
  const techCategories = [
    {
      category: 'Development Frameworks',
      technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Python Django']
    },
    {
      category: 'Testing & QA Tools',
      technologies: ['Selenium', 'Cypress', 'Jest', 'Playwright', 'TestNG', 'Pytest']
    },
    {
      category: 'DevOps & CI/CD',
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      category: 'Monitoring & Analytics',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic', 'Splunk']
    },
    {
      category: 'Cloud Platforms',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Heroku', 'DigitalOcean', 'Vercel']
    },
    {
      category: 'AI & Automation',
      technologies: ['OpenAI API', 'TensorFlow', 'PyTorch', 'AutoML', 'MLflow', 'Kubeflow']
    }
  ]

  const developmentPhases = [
    'Requirements Analysis',
    'Solution Architecture', 
    'Implementation & Testing',
    'Deployment & Optimization'
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
          AI-Powered Solution Technology Stack
        </motion.h2>
        <motion.p
          className="text-xl text-brand-medium-grey max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Built on industry-leading technologies and frameworks to deliver comprehensive AI solutions with enhanced development efficiency and operational excellence
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
            <Card padding="lg" className="h-full hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-brand-dark-grey mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-brand-yellow/10 text-sm font-medium text-brand-dark-grey rounded-full border border-brand-yellow/20 hover:bg-brand-yellow/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Development Process */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card padding="lg" className="bg-gradient-to-r from-brand-white to-brand-yellow/5">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-brand-dark-grey mb-4">
              AI-Enhanced Solution Development Process
            </h3>
            <p className="text-brand-medium-grey max-w-2xl mx-auto">
              Our systematic approach ensures rapid delivery of high-quality AI solutions with continuous optimization and intelligent automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentPhases.map((phase, index) => (
              <div key={phase} className="text-center">
                <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark-grey font-bold text-lg mb-4 mx-auto">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-brand-dark-grey mb-2">{phase}</h4>
                <p className="text-sm text-brand-medium-grey">
                  {index === 0 && 'AI-powered business analysis and solution strategy planning'}
                  {index === 1 && 'Intelligent solution architecture with scalable framework design'}
                  {index === 2 && 'AI-assisted implementation with automated testing and validation'}
                  {index === 3 && 'Automated deployment with AI-powered monitoring and continuous optimization'}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </Section>
  )
}

export default SolutionTechnologyStack