'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BanknotesIcon, 
  UserGroupIcon, 
  ComputerDesktopIcon, 
  MegaphoneIcon, 
  ChatBubbleLeftRightIcon, 
  TruckIcon,
  DocumentMagnifyingGlassIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  BriefcaseIcon,
  PresentationChartLineIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  CurrencyDollarIcon,
  CodeBracketIcon,
  ServerIcon,
  GlobeAltIcon,
  LanguageIcon,
  ClockIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline';

const agentCategories = [
  { id: 'finance', label: 'Finance & Operations', icon: BanknotesIcon },
  { id: 'hr', label: 'HR & Talent', icon: UserGroupIcon },
  { id: 'it', label: 'IT & Infrastructure', icon: ComputerDesktopIcon },
  { id: 'sales', label: 'Sales & Marketing', icon: MegaphoneIcon },
  { id: 'support', label: 'Customer Experience', icon: ChatBubbleLeftRightIcon },
  { id: 'supply', label: 'Supply Chain', icon: TruckIcon },
];

const agents = {
  finance: [
    {
      title: 'Invoice Processing AI Agent',
      description: 'Simplify your finance operations with AI-driven invoice extraction, validation, and processing - designed for improved efficiency.',
      icon: DocumentMagnifyingGlassIcon,
    },
    {
      title: 'Compliance Monitoring Agent',
      description: 'Stay ahead of regulatory changes with AI-powered monitoring, analysis, and restoration, specially designed for complex businesses.',
      icon: ShieldCheckIcon,
    },
    {
      title: 'Data Processing & Analysis Agents',
      description: 'Make data work for you with Next-gen AI agents that extract, process, and analyze data to make smarter business decisions.',
      icon: ChartBarIcon,
    },
    {
      title: 'Expense Audit Agent',
      description: 'Automates expense report reviews, detects anomalies and policy violations, ensuring tighter control over company spending.',
      icon: ClipboardDocumentCheckIcon,
    },
    {
      title: 'Financial Forecasting Agent',
      description: 'Predicts future cash flow and financial trends using historical data analysis to support strategic planning.',
      icon: PresentationChartLineIcon,
    },
    {
      title: 'Tax Filing Assistant',
      description: 'Streamlines tax preparation processes and ensures strict compliance with ever-changing local and global tax regulations.',
      icon: CurrencyDollarIcon,
    },
  ],
  hr: [
    {
      title: 'HR Onboarding Automation Agent',
      description: 'Eliminate the manual onboarding process and welcome the new hire the smart way with AI agents that handle onboarding like a pro.',
      icon: UserGroupIcon,
    },
    {
      title: 'AI Recruiting Assistant Agent',
      description: 'Hire faster and smarter with AI agents that handle screening, interview scheduling, and candidate onboarding processes efficiently.',
      icon: BriefcaseIcon,
    },
    {
      title: 'Workflow Automation Agents',
      description: 'Automate repetitive tasks and reduce manual effort with intelligent AI agents that optimize work and enhance productivity.',
      icon: ClipboardDocumentCheckIcon,
    },
    {
      title: 'Employee Engagement Agent',
      description: 'Continuously monitors employee sentiment and suggests personalized activities to boost morale and retention.',
      icon: SparklesIcon,
    },
    {
      title: 'Performance Review Assistant',
      description: 'Aggregates performance data throughout the year and drafts comprehensive review summaries for managers.',
      icon: ChartBarIcon,
    },
    {
      title: 'Payroll Automation Agent',
      description: 'Ensures accurate, timely payroll processing by validating hours, benefits, and deductions automatically.',
      icon: BanknotesIcon,
    },
  ],
  it: [
    {
      title: 'Monitoring Agents',
      description: 'Get instant alerts and performance insights in real-time with AI agents that detect issues affecting your business and prevent downtime.',
      icon: ComputerDesktopIcon,
    },
    {
      title: 'Predictive Maintenance Agents',
      description: 'Avoid problems before they arise with AI agents that automate the maintenance process, spot defects early, and reduce downtime costs.',
      icon: WrenchScrewdriverIcon,
    },
    {
      title: 'Smart Mobility Agents',
      description: 'Get smarter mobility solutions with AI agents to optimize routes, manage fleets, improve safety and efficiency in real-time.',
      icon: TruckIcon,
    },
    {
      title: 'Code Review Agent',
      description: 'Analyzes code repositories for quality issues, security vulnerabilities, and performance bottlenecks automatically.',
      icon: CodeBracketIcon,
    },
    {
      title: 'Cloud Resource Optimizer',
      description: 'Manages cloud infrastructure usage dynamically to reduce unnecessary costs while maintaining performance.',
      icon: ServerIcon,
    },
  ],
  sales: [
    {
      title: 'Sales Assistant AI Agent',
      description: 'Close deals 3x better with advanced AI agents that are designed for every stage of your sales process and customer journey.',
      icon: PresentationChartLineIcon,
    },
    {
      title: 'Campaign Automation Agent',
      description: 'Stop marketing burnout, boost ROI with AI agents that automate the marketing process, from campaign planning to optimization.',
      icon: MegaphoneIcon,
    },
    {
      title: 'Content Recommendation Agents',
      description: 'Engage every user with smart AI agents that provide personalized recommendations by analyzing user behavior and preferences.',
      icon: SparklesIcon,
    },
    {
      title: 'Lead Scoring Agent',
      description: 'Automatically prioritizes leads based on conversion probability, ensuring your team focuses on the highest value prospects.',
      icon: ChartBarIcon,
    },
    {
      title: 'CRM Data Enrichment Agent',
      description: 'Keeps your CRM clean and up-to-date by automatically verifying contact details and enriching records with external data.',
      icon: DocumentMagnifyingGlassIcon,
    },
    {
      title: 'Competitor Analysis Agent',
      description: 'Tracks competitor pricing, product launches, and market positioning to provide actionable strategic insights.',
      icon: GlobeAltIcon,
    },
  ],
  support: [
    {
      title: 'Always-On Support Agents',
      description: 'Deliver exceptional customer support 24/7 with AI agents that deliver human-like responses and resolve issues in no time.',
      icon: ChatBubbleLeftRightIcon,
    },
    {
      title: 'Policy Recommendation Agents',
      description: 'Automate repetitive tasks with AI agents that analyze data, provide personalized policy options and enhance customer satisfaction.',
      icon: ClipboardDocumentCheckIcon,
    },
    {
      title: 'Multilingual Translation Agent',
      description: 'Provides real-time translation for customer interactions, breaking down language barriers for global support teams.',
      icon: LanguageIcon,
    },
    {
      title: 'Sentiment Analysis Agent',
      description: 'Gauges customer emotion in real-time to prioritize urgent issues and route frustrated customers to senior agents.',
      icon: SparklesIcon,
    },
    {
      title: 'Ticket Triage Agent',
      description: 'Automatically categorizes and routes support tickets to the appropriate specialized teams for faster resolution.',
      icon: ClockIcon,
    },
  ],
  supply: [
    {
      title: 'Supply Chain Intelligence Agents',
      description: 'Transform supply chain operations with AI agents that predict demand, monitor inventory, and streamline logistics operations.',
      icon: TruckIcon,
    },
    {
      title: 'Vendor Management Agent',
      description: 'Evaluates vendor performance metrics and manages relationship workflows to ensure optimal supply chain reliability.',
      icon: UserGroupIcon,
    },
    {
      title: 'Inventory Optimization Agent',
      description: 'Balances stock levels intelligently to prevent shortages and overstock situations using predictive demand modeling.',
      icon: ChartBarIcon,
    },
    {
      title: 'Logistics Route Planner',
      description: 'Optimizes delivery routes dynamically for fuel efficiency, traffic avoidance, and on-time delivery performance.',
      icon: GlobeAltIcon,
    },
    {
      title: 'Procurement Assistant',
      description: 'Automates purchase orders and supplier negotiations based on predefined rules and inventory needs.',
      icon: ShoppingCartIcon,
    },
  ],
};

export const AIAgentsShowcase = () => {
  const [activeTab, setActiveTab] = useState('finance');

  return (
    <section className="py-20 bg-[#0D0C1A] relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7C3AED]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#8B5CF6]/8 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#15151D]/90 border border-[#29263A] shadow-[0_0_18px_rgba(124,58,237,0.2)] text-[#A78BFA] text-xs font-semibold px-5 py-2 rounded-full mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
            Enterprise AI Agents
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight"
          >
            Intelligent Agents for Every Function
          </motion.h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-transparent shadow-[0_0_10px_#8B5CF6] mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#B8B6C4] max-w-3xl mx-auto"
          >
            Deploy specialized AI agents that understand your business context and automate complex workflows across departments.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {agentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] scale-105'
                  : 'bg-[#15151D] text-[#B8B6C4] hover:bg-[#1E1B38] hover:text-[#A78BFA] border border-[#29263A] hover:border-[#8B5CF6]/40'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Agents Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {agents[activeTab as keyof typeof agents].map((agent, index) => (
                <motion.div
                  key={agent.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-[#15151D]/95 rounded-2xl p-8 border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.2)] transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#7C3AED]/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 rounded-xl flex items-center justify-center mb-6 group-hover:border-[#A78BFA] group-hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all duration-300">
                    <agent.icon className="w-7 h-7 text-[#A78BFA]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#A78BFA] transition-colors duration-300">
                    {agent.title}
                  </h3>
                  <p className="text-[#B8B6C4] leading-relaxed text-sm">
                    {agent.description}
                  </p>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] transition-all duration-500 ease-out w-0 group-hover:w-full" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
