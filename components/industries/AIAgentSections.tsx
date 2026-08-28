'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  UserGroupIcon,
  BeakerIcon,
  HeartIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  DocumentTextIcon,
  TruckIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  BuildingStorefrontIcon,
  CogIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  SignalIcon,
  DevicePhoneMobileIcon,
  WifiIcon,
  BanknotesIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  CalendarIcon,
  WrenchScrewdriverIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

interface AgentStage {
  stage: string;
  icon: string;
  applications: string[];
}

interface AgentArea {
  area: string;
  icon: string;
  applications: string[];
}

interface BusinessMetric {
  label: string;
  value: string;
  description: string;
}

interface AIAgentSectionsProps {
  industryName: string;
  customerExperienceTitle?: string;
  customerExperienceDescription?: string;
  customerStages: AgentStage[];
  internalOperationsTitle?: string;
  internalOperationsDescription?: string;
  internalAreas: AgentArea[];
  businessMetrics?: BusinessMetric[];
}

// Static icon map to prevent hydration mismatches
const iconMap: Record<string, React.ComponentType<any>> = {
  UserGroupIcon,
  BeakerIcon,
  HeartIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  DocumentTextIcon,
  TruckIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  BuildingStorefrontIcon,
  CogIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  SignalIcon,
  DevicePhoneMobileIcon,
  WifiIcon,
  BanknotesIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  CalendarIcon,
  WrenchScrewdriverIcon,
  UsersIcon,
};

const AIAgentSections: React.FC<AIAgentSectionsProps> = ({
  industryName,
  customerExperienceTitle = `AI Agents for Customer Experience`,
  customerExperienceDescription = `Enhance ${industryName.toLowerCase()} experiences with intelligent automation`,
  customerStages,
  internalOperationsTitle = `AI Agents for Internal Operations`,
  internalOperationsDescription = `Optimize ${industryName.toLowerCase()} operations with intelligent automation`,
  internalAreas,
  businessMetrics = [
    {
      label: "Cost Reduction",
      value: "40%",
      description: "Average operational cost savings through AI automation"
    },
    {
      label: "Efficiency Gain",
      value: "60%",
      description: "Improvement in process efficiency and speed"
    },
    {
      label: "Error Reduction",
      value: "85%",
      description: "Decrease in human errors and manual mistakes"
    },
    {
      label: "Customer Satisfaction",
      value: "95%",
      description: "Increase in customer satisfaction scores"
    }
  ]
}) => {
  // Pre-resolve all icons to ensure consistent server-client rendering
  const resolvedCustomerStages = React.useMemo(() => 
    customerStages.map(stage => {
      const IconComponent = iconMap[stage.icon];
      if (!IconComponent) {
        console.warn(`Icon ${stage.icon} not found in iconMap`);
        return { ...stage, IconComponent: UserGroupIcon };
      }
      return { ...stage, IconComponent };
    }), [customerStages]);

  const resolvedInternalAreas = React.useMemo(() => 
    internalAreas.map(area => {
      const IconComponent = iconMap[area.icon];
      if (!IconComponent) {
        console.warn(`Icon ${area.icon} not found in iconMap`);
        return { ...area, IconComponent: UserGroupIcon };
      }
      return { ...area, IconComponent };
    }), [internalAreas]);

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Agents Transforming <span className="text-blue-600">{industryName}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing operations and customer experience through intelligent automation
          </p>
        </motion.div>

        {/* Customer Experience Journey */}
        <motion.div 
          className="mb-20 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
              <span className="text-blue-600 font-semibold text-sm">Customer Experience</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              {customerExperienceTitle}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {customerExperienceDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {resolvedCustomerStages.map((stage, index) => {
              const { IconComponent } = stage;
              return (
                <motion.div
                  key={stage.stage}
                  className="group bg-gradient-to-br from-blue-50 to-white rounded-xl p-5 hover:shadow-lg transition-all duration-300 border border-blue-100 hover:border-blue-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-3">{stage.stage}</h4>
                  <ul className="space-y-2">
                    {stage.applications.map((app, appIndex) => (
                      <li key={appIndex} className="text-xs text-gray-700 leading-relaxed flex items-start">
                        <span className="text-blue-500 mr-2 mt-0.5">•</span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Internal Operations */}
        <motion.div 
          className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
              <span className="text-green-600 font-semibold text-sm">Internal Operations</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              {internalOperationsTitle}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {internalOperationsDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {resolvedInternalAreas.map((area, index) => {
              const { IconComponent } = area;
              return (
                <motion.div
                  key={area.area}
                  className="group bg-gradient-to-br from-green-50 to-white rounded-xl p-5 hover:shadow-lg transition-all duration-300 border border-green-100 hover:border-green-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-green-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-3">{area.area}</h4>
                  <ul className="space-y-2">
                    {area.applications.map((app, appIndex) => (
                      <li key={appIndex} className="text-xs text-gray-700 leading-relaxed flex items-start">
                        <span className="text-green-500 mr-2 mt-0.5">•</span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Business Value Metrics */}
        <motion.div 
          className="mt-20 bg-gradient-to-br from-brand-blue-light1 to-white rounded-2xl p-8 border border-gray-200 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Measurable Business Impact
            </h3>
            <p className="text-gray-600 text-sm">
              Real results from organizations using our solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 h-32"
              >
                <div className="text-3xl font-bold text-brand-blue mb-2">
                  {metric.value}
                </div>
                <div className="text-xs text-gray-600 font-medium line-clamp-2 leading-tight">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products/cogniassist" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                Get Started with AI Agents
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIAgentSections;