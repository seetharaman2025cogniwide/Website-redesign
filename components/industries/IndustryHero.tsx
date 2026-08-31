'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { BankIcon, HeartIcon, TruckIcon, ShieldIcon, ShoppingBagIcon, RadioIcon, BuildingOfficeIcon } from '@/components/ui/icons';
import { CogIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import IndustryIconField from './IndustryIconField';

interface IndustryHeroProps {
  industry: string;
  title: string;
  description: string;
  challenges: string[];
  backgroundImage?: string;
  stats?: {
    label: string;
    value: string;
    description?: string;
  }[];
}

export function IndustryHero({
  industry,
  title,
  description,
  challenges,
  backgroundImage,
  stats
}: IndustryHeroProps) {
  // The icon field scatters logos clear of this block so the copy stays legible
  const copyRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative bg-[#08090B] py-20 lg:py-28 pt-28 md:pt-36 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Ambient Lighting & Flares */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#7C3AED]/20 via-[#8B5CF6]/10 to-transparent blur-[130px]" />

        {/* Radiant Burst Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, rgba(139, 92, 246, 0.1) 70%, transparent 100%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(167, 139, 250, 0.1) 70%, transparent 100%)',
          }}
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(192, 132, 252, 0.35) 0%, rgba(124, 58, 237, 0.05) 70%, transparent 100%)',
          }}
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Animated Connecting Lines Network */}
        <svg className="absolute inset-0 w-full h-full opacity-15" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
          </defs>

          <motion.line
            x1="0"
            y1="0"
            x2="100%"
            y2="100%"
            stroke="url(#lineGrad1)"
            strokeWidth="1.5"
            opacity="0.6"
            animate={{
              strokeDashoffset: [1000, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <motion.line
            x1="100%"
            y1="0"
            x2="0"
            y2="100%"
            stroke="url(#lineGrad1)"
            strokeWidth="1.5"
            opacity="0.4"
            animate={{
              strokeDashoffset: [1000, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </svg>

        {/* Flowing Gradient Background */}
        <motion.div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            background: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 50%, #7C3AED 100%)',
            backgroundSize: '200% 200%',
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

        {/* Subtle Pixel Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `radial-gradient(circle, #8B5CF6 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0'
        }} />

        {/* Ambient Star Sparkles */}
        <div className="absolute top-24 left-[15%] w-1 h-1 bg-[#A78BFA] rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-36 right-[20%] w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-pulse" />
        <div className="absolute bottom-20 left-[30%] w-1 h-1 bg-[#8B5CF6] rounded-full opacity-50" />

        {/* Corner Accent Shapes */}
        <motion.div
          className="absolute top-0 right-0 w-40 h-40 border-2 border-[#8B5CF6]/20"
          style={{
            borderRadius: '0 0 0 100px'
          }}
          animate={{
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-32 h-32 border-2 border-[#A78BFA]/15"
          style={{
            borderRadius: '100px 0 0 0'
          }}
          animate={{
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Drifting agent logos + the glass ball that strikes them purple */}
      <IndustryIconField industry={industry} excludeRef={copyRef} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={copyRef} className="text-center max-w-4xl mx-auto">
          {/* Industry Badge */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-[#1A1829] border border-[#8B5CF6]/40 rounded-xl flex items-center justify-center text-[#A78BFA] shadow-[0_0_25px_rgba(124,58,237,0.4)]">
              {industry === 'banking' && <BankIcon className="w-6 h-6" />}
              {industry === 'healthcare' && <HeartIcon className="w-6 h-6" />}
              {industry === 'manufacturing' && <CogIcon className="w-6 h-6" />}
              {industry === 'logistics' && <TruckIcon className="w-6 h-6" />}
              {industry === 'insurance' && <ShieldIcon className="w-6 h-6" />}
              {industry === 'retail' && <ShoppingBagIcon className="w-6 h-6" />}
              {industry === 'telecom' && <RadioIcon className="w-6 h-6" />}
              {industry === 'education' && <AcademicCapIcon className="w-6 h-6" />}
              {!['banking', 'healthcare', 'retail', 'telecom', 'insurance', 'logistics', 'manufacturing', 'education'].includes(industry) && <BuildingOfficeIcon className="w-6 h-6" />}
            </div>
            <span className="text-[#A78BFA] text-sm font-semibold uppercase tracking-wider">
              {industry}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC] drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
              {title.split(' ').slice(-1)[0]}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#B8B6C4] mb-10 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/solutions/cognivibe"
              className="group px-9 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white font-bold rounded-xl shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center gap-3 text-base sm:text-lg"
            >
              Explore AI Solutions
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/contact"
              className="px-9 py-4 bg-[#15151D]/90 border border-[#29263A] hover:border-[#8B5CF6] text-[#A78BFA] hover:text-white font-bold rounded-xl backdrop-blur-md hover:shadow-[0_0_25px_rgba(124,58,237,0.3)] transition-all duration-300 inline-flex items-center justify-center text-base sm:text-lg"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
