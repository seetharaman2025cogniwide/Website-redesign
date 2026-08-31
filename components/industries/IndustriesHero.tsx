'use client'

import { motion } from 'framer-motion'

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

const IndustriesHero = ({ title, subtitle, primaryCTA, secondaryCTA, industry }: IndustriesHeroProps) => {
  // If industry data is provided, use the enhanced layout
  if (industry) {
    return (
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center bg-[#08090B]">
          {/* Dynamic Wave Background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Ambient Lighting & Flares */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#7C3AED]/20 via-[#8B5CF6]/10 to-transparent blur-[130px]" />
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[140px]" />
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#7C3AED]/12 rounded-full blur-[140px]" />

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
                fill="rgba(124, 58, 237, 0.12)"
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
                fill="rgba(139, 92, 246, 0.1)"
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
                fill="rgba(167, 139, 250, 0.07)"
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
                background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)',
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
              className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-[#8B5CF6]/30 rounded-lg"
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
              className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-[#A78BFA]/25"
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
                className="absolute w-1.5 h-1.5 bg-[#A78BFA]/40 rounded-full"
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
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#1A1829] border border-[#8B5CF6]/40 text-[#A78BFA] shadow-[0_0_25px_rgba(124,58,237,0.4)]">
                    {industry.icon}
                  </div>
                </motion.div>

                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC] drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                    {industry.name}
                  </span>
                </motion.h1>

                <motion.h2
                  className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#A78BFA] mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {industry.tagline}
                </motion.h2>

                <motion.p
                  className="text-lg sm:text-xl text-[#B8B6C4] mb-8 leading-relaxed"
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
                  <button className="px-8 py-3.5 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white font-bold rounded-xl shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 transition-all duration-300 text-base sm:text-lg">
                    {primaryCTA || 'Explore Solutions'}
                  </button>
                  <button className="px-8 py-3.5 bg-[#15151D]/90 border border-[#29263A] hover:border-[#8B5CF6] text-[#A78BFA] hover:text-white font-bold rounded-xl backdrop-blur-md hover:shadow-[0_0_25px_rgba(124,58,237,0.3)] transition-all duration-300 text-base sm:text-lg">
                    {secondaryCTA || 'Schedule Consultation'}
                  </button>
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
                    <div key={index} className="flex items-center space-x-3 p-4 bg-[#15151D]/90 backdrop-blur-xl rounded-xl border border-[#29263A] hover:border-[#8B5CF6]/60 transition-all duration-300">
                      <div className="w-2 h-2 bg-[#8B5CF6] rounded-full shadow-[0_0_10px_#8B5CF6]"></div>
                      <span className="text-[#B8B6C4]">{feature}</span>
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
  const heading = title || 'AI Solutions for Every Industry'
  const headingWords = heading.split(' ')
  const headingLead = headingWords.slice(0, -2).join(' ')
  const headingAccent = headingWords.slice(-2).join(' ')

  return (
    <section className="relative py-24 pt-28 md:pt-36 bg-[#08090B] overflow-hidden">
      {/* Ambient Lighting & Flares */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#7C3AED]/20 via-[#8B5CF6]/10 to-transparent blur-[130px] -z-10" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[140px] -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#7C3AED]/12 rounded-full blur-[140px] -z-10" />

        {/* Ambient Star Sparkles */}
        <div className="absolute top-24 left-[15%] w-1 h-1 bg-[#A78BFA] rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-36 right-[20%] w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-pulse" />
        <div className="absolute bottom-20 left-[30%] w-1 h-1 bg-[#8B5CF6] rounded-full opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#15151D]/90 border border-[#29263A] text-[#A78BFA] rounded-full text-xs font-semibold mb-8 shadow-[0_0_18px_rgba(124,58,237,0.2)] backdrop-blur-md"
          >
            <span className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-ping" />
            Industry Expertise
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          >
            {headingLead}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC] drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
              {headingAccent}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#B8B6C4] max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
          >
            {subtitle || 'From banking to healthcare, retail to manufacturing - our AI solutions are tailored to meet the unique challenges and opportunities of your industry.'}
          </motion.p>

          {(primaryCTA || secondaryCTA) && (
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {primaryCTA && (
                <button className="group px-9 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white font-bold rounded-xl shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center gap-3 text-base sm:text-lg">
                  {primaryCTA}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              )}
              {secondaryCTA && (
                <button className="px-9 py-4 bg-[#15151D]/90 border border-[#29263A] hover:border-[#8B5CF6] text-[#A78BFA] hover:text-white font-bold rounded-xl backdrop-blur-md hover:shadow-[0_0_25px_rgba(124,58,237,0.3)] transition-all duration-300 text-base sm:text-lg">
                  {secondaryCTA}
                </button>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default IndustriesHero
