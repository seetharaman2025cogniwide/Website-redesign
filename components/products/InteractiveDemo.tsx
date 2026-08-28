'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Section from '@/components/layout/Section'

interface InteractiveDemoProps {
  productName: string
  title?: string
  description?: string
  demoType?: 'chatbot-builder' | 'agent-workflow' | 'document-processing'
}

const InteractiveDemo = ({
  productName,
  title = `${productName}`,
  description = `Experience the power of ${productName} with our interactive demonstration`,
  demoType = 'agent-workflow'
}: InteractiveDemoProps) => {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // SVG Icon Components
  const AgentIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )

  const WorkflowIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  )

  const LightningIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )

  const ChartIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3v18h18" />
      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
    </svg>
  )

  const CogIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )

  const TrendingUpIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  )

  const RocketIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )

  const HeartIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )

  const ClipboardIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
  )

  const MapIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  )

  const RefreshIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
    </svg>
  )

  const CheckIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )

  // Product-specific demo steps
  const getProductSteps = () => {
    switch (productName) {
      case 'CogniAssist':
        return [
          { title: 'Select Type', description: 'Choose between autonomous Agents or RAG bots', visual: 'agent-creation', icon: <AgentIcon /> },
          { title: 'Configure', description: 'Set agent behavior and system instructions', visual: 'trigger-config', icon: <LightningIcon /> },
          { title: 'Build Workflow', description: 'Design visual logic with connected nodes', visual: 'workflow-design', icon: <WorkflowIcon /> },
          { title: 'Visualize Insights', description: 'Generate real-time charts from data', visual: 'monitoring', icon: <ChartIcon /> }
        ]
      case 'CogniLoom':
        return [
          { title: 'Service Onboarding', description: 'Intelligent microservice onboarding with automated configuration, tagging, and policy setup', visual: 'Service Onboarding', icon: <CogIcon /> },
          { title: 'AI Debug & Diagnose', description: 'Use AI-powered agents to detect, analyze, and resolve pod or pipeline issues in real time', visual: 'AI Debug & Diagnose', icon: <TrendingUpIcon /> },
          { title: 'Security & Compliance Scan', description: 'Run continuous vulnerability assessments and compliance checks across environments', visual: 'Security & Compliance Scan', icon: <RocketIcon /> },
          { title: 'Unified Observability', description: 'Monitor metrics, logs, traces, and costs from a single, intelligent dashboard', visual: 'Unified Observability', icon: <HeartIcon /> }
        ]
      // case 'CogniAura':
      //   return [
      //     { title: 'Select Source', description: 'Choose your current BI tool for migration', visual: 'source-selection', icon: <ClipboardIcon /> },
      //     { title: 'Map Schema', description: 'AI-powered schema mapping and validation', visual: 'schema-mapping', icon: <MapIcon /> },
      //     { title: 'Migrate Data', description: 'One-click migration with PortBI engine', visual: 'data-migration', icon: <RefreshIcon /> },
      //     { title: 'Validate Results', description: 'Verify migrated reports and dashboards', visual: 'validation', icon: <CheckIcon /> }
      //   ]
      // case 'CogniForge':
      //   return [
      //     { title: 'Order Processing', description: 'Receive and process customer orders through integrated CRM system', visual: 'order-processing', icon: <ClipboardIcon /> },
      //     { title: 'Production Planning', description: 'AI-powered MRP calculates material requirements and schedules production', visual: 'production-planning', icon: <CogIcon /> },
      //     { title: 'Shop Floor Execution', description: 'MES manages real-time production with quality control and tracking', visual: 'shop-floor', icon: <TrendingUpIcon /> },
      //     { title: 'Order Fulfillment', description: 'Complete order with logistics management and customer delivery', visual: 'fulfillment', icon: <CheckIcon /> }
      //   ]
      default:
        return []
      // return [
      //   { title: 'Create Intent', description: 'Define what users want to accomplish', visual: 'intent-creation', icon: <AgentIcon /> },
      //   { title: 'Design Flow', description: 'Build conversation paths visually', visual: 'flow-design', icon: <WorkflowIcon /> },
      //   { title: 'Add Responses', description: 'Configure AI responses and actions', visual: 'response-config', icon: <LightningIcon /> },
      //   { title: 'Test & Deploy', description: 'Test your bot and deploy across channels', visual: 'deployment', icon: <RocketIcon /> }
      // ]
    }
  }

  const demoSteps = getProductSteps()

  const playDemo = () => {
    setIsPlaying(true)
    setActiveStep(0)

    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    timerRef.current = setInterval(() => {
      setActiveStep(prev => {
        if (prev >= demoSteps.length - 1) {
          if (timerRef.current) clearInterval(timerRef.current)
          setIsPlaying(false)
          return 0
        }
        return prev + 1
      })
    }, 2000)
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  return (
    <Section background="white" padding="lg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title}<span className='text-brand-blue'> Architecture & Performance</span>
          </motion.h2>
          <motion.p
            className="text-base text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Discover how our intelligent agent architecture delivers measurable business results
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Demo Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl border border-gray-100 h-full flex flex-col">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Interactive Demo
                  </h3>
                  <p className="text-sm text-gray-600">Click any step to explore</p>
                </div>
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                {demoSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    className={`group p-4 rounded-xl cursor-pointer transition-all duration-300 ${activeStep === index
                      ? 'bg-blue-50 border-2 border-blue-200 shadow-md'
                      : 'bg-white border-2 border-gray-100 hover:border-blue-200 hover:shadow-sm'
                      }`}
                    onClick={() => setActiveStep(index)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${activeStep === index
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                        }`}>
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className={`font-semibold transition-colors duration-300 ${activeStep === index ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
                          }`}>{step.title}</div>
                        <div className="text-sm text-gray-500 mt-1">{step.description}</div>
                      </div>
                      {activeStep === index && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button
                variant="primary"
                onClick={playDemo}
                disabled={isPlaying}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {isPlaying ? 'Playing Demo...' : 'Start Interactive Demo'}
              </Button>
            </div>
          </motion.div>

          {/* Demo Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100 h-full flex flex-col justify-center">
              <h1 className="text-2xl font-bold mb-12 text-center">Interactive Demo {productName}</h1>
              <div className="aspect-video bg-gradient-to-br from-white to-white-50 rounded-xl flex items-center justify-center mb-8 border border-blue-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent"></div>
                {/* Product-Specific Demo Visualization */}
                <motion.div
                  className="w-full h-full flex items-center justify-center relative z-10"
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Product-specific visual elements */}
                  {productName === 'CogniAssist' && (
                    <div className="w-full h-full flex items-center justify-center p-4">
                      <motion.div
                        className="relative w-full h-full rounded-xl overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Image
                          src={`/images/congiassist/${activeStep === 0 ? 'Agent-selection.png' :
                            activeStep === 1 ? 'Agent-Generating.png' :
                              activeStep === 2 ? 'Workflow-view.png' :
                                'Agent-Chat.png'
                            }`}
                          alt={`${demoSteps[activeStep]?.title} - CogniAssist Interface`}
                          fill
                          className="object-contain"
                          key={`cogniassist-${activeStep}`}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </motion.div>
                    </div>
                  )}

                  {productName === 'CogniLoom' && (
                    <div className="w-full">
                      <motion.div
                        className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white shadow-lg"
                        animate={{
                          scale: [1, 1.05, 1],
                          y: [0, -5, 0]
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {demoSteps[activeStep]?.icon}
                      </motion.div>
                      <div className="flex justify-center space-x-3 mb-6">
                        {[1, 2, 3, 4].map((i) => (
                          <motion.div
                            key={i}
                            className={`w-14 h-14 rounded-xl border-2 ${activeStep >= i - 1 ? 'border-green-400 bg-green-100' : 'border-gray-300 bg-gray-100'} flex items-center justify-center shadow-sm`}
                            animate={activeStep >= i - 1 ? { scale: [1, 1.1, 1] } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                          >
                            <div className={`w-7 h-7 rounded-lg ${activeStep >= i - 1 ? 'bg-green-400' : 'bg-gray-300'}`}></div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {productName === 'CogniInsights' && (
                    <div className="w-full">
                      <motion.div
                        className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white shadow-lg"
                        animate={{
                          scale: [1, 1.05, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {demoSteps[activeStep]?.icon}
                      </motion.div>
                      <div className="flex justify-between items-center mb-6">
                        <div className="w-20 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center text-xs font-semibold text-white shadow-md">Source</div>
                        <div className="flex-1 mx-6">
                          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${((activeStep + 1) / demoSteps.length) * 100}%` }}
                              transition={{ duration: 1, ease: "easeInOut" }}
                            />
                          </div>
                        </div>
                        <div className="w-20 h-14 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center text-xs font-semibold text-white shadow-md">Target</div>
                      </div>
                    </div>
                  )}

                  {productName === 'CogniForge' && (
                    <div className="w-full">
                      <motion.div
                        className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white shadow-lg"
                        animate={{
                          scale: [1, 1.05, 1],
                          rotate: [0, 3, -3, 0]
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {demoSteps[activeStep]?.icon}
                      </motion.div>
                      <div className="grid grid-cols-4 gap-2 mb-6">
                        {['Order', 'Plan', 'Execute', 'Deliver'].map((label, i) => (
                          <motion.div
                            key={i}
                            className={`h-12 rounded-xl ${activeStep >= i ? 'bg-gradient-to-br from-orange-400 to-red-500 text-white' : 'bg-gray-200 text-gray-600'} flex items-center justify-center text-xs font-semibold shadow-sm`}
                            animate={activeStep >= i ? { scale: [1, 1.05, 1] } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                          >
                            {label}
                          </motion.div>
                        ))}
                      </div>
                      <div className="flex justify-center space-x-2 mb-4">
                        {[1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            className={`w-8 h-8 rounded-lg ${activeStep >= i - 1 ? 'bg-orange-400' : 'bg-gray-300'} flex items-center justify-center shadow-sm`}
                            // animate={activeStep >= i - 1 ? { rotate: [0, 360] } : {}}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Animated Elements */}
                {isPlaying && (
                  <motion.div
                    className="absolute inset-0 border-4 border-blue-400 rounded-xl"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 1.05, opacity: 0 }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">Step {activeStep + 1} of {demoSteps.length}</span>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <span className="text-xs text-gray-500">Interactive Preview</span>
                </div>
                <div className="flex space-x-2">
                  {demoSteps.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${index === activeStep
                        ? 'bg-blue-500 shadow-lg scale-110'
                        : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                      onClick={() => setActiveStep(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default InteractiveDemo
export { InteractiveDemo }