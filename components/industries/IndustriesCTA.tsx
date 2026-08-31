'use client'

import { motion } from 'framer-motion'

const IndustriesCTA = () => {
  return (
    <section className="relative py-32 bg-[#0B0A14] border-t border-[#29263A] overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#7C3AED]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC] drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
              Industry?
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-[#B8B6C4] mb-10 max-w-3xl mx-auto leading-relaxed"
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group px-9 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white font-bold rounded-xl shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-3 text-base sm:text-lg">
              Schedule Industry Consultation
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="px-9 py-4 bg-[#15151D]/90 border border-[#29263A] hover:border-[#8B5CF6] text-[#A78BFA] hover:text-white font-bold rounded-xl backdrop-blur-md hover:shadow-[0_0_25px_rgba(124,58,237,0.3)] transition-all duration-300 text-base sm:text-lg">
              Download Industry Guide
            </button>
          </motion.div>

          <motion.div
            className="mt-12 pt-8 border-t border-[#29263A]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-[#B8B6C4]">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#8B5CF6] rounded-full mr-3 shadow-[0_0_10px_#8B5CF6]"></div>
                <span className="font-semibold">6 Major Industries</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#8B5CF6] rounded-full mr-3 shadow-[0_0_10px_#8B5CF6]"></div>
                <span className="font-semibold">500+ Success Stories</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#8B5CF6] rounded-full mr-3 shadow-[0_0_10px_#8B5CF6]"></div>
                <span className="font-semibold">Industry Expertise</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default IndustriesCTA
