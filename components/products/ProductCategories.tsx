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

// Dark theme tokens
const ACCENT_COLOR = 'text-[#A78BFA]'
const ACCENT_BG = 'bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6]'
const ACCENT_HOVER = 'hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]'
const ACCENT_LIGHT_BG = 'bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40'

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
    <section className="py-20 lg:py-28 bg-[#0D0C1A] relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#7C3AED]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#8B5CF6]/8 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 bg-[#15151D]/90 border border-[#29263A] shadow-[0_0_18px_rgba(124,58,237,0.2)] text-[#A78BFA] text-xs font-semibold px-5 py-2 rounded-full mb-6 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
            <span className="uppercase tracking-wider">Our Products</span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC]">Enterprise Products</span>
          </motion.h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-transparent shadow-[0_0_10px_#8B5CF6] mx-auto mb-4" />
          <motion.p
            className="text-lg text-[#B8B6C4] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A comprehensive suite transforming your enterprise with intelligent automation and advanced analytics.
          </motion.p>
        </div>

        {/* Grid */}
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
                whileHover={{ scale: 1.01 }}
                className="group relative bg-[#15151D]/95 border border-[#29263A] hover:border-[#8B5CF6]/60 rounded-3xl p-8 h-full flex flex-col shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.2)] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#7C3AED]/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* ICON & TITLE */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 rounded-xl flex items-center justify-center shrink-0 group-hover:border-[#A78BFA] group-hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all duration-300">
                    <product.icon className="w-6 h-6 text-[#A78BFA]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1 group-hover:text-[#A78BFA] transition-colors duration-300">
                    {product.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className="text-[#B8B6C4] mb-6 leading-relaxed flex-grow text-sm">
                  {product.description}
                </p>

                {/* KEY CAPABILITIES */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-[#A78BFA]/70 mb-3 uppercase tracking-widest">
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.capabilities.slice(0, 2).map((capability) => (
                      <span
                        key={capability}
                        className="flex items-center px-3 py-1 text-xs font-medium bg-[#1E1B38] text-[#B8B6C4] rounded-full border border-[#29263A]"
                      >
                        <CheckIcon className="w-3 h-3 text-[#8B5CF6] mr-1 shrink-0" />
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>

                {/* INDUSTRIES */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-[#A78BFA]/70 mb-2 uppercase tracking-widest">
                    Industries
                  </h4>
                  <p className="text-sm text-[#B8B6C4]">
                    {product.industries.slice(0, 2).join(', ')}{product.industries.length > 2 ? ` (+${product.industries.length - 2} more)` : ''}
                  </p>
                </div>

                {/* BUTTON */}
                <a href={product.href} className="mt-auto block">
                  <button className="w-full bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white px-4 py-3 rounded-xl font-semibold hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all duration-300">
                    Learn More →
                  </button>
                </a>
                <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] transition-all duration-500 ease-out w-0 group-hover:w-full" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategories