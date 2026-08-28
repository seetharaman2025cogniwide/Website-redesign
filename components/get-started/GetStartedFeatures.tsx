'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Rapid Implementation',
    description: 'Get your AI solutions up and running in weeks, not months, with our proven deployment methodology.',
    icon: ClockIcon,
    benefits: ['3-week average deployment', 'Pre-built templates', 'Minimal disruption to operations']
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-level security with on-premises deployment options and complete data sovereignty.',
    icon: ShieldCheckIcon,
    benefits: ['SOC 2 Type II certified', 'GDPR compliant', 'On-premises deployment']
  },
  {
    title: 'Expert Support Team',
    description: 'Dedicated AI specialists and solution architects to guide your transformation journey.',
    icon: UserGroupIcon,
    benefits: ['24/7 technical support', 'Dedicated success manager', 'Regular optimization reviews']
  },
  {
    title: 'Measurable ROI',
    description: 'Track and measure the business impact of your AI investments with comprehensive analytics.',
    icon: ChartBarIcon,
    benefits: ['Real-time performance metrics', 'ROI tracking dashboard', 'Custom reporting']
  },
  {
    title: 'Seamless Integration',
    description: 'Connect with your existing systems and workflows without disrupting current operations.',
    icon: CogIcon,
    benefits: ['API-first architecture', '200+ pre-built connectors', 'Custom integration support']
  },
  {
    title: 'Scalable Platform',
    description: 'Start small and scale to enterprise-wide deployment as your AI maturity grows.',
    icon: RocketLaunchIcon,
    benefits: ['Flexible scaling options', 'Multi-tenant architecture', 'Global deployment ready']
  }
];

export const GetStartedFeatures = () => {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-semibold tracking-wide uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
            Why Choose Us
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark-grey mb-6 tracking-tight"
          >
            Built for <span className="text-brand-blue">Enterprise Success</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Everything you need to successfully implement and scale AI across your organization.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-strong transition-all duration-500 ease-out hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue/20 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-brand-blue" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-brand-dark-grey mb-3 group-hover:text-brand-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};