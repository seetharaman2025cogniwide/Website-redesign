'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { BankIcon, HeartIcon, TruckIcon, ShieldIcon, ShoppingBagIcon, RadioIcon, BuildingOfficeIcon } from '@/components/ui/icons';
import { CogIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

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

  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radiant Burst Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(34, 197, 255, 0.1) 70%, transparent 100%)',
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
            background: 'radial-gradient(circle, rgba(34, 197, 255, 0.3) 0%, rgba(6, 182, 212, 0.1) 70%, transparent 100%)',
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
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.35) 0%, rgba(59, 130, 246, 0.05) 70%, transparent 100%)',
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
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
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
            background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #3b82f6 100%)',
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
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0'
        }} />

        {/* Corner Accent Shapes */}
        <motion.div
          className="absolute top-0 right-0 w-40 h-40 border-2 border-blue-400/20"
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
          className="absolute bottom-0 left-0 w-32 h-32 border-2 border-cyan-400/15"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Industry Badge */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
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
            <span className="text-gray-700 text-sm font-semibold uppercase tracking-wider">
              {industry}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-blue-600">
              {title.split(' ').slice(-1)[0]}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solutions/cognivibe">
            <Button
              variant="primary"
              size="lg"
            >
              Explore AI Solutions
            </Button>
            </Link>
            <Link href="/contact">
            <Button
              variant="secondary"
              size="lg"
            >
              Book Consultation
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}