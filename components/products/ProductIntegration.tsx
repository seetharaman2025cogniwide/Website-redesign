'use client'

import { motion } from 'framer-motion'
// Using Heroicons for styling elements
import {
  ArrowRightIcon,
  CubeTransparentIcon,
  CodeBracketSquareIcon
} from '@heroicons/react/24/outline'

// Dark theme tokens
const PRODUCT_COLOR = 'text-[#A78BFA]'
const SOLUTION_COLOR = 'text-[#6EE7B7]'
const PRIMARY_TEXT = 'text-white'
const BENEFIT_BG = 'bg-[#1E1B38]'

const ProductIntegration = () => {
  const integrationPoints = [
    {
      product: 'CogniAssist',
      solution: 'CogniOps',
      integration: 'Deploy intelligent agent orchestration with automated DevOps workflows',
      benefit: 'Seamless AI-powered automation across development and operations'
    },
    {
      product: 'CogniLoom',
      solution: 'CogniOps',
      integration: 'Integrate Kubernetes management with Helm chart automation',
      benefit: 'Intelligent container orchestration with automated deployment pipelines'
    },
    {
      product: 'CogniAura',
      solution: 'CogniTest',
      integration: 'Enable comprehensive analytics with AI-powered testing validation',
      benefit: 'Data-driven insights with intelligent quality assurance'
    },
    {
      product: 'CogniAssist',
      solution: 'CogniVibe',
      integration: 'Implement AI assistance within development workflows',
      benefit: 'Enhanced productivity with intelligent development support'
    }

  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0B0A14] relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7C3AED]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8B5CF6]/6 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#15151D]/90 border border-[#29263A] shadow-[0_0_18px_rgba(124,58,237,0.2)] text-[#A78BFA] text-xs font-semibold px-5 py-2 rounded-full mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
            <span className="uppercase tracking-wider">Ecosystem</span>
          </div>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Integrated AI Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6]">Ecosystem</span>
          </motion.h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-transparent shadow-[0_0_10px_#8B5CF6] mx-auto mb-4" />
          <motion.p
            className="text-lg text-[#B8B6C4] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our AI products and solutions work seamlessly together to form a unified intelligent automation platform.
          </motion.p>
        </div>

        {/* Integration Flow Blocks */}
        <div className="space-y-6">
          {integrationPoints.map((point, index) => (
            <motion.div
              key={index}
              className="group relative bg-[#15151D]/95 border border-[#29263A] hover:border-[#8B5CF6]/60 rounded-xl shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, scaleY: 0.8 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />
              <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-[#29263A]">

                {/* Product/Solution Banner */}
                <div className="lg:col-span-2 p-5 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 bg-[#1E1B38]/50">
                  <div className="flex items-center space-x-2">
                    <CubeTransparentIcon className="w-6 h-6 text-[#A78BFA]" />
                    <span className="text-xl font-bold text-white">{point.product}</span>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 text-[#8B5CF6]" />
                  <div className="flex items-center space-x-2">
                    <CodeBracketSquareIcon className="w-6 h-6 text-[#6EE7B7]" />
                    <span className="text-xl font-bold text-white">{point.solution}</span>
                  </div>
                </div>

                {/* Integration Detail */}
                <div className="lg:col-span-2 p-5 flex flex-col justify-center">
                  <span className="text-xs font-semibold uppercase text-[#A78BFA]/70 mb-1 tracking-wider">Integration Detail</span>
                  <p className="text-base font-medium text-white">
                    {point.integration}
                  </p>
                </div>

                {/* Key Benefit */}
                <div className="lg:col-span-1 p-5 bg-[#1E1B38] flex flex-col justify-center">
                  <span className="text-xs font-semibold uppercase text-[#A78BFA] mb-1 tracking-wider">Key Benefit</span>
                  <p className="text-sm text-[#B8B6C4]">
                    {point.benefit}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProductIntegration