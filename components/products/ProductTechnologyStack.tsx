'use client'

import { motion } from 'framer-motion'
import {
  CpuChipIcon, // Represents AI/ML
  ShareIcon, // Represents Agentic Frameworks
  CloudArrowUpIcon, // Represents Cloud/Container
  ChartBarSquareIcon, // Represents Data/Analytics
  CommandLineIcon, // Represents Development/Integration
  MagnifyingGlassIcon, // Represents Monitoring/Observability
  ArrowRightIcon // For the process flow
} from '@heroicons/react/24/outline'

// Define consistent color scheme
const ACCENT_COLOR = 'text-blue-600'
const ACCENT_BG = 'bg-blue-600'
const ACCENT_LIGHT_BG = 'bg-blue-50'
const PRIMARY_TEXT = 'text-gray-900'

// Component for a single Technology Stack Card
const PillarCard = ({ category, icon: Icon, technologies, index }: {
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="p-6 bg-white border border-gray-100 rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg"
  >
    <div className="flex items-center space-x-3 mb-4">
      <Icon className={`w-6 h-6 ${ACCENT_COLOR}`} />
      <h3 className={`text-lg font-semibold ${PRIMARY_TEXT}`}>{category}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech: string) => (
        <span
          key={tech}
          className={`px-3 py-1 text-xs font-medium ${ACCENT_COLOR} ${ACCENT_LIGHT_BG} rounded-full border border-blue-200`}
        >
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
)

const ProductTechnologyStack = () => {
  const techCategories = [
    { category: 'AI & Machine Learning', icon: CpuChipIcon, technologies: ['OpenAI GPT-4', 'Anthropic Claude', 'TensorFlow', 'PyTorch', 'Hugging Face'] },
    { category: 'Agentic AI Frameworks', icon: ShareIcon, technologies: ['AutoGen', 'CrewAI', 'Semantic Kernel', 'LangGraph', 'Agent Orchestration'] },
    { category: 'Cloud & Container Platforms', icon: CloudArrowUpIcon, technologies: ['Kubernetes', 'Docker', 'Helm', 'AWS EKS', 'Azure AKS', 'Google GKE'] },
    { category: 'Data & Analytics', icon: ChartBarSquareIcon, technologies: ['Apache Spark', 'Kafka', 'Snowflake', 'Databricks', 'Elasticsearch'] },
    { category: 'Development & Integration', icon: CommandLineIcon, technologies: ['React', 'Next.js', 'Python', 'Node.js', 'TypeScript', 'GraphQL'] },
    { category: 'Monitoring & Observability', icon: MagnifyingGlassIcon, technologies: ['Prometheus', 'Grafana', 'Datadog', 'OpenTelemetry', 'Jaeger'] }
  ]

  const developmentPhases = [
    { name: 'Discovery & Planning', detail: 'AI-powered requirements analysis and product strategy planning' },
    { name: 'Architecture & Design', detail: 'Intelligent system architecture with scalable AI integration design' },
    { name: 'Development & Testing', detail: 'AI-assisted development with automated testing and quality assurance' },
    { name: 'Deployment & Monitoring', detail: 'Automated deployment with AI-powered monitoring and optimization' }
  ]

  const aiLayers = techCategories.slice(0, 3)
  const opsLayers = techCategories.slice(3, 6)

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            AI-Powered Product <span className={ACCENT_COLOR}>Technology Stack</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Built on cutting-edge, enterprise-grade technologies for performance, reliability, and scale.
          </motion.p>
        </div>

        {/* --- Technology Pillars (Visual Stack) --- */}
        <div className="mb-20 relative"> 
            <h3 className="text-2xl font-bold text-center mb-10 border-b border-gray-200 pb-4">Core Technology Layers</h3>
            
            {/* FIX: Move the vertical connector line outside the grid items to prevent overlap. */}
            {/* Central Vertical Divider Line (Only visible on large screens) */}
            <div className={`absolute top-20 bottom-16 left-1/2 w-px bg-gray-300 transform -translate-x-1/2 hidden md:block`}></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16">
                
                {/* PILLAR 1: Foundational AI & Agent Layers */}
                <div className="space-y-6">
                    <h4 className="text-xl font-bold mb-4 text-center text-blue-800">Foundation & AI Layers</h4>
                    {aiLayers.map((category, index) => (
                        <PillarCard key={category.category} {...category} index={index} />
                    ))}
                </div>

                {/* PILLAR 2: Operational & Platform Layers */}
                <div className="space-y-6">
                    <h4 className="text-xl font-bold mb-4 text-center text-green-800">Platform & Data Operations</h4>
                    {opsLayers.map((category, index) => (
                        <PillarCard key={category.category} {...category} index={index} />
                    ))}
                </div>
            </div>
             <p className="text-center text-sm text-gray-500 mt-10">We prioritize open and flexible frameworks to prevent vendor lock-in.</p>
        </div>

        {/* --- AI-Enhanced Development Process (Flow Diagram) --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8 lg:p-12"
        >
          <div className="text-center mb-10">
            <h3 className={`text-3xl font-bold ${PRIMARY_TEXT} mb-3`}>
              AI-Enhanced Product <span className={ACCENT_COLOR}>Development Process</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring rapid delivery, quality, and continuous intelligent optimization.
            </p>
          </div>
          
          <div className="relative flex justify-between">
            {/* FIX: Corrected vertical position of the horizontal line to align with the dot center. */}
            {/* The primary horizontal connector line */}
            <div className={`absolute top-[2.5rem] left-5 right-5 h-0.5 ${ACCENT_LIGHT_BG} hidden lg:block`}></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              {developmentPhases.map((phase, index) => (
                <div key={phase.name} className="text-center relative pt-8">
                  
                  {/* Step Number Dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 top-0 w-12 h-12 ${ACCENT_BG} rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 ring-4 ring-white shadow-lg`}>
                    {index + 1}
                  </div>
                  
                  <h4 className={`font-extrabold ${PRIMARY_TEXT} mb-2 mt-4`}>{phase.name}</h4>
                  <p className="text-sm text-gray-600">
                    {phase.detail}
                  </p>

                  {/* Arrow Indicator (Hidden on last step and large screen) */}
                  {index < developmentPhases.length - 1 && (
                     <div className="mt-4 lg:hidden">
                        <ArrowRightIcon className={`w-6 h-6 mx-auto ${ACCENT_COLOR}`} />
                     </div>
                  )}
                  
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}

export default ProductTechnologyStack