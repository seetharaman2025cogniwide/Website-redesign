'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const BlogHero = () => {
  return (
    <section className="relative bg-[#08090B] overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24">
      {/* Ambient background lighting & glows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top central soft purple flare */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#7C3AED]/20 via-[#8B5CF6]/10 to-transparent blur-[130px] -z-10" />
        {/* Left and right subtle flares */}
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-[130px] -z-10" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-[#7C3AED]/12 rounded-full blur-[130px] -z-10" />

        {/* Ambient star sparkles */}
        <div className="absolute top-20 left-[15%] w-1 h-1 bg-[#A78BFA] rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-32 right-[20%] w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-pulse" />
        <div className="absolute bottom-16 left-[30%] w-1 h-1 bg-[#8B5CF6] rounded-full opacity-50" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-[#15151D]/90 border border-[#29263A] shadow-[0_0_18px_rgba(124,58,237,0.2)] text-[#A78BFA] text-xs md:text-sm font-semibold px-5 py-2 rounded-full mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-ping" />
            <span>Knowledge Hub</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            Insights on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC] drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
              AI & Innovation
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#B8B6C4] max-w-2xl mx-auto leading-relaxed font-normal">
            Dive into our latest thoughts, architecture reflections, coding breakthroughs, and enterprise AI perspectives.
          </p>
        </motion.div>
      </div>
    </section>
  );
};