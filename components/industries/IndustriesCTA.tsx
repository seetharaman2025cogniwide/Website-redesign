'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import Section from '@/components/layout/Section'

const IndustriesCTA = () => {
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
          Ready to Transform Your <span className="text-brand-blue">Industry?</span>
        </motion.h2>
        
        <motion.p
          className="text-xl text-brand-medium-grey mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Connect with our industry experts to discover how AI can address your specific challenges 
          and unlock new opportunities for growth and innovation in your sector.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button variant="primary" size="lg">
            Schedule Industry Consultation
          </Button>
          <Button variant="secondary" size="lg">
            Download Industry Guide
          </Button>
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
              <div className="w-3 h-3 bg-brand-blue rounded-full mr-3"></div>
              <span className="font-semibold">6 Major Industries</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-brand-blue rounded-full mr-3"></div>
              <span className="font-semibold">500+ Success Stories</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-brand-blue rounded-full mr-3"></div>
              <span className="font-semibold">Industry Expertise</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default IndustriesCTA