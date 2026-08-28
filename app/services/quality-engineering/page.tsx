'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageLayout from '@/components/layout/PageLayout';
import { CTASection } from '@/components/home/CTASection';
import {
  ShieldCheckIcon,
  CogIcon,
  CodeBracketSquareIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  ArrowRightIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

const QualityEngineeringServicesPage = () => {
  const heroData = {
    title: "AI-Driven Quality Engineering",
    subtitle: "Guarantee software reliability, performance, and security with intelligent, automated testing frameworks tailored for modern enterprise applications.",
    features: [
      "AI-Powered Test Generation",
      "Continuous Quality Assurance",
      "Performance Engineering",
      "Security & Compliance Testing",
      "CogniVibe Integration"
    ]
  };

  const serviceOfferings = [
    {
      title: "AI-Powered Test Automation",
      description: "Leverage artificial intelligence to automatically generate, maintain, and optimize test scripts across your entire application ecosystem.",
      icon: CogIcon,
      capabilities: [
        "Automated test case generation",
        "Self-healing test automation",
        "UI and API test automation",
        "Continuous integration pipelines"
      ]
    },
    {
      title: "Performance Engineering",
      description: "Ensure your applications can handle high loads and scale seamlessly with comprehensive performance profiling and testing.",
      icon: ChartBarIcon,
      capabilities: [
        "Load and stress testing",
        "Scalability assessment",
        "Bottleneck identification",
        "Real-time performance monitoring"
      ]
    },
    {
      title: "Security & Compliance Testing",
      description: "Identify vulnerabilities and ensure adherence to industry standards with proactive security assurance protocols.",
      icon: ShieldCheckIcon,
      capabilities: [
        "Vulnerability scanning",
        "Penetration testing",
        "Compliance auditing (GDPR, HIPAA)",
        "Static and dynamic code analysis"
      ]
    },
    {
      title: "API & Integration Testing",
      description: "Validate the reliability and performance of your APIs and microservices integrations.",
      icon: CodeBracketSquareIcon,
      capabilities: [
        "Contract testing",
        "Microservices validation",
        "Third-party API integration tests",
        "Data flow verification"
      ]
    },
    {
      title: "Quality Analytics & Reporting",
      description: "Gain deep insights into software quality metrics to make informed decisions and accelerate release cycles.",
      icon: CheckBadgeIcon,
      capabilities: [
        "Quality dashboard creation",
        "Defect prediction models",
        "Release readiness scoring",
        "Actionable quality metrics"
      ]
    },
    {
      title: "Specialized Testing",
      description: "Targeted quality assurance for emerging technologies and complex architectures including AI, IoT, and Blockchain.",
      icon: BeakerIcon,
      capabilities: [
        "AI Agents Testing",
        "Vibe Coded Application Testing",
        "AI/ML model testing",
        "IoT device testing"
      ]
    }
  ];

  const technologyStack = [
    {
      category: "Test Automation",
      icon: <CodeBracketSquareIcon className="w-6 h-6 text-brand-blue" />,
      technologies: [
        { name: "Selenium", logo: "/images/external-integrations/selenium_icon.png" },
        { name: "Playwright", logo: "/images/external-integrations/playwright_icon.png" },
        { name: "Cypress", logo: "/images/external-integrations/cypress_icon.png" },
        { name: "Jest", logo: "/images/external-integrations/jest_icon.jpg" }
      ]
    },
    {
      category: "Performance Testing",
      icon: <ChartBarIcon className="w-6 h-6 text-brand-blue" />,
      technologies: [
        { name: "JMeter", logo: "https://cdn.simpleicons.org/apachejmeter" },
        { name: "Gatling", logo: "https://cdn.simpleicons.org/gatling" },
        { name: "k6", logo: "https://cdn.simpleicons.org/k6" }
      ]
    },
    {
      category: "CI/CD & DevOps",
      icon: <CogIcon className="w-6 h-6 text-brand-blue" />,
      technologies: [
        { name: "Jenkins", logo: "/images/external-integrations/jenkins_logo.png" },
        { name: "GitLab CI", logo: "/images/external-integrations/gitlab_icon.png" },
        { name: "GitHub Actions", logo: "/images/external-integrations/github_icon.png" },
        { name: "Azure DevOps", logo: "/images/external-integrations/azure_icon.webp" }
      ]
    },
    {
      category: "Quality Management",
      icon: <ShieldCheckIcon className="w-6 h-6 text-brand-blue" />,
      technologies: [
        { name: "TestRail", logo: "/images/external-integrations/testrail_icon.png" },
        { name: "Jira", logo: "/images/external-integrations/jira_icon.jpg" },
        { name: "TestNG", logo: "/images/external-integrations/test_icon.png" },
        { name: "Azure DevOps", logo: "/images/external-integrations/azure_icon.webp" }
      ]
    }
  ];

  return (
    <PageLayout>
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.45, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 -right-32 w-80 h-80 bg-teal-600/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-indigo-50 via-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            {heroData.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-10"
          >
            {heroData.subtitle}
          </motion.p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {heroData.features.map((f, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4, type: "spring", stiffness: 300 }}
                className="px-5 py-2.5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm"
              >
                {f}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="group inline-flex items-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-200"
            >
              Start Quality Project
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>

            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(37,99,235,0.1)" }}
              className="inline-flex items-center gap-2 border-2 border-[#2563eb] text-[#2563eb] px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              Quality Assessment
            </motion.a>
          </div>
        </div>
      </section>

      {/* 6 Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Quality Engineering Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ensure flawless delivery with end-to-end quality assurance powered by automation and AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serviceOfferings.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.15 }
                }}
                className="group relative bg-white p-8 rounded-2xl 
                          border border-gray-200 hover:border-[#2563eb]/50
                          transition-colors duration-300 
                          flex flex-col h-full min-h-[420px]"
              >

                <div className="w-14 h-14 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2563eb] transition-all duration-300">
                  <service.icon className="w-8 h-8 text-[#2563eb] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 text-sm text-gray-600 flex-1">
                  {service.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#2563eb] mr-2 mt-0.5">•</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>

                {/* Subtle border at bottom for visual grounding */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2563eb]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Quality Engineering Tech Stack
            </h2>
            <p className="text-lg text-gray-600">
              Modern tools and frameworks for comprehensive testing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologyStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-blue/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100">
                  <div className="p-3 bg-brand-blue/5 rounded-xl group-hover:bg-brand-blue/10 transition-colors">
                    {React.cloneElement(tech.icon as React.ReactElement, { className: "w-8 h-8 text-brand-blue" })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {tech.category}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-5">
                  {tech.technologies.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-gray-50 transition-colors gap-3">
                      <div className="w-14 h-14 relative flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 p-2.5 group-hover:scale-105 transition-transform duration-300">
                        <Image 
                          src={item.logo} 
                          alt={item.name}
                          fill unoptimized
                          className="object-contain p-2"
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-700 text-center">{item.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
};

export default QualityEngineeringServicesPage;
