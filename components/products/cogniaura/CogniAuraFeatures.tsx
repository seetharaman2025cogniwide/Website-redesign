'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import Section from '@/components/layout/Section';
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
  return (
    <Section background={background} padding="lg">
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-brand-dark-grey mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-xl text-brand-medium-grey max-w-3xl mx-auto"
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
              <Card padding="lg" className="h-full hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      {React.cloneElement(feature.icon as React.ReactElement, { className: "w-6 h-6 text-blue-600" })}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-brand-dark-grey mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-brand-medium-grey mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    {feature.benefits && (
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-brand-dark-grey">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </Section>
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
