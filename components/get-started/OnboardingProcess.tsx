'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, ChartBarIcon, PaletteIcon, RocketIcon, TrendingUpIcon, WrenchIcon } from '@/components/ui/icons';

const steps = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'We learn about your business needs and AI goals.',
    icon: PhoneIcon
  },
  {
    step: '02',
    title: 'AI Readiness Assessment',
    description: 'We evaluate your current systems and data infrastructure.',
    icon: ChartBarIcon
  },
  {
    step: '03',
    title: 'Solution Design',
    description: 'We create a customized AI implementation plan.',
    icon: PaletteIcon
  },
  {
    step: '04',
    title: 'Pilot Program',
    description: 'We start with a small-scale implementation to prove value.',
    icon: RocketIcon
  },
  {
    step: '05',
    title: 'Full Deployment',
    description: 'We scale the solution across your organization.',
    icon: TrendingUpIcon
  },
  {
    step: '06',
    title: 'Ongoing Support',
    description: 'We provide continuous optimization and support.',
    icon: WrenchIcon
  }
];

export const OnboardingProcess = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#08090B] relative overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#15151D]/90 border border-[#29263A] text-[#A78BFA] rounded-full text-xs font-semibold uppercase tracking-wider mb-6 shadow-[0_0_18px_rgba(124,58,237,0.2)] backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse"></span>
            Our Process
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            Proven{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC] drop-shadow-[0_0_25px_rgba(139,92,246,0.4)]">
              Implementation Methodology
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#B8B6C4] max-w-3xl mx-auto leading-relaxed font-normal"
          >
            We follow a structured approach to ensure successful AI implementation and maximum ROI for your organization.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative bg-[#15151D]/90 rounded-2xl p-8 border border-[#29263A] shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:border-[#8B5CF6]/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-500 ease-out hover:-translate-y-2 backdrop-blur-md"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-tr from-[#8B5CF6] to-[#7C3AED] rounded-full flex items-center justify-center text-white font-bold text-base shadow-[0_0_20px_rgba(139,92,246,0.5)] border border-[#A78BFA]/30">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                    <IconComponent className="w-7 h-7 text-[#A78BFA]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#A78BFA] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[#B8B6C4] leading-relaxed text-sm sm:text-base font-normal">
                  {step.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};