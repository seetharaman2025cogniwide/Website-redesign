'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import Section from '@/components/layout/Section'
import Link from 'next/link'
import CogniForgeDashboard from './CogniForgeDashboard'
import CogniNovaDashboard from './CogniNovaDashboard'
import CogniAssistDashboard from './CogniAgentDashboard'
import CogniLoomDashboard from './CogniLoomDashboard'
import CogniAuraDashboard from './CogniInsightsDashboard'

interface ProductData {
  name: string
  tagline: string
  description: string
  icon: React.ReactNode
  color: string
  features: string[]
  benefits: string[]
  useCases: string[]
}

interface ProductHeroProps {
  title?: string
  subtitle?: string
  primaryCTA?: string
  secondaryCTA?: string
  backgroundPattern?: 'chat' | 'agents' | 'documents'
  product?: ProductData
}

const ProductHero: React.FC<ProductHeroProps> = ({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundPattern,
  product
}) => {
  const patternClasses = {
    chat: 'bg-gradient-to-br from-blue-50 to-indigo-100',
    agents: 'bg-gradient-to-br from-purple-50 to-pink-100',
    documents: 'bg-gradient-to-br from-green-50 to-emerald-100'
  }

  // If product data is provided, use the new enhanced layout
  if (product) {
    return (
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0 bg-brand-blue/5"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(37, 99, 235, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
                animation: 'gridMove 20s linear infinite'
              }}
            />
          </div>

          {/* Floating Geometric Shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large floating circles */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-400/15 to-cyan-400/15 rounded-full blur-3xl"
              animate={{
                y: [0, 40, 0],
                x: [0, -30, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Smaller animated orbs */}
            <motion.div
              className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-500/25 to-transparent rounded-full blur-2xl"
              animate={{
                y: [0, -50, 0],
                x: [0, 30, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/3 left-1/2 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl"
              animate={{
                y: [0, 60, 0],
                x: [0, -40, 0],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Floating geometric shapes */}
            <motion.div
              className="absolute top-20 right-1/4 w-32 h-32 border-2 border-blue-400/30 rounded-2xl"
              animate={{
                rotate: [0, 360],
                y: [0, -20, 0],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            />
            <motion.div
              className="absolute bottom-32 left-1/4 w-24 h-24 border-2 border-purple-400/30 rounded-xl"
              animate={{
                rotate: [0, -360],
                y: [0, 30, 0],
              }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                y: { duration: 10, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.div
              className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-br from-cyan-400/40 to-blue-500/40 rounded-lg"
              animate={{
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Particle dots */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-500/40 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Glassmorphism overlay elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-40 left-10 w-48 h-48 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-40 right-10 w-56 h-56 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20"
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Add keyframe animation for grid */}
          <style jsx>{`
            @keyframes gridMove {
              0% {
                transform: translate(0, 0);
              }
              100% {
                transform: translate(60px, 60px);
              }
            }
          `}</style>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center lg:justify-start mb-6"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-brand-blue shadow-lg">
                    <div className="text-white">
                      {product.icon}
                    </div>
                  </div>
                </motion.div>

                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  {product.name}
                </motion.h1>

                <motion.h2
                  className="text-xl sm:text-2xl lg:text-3xl text-brand-blue mb-6 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {product.tagline}
                </motion.h2>

                <motion.p
                  className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {product.description}
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Link href="/contact">
                    <button className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-blue-dark transition-all shadow-lg hover:shadow-xl">
                      Schedule Demo
                    </button>
                  </Link>
                  <Link href="/">
                    <button className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-blue hover:text-white transition-all">
                      Learn More
                    </button>
                  </Link>
                </motion.div>
              </div>

              {/* Right Visual - Product Specific Dashboard */}
              {product.name === 'CogniForge' && <CogniForgeDashboard />}
              {product.name === 'CogniNova' && <CogniNovaDashboard />}
              {product.name === 'CogniAssist' && <CogniAssistDashboard />}
              {product.name === 'CogniLoom' && <CogniLoomDashboard />}
              {product.name === 'CogniAura' && <CogniAuraDashboard />}
              {product.name !== 'CogniForge' && product.name !== 'CogniNova' && product.name !== 'CogniAssist' && product.name !== 'CogniLoom' && product.name !== 'CogniAura' && (
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                    {/* Generic Dashboard for other products */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white">
                            {product.icon}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{product.name} Dashboard</div>
                            <div className="text-sm text-gray-600">Real-time monitoring</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
                          <span className="text-sm text-brand-green font-medium">Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200">
                          <div className="text-2xl font-bold text-brand-blue">24</div>
                          <div className="text-xs text-gray-600">Active</div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4 text-center border border-green-200">
                          <div className="text-2xl font-bold text-brand-green">95%</div>
                          <div className="text-xs text-gray-600">Efficiency</div>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4 text-center border border-purple-200">
                          <div className="text-2xl font-bold text-brand-purple">1.2k</div>
                          <div className="text-xs text-gray-600">Tasks/Hour</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <span className="text-sm font-medium text-gray-900">Primary Process</span>
                          </div>
                          <span className="text-xs text-brand-green font-medium">Running</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <span className="text-sm font-medium text-gray-900">Secondary Process</span>
                          </div>
                          <span className="text-xs text-brand-blue font-medium">Processing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Key Features
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful capabilities designed to transform your operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.features.slice(0, 6).map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-brand-blue"
                >
                  <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center mb-4">
                    <div className="w-6 h-6 text-white">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Advanced capabilities to enhance your workflow and productivity.
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-24"
            >
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Measurable Business Impact
                </h3>
                <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full mb-6"></div>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  See how our solutions drive tangible results and transform organizations across industries
                </p>
              </div>
              
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${product.benefits.length <= 4 ? product.benefits.length : 5} gap-8`}>
                {product.benefits.map((benefit, index) => {
                  // Helper to parse benefit text for number highlighting
                  const match = benefit.match(/(\d+%?)(.*)/);
                  const number = match ? match[1] : '';
                  const text = match ? match[2] : benefit;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white rounded-2xl transform transition-transform duration-300 group-hover:-translate-y-2"></div>
                      <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-brand-blue/30 transition-all duration-300 h-full flex flex-col items-center text-center group-hover:shadow-xl">
                        {/* Icon Container */}
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors duration-300">
                          {index === 0 && (
                            <svg className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          )}
                          {index === 1 && (
                            <svg className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                          {index === 2 && (
                            <svg className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                          {index === 3 && (
                            <svg className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col justify-center">
                          {number ? (
                            <>
                              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight group-hover:text-brand-blue transition-colors duration-300">
                                {number}
                              </div>
                              <p className="text-gray-600 font-medium leading-snug">
                                {text}
                              </p>
                            </>
                          ) : (
                            <h4 className="text-xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors duration-300">
                              {benefit}
                            </h4>
                          )}
                        </div>

                        {/* Label */}
                        <div className="mt-6 pt-4 border-t border-gray-100 w-full">
                          <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">
                            {index === 0 && 'Efficiency'}
                            {index === 1 && 'Accuracy'}
                            {index === 2 && 'Speed'}
                            {index === 3 && 'Cost Savings'}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    )
  }

  // Original layout for backward compatibility
  return (
    <Section
      background="white"
      padding="xl"
      className={`${patternClasses[backgroundPattern || 'chat']} relative overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {(backgroundPattern || 'chat') === 'chat' && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100" />
        )}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark-grey mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-brand-medium-grey mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button variant="primary" size="lg">
            {primaryCTA}
          </Button>
          <Button variant="secondary" size="lg">
            {secondaryCTA}
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}

export default ProductHero
export { ProductHero }