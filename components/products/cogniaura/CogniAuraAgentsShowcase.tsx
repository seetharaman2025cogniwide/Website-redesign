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
    <section className="py-24 bg-[#0D0C1A] overflow-hidden relative">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8B5CF6]/8 rounded-full blur-3xl" />
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
            INTELLIGENT AGENTS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight"
          >
            Specialized Agents for Analytics
          </motion.h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-transparent shadow-[0_0_10px_#8B5CF6] mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-[#B8B6C4] max-w-2xl mx-auto"
          >
            Supercharge your analytics workflow with specialized AI agents designed to handle complex data tasks autonomously.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {agents[activeCategory as keyof typeof agents].map((agent, index) => (
              <motion.div
                key={agent.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative bg-[#15151D]/95 rounded-2xl p-6 border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.2)] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />
                <div className="w-12 h-12 bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 rounded-xl flex items-center justify-center mb-6 group-hover:border-[#A78BFA] group-hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all duration-300">
                  <agent.icon className="w-6 h-6 text-[#A78BFA]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#A78BFA] transition-colors duration-300">{agent.title}</h3>
                <p className="text-[#B8B6C4] text-sm leading-relaxed">
                  {agent.description}
                </p>
                <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] transition-all duration-500 ease-out w-0 group-hover:w-full" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
