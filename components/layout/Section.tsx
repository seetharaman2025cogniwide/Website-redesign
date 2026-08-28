'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'light-grey' | 'dark-grey'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  animate?: boolean
}

const Section = ({ 
  children, 
  className = '', 
  background = 'white',
  padding = 'lg',
  animate = true
}: SectionProps) => {
  const backgroundClasses = {
    white: 'bg-brand-white',
    'light-grey': 'bg-brand-light-grey',
    'dark-grey': 'bg-brand-dark-grey text-brand-white'
  }
  
  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-20',
    xl: 'py-32'
  }

  const content = (
    <section className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {content}
      </motion.div>
    )
  }

  return content
}

export default Section