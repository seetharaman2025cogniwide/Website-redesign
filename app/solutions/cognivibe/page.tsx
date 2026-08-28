'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import { CTASection } from '@/components/home/CTASection';
import {
  CodeBracketIcon,
  CogIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowPathIcon,
  ClipboardDocumentListIcon,
  PaintBrushIcon,
  BeakerIcon,
  EyeIcon,
  LightBulbIcon,
  LinkIcon,
  SparklesIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const CogniVibePage = () => {
  return (
    <PageLayout className="bg-[#0B0A14]">
      <div className="bg-[#0B0A14] text-white min-h-screen">
        {/* 1. Hero Section */}
        <section className="relative bg-[#08090B] overflow-hidden pt-28 pb-24 md:pt-36 md:pb-28">
          {/* Ambient lighting & flares */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#7C3AED]/20 via-[#8B5CF6]/10 to-transparent blur-[130px] -z-10" />
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[140px] -z-10" />
            <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#7C3AED]/12 rounded-full blur-[140px] -z-10" />

            {/* Ambient Star Sparkles */}
            <div className="absolute top-20 left-[15%] w-1 h-1 bg-[#A78BFA] rounded-full opacity-60 animate-pulse" />
            <div className="absolute top-36 right-[20%] w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-pulse" />
            <div className="absolute bottom-20 left-[30%] w-1 h-1 bg-[#8B5CF6] rounded-full opacity-50" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <div className="inline-flex items-center gap-2 bg-[#15151D]/90 border border-[#29263A] shadow-[0_0_18px_rgba(124,58,237,0.2)] text-[#A78BFA] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
                  <SparklesIcon className="w-4 h-4 text-[#8B5CF6]" />
                  <span>AI-Powered Development</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                  Cogni
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC] drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                    Vibe
                  </span>
                </h1>

                <h2 className="text-xl sm:text-2xl font-semibold text-[#A78BFA] mb-6">
                  Intelligent SDLC Automation Framework
                </h2>

                <p className="text-base sm:text-lg text-[#B8B6C4] mb-10 max-w-xl leading-relaxed font-normal">
                  Transform your development process with AI that understands your workflow. Automate repetitive tasks, eliminate bottlenecks, and deliver exceptional software faster.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white px-8 py-3.5 rounded-xl font-bold shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 transition-all duration-300 text-center"
                  >
                    Schedule Demo
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="bg-[#15151D] text-white border border-[#29263A] hover:border-[#8B5CF6]/60 hover:bg-[#1A1829] px-8 py-3.5 rounded-xl font-bold transition-all duration-300 text-center"
                  >
                    Explore Framework
                  </Link>
                </div>
              </motion.div>

              {/* Right Visual (Interactive 3D Glass Hub) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative mx-auto max-w-md">
                  {/* Central Hub Card */}
                  <div className="bg-[#15151D]/90 rounded-3xl p-8 sm:p-10 border border-[#29263A] shadow-[0_15px_40px_rgba(0,0,0,0.7)] hover:border-[#8B5CF6]/60 hover:shadow-[0_0_40px_rgba(124,58,237,0.25)] transition-all duration-500 backdrop-blur-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />
                    
                    <div className="bg-[#1A1829]/90 border border-[#8B5CF6]/30 rounded-2xl p-8 text-center backdrop-blur-md">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 flex items-center justify-center mx-auto mb-5 shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                        <CogIcon className="w-9 h-9 text-[#A78BFA] animate-spin [animation-duration:10s]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">AI Control Center</h3>
                      <p className="text-xs sm:text-sm text-[#B8B6C4]">
                        Orchestrating your entire software development pipeline in real-time
                      </p>
                    </div>
                  </div>

                  {/* Floating Orb Badges */}
                  <motion.div
                    animate={{ y: [-8, 8, -8] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-5 -left-5 bg-[#15151D] border border-[#8B5CF6]/50 rounded-2xl p-3.5 shadow-[0_0_20px_rgba(124,58,237,0.35)]"
                  >
                    <CodeBracketIcon className="w-6 h-6 text-[#A78BFA]" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [8, -8, 8] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 0.5, ease: 'easeInOut' }}
                    className="absolute -bottom-5 -right-5 bg-[#15151D] border border-[#8B5CF6]/50 rounded-2xl p-3.5 shadow-[0_0_20px_rgba(124,58,237,0.35)]"
                  >
                    <CheckCircleIcon className="w-6 h-6 text-[#A78BFA]" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [-6, 12, -6] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1, ease: 'easeInOut' }}
                    className="absolute top-1/2 -right-8 bg-[#15151D] border border-[#8B5CF6]/50 rounded-2xl p-3.5 shadow-[0_0_20px_rgba(124,58,237,0.35)]"
                  >
                    <RocketLaunchIcon className="w-6 h-6 text-[#A78BFA]" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Features Section (Unified SDLC Automation) */}
        <section className="py-24 bg-[#0B0A14] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-[#15151D] border border-[#29263A] shadow-[0_0_15px_rgba(124,58,237,0.15)] text-[#A78BFA] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                Core Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Unified <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6]">SDLC Automation</span>
              </h2>
              <p className="text-base sm:text-lg text-[#B8B6C4] max-w-3xl mx-auto leading-relaxed font-normal">
                Transform your development process with intelligent automation that spans the entire software development lifecycle.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Intelligent Planning',
                  description:
                    'AI-powered project planning with automated task breakdown, risk assessment, and resource allocation.',
                  icon: ChartBarIcon,
                },
                {
                  title: 'Smart Development',
                  description:
                    'Code generation, review automation, and intelligent suggestions to accelerate development velocity.',
                  icon: CodeBracketIcon,
                },
                {
                  title: 'Automated Testing',
                  description:
                    'Comprehensive test automation with AI-generated test cases, coverage analytics, and quality gates.',
                  icon: CheckCircleIcon,
                },
                {
                  title: 'Seamless Deployment',
                  description:
                    'Automated deployment pipelines with intelligent rollback, Canary releases, and observability.',
                  icon: RocketLaunchIcon,
                },
                {
                  title: 'Continuous Optimization',
                  description:
                    'Performance monitoring and self-optimizing recommendations powered by machine learning.',
                  icon: CogIcon,
                },
                {
                  title: 'Workflow Orchestration',
                  description:
                    'Intelligent workflow orchestration that adapts to your team’s existing tools and agile processes.',
                  icon: ArrowPathIcon,
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group relative bg-[#15151D]/90 rounded-2xl p-7 border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(124,58,237,0.2)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between"
                >
                  {/* Top highlight */}
                  <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent" />

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1A1829] border border-[#8B5CF6]/40 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(124,58,237,0.3)] group-hover:scale-110 group-hover:border-[#A78BFA] transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-[#A78BFA]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#A78BFA] transition-colors duration-200">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#B8B6C4] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Measurable Business Impact (Stats Section) */}
        <section className="py-24 bg-[#17152A] relative overflow-hidden">
          {/* Ambient lighting */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#7C3AED]/10 rounded-full blur-[150px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Measurable Business Impact
              </h2>
              <p className="text-base sm:text-lg text-[#B8B6C4] max-w-3xl mx-auto leading-relaxed">
                Organizations using CogniVibe see dramatic improvements in development velocity, quality, and team satisfaction.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  metric: '75%',
                  label: 'Faster Time to Market',
                  description: 'Accelerate delivery with automated workflows and AI scaffolding.',
                },
                {
                  metric: '90%',
                  label: 'Reduction in Bugs',
                  description: 'AI-powered testing and linting catches critical issues early.',
                },
                {
                  metric: '60%',
                  label: 'Less Manual Work',
                  description: 'Automate repetitive development and review tasks.',
                },
                {
                  metric: '95%',
                  label: 'Developer Satisfaction',
                  description: 'Engineers spend more time on creative problem-solving.',
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-[#15151D]/90 rounded-2xl p-8 text-center border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl"
                >
                  <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-white via-[#A78BFA] to-[#8B5CF6] bg-clip-text text-transparent mb-3 drop-shadow-[0_0_15px_rgba(139,92,246,0.35)]">
                    {stat.metric}
                  </div>
                  <div className="text-base font-bold text-white mb-2">{stat.label}</div>
                  <div className="text-xs sm:text-sm text-[#B8B6C4] leading-relaxed">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How It Works Section */}
        <section id="how-it-works" className="py-24 bg-[#0B0A14] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 bg-[#15151D] border border-[#29263A] shadow-[0_0_15px_rgba(124,58,237,0.15)] text-[#A78BFA] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                Step-by-Step
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                How <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC]">CogniVibe</span> Works
              </h2>
              <p className="text-base sm:text-lg text-[#B8B6C4] max-w-3xl mx-auto leading-relaxed">
                Our AI-powered platform integrates seamlessly into your development workflow.
              </p>
            </motion.div>

            <div className="space-y-16">
              {[
                {
                  step: '01',
                  title: 'Intelligent Project Planning',
                  description:
                    'CogniVibe analyzes your requirements and automatically breaks down projects into manageable tasks with accurate time estimates and resource allocation.',
                  features: [
                    'Automated task breakdown',
                    'Smart resource allocation',
                    'Risk assessment',
                    'Timeline optimization',
                  ],
                  image: 'planning',
                },
                {
                  step: '02',
                  title: 'AI-Assisted Development',
                  description:
                    'Our AI engine provides code suggestions, automated refactoring, and intelligent code reviews to accelerate development while maintaining high code quality.',
                  features: [
                    'Code generation',
                    'Automated refactoring',
                    'Intelligent reviews',
                    'Best practice enforcement',
                  ],
                  image: 'development',
                },
                {
                  step: '03',
                  title: 'Comprehensive Testing',
                  description:
                    'Generate test cases automatically, execute comprehensive test suites, and get intelligent insights on code coverage and quality metrics.',
                  features: [
                    'Auto-generated tests',
                    'Comprehensive coverage',
                    'Performance testing',
                    'Quality gates',
                  ],
                  image: 'testing',
                },
                {
                  step: '04',
                  title: 'Seamless Deployment',
                  description:
                    'Deploy with confidence using automated pipelines, intelligent rollback mechanisms, and real-time monitoring with predictive analytics.',
                  features: [
                    'Automated pipelines',
                    'Smart rollbacks',
                    'Real-time monitoring',
                    'Predictive analytics',
                  ],
                  image: 'deployment',
                },
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-14 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Text Column */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 bg-[#1A1829] border border-[#8B5CF6]/50 rounded-xl flex items-center justify-center font-extrabold text-lg text-[#A78BFA] shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                        {step.step}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-base text-[#B8B6C4] mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-[#B8B6C4]">
                          <CheckCircleIcon className="w-5 h-5 text-[#8B5CF6] mr-2.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Illustration Diagram Column */}
                  <div className="flex-1 w-full">
                    <div className="bg-[#15151D]/90 rounded-3xl p-8 h-80 flex items-center justify-center border border-[#29263A] hover:border-[#8B5CF6]/50 shadow-[0_10px_35px_rgba(0,0,0,0.6)] transition-all duration-300 relative overflow-hidden backdrop-blur-xl">
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#7C3AED]/15 rounded-full blur-2xl pointer-events-none" />

                      {step.image === 'planning' && (
                        <svg className="w-52 h-52 text-[#8B5CF6]" viewBox="0 0 200 200" fill="none">
                          <rect x="20" y="40" width="160" height="120" rx="8" stroke="currentColor" strokeWidth="2" fill="#1A1829" fillOpacity="0.5" />
                          <line x1="70" y1="40" x2="70" y2="160" stroke="#29263A" strokeWidth="1.5" />
                          <line x1="120" y1="40" x2="120" y2="160" stroke="#29263A" strokeWidth="1.5" />
                          <rect x="25" y="55" width="40" height="20" rx="4" fill="#8B5CF6" opacity="0.8" />
                          <rect x="25" y="80" width="40" height="20" rx="4" fill="#A78BFA" opacity="0.6" />
                          <rect x="75" y="55" width="40" height="20" rx="4" fill="#8B5CF6" opacity="0.7" />
                          <rect x="125" y="55" width="40" height="20" rx="4" fill="#A78BFA" opacity="0.5" />
                          <rect x="125" y="80" width="40" height="20" rx="4" fill="#8B5CF6" opacity="0.9" />
                          <circle cx="100" cy="25" r="15" stroke="#A78BFA" strokeWidth="2" fill="#15151D" />
                          <path d="M92 28 Q100 32 108 28" stroke="#A78BFA" strokeWidth="1.5" fill="none" />
                        </svg>
                      )}

                      {step.image === 'development' && (
                        <svg className="w-52 h-52 text-[#8B5CF6]" viewBox="0 0 200 200" fill="none">
                          <rect x="20" y="30" width="160" height="140" rx="8" stroke="currentColor" strokeWidth="2" fill="#1A1829" fillOpacity="0.5" />
                          <rect x="20" y="30" width="160" height="25" rx="8" fill="#29263A" opacity="0.6" />
                          <circle cx="35" cy="42" r="3" fill="#EF4444" />
                          <circle cx="45" cy="42" r="3" fill="#FBBF24" />
                          <circle cx="55" cy="42" r="3" fill="#34D399" />
                          <line x1="30" y1="70" x2="80" y2="70" stroke="#A78BFA" strokeWidth="2" opacity="0.8" />
                          <line x1="40" y1="85" x2="120" y2="85" stroke="#8B5CF6" strokeWidth="2" opacity="0.6" />
                          <line x1="40" y1="100" x2="90" y2="100" stroke="#A78BFA" strokeWidth="2" opacity="0.7" />
                          <line x1="30" y1="115" x2="140" y2="115" stroke="#8B5CF6" strokeWidth="2" opacity="0.5" />
                          <circle cx="150" cy="90" r="18" stroke="#A78BFA" strokeWidth="2" fill="#15151D" />
                        </svg>
                      )}

                      {step.image === 'testing' && (
                        <svg className="w-52 h-52 text-[#8B5CF6]" viewBox="0 0 200 200" fill="none">
                          <rect x="20" y="40" width="160" height="120" rx="8" stroke="currentColor" strokeWidth="2" fill="#1A1829" fillOpacity="0.5" />
                          <circle cx="40" cy="85" r="4" fill="#34D399" />
                          <line x1="50" y1="85" x2="120" y2="85" stroke="#B8B6C4" strokeWidth="1.5" opacity="0.6" />
                          <circle cx="40" cy="105" r="4" fill="#34D399" />
                          <line x1="50" y1="105" x2="110" y2="105" stroke="#B8B6C4" strokeWidth="1.5" opacity="0.6" />
                          <circle cx="40" cy="125" r="4" fill="#A78BFA" />
                          <line x1="50" y1="125" x2="130" y2="125" stroke="#B8B6C4" strokeWidth="1.5" opacity="0.6" />
                          <rect x="140" y="75" width="30" height="70" rx="4" stroke="#29263A" strokeWidth="1.5" fill="#15151D" />
                          <rect x="142" y="90" width="26" height="53" rx="2" fill="#8B5CF6" opacity="0.8" />
                        </svg>
                      )}

                      {step.image === 'deployment' && (
                        <svg className="w-52 h-52 text-[#8B5CF6]" viewBox="0 0 200 200" fill="none">
                          <path d="M100 20 L110 60 L120 80 L110 100 L100 110 L90 100 L80 80 L90 60 Z" stroke="#A78BFA" strokeWidth="2" fill="#8B5CF6" fillOpacity="0.3" />
                          <path d="M95 110 Q100 120 105 110 Q100 125 95 110" fill="#FBBF24" opacity="0.8" />
                          <rect x="20" y="155" width="160" height="20" rx="10" stroke="#29263A" strokeWidth="1.5" fill="#15151D" />
                          <rect x="22" y="157" width="90" height="16" rx="8" fill="#8B5CF6" opacity="0.8" />
                        </svg>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Seamless Integrations Section */}
        <section className="py-24 bg-[#08090B] relative overflow-hidden border-t border-[#29263A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Seamless Integrations
              </h2>
              <p className="text-base sm:text-lg text-[#B8B6C4] max-w-3xl mx-auto leading-relaxed">
                CogniVibe works out of the box with your existing DevOps and development tools.
              </p>
            </motion.div>

            <div className="overflow-hidden py-4">
              <motion.div
                className="flex gap-6"
                animate={{ x: [0, -100 * 12] }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{ width: `${12 * 220}px` }}
              >
                {[
                  { name: 'GitHub', logo: 'github_icon.png' },
                  { name: 'Docker', logo: 'Docker-icon.png' },
                  { name: 'Kubernetes', logo: 'kubernates_icon.png' },
                  { name: 'AWS', logo: 'aws-icon.webp' },
                  { name: 'Azure', logo: 'azure_icon.webp' },
                  { name: 'GCP', logo: 'GCP_icon.png' },
                  { name: 'GitLab', logo: 'gitlab_icon.png' },
                  { name: 'Bitbucket', logo: 'bitbucket_icon.webp' },
                  { name: 'Jenkins', logo: 'jenkins_logo.png' },
                  { name: 'Jira', logo: 'jira_icon.jpg' },
                  { name: 'Slack', logo: 'slack_icon.webp' },
                  { name: 'Teams', logo: 'teams_icon.png' },
                ]
                  .concat([
                    { name: 'GitHub', logo: 'github_icon.png' },
                    { name: 'Docker', logo: 'Docker-icon.png' },
                    { name: 'Kubernetes', logo: 'kubernates_icon.png' },
                    { name: 'AWS', logo: 'aws-icon.webp' },
                    { name: 'Azure', logo: 'azure_icon.webp' },
                    { name: 'GCP', logo: 'GCP_icon.png' },
                    { name: 'GitLab', logo: 'gitlab_icon.png' },
                    { name: 'Bitbucket', logo: 'bitbucket_icon.webp' },
                    { name: 'Jenkins', logo: 'jenkins_logo.png' },
                    { name: 'Jira', logo: 'jira_icon.jpg' },
                    { name: 'Slack', logo: 'slack_icon.webp' },
                    { name: 'Teams', logo: 'teams_icon.png' },
                  ])
                  .map((tool, index) => (
                    <div
                      key={`${tool.name}-${index}`}
                      className="flex-shrink-0 w-44 p-6 bg-[#15151D]/90 rounded-2xl border border-[#29263A] hover:border-[#8B5CF6]/50 shadow-[0_8px_25px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center group hover:scale-105 transition-all duration-300"
                    >
                      <Image
                        src={`/images/external-integrations/${tool.logo}`}
                        alt={tool.name}
                        width={40}
                        height={40}
                        className="mb-3 group-hover:scale-110 transition-transform duration-300 filter brightness-110"
                        onError={(e) => {
                          (e.currentTarget as any).style.display = 'none';
                        }}
                      />
                      <span className="font-semibold text-white text-sm text-center">
                        {tool.name}
                      </span>
                    </div>
                  ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. AI SDLC Lifecycle Stages */}
        <section className="py-24 bg-[#0B0A14] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Lifecycle Stages
              </h2>
              <p className="text-base sm:text-lg text-[#B8B6C4] max-w-3xl mx-auto">
                Continuous AI acceleration at every stage of the pipeline.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
              {[
                {
                  stage: 'Planning',
                  description: 'AI requirement analysis',
                  icon: ClipboardDocumentListIcon,
                },
                {
                  stage: 'Design',
                  description: 'Smart architecture',
                  icon: PaintBrushIcon,
                },
                {
                  stage: 'Development',
                  description: 'AI-assisted coding',
                  icon: CodeBracketIcon,
                },
                {
                  stage: 'Testing',
                  description: 'Automated QA',
                  icon: BeakerIcon,
                },
                {
                  stage: 'Deployment',
                  description: 'Smart deployment',
                  icon: RocketLaunchIcon,
                },
                {
                  stage: 'Monitoring',
                  description: 'Real-time insights',
                  icon: EyeIcon,
                },
              ].map((stage, index) => (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group bg-[#15151D]/90 rounded-2xl p-5 border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(124,58,237,0.2)] hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-[#1A1829] border border-[#8B5CF6]/40 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-[0_0_12px_rgba(124,58,237,0.3)] group-hover:scale-110 transition-transform">
                    <stage.icon className="w-6 h-6 text-[#A78BFA]" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-[#A78BFA] transition-colors">
                    {stage.stage}
                  </h3>
                  <p className="text-xs text-[#B8B6C4] leading-tight font-normal">
                    {stage.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* 3 Core Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {[
                {
                  title: 'Continuous Intelligence',
                  description: 'AI learns from every cycle to optimize future iterations automatically.',
                  icon: LightBulbIcon,
                },
                {
                  title: 'Seamless Integration',
                  description: 'Works seamlessly with your existing repositories, CI/CD, and ticketing tools.',
                  icon: LinkIcon,
                },
                {
                  title: 'Predictive Insights',
                  description: 'Anticipate delivery risks and bottlenecks before they impact your releases.',
                  icon: SparklesIcon,
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#15151D]/90 rounded-2xl p-7 border border-[#29263A] hover:border-[#8B5CF6]/50 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 text-center group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#1A1829] border border-[#8B5CF6]/40 flex items-center justify-center mx-auto mb-5 shadow-[0_0_15px_rgba(124,58,237,0.3)] group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-7 h-7 text-[#A78BFA]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#A78BFA] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#B8B6C4] leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CTA Section */}
        <CTASection theme="dark" />
      </div>
    </PageLayout>
  );
};

export default CogniVibePage;