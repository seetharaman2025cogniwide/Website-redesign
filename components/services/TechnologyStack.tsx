'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import Section from '@/components/layout/Section'

const TechnologyStack = () => {
  const techCategories = [
    {
      category: 'AI & Agentic Platforms',
      technologies: ['OpenAI GPT-4', 'Anthropic Claude', 'LangChain', 'AutoGen', 'CrewAI', 'Semantic Kernel']
    },
    {
      category: 'Machine Learning & MLOps',
      technologies: ['TensorFlow', 'PyTorch', 'MLflow', 'Kubeflow', 'Weights & Biases', 'Hugging Face']
    },
    {
      category: 'Cloud & Infrastructure',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform']
    },
    {
      category: 'Data Engineering & Analytics',
      technologies: ['Apache Spark', 'Kafka', 'Snowflake', 'dbt', 'Airflow', 'Databricks']
    },
    {
      category: 'Development & Testing',
      technologies: ['React', 'Next.js', 'Python', 'Node.js', 'TypeScript', 'Playwright']
    },
    {
      category: 'Security & Monitoring',
      technologies: ['Vault', 'Istio', 'Prometheus', 'Grafana', 'Datadog', 'Splunk']
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
          AI-Powered Technology Stack
        </motion.h2>
        <motion.p
          className="text-xl text-brand-medium-grey max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We leverage the latest AI technologies and enterprise-grade platforms to deliver intelligent, scalable solutions that transform your business
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techCategories.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card padding="lg" className="h-full">
              <h3 className="text-lg font-semibold text-brand-dark-grey mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    className="text-center p-3 bg-brand-white rounded-lg border border-brand-light-grey hover:border-brand-yellow transition-colors duration-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-sm font-medium text-brand-dark-grey">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Methodology */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Card padding="lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-brand-dark-grey mb-4">
              AI-Enhanced Delivery Methodology
            </h3>
            <p className="text-brand-medium-grey max-w-3xl mx-auto">
              We follow AI-enhanced methodologies and best practices to accelerate delivery while ensuring quality and scalability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['AI Strategy & Discovery', 'Intelligent Architecture', 'AI-Enhanced Development', 'Automated Deployment'].map((phase, index) => (
              <div key={phase} className="text-center">
                <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark-grey font-bold text-lg mx-auto mb-4">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-brand-dark-grey mb-2">{phase}</h4>
                <p className="text-sm text-brand-medium-grey">
                  {index === 0 && 'AI-powered requirements analysis and strategic planning'}
                  {index === 1 && 'Intelligent system design with AI integration points'}
                  {index === 2 && 'AI-assisted development with automated testing'}
                  {index === 3 && 'Automated deployment with AI-powered monitoring'}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </Section>
  )
}

export default TechnologyStack