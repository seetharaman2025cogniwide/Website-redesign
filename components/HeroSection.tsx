'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import AnimatedBackground from './AnimatedBackground'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [mounted, setMounted] = useState(false)

  // --- SLIDES WITH UNIQUE BANNER IMAGES ---
  const slides = [
    {
      badge: 'Who We Are',
      title: 'Welcome to',
      highlight: 'Cogniwide',
      subtitle: 'Your Enterprise AI Transformation Partner',
      description: 'We empower businesses with cutting-edge AI solutions, intelligent automation, and data-driven insights to transform operations and accelerate growth.',
      cta1: { text: 'Explore Platform', href: '/products' },
      cta2: { text: 'Schedule Demo', href: '/contact' },
      stats: [
        { value: '15+', label: 'Enterprise Clients' },
        { value: '95%', label: 'Success Rate' }
      ],
      visual: 'company',
      bannerImage: '/images/bg-black.svg',
      heroImage: '/images/home1.png'
    },
    {
      badge: 'Our Products',
      title: 'Powerful',
      highlight: 'AI Products',
      subtitle: 'Complete Suite for Enterprise Excellence',
      description: 'From CogniAssist for AI automation to CogniLoom for DevSecOps, CogniAura for analytics, and specialized ERPs - we have everything your business needs.',
      cta1: { text: 'View Products', href: '/products' },
      cta2: { text: 'Get Started', href: '/get-started' },
      stats: [
        { value: '5+', label: 'AI Products' },
        { value: '$1M+', label: 'Avg. Savings' }
      ],
      visual: 'products',
      bannerImage: '/images/powerfulai-1.svg',
      heroImage: '/images/home2.png'
    },
    {
      badge: 'Our Solutions',
      title: 'Innovative',
      highlight: 'AI Solutions',
      subtitle: 'Transform Your Industry Now',
      description: 'CogniVibe for SDLC automation, CogniTest for intelligent testing, and CogniOps for seamless DevOps - accelerate delivery with AI-powered workflows.',
      cta1: { text: 'Explore Solutions', href: '/solutions/cognivibe' },
      cta2: { text: 'Learn More', href: '/about' },
      stats: [
        { value: '3x', label: 'Faster Delivery' },
        { value: '70%', label: 'Cost Reduction' }
      ],
      visual: 'solutions',
      bannerImage: '/images/Innovative.svg',
      heroImage: '/images/home3.png'
    },
    {
      badge: 'Our Services',
      title: 'Expert',
      highlight: 'AI Services',
      subtitle: 'End-to-End Technology Consulting',
      description: 'From AI consulting and development to data engineering and cloud transformation - our experts guide you every step of the way.',
      cta1: { text: 'View Services', href: '/services/ai-consulting' },
      cta2: { text: 'Contact Us', href: '/contact' },
      stats: [
        { value: '70+', label: 'AI Experts' },
        { value: '24/7', label: 'Support' }
      ],
      visual: 'services',
      bannerImage: '/images/expert.svg',
      heroImage: '/images/home4.png'
    },
    {
      badge: 'Industries We Serve',
      title: 'Trusted Across',
      highlight: 'Industries',
      subtitle: 'Tailored Solutions for Every Sector',
      description: 'Banking, Healthcare, Retail, Education, Insurance, Manufacturing, and Telecommunications - we deliver industry-specific AI solutions that drive results.',
      cta1: { text: 'View Industries', href: '/industries' },
      cta2: { text: 'Contact Us', href: '/contact' },
      stats: [
        { value: '7+', label: 'Industries' },
        { value: '95%', label: 'Satisfaction' }
      ],
      visual: 'industries',
      bannerImage: '/images/trust1.svg',
      heroImage: '/images/home5.png'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying || !mounted) return
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, currentSlide, mounted])

  // --- Visual Content Renderers (Styled for Dark MNC Theme) ---
  const getVisualContent = (type: string) => {
    switch (type) {
      case 'company':
        return (
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 h-full content-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-2 sm:p-3 md:p-4 lg:p-5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-colors">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-400 mb-0.5 sm:mb-1">500+</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider font-medium">Clients Worldwide</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-2 sm:p-3 md:p-4 lg:p-5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-colors">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-400 mb-0.5 sm:mb-1">15+</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider font-medium">Years Experience</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-2 sm:p-3 md:p-4 lg:p-5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-colors">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-400 mb-0.5 sm:mb-1">100+</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider font-medium">AI Experts</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-2 sm:p-3 md:p-4 lg:p-5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-colors">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-orange-400 mb-0.5 sm:mb-1">24/7</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider font-medium">Support</div>
            </div>
          </div>
        )
      case 'products':
        return (
          <div className="space-y-2 sm:space-y-3 h-full flex flex-col justify-center">
            {[
              { name: 'CogniAssist', desc: 'Agentic AI Platform', color: 'bg-blue-500' },
              { name: 'CogniLoom', desc: 'DevSecOps Orchestration', color: 'bg-green-500' },
              { name: 'CogniAura', desc: 'Analytics & BI', color: 'bg-purple-500' },
              { name: 'CogniNova', desc: 'School ERP & LMS', color: 'bg-orange-500' },
              { name: 'CogniForge', desc: 'Manufacturing ERP', color: 'bg-red-500' }
            ].map((product, idx) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center space-x-2 sm:space-x-3 bg-white/5 border border-white/10 p-2 sm:p-3 rounded-lg hover:bg-white/10 transition-all"
              >
                <div className={`w-6 h-6 sm:w-8 sm:h-8 ${product.color} rounded flex items-center justify-center text-white font-bold text-xs shadow-lg`}>
                  {product.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-white">{product.name}</div>
                  <div className="text-xs text-gray-400 hidden sm:block">{product.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        )
      case 'solutions':
        return (
          <div className="space-y-3 sm:space-y-4 h-full flex flex-col justify-center">
            {[
              { name: 'CogniVibe', desc: 'AI-Powered SDLC Framework', color: 'bg-indigo-500' },
              { name: 'CogniTest', desc: 'Intelligent Test Automation', color: 'bg-emerald-500' },
              { name: 'CogniOps', desc: 'DevOps Automation', color: 'bg-orange-500' }
            ].map((solution, idx) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-white/10 p-3 sm:p-4 rounded-lg sm:rounded-xl flex items-center space-x-3 sm:space-x-4"
              >
                <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${solution.color} rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg shadow-lg`}>
                  {solution.name.charAt(5)}
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base md:text-lg text-white">{solution.name}</div>
                  <div className="text-xs text-gray-300 hidden sm:block">{solution.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        )
      case 'services':
        return (
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 h-full content-center">
            {[
              { name: 'AI Consulting', color: 'bg-purple-500' },
              { name: 'AI Development', color: 'bg-blue-500' },
              { name: 'Data Engineering', color: 'bg-teal-500' },
              { name: 'Cloud & DevOps', color: 'bg-orange-500' },
              { name: '24/7 Support', color: 'bg-green-500' }
            ].map((service, idx) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 border border-white/5 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center hover:bg-white/20 transition-all"
              >
                <div className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ${service.color} rounded-lg mx-auto mb-1 sm:mb-2 flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md`}>
                  {service.name.charAt(0)}
                </div>
                <div className="text-xs font-bold text-gray-100">{service.name}</div>
              </motion.div>
            ))}
          </div>
        )
      case 'industries':
        return (
          <div className="grid grid-cols-2 gap-2 sm:gap-3 h-full content-center">
            {[
              { name: 'Banking', color: 'bg-blue-500' },
              { name: 'Healthcare', color: 'bg-red-500' },
              { name: 'Retail', color: 'bg-orange-500' },
              { name: 'Education', color: 'bg-indigo-500' },
              { name: 'Insurance', color: 'bg-teal-500' },
              { name: 'Manufacturing', color: 'bg-gray-600' },
              { name: 'Telecom', color: 'bg-purple-500' },
              { name: 'More...', color: 'bg-pink-500' }
            ].map((industry, idx) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/5 border border-white/10 hover:border-blue-400/50 rounded-lg p-2 sm:p-3 text-center transition-all"
              >
                <div className={`w-6 h-6 sm:w-8 sm:h-8 ${industry.color} rounded mx-auto mb-1 flex items-center justify-center text-white font-bold text-xs`}>
                  {industry.name.charAt(0)}
                </div>
                <div className="text-xs font-medium text-gray-200">{industry.name}</div>
              </motion.div>
            ))}
          </div>
        )
      default:
        return null
    }
  }

  if (!mounted) {
    return (
      <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-gray-900">Loading...</div>
      </section>
    )
  }

  return (
    // Min-h-screen ensures it fills the view. Background now matches CogniAssist hero style.
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
      {/* Animated Grid Background (CogniAssist-style) */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(37, 99, 235, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(37, 99, 235, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      {/* Floating Geometric Shapes & Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-400/15 to-cyan-400/15 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Smaller animated orbs */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl"
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/2 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl"
          animate={{
            y: [0, 60, 0],
            x: [0, -40, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 right-1/4 w-32 h-32 border-2 border-blue-400/30 rounded-2xl"
          animate={{
            rotate: [0, 360],
            y: [0, -20, 0]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            y: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
          }}
          style={{ transformStyle: 'preserve-3d' }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-24 h-24 border-2 border-purple-400/30 rounded-xl"
          animate={{
            rotate: [0, -360],
            y: [0, 30, 0]
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
            y: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
          }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-br from-cyan-400/40 to-blue-500/40 rounded-lg"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Particle dots */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Glassmorphism overlay elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-40 left-10 w-48 h-48 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/40"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-40 right-10 w-56 h-56 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/40"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      {/* Grid animation keyframes (same as CogniAssist hero) */}
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

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">

          {/* --- LEFT COLUMN: Text Content --- */}
          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
                className="text-left"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md border border-blue-100 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 mb-4 sm:mb-6 shadow-lg"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                  <span className="text-brand-blue text-xs sm:text-xs font-bold tracking-wide uppercase">
                    {slides[currentSlide].badge}
                  </span>
                </motion.div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  {slides[currentSlide].title}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-500">
                    {slides[currentSlide].highlight}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl font-semibold text-brand-blue mb-3 sm:mb-4">
                  {slides[currentSlide].subtitle}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 max-w-xl leading-relaxed">
                  {slides[currentSlide].description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
                  <Link href={slides[currentSlide].cta1.href} className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-brand-blue text-white rounded-lg font-bold text-sm hover:bg-brand-blue-dark transition-all shadow-xl flex items-center justify-center gap-2">
                      {slides[currentSlide].cta1.text}
                      <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                  <Link href={slides[currentSlide].cta2.href} className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-brand-blue text-brand-blue rounded-lg font-bold text-sm hover:bg-brand-blue hover:text-white transition-all flex items-center justify-center">
                      {slides[currentSlide].cta2.text}
                  </Link>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8 border-t border-blue-100 pt-4 sm:pt-6">
                  {slides[currentSlide].stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* --- RIGHT COLUMN: Image Display --- */}
          <div className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] relative order-first lg:order-last flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={slides[currentSlide].heroImage}
                  alt="Cogniwide Hero"
                  fill
                  className="object-contain"
                  priority={currentSlide === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>

            {/* Nav Arrows Floating */}
            <div className="absolute -bottom-4 sm:-bottom-6 right-2 sm:right-4 flex gap-2 sm:gap-3 z-10">
              <button
                onClick={prevSlide}
                onMouseEnter={() => setIsAutoPlaying(false)}
                className="p-2 sm:p-3 rounded-full bg-brand-blue border border-brand-blue/20 text-white hover:bg-brand-blue-dark transition-all shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextSlide}
                onMouseEnter={() => setIsAutoPlaying(false)}
                className="p-2 sm:p-3 rounded-full bg-white border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-lg"
                aria-label="Next slide"
              >
                <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div> 
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-4 xl:left-8 flex gap-1.5 sm:gap-2 z-30">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setCurrentSlide(idx); setIsAutoPlaying(false); }}
              className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 sm:w-8 bg-brand-blue' : 'w-1.5 sm:w-2 bg-blue-200 hover:bg-blue-300'
                }`}
            />
          ))}
        </div>
      </div>

      {/* --- Blend Below Gradient --- */}
      {/* This creates a smooth fade to transparent at the very bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-15"></div>
    </section>
  )
}

export default HeroSection