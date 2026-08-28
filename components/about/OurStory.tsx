'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon, LightBulbIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const storySteps = [
  {
    step: '01',
    title: 'Founded with Purpose',
    icon: SparklesIcon,
    description:
      'Cogniwide was established as an AI-based IT products and services company, committed to delivering high-performance solutions. We started with a vision to transform businesses through cutting-edge technology and innovative thinking.',
  },
  {
    step: '02',
    title: 'Innovation at Scale',
    icon: LightBulbIcon,
    description:
      'We deliver market-shaping AI and self-optimizing systems that support rapid business transformation across all industries. Our solutions empower organizations to harness the power of artificial intelligence and drive meaningful change.',
  },
  {
    step: '03',
    title: 'Future Ready, Always',
    icon: RocketLaunchIcon,
    description:
      'Our curiosity to learn the newest technology never wavers, ensuring you stay ahead of the competition in the post-digital age. We continuously evolve, adapt, and innovate to meet the challenges of tomorrow.',
  },
];

export const OurStory = () => {
  return (
    <section className="py-24 bg-[#0B0A14] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#15151D] border border-[#29263A] shadow-[0_0_15px_rgba(124,58,237,0.15)] text-[#A78BFA] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Evolution
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our Story
          </h2>
          <p className="text-[#B8B6C4] text-base md:text-lg max-w-xl mx-auto">
            A journey of transformation, innovation, and continuous excellence
          </p>
        </motion.div>

        <div className="space-y-6">
          {storySteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="group relative bg-[#15151D]/90 rounded-2xl p-7 md:p-9 border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(124,58,237,0.2)] transition-all duration-300 backdrop-blur-xl"
              >
                {/* Subtle top edge highlight */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent" />

                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Step Badge and Icon */}
                  <div className="flex items-center gap-4 md:flex-col md:items-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[#1A1829] border border-[#8B5CF6]/40 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.3)] group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-[#A78BFA]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#777583] tracking-widest uppercase">
                      PHASE {item.step}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#A78BFA] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-[#B8B6C4] leading-relaxed text-sm md:text-base font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};