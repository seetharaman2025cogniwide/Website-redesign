'use client';

import React from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import { CTASection } from '@/components/home/CTASection';
import {
  CloudIcon,
  CogIcon,
  ServerIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  ArrowPathIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  PresentationChartBarIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
  CubeIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const CogniOpsPage = () => {
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
                  <CogIcon className="w-4 h-4 text-[#8B5CF6]" />
                  <span>AI-Powered Operations</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                  Cogni
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC] drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                    Ops
                  </span>
                </h1>

                <h2 className="text-xl sm:text-2xl font-semibold text-[#A78BFA] mb-6">
                  Smart DevOps Automation Platform
                </h2>

                <p className="text-base sm:text-lg text-[#B8B6C4] mb-10 max-w-xl leading-relaxed font-normal">
                  Transform your operations with AI that optimizes your entire infrastructure. Automate deployments, predict issues, and scale multi-cloud environments intelligently.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white px-8 py-3.5 rounded-xl font-bold shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 transition-all duration-300 text-center"
                  >
                    See Platform Demo
                  </Link>
                  <Link
                    href="#features"
                    className="bg-[#15151D] text-white border border-[#29263A] hover:border-[#8B5CF6]/60 hover:bg-[#1A1829] px-8 py-3.5 rounded-xl font-bold transition-all duration-300 text-center"
                  >
                    Explore Capabilities
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
                      <h3 className="text-xl font-bold text-white mb-2">AI Ops Center</h3>
                      <p className="text-xs sm:text-sm text-[#B8B6C4]">
                        Intelligent operations control & predictive infrastructure scaling
                      </p>
                    </div>
                  </div>

                  {/* Floating Orb Badges */}
                  <motion.div
                    animate={{ y: [-8, 8, -8] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-5 -left-5 bg-[#15151D] border border-[#8B5CF6]/50 rounded-2xl p-3.5 shadow-[0_0_20px_rgba(124,58,237,0.35)]"
                  >
                    <CloudIcon className="w-6 h-6 text-[#A78BFA]" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [8, -8, 8] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 0.5, ease: 'easeInOut' }}
                    className="absolute -bottom-5 -right-5 bg-[#15151D] border border-[#8B5CF6]/50 rounded-2xl p-3.5 shadow-[0_0_20px_rgba(124,58,237,0.35)]"
                  >
                    <ServerIcon className="w-6 h-6 text-[#A78BFA]" />
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

        {/* 2. Operations Excellence Achieved (Metrics Section) */}
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
                Operations Excellence{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC]">
                  Achieved
                </span>
              </h2>
              <p className="text-base sm:text-lg text-[#B8B6C4] max-w-3xl mx-auto leading-relaxed font-normal">
                Our AI-powered operations platform delivers unmatched reliability, speed, and cloud efficiency.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  number: '99.9%',
                  label: 'System Uptime',
                  description: 'Guaranteed enterprise reliability and proactive auto-healing',
                  icon: RocketLaunchIcon,
                },
                {
                  number: '75%',
                  label: 'Faster Deployments',
                  description: 'Reduced time to market with automated release pipelines',
                  icon: BoltIcon,
                },
                {
                  number: '10K+',
                  label: 'Deployments Daily',
                  description: 'Across hybrid cloud and multi-region clusters',
                  icon: ArrowPathIcon,
                },
                {
                  number: '24/7',
                  label: 'AI Monitoring',
                  description: 'Continuous predictive optimization and anomaly detection',
                  icon: CogIcon,
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

            {/* Trusted by DevOps Teams Globally */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#15151D]/90 rounded-3xl p-8 border border-[#29263A] text-center shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                Trusted by <span className="text-[#A78BFA]">DevOps Teams Globally</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#B8B6C4] mb-6 max-w-2xl mx-auto">
                From startups to enterprise leaders, teams rely on CogniOps to scale their cloud operations efficiently.
              </p>
              <div className="flex flex-wrap justify-center gap-4 items-center">
                {['CloudScale', 'DevMasters', 'OptiFlow', 'InfraCore'].map((company) => (
                  <div
                    key={company}
                    className="text-xs font-semibold text-[#A78BFA] bg-[#1A1829] border border-[#8B5CF6]/30 rounded-xl px-5 py-2 shadow-[0_0_12px_rgba(124,58,237,0.2)]"
                  >
                    {company}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. Features Section (Smart DevOps Platform) */}
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
                Streamlined Operations
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Smart{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC]">
                  DevOps
                </span>{' '}
                Platform
              </h2>
              <p className="text-base sm:text-lg text-[#B8B6C4] max-w-3xl mx-auto leading-relaxed">
                Revolutionary AI-powered DevOps automation that transforms cloud operations with intelligent pipelines and seamless multi-cloud orchestration.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Automated Pipeline Creation',
                  description:
                    'AI-powered pipeline generation with intelligent Helm charts integration and zero-downtime deployment strategies.',
                  icon: CogIcon,
                  badge: 'Core Feature',
                },
                {
                  title: 'Multi-Cloud Migration',
                  description:
                    'Intelligent cloud-to-cloud migration with automated service discovery and configuration preservation across providers.',
                  icon: CloudIcon,
                  badge: 'Enterprise',
                },
                {
                  title: 'Infrastructure Optimization',
                  description:
                    'AI-driven infrastructure analysis with cost optimization recommendations and automated resource scaling.',
                  icon: ServerIcon,
                  badge: 'Cost Saver',
                },
                {
                  title: 'Helm Chart Management',
                  description:
                    'Automated Helm chart lifecycle management with intelligent dependency resolution and security scanning.',
                  icon: RocketLaunchIcon,
                  badge: 'Kubernetes',
                },
                {
                  title: 'Performance Monitoring',
                  description:
                    'Real-time monitoring with predictive analytics, anomaly detection, and automated incident response workflows.',
                  icon: ChartBarIcon,
                  badge: 'Real-time',
                },
                {
                  title: 'Continuous Deployment',
                  description:
                    'Intelligent CD pipelines with adaptive deployment strategies and automated rollback capabilities for maximum reliability.',
                  icon: ArrowPathIcon,
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
                    <span>Explore Feature</span>
                    <ArrowPathIcon className="w-3.5 h-3.5 ml-1.5 group-hover:rotate-90 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Helm Integration Highlight */}
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
                Kubernetes
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Seamless Helm Chart Integration
              </h2>
              <p className="text-base sm:text-lg text-[#B8B6C4] max-w-3xl mx-auto leading-relaxed">
                Native Helm support with intelligent chart generation and management for Kubernetes deployments.
              </p>
            </motion.div>

            <div className="bg-[#15151D]/90 rounded-3xl p-8 md:p-12 border border-[#29263A] hover:border-[#8B5CF6]/50 shadow-[0_15px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    Intelligent Helm Management
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Automated Helm chart generation and templates',
                      'Intelligent dependency resolution and version lock',
                      'Automated rollbacks with live cluster health checks',
                      'Multi-environment promotion workflows',
                      'Automated security scanning and RBAC compliance',
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
                    <ServerIcon className="w-10 h-10 text-[#A78BFA]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Kubernetes Native</h4>
                  <p className="text-xs sm:text-sm text-[#B8B6C4] leading-relaxed max-w-sm mx-auto">
                    Built for Kubernetes with native Helm support, ensuring seamless compatibility with your existing clusters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Cloud Migration Section */}
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
                Intelligent Cloud Migration
              </h2>
              <p className="text-base sm:text-lg text-[#B8B6C4] max-w-3xl mx-auto">
                Migrate between any cloud providers with zero downtime and preserved service configurations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'AWS to Azure',
                  description: 'Seamless migration with service mapping, IAM policies, and configuration preservation.',
                  features: ['EC2 to VM mapping', 'S3 to Blob Storage', 'RDS to Azure SQL', 'Lambda to Functions'],
                },
                {
                  title: 'Azure to GCP',
                  description: 'Intelligent migration to Google Cloud Platform with architecture and cost optimization.',
                  features: ['VM to Compute Engine', 'Blob to Cloud Storage', 'SQL to Cloud SQL', 'Functions to Cloud Functions'],
                },
                {
                  title: 'GCP to AWS',
                  description: 'Complete migration from Google Cloud to AWS with enhanced performance scaling.',
                  features: ['Compute to EC2', 'Storage to S3', 'Cloud SQL to RDS', 'Cloud Functions to Lambda'],
                },
              ].map((migration, index) => (
                <motion.div
                  key={migration.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#15151D]/90 rounded-2xl p-7 sm:p-8 border border-[#29263A] hover:border-[#8B5CF6]/50 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{migration.title}</h3>
                  <p className="text-xs sm:text-sm text-[#B8B6C4] mb-6 leading-relaxed">
                    {migration.description}
                  </p>
                  <ul className="space-y-3">
                    {migration.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs sm:text-sm text-[#B8B6C4]">
                        <ArrowPathIcon className="w-4 h-4 text-[#8B5CF6] mr-2.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Complete DevOps Automation Capabilities */}
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
                Complete DevOps Automation
              </h2>
              <p className="text-base sm:text-lg text-[#B8B6C4] max-w-3xl mx-auto">
                End-to-end DevOps capabilities from code to production with intelligent automation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  category: 'CI/CD Pipelines',
                  capabilities: [
                    { name: 'Automated Pipeline Generation', description: 'AI-powered pipeline creation based on your codebase' },
                    { name: 'Multi-Stage Deployments', description: 'Intelligent staging and production deployment workflows' },
                    { name: 'Rollback Automation', description: 'Smart rollback mechanisms with live health checks' },
                    { name: 'Parallel Execution', description: 'Optimized parallel job execution for faster deployments' },
                  ],
                },
                {
                  category: 'Infrastructure as Code',
                  capabilities: [
                    { name: 'Terraform Integration', description: 'Native Terraform support with state locking' },
                    { name: 'CloudFormation Support', description: 'AWS CloudFormation template generation and management' },
                    { name: 'ARM & Bicep Templates', description: 'Azure Resource Manager template automation' },
                    { name: 'Pulumi Compatibility', description: 'Modern infrastructure as code with Pulumi' },
                  ],
                },
                {
                  category: 'Container Orchestration',
                  capabilities: [
                    { name: 'Kubernetes Management', description: 'Complete Kubernetes cluster lifecycle management' },
                    { name: 'Docker Optimization', description: 'Container image optimization and vulnerability scanning' },
                    { name: 'Service Mesh Integration', description: 'Istio and Linkerd service mesh automation' },
                    { name: 'Auto-scaling Policies', description: 'Intelligent horizontal and vertical pod autoscaling' },
                  ],
                },
                {
                  category: 'Monitoring & Observability',
                  capabilities: [
                    { name: 'Prometheus Integration', description: 'Automated metrics collection, telemetry, and alerting' },
                    { name: 'Grafana Dashboards', description: 'AI-generated dashboards for comprehensive monitoring' },
                    { name: 'Log Aggregation', description: 'Centralized logging with ELK and OpenSearch integration' },
                    { name: 'Distributed Tracing', description: 'Jaeger and OpenTelemetry tracing for microservices' },
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
                    {category.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="border-l-2 border-[#8B5CF6] pl-4">
                        <h4 className="font-semibold text-white text-sm sm:text-base">{capability.name}</h4>
                        <p className="text-xs sm:text-sm text-[#B8B6C4] mt-0.5">{capability.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Cloud & Tool Integrations */}
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
                Cloud & Tool Integrations
              </h2>
              <p className="text-base sm:text-lg text-[#B8B6C4] max-w-3xl mx-auto leading-relaxed">
                CogniOps works natively with all major cloud providers and DevOps tools.
              </p>
            </motion.div>

            <div className="space-y-12">
              {/* Cloud Providers */}
              <div>
                <h3 className="text-lg font-bold text-[#A78BFA] uppercase tracking-wider mb-6 text-center">
                  Cloud Providers
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { name: 'AWS', logo: 'aws-icon.webp' },
                    { name: 'Microsoft Azure', logo: 'azure_icon.webp' },
                    { name: 'Google Cloud', logo: 'GCP_icon.png' },
                    { name: 'DigitalOcean', logo: 'digitalocean_icon.png' },
                  ].map((cloud, index) => (
                    <motion.div
                      key={cloud.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-[#15151D]/90 border border-[#29263A] p-6 rounded-2xl text-center hover:border-[#8B5CF6]/50 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center group shadow-md"
                    >
                      <NextImage
                        src={`/images/external-integrations/${cloud.logo}`}
                        alt={cloud.name}
                        width={50}
                        height={50}
                        className="mb-3 group-hover:scale-110 transition-transform duration-300 filter brightness-110"
                        onError={(e) => {
                          (e.currentTarget as any).style.display = 'none';
                        }}
                      />
                      <span className="font-semibold text-white text-sm">{cloud.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* DevOps Tools */}
              <div>
                <h3 className="text-lg font-bold text-[#A78BFA] uppercase tracking-wider mb-6 text-center">
                  DevOps Ecosystem
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    { name: 'Kubernetes', logo: 'kubernates_icon.png' },
                    { name: 'Docker', logo: 'Docker-icon.png' },
                    { name: 'GitHub', logo: 'github_icon.png' },
                    { name: 'GitLab', logo: 'gitlab_icon.png' },
                    { name: 'Jenkins', logo: 'jenkins_logo.png' },
                    { name: 'Bitbucket', logo: 'bitbucket_icon.webp' },
                    { name: 'Jira', logo: 'jira_icon.jpg' },
                    { name: 'Slack', logo: 'slack_icon.webp' },
                    { name: 'Teams', logo: 'teams_icon.png' },
                    { name: 'Grafana', logo: 'grafana_icon.png' },
                    { name: 'Argo CD', logo: 'agrocd_icon.png' },
                    { name: 'ELK Stack', logo: 'elkstack_icon.png' },
                  ].map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (index % 6) * 0.05 }}
                      className="bg-[#15151D]/90 border border-[#29263A] p-4 rounded-xl text-center hover:border-[#8B5CF6]/50 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center group shadow-md"
                    >
                      <NextImage
                        src={`/images/external-integrations/${tool.logo}`}
                        alt={tool.name}
                        width={36}
                        height={36}
                        className="mb-2 group-hover:scale-110 transition-transform duration-300 filter brightness-110"
                        onError={(e) => {
                          (e.currentTarget as any).style.display = 'none';
                        }}
                      />
                      <span className="font-medium text-white text-xs">{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Intelligent DevOps Automation Workflow */}
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
                Intelligent DevOps{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC]">
                  Automation
                </span>
              </h2>
              <p className="text-base sm:text-lg text-[#B8B6C4] max-w-3xl mx-auto">
                Streamline your operations with AI-powered cloud management and deployment automation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Infrastructure Analysis',
                  description:
                    'AI scans your current infrastructure and identifies optimization opportunities across multi-cloud environments.',
                  icon: MagnifyingGlassIcon,
                },
                {
                  step: '02',
                  title: 'Automated Deployment',
                  description:
                    'Intelligent pipelines orchestrate seamless deployments with zero-downtime strategies and rollback capabilities.',
                  icon: RocketLaunchIcon,
                },
                {
                  step: '03',
                  title: 'Real-time Monitoring',
                  description:
                    'Advanced telemetry tracks metrics and automatically scales resources based on live traffic patterns.',
                  icon: PresentationChartBarIcon,
                },
                {
                  step: '04',
                  title: 'Continuous Optimization',
                  description:
                    'Machine learning algorithms continuously optimize cloud costs, resource usage, and security policies.',
                  icon: BoltIcon,
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

            {/* End-to-End DevOps Pipeline Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 bg-[#15151D]/90 rounded-3xl p-8 border border-[#29263A] shadow-[0_15px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">End-to-End DevOps Pipeline</h3>
                <p className="text-sm text-[#B8B6C4]">
                  From code commit to production with intelligent automation
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {[
                  { label: 'Code Integration', icon: ComputerDesktopIcon },
                  { label: 'Build & Test', icon: WrenchScrewdriverIcon },
                  { label: 'Container Deploy', icon: CubeIcon },
                  { label: 'Monitor & Scale', icon: ChartBarIcon },
                  { label: 'Optimize & Secure', icon: ShieldCheckIcon },
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

        {/* 9. CTA Section */}
        <CTASection theme="dark" />
      </div>
    </PageLayout>
  );
};

export default CogniOpsPage;