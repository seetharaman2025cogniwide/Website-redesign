'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowPathIcon, 
  CogIcon, 
  TableCellsIcon,
  ServerIcon,
  PresentationChartLineIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

// Generic Feature Layout
interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits?: string[];
}

interface CogniAuraFeaturesProps {
  title: string;
  subtitle: string;
  features: FeatureItem[];
  columns?: 2 | 3;
  background?: 'white' | 'light-grey';
}

const CogniAuraFeaturesLayout = ({ 
  title, 
  subtitle, 
  features, 
  columns = 2,
  background = 'light-grey' 
}: CogniAuraFeaturesProps) => {
  const bg = background === 'white' ? 'bg-[#0B0A14]' : 'bg-[#0D0C1A]';
  return (
    <section className={`py-16 ${bg} relative overflow-hidden`}>
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7C3AED]/8 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#15151D]/90 border border-[#29263A] shadow-[0_0_18px_rgba(124,58,237,0.2)] text-[#A78BFA] text-xs font-semibold px-5 py-2 rounded-full mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
            <span className="uppercase tracking-wider">Features</span>
          </div>
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-transparent shadow-[0_0_10px_#8B5CF6] mx-auto mb-4" />
          <motion.p
            className="text-xl text-[#B8B6C4] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => {
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`w-full ${columns === 3 ? 'md:w-[calc(33.333%-1.34rem)]' : 'md:w-[calc(50%-1rem)]'}`}
              >
                <div className="group relative bg-[#15151D]/95 rounded-2xl p-6 border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.2)] transition-all duration-500 h-full overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 rounded-xl flex items-center justify-center group-hover:border-[#A78BFA] group-hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all duration-300">
                        {React.cloneElement(feature.icon as React.ReactElement, { className: "w-6 h-6 text-[#A78BFA]" })}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#A78BFA] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-[#B8B6C4] mb-4 leading-relaxed text-sm">
                        {feature.description}
                      </p>
                      {feature.benefits && (
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-[#B8B6C4]">
                              <div className="w-1.5 h-1.5 bg-[#8B5CF6] rounded-full mr-3 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] transition-all duration-500 ease-out w-0 group-hover:w-full" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Data Definitions
const keyModules: FeatureItem[] = [
  {
    title: 'Port BI',
    description: 'Migrate your analytics to modern BI, just like that.',
    icon: <ArrowPathIcon className="w-6 h-6 text-brand-yellow" />,
    benefits: ['One-click migration', 'Schema mapping', 'Visual recreation']
  },
  {
    title: 'Assist BI',
    description: 'For easy and efficient BI Administration.',
    icon: <CogIcon className="w-6 h-6 text-brand-yellow" />,
    benefits: ['Local BI Governance', 'Administration Tools', 'Policy Enforcement']
  },
  {
    title: 'MR Craft',
    description: 'Effortless Crafting of Master & References for Growing Businesses',
    icon: <TableCellsIcon className="w-6 h-6 text-brand-yellow" />,
    benefits: ['Centralized Management', 'Data Consistency', 'Reference Data Handling']
  }
];

const services: FeatureItem[] = [
  {
    title: 'Analytical Data Platform',
    description: 'Unlock rapid, data-driven decisions. Our framework-based platform streamlines your entire data landscape, from ingestion to actionable insights.',
    icon: <ServerIcon className="w-6 h-6 text-brand-yellow" />
  },
  {
    title: 'Dashboard Solutions',
    description: 'Tailored, template-based, and embedded BI dashboards. We also specialize in seamless legacy to modern analytics migration.',
    icon: <PresentationChartLineIcon className="w-6 h-6 text-brand-yellow" />
  },
  {
    title: 'Analytics Uplift',
    description: 'Upgrade ETL, optimize data solutions, adopt new features & visuals, and refine cloud resource usage for peak performance.',
    icon: <ArrowTrendingUpIcon className="w-6 h-6 text-brand-yellow" />
  },
  {
    title: 'Real-Time Analytics',
    description: 'Achieve immediate insights with CDC, which reduces source system impact while keeping your analytics data highly accurate.',
    icon: <ClockIcon className="w-6 h-6 text-brand-yellow" />
  },
  {
    title: 'Data Governance',
    description: 'Secure your data and meet regulations. Our Data Governance services include quality rules, metadata management, lineage tracking, and access controls.',
    icon: <ShieldCheckIcon className="w-6 h-6 text-brand-yellow" />
  }
];

// Exported Components
export const CogniAuraKeyModules = () => (
  <CogniAuraFeaturesLayout
    title="Key Modules" 
    subtitle="Powerful tools designed to accelerate your analytics journey"
    features={keyModules}
    columns={3}
    background="white"
  />
);

export const CogniAuraServicesList = () => (
  <CogniAuraFeaturesLayout
    title="Services to Accelerate Analytics" 
    subtitle="Comprehensive services to upgrade, optimize, and secure your data landscape"
    features={services}
    columns={3}
    background="light-grey"
  />
);
