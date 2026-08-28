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

// Dark theme tokens
const ACCENT_COLOR = 'text-[#A78BFA]'
const ACCENT_BG = 'bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6]'
const ACCENT_LIGHT_BG = 'bg-gradient-to-br from-[#1E1B38] to-[#15151D]'
const PRIMARY_TEXT = 'text-white'

// Dark PillarCard
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
    className="group relative p-6 bg-[#15151D]/95 border border-[#29263A] hover:border-[#8B5CF6]/60 rounded-xl shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] transition-all duration-500 overflow-hidden"
  >
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />
    <div className="flex items-center space-x-3 mb-4">
      <div className="w-9 h-9 bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 rounded-lg flex items-center justify-center group-hover:border-[#A78BFA] transition-all duration-300">
        <Icon className="w-5 h-5 text-[#A78BFA]" />
      </div>
      <h3 className="text-lg font-semibold text-white group-hover:text-[#A78BFA] transition-colors duration-300">{category}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech: string) => (
        <span
          key={tech}
          className="px-3 py-1 text-xs font-medium text-[#A78BFA] bg-[#1E1B38] rounded-full border border-[#8B5CF6]/30 hover:border-[#A78BFA]/60 transition-colors duration-200"
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
    <section className="py-20 lg:py-28 bg-[#0D0C1A] relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#7C3AED]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#8B5CF6]/8 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#15151D]/90 border border-[#29263A] shadow-[0_0_18px_rgba(124,58,237,0.2)] text-[#A78BFA] text-xs font-semibold px-5 py-2 rounded-full mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
            <span className="uppercase tracking-wider">Tech Stack</span>
          </div>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            AI-Powered Product{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC]">Technology Stack</span>
          </motion.h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-transparent shadow-[0_0_10px_#8B5CF6] mx-auto mb-4" />
          <motion.p
            className="text-lg text-[#B8B6C4] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Built on cutting-edge, enterprise-grade technologies for performance, reliability, and scale.
          </motion.p>
        </div>

        {/* Technology Pillars */}
        <div className="mb-20 relative">
          <h3 className="text-2xl font-bold text-center text-white mb-10 border-b border-[#29263A] pb-4">Core Technology Layers</h3>
          <div className="absolute top-20 bottom-16 left-1/2 w-px bg-[#29263A] transform -translate-x-1/2 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16">
            <div className="space-y-6">
              <h4 className="text-xl font-bold mb-4 text-center text-[#A78BFA]">Foundation & AI Layers</h4>
              {aiLayers.map((category, index) => (
                <PillarCard key={category.category} {...category} index={index} />
              ))}
            </div>
            <div className="space-y-6">
              <h4 className="text-xl font-bold mb-4 text-center text-[#6EE7B7]">Platform & Data Operations</h4>
              {opsLayers.map((category, index) => (
                <PillarCard key={category.category} {...category} index={index} />
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-[#B8B6C4]/60 mt-10">We prioritize open and flexible frameworks to prevent vendor lock-in.</p>
        </div>

        {/* AI-Enhanced Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-[#15151D]/95 border border-[#29263A] rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.4)] p-8 lg:p-12 overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />
          {/* Inner ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.08),transparent_60%)] pointer-events-none" />

          <div className="text-center mb-10 relative z-10">
            <h3 className="text-3xl font-extrabold text-white mb-3 tracking-tight">
              AI-Enhanced Product{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6]">Development Process</span>
            </h3>
            <p className="text-[#B8B6C4] max-w-2xl mx-auto">
              A systematic approach ensuring rapid delivery, quality, and continuous intelligent optimization.
            </p>
          </div>
          
          <div className="relative flex justify-between">
            {/* Horizontal connector line */}
            <div className="absolute top-[2.5rem] left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full relative z-10">
              {developmentPhases.map((phase, index) => (
                <div key={phase.name} className="text-center relative pt-8">
                  {/* Step Number Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-12 h-12 bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 shadow-[0_0_20px_rgba(124,58,237,0.5)] ring-4 ring-[#15151D]">
                    {index + 1}
                  </div>
                  <h4 className="font-extrabold text-white mb-2 mt-4">{phase.name}</h4>
                  <p className="text-sm text-[#B8B6C4]">{phase.detail}</p>
                  {index < developmentPhases.length - 1 && (
                    <div className="mt-4 lg:hidden">
                      <ArrowRightIcon className="w-6 h-6 mx-auto text-[#8B5CF6]" />
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