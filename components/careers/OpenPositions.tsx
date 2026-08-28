'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

// Ambient particle wave for open positions bottom
const BottomMeshWave = () => (
  <div className="absolute bottom-0 right-0 w-[500px] h-[250px] pointer-events-none opacity-60 overflow-hidden">
    <svg
      viewBox="0 0 500 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-cover object-bottom"
    >
      <defs>
        <linearGradient id="posWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <path
        d="M0 180 C 100 130, 200 210, 300 160 C 400 110, 450 190, 500 150"
        stroke="url(#posWaveGrad)"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M0 200 C 110 150, 210 225, 310 175 C 410 125, 460 205, 500 170"
        stroke="url(#posWaveGrad)"
        strokeWidth="1.2"
        strokeDasharray="2 3"
        fill="none"
      />
      {[
        { cx: 120, cy: 155, r: 1.8 },
        { cx: 240, cy: 190, r: 2.2 },
        { cx: 330, cy: 160, r: 2.5 },
        { cx: 420, cy: 130, r: 2 },
      ].map((pt, idx) => (
        <circle key={idx} cx={pt.cx} cy={pt.cy} r={pt.r} fill="#A78BFA" />
      ))}
    </svg>
  </div>
);

export const OpenPositions = () => {
  return (
    <section id="open-positions" className="py-24 bg-[#08090B] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-[#7C3AED]/10 rounded-full blur-[140px]" />
      </div>

      <BottomMeshWave />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Open Positions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[#B8B6C4] max-w-xl mx-auto text-base sm:text-lg font-normal"
          >
            Explore opportunities across different teams and find your perfect role
          </motion.p>
        </div>

        {/* 2-Card Layout as shown in design */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Card 1: Currently No Open Positions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#15151D]/90 rounded-3xl p-8 sm:p-10 border border-[#29263A] hover:border-[#8B5CF6]/50 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] transition-all duration-300 backdrop-blur-xl flex flex-col justify-center items-center text-center group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(124,58,237,0.35)] group-hover:scale-105 group-hover:border-[#A78BFA] transition-all duration-300">
              <BriefcaseIcon className="w-7 h-7 text-[#A78BFA]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Currently No Open Positions
            </h3>
            <p className="text-xs sm:text-sm text-[#B8B6C4] leading-relaxed max-w-sm">
              We are currently not hiring for any positions. Please check back later.
            </p>
          </motion.div>

          {/* Card 2: Interested in Joining Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="bg-[#15151D]/90 rounded-3xl p-8 sm:p-10 border border-[#29263A] hover:border-[#8B5CF6]/50 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] transition-all duration-300 backdrop-blur-xl flex flex-col justify-center items-center text-center group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(124,58,237,0.35)] group-hover:scale-105 group-hover:border-[#A78BFA] transition-all duration-300">
              <EnvelopeIcon className="w-7 h-7 text-[#A78BFA]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Interested in joining us?
            </h3>
            <p className="text-xs sm:text-sm text-[#B8B6C4] mb-6 leading-relaxed max-w-sm">
              Send your resume to us and we&apos;ll keep you in mind for future opportunities.
            </p>
            <a
              href="mailto:reachus@cogniwide.com"
              className="inline-flex items-center justify-center w-full py-3.5 px-6 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 transition-all duration-300"
            >
              reachus@cogniwide.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};