'use client';
import React from 'react';
import NextImage from 'next/image';
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
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const CogniOpsPage = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-blue-light text-brand-white py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-brand-blue-light/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-brand-blue-light/10 rounded-full blur-2xl animate-pulse [animation-delay:1s]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                className="inline-flex items-center bg-brand-yellow/20 text-brand-yellow px-4 py-2 rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CogIcon className="w-4 h-4 mr-2" />
                AI-Powered Operations
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Cogni<span className="text-brand-yellow">Ops</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl font-medium text-brand-light-grey mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Smart DevOps Automation Platform
              </motion.p>

              <p className="text-lg text-brand-light-grey mb-8 max-w-xl leading-relaxed">
                Transform your operations with AI that optimizes your entire infrastructure. Automate deployments, predict issues, and scale intelligently.
              </p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button className="bg-brand-yellow hover:bg-brand-yellow-dark text-brand-black px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
                  See Platform Demo
                </button>
              </motion.div>
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
                    <h3 className="text-xl font-bold text-brand-blue text-center mb-2">AI Ops Center</h3>
                    <p className="text-brand-dark-grey text-sm text-center">Intelligent operations control</p>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -left-4 bg-brand-blue rounded-xl p-3 shadow-lg"
                >
                  <CloudIcon className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -right-4 bg-brand-blue-light rounded-xl p-3 shadow-lg"
                >
                  <ServerIcon className="w-6 h-6 text-brand-blue" />
                </motion.div>

                <motion.div
                  animate={{ y: [-5, 15, -5] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                  className="absolute top-1/2 -right-8 bg-brand-blue-dark rounded-xl p-3 shadow-lg"
                >
                  <RocketLaunchIcon className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #2563eb 0%, transparent 50%), radial-gradient(circle at 75% 75%, #93C5FD 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark-grey mb-6">
              Operations Excellence <span className="text-brand-blue">Achieved</span>
            </h2>
            <p className="text-xl text-brand-dark-grey max-w-3xl mx-auto leading-relaxed">
              Our AI-powered operations platform delivers unmatched reliability and efficiency
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                number: "99.9%",
                label: "System Uptime",
                description: "Guaranteed reliability",
                icon: RocketLaunchIcon,
                gradient: "from-brand-blue-light1 to-white",
                border: "border-brand-blue-light"
              },
              {
                number: "75%",
                label: "Faster Deployments",
                description: "Reduced time to market",
                icon: BoltIcon,
                gradient: "from-brand-blue-light1 to-white",
                border: "border-brand-blue-light"
              },
              {
                number: "10K+",
                label: "Deployments Daily",
                description: "Across all environments",
                icon: ArrowPathIcon,
                gradient: "from-brand-blue-light1 to-white",
                border: "border-brand-blue-light"
              },
              {
                number: "24/7",
                label: "AI Monitoring",
                description: "Continuous optimization",
                icon: CogIcon,
                gradient: "from-brand-blue-light1 to-white",
                border: "border-brand-blue-light"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${stat.gradient} backdrop-blur-sm border-2 ${stat.border} rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 group shadow-soft`}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <stat.icon className="w-12 h-12 text-black" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-brand-dark-grey mb-1">{stat.label}</div>
                <div className="text-sm text-brand-medium-grey">{stat.description}</div>
              </motion.div>
            ))}
          </div>

          {/* Success Stories Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white backdrop-blur-sm border-2 border-brand-blue-light rounded-3xl p-8 text-center shadow-soft"
          >
            <h3 className="text-2xl font-bold text-brand-blue mb-4"><span className="text-brand-dark-grey">Trusted by</span> DevOps Teams Globally</h3>
            <p className="text-brand-dark-grey mb-6 max-w-2xl mx-auto">
              From startups to enterprise, teams rely on CogniOps to scale their operations efficiently
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-80">
              <div className="text-brand-dark-grey border-2 border-brand-blue rounded-2xl px-2 py-2 font-semibold">CloudScale</div>
              <div className="text-brand-dark-grey border-2 border-brand-blue rounded-2xl px-2 py-2 font-semibold">DevMasters</div>
              <div className="text-brand-dark-grey border-2 border-brand-blue rounded-2xl px-2 py-2 font-semibold">OptiFlow</div>
              <div className="text-brand-dark-grey border-2 border-brand-blue rounded-2xl px-2 py-2 font-semibold">InfraCore</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-brand-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-semibold mb-6">
              <CogIcon className="w-4 h-4 mr-2" />
              Streamlined Operations
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-brand-dark-grey mb-6">
              Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-blue-light">DevOps</span> Platform
            </h2>
            <p className="text-xl text-brand-dark-grey max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI-powered DevOps automation that transforms cloud operations with intelligent pipelines and seamless multi-cloud orchestration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Automated Pipeline Creation",
                description: "AI-powered pipeline generation with intelligent Helm charts integration and zero-downtime deployment strategies.",
                icon: CogIcon,
                gradient: "from-brand-blue to-brand-blue-light",
                bgGradient: "from-brand-blue-light1 to-white",
                iconBg: "bg-brand-blue",
                iconColor: "text-white",
                badge: "Core Feature"
              },
              {
                title: "Multi-Cloud Migration",
                description: "Intelligent cloud-to-cloud migration with automated service discovery and configuration preservation across providers.",
                icon: CloudIcon,
                gradient: "from-brand-blue to-brand-blue-light",
                bgGradient: "from-brand-blue-light1 to-white",
                iconBg: "bg-brand-blue",
                iconColor: "text-white",
                badge: "Enterprise"
              },
              {
                title: "Infrastructure Optimization",
                description: "AI-driven infrastructure analysis with cost optimization recommendations and automated resource scaling.",
                icon: ServerIcon,
                gradient: "from-brand-blue to-brand-blue-light",
                bgGradient: "from-brand-blue-light1 to-white",
                iconBg: "bg-brand-blue",
                iconColor: "text-white",
                badge: "Cost Saver"
              },
              {
                title: "Helm Chart Management",
                description: "Automated Helm chart lifecycle management with intelligent dependency resolution and security scanning.",
                icon: RocketLaunchIcon,
                gradient: "from-brand-blue to-brand-blue-light",
                bgGradient: "from-brand-blue-light1 to-white",
                iconBg: "bg-brand-blue",
                iconColor: "text-white",
                badge: "Kubernetes"
              },
              {
                title: "Performance Monitoring",
                description: "Real-time monitoring with predictive analytics, anomaly detection, and automated incident response workflows.",
                icon: ChartBarIcon,
                gradient: "from-brand-blue to-brand-blue-light",
                bgGradient: "from-brand-blue-light1 to-white",
                iconBg: "bg-brand-blue",
                iconColor: "text-white",
                badge: "Real-time"
              },
              {
                title: "Continuous Deployment",
                description: "Intelligent CD pipelines with adaptive deployment strategies and automated rollback capabilities for maximum reliability.",
                icon: ArrowPathIcon,
                gradient: "from-brand-blue to-brand-blue-light",
                bgGradient: "from-brand-blue-light1 to-white",
                iconBg: "bg-brand-blue",
                iconColor: "text-white",
                badge: "Automated"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative overflow-hidden bg-gradient-to-br ${feature.bgGradient} border-2 border-brand-blue-light backdrop-blur-sm rounded-2xl p-8 hover:shadow-soft hover:scale-105 transition-all duration-500 group`}
              >
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${feature.gradient} text-white shadow-soft`}>
                    {feature.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className={`${feature.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-brand-blue mb-4 group-hover:text-brand-blue-dark transition-colors">
                  {feature.title}
                </h3>
                <p className="text-brand-dark-grey leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Action Link */}
                <div className="flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`}>
                    Explore Feature
                  </span>
                  <ArrowPathIcon className={`w-4 h-4 ml-2 text-brand-blue group-hover:rotate-90 transition-transform duration-300`} />
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className={`absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-full blur-lg group-hover:opacity-10 transition-opacity duration-300`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Helm Integration Highlight */}
      <section className="py-20 bg-brand-green-light1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-dark-grey mb-4">
              Seamless <span className="text-brand-blue">Helm Chart Integration</span>
            </h2>
            <p className="text-xl text-brand-dark-grey max-w-3xl mx-auto">
              Native Helm support with intelligent chart generation and management for Kubernetes deployments
            </p>
          </motion.div>

          <div className="bg-white border-2 border-brand-blue-light rounded-2xl shadow-soft p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-dark-grey mb-6">
                  Intelligent <span className="text-brand-blue">Helm Management</span>
                </h3>
                <div className="space-y-4">
                  {[
                    "Automated Helm chart generation",
                    "Intelligent dependency resolution",
                    "Version management and rollbacks",
                    "Multi-environment deployments",
                    "Security scanning and compliance"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <RocketLaunchIcon className="w-5 h-5 text-brand-blue" />
                      <span className="text-brand-dark-grey">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-brand-blue-light1 to-white rounded-xl p-8 text-center border-2 border-brand-blue-light">
                <ServerIcon className="w-24 h-24 text-brand-blue mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-brand-blue mb-2">
                  Kubernetes Native
                </h4>
                <p className="text-brand-dark-grey">
                  Built for Kubernetes with native Helm support, ensuring seamless integration with your existing infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Migration Section */}
      <section className="py-20 bg-brand-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-dark-grey  mb-4">
              Intelligent <span className="text-brand-blue">Cloud Migration</span>
            </h2>
            <p className="text-xl text-brand-dark-grey max-w-3xl mx-auto">
              Migrate between any cloud providers with zero downtime and preserved service configurations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AWS to Azure",
                description: "Seamless migration from AWS to Microsoft Azure with service mapping and optimization",
                features: ["EC2 to VM mapping", "S3 to Blob Storage", "RDS to SQL Database", "Lambda to Functions"]
              },
              {
                title: "Azure to GCP",
                description: "Intelligent migration from Azure to Google Cloud Platform with cost optimization",
                features: ["VM to Compute Engine", "Blob to Cloud Storage", "SQL to Cloud SQL", "Functions to Cloud Functions"]
              },
              {
                title: "GCP to AWS",
                description: "Complete migration from Google Cloud to AWS with performance enhancement",
                features: ["Compute to EC2", "Storage to S3", "Cloud SQL to RDS", "Cloud Functions to Lambda"]
              }
            ].map((migration, index) => (
              <motion.div
                key={migration.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-brand-blue-light1 border-2 border-brand-blue-light rounded-xl p-8 shadow-soft"
              >
                <h3 className="text-2xl font-bold text-brand-blue mb-4">{migration.title}</h3>
                <p className="text-brand-dark-grey mb-6">{migration.description}</p>
                <ul className="space-y-3">
                  {migration.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <ArrowPathIcon className="w-5 h-5 text-brand-blue mr-3" />
                      <span className="text-brand-dark-grey">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Capabilities Section */}
      <section className="py-20 bg-brand-yellow-light1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-dark-grey mb-4">
              Complete <span className="text-brand-blue">DevOps Automation</span>
            </h2>
            <p className="text-xl text-brand-dark-grey max-w-3xl mx-auto">
              End-to-end DevOps capabilities from code to production with intelligent automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: "CI/CD Pipelines",
                capabilities: [
                  { name: "Automated Pipeline Generation", description: "AI-powered pipeline creation based on your codebase" },
                  { name: "Multi-Stage Deployments", description: "Intelligent staging and production deployment workflows" },
                  { name: "Rollback Automation", description: "Smart rollback mechanisms with health checks" },
                  { name: "Parallel Execution", description: "Optimized parallel job execution for faster deployments" }
                ]
              },
              {
                category: "Infrastructure as Code",
                capabilities: [
                  { name: "Terraform Integration", description: "Native Terraform support with state management" },
                  { name: "CloudFormation Support", description: "AWS CloudFormation template generation and management" },
                  { name: "ARM Templates", description: "Azure Resource Manager template automation" },
                  { name: "Pulumi Compatibility", description: "Modern infrastructure as code with Pulumi" }
                ]
              },
              {
                category: "Container Orchestration",
                capabilities: [
                  { name: "Kubernetes Management", description: "Complete Kubernetes cluster lifecycle management" },
                  { name: "Docker Optimization", description: "Container image optimization and security scanning" },
                  { name: "Service Mesh Integration", description: "Istio and Linkerd service mesh automation" },
                  { name: "Auto-scaling", description: "Intelligent horizontal and vertical pod autoscaling" }
                ]
              },
              {
                category: "Monitoring & Observability",
                capabilities: [
                  { name: "Prometheus Integration", description: "Automated metrics collection and alerting" },
                  { name: "Grafana Dashboards", description: "AI-generated dashboards for comprehensive monitoring" },
                  { name: "Log Aggregation", description: "Centralized logging with ELK stack integration" },
                  { name: "Distributed Tracing", description: "Jaeger and Zipkin tracing for microservices" }
                ]
              }
            ].map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white border-2 border-brand-blue-light rounded-xl p-8 shadow-soft"
              >
                <h3 className="text-2xl font-bold text-brand-blue mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="border-l-4 border-brand-blue pl-4">
                      <h4 className="font-semibold text-brand-dark-grey">{capability.name}</h4>
                      <p className="text-brand-medium-grey text-sm mt-1">{capability.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-brand-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-blue mb-4">
              Measurable Impact
            </h2>
            <p className="text-xl text-brand-dark-grey max-w-3xl mx-auto">
              Organizations using CogniOps see dramatic improvements in deployment speed and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "80%", label: "Faster Deployments", description: "Automated pipeline optimization" },
              { metric: "95%", label: "Deployment Success Rate", description: "Intelligent rollback and health checks" },
              { metric: "60%", label: "Infrastructure Cost Reduction", description: "AI-powered resource optimization" },
              { metric: "99.9%", label: "System Uptime", description: "Proactive monitoring and auto-healing" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-brand-blue-light1 border-2 border-brand-blue-light p-8 rounded-xl shadow-soft"
              >
                <div className="text-4xl font-bold text-brand-blue mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold text-brand-dark-grey mb-2">{stat.label}</div>
                <div className="text-brand-medium-grey">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-dark-grey mb-4">
              Cloud & <span className="text-brand-blue">Tool Integrations</span>
            </h2>
            <p className="text-xl text-brand-dark-grey max-w-3xl mx-auto">
              CogniOps works with all major cloud providers and DevOps tools
            </p>
          </motion.div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-brand-dark-grey mb-8 text-center">Cloud Providers</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "AWS", logo: "aws-icon.webp" },
                  { name: "Microsoft Azure", logo: "azure_icon.webp" },
                  { name: "Google Cloud", logo: "GCP_icon.png" },
                  { name: "DigitalOcean", logo: "digitalocean_icon.png" },
                ].map((cloud, index) => (
                  <motion.div
                    key={cloud.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white border-2 border-brand-blue-light p-6 rounded-xl text-center hover:shadow-soft hover:border-brand-blue transition-all duration-300 flex flex-col items-center justify-center group"
                  >
                    <NextImage
                      src={`/images/external-integrations/${cloud.logo}`}
                      alt={cloud.name}
                      width={60}
                      height={60}
                      className="mb-3 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="font-semibold text-brand-dark-grey">{cloud.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-8 text-center">DevOps Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: "Kubernetes", logo: "kubernates_icon.png" },
                  { name: "Docker", logo: "Docker-icon.png" },
                  { name: "GitHub", logo: "github_icon.png" },
                  { name: "GitLab", logo: "gitlab_icon.png" },
                  { name: "Jenkins", logo: "jenkins_logo.png" },
                  { name: "Bitbucket", logo: "bitbucket_icon.webp" },
                  { name: "Jira", logo: "jira_icon.jpg" },
                  { name: "Slack", logo: "slack_icon.webp" },
                  { name: "Teams", logo: "teams_icon.png" },
                  { name: "Grafana", logo: "grafana_icon.png" },
                  { name: "Agro CD", logo: "agrocd_icon.png" },
                  { name: "ELK Stack", logo: "elkstack_icon.png" },
                ].map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white border-2 border-brand-blue-light p-4 rounded-xl text-center hover:shadow-soft hover:border-brand-blue transition-all duration-300 flex flex-col items-center justify-center group"
                  >
                    <NextImage
                      src={`/images/external-integrations/${tool.logo}`}
                      alt={tool.name}
                      width={40}
                      height={40}
                      className="mb-2 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="font-semibold text-brand-dark-grey text-sm">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Automation Process Flow */}
      <section className="py-20 bg-brand-yellow-light1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-dark-grey mb-4">
              Intelligent DevOps <span className="text-brand-blue">Automation</span>
            </h2>
            <p className="text-xl text-brand-dark-grey max-w-3xl mx-auto">
              Streamline your operations with AI-powered cloud management and deployment automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Infrastructure Analysis",
                description: "AI scans your current infrastructure and identifies optimization opportunities across multi-cloud environments.",
                icon: MagnifyingGlassIcon,
                color: "from-brand-blue to-brand-blue-light",
                bgColor: "bg-white",
                borderColor: "border-brand-blue-light"
              },
              {
                step: "02",
                title: "Automated Deployment",
                description: "Intelligent pipelines orchestrate seamless deployments with zero-downtime strategies and rollback capabilities.",
                icon: RocketLaunchIcon,
                color: "from-brand-blue to-brand-blue-light",
                bgColor: "bg-white",
                borderColor: "border-brand-blue-light"
              },
              {
                step: "03",
                title: "Real-time Monitoring",
                description: "Advanced monitoring systems track performance metrics and automatically scale resources based on demand.",
                icon: PresentationChartBarIcon,
                color: "from-brand-blue to-brand-blue-light",
                bgColor: "bg-white",
                borderColor: "border-brand-blue-light"
              },
              {
                step: "04",
                title: "Continuous Optimization",
                description: "Machine learning algorithms continuously optimize costs, performance, and security across your entire stack.",
                icon: BoltIcon,
                color: "from-brand-blue to-brand-blue-light",
                bgColor: "bg-white",
                borderColor: "border-brand-blue-light"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${process.bgColor} border-2 ${process.borderColor} rounded-xl p-6 text-center hover:shadow-soft transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className={`bg-gradient-to-r ${process.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-soft`}>
                    {process.step}
                  </span>
                </div>

                <div className="mb-4 mt-2 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <process.icon className="w-12 h-12 text-brand-blue" />
                </div>

                <h3 className="text-lg font-bold text-brand-dark-grey mb-3">{process.title}</h3>
                <p className="text-brand-medium-grey text-sm leading-relaxed">{process.description}</p>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${process.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl`}></div>
              </motion.div>
            ))}
          </div>

          {/* DevOps Pipeline Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-white rounded-2xl p-8 shadow-soft border-2 border-brand-blue-light"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brand-blue mb-2">End-to-End DevOps Pipeline</h3>
              <p className="text-brand-dark-grey">From code to production with intelligent automation</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
              {[
                { label: "Code Integration", icon: ComputerDesktopIcon, color: "bg-brand-blue-light1" },
                { label: "Build & Test", icon: WrenchScrewdriverIcon, color: "bg-brand-blue-light1" },
                { label: "Container Deploy", icon: CubeIcon, color: "bg-brand-blue-light1" },
                { label: "Monitor & Scale", icon: ChartBarIcon, color: "bg-brand-blue-light1" },
                { label: "Optimize & Secure", icon: ShieldCheckIcon, color: "bg-brand-blue-light1" }
              ].map((step, index) => (
                <React.Fragment key={index}>
                  <div className={`${step.color} border border-brand-blue-light rounded-xl p-4 text-center min-w-[120px] hover:scale-105 hover:border-brand-blue transition-all duration-200`}>
                    <div className="mb-2 flex justify-center">
                      <step.icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div className="text-sm font-semibold text-brand-blue">{step.label}</div>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block text-brand-blue text-xl">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </PageLayout>
  );
};

export default CogniOpsPage;