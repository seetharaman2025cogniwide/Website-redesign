'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RocketLaunchIcon, ChartBarIcon, CogIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const GetStartedHero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#08090B] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        {/* Ambient Lighting & Flares */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-gradient-to-b from-[#7C3AED]/25 via-[#8B5CF6]/10 to-transparent blur-[140px] -z-10" />
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[140px] -z-10" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#7C3AED]/12 rounded-full blur-[140px] -z-10" />

          {/* Ambient Sparkles */}
          <div className="absolute top-24 left-[15%] w-1 h-1 bg-[#A78BFA] rounded-full opacity-60 animate-pulse" />
          <div className="absolute top-36 right-[20%] w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-pulse" />
          <div className="absolute bottom-20 left-[30%] w-1 h-1 bg-[#8B5CF6] rounded-full opacity-50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center lg:justify-start mb-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#15151D]/90 border border-[#29263A] text-[#A78BFA] rounded-full text-xs font-semibold uppercase tracking-wider shadow-[0_0_18px_rgba(124,58,237,0.2)] backdrop-blur-md">
                  <span className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-ping" />
                  <RocketLaunchIcon className="w-4 h-4 text-[#A78BFA]" />
                  <span>Start Your AI Journey</span>
                </div>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Get Started with AI
              </motion.h1>

              <motion.h2
                className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC] drop-shadow-[0_0_25px_rgba(139,92,246,0.4)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transform Your Business Today
              </motion.h2>

              <motion.p
                className="text-base sm:text-lg lg:text-xl text-[#B8B6C4] mb-8 leading-relaxed max-w-2xl font-normal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Begin your AI transformation journey with Cogniwide. Our proven methodology and expert guidance ensure successful implementation and maximum ROI from day one.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white font-bold rounded-xl shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 transition-all duration-300 text-center text-base sm:text-lg"
                >
                  Schedule Consultation
                </Link>
                <a
                  href="#pricing"
                  className="px-8 py-4 border border-[#29263A] bg-[#15151D]/80 hover:bg-[#1E1C2E] hover:border-[#8B5CF6]/40 text-gray-200 hover:text-white font-bold rounded-xl backdrop-blur-sm transition-all duration-300 text-center text-base sm:text-lg"
                >
                  View Pricing
                </a>
              </motion.div>
            </div>

            {/* Right Visual - Dashboard */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5CF6]/30 via-[#7C3AED]/20 to-[#C084FC]/30 rounded-3xl blur-xl opacity-70" />

              <div className="relative bg-[#15151D]/90 border border-[#29263A] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-6 sm:p-8 backdrop-blur-xl">
                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#8B5CF6] to-[#7C3AED] flex items-center justify-center text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                        <RocketLaunchIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-base sm:text-lg">AI Transformation Dashboard</div>
                        <div className="text-xs text-[#B8B6C4]">Implementation Progress</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-emerald-400 font-semibold">Active</span>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    <div className="bg-[#1E1C2E]/70 rounded-xl p-3.5 sm:p-4 text-center border border-[#29263A] shadow-inner">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#A78BFA]">3</div>
                      <div className="text-[11px] sm:text-xs text-[#B8B6C4] mt-0.5">Weeks to Deploy</div>
                    </div>
                    <div className="bg-[#1E1C2E]/70 rounded-xl p-3.5 sm:p-4 text-center border border-[#29263A] shadow-inner">
                      <div className="text-xl sm:text-2xl font-extrabold text-emerald-400">85%</div>
                      <div className="text-[11px] sm:text-xs text-[#B8B6C4] mt-0.5">Success Rate</div>
                    </div>
                    <div className="bg-[#1E1C2E]/70 rounded-xl p-3.5 sm:p-4 text-center border border-[#29263A] shadow-inner">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#C084FC]">24/7</div>
                      <div className="text-[11px] sm:text-xs text-[#B8B6C4] mt-0.5">Support</div>
                    </div>
                  </div>

                  {/* Implementation Steps */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3.5 bg-[#1E1C2E]/50 rounded-xl border border-[#29263A]/80">
                      <div className="flex items-center space-x-3">
                        <ChartBarIcon className="w-5 h-5 text-emerald-400" />
                        <span className="text-sm font-medium text-gray-200">Assessment Complete</span>
                      </div>
                      <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                        ✓ Done
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3.5 bg-[#1E1C2E]/50 rounded-xl border border-[#8B5CF6]/30 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                      <div className="flex items-center space-x-3">
                        <CogIcon className="w-5 h-5 text-[#A78BFA] animate-spin-slow" />
                        <span className="text-sm font-medium text-white">Solution Design</span>
                      </div>
                      <span className="text-xs text-[#A78BFA] font-semibold bg-[#8B5CF6]/15 px-2.5 py-1 rounded-md border border-[#8B5CF6]/30">
                        In Progress
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3.5 bg-[#1E1C2E]/30 rounded-xl border border-[#29263A]/50">
                      <div className="flex items-center space-x-3">
                        <RocketLaunchIcon className="w-5 h-5 text-gray-500" />
                        <span className="text-sm font-medium text-gray-400">Deployment</span>
                      </div>
                      <span className="text-xs text-gray-400 font-medium bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                        Pending
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};