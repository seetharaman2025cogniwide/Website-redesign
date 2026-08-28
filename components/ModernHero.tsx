'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

const ThreeBackground = dynamic(() => import('./ThreeBackground'), { ssr: false })

const ModernHero = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const slides = [
    {
      id: 'platform',
      title: 'Cogniwide AI implementation platforms',
      subtitle: 'We help you achieve faster time-to-value with lower risk, solving the last-mile challenge of scaling AI across the enterprise.',
      cta: { text: 'Get started', href: '/contact' },
      navTitle: 'Cogniwide Platforms',
      color: 'blue'
    },
    {
      id: 'cogniassist',
      title: 'CogniAssist Agentic AI',
      subtitle: 'Deploy autonomous agents that think and execute. Automate complex workflows with our flagship Agentic AI platform.',
      cta: { text: 'Explore Agents', href: '/products/cogniassist' },
      navTitle: 'CogniAssist',
      color: 'green'
    },
    {
      id: 'cogniloom',
      title: 'CogniLoom Vibe Coding',
      subtitle: 'Manage your entire DevOps lifecycle in a single view. Orchestrate infrastructure and code seamlessly with AI-powered development.',
      cta: { text: 'View Vibe Coding', href: '/products/cogniloom' },
      navTitle: 'Vibe Coding',
      color: 'purple'
    },
    {
      id: 'cogniaura',
      title: 'CogniAura Data Services',
      subtitle: 'One-click BI migration and seamless Master Data Management. Turn raw data into actionable intelligence.',
      cta: { text: 'Explore Data Services', href: '/products/cogniaura' },
      navTitle: 'AI Training Data Services',
      color: 'orange'
    },
    {
      id: 'services',
      title: 'AI Services & Lab',
      subtitle: 'Leverage our AI-powered development teams to build and scale enterprise software faster than ever before.',
      cta: { text: 'Visit AI Lab', href: '/services' },
      navTitle: 'AI Lab',
      color: 'pink'
    }
  ]

  const current = slides[activeTab]

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleTabClick = (index: number) => {
    setActiveTab(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex overflow-hidden bg-[#000033]">
      
      {/* Background & Mask Layer */}
      <div className="absolute inset-0 w-full h-full">
         {/* Left Side Solid Background (Deep Navy) */}
         <div className="absolute inset-0 bg-[#000033] z-0" />
         
         {/* Right Side Visual Masked - The "Diagonal Cut" */}
         {/* Using clip-path to create the sharp angle */}
         <div 
           className="absolute top-0 right-0 w-[70%] h-full z-10 overflow-hidden"
           style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
         >
            {/* The 3D Animation lives here */}
            <div className="absolute inset-0 bg-black">
              <ThreeBackground />
              {/* Overlay Gradient to blend the cut edge */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#000033] via-transparent to-transparent opacity-80" />
            </div>
         </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full flex flex-col justify-center">
        
        {/* Main Text Content */}
        <div className="max-w-2xl mt-[-60px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                {current.title}
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-lg leading-relaxed font-light">
                {current.subtitle}
              </p>

              <Link href={current.cta.href} className="inline-flex bg-[#2dd4bf] hover:bg-[#14b8a6] text-[#000033] px-8 py-3 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-[#2dd4bf]/50 items-center gap-2 group">
                  {current.cta.text}
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation Tabs */}
        <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-[#000033]/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto no-scrollbar">
              {slides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTabClick(idx)}
                  className={`
                    relative px-6 py-6 text-sm font-semibold tracking-wide uppercase transition-all whitespace-nowrap
                    ${activeTab === idx ? 'text-white' : 'text-gray-400 hover:text-white'}
                  `}
                >
                  {slide.navTitle}
                  {activeTab === idx && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 w-full h-1 bg-white"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Cookie/Floating Icon (Optional, matching reference style) */}
        <div className="absolute bottom-24 left-4 sm:left-8 w-10 h-10 rounded-full bg-[#99f6e4] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform text-[#000033]">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
           </svg>
        </div>

      </div>
    </section>
  )
}

export default ModernHero
