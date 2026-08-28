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
      <div className="relative overflow-hidden bg-[#0B0A14]">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-[#08090B]">
          {/* Background ambient glows */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top central purple flare */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#7C3AED]/20 via-[#8B5CF6]/10 to-transparent blur-[120px]" />
            {/* Left violet glow */}
            <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[140px]" />
            {/* Right violet glow */}
            <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#7C3AED]/12 rounded-full blur-[140px]" />

            {/* Star sparkles */}
            <div className="absolute top-16 left-[15%] w-1 h-1 bg-[#A78BFA] rounded-full opacity-60 animate-pulse" />
            <div className="absolute top-28 right-[20%] w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-pulse" />
            <div className="absolute top-44 left-[30%] w-1 h-1 bg-[#8B5CF6] rounded-full opacity-40" />
            <div className="absolute top-60 right-[10%] w-1 h-1 bg-[#A78BFA] rounded-full opacity-50" />
            <div className="absolute bottom-20 left-[8%] w-1.5 h-1.5 bg-[#8B5CF6] rounded-full opacity-60 animate-pulse" />
            <div className="absolute bottom-40 right-[15%] w-1 h-1 bg-white rounded-full opacity-50" />
          </div>

          {/* Animated floating orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#7C3AED]/15 to-[#8B5CF6]/10 rounded-full blur-3xl"
              animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#6D28D9]/10 to-[#A78BFA]/10 rounded-full blur-3xl"
              animate={{ y: [0, 40, 0], x: [0, -30, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-[#8B5CF6]/20 to-transparent rounded-full blur-2xl"
              animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Particle dots */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-[#A78BFA]/50 rounded-full"
                style={{
                  top: `${10 + (i * 7) % 80}%`,
                  left: `${5 + (i * 13) % 90}%`,
                }}
                animate={{ y: [0, -80, 0], opacity: [0.2, 0.7, 0.2] }}
                transition={{
                  duration: 8 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                {/* Product badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center lg:justify-start mb-6"
                >
                  <div className="inline-flex items-center gap-2 bg-[#15151D]/90 border border-[#29263A] shadow-[0_0_18px_rgba(124,58,237,0.2)] text-[#A78BFA] text-xs md:text-sm font-semibold px-5 py-2 rounded-full backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-ping" />
                    <span>{product.name}</span>
                  </div>
                </motion.div>

                {/* Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex justify-center lg:justify-start mb-6"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.35)]">
                    <div className="text-[#A78BFA]">
                      {product.icon}
                    </div>
                  </div>
                </motion.div>

                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                >
                  {product.name}
                </motion.h1>

                <motion.h2
                  className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC] drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {product.tagline}
                </motion.h2>

                <motion.p
                  className="text-lg sm:text-xl text-[#B8B6C4] mb-8 leading-relaxed max-w-2xl"
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
                    <button className="bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] transition-all duration-300 shadow-lg">
                      Schedule Demo
                    </button>
                  </Link>
                  <Link href="/">
                    <button className="border border-[#8B5CF6]/50 text-[#A78BFA] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#8B5CF6]/10 hover:border-[#A78BFA] transition-all duration-300 backdrop-blur-sm">
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
                  <div className="relative bg-[#15151D]/95 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.6)] p-8 border border-[#29263A] hover:border-[#8B5CF6]/60 transition-all duration-300">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent rounded-t-2xl" />
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 flex items-center justify-center text-[#A78BFA]">
                            {product.icon}
                          </div>
                          <div>
                            <div className="font-semibold text-white">{product.name} Dashboard</div>
                            <div className="text-sm text-[#B8B6C4]">Real-time monitoring</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse"></div>
                          <span className="text-sm text-[#A78BFA] font-medium">Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-[#1E1B38] rounded-lg p-4 text-center border border-[#29263A]">
                          <div className="text-2xl font-bold text-[#A78BFA]">24</div>
                          <div className="text-xs text-[#B8B6C4]">Active</div>
                        </div>
                        <div className="bg-[#1E1B38] rounded-lg p-4 text-center border border-[#29263A]">
                          <div className="text-2xl font-bold text-[#A78BFA]">95%</div>
                          <div className="text-xs text-[#B8B6C4]">Efficiency</div>
                        </div>
                        <div className="bg-[#1E1B38] rounded-lg p-4 text-center border border-[#29263A]">
                          <div className="text-2xl font-bold text-[#A78BFA]">1.2k</div>
                          <div className="text-xs text-[#B8B6C4]">Tasks/Hour</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-[#1E1B38] rounded-lg border border-[#29263A]">
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-[#8B5CF6]/30 rounded-full flex items-center justify-center border border-[#8B5CF6]/40">
                              <div className="w-2 h-2 bg-[#A78BFA] rounded-full"></div>
                            </div>
                            <span className="text-sm font-medium text-white">Primary Process</span>
                          </div>
                          <span className="text-xs text-[#A78BFA] font-medium">Running</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-[#1E1B38] rounded-lg border border-[#29263A]">
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-[#8B5CF6]/30 rounded-full flex items-center justify-center border border-[#8B5CF6]/40">
                              <div className="w-2 h-2 bg-[#A78BFA] rounded-full"></div>
                            </div>
                            <span className="text-sm font-medium text-white">Secondary Process</span>
                          </div>
                          <span className="text-xs text-[#A78BFA] font-medium">Processing</span>
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
        <section className="py-20 bg-[#0B0A14]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              {/* Section pill */}
              <div className="inline-flex items-center gap-2 bg-[#15151D]/90 border border-[#29263A] shadow-[0_0_18px_rgba(124,58,237,0.2)] text-[#A78BFA] text-xs font-semibold px-5 py-2 rounded-full mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
                <span>Capabilities</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Key Features
              </h3>
              {/* Neon accent bar */}
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-transparent shadow-[0_0_10px_#8B5CF6] mx-auto mb-4" />
              <p className="text-lg text-[#B8B6C4] max-w-3xl mx-auto">
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
                  className="group relative bg-[#15151D]/95 rounded-2xl p-6 border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.2)] transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#7C3AED]/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 rounded-xl flex items-center justify-center mb-4 group-hover:border-[#A78BFA] group-hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all duration-300">
                    <div className="w-6 h-6 text-[#A78BFA]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A78BFA] transition-colors duration-300">
                    {feature}
                  </h4>
                  <p className="text-[#B8B6C4] text-sm leading-relaxed">
                    Advanced capabilities to enhance your workflow and productivity.
                  </p>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] transition-all duration-500 ease-out w-0 group-hover:w-full" />
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
                {/* Section pill */}
                <div className="inline-flex items-center gap-2 bg-[#15151D]/90 border border-[#29263A] shadow-[0_0_18px_rgba(124,58,237,0.2)] text-[#A78BFA] text-xs font-semibold px-5 py-2 rounded-full mb-6 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
                  <span>Results</span>
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
                  Measurable Business Impact
                </h3>
                <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-transparent shadow-[0_0_10px_#8B5CF6] mx-auto mb-6" />
                <p className="text-xl text-[#B8B6C4] max-w-2xl mx-auto">
                  See how our solutions drive tangible results and transform organizations across industries
                </p>
              </div>
              
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${product.benefits.length <= 4 ? product.benefits.length : 5} gap-8`}>
                {product.benefits.map((benefit, index) => {
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
                      className="group relative"
                    >
                      <div className="relative bg-[#15151D]/95 rounded-2xl p-8 border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.2)] transition-all duration-500 h-full flex flex-col items-center text-center overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />
                        {/* Icon Container */}
                        <div className="w-16 h-16 bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 rounded-full flex items-center justify-center mb-6 group-hover:border-[#A78BFA] group-hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-300">
                          {index === 0 && (
                            <svg className="w-8 h-8 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          )}
                          {index === 1 && (
                            <svg className="w-8 h-8 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                          {index === 2 && (
                            <svg className="w-8 h-8 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                          {index === 3 && (
                            <svg className="w-8 h-8 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col justify-center">
                          {number ? (
                            <>
                              <div className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight bg-gradient-to-r from-white via-[#A78BFA] to-[#8B5CF6] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(139,92,246,0.35)]">
                                {number}
                              </div>
                              <p className="text-[#B8B6C4] font-medium leading-snug">
                                {text}
                              </p>
                            </>
                          ) : (
                            <h4 className="text-xl font-bold text-white group-hover:text-[#A78BFA] transition-colors duration-300">
                              {benefit}
                            </h4>
                          )}
                        </div>

                        {/* Label */}
                        <div className="mt-6 pt-4 border-t border-[#29263A] w-full">
                          <span className="text-xs font-bold text-[#8B5CF6] uppercase tracking-widest">
                            {index === 0 && 'Efficiency'}
                            {index === 1 && 'Accuracy'}
                            {index === 2 && 'Speed'}
                            {index === 3 && 'Cost Savings'}
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] transition-all duration-500 ease-out w-0 group-hover:w-full" />
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