'use client'

import { motion } from 'framer-motion'

const IndustryIntegration = () => {
  const integrationPoints = [
    {
      industry: 'Banking & Finance',
      solution: 'CogniAssist',
      integration: 'Deploy intelligent risk assessment with automated compliance workflows',
      benefit: 'Real-time fraud detection with regulatory compliance automation'
    },
    {
      industry: 'Healthcare',
      solution: 'CogniAura',
      integration: 'Integrate medical imaging AI with patient data analytics',
      benefit: 'Enhanced diagnostic accuracy with comprehensive patient insights'
    },
    {
      industry: 'Retail ',
      solution: 'CogniAssist',
      integration: 'Implement personalized recommendation engines with inventory optimization',
      benefit: 'Increased sales conversion with optimized supply chain management'
    },
    {
      industry: 'Telecommunications',
      solution: 'CogniLoom',
      integration: 'Enable network optimization with predictive maintenance automation',
      benefit: 'Improved network performance with reduced downtime and operational costs'
    },
    {
      industry: 'Insurance',
      solution: 'CogniAura',
      integration: 'Automate claims processing with AI-powered risk assessment',
      benefit: 'Faster claim resolution with accurate risk modeling and fraud prevention'
    },
    {
      industry: 'Manufacturing',
      solution: 'CogniAssist',
      integration: 'Optimize delivery routes with intelligent warehouse automation',
      benefit: 'Reduced delivery times with enhanced inventory management and cost savings'
    }
  ]

  return (
    <section className="relative py-20 bg-[#0B0A14] border-t border-[#29263A] overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#7C3AED]/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Industry-Tailored{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC]">
                AI Integration
              </span>
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-[#B8B6C4] max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our AI solutions seamlessly integrate with industry-specific workflows to deliver maximum value and operational efficiency
            </motion.p>
          </div>

          <div className="space-y-8">
            {integrationPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group relative p-8 bg-[#15151D]/90 rounded-2xl border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] backdrop-blur-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />

                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#A78BFA] transition-colors">
                        {point.industry}
                      </h4>
                      <div className="text-sm text-[#777583]">Industry</div>
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="w-8 h-0.5 bg-[#8B5CF6]/50 hidden lg:block" />
                      <div className="w-3 h-3 bg-[#8B5CF6] rounded-full mx-2 shadow-[0_0_10px_#8B5CF6]" />
                      <div className="w-8 h-0.5 bg-[#8B5CF6]/50 hidden lg:block" />
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-[#A78BFA] mb-2">
                        {point.solution}
                      </h4>
                      <div className="text-sm text-[#777583]">AI Solution</div>
                    </div>

                    <div>
                      <p className="text-white font-medium mb-2">
                        {point.integration}
                      </p>
                      <p className="text-sm text-[#B8B6C4] leading-relaxed">
                        {point.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative p-8 sm:p-10 bg-[#15151D]/90 rounded-3xl border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:shadow-[0_0_40px_rgba(124,58,237,0.25)] backdrop-blur-xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Ready to Transform Your Industry?
              </h3>
              <p className="text-[#B8B6C4] mb-8 max-w-2xl mx-auto leading-relaxed">
                Discover how our industry-specific AI solutions can revolutionize your business operations with intelligent automation tailored to your sector.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3.5 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300">
                  Schedule Industry Demo
                </button>
                <button className="px-8 py-3.5 bg-[#1A1829]/80 border border-[#29263A] hover:border-[#8B5CF6] text-[#A78BFA] hover:text-white font-bold rounded-xl transition-all duration-300">
                  Explore Solutions
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default IndustryIntegration
