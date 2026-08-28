'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SignalIcon,
  DevicePhoneMobileIcon,
  WifiIcon,
  ChartBarIcon,
  CogIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const TelecomUseCases = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [activeArea, setActiveArea] = useState(0);

  const customerStages = [
    {
      stage: 'Awareness',
      icon: SignalIcon,
      applications: ['Coverage map visualizers', 'Plan comparison tools', 'Speed test apps'],
      color: 'from-purple-500 to-indigo-600'
    },
    {
      stage: 'Consideration',
      icon: DevicePhoneMobileIcon,
      applications: ['Virtual service advisors', 'Bundle customization', 'Usage-based recommendations'],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      stage: 'Purchase',
      icon: WifiIcon,
      applications: ['Self-service activation', 'Device setup guidance', 'Installation scheduling'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      stage: 'Delivery',
      icon: ChartBarIcon,
      applications: ['Service status monitoring', 'Usage alerts', 'Troubleshooting assistance'],
      color: 'from-cyan-500 to-teal-600'
    },
    {
      stage: 'Post-Purchase',
      icon: CogIcon,
      applications: ['Bill explanation bots', 'Upgrade recommendations', 'Network feedback collection'],
      color: 'from-teal-500 to-green-600'
    }
  ];

  const internalAreas = [
    {
      area: 'Network Mgmt',
      icon: SignalIcon,
      applications: ['Outage prediction', 'Self-healing networks', 'Capacity planning'],
      color: 'from-purple-500 to-indigo-600'
    },
    {
      area: 'Customer Ops',
      icon: UserGroupIcon,
      applications: ['Ticket routing automation', 'Churn prediction', 'Personalized retention offers'],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      area: 'Workforce',
      icon: CogIcon,
      applications: ['Field technician dispatching', 'Training simulations', 'Performance analytics'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      area: 'Operations',
      icon: ShieldCheckIcon,
      applications: ['Revenue assurance bots', 'Fraud detection', 'Service quality monitoring'],
      color: 'from-cyan-500 to-teal-600'
    },
    {
      area: 'Decision Making',
      icon: LightBulbIcon,
      applications: ['Network investment planning', 'Customer behavior modeling', 'Product development insights'],
      color: 'from-teal-500 to-green-600'
    }
  ];

  const results = [
    { metric: '35%', description: 'Fewer Network Outages', icon: SignalIcon },
    { metric: '50%', description: 'Faster Issue Resolution', icon: ChartBarIcon },
    { metric: '30%', description: 'Lower Operating Costs', icon: CogIcon }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            AI Agents Transforming Telecom
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Revolutionizing network operations and customer experience through intelligent automation
          </motion.p>
        </div>

        {/* Customer Experience Journey */}
        <div className="mb-20 bg-white border-2 border-yellow-400 rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              AI Agents for Customer Experience
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600"
            >
              Enhance telecom experiences with intelligent automation
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {customerStages.map((stage, index) => {
              const IconComponent = stage.icon;
              return (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center mb-3 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-base font-semibold text-gray-900 mb-2">{stage.stage}</h4>
                  <ul className="space-y-1">
                    {stage.applications.map((app, appIndex) => (
                      <li key={appIndex} className="text-xs text-gray-600 flex items-start">
                        <span className="w-1 h-1 bg-yellow-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Internal Operations */}
        <div className="mb-20 bg-white border-2 border-yellow-400 rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              AI Agents for Internal Operations
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600"
            >
              Optimize telecom operations with intelligent automation
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {internalAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <motion.div
                  key={area.area}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center mb-3 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-base font-semibold text-gray-900 mb-2">{area.area}</h4>
                  <ul className="space-y-1">
                    {area.applications.map((app, appIndex) => (
                      <li key={appIndex} className="text-xs text-gray-600 flex items-start">
                        <span className="w-1 h-1 bg-yellow-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Measurable Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-12 shadow-lg border border-yellow-200/30"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Proven Results</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transforming telecom operations with measurable AI-driven outcomes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => {
              const IconComponent = result.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-gray-900 mb-3">{result.metric}</div>
                  <div className="text-lg text-gray-600 font-medium">{result.description}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TelecomUseCases;