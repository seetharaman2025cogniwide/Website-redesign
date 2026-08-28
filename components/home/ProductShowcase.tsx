'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, BarChart2, Cpu, Globe, Bot, Shield, Zap, Database, Server, Workflow } from 'lucide-react';

// --- Types & Data ---

const products = [
  {
    id: 'agent',
    name: 'CogniAssist',
    subtitle: 'Intelligent Automation',
    description: 'Enterprise grade no-code/pro-code agentic AI platform that orchestrates intelligent agents to streamline complex business processes and decision-making.',
    features: ['Autonomous Orchestration', 'Multi-Agent Collaboration', 'Real-time Decisions', 'Process Automation'],
    href: '/products/cogniassist',
    icon: <Cpu className="w-5 h-5" />,
    color: 'blue',
    agents: [
      { name: 'IT Incident Agent', desc: 'Auto-resolves tickets & system alerts', icon: Server },
      { name: 'Procurement Agent', desc: 'Validates vendors & processes POs', icon: ShoppingCartIcon },
      { name: 'HR Policy Agent', desc: 'Instantly answers employee queries', icon: UsersIcon },
      { name: 'Sales Ops Agent', desc: 'Qualifies leads & updates CRM', icon: TrendingUpIcon }
    ]
  },
  {
    id: 'loom',
    name: 'CogniLoom',
    subtitle: 'Container Orchestration',
    description: 'AI-powered Kubernetes Orchestration Platform that simplifies container management with intelligent scaling, monitoring, and multi-cloud deployment.',
    features: ['AI-Powered Auto-Scaling', 'Multi-Cloud Deploy', 'Intelligent Monitoring', 'Automated Ops'],
    href: '/products/cogniloom',
    icon: <Globe className="w-5 h-5" />,
    color: 'purple',
    agents: [
      { name: 'Cluster Auto-Scaler', desc: 'Optimizes node usage in real-time', icon: ScaleIcon },
      { name: 'Security Sentinel', desc: 'Runtime container protection', icon: Shield },
      { name: 'Cost Optimizer', desc: 'Reduces cloud spend waste', icon: DollarSignIcon },
      { name: 'Deployment Bot', desc: 'Automates CI/CD pipelines', icon: RocketIcon }
    ]
  },
  {
    id: 'aura',
    name: 'CogniAura',
    subtitle: 'Advanced Analytics',
    description: 'Analytics platform that enables one-click migration between BI tools using PortBI, and seamless MDM management with CogniCraft.',
    features: ['One-Click BI Migration', 'PortBI Integration', 'CogniCraft MDM', 'Predictive Analytics'],
    href: '/products/cogniaura',
    icon: <BarChart2 className="w-5 h-5" />,
    color: 'orange',
    agents: [
      { name: 'Migration Assistant', desc: 'Legacy to Modern BI conversion', icon: ArrowLeftRightIcon },
      { name: 'Data Steward', desc: 'Ensures data quality & governance', icon: Database },
      { name: 'Anomaly Detector', desc: 'Real-time outlier alerting', icon: AlertCircleIcon },
      { name: 'Predictive Analyst', desc: 'Forecasts future trends', icon: LineChartIcon }
    ]
  }
];

// Mock Icons for Agents (since lucide-react exports might vary, defining simple fallbacks or using available ones)
import { ShoppingCart as ShoppingCartIcon, Users as UsersIcon, TrendingUp as TrendingUpIcon, Scale as ScaleIcon, DollarSign as DollarSignIcon, Rocket as RocketIcon, ArrowLeftRight as ArrowLeftRightIcon, AlertCircle as AlertCircleIcon, LineChart as LineChartIcon } from 'lucide-react';


// --- Main Component ---

export const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState(products[0].id);

  const activeProduct = products.find(p => p.id === activeTab) || products[0];

  const colorMap: Record<string, { bg: string; text: string; lightBg: string; gradient: string; ring: string; hoverBg: string }> = {
    agent: {
      bg: 'bg-brand-blue',
      text: 'text-brand-blue',
      lightBg: 'bg-blue-100',
      gradient: 'from-brand-blue to-blue-400',
      ring: 'focus:ring-brand-blue',
      hoverBg: 'group-hover:bg-brand-blue'
    },
    loom: {
      bg: 'bg-purple-600',
      text: 'text-purple-600',
      lightBg: 'bg-purple-100',
      gradient: 'from-purple-600 to-purple-400',
      ring: 'focus:ring-purple-600',
      hoverBg: 'group-hover:bg-purple-600'
    },
    aura: {
      bg: 'bg-orange-500',
      text: 'text-orange-500',
      lightBg: 'bg-orange-100',
      gradient: 'from-orange-500 to-orange-400',
      ring: 'focus:ring-orange-500',
      hoverBg: 'group-hover:bg-orange-500'
    }
  };

  const activeColors = colorMap[activeTab] || colorMap.agent;

  return (
    <section className="bg-brand-blue-light1 relative py-24 lg:py-32 overflow-hidden font-poppins selection:bg-brand-blue selection:text-white">

      {/* 1. Sophisticated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-blue-light1/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 2. Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-light1 border border-brand-blue/20 text-brand-blue text-sm font-semibold tracking-wide uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
            Our Products
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark-grey mb-6 tracking-tight"
          >
            Intelligence at <span className="text-brand-blue relative inline-block">
              Scale
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-yellow opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Orchestrate agents, manage containers, and unlock insights with our integrated AI ecosystem.
          </motion.p>
        </div>

        {/* 3. Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-white rounded-2xl shadow-sm border border-gray-100 gap-2">
            {products.map((product) => {
               const pColors = colorMap[product.id] || colorMap.agent;
               return (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(product.id)}
                  className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeTab === product.id 
                      ? 'text-white shadow-md' 
                      : 'text-gray-500 hover:text-brand-dark-grey hover:bg-gray-50'
                  }`}
                >
                  {activeTab === product.id && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 rounded-xl ${pColors.bg}`}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {product.icon}
                    {product.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Tab Content Area */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
            >
              {/* Left Column: Product Details */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`h-px w-8 ${activeColors.bg}`}></span>
                  <span className={`font-semibold uppercase tracking-wider text-sm ${activeColors.text}`}>
                    {activeProduct.subtitle}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-brand-dark-grey mb-6">
                  {activeProduct.name}
                </h3>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {activeProduct.description}
                </p>

                <ul className="grid grid-cols-1 gap-3 mb-10">
                  {activeProduct.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className={`mt-1 p-0.5 rounded-full ${activeColors.lightBg} ${activeColors.text}`}>
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href={activeProduct.href} className="relative inline-flex group self-start">
                  <div className={`absolute transition-all duration-300 opacity-70 -inset-px bg-gradient-to-r rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt ${activeColors.gradient}`}></div>
                  <button className={`relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 font-sans rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 ${activeColors.bg} ${activeColors.ring}`}>
                    <span>Explore {activeProduct.name}</span>
                    <ArrowRight className="w-5 h-5 ml-2 -mr-1 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </a>
              </div>

              {/* Right Column: Agent Ecosystem (The "List of Agents") */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 relative overflow-hidden h-full">
                  {/* Decorative Background */}
                  <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-20 -mr-16 -mt-16 ${activeColors.bg}`}></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <h4 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        <Bot className="w-5 h-5 text-gray-400" />
                        Specialized Agents
                      </h4>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-gray-500`}>
                        {activeProduct.agents.length} Active
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeProduct.agents.map((agent, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="group p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-lg hover:border-gray-200 transition-all duration-300 cursor-default"
                        >
                          <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-lg shadow-sm transition-colors duration-300 bg-white ${activeColors.text} ${activeColors.hoverBg} group-hover:text-white`}>
                              <agent.icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h5 className="font-bold text-gray-800 text-sm mb-1 group-hover:text-brand-dark-grey">{agent.name}</h5>
                              <p className="text-xs text-gray-500 leading-relaxed">{agent.desc}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Bottom "More" indicator */}
                    <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        30+ more pre-built agents available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}