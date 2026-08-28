'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import Section from '@/components/layout/Section'
import Link from 'next/link'

interface SolutionData {
  name: string
  tagline: string
  description: string
  icon: React.ReactNode
  color: string
  features: string[]
  benefits: string[]
  useCases: string[]
}

interface SolutionHeroProps {
  solution: SolutionData
}

export const SolutionHero = ({ solution }: SolutionHeroProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <Section background="white" padding="xl" className="bg-gradient-to-br from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${solution.color} text-white mb-6`}
            >
              {solution.icon}
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {solution.name}
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-indigo-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {solution.tagline}
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {solution.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button variant="primary" size="lg">
                Start Free Trial
              </Button>
              <Link href="/contact">
              <Button variant="secondary" size="lg">
                Schedule Demo
              </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  )
}