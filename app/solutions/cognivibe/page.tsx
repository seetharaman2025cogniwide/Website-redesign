'use client';
import React from 'react';
import Image from 'next/image';
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
  SparklesIcon
} from '@heroicons/react/24/outline';

const CogniVibePage = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-blue-light text-brand-white py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-brand-yellow/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-brand-blue-light/10 rounded-full blur-2xl animate-pulse [animation-delay:1s]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="inline-flex items-center bg-brand-blue-light/20 text-brand-yellow px-4 py-2 rounded-full text-sm font-medium mb-6">
                <SparklesIcon className="w-4 h-4 mr-2" />
                AI-Powered Development
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Cogni<span className="text-brand-yellow">Vibe</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-brand-light-grey mb-6">
                Intelligent SDLC Automation Framework
              </h2>
              <p className="text-lg text-brand-light-grey mb-8 max-w-xl leading-relaxed">
                Transform your development process with AI that understands your workflow. Automate repetitive tasks, eliminate bottlenecks, and deliver exceptional software faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-brand-yellow hover:bg-brand-yellow-dark text-brand-black px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Schedule demo
                </button>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Central Hub */}
                <div className="bg-gradient-to-br from-white to-brand-light-grey rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-brand-blue/10 rounded-2xl p-6 backdrop-blur-sm">
                    <CogIcon className="w-16 h-16 text-brand-blue mx-auto mb-4 animate-spin [animation-duration:8s]" />
                    <h3 className="text-xl font-bold text-brand-blue text-center mb-2">AI Control Center</h3>
                    <p className="text-brand-dark-grey text-sm text-center">Orchestrating your entire pipeline</p>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -left-4 bg-brand-blue rounded-xl p-3 shadow-lg"
                >
                  <CodeBracketIcon className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -right-4 bg-brand-yellow rounded-xl p-3 shadow-lg"
                >
                  <CheckCircleIcon className="w-6 h-6 text-brand-black" />
                </motion.div>

                <motion.div
                  animate={{ y: [-5, 15, -5] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                  className="absolute top-1/2 -right-8 bg-brand-green-dark rounded-xl p-3 shadow-lg"
                >
                  <RocketLaunchIcon className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-brand-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-blue mb-4">
              <span className="text-brand-dark-grey">Unified</span> SDLC Automation
            </h2>
            <p className="text-xl text-brand-dark-grey max-w-3xl mx-auto">
              Transform your development process with intelligent automation that spans the entire software development lifecycle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Intelligent Planning",
                description: "AI-powered project planning with automated task breakdown and resource allocation.",
                icon: ChartBarIcon,
                gradient: "from-brand-blue to-brand-blue-light",
                bgColor: "bg-white",
                iconBg: "bg-brand-blue"
              },
              {
                title: "Smart Development",
                description: "Code generation, review automation, and intelligent suggestions to accelerate development.",
                icon: CodeBracketIcon,
                gradient: "from-brand-blue to-brand-blue-light",
                bgColor: "bg-white",
                iconBg: "bg-brand-blue"
              },
              {
                title: "Automated Testing",
                description: "Comprehensive test automation with AI-generated test cases and quality gates.",
                icon: CheckCircleIcon,
                gradient: "from-brand-blue to-brand-blue-light",
                bgColor: "bg-white",
                iconBg: "bg-brand-blue"
              },
              {
                title: "Seamless Deployment",
                description: "Automated deployment pipelines with intelligent rollback and monitoring.",
                icon: RocketLaunchIcon,
                gradient: "from-brand-blue to-brand-blue-light",
                bgColor: "bg-white",
                iconBg: "bg-brand-blue"
              },
              {
                title: "Continuous Optimization",
                description: "Performance monitoring and optimization recommendations powered by ML.",
                icon: CogIcon,
                gradient: "from-brand-blue to-brand-blue-light",
                bgColor: "bg-white",
                iconBg: "bg-brand-blue"
              },
              {
                title: "Workflow Orchestration",
                description: "Intelligent workflow orchestration that adapts to your team's processes.",
                icon: ArrowPathIcon,
                gradient: "from-brand-blue to-brand-blue-light",
                bgColor: "bg-white",
                iconBg: "bg-brand-blue"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative overflow-hidden ${feature.bgColor} p-6 rounded-2xl border-2 border-brand-blue-light shadow-soft hover:shadow-medium transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`${feature.iconBg} rounded-xl p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-brand-blue mb-2 group-hover:text-brand-blue-dark transition-colors duration-200">{feature.title}</h3>
                    <p className="text-brand-dark-grey text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-brand-green-light1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-brand-dark-grey max-w-3xl mx-auto">
              Organizations using CogniVibe see dramatic improvements in development velocity, quality, and team satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "75%", label: "Faster Time to Market", description: "Accelerate delivery with automated workflows" },
              { metric: "90%", label: "Reduction in Bugs", description: "AI-powered testing catches issues early" },
              { metric: "60%", label: "Less Manual Work", description: "Automate repetitive development tasks" },
              { metric: "95%", label: "Developer Satisfaction", description: "Focus on creative problem-solving" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-brand-blue-light1 p-8 rounded-xl shadow-soft border-2 border-brand-blue-light hover:shadow-medium transition-all duration-300"
              >
                <div className="text-4xl font-bold text-brand-blue mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold text-brand-dark-grey mb-2">{stat.label}</div>
                <div className="text-brand-medium-grey">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-blue mb-4">
              <span className="text-brand-dark-grey">How</span> CogniVibe Works
            </h2>
            <p className="text-xl text-brand-dark-grey max-w-3xl mx-auto">
              Our AI-powered platform integrates seamlessly into your development workflow
            </p>
          </motion.div>

          <div className="space-y-16">
            {[
              {
                step: "01",
                title: "Intelligent Project Planning",
                description: "CogniVibe analyzes your requirements and automatically breaks down projects into manageable tasks with accurate time estimates and resource allocation.",
                features: ["Automated task breakdown", "Smart resource allocation", "Risk assessment", "Timeline optimization"],
                image: "planning"
              },
              {
                step: "02",
                title: "AI-Assisted Development",
                description: "Our AI engine provides code suggestions, automated refactoring, and intelligent code reviews to accelerate development while maintaining quality.",
                features: ["Code generation", "Automated refactoring", "Intelligent reviews", "Best practice enforcement"],
                image: "development"
              },
              {
                step: "03",
                title: "Comprehensive Testing",
                description: "Generate test cases automatically, execute comprehensive test suites, and get intelligent insights on code coverage and quality metrics.",
                features: ["Auto-generated tests", "Comprehensive coverage", "Performance testing", "Quality gates"],
                image: "testing"
              },
              {
                step: "04",
                title: "Seamless Deployment",
                description: "Deploy with confidence using automated pipelines, intelligent rollback mechanisms, and real-time monitoring with predictive analytics.",
                features: ["Automated pipelines", "Smart rollbacks", "Real-time monitoring", "Predictive analytics"],
                image: "deployment"
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-brand-blue">{step.title}</h3>
                  </div>
                  <p className="text-lg text-brand-dark-grey mb-6">{step.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-brand-blue mr-2" />
                        <span className="text-brand-dark-grey">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-brand-blue-light1 to-white rounded-2xl p-8 h-80 flex items-center justify-center border-2 border-brand-blue-light shadow-soft relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 left-4 w-2 h-2 bg-brand-blue rounded-full"></div>
                      <div className="absolute top-8 right-8 w-1 h-1 bg-brand-blue rounded-full"></div>
                      <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-brand-blue rounded-full"></div>
                      <div className="absolute bottom-4 right-4 w-2 h-2 bg-brand-blue rounded-full"></div>
                    </div>

                    {/* Step-specific illustrations */}
                    {step.image === 'planning' && (
                      <div className="relative z-10">
                        <svg className="w-48 h-48 text-brand-blue" viewBox="0 0 200 200" fill="none">
                          {/* Project Board */}
                          <rect x="20" y="40" width="160" height="120" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />

                          {/* Columns */}
                          <line x1="70" y1="40" x2="70" y2="160" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                          <line x1="120" y1="40" x2="120" y2="160" stroke="currentColor" strokeWidth="1" opacity="0.5" />

                          {/* Tasks/Cards */}
                          <rect x="25" y="55" width="40" height="20" rx="4" fill="currentColor" opacity="0.8" />
                          <rect x="25" y="80" width="40" height="20" rx="4" fill="currentColor" opacity="0.6" />
                          <rect x="75" y="55" width="40" height="20" rx="4" fill="currentColor" opacity="0.7" />
                          <rect x="125" y="55" width="40" height="20" rx="4" fill="currentColor" opacity="0.5" />
                          <rect x="125" y="80" width="40" height="20" rx="4" fill="currentColor" opacity="0.9" />

                          {/* AI Brain */}
                          <circle cx="100" cy="25" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
                          <circle cx="95" cy="22" r="2" fill="currentColor" />
                          <circle cx="105" cy="22" r="2" fill="currentColor" />
                          <path d="M92 28 Q100 32 108 28" stroke="currentColor" strokeWidth="1.5" fill="none" />

                          {/* Connection lines */}
                          <path d="M100 40 L100 50" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />

                          {/* Timeline at bottom */}
                          <line x1="30" y1="175" x2="170" y2="175" stroke="currentColor" strokeWidth="2" />
                          <circle cx="50" cy="175" r="3" fill="currentColor" />
                          <circle cx="100" cy="175" r="3" fill="currentColor" />
                          <circle cx="150" cy="175" r="3" fill="currentColor" />
                        </svg>
                      </div>
                    )}

                    {step.image === 'development' && (
                      <div className="relative z-10">
                        <svg className="w-48 h-48 text-brand-blue" viewBox="0 0 200 200" fill="none">
                          {/* Code Editor Window */}
                          <rect x="20" y="30" width="160" height="140" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />

                          {/* Window Header */}
                          <rect x="20" y="30" width="160" height="25" rx="8" fill="currentColor" opacity="0.2" />
                          <circle cx="35" cy="42" r="3" fill="currentColor" opacity="0.6" />
                          <circle cx="45" cy="42" r="3" fill="currentColor" opacity="0.6" />
                          <circle cx="55" cy="42" r="3" fill="currentColor" opacity="0.6" />

                          {/* Code Lines */}
                          <line x1="30" y1="70" x2="80" y2="70" stroke="currentColor" strokeWidth="2" opacity="0.8" />
                          <line x1="40" y1="85" x2="120" y2="85" stroke="currentColor" strokeWidth="2" opacity="0.6" />
                          <line x1="40" y1="100" x2="90" y2="100" stroke="currentColor" strokeWidth="2" opacity="0.7" />
                          <line x1="30" y1="115" x2="140" y2="115" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                          <line x1="40" y1="130" x2="100" y2="130" stroke="currentColor" strokeWidth="2" opacity="0.8" />
                          <line x1="30" y1="145" x2="110" y2="145" stroke="currentColor" strokeWidth="2" opacity="0.6" />

                          {/* AI Assistant */}
                          <circle cx="150" cy="90" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
                          <circle cx="145" cy="85" r="2" fill="currentColor" />
                          <circle cx="155" cy="85" r="2" fill="currentColor" />
                          <path d="M142 95 Q150 100 158 95" stroke="currentColor" strokeWidth="1.5" fill="none" />

                          {/* Suggestion Bubble */}
                          <path d="M130 70 Q125 65 125 60 Q125 50 135 50 L155 50 Q165 50 165 60 Q165 65 160 70 L150 70 L140 80 Z"
                            stroke="currentColor" strokeWidth="1.5" fill="none" />
                          <line x1="130" y1="57" x2="155" y2="57" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                          <line x1="130" y1="63" x2="150" y2="63" stroke="currentColor" strokeWidth="1" opacity="0.6" />

                          {/* Sparkles for AI magic */}
                          <path d="M170 40 L172 45 L177 43 L172 48 L170 53 L168 48 L163 43 L168 45 Z" fill="currentColor" opacity="0.7" />
                          <path d="M160 25 L161 28 L164 27 L161 30 L160 33 L159 30 L156 27 L159 28 Z" fill="currentColor" opacity="0.5" />
                        </svg>
                      </div>
                    )}

                    {step.image === 'testing' && (
                      <div className="relative z-10">
                        <svg className="w-48 h-48 text-brand-blue" viewBox="0 0 200 200" fill="none">
                          {/* Testing Dashboard */}
                          <rect x="20" y="40" width="160" height="120" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />

                          {/* Header */}
                          <rect x="20" y="40" width="160" height="25" rx="8" fill="currentColor" opacity="0.2" />
                          <text x="30" y="57" className="text-xs font-semibold" fill="currentColor">Test Results</text>

                          {/* Test Cases */}
                          <g className="test-cases">
                            {/* Passed Tests */}
                            <circle cx="40" cy="85" r="4" fill="currentColor" opacity="0.8" />
                            <line x1="50" y1="85" x2="120" y2="85" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
                            <text x="125" y="88" className="text-xs" fill="currentColor" opacity="0.7">✓</text>

                            <circle cx="40" cy="100" r="4" fill="currentColor" opacity="0.8" />
                            <line x1="50" y1="100" x2="110" y2="100" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
                            <text x="115" y="103" className="text-xs" fill="currentColor" opacity="0.7">✓</text>

                            <circle cx="40" cy="115" r="4" fill="currentColor" opacity="0.8" />
                            <line x1="50" y1="115" x2="130" y2="115" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
                            <text x="135" y="118" className="text-xs" fill="currentColor" opacity="0.7">✓</text>

                            {/* Failed Test */}
                            <circle cx="40" cy="130" r="4" fill="currentColor" opacity="0.4" />
                            <line x1="50" y1="130" x2="100" y2="130" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                            <text x="105" y="133" className="text-xs" fill="currentColor" opacity="0.4">✗</text>
                          </g>

                          {/* Coverage Meter */}
                          <rect x="140" y="75" width="30" height="70" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                          <rect x="142" y="95" width="26" height="48" rx="2" fill="currentColor" opacity="0.7" />
                          <text x="145" y="92" className="text-xs font-bold" fill="currentColor">95%</text>

                          {/* Magnifying Glass for Analysis */}
                          <circle cx="100" cy="25" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
                          <line x1="109" y1="34" x2="118" y2="43" stroke="currentColor" strokeWidth="2" />
                          <circle cx="100" cy="25" r="6" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />

                          {/* Bug Detection */}
                          <path d="M60 150 Q65 145 70 150 Q65 155 60 150" fill="currentColor" opacity="0.6" />
                          <circle cx="65" cy="150" r="1" fill="currentColor" />
                          <path d="M62 148 L68 152 M68 148 L62 152" stroke="currentColor" strokeWidth="1" />
                        </svg>
                      </div>
                    )}

                    {step.image === 'deployment' && (
                      <div className="relative z-10">
                        <svg className="w-48 h-48 text-brand-blue" viewBox="0 0 200 200" fill="none">
                          {/* Rocket */}
                          <path d="M100 20 L110 60 L120 80 L110 100 L100 110 L90 100 L80 80 L90 60 Z"
                            stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />

                          {/* Rocket Details */}
                          <ellipse cx="100" cy="70" rx="8" ry="15" fill="currentColor" opacity="0.6" />
                          <circle cx="100" cy="65" r="3" fill="currentColor" />

                          {/* Fins */}
                          <path d="M80 80 L75 95 L85 90 Z" fill="currentColor" opacity="0.7" />
                          <path d="M120 80 L125 95 L115 90 Z" fill="currentColor" opacity="0.7" />

                          {/* Exhaust */}
                          <path d="M95 110 Q100 120 105 110 Q100 125 95 110" fill="currentColor" opacity="0.8" />
                          <path d="M90 115 Q100 130 110 115 Q100 140 90 115" fill="currentColor" opacity="0.6" />
                          <path d="M85 120 Q100 140 115 120 Q100 155 85 120" fill="currentColor" opacity="0.4" />

                          {/* Clouds */}
                          <ellipse cx="60" cy="50" rx="15" ry="8" fill="currentColor" opacity="0.3" />
                          <ellipse cx="140" cy="70" rx="12" ry="6" fill="currentColor" opacity="0.3" />
                          <ellipse cx="160" cy="120" rx="18" ry="10" fill="currentColor" opacity="0.3" />

                          {/* Deployment Pipeline */}
                          <rect x="20" y="160" width="160" height="20" rx="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                          <rect x="22" y="162" width="50" height="16" rx="8" fill="currentColor" opacity="0.8" />
                          <rect x="75" y="162" width="40" height="16" rx="8" fill="currentColor" opacity="0.6" />
                          <rect x="118" y="162" width="30" height="16" rx="8" fill="currentColor" opacity="0.4" />

                          {/* Progress Indicators */}
                          <circle cx="47" cy="170" r="2" fill="currentColor" />
                          <circle cx="95" cy="170" r="2" fill="currentColor" opacity="0.7" />
                          <circle cx="133" cy="170" r="2" fill="currentColor" opacity="0.5" />

                          {/* Stars */}
                          <path d="M40 30 L41 33 L44 32 L41 35 L40 38 L39 35 L36 32 L39 33 Z" fill="currentColor" opacity="0.6" />
                          <path d="M150 40 L151 42 L153 41 L151 44 L150 46 L149 44 L147 41 L149 42 Z" fill="currentColor" opacity="0.5" />
                          <path d="M170 30 L171 32 L173 31 L171 34 L170 36 L169 34 L167 31 L169 32 Z" fill="currentColor" opacity="0.7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-brand-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-blue mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-brand-dark-grey max-w-3xl mx-auto">
              CogniVibe works with your existing development tools and platforms
            </p>
          </motion.div>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ x: [0, -100 * 12] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ width: `${12 * 200}px` }}
            >
              {[
                { name: "GitHub", logo: "github_icon.png" },
                { name: "Docker", logo: "Docker-icon.png" },
                { name: "Kubernetes", logo: "kubernates_icon.png" },
                { name: "AWS", logo: "aws-icon.webp" },
                { name: "Azure", logo: "azure_icon.webp" },
                { name: "GCP", logo: "GCP_icon.png" },
                { name: "GitLab", logo: "gitlab_icon.png" },
                { name: "Bitbucket", logo: "bitbucket_icon.webp" },
                { name: "Jenkins", logo: "jenkins_logo.png" },
                { name: "Jira", logo: "jira_icon.jpg" },
                { name: "Slack", logo: "slack_icon.webp" },
                { name: "Teams", logo: "teams_icon.png" }
              ].concat([
                { name: "GitHub", logo: "github_icon.png" },
                { name: "Docker", logo: "Docker-icon.png" },
                { name: "Kubernetes", logo: "kubernates_icon.png" },
                { name: "AWS", logo: "aws-icon.webp" },
                { name: "Azure", logo: "azure_icon.webp" },
                { name: "GCP", logo: "GCP_icon.png" },
                { name: "GitLab", logo: "gitlab_icon.png" },
                { name: "Bitbucket", logo: "bitbucket_icon.webp" },
                { name: "Jenkins", logo: "jenkins_logo.png" },
                { name: "Jira", logo: "jira_icon.jpg" },
                { name: "Slack", logo: "slack_icon.webp" },
                { name: "Teams", logo: "teams_icon.png" }
              ]).map((tool, index) => (
                <motion.div
                  key={`${tool.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: (index % 12) * 0.1 }}
                  className="flex-shrink-0 w-40 p-6 bg-white rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col items-center justify-center group hover:scale-105 border border-brand-grey"
                >
                  <Image
                    src={`/images/external-integrations/${tool.logo}`}
                    alt={tool.name}
                    width={40}
                    height={40}
                    className="mb-3 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="font-medium text-brand-dark-grey text-sm text-center">{tool.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-20 bg-brand-yellow-light1 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-brand-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-blue rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center bg-brand-blue/10 text-brand-blue px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-brand-blue-light">
              <ChartBarIcon className="w-5 h-5 mr-2" />
              Real Results
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-brand-blue mb-6">
              Proven Impact &
              <span className="block  text-brand-dark-grey">
                Performance
              </span>
            </h2>
            <p className="text-xl text-brand-dark-grey max-w-4xl mx-auto leading-relaxed">
              Join thousands of development teams who've transformed their workflows with CogniVibe's intelligent automation
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                metric: "70%",
                label: "Faster Development",
                description: "Average reduction in time-to-market across all projects",
                icon: RocketLaunchIcon,
                gradient: "from-brand-blue to-brand-blue-light",
                bgGradient: "from-brand-blue/10 to-brand-blue-light/10"
              },
              {
                metric: "85%",
                label: "Bug Reduction",
                description: "Fewer production issues with AI-powered testing",
                icon: CheckCircleIcon,
                gradient: "from-brand-blue to-brand-blue-light",
                bgGradient: "from-brand-blue/10 to-brand-blue-light/10"
              },
              {
                metric: "60%",
                label: "Productivity Boost",
                description: "Increased developer efficiency and satisfaction",
                icon: ChartBarIcon,
                gradient: "from-brand-blue to-brand-blue-light",
                bgGradient: "from-brand-blue/10 to-brand-blue-light/10"
              },
              {
                metric: "90%",
                label: "Deployment Success",
                description: "Reliable releases with automated workflows",
                icon: CogIcon,
                gradient: "from-brand-blue to-brand-blue-light",
                bgGradient: "from-brand-blue/10 to-brand-blue-light/10"
              }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative bg-white backdrop-blur-sm rounded-3xl p-8 text-center group hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-medium border-2 border-brand-blue-light"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 shadow-soft`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className={`text-5xl font-bold mb-3 bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent`}>
                    {item.metric}
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark-grey mb-3">{item.label}</h3>
                  <p className="text-brand-medium-grey text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Success Stories Preview */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-brand-blue-light1 to-white rounded-3xl p-12 text-center relative overflow-hidden border-2 border-brand-blue-light shadow-soft"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 to-brand-blue/5 opacity-50"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold mb-6 text-brand-blue"><span className="text-brand-dark-grey">Trusted by</span> Industry Leaders</h3>
              <p className="text-xl text-brand-dark-grey mb-8 max-w-3xl mx-auto">
                From startups to Fortune 500 companies, teams worldwide rely on CogniVibe to accelerate their development cycles
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-90 ">
                {["TechCorp", "InnovateLabs", "DevSolutions", "CloudFirst", "AgileWorks"].map((company, index) => (
                  <div key={company} className="text-lg font-semibold text-brand-blue">{company}</div>
                ))}
              </div>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* AI SDLC Lifecycle Visualization */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              <span className="text-brand-dark-grey">Unified</span> SDLC Automation
            </h2>
            <p className="text-lg md:text-xl text-brand-dark-grey max-w-3xl mx-auto">
              Streamlined development lifecycle with intelligent automation at every stage
            </p>
          </motion.div>

          {/* SDLC Stages Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {[
              {
                stage: "Planning",
                description: "AI requirement analysis",
                icon: ClipboardDocumentListIcon,
                color: "bg-brand-blue",
                bgColor: "bg-white"
              },
              {
                stage: "Design",
                description: "Smart architecture",
                icon: PaintBrushIcon,
                color: "bg-brand-blue",
                bgColor: "bg-white"
              },
              {
                stage: "Development",
                description: "AI-assisted coding",
                icon: CodeBracketIcon,
                color: "bg-brand-blue",
                bgColor: "bg-white"
              },
              {
                stage: "Testing",
                description: "Automated QA",
                icon: BeakerIcon,
                color: "bg-brand-blue",
                bgColor: "bg-white"
              },
              {
                stage: "Deployment",
                description: "Smart deployment",
                icon: RocketLaunchIcon,
                color: "bg-brand-blue",
                bgColor: "bg-white"
              },
              {
                stage: "Monitoring",
                description: "Real-time insights",
                icon: EyeIcon,
                color: "bg-brand-blue",
                bgColor: "bg-white"
              }
            ].map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`${stage.bgColor} rounded-2xl p-4 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 border-2 border-brand-blue-light text-center`}>
                  <div className={`${stage.color} rounded-xl p-3 w-fit mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <stage.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-brand-blue mb-1 group-hover:text-brand-blue-dark transition-colors duration-200">
                    {stage.stage}
                  </h3>
                  <p className="text-xs text-brand-dark-grey leading-tight">
                    {stage.description}
                  </p>
                </div>

                {/* Connection arrow */}
                {index < 5 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <div className="w-4 h-0.5 bg-brand-blue opacity-60"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Central Integration Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="bg-gradient-to-br from-brand-blue to-brand-blue-light rounded-2xl p-8 shadow-medium max-w-md text-center border-2 border-brand-blue-light">
              <div className="relative mb-4">
                <CogIcon className="w-12 h-12 text-white mx-auto animate-spin [animation-duration:8s]" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-green-dark rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-xl font-bold text-brand-dark-grey mb-2">AI Control Center</h3>
              <p className="text-white text-sm">
                Centralized intelligence orchestrating your entire development pipeline
              </p>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Continuous Intelligence",
                description: "AI learns from every cycle to optimize future iterations",
                icon: LightBulbIcon,
                color: "bg-brand-blue"
              },
              {
                title: "Seamless Integration",
                description: "Works with your existing tools and workflows",
                icon: LinkIcon,
                color: "bg-brand-blue"
              },
              {
                title: "Predictive Insights",
                description: "Anticipate issues before they impact your delivery",
                icon: SparklesIcon,
                color: "bg-brand-blue"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border-2 border-brand-blue-light"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${benefit.color} rounded-full mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">{benefit.title}</h3>
                <p className="text-brand-dark-grey leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </PageLayout>
  );
};

export default CogniVibePage;