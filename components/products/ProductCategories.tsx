'use client'

import { motion } from 'framer-motion'
// Note: Card, Button, and Section are assumed to be basic wrappers/divs
// Import the necessary icons (using Heroicons as in the original)
import {
  CogIcon,
  ChartBarIcon,
  CloudIcon,
  AcademicCapIcon,
  WrenchIcon,
  CheckIcon
} from '@heroicons/react/24/outline'

// Unified Color Scheme based on request: Blue/Gray/White/Black
const ACCENT_COLOR = 'text-blue-600'
const ACCENT_BG = 'bg-blue-600'
const ACCENT_HOVER = 'hover:bg-blue-700'
const ACCENT_LIGHT_BG = 'bg-blue-50'

const ProductCategories = () => {
  // Products data structure is simplified for cleaner presentation
  interface Product {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    capabilities: string[];
    industries: string[];
    href: string;
  }

  const products: Product[] = [
    {
      title: 'CogniAssist',
      description: 'Enterprise-grade agentic AI orchestration platform that enables intelligent automation and decision-making.',
      icon: CogIcon,
      capabilities: ['Multi-agent orchestration', 'Intelligent workflow automation', 'Enterprise integration'],
      industries: ['Banking', 'Healthcare', 'Manufacturing'],
      href: '/products/cogniassist',
    },
    {
      title: 'CogniLoom',
      description: 'AI-powered Kubernetes management platform that simplifies container orchestration with intelligent automation and monitoring.',
      icon: CloudIcon,
      capabilities: ['Automated cluster management', 'Intelligent scaling', 'Security automation'],
      industries: ['DevOps', 'Cloud Native', 'SaaS'],
      href: '/products/cogniloom',
    },
    {
      title: 'CogniAura',
      description: 'Comprehensive analytics and business intelligence platform with AI-powered insights and automated reporting capabilities.',
      icon: ChartBarIcon,
      capabilities: ['Real-time analytics', 'Automated reporting', 'PortBI migration'],
      industries: ['Financial Services', 'Insurance', 'Manufacturing'],
      href: '/products/cogniaura',
    },
    {
      title: 'CogniNova',
      description: 'AI-Powered School ERP and LMS with AI Coach Suite that enhances critical thinking through knowledge graph-based learning.',
      icon: AcademicCapIcon,
      capabilities: ['AI Coach Suite', 'Knowledge graph learning', 'Critical thinking enhancement'],
      industries: ['Education', 'K-12 Schools', 'Higher Education'],
      href: '/products/cogninova',
    },
    {
      title: 'CogniForge',
      description: 'Comprehensive ERP solution integrating all business processes to optimize production, streamline operations, and drive growth.',
      icon: WrenchIcon,
      capabilities: ['Production Planning & MRP', 'Shop Floor Control (MES)', 'Quality Management'],
      industries: ['Manufacturing', 'Process Manufacturing', 'Make-to-Order'],
      href: '/products/cogniforge',
    }
  ]

  return (
    // Replaced 'Section' with div and direct class styling for portability
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header - Minimalist Style */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            AI-Powered <span className={ACCENT_COLOR}>Enterprise Products</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A comprehensive suite transforming your enterprise with intelligent automation and advanced analytics.
          </motion.p>
        </div>

        {/* --- Unified and Symmetrical Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <motion.div
                // Card container with motion effects
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                }}
                className="bg-white border border-gray-200 rounded-3xl p-8 h-full flex flex-col transition-shadow duration-300 shadow-md hover:border-blue-300"
              >

                {/* ICON & TITLE ROW */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-12 h-12 ${ACCENT_LIGHT_BG} rounded-xl flex items-center justify-center shrink-0`}>
                    <product.icon className={`w-6 h-6 ${ACCENT_COLOR}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">
                    {product.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow text-sm">
                  {product.description}
                </p>

                {/* KEY CAPABILITIES (Compressed) */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-widest">
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {/* Show only top 2 capabilities for brevity */}
                    {product.capabilities.slice(0, 2).map((capability) => (
                      <span
                        key={capability}
                        className="flex items-center px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full border border-gray-200"
                      >
                        <CheckIcon className={`w-3 h-3 ${ACCENT_COLOR} mr-1 shrink-0`} />
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>

                {/* INDUSTRIES (Compressed) */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">
                    Industries
                  </h4>
                  <p className="text-sm text-gray-600">
                    {product.industries.slice(0, 2).join(', ')} {product.industries.length > 2 ? ` (+${product.industries.length - 2} more)` : ''}
                  </p>
                </div>

                {/* BUTTON */}
                <a href={product.href} className="mt-auto block">
                  <button className={`w-full ${ACCENT_BG} text-white px-4 py-3 rounded-xl font-semibold ${ACCENT_HOVER} transition-all duration-300`}>
                    Learn More →
                  </button>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategories