'use client'

import { motion } from 'framer-motion'
// Using Heroicons for styling elements
import {
  ArrowRightIcon,
  CubeTransparentIcon,
  CodeBracketSquareIcon
} from '@heroicons/react/24/outline'

// Define consistent color scheme for the flow block visual
const PRODUCT_COLOR = 'text-blue-600'
const SOLUTION_COLOR = 'text-green-600'
const PRIMARY_TEXT = 'text-gray-900'
const BENEFIT_BG = 'bg-blue-50'

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
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Integrated AI Product <span className={PRODUCT_COLOR}>Ecosystem</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
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
              className="bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-300 overflow-hidden hover:shadow-xl hover:border-blue-300"
              initial={{ opacity: 0, scaleY: 0.8 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">

                {/* 1. Product/Solution Banner (2/5 width) */}
                <div className="lg:col-span-2 p-5 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 bg-gray-50/50">
                  <div className="flex items-center space-x-2">
                    <CubeTransparentIcon className={`w-6 h-6 ${PRODUCT_COLOR}`} />
                    <span className={`text-xl font-bold ${PRIMARY_TEXT}`}>{point.product}</span>
                  </div>
                  <ArrowRightIcon className={`w-5 h-5 ${PRODUCT_COLOR}`} />
                  <div className="flex items-center space-x-2">
                    <CodeBracketSquareIcon className={`w-6 h-6 ${SOLUTION_COLOR}`} />
                    <span className={`text-xl font-bold ${PRIMARY_TEXT}`}>{point.solution}</span>
                  </div>
                </div>

                {/* 2. Integration Detail (2/5 width) */}
                <div className="lg:col-span-2 p-5 flex flex-col justify-center">
                  <span className="text-xs font-semibold uppercase text-gray-500 mb-1">Integration Detail</span>
                  <p className={`text-base font-medium ${PRIMARY_TEXT}`}>
                    {point.integration}
                  </p>
                </div>

                {/* 3. Key Benefit (1/5 width - Highlighted) */}
                <div className={`lg:col-span-1 p-5 ${BENEFIT_BG} flex flex-col justify-center`}>
                  <span className="text-xs font-semibold uppercase text-blue-700 mb-1">Key Benefit</span>
                  <p className={`text-sm ${PRIMARY_TEXT}`}>
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