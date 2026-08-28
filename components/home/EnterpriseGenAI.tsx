'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpenIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ServerIcon,
  CpuChipIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: BookOpenIcon,
    title: 'Content Over Code',
    description: 'Focused on content and knowledge rather than only software logic.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: SparklesIcon,
    title: 'Customization',
    description: 'Customized to each user and business, using company-specific data and preferences.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Hallucination Control',
    description: 'Built-in mechanisms to reduce hallucinations when working with structured enterprise data.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: ServerIcon,
    title: 'On-Prem & Private Models',
    description: 'An extensible architecture that supports interchangeable and pluggable models.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: CpuChipIcon,
    title: 'Agent-Driven Architecture',
    description: 'Coordinates multiple public and open-source models to automate workflows and tasks.',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: ChartBarIcon,
    title: 'LLM Operations (LLMOps)',
    description: 'Continuous monitoring of cost, performance, accuracy, and reliability across LLM systems.',
    color: 'from-yellow-500 to-orange-500'
  }
];

export const EnterpriseGenAI = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#0D0C1A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#7C3AED]/12 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8B5CF6]/8 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04]"
             style={{ backgroundImage: 'radial-gradient(rgba(139,92,246,0.8) 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#15151D]/90 border border-[#29263A] shadow-[0_0_18px_rgba(124,58,237,0.2)] text-[#A78BFA] text-xs font-semibold px-5 py-2 rounded-full mb-6 backdrop-blur-md uppercase tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse"></span>
            Our Approach
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            Enterprise GenAI,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC] drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
              Built Our Way
            </span>
          </motion.h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-transparent shadow-[0_0_10px_#8B5CF6] mx-auto mb-6" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#B8B6C4] max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive AI platform designed for enterprise needs, combining cutting-edge technology with practical business solutions.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative bg-[#15151D]/95 rounded-2xl p-8 border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.2)] transition-all duration-500 overflow-hidden hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#7C3AED]/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 flex items-center justify-center group-hover:border-[#A78BFA] group-hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-[#A78BFA]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#A78BFA] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#B8B6C4] leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Bottom neon line */}
                <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] transition-all duration-500 ease-out w-0 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseGenAI;
