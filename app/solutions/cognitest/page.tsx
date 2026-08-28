'use client';

import React from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import { CTASection } from '@/components/home/CTASection';
import {
  BeakerIcon,
  EyeIcon,
  CogIcon,
  ChartBarIcon,
  CheckCircleIcon,
  PhotoIcon,
  BoltIcon,
  ArrowPathIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  PresentationChartBarIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const CogniTestPage = () => {
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
                  <BeakerIcon className="w-4 h-4 text-[#8B5CF6]" />
                  <span>AI-Powered Testing</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                  Cogni
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC] drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                    Test
                  </span>
                </h1>

                <h2 className="text-xl sm:text-2xl font-semibold text-[#A78BFA] mb-6">
                  AI-Powered Testing Automation Platform
                </h2>

                <p className="text-base sm:text-lg text-[#B8B6C4] mb-10 max-w-xl leading-relaxed font-normal">
                  Revolutionize your testing process with AI that understands your application. Generate intelligent tests, catch visual bugs, and ensure quality at every step.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white px-8 py-3.5 rounded-xl font-bold shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 transition-all duration-300 text-center"
                  >
                    Schedule Demo
                  </Link>
                  <Link
                    href="#features"
                    className="bg-[#15151D] text-white border border-[#29263A] hover:border-[#8B5CF6]/60 hover:bg-[#1A1829] px-8 py-3.5 rounded-xl font-bold transition-all duration-300 text-center"
                  >
                    Explore Features
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
                      <h3 className="text-xl font-bold text-white mb-2">AI Test Engine</h3>
                      <p className="text-xs sm:text-sm text-[#B8B6C4]">
                        Intelligent test automation with real-time visual bug discovery
                      </p>
                    </div>
                  </div>

                  {/* Floating Orb Badges */}
                  <motion.div
                    animate={{ y: [-8, 8, -8] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-5 -left-5 bg-[#15151D] border border-[#8B5CF6]/50 rounded-2xl p-3.5 shadow-[0_0_20px_rgba(124,58,237,0.35)]"
                  >
                    <EyeIcon className="w-6 h-6 text-[#A78BFA]" />
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
                    <ChartBarIcon className="w-6 h-6 text-[#A78BFA]" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Testing Excellence Delivered (Metrics Section) */}
        <section className="py-24 bg-[#0B0A14] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Testing Excellence{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC]">
                  Delivered
                </span>
              </h2>
              <p className="text-base sm:text-lg text-[#B8B6C4] max-w-3xl mx-auto leading-relaxed font-normal">
                Our AI-powered testing platform delivers measurable results across all testing dimensions.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  number: '99.7%',
                  label: 'Test Accuracy',
                  description: 'AI-powered precision and zero false alarms',
                  icon: ChartBarIcon,
                },
                {
                  number: '85%',
                  label: 'Faster Testing',
                  description: 'Drastically reduced regression test cycles',
                  icon: BoltIcon,
                },
                {
                  number: '50M+',
                  label: 'Tests Executed',
                  description: 'Across diverse enterprise platforms and mobile apps',
                  icon: BeakerIcon,
                },
                {
                  number: '24/7',
                  label: 'Continuous Testing',
                  description: 'Always monitoring quality across every deployment',
                  icon: ArrowPathIcon,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#15151D]/90 rounded-2xl p-8 text-center border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] hover:-translate-y-1 transition-all duration-300 group backdrop-blur-xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1A1829] border border-[#8B5CF6]/40 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-[#A78BFA]" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white via-[#A78BFA] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-base font-bold text-white mb-1">{stat.label}</div>
                  <div className="text-xs sm:text-sm text-[#B8B6C4]">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Features Section (Next-Gen Testing Platform) */}
        <section id="features" className="py-24 bg-[#17152A] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 bg-[#15151D] border border-[#29263A] shadow-[0_0_15px_rgba(124,58,237,0.15)] text-[#A78BFA] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                <SparklesIcon className="w-4 h-4 text-[#8B5CF6]" />
                Smart Test Generation
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Next-Gen{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC]">
                  Testing
                </span>{' '}
                Platform
              </h2>
              <p className="text-base sm:text-lg text-[#B8B6C4] max-w-3xl mx-auto leading-relaxed">
                Revolutionary AI-powered testing capabilities that transform how you ensure quality and accelerate releases.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Functional Test Automation',
                  description:
                    'AI-generated functional tests that intelligently adapt to UI changes and provide comprehensive coverage across all user journeys.',
                  icon: BeakerIcon,
                  badge: 'Core Feature',
                },
                {
                  title: 'CogniPixel Visual Testing',
                  description:
                    'Pixel-perfect visual regression testing with AI-powered false positive reduction that catches UI issues before production.',
                  icon: PhotoIcon,
                  badge: 'Exclusive',
                },
                {
                  title: 'Intelligent Test Data',
                  description:
                    'AI-powered test data generation that creates realistic, diverse datasets with privacy compliance and edge case coverage.',
                  icon: CogIcon,
                  badge: 'AI-Powered',
                },
                {
                  title: 'Performance Testing',
                  description:
                    'Automated performance and load testing with intelligent bottleneck analysis and optimization recommendations.',
                  icon: ChartBarIcon,
                  badge: 'Enterprise',
                },
                {
                  title: 'Quality Analytics',
                  description:
                    'Advanced analytics dashboard with real-time insights into test coverage, quality metrics, and predictive quality trends.',
                  icon: EyeIcon,
                  badge: 'Analytics',
                },
                {
                  title: 'Continuous Quality Gates',
                  description:
                    'Intelligent quality gates with automated decision-making that ensures only production-ready code advances through pipelines.',
                  icon: CheckCircleIcon,
                  badge: 'Automated',
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
                  <div>
                    {/* Badge */}
                    <div className="flex justify-between items-center mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#1A1829] border border-[#8B5CF6]/40 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.3)] group-hover:scale-110 transition-transform">
                        <feature.icon className="w-6 h-6 text-[#A78BFA]" />
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#1A1829] border border-[#8B5CF6]/30 text-[#A78BFA]">
                        {feature.badge}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#A78BFA] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B8B6C4] leading-relaxed mb-6 font-normal">
                      {feature.description}
                    </p>
                  </div>

                  <div className="flex items-center text-xs font-semibold text-[#A78BFA] group-hover:translate-x-1 transition-transform">
                    <span>Explore Capability</span>
                    <ArrowPathIcon className="w-3.5 h-3.5 ml-1.5 group-hover:rotate-90 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CogniPixel Highlight Section */}
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
                Visual Testing
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                CogniPixel Technology
              </h2>
              <p className="text-base sm:text-lg text-[#B8B6C4] max-w-3xl mx-auto leading-relaxed">
                Revolutionary pixel-perfect visual testing that catches UI regressions before they reach production.
              </p>
            </motion.div>

            <div className="bg-[#15151D]/90 rounded-3xl p-8 md:p-12 border border-[#29263A] hover:border-[#8B5CF6]/50 shadow-[0_15px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    Pixel-Perfect Accuracy
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Detects 1-pixel differences automatically with zero false alarms',
                      'AI-powered dynamic content & banner masking',
                      'Cross-browser visual rendering consistency',
                      'Responsive design multi-viewport validation',
                      'Automated visual baseline version management',
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 text-sm text-[#B8B6C4]">
                        <CheckCircleIcon className="w-5 h-5 text-[#8B5CF6] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#1A1829]/90 rounded-2xl p-8 text-center border border-[#8B5CF6]/30 shadow-[0_0_30px_rgba(124,58,237,0.2)]">
                  <div className="w-20 h-20 rounded-2xl bg-[#15151D] border border-[#8B5CF6]/40 flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                    <PhotoIcon className="w-10 h-10 text-[#A78BFA]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Visual Regression Detection
                  </h4>
                  <p className="text-xs sm:text-sm text-[#B8B6C4] leading-relaxed max-w-sm mx-auto">
                    Advanced computer vision algorithms ensure your UI looks perfect across every device, breakpoint, and browser engine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Complete Testing Coverage Section */}
        <section className="py-24 bg-[#17152A] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Complete Testing Coverage
              </h2>
              <p className="text-base sm:text-lg text-[#B8B6C4] max-w-3xl mx-auto">
                From unit tests to end-to-end scenarios, CogniTest covers every aspect of quality assurance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  category: 'Functional Testing',
                  tests: [
                    { name: 'Unit Testing', description: 'Automated unit test generation and execution' },
                    { name: 'Integration Testing', description: 'API and microservice integration validation' },
                    { name: 'End-to-End Testing', description: 'Complete user journey workflow automation' },
                    { name: 'Regression Testing', description: 'Fast automated regression test suites' },
                  ],
                },
                {
                  category: 'Non-Functional Testing',
                  tests: [
                    { name: 'Performance Testing', description: 'Load, stress, and scalability testing' },
                    { name: 'Security Testing', description: 'Vulnerability and penetration scan validation' },
                    { name: 'Accessibility Testing', description: 'WCAG compliance automated validation' },
                    { name: 'Compatibility Testing', description: 'Cross-browser and device matrix testing' },
                  ],
                },
                {
                  category: 'Visual Testing',
                  tests: [
                    { name: 'CogniPixel Comparison', description: 'Pixel-perfect visual regression detection' },
                    { name: 'Responsive Design', description: 'Multi-device layout consistency validation' },
                    { name: 'Cross-Browser Testing', description: 'Visual consistency across rendering engines' },
                    { name: 'Dynamic Content Testing', description: 'Animated and interactive element testing' },
                  ],
                },
                {
                  category: 'Data Testing',
                  tests: [
                    { name: 'Test Data Generation', description: 'AI-powered realistic test data creation' },
                    { name: 'Database Testing', description: 'Data integrity and schema migration validation' },
                    { name: 'API Data Validation', description: 'Request/response payload verification' },
                    { name: 'Data Privacy Testing', description: 'PII, GDPR, and compliance testing' },
                  ],
                },
              ].map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#15151D]/90 rounded-2xl p-7 sm:p-8 border border-[#29263A] hover:border-[#8B5CF6]/50 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.tests.map((test, testIndex) => (
                      <div key={testIndex} className="flex items-start space-x-3">
                        <CheckCircleIcon className="w-5 h-5 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-white text-sm sm:text-base">{test.name}</h4>
                          <p className="text-xs sm:text-sm text-[#B8B6C4]">{test.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Seamless Integrations Section */}
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
                CogniTest integrates natively with your existing testing and CI/CD ecosystems.
              </p>
            </motion.div>

            <div className="overflow-hidden py-4">
              <motion.div
                className="flex gap-6"
                animate={{ x: [0, -100 * 10] }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{ width: `${10 * 220}px` }}
              >
                {[
                  { name: 'Selenium', logo: 'selenium_icon.png' },
                  { name: 'Cypress', logo: 'cypress_icon.png' },
                  { name: 'Playwright', logo: 'playwright_icon.png' },
                  { name: 'Jest', logo: 'jest_icon.jpg' },
                  { name: 'TestNG', logo: 'test_icon.png' },
                  { name: 'Jenkins', logo: 'jenkins_logo.png' },
                  { name: 'GitLab', logo: 'gitlab_icon.png' },
                  { name: 'Azure', logo: 'azure_icon.webp' },
                  { name: 'Jira', logo: 'jira_icon.jpg' },
                  { name: 'TestRail', logo: 'testrail_icon.png' },
                ]
                  .concat([
                    { name: 'Selenium', logo: 'selenium_icon.png' },
                    { name: 'Cypress', logo: 'cypress_icon.png' },
                    { name: 'Playwright', logo: 'playwright_icon.png' },
                    { name: 'Jest', logo: 'jest_icon.jpg' },
                    { name: 'TestNG', logo: 'test_icon.png' },
                    { name: 'Jenkins', logo: 'jenkins_logo.png' },
                    { name: 'GitLab', logo: 'gitlab_icon.png' },
                    { name: 'Azure', logo: 'azure_icon.webp' },
                    { name: 'Jira', logo: 'jira_icon.jpg' },
                    { name: 'TestRail', logo: 'testrail_icon.png' },
                  ])
                  .map((tool, index) => (
                    <div
                      key={`${tool.name}-${index}`}
                      className="flex-shrink-0 w-44 p-6 bg-[#15151D]/90 rounded-2xl border border-[#29263A] hover:border-[#8B5CF6]/50 shadow-[0_8px_25px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center group hover:scale-105 transition-all duration-300"
                    >
                      <NextImage
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

        {/* 7. AI-Powered Testing Workflow */}
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
                Workflow
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                AI-Powered Testing{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC]">
                  Workflow
                </span>
              </h2>
              <p className="text-base sm:text-lg text-[#B8B6C4] max-w-3xl mx-auto">
                Experience intelligent test automation that adapts and learns from your application changes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Smart Discovery',
                  description:
                    'AI analyzes your application structure and automatically identifies testable components and flows.',
                  icon: MagnifyingGlassIcon,
                },
                {
                  step: '02',
                  title: 'Test Generation',
                  description:
                    'Intelligent algorithms create comprehensive test cases covering functional, visual, and edge scenarios.',
                  icon: BeakerIcon,
                },
                {
                  step: '03',
                  title: 'CogniPixel Validation',
                  description:
                    'Advanced visual testing compares pixel-perfect screenshots and detects UI regressions.',
                  icon: EyeIcon,
                },
                {
                  step: '04',
                  title: 'Adaptive Learning',
                  description:
                    'AI learns from test outcomes to continuously optimize test coverage and execution speed.',
                  icon: CogIcon,
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative bg-[#15151D]/90 border border-[#29263A] hover:border-[#8B5CF6]/60 rounded-2xl p-7 text-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] transition-all duration-300 group hover:-translate-y-1 backdrop-blur-xl"
                >
                  <div className="inline-flex items-center px-3 py-1 bg-[#1A1829] border border-[#8B5CF6]/40 rounded-lg text-xs font-bold text-[#A78BFA] mb-4 shadow-[0_0_10px_rgba(124,58,237,0.25)]">
                    {process.step}
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#1A1829] border border-[#8B5CF6]/40 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <process.icon className="w-6 h-6 text-[#A78BFA]" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#A78BFA] transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8B6C4] leading-relaxed">
                    {process.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Continuous Testing Pipeline Flow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 bg-[#15151D]/90 rounded-3xl p-8 border border-[#29263A] shadow-[0_15px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Continuous Testing Pipeline</h3>
                <p className="text-sm text-[#B8B6C4]">
                  Seamlessly integrated into your development CI/CD workflow
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {[
                  { label: 'Code Commit', icon: DocumentTextIcon },
                  { label: 'AI Test Generation', icon: CogIcon },
                  { label: 'Automated Execution', icon: BoltIcon },
                  { label: 'Visual Validation', icon: EyeIcon },
                  { label: 'Results & Insights', icon: PresentationChartBarIcon },
                ].map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="bg-[#1A1829] rounded-xl p-4 text-center w-full md:w-auto min-w-[140px] hover:scale-105 transition-transform duration-200 border border-[#8B5CF6]/30 shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                      <div className="mb-2 flex justify-center">
                        <step.icon className="w-7 h-7 text-[#A78BFA]" />
                      </div>
                      <div className="text-xs font-semibold text-white">{step.label}</div>
                    </div>
                    {index < 4 && (
                      <div className="hidden md:block text-[#A78BFA] text-lg font-bold">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 8. CTA Section */}
        <CTASection theme="dark" />
      </div>
    </PageLayout>
  );
};

export default CogniTestPage;