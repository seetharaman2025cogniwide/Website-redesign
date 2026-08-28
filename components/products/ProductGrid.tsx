'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  RocketLaunchIcon,
  CloudIcon,
  ChartBarIcon,
  CogIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'
import Section from '@/components/layout/Section'

const products = [
  {
    name: 'CogniAssist',
    slug: 'cogniassist',
    tagline: 'AI-powered Agentic Automation Platform',
    description: 'Orchestrate intelligent agents that automate complex business processes with human-like reasoning and decision-making capabilities.',
    features: ['Intelligent Agent Orchestration', 'Multi-modal AI Capabilities', 'Enterprise Integration', 'Scalable Architecture'],
    icon: RocketLaunchIcon,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'CogniLoom',
    slug: 'cogniloom',
    tagline: 'AI-powered Kubernetes Orchestration Platform',
    description: 'Simplify Kubernetes management with AI-powered orchestration, automated scaling, and intelligent monitoring across multi-cloud environments.',
    features: ['AI-Powered Auto-Scaling', 'Multi-Cloud Orchestration', 'Intelligent Monitoring', 'Automated Operations'],
    icon: CloudIcon,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    name: 'CogniAura',
    slug: 'cogniaura',
    tagline: 'Analytics Platform with One-click BI Migration',
    description: 'Transform your data into actionable insights with AI-powered analytics and seamless migration from legacy BI systems.',
    features: ['One-click Migration', 'AI-powered Analytics', 'Real-time Dashboards', 'Enterprise Security'],
    icon: ChartBarIcon,
    color: 'from-green-500 to-teal-500'
  },
  {
    name: 'CogniNova',
    slug: 'cogninova',
    tagline: 'AI-Powered School ERP and LMS',
    description: 'Comprehensive education management platform with AI Coach Suite that enhances critical thinking through knowledge graph-based learning.',
    features: ['AI Coach Suite', 'Knowledge Graph Learning', 'Student Management', 'Performance Analytics'],
    icon: BeakerIcon,
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'CogniForge',
    slug: 'cogniforge',
    tagline: 'Manufacturing ERP Solution',
    description: 'Comprehensive ERP solution integrating all business processes to optimize production, streamline operations, and drive growth.',
    features: ['Production Planning', 'Inventory Management', 'Quality Control', 'Supply Chain Optimization'],
    icon: CogIcon,
    color: 'from-pink-500 to-rose-500'
  }
]

const ProductGrid = () => {
  return (
    <Section background="white" padding="xl">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-grey mb-4">
            Our Product Suite
          </h2>
          <p className="text-xl text-brand-medium-grey max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform every aspect of your business operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  {/* Product Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${product.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Product Info */}
                  <h3 className="text-2xl font-bold text-brand-dark-grey mb-2 group-hover:text-brand-yellow transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 mb-4">
                    <span className="text-brand-dark-grey font-semibold text-sm">
                      {product.tagline}
                    </span>
                  </div>
                  <p className="text-brand-medium-grey mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-brand-medium-grey">
                        <div className="w-2 h-2 bg-brand-yellow rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href={`/products/${product.slug}`}>
                    <button className="w-full bg-brand-yellow text-brand-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg">
                      Learn More
                    </button>
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default ProductGrid