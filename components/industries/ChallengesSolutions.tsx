'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Icons (Imported for portability and consistency) ---
// Using standard Heroicons for simplicity, assuming they are accessible.
import { ShieldCheckIcon, AdjustmentsHorizontalIcon, CurrencyDollarIcon, CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';


// Interface from the original code (retained)
interface Challenge {
  title: string;
  description: string;
  impact: string;
  solution: string;
  benefits: string[];
}

interface ChallengesSolutionsProps {
  challenges: Challenge[];
}

// --- Icon Mapping based on Challenge Index (for visual differentiation) ---
const ChallengeIcons = [
  ShieldCheckIcon,      // Index 0: Compliance/Regulation
  AdjustmentsHorizontalIcon, // Index 1: Operational Efficiency/Complexity
  CurrencyDollarIcon,    // Index 2: Cost/Audit
  CheckCircleIcon        // Fallback
];


export function ChallengesSolutions({ challenges }: ChallengesSolutionsProps) {
  // Use state to manage the active challenge tab
  const [activeTab, setActiveTab] = useState(0);
  const activeChallenge = challenges[activeTab];

  if (!challenges || challenges.length === 0) return null;

  return (
    <section className="relative py-24 bg-[#0B0A14] border-t border-[#29263A] overflow-hidden font-sans">
      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#7C3AED]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header - Unified and Compact */}
        <motion.div
          className="mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Solving{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC] drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
              Complex Challenges
            </span>
          </h2>
          <p className="text-lg text-[#B8B6C4] leading-relaxed">
            We bridge the gap between complex regulatory requirements and modern business speed using adaptive AI automation.
          </p>
        </motion.div>

        {/* Main Interface: Side-by-Side Tabs and Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column: Navigation Tabs (Challenges) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {challenges.map((challenge, index) => {
              const isActive = activeTab === index;
              const IconComponent = ChallengeIcons[index] || ChallengeIcons[3];

              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`group relative text-left p-5 rounded-2xl transition-all duration-300 border overflow-hidden backdrop-blur-xl ${isActive
                    ? 'bg-[#15151D]/90 border-[#8B5CF6] shadow-[0_0_30px_rgba(124,58,237,0.25)]'
                    : 'bg-[#15151D]/60 border-[#29263A] hover:border-[#8B5CF6]/60 hover:bg-[#15151D]/90'
                    }`}
                >
                  {/* Active Tab Indicator (Glow/Background) */}
                  {isActive && (
                    <motion.div
                      layoutId="activeGlowChallenge"
                      className="absolute inset-0 bg-[#1A1829]/60 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}

                  <div className="flex items-start gap-4 z-10 relative">
                    <div className={`p-2 rounded-xl transition-all duration-300 shrink-0 border ${isActive
                      ? 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] border-[#8B5CF6] text-white shadow-[0_0_20px_rgba(139,92,246,0.35)]'
                      : 'bg-[#1A1829] border-[#29263A] text-[#777583] group-hover:border-[#8B5CF6]/60 group-hover:text-[#A78BFA]'
                      }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`text-md font-bold mb-0.5 transition-colors ${isActive ? 'text-white' : 'text-[#B8B6C4]'}`}>
                        {challenge.title}
                      </h3>
                      <p className={`text-xs font-medium transition-colors ${isActive ? 'text-[#A78BFA]' : 'text-[#777583]'}`}>
                        {challenge.impact}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Content Window (Solutions) */}
          <div className="lg:col-span-8 relative">
            <div className="relative bg-[#15151D]/90 rounded-3xl border border-[#29263A] shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-hidden min-h-[500px] flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />

              {/* Content Area */}
              <div className="flex-1 p-8 md:p-10">
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={activeTab} // Key changes to force re-render/animation
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full"
                  >
                    {/* Solution Title and Impact Quote */}
                    <div className="mb-8 p-6 bg-[#1A1829]/80 rounded-2xl border border-[#29263A]">
                      <p className="text-sm font-semibold text-[#A78BFA] leading-relaxed italic">
                        &quot;{activeChallenge.impact}&quot;
                      </p>
                    </div>

                    <div className="mb-6 flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] rounded-xl text-white shadow-[0_0_20px_rgba(139,92,246,0.35)]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <span className="font-bold tracking-tight text-white uppercase text-sm">Our AI-Powered Solution</span>
                    </div>

                    <p className="text-lg text-[#B8B6C4] mb-8 font-medium leading-relaxed flex-grow">
                      {activeChallenge.solution}
                    </p>

                    {/* Benefits Grid */}
                    <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#29263A]">
                      {activeChallenge.benefits.map((benefit, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-center p-3 rounded-xl bg-[#1A1829]/80 border border-[#29263A]"
                        >
                          <CheckCircleIcon className="w-5 h-5 text-[#A78BFA] mr-3 shrink-0" />
                          <span className="text-sm font-semibold text-[#B8B6C4] tracking-tight">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 text-center">
                      <button className="group flex items-center justify-center mx-auto gap-2 text-white bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] px-8 py-3 rounded-full font-semibold shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300">
                        Assess Your Readiness
                        <span className="group-hover:translate-x-1 transition-transform">
                          <ArrowRightIcon className="w-5 h-5" />
                        </span>
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
