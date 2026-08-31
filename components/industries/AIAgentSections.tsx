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
    <div className="relative py-24 bg-[#0B0A14] border-t border-[#29263A] overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            AI Agents Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC]">{industryName}</span>
          </h2>
          <p className="text-xl text-[#B8B6C4] max-w-3xl mx-auto leading-relaxed">
            Revolutionizing operations and customer experience through intelligent automation
          </p>
        </motion.div>

        {/* Customer Experience Journey */}
        <motion.div 
          className="relative mb-20 bg-[#15151D]/90 rounded-3xl p-8 border border-[#29263A] shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />
            <div className="inline-block px-4 py-2 bg-[#1A1829]/80 border border-[#29263A] rounded-full mb-4">
              <span className="text-[#A78BFA] font-semibold text-sm">Customer Experience</span>
            </div>
            <h3 className="text-3xl font-extrabold text-white mb-3 tracking-tight">
              {customerExperienceTitle}
            </h3>
            <p className="text-[#B8B6C4] max-w-2xl mx-auto leading-relaxed">
              {customerExperienceDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {resolvedCustomerStages.map((stage, index) => {
              const { IconComponent } = stage;
              return (
                <motion.div
                  key={stage.stage}
                  className="group bg-[#1A1829]/80 rounded-xl p-5 transition-all duration-300 border border-[#29263A] hover:border-[#8B5CF6]/60 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(139,92,246,0.35)]">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-3 group-hover:text-[#A78BFA] transition-colors">{stage.stage}</h4>
                  <ul className="space-y-2">
                    {stage.applications.map((app, appIndex) => (
                      <li key={appIndex} className="text-xs text-[#B8B6C4] leading-relaxed flex items-start">
                        <span className="text-[#8B5CF6] mr-2 mt-0.5">•</span>
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
          className="relative bg-[#15151D]/90 rounded-3xl p-8 border border-[#29263A] shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />
            <div className="inline-block px-4 py-2 bg-[#1A1829]/80 border border-[#29263A] rounded-full mb-4">
              <span className="text-[#A78BFA] font-semibold text-sm">Internal Operations</span>
            </div>
            <h3 className="text-3xl font-extrabold text-white mb-3 tracking-tight">
              {internalOperationsTitle}
            </h3>
            <p className="text-[#B8B6C4] max-w-2xl mx-auto leading-relaxed">
              {internalOperationsDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {resolvedInternalAreas.map((area, index) => {
              const { IconComponent } = area;
              return (
                <motion.div
                  key={area.area}
                  className="group bg-[#1A1829]/80 rounded-xl p-5 transition-all duration-300 border border-[#29263A] hover:border-[#8B5CF6]/60 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(139,92,246,0.35)]">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-3 group-hover:text-[#A78BFA] transition-colors">{area.area}</h4>
                  <ul className="space-y-2">
                    {area.applications.map((app, appIndex) => (
                      <li key={appIndex} className="text-xs text-[#B8B6C4] leading-relaxed flex items-start">
                        <span className="text-[#8B5CF6] mr-2 mt-0.5">•</span>
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
          className="relative mt-20 bg-[#15151D]/90 rounded-3xl p-8 border border-[#29263A] shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />
          <div className="text-center mb-8">
            <h3 className="text-2xl font-extrabold text-white mb-2">
              Measurable Business Impact
            </h3>
            <p className="text-[#B8B6C4] text-sm">
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
                className="flex flex-col items-center justify-center text-center p-6 bg-[#1A1829]/80 rounded-xl border border-[#29263A] hover:border-[#8B5CF6]/60 transition-all duration-300 h-32"
              >
                <div className="text-3xl font-extrabold bg-gradient-to-r from-white via-[#A78BFA] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-xs text-[#B8B6C4] font-medium line-clamp-2 leading-tight">
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
              <Link href="/products/cogniassist" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white rounded-xl font-bold shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 transition-all duration-300">
                Get Started with AI Agents
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#1A1829]/80 text-[#A78BFA] border border-[#29263A] hover:border-[#8B5CF6] hover:text-white rounded-xl font-bold transition-all duration-300">
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