'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { UserGroupIcon, SparklesIcon, RocketLaunchIcon, HeartIcon } from '@heroicons/react/24/outline';

// Left Edge Purple Wave Mesh Graphic
const SideWaveMesh = () => (
  <div className="absolute top-1/4 -left-20 w-[450px] h-[350px] pointer-events-none opacity-75 overflow-hidden -z-0">
    <svg
      viewBox="0 0 450 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="careerWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path
        d="M -50 180 C 50 120, 120 240, 220 170 C 320 100, 380 220, 450 160"
        stroke="url(#careerWaveGrad)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M -50 200 C 60 140, 130 260, 230 190 C 330 120, 390 240, 450 180"
        stroke="url(#careerWaveGrad)"
        strokeWidth="1.2"
        strokeDasharray="2 3"
        fill="none"
      />
      <path
        d="M -50 220 C 70 160, 140 280, 240 210 C 340 140, 400 260, 450 200"
        stroke="url(#careerWaveGrad)"
        strokeWidth="1.4"
        fill="none"
      />
      {[
        { cx: 60, cy: 150, r: 2 },
        { cx: 140, cy: 220, r: 2.2 },
        { cx: 230, cy: 180, r: 2.5 },
        { cx: 310, cy: 130, r: 2 },
        { cx: 380, cy: 210, r: 1.8 },
      ].map((pt, i) => (
        <circle key={i} cx={pt.cx} cy={pt.cy} r={pt.r} fill="#A78BFA" />
      ))}
    </svg>
  </div>
);

export const CareersHero = () => {
  const scrollToPositions = () => {
    const el = document.getElementById('open-positions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCulture = () => {
    const el = document.getElementById('why-join-us');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-[#08090B] overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background ambient lighting & glows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top central soft purple flare */}
        <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#7C3AED]/20 via-[#8B5CF6]/10 to-transparent blur-[130px] -z-10" />
        
        {/* Right cosmic sphere & ambient light */}
        <div className="absolute top-1/3 right-10 w-44 h-44 rounded-full bg-gradient-to-tr from-[#7C3AED]/25 to-[#A78BFA]/10 border border-[#8B5CF6]/30 shadow-[0_0_60px_rgba(124,58,237,0.35)] blur-[1px] hidden xl:block -z-10" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[140px] -z-10" />

        {/* Ambient star sparkles */}
        <div className="absolute top-20 left-[20%] w-1 h-1 bg-[#A78BFA] rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-36 right-[25%] w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-pulse" />
        <div className="absolute bottom-24 left-[35%] w-1 h-1 bg-[#8B5CF6] rounded-full opacity-50" />
      </div>

      {/* Side Wave Graphic */}
      <SideWaveMesh />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Header Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#15151D]/90 border border-[#29263A] shadow-[0_0_18px_rgba(124,58,237,0.2)] text-[#A78BFA] px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B5CF6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B5CF6]"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide">We&apos;re Hiring</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Shape the Future of <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC] drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                Enterprise AI
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-[#B8B6C4] mb-10 max-w-xl leading-relaxed font-normal">
              Join our passionate team of innovators, researchers, and engineers building the next generation of AI solutions. At Cogniwide, we&apos;re not just writing code—we&apos;re redefining what&apos;s possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToPositions}
                className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white px-8 py-3.5 rounded-xl font-bold shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 transition-all duration-300 text-center"
              >
                View Open Roles
              </button>
              <button 
                onClick={scrollToCulture}
                className="bg-[#15151D] text-white border border-[#29263A] hover:border-[#8B5CF6]/60 hover:bg-[#1A1829] px-8 py-3.5 rounded-xl font-bold transition-all duration-300 text-center"
              >
                Learn About Our Culture
              </button>
            </div>
          </motion.div>

          {/* Right side 4 Interactive Glass Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative"
          >
            {/* Culture Card */}
            <div className="bg-[#15151D]/90 rounded-2xl p-6 sm:p-7 border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 rounded-xl flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(124,58,237,0.3)] group-hover:scale-110 group-hover:border-[#A78BFA] transition-all duration-300">
                <UserGroupIcon className="w-6 h-6 text-[#A78BFA]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#A78BFA] transition-colors">
                Our Culture
              </h3>
              <p className="text-[#B8B6C4] text-xs sm:text-sm leading-relaxed">
                A collaborative environment where innovation thrives, ideas are valued, and you can make a meaningful impact.
              </p>
            </div>

            {/* Growth Card - offset */}
            <div className="bg-[#15151D]/90 rounded-2xl p-6 sm:p-7 border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] hover:-translate-y-1 transition-all duration-300 sm:mt-6 backdrop-blur-xl group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 rounded-xl flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(124,58,237,0.3)] group-hover:scale-110 group-hover:border-[#A78BFA] transition-all duration-300">
                <SparklesIcon className="w-6 h-6 text-[#A78BFA]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#A78BFA] transition-colors">
                Your Growth
              </h3>
              <p className="text-[#B8B6C4] text-xs sm:text-sm leading-relaxed">
                Continuous learning with access to cutting-edge tech, mentorship, and resources to reach your full potential.
              </p>
            </div>

            {/* Global Impact Card */}
            <div className="bg-[#15151D]/90 rounded-2xl p-6 sm:p-7 border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 rounded-xl flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(124,58,237,0.3)] group-hover:scale-110 group-hover:border-[#A78BFA] transition-all duration-300">
                <RocketLaunchIcon className="w-6 h-6 text-[#A78BFA]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#A78BFA] transition-colors">
                Global Impact
              </h3>
              <p className="text-[#B8B6C4] text-xs sm:text-sm leading-relaxed">
                Build products that transform enterprise operations for Fortune 500 companies around the world.
              </p>
            </div>

            {/* Wellbeing Card - offset */}
            <div className="bg-[#15151D]/90 rounded-2xl p-6 sm:p-7 border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] hover:-translate-y-1 transition-all duration-300 sm:mt-6 backdrop-blur-xl group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 rounded-xl flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(124,58,237,0.3)] group-hover:scale-110 group-hover:border-[#A78BFA] transition-all duration-300">
                <HeartIcon className="w-6 h-6 text-[#A78BFA]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#A78BFA] transition-colors">
                Wellbeing
              </h3>
              <p className="text-[#B8B6C4] text-xs sm:text-sm leading-relaxed">
                Comprehensive benefits, flexible working arrangements, and a focus on work-life harmony.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};