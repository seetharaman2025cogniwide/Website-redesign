'use client';
import React from 'react';
import NextImage from 'next/image';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import Link from 'next/link';
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
  PresentationChartBarIcon
} from '@heroicons/react/24/outline';

const CogniTestPage = () => {
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
                <BeakerIcon className="w-4 h-4 mr-2" />
                AI-Powered Testing
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Cogni<span className="text-brand-yellow">Test</span>
              </motion.h1>

              <motion.h2
                className="text-xl md:text-2xl font-medium text-brand-light-grey mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                AI-Powered Testing Automation Platform
              </motion.h2>

              <p className="text-lg text-brand-light-grey mb-8 max-w-xl leading-relaxed">
                Revolutionize your testing process with AI that understands your application. Generate intelligent tests, catch visual bugs, and ensure quality at every step.
              </p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
              <Link href="/contact" className="bg-brand-yellow hover:bg-brand-yellow-dark text-brand-black px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg inline-block text-center">
                  Schedule demo
              </Link>
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
                    <h3 className="text-xl font-bold text-brand-blue text-center mb-2">AI Test Engine</h3>
                    <p className="text-brand-dark-grey text-sm text-center">Intelligent test automation</p>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -left-4 bg-brand-blue rounded-xl p-3 shadow-lg"
                >
                  <EyeIcon className="w-6 h-6 text-white" />
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
                  className="absolute top-1/2 -right-8 bg-brand-blue rounded-xl p-3 shadow-lg"
                >
                  <ChartBarIcon className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="relative py-24 bg-brand-light-grey overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #2563eb 0%, transparent 50%), radial-gradient(circle at 75% 75%, #729d0dad 0%, transparent 50%)`
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
              Testing Excellence <span className="text-brand-blue">Delivered</span>
            </h2>
            <p className="text-xl text-brand-dark-grey max-w-3xl mx-auto leading-relaxed">
              Our AI-powered testing platform delivers measurable results across all testing dimensions
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                number: "99.7%",
                label: "Test Accuracy",
                description: "AI-powered precision",
                icon: ChartBarIcon,
                gradient: "from-brand-blue/10 to-brand-blue-light/10",
                border: "border-brand-blue-light"
              },
              {
                number: "85%",
                label: "Faster Testing",
                description: "Reduced test cycles",
                icon: BoltIcon,
                gradient: "from-brand-blue/10 to-brand-blue-light/10",
                border: "border-brand-blue-light"
              },
              {
                number: "50M+",
                label: "Tests Executed",
                description: "Across all platforms",
                icon: BeakerIcon,
                gradient: "from-brand-blue/10 to-brand-blue-light/10",
                border: "border-brand-blue-light"
              },
              {
                number: "24/7",
                label: "Continuous Testing",
                description: "Always monitoring",
                icon: ArrowPathIcon,
                gradient: "from-brand-blue/10 to-brand-blue-light/10",
                border: "border-brand-blue-light"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${stat.gradient} bg-white backdrop-blur-sm border-2 ${stat.border} rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 group shadow-soft hover:shadow-medium`}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <stat.icon className="w-12 h-12 text-brand-blue" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-brand-dark-grey mb-1">{stat.label}</div>
                <div className="text-sm text-brand-medium-grey">{stat.description}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-semibold mb-6 border border-brand-blue">
              <BeakerIcon className="w-4 h-4 mr-2" />
              Smart Test Generation
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-brand-dark-grey mb-6">
              Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-blue-light">Testing</span> Platform
            </h2>
            <p className="text-xl text-brand-dark-grey max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI-powered testing capabilities that transform how you ensure quality and accelerate development cycles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Functional Test Automation",
                description: "AI-generated functional tests that intelligently adapt to UI changes and provide comprehensive coverage across all user journeys.",
                icon: BeakerIcon,
                gradient: "from-brand-blue to-brand-blue-light",
                bgGradient: "from-brand-blue-light1 to-white",
                iconBg: "bg-brand-blue",
                iconColor: "text-white",
                badge: "Core Feature"
              },
              {
                title: "CogniPixel Visual Testing",
                description: "Pixel-perfect visual regression testing with AI-powered false positive reduction that catches UI issues before production.",
                icon: PhotoIcon,
                gradient: "from-brand-blue to-brand-blue-light",
                bgGradient: "from-brand-blue-light1 to-white",
                iconBg: "bg-brand-blue",
                iconColor: "text-white",
                badge: "Exclusive"
              },
              {
                title: "Intelligent Test Data",
                description: "AI-powered test data generation that creates realistic, diverse datasets with privacy compliance and edge case coverage.",
                icon: CogIcon,
                gradient: "from-brand-blue to-brand-blue-light",
                bgGradient: "from-brand-blue-light1 to-white",
                iconBg: "bg-brand-blue",
                iconColor: "text-white",
                badge: "AI-Powered"
              },
              {
                title: "Performance Testing",
                description: "Automated performance and load testing with intelligent bottleneck analysis and optimization recommendations.",
                icon: ChartBarIcon,
                gradient: "from-brand-blue to-brand-blue-light",
                bgGradient: "from-brand-blue-light1 to-white",
                iconBg: "bg-brand-blue",
                iconColor: "text-white",
                badge: "Enterprise"
              },
              {
                title: "Quality Analytics",
                description: "Advanced analytics dashboard with real-time insights into test coverage, quality metrics, and predictive quality trends.",
                icon: EyeIcon,
                gradient: "from-brand-blue to-brand-blue-light",
                bgGradient: "from-brand-blue-light1 to-white",
                iconBg: "bg-brand-blue",
                iconColor: "text-white",
                badge: "Analytics"
              },
              {
                title: "Continuous Quality Gates",
                description: "Intelligent quality gates with automated decision-making that ensures only production-ready code advances through pipelines.",
                icon: CheckCircleIcon,
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
                className={`relative overflow-hidden bg-gradient-to-br ${feature.bgGradient} border-2 border-brand-blue-light backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-500 group`}
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
                <h3 className="text-xl font-bold text-brand-dark-grey mb-4 group-hover:text-brand-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-brand-dark-grey leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Action Link */}
                <div className="flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`}>
                    Learn More
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

      {/* CogniPixel Highlight */}
      <section className="py-20 bg-brand-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-dark-grey mb-4">
              CogniPixel Technology
            </h2>
            <p className="text-xl text-brand-dark-grey max-w-3xl mx-auto">
              Revolutionary pixel-perfect visual testing that catches UI regressions before they reach production
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 border-2 border-brand-blue-light">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-dark-grey mb-6">
                  Pixel-Perfect Accuracy
                </h3>
                <div className="space-y-4">
                  {[
                    "Detects 1-pixel differences automatically",
                    "AI-powered false positive reduction",
                    "Cross-browser visual consistency",
                    "Responsive design validation",
                    "Automated baseline management"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-5 h-5 text-brand-blue" />
                      <span className="text-brand-dark-grey">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-brand-blue-light1 rounded-xl p-8 text-center border-2 border-brand-blue-light shadow-soft">
                <PhotoIcon className="w-24 h-24 text-brand-blue mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-brand-dark-grey mb-2">
                  Visual Regression Detection
                </h4>
                <p className="text-brand-dark-grey">
                  Advanced computer vision algorithms ensure your UI looks perfect across all devices and browsers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Types Section */}
      <section className="py-20 bg-brand-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-dark-grey mb-4">
              Complete Testing Coverage
            </h2>
            <p className="text-xl text-brand-dark-grey max-w-3xl mx-auto">
              From unit tests to end-to-end scenarios, CogniTest covers every aspect of quality assurance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: "Functional Testing",
                tests: [
                  { name: "Unit Testing", description: "Automated unit test generation and execution" },
                  { name: "Integration Testing", description: "API and service integration validation" },
                  { name: "End-to-End Testing", description: "Complete user journey automation" },
                  { name: "Regression Testing", description: "Automated regression test suites" }
                ]
              },
              {
                category: "Non-Functional Testing",
                tests: [
                  { name: "Performance Testing", description: "Load, stress, and scalability testing" },
                  { name: "Security Testing", description: "Vulnerability and penetration testing" },
                  { name: "Accessibility Testing", description: "WCAG compliance validation" },
                  { name: "Compatibility Testing", description: "Cross-browser and device testing" }
                ]
              },
              {
                category: "Visual Testing",
                tests: [
                  { name: "CogniPixel Comparison", description: "Pixel-perfect visual regression detection" },
                  { name: "Responsive Design", description: "Multi-device layout validation" },
                  { name: "Cross-Browser Testing", description: "Visual consistency across browsers" },
                  { name: "Dynamic Content Testing", description: "Animated and interactive element testing" }
                ]
              },
              {
                category: "Data Testing",
                tests: [
                  { name: "Test Data Generation", description: "AI-powered realistic test data creation" },
                  { name: "Database Testing", description: "Data integrity and migration validation" },
                  { name: "API Data Validation", description: "Request/response data verification" },
                  { name: "Data Privacy Testing", description: "PII and GDPR compliance testing" }
                ]
              }
            ].map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-xl p-8 border-2 border-brand-blue-light shadow-soft"
              >
                <h3 className="text-2xl font-bold text-brand-dark-grey mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.tests.map((test, testIndex) => (
                    <div key={testIndex} className="flex items-start space-x-3">
                      <CheckCircleIcon className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-brand-dark-grey">{test.name}</h4>
                        <p className="text-brand-medium-grey text-sm">{test.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-dark-grey mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-brand-dark-grey max-w-3xl mx-auto">
              Organizations using CogniTest see significant improvements in quality and efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "85%", label: "Faster Test Execution", description: "Automated test generation and execution" },
              { metric: "95%", label: "Bug Detection Rate", description: "AI-powered comprehensive coverage" },
              { metric: "70%", label: "Reduced Testing Time", description: "Parallel execution and smart scheduling" },
              { metric: "99.9%", label: "Visual Accuracy", description: "CogniPixel pixel-perfect detection" }
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
              CogniTest integrates with your existing development and testing tools
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
                { name: "Selenium", logo: "selenium_icon.png" },
                { name: "Cypress", logo: "cypress_icon.png" },
                { name: "Playwright", logo: "playwright_icon.png" },
                { name: "Jest", logo: "jest_icon.jpg" },
                { name: "TestNG", logo: "test_icon.png" },
                { name: 'Jenkins', logo: 'jenkins_logo.png' },
                { name: "GitLab", logo: "gitlab_icon.png" },
                { name: "Azure", logo: "azure_icon.webp" },
                { name: "Jira", logo: "jira_icon.jpg" },
                { name: "TestRail", logo: "testrail_icon.png" }
              ].concat([
                { name: "Selenium", logo: "selenium_icon.png" },
                { name: "Cypress", logo: "cypress_icon.png" },
                { name: "Playwright", logo: "playwright_icon.png" },
                { name: "Jest", logo: "jest_icon.jpg" },
                { name: "TestNG", logo: "test_icon.png" },
                { name: 'Jenkins', logo: 'jenkins_logo.png' },
                { name: "GitLab", logo: "gitlab_icon.png" },
                { name: "Azure", logo: "azure_icon.webp" },
                { name: "Jira", logo: "jira_icon.jpg" },
                { name: "TestRail", logo: "testrail_icon.png" }
              ]).map((tool, index) => (
                <motion.div
                  key={`${tool.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: (index % 12) * 0.1 }}
                  className="flex-shrink-0 w-40 p-6 bg-white rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col items-center justify-center group hover:scale-105 border border-brand-grey"
                >
                  <NextImage
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

      {/* AI Testing Process Flow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-dark-grey mb-4">
              AI-Powered Testing <span className="text-brand-blue">Workflow</span>
            </h2>
            <p className="text-xl text-brand-dark-grey max-w-3xl mx-auto">
              Experience intelligent test automation that adapts and learns from your application
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Smart Discovery",
                description: "AI analyzes your application structure and automatically identifies testable components and user flows.",
                icon: MagnifyingGlassIcon,
                color: "from-brand-blue to-brand-blue-light",
                bgColor: "bg-brand-blue-light1",
                borderColor: "border-brand-blue-light"
              },
              {
                step: "02",
                title: "Test Generation",
                description: "Intelligent algorithms create comprehensive test cases covering functional, visual, and edge case scenarios.",
                icon: BeakerIcon,
                color: "from-brand-blue to-brand-blue-light",
                bgColor: "bg-brand-blue-light1",
                borderColor: "border-brand-blue-light"
              },
              {
                step: "03",
                title: "CogniPixel Validation",
                description: "Advanced visual testing compares pixel-perfect screenshots and detects even subtle UI changes.",
                icon: EyeIcon,
                color: "from-brand-blue to-brand-blue-light",
                bgColor: "bg-brand-blue-light1",
                borderColor: "border-brand-blue-light"
              },
              {
                step: "04",
                title: "Adaptive Learning",
                description: "AI learns from test results and continuously optimizes test coverage and accuracy over time.",
                icon: CogIcon,
                color: "from-brand-blue to-brand-blue-light",
                bgColor: "bg-brand-blue-light1",
                borderColor: "border-brand-blue-light"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${process.bgColor} border-2 ${process.borderColor} rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className={`bg-gradient-to-r ${process.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-soft`}>
                    {process.step}
                  </span>
                </div>

                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <process.icon className="w-12 h-12 text-brand-blue" />
                </div>

                <h3 className="text-xl font-bold text-brand-dark-grey mb-4">{process.title}</h3>
                <p className="text-brand-dark-grey leading-relaxed">{process.description}</p>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${process.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl`}></div>
              </motion.div>
            ))}
          </div>

          {/* Process Flow Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-brand-blue-light1 rounded-3xl p-8 shadow-soft border-2 border-brand-blue-light"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Continuous Testing Pipeline</h3>
              <p className="text-brand-dark-grey">Seamlessly integrated into your development workflow</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
              {[
                { label: "Code Commit", icon: DocumentTextIcon, color: "bg-white" },
                { label: "AI Test Generation", icon: CogIcon, color: "bg-white" },
                { label: "Automated Execution", icon: BoltIcon, color: "bg-white" },
                { label: "Visual Validation", icon: EyeIcon, color: "bg-white" },
                { label: "Results & Insights", icon: PresentationChartBarIcon, color: "bg-white" }
              ].map((step, index) => (
                <React.Fragment key={index}>
                  <div className={`${step.color} rounded-xl p-4 text-center min-w-[120px] hover:scale-105 transition-transform duration-200 border border-brand-blue-light shadow-soft`}>
                    <div className="mb-2 flex justify-center">
                      <step.icon className="w-8 h-8 text-brand-blue" />
                    </div>
                    <div className="text-sm font-semibold text-brand-dark-grey">{step.label}</div>
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

export default CogniTestPage;