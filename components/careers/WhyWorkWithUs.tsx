'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  CpuChipIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const benefits = [
  {
    id: 'tech',
    title: 'Cutting-Edge Technology',
    description: "Work with the latest AI technologies, frameworks, and tools. From machine learning models to cloud infrastructure, you'll have access to cutting-edge resources that push the boundaries of what's possible in artificial intelligence.",
    icon: CpuChipIcon,
  },
  {
    id: 'flexibility',
    title: 'Flexible Work Environment',
    description: "Embrace a remote-first culture with flexible work arrangements that support work-life balance. Collaborate with talented professionals from around the world while maintaining the flexibility to work where you're most productive.",
    icon: GlobeAltIcon,
  },
  {
    id: 'growth',
    title: 'Growth & Development',
    description: "Invest in your future with continuous learning opportunities, mentorship programs, and career development paths. We're committed to helping you grow professionally and reach your full potential in the rapidly evolving field of AI.",
    icon: AcademicCapIcon,
  },
  {
    id: 'benefits',
    title: 'Comprehensive Benefits',
    description: "Enjoy competitive compensation packages including health insurance, retirement plans, generous PTO, and wellness programs. We believe in taking care of our team members so they can focus on doing their best work.",
    icon: HeartIcon,
  }
];

export const WhyWorkWithUs = () => {
  return (
    <section id="why-join-us" className="py-24 bg-[#0B0A14] relative overflow-hidden">
      {/* Background decorative glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-[#A78BFA] uppercase mb-3 block">
            LIFE AT COGNIWIDE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Join Us
          </h2>
          <p className="text-base sm:text-lg text-[#B8B6C4] max-w-2xl mx-auto leading-relaxed">
            Experience a workplace where innovation meets opportunity, and your work directly shapes the future of enterprise AI.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#15151D]/90 rounded-2xl p-7 border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(124,58,237,0.25)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between"
            >
              {/* Top subtle border highlight */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1A1829] border border-[#8B5CF6]/40 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(124,58,237,0.3)] group-hover:scale-110 group-hover:border-[#A78BFA] transition-all duration-300">
                  <benefit.icon className="w-6 h-6 text-[#A78BFA]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#A78BFA] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#B8B6C4] leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};