'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ServerIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CpuChipIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline';

const agentCategories = [
  { id: 'devsecops', label: 'DevSecOps Agents', icon: ServerIcon },
];

const agents = {
  devsecops: [
    {
      title: 'Cluster Scaling Agent',
      description: 'Optimizes node usage in real-time by automatically adjusting the number of nodes in your cluster based on resource demands.',
      icon: ServerIcon,
    },
    {
      title: 'Security Sentinel Agent',
      description: 'Provides runtime container protection, scanning for vulnerabilities and ensuring compliance with security policies.',
      icon: ShieldCheckIcon,
    },
    {
      title: 'Cost Optimization Agent',
      description: 'Analyzes cloud resource usage to identify waste and recommends optimizations to reduce cloud spend significantly.',
      icon: CurrencyDollarIcon,
    },
    {
      title: 'Deployment Agent',
      description: 'Automates CI/CD pipelines, managing deployments, rollbacks, and ensuring seamless delivery of applications.',
      icon: CpuChipIcon,
    },
    {
      title: 'SRE Agent',
      description: 'Proactively monitors system health, automates incident response, and ensures high availability across your infrastructure.',
      icon: CommandLineIcon,
    },
  ],
};

export const CogniLoomAgentsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('devsecops');

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-sm font-semibold mb-6"
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
            Specialized Agents for DevSecOps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Empower your infrastructure with specialized AI agents designed to automate, secure, and optimize your Kubernetes environments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <AnimatePresence mode="popLayout">
            {agents[activeCategory as keyof typeof agents].map((agent, index) => (
              <motion.div
                key={agent.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                  <agent.icon className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{agent.title}</h3>
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
