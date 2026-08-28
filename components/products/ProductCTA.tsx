'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import Section from '@/components/layout/Section'
import Link from 'next/link'

const ProductCTA = () => {
  return (
    <Section background="light-grey" padding="xl" className="bg-gradient-to-br from-brand-light-grey to-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark-grey mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Transform Your <span className="text-brand-yellow">Enterprise?</span>
        </motion.h2>
        
        <motion.p
          className="text-xl text-brand-medium-grey mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Schedule a personalized demo to see how our AI products can revolutionize your business 
          operations and drive unprecedented growth across your organization.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link href="/contact" className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-brand-blue text-white hover:bg-brand-blue-dark focus:ring-brand-blue shadow-md hover:shadow-lg px-6 py-3 text-lg">
            Schedule Demo
          </Link>
          <Link href="/casestudy" className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-brand-white text-brand-dark-grey hover:bg-brand-light-grey focus:ring-brand-medium-grey border border-brand-light-grey px-6 py-3 text-lg">
            View Case Studies
          </Link>
        </motion.div>
        
        <motion.div
          className="mt-12 pt-8 border-t border-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-brand-medium-grey">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-brand-yellow rounded-full mr-3"></div>
              <span className="font-semibold">500+ Enterprise Clients</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-brand-yellow rounded-full mr-3"></div>
              <span className="font-semibold">99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-brand-yellow rounded-full mr-3"></div>
              <span className="font-semibold">24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default ProductCTA