'use client';

import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    title: 'Value Creation',
    letter: 'V',
    description: 'Value-driven solutions that create tangible results for our clients through innovative technology and strategic thinking.',
  },
  {
    title: 'Innovation Excellence',
    letter: 'I',
    description: 'Innovation at our core, constantly pushing boundaries with new ideas and cutting-edge methodologies.',
  },
  {
    title: 'Respect & Responsibility',
    letter: 'R',
    description: 'Responsibility in every action, treating all stakeholders with respect and maintaining our commitments.',
  },
  {
    title: 'Transparency & Trust',
    letter: 'T',
    description: 'Transparency in all dealings, maintaining highest ethical standards and building lasting trust with clients.',
  },
  {
    title: 'Unity & Collaboration',
    letter: 'U',
    description: 'Unity through collaboration, fostering teamwork among our teams and creating strong partnerships with clients.',
  },
  {
    title: 'Excellence in Delivery',
    letter: 'E',
    description: 'Excellence as our standard, delivering superior quality and exceptional results in every project.',
  },
];

export const ValuesSection = () => {
  return (
    <section className="relative py-24 bg-[#17152A] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#15151D] border border-[#29263A] shadow-[0_0_15px_rgba(124,58,237,0.15)] text-[#A78BFA] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Guiding Principles
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Our Values &mdash;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC] drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]">
              VIRTUE
            </span>
          </h2>

          {/* V-I-R-T-U-E Badge Row */}
          <div className="flex justify-center gap-2.5 sm:gap-3.5 mb-6">
            {values.map((value, index) => (
              <motion.div
                key={value.letter}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#15151D] border border-[#8B5CF6]/50 rounded-xl flex items-center justify-center text-[#A78BFA] font-extrabold text-lg sm:text-xl shadow-[0_0_15px_rgba(124,58,237,0.25)] hover:bg-[#8B5CF6] hover:text-white hover:border-white transition-all duration-300 hover:scale-110 cursor-default"
              >
                {value.letter}
              </motion.div>
            ))}
          </div>

          <p className="text-[#B8B6C4] max-w-xl mx-auto text-base sm:text-lg">
            Core principles that guide everything we do and shape our culture
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.08 * index,
                }}
                className="group relative bg-[#15151D]/90 rounded-2xl p-7 border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(124,58,237,0.25)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl"
              >
                {/* Top Subtle Highlight */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent" />

                {/* Content with glowing large first letter */}
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-extrabold text-[#A78BFA] drop-shadow-[0_0_10px_rgba(167,139,250,0.5)] group-hover:scale-110 transition-transform duration-200">
                    {value.letter}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#A78BFA] transition-colors duration-200">
                    {value.title.substring(1)}
                  </h3>
                </div>

                <p className="text-sm text-[#B8B6C4] leading-relaxed font-normal">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};