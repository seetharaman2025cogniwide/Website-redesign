'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import Section from '@/components/layout/Section'

interface IndustryData {
  name: string
  tagline: string
  description: string
  icon: React.ReactNode
  color: string
  features: string[]
  benefits: string[]
  useCases: string[]
}

interface IndustriesHeroProps {
  title?: string
  subtitle?: string
  primaryCTA?: string
  secondaryCTA?: string
  backgroundPattern?: 'banking' | 'healthcare' | 'retail' | 'telecom' | 'insurance' | 'manufacturing'
  industry?: IndustryData
}

const IndustriesHero = ({ title, subtitle, primaryCTA, secondaryCTA, backgroundPattern, industry }: IndustriesHeroProps) => {
  const patternClasses = {
    banking: 'bg-gradient-to-br from-blue-50 to-indigo-100',
    healthcare: 'bg-gradient-to-br from-green-50 to-emerald-100',
    retail: 'bg-gradient-to-br from-purple-50 to-pink-100',
    telecom: 'bg-gradient-to-br from-orange-50 to-red-100',
    insurance: 'bg-gradient-to-br from-cyan-50 to-blue-100',
    logistics: 'bg-gradient-to-br from-yellow-50 to-amber-100',
  manufacturing: 'bg-gradient-to-br from-yellow-50 to-amber-100'
  }

  // If industry data is provided, use the enhanced layout
  if (industry) {
    return (
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
          {/* Dynamic Wave Background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Wave Layers */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 800">
              <defs>
                <filter id="blur">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
                </filter>
              </defs>
              
              {/* Wave 1 */}
              <motion.path
                d="M 0 400 Q 300 350 600 400 T 1200 400 L 1200 800 L 0 800 Z"
                fill="rgba(59, 130, 246, 0.1)"
                animate={{
                  d: [
                    "M 0 400 Q 300 350 600 400 T 1200 400 L 1200 800 L 0 800 Z",
                    "M 0 450 Q 300 400 600 450 T 1200 450 L 1200 800 L 0 800 Z",
                    "M 0 400 Q 300 350 600 400 T 1200 400 L 1200 800 L 0 800 Z"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Wave 2 */}
              <motion.path
                d="M 0 450 Q 300 400 600 450 T 1200 450 L 1200 800 L 0 800 Z"
                fill="rgba(34, 197, 255, 0.08)"
                animate={{
                  d: [
                    "M 0 450 Q 300 400 600 450 T 1200 450 L 1200 800 L 0 800 Z",
                    "M 0 500 Q 300 450 600 500 T 1200 500 L 1200 800 L 0 800 Z",
                    "M 0 450 Q 300 400 600 450 T 1200 450 L 1200 800 L 0 800 Z"
                  ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Wave 3 */}
              <motion.path
                d="M 0 500 Q 300 450 600 500 T 1200 500 L 1200 800 L 0 800 Z"
                fill="rgba(6, 182, 212, 0.06)"
                animate={{
                  d: [
                    "M 0 500 Q 300 450 600 500 T 1200 500 L 1200 800 L 0 800 Z",
                    "M 0 400 Q 300 350 600 400 T 1200 400 L 1200 800 L 0 800 Z",
                    "M 0 500 Q 300 450 600 500 T 1200 500 L 1200 800 L 0 800 Z"
                  ]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>

            {/* Animated Mesh Elements */}
            <motion.div
              className="absolute top-0 left-0 w-full h-1/2 opacity-20"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(34, 197, 255, 0.1) 50%, transparent 100%)',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Floating Tech Shapes */}
            <motion.div
              className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-blue-400/30 rounded-lg"
              animate={{
                rotate: [0, 180, 360],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <motion.div
              className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-cyan-400/25"
              animate={{
                rotate: [360, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Dots Network */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-blue-400/40 rounded-full"
                style={{
                  top: `${20 + (i % 3) * 35}%`,
                  left: `${15 + (i % 4) * 25}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }} />
          </div>

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
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 text-black shadow-2xl shadow-blue-500/25">
                    {industry.icon}
                  </div>
                </motion.div>
                
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                    {industry.name}
                  </span>
                </motion.h1>

                <motion.h2
                  className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-300 mb-6 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {industry.tagline}
                </motion.h2>

                <motion.p
                  className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {industry.description}
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-black shadow-lg shadow-blue-500/25">
                    {primaryCTA || 'Explore Solutions'}
                  </Button>
                  <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black">
                    {secondaryCTA || 'Schedule Consultation'}
                  </Button>
                </motion.div>
              </div>

              {/* Right Content - Features Grid */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="grid grid-cols-1 gap-4"
                >
                  {industry.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // Default layout when no industry data is provided
  return (
    <section className={`py-20 ${backgroundPattern ? patternClasses[backgroundPattern] : 'bg-gradient-to-br from-blue-50 via-blue-400 to-blue'} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-black"
          >
            {title || 'AI Solutions for Every Industry'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            {subtitle || 'From banking to healthcare, retail to manufacturing - our AI solutions are tailored to meet the unique challenges and opportunities of your industry.'}
          </motion.p>
          
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {primaryCTA && (
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-black">
                  {primaryCTA}
                </Button>
              )}
              {secondaryCTA && (
                <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black">
                  {secondaryCTA}
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default IndustriesHero