'use client';
import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import { CTASection } from '@/components/home/CTASection';
import {
  CodeBracketIcon,
  BeakerIcon,
  CogIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const AIApplicationDevelopmentPage = () => {
  const heroData = {
    title: "AI-Powered Application Development & Testing",
    subtitle: "Transform your development lifecycle with AI-enhanced methodologies and intelligent testing frameworks that accelerate delivery while improving quality.",
    features: [
      "AI-enhanced development methodologies",
      "Intelligent testing automation",
      "Quality assurance with AI-driven insights",
      "CogniVibe and CogniTest integration",
      "Accelerated delivery pipelines"
    ]
  };

  const serviceOfferings = [
    {
      title: "AI-Enhanced Development",
      description: "Leverage AI to accelerate coding, automate repetitive tasks, and improve code quality through intelligent assistance and automated code generation.",
      icon: CodeBracketIcon,
      capabilities: [
        "AI-assisted code generation and completion",
        "Automated code review and optimization",
        "Intelligent refactoring and modernization",
        "Smart debugging and error resolution"
      ]
    },
    {
      title: "Intelligent Testing Frameworks",
      description: "Implement comprehensive testing strategies powered by AI for functional, non-functional, and visual testing with automated test generation.",
      icon: BeakerIcon,
      capabilities: [
        "AI-powered test case generation",
        "Automated regression testing",
        "Visual testing with CogniPixel",
        "Performance and load testing automation"
      ]
    },
    {
      title: "Quality Assurance with AI",
      description: "Ensure superior software quality through AI-driven insights, predictive analytics, and automated quality gates throughout the development process.",
      icon: ShieldCheckIcon,
      capabilities: [
        "Predictive quality analytics",
        "Automated quality gates",
        "Risk assessment and mitigation",
        "Continuous quality monitoring"
      ]
    },
    {
      title: "DevOps Integration",
      description: "Seamlessly integrate AI-powered development and testing into your DevOps pipelines for continuous delivery and deployment automation.",
      icon: CogIcon,
      capabilities: [
        "CI/CD pipeline optimization",
        "Automated deployment strategies",
        "Infrastructure as Code integration",
        "Monitoring and observability"
      ]
    },
    {
      title: "Performance Optimization",
      description: "Optimize application performance using AI-driven analysis, automated profiling, and intelligent resource allocation strategies.",
      icon: ChartBarIcon,
      capabilities: [
        "AI-powered performance analysis",
        "Automated optimization recommendations",
        "Resource usage optimization",
        "Scalability planning and testing"
      ]
    },
    {
      title: "Rapid Prototyping & MVP",
      description: "Accelerate time-to-market with AI-assisted rapid prototyping, MVP development, and iterative improvement cycles.",
      icon: RocketLaunchIcon,
      capabilities: [
        "AI-assisted rapid prototyping",
        "MVP development acceleration",
        "User feedback integration",
        "Iterative improvement cycles"
      ]
    }
  ];

  return (
    <PageLayout>

      {/* Hero Section with Enhanced Animated Background */}
      <section className="relative pt-32 pb-24 bg-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Circles */}
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-brand-blue/25 rounded-full blur-3xl"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl"
            animate={{
              y: [0, 40, 0],
              x: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-80 h-80 bg-brand-blue-light/25 rounded-full blur-3xl"
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Floating Dots */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-brand-blue/50 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Geometric Shapes */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-brand-blue/40 rounded-lg"
            animate={{
              rotate: [0, 90, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-blue-500/40"
            animate={{
              rotate: [0, -90, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.10]" style={{
            backgroundImage: `linear-gradient(to right, #1a4f8c 1px, transparent 1px),
                             linear-gradient(to bottom, #1a4f8c 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
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
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="group inline-flex items-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-200"
            >
              Start Your Project
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(37,99,235,0.1)" }}
              className="inline-flex items-center gap-2 border-2 border-[#2563eb] text-[#2563eb] px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              View Case Studies
            </motion.a>
          </div>
        </div>
      </section>

      {/* 6 Cards – ALL SAME HEIGHT, FULL CONTENT PRESERVED */}
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
              Comprehensive AI Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered development and testing services transform how you build, test, and deploy applications
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
                      <div className="w-1.5 h-1.5 bg-[#FBBF24] rounded-full mr-2 mt-1.5 flex-shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>

                {/* <div className="mt-8 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-[#2563eb] font-medium text-sm group-hover:translate-x-2 transition-transform duration-200">
                    Learn more <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </div>
                </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration & CTA – unchanged */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
          >
            Seamless Solution Integration
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {["CogniVibe", "CogniTest"].map((name, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, type: "spring", stiffness: 400 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white py-12 rounded-2xl border border-gray-200 font-semibold text-gray-800 transition-all duration-200"
              >
                {name}
                <p className="text-sm text-gray-600 mt-2">
                  {name === "CogniVibe" ? "AI-powered SDLC framework" : "Complete AI testing automation"}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
};

export default AIApplicationDevelopmentPage;