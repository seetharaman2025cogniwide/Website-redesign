'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowPathIcon, 
  ShieldCheckIcon, 
  ChartBarIcon, 
  TableCellsIcon,
  BanknotesIcon,
  UserGroupIcon,
  ComputerDesktopIcon,
  MegaphoneIcon,
  ChatBubbleLeftRightIcon,
  TruckIcon
} from '@heroicons/react/24/outline';

// Reuse the layout/style of AIAgentsShowcase but with CogniAura specific agents
// Since CogniAura agents are not categorized by department like CogniAssist, 
// we will adapt the layout to show a single category or just a grid if categories aren't needed.
// However, to maintain exact visual similarity, we can categorize them if possible, 
// or just use a single "Analytics" category.

const agentCategories = [
  { id: 'analytics', label: 'Analytics Agents', icon: ChartBarIcon },
];

const agents = {
  analytics: [
    {
      title: 'Migration Agent',
      description: 'Automates the conversion of legacy reports to modern BI tools, handling schema mapping and visual recreation.',
      icon: ArrowPathIcon,
    },
    {
      title: 'Data Steward Agent',
      description: 'Continuously monitors data quality, flags anomalies, and suggests governance rule improvements.',
      icon: ShieldCheckIcon,
    },
    {
      title: 'Analytics Copilot',
      description: 'Natural language interface for business users to generate insights and dashboards on the fly.',
      icon: ChartBarIcon,
    },
    {
      title: 'Master Data Agent',
      description: 'Identifies duplicates and inconsistencies in master data records across disparate systems.',
      icon: TableCellsIcon,
    },
  ],
};

export const CogniAuraAgentsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('analytics');

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Background Elements matching AIAgentsShowcase */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6"
          >
            INTELLIGENT AGENTS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Specialized Agents for Analytics
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Supercharge your analytics workflow with specialized AI agents designed to handle complex data tasks autonomously.
          </motion.p>
        </div>

        {/* Categories - Hidden since we only have one, but keeping structure for consistency/extensibility */}
        {/* 
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {agentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <category.icon className={`w-5 h-5 mr-2 ${
                activeCategory === category.id ? 'text-white' : 'text-gray-500'
              }`} />
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </div>
        */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {agents[activeCategory as keyof typeof agents].map((agent, index) => (
              <motion.div
                key={agent.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <agent.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{agent.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {agent.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
