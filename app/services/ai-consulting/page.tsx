'use client';
import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import { CTASection } from '@/components/home/CTASection';
import {
  LightBulbIcon,
  CogIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const AIConsultingPage = () => {
  const heroData = {
    title: "AI Consulting & Agentic AI Implementation",
    subtitle: "Transform your enterprise with market-leading AI strategy consulting and agentic AI implementation services that drive intelligent automation and business transformation.",
    features: [
      "AI strategy development",
      "Agentic AI architecture design",
      "Enterprise AI transformation",
      "AI governance frameworks",
      "CogniAssist integration"
    ]
  };

  const consultingServices = [
    {
      title: "AI Strategy & Roadmap Development",
      description: "Comprehensive AI strategy development with clear roadmaps, ROI projections, and implementation timelines tailored to your business objectives.",
      icon: LightBulbIcon,
      capabilities: [
        "AI maturity assessment",
        "Strategic roadmap development",
        "ROI analysis and business case",
        "Technology stack recommendations"
      ]
    },
    {
      title: "Agentic AI Architecture Design",
      description: "Design and implement sophisticated agentic AI systems that can autonomously perform complex tasks and make intelligent decisions.",
      icon: CogIcon,
      capabilities: [
        "Multi-agent system design",
        "Autonomous workflow orchestration",
        "Intelligent decision frameworks",
        "Agent communication protocols"
      ]
    },
    {
      title: "Enterprise AI Transformation",
      description: "End-to-end AI transformation services that modernize your operations, processes, and customer experiences with intelligent automation.",
      icon: RocketLaunchIcon,
      capabilities: [
        "Process automation design",
        "AI-powered workflow optimization",
        "Legacy system modernization",
        "Change management support"
      ]
    },
    {
      title: "AI Governance & Ethics",
      description: "Establish robust AI governance frameworks ensuring ethical AI deployment, compliance, and responsible innovation practices.",
      icon: ShieldCheckIcon,
      capabilities: [
        "AI ethics framework development",
        "Compliance and regulatory guidance",
        "Risk assessment and mitigation",
        "AI audit and monitoring systems"
      ]
    },
    {
      title: "AI Performance Optimization",
      description: "Optimize your AI systems for maximum performance, efficiency, and business impact through advanced analytics and monitoring.",
      icon: ChartBarIcon,
      capabilities: [
        "Performance monitoring and analytics",
        "Model optimization and tuning",
        "Cost optimization strategies",
        "Scalability planning and implementation"
      ]
    },
    {
      title: "AI Team Development",
      description: "Build internal AI capabilities through training, mentoring, and organizational development programs for sustainable AI adoption.",
      icon: UserGroupIcon,
      capabilities: [
        "AI skills assessment and training",
        "Team structure optimization",
        "Knowledge transfer programs",
        "Ongoing mentorship and support"
      ]
    }
  ];

  const industryExpertise = [
    {
      industry: "Banking & Financial Services",
      applications: ["Risk Management", "Fraud Detection", "Customer Service", "Regulatory Compliance"],
      caseStudy: "Implemented agentic AI for automated loan processing, reducing approval time by 75%"
    },
    {
      industry: "Healthcare",
      applications: ["Clinical Decision Support", "Patient Care Optimization", "Drug Discovery", "Medical Imaging"],
      caseStudy: "Deployed AI agents for patient monitoring, improving care quality and reducing costs by 40%"
    },
    {
      industry: "Manufacturing",
      applications: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization", "Production Planning"],
      caseStudy: "Orchestrated AI agents for smart manufacturing, increasing efficiency by 60%"
    },
    {
      industry: "Retail E-commerce",
      applications: ["Personalization", "Inventory Management", "Price Optimization", "Customer Analytics"],
      caseStudy: "Implemented intelligent agents for dynamic pricing, boosting revenue by 25%"
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
                className="px-5 py-2.5 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium text-gray-700"
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
              Schedule Strategy Session
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>

            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(37,99,235,0.08)" }}
              className="inline-flex items-center gap-2 border-2 border-[#2563eb] text-[#2563eb] px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              For AI Readiness Guide
            </motion.a>
          </div>
        </div>
      </section>

      {/* 6 Services – Perfect 3 + 3 Grid (Top 3, Bottom 3) */}
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
              Comprehensive AI Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to implementation, we provide end-to-end AI consulting services that transform your business with intelligent automation
            </p>
          </motion.div>

          {/* Perfect 3×2 grid – equal height & spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {consultingServices.map((service, i) => (
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
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  {service.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-[#FBBF24] rounded-full mr-2 flex-shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
                {/* <div className="mt-auto">
                  <div className="flex items-center text-[#2563eb] font-medium text-sm group-hover:translate-x-2 transition-transform duration-200">
                    Learn more <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </div>
                </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise – same as before */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
          >
            Industry-Specific AI Expertise
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industryExpertise.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4, type: "spring", stiffness: 500 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white py-10 rounded-2xl border border-gray-200 font-semibold text-gray-800 transition-all duration-200"
              >
                {item.industry.split(" ")[0]}<br />{item.industry.split(" ").slice(1).join(" ")}
                <p className="text-3xl font-bold text-[#2563eb] mt-4">
                  {item.caseStudy.match(/\d+%/)?.[0] || 'N/A'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CogniAssist & CTA – unchanged */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#2563eb]/10 rounded-full text-[#2563eb] font-semibold mb-6">
              <RocketLaunchIcon className="w-6 h-6" /> Powered by CogniAssist
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              CogniAssist Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamlessly integrate our consulting services with CogniAssist for enterprise-grade agentic AI orchestration
            </p>
          </motion.div>

          <motion.a
            href="/products/cogniassist"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="mt-12 inline-flex items-center gap-3 bg-[#2563eb] hover:bg-blue-700 text-white px-9 py-5 rounded-xl text-lg font-semibold shadow-xl transition-all duration-200"
          >
            Explore CogniAssist <ArrowRightIcon className="w-6 h-6" />
          </motion.a>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
};

export default AIConsultingPage;