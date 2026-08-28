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
    <section className="py-24 bg-slate-50 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header - Unified and Compact */}
        <motion.div
          className="mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Solving <span className="text-blue-600">Complex Challenges</span>
          </h2>
          <p className="text-lg text-gray-600">
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
                  className={`group relative text-left p-5 rounded-2xl transition-all duration-300 border-2 overflow-hidden ${isActive
                    ? 'bg-white border-blue-600 shadow-xl shadow-blue-900/5'
                    : 'bg-white border-transparent hover:border-blue-600 hover:bg-white'
                    }`}
                >
                  {/* Active Tab Indicator (Glow/Background) */}
                  {isActive && (
                    <motion.div
                      layoutId="activeGlowChallenge"
                      className="absolute inset-0 bg-indigo-50/50 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}

                  <div className="flex items-start gap-4 z-10 relative">
                    <div className={`p-2 rounded-xl transition-colors duration-300 shrink-0 ${isActive ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600'
                      }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`text-md font-bold mb-0.5 transition-colors ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                        {challenge.title}
                      </h3>
                      <p className={`text-xs font-medium transition-colors ${isActive ? 'text-indigo-600' : 'text-slate-400'}`}>
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
            <div className="relative bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-indigo-900/10 overflow-hidden min-h-[500px] flex flex-col">

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
                    <div className="mb-8 p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                      <p className="text-sm font-semibold text-brand-blue leading-relaxed italic">
                        "{activeChallenge.impact}"
                      </p>
                    </div>

                    <div className="mb-6 flex items-center space-x-3 text-blue-600">
                      <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-600 rounded-xl text-white shadow-lg shadow-blue-200">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <span className="font-bold tracking-tight text-gray-900 uppercase text-sm">Our AI-Powered Solution</span>
                    </div>

                    <p className="text-lg text-gray-700 mb-8 font-medium leading-relaxed flex-grow">
                      {activeChallenge.solution}
                    </p>

                    {/* Benefits Grid */}
                    <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                      {activeChallenge.benefits.map((benefit, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-center p-3 rounded-xl bg-slate-50 border border-slate-100/50"
                        >
                          <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                          <span className="text-sm font-semibold text-gray-700 tracking-tight">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 text-center">
                      <button className="group flex items-center justify-center mx-auto gap-2 text-white bg-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors">
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