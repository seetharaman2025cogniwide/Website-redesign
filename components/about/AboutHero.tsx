'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const AnimatedNumber = ({ value, label, delay }: { value: string; label: string; delay: number }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const increment = target / 50;
      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 30);
      return () => clearInterval(counter);
    }, delay);
    return () => clearTimeout(timer);
  }, [target, delay]);

  return (
    <div className="text-center group">
      <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-white via-[#A78BFA] to-[#8B5CF6] bg-clip-text text-transparent mb-1 drop-shadow-[0_0_15px_rgba(139,92,246,0.35)] group-hover:scale-105 transition-transform duration-300">
        {count}{value.includes('+') ? '+' : ''}
        {value.includes('/') && '/7'}
      </div>
      <div className="text-[#B8B6C4] text-xs md:text-sm font-medium tracking-wide uppercase">{label}</div>
    </div>
  );
};

// Purple AI Wave Mesh Graphics for the bottom of cards
const PurpleWaveMesh = () => {
  return (
    <div className="absolute -bottom-2 left-0 right-0 h-36 overflow-hidden pointer-events-none opacity-85 select-none">
      <svg
        viewBox="0 0 600 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover object-bottom"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveLineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.1" />
            <stop offset="30%" stopColor="#8B5CF6" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#A78BFA" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="waveLineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.05" />
            <stop offset="45%" stopColor="#7C3AED" stopOpacity="0.75" />
            <stop offset="75%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.05" />
          </linearGradient>
          <radialGradient id="meshCenterGlow" cx="50%" cy="100%" r="60%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#7C3AED" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0B0A14" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient bottom glow in mesh */}
        <rect x="0" y="0" width="600" height="200" fill="url(#meshCenterGlow)" />

        {/* Undulating perspective wire mesh lines */}
        <path
          d="M0 160 C 100 130, 200 175, 300 145 C 400 115, 500 160, 600 135"
          stroke="url(#waveLineGrad1)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M0 170 C 110 140, 210 185, 310 152 C 410 120, 510 170, 600 145"
          stroke="url(#waveLineGrad2)"
          strokeWidth="1.1"
          strokeDasharray="2 3"
          fill="none"
        />
        <path
          d="M0 180 C 120 150, 220 195, 320 160 C 420 125, 520 178, 600 155"
          stroke="url(#waveLineGrad1)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M0 190 C 130 160, 230 200, 330 168 C 430 130, 530 185, 600 165"
          stroke="url(#waveLineGrad2)"
          strokeWidth="1.3"
          strokeDasharray="1.5 3"
          fill="none"
        />
        <path
          d="M0 198 C 140 170, 240 205, 340 175 C 440 138, 540 190, 600 175"
          stroke="url(#waveLineGrad1)"
          strokeWidth="1"
          fill="none"
        />

        {/* Cross perspective lines creating 3D grid effect */}
        {[50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550].map((x, i) => (
          <line
            key={i}
            x1={x - 40}
            y1={200}
            x2={x + 30}
            y2={130 + (i % 3) * 8}
            stroke="#A78BFA"
            strokeWidth="0.75"
            strokeOpacity={0.15 + ((6 - Math.abs(6 - i)) * 0.05)}
            strokeDasharray="2 3"
          />
        ))}

        {/* Glowing node particles along waves */}
        {[
          { cx: 80, cy: 140, r: 1.5 },
          { cx: 140, cy: 155, r: 1.8 },
          { cx: 210, cy: 172, r: 2.2 },
          { cx: 280, cy: 150, r: 2 },
          { cx: 330, cy: 158, r: 2.5 },
          { cx: 390, cy: 130, r: 2 },
          { cx: 460, cy: 148, r: 2.2 },
          { cx: 520, cy: 165, r: 1.8 },
          { cx: 170, cy: 180, r: 1.6 },
          { cx: 250, cy: 190, r: 2 },
          { cx: 360, cy: 165, r: 2.4 },
          { cx: 430, cy: 138, r: 2.1 },
          { cx: 490, cy: 175, r: 1.7 },
        ].map((pt, idx) => (
          <g key={idx}>
            <circle cx={pt.cx} cy={pt.cy} r={pt.r * 2.2} fill="#7C3AED" opacity="0.35" />
            <circle cx={pt.cx} cy={pt.cy} r={pt.r} fill="#FFFFFF" />
          </g>
        ))}
      </svg>
    </div>
  );
};

export const AboutHero = () => {
  return (
    <div className="relative bg-[#08090B] overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background ambient lighting & subtle galaxy glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top central soft purple flare */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#7C3AED]/20 via-[#8B5CF6]/10 to-transparent blur-[120px] -z-10" />
        {/* Left violet glow */}
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[140px] -z-10" />
        {/* Right violet glow */}
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#7C3AED]/12 rounded-full blur-[140px] -z-10" />

        {/* Subtle background star sparkles */}
        <div className="absolute top-16 left-[15%] w-1 h-1 bg-[#A78BFA] rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-28 right-[20%] w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-pulse" />
        <div className="absolute top-44 left-[30%] w-1 h-1 bg-[#8B5CF6] rounded-full opacity-40" />
        <div className="absolute top-60 right-[10%] w-1 h-1 bg-[#A78BFA] rounded-full opacity-50" />
        <div className="absolute bottom-20 left-[8%] w-1.5 h-1.5 bg-[#8B5CF6] rounded-full opacity-60 animate-pulse" />
        <div className="absolute bottom-40 right-[15%] w-1 h-1 bg-white rounded-full opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          {/* About Us Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-[#15151D]/90 border border-[#29263A] shadow-[0_0_18px_rgba(124,58,237,0.2)] text-[#A78BFA] text-xs md:text-sm font-semibold px-5 py-2 rounded-full mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-ping" />
            <span>About Us</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            Transforming Business with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC] drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
              AI
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#B8B6C4] max-w-2xl mx-auto leading-relaxed font-normal">
            AI-powered innovation, secure solutions, and delivery excellence for modern enterprises.
          </p>
        </motion.div>

        {/* Vision and Mission Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-20 max-w-5xl mx-auto">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-[#15151D]/95 rounded-3xl p-8 sm:p-10 border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(124,58,237,0.25)] transition-all duration-500 overflow-hidden flex flex-col justify-between"
          >
            {/* Top Subtle Card Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />

            <div className="relative z-10">
              <div className="flex items-center gap-5 mb-6">
                {/* Glowing Glass Icon Container */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(124,58,237,0.35)] group-hover:scale-105 group-hover:border-[#A78BFA] transition-all duration-300">
                  <EyeIcon className="w-7 h-7 text-[#A78BFA] drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Our Vision
                  </h3>
                  {/* Glowing neon accent bar */}
                  <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-transparent shadow-[0_0_10px_#8B5CF6] mt-2" />
                </div>
              </div>

              <p className="text-[#B8B6C4] text-sm sm:text-base leading-relaxed mb-12">
                To Transform with Technology by enabling Customer Success, Strengthening Partnerships, fostering Employee growth, and delivering Societal Value.
              </p>
            </div>

            {/* Bottom Purple AI Wave Mesh Graphic */}
            <PurpleWaveMesh />
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative bg-[#15151D]/95 rounded-3xl p-8 sm:p-10 border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(124,58,237,0.25)] transition-all duration-500 overflow-hidden flex flex-col justify-between"
          >
            {/* Top Subtle Card Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />

            <div className="relative z-10">
              <div className="flex items-center gap-5 mb-6">
                {/* Glowing Glass Icon Container */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(124,58,237,0.35)] group-hover:scale-105 group-hover:border-[#A78BFA] transition-all duration-300">
                  <RocketLaunchIcon className="w-7 h-7 text-[#A78BFA] drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Our Mission
                  </h3>
                  {/* Glowing neon accent bar */}
                  <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-transparent shadow-[0_0_10px_#8B5CF6] mt-2" />
                </div>
              </div>

              <p className="text-[#B8B6C4] text-sm sm:text-base leading-relaxed mb-12">
                To transform Businesses with AI-powered future-ready Technology Products, Secure Solutions & Services built on Innovation and Delivery Excellence.
              </p>
            </div>

            {/* Bottom Purple AI Wave Mesh Graphic */}
            <PurpleWaveMesh />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-[#15151D]/90 rounded-3xl p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.7)] border border-[#29263A] hover:border-[#8B5CF6]/40 transition-all duration-300 relative overflow-hidden backdrop-blur-xl">
            {/* Ambient Background Glows inside stats */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#7C3AED]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#8B5CF6]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#29263A]">
              <div className="pt-2 md:pt-0">
                <AnimatedNumber value="40+" label="Projects" delay={200} />
              </div>
              <div className="pt-2 md:pt-0 md:pl-6">
                <AnimatedNumber value="15+" label="Clients" delay={400} />
              </div>
              <div className="pt-4 md:pt-0 md:pl-6">
                <AnimatedNumber value="7+" label="Years" delay={600} />
              </div>
              <div className="pt-4 md:pt-0 md:pl-6">
                <AnimatedNumber value="24/7" label="Support" delay={800} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};