'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight, CheckCircle, BarChart2, Cpu, Globe, Bot, Shield, Zap, Database, Server,
  ShoppingCart as ShoppingCartIcon,
  Users as UsersIcon,
  TrendingUp as TrendingUpIcon,
  Scale as ScaleIcon,
  DollarSign as DollarSignIcon,
  Rocket as RocketIcon,
  ArrowLeftRight as ArrowLeftRightIcon,
  AlertCircle as AlertCircleIcon,
  LineChart as LineChartIcon
} from 'lucide-react';

// --- Data ---
// `accent` feeds the panel's corner wash (--cw-panel-acc); everything else
// stays on the shared neon/mint scales so the three panels read as a set.
const products = [
  {
    id: 'agent',
    name: 'CogniAssist',
    subtitle: 'Intelligent Automation',
    description: 'Enterprise grade no-code/pro-code agentic AI platform that orchestrates intelligent agents to streamline complex business processes and decision-making.',
    features: ['Autonomous Orchestration', 'Multi-Agent Collaboration', 'Real-time Decisions', 'Process Automation'],
    href: '/products/cogniassist',
    icon: <Cpu className="w-5 h-5" />,
    accent: 'rgba(167, 139, 250, 0.28)',
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
    accent: 'rgba(139, 92, 246, 0.32)',
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
    accent: 'rgba(192, 132, 252, 0.28)',
    agents: [
      { name: 'Migration Assistant', desc: 'Legacy to Modern BI conversion', icon: ArrowLeftRightIcon },
      { name: 'Data Steward', desc: 'Ensures data quality & governance', icon: Database },
      { name: 'Anomaly Detector', desc: 'Real-time outlier alerting', icon: AlertCircleIcon },
      { name: 'Predictive Analyst', desc: 'Forecasts future trends', icon: LineChartIcon }
    ]
  }
];

// --- Main Component ---

export const ProductShowcase = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-transparent relative py-24 lg:py-32 overflow-hidden font-poppins selection:bg-neon-400 selection:text-white">

      {/* 1. Sophisticated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-neon-400/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-neon-400/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 2. Section Header */}
        <div className="text-center mb-14 lg:mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cw-eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold tracking-wide uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-neon-400 animate-pulse"></span>
            Our Products
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Intelligence at <span className="cw-glow-text relative inline-block">
              Scale
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-mint-300 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-night-400 max-w-2xl mx-auto leading-relaxed"
          >
            Orchestrate agents, manage containers, and unlock insights with our integrated AI ecosystem.
          </motion.p>
        </div>

        {/* 3. Expanding Panels */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="cw-panels"
        >
          {products.map((product, index) => {
            const isOpen = openIndex === index;
            const open = () => setOpenIndex(index);

            return (
              <div
                key={product.id}
                data-open={isOpen}
                onMouseEnter={open}
                className="cw-panel"
                style={{ '--cw-panel-acc': product.accent } as React.CSSProperties}
              >
                <span className="cw-panel__wash" aria-hidden="true" />

                {/* Collapsed state — also the control that opens the panel */}
                <button
                  type="button"
                  onClick={open}
                  onFocus={open}
                  tabIndex={isOpen ? -1 : 0}
                  aria-expanded={isOpen}
                  aria-label={`Show ${product.name}`}
                  className="cw-panel__closed group focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-400 rounded-[22px]"
                >
                  <span className="flex-none w-11 h-11 rounded-xl grid place-items-center bg-night-950/50 border border-mint-300/15 text-neon-400 transition-colors group-hover:border-neon-400/60">
                    {product.icon}
                  </span>
                  <span className="cw-panel__vert text-lg font-bold text-night-200 group-hover:text-white transition-colors">
                    {product.name}
                  </span>
                  <span className="text-[11px] font-mono text-night-500 lg:block hidden">
                    0{index + 1}
                  </span>
                  <span className="text-sm text-night-500 lg:hidden ml-auto text-right">
                    {product.subtitle}
                  </span>
                </button>

                {/* Expanded state */}
                <div className="cw-panel__open">
                  <div className="cw-panel__inner h-full grid grid-cols-1 lg:grid-cols-[1.12fr_1fr] gap-8 lg:gap-10 lg:items-center">

                    {/* Copy */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="h-px w-8 bg-neon-400"></span>
                        <span className="font-semibold uppercase tracking-wider text-xs text-neon-400">
                          {product.subtitle}
                        </span>
                      </div>

                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        {product.name}
                      </h3>

                      <p className="text-night-300 leading-relaxed mb-6 max-w-md">
                        {product.description}
                      </p>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 mb-8">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5">
                            <span className="mt-0.5 text-neon-400">
                              <CheckCircle className="w-4 h-4" />
                            </span>
                            <span className="text-night-200 text-sm font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={product.href}
                        className="cw-btn cw-btn-primary group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base w-fit focus:outline-none"
                      >
                        <span>Explore {product.name}</span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>

                    {/* Agent ecosystem */}
                    <div className="cw-glass rounded-2xl p-5 lg:p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-bold text-night-100 flex items-center gap-2">
                          <Bot className="w-4 h-4 text-night-500" />
                          Specialized Agents
                        </h4>
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-mint-300/10 border border-mint-300/20 text-mint-300">
                          {product.agents.length} Active
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                        {product.agents.map((agent) => (
                          <div
                            key={agent.name}
                            className="group flex items-start gap-3 p-3 rounded-xl bg-mint-300/[0.04] border border-mint-300/12 transition-colors duration-300 hover:border-neon-400/50 hover:bg-neon-400/10"
                          >
                            <span className="flex-none w-9 h-9 rounded-lg grid place-items-center bg-night-950/60 border border-mint-300/15 text-neon-400 transition-colors duration-300 group-hover:bg-neon-400 group-hover:text-night-950">
                              <agent.icon className="w-4 h-4" />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-[13px] font-bold text-night-100 leading-snug">{agent.name}</span>
                              <span className="block text-[11px] text-night-400 leading-snug">{agent.desc}</span>
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 pt-4 border-t border-night-800 flex items-center justify-center gap-2 text-xs text-night-500">
                        <Zap className="w-3.5 h-3.5" />
                        30+ more pre-built agents available
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
