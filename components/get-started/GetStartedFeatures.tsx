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
    <section className="py-20 lg:py-32 bg-[#0B0A14] relative overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#15151D]/90 border border-[#29263A] text-[#A78BFA] rounded-full text-xs font-semibold uppercase tracking-wider mb-6 shadow-[0_0_18px_rgba(124,58,237,0.2)] backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse"></span>
            Why Choose Us
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            Built for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC] drop-shadow-[0_0_25px_rgba(139,92,246,0.4)]">
              Enterprise Success
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#B8B6C4] max-w-3xl mx-auto leading-relaxed font-normal"
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
                className="group relative bg-[#15151D]/90 rounded-2xl p-8 border border-[#29263A] shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:border-[#8B5CF6]/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-500 ease-out hover:-translate-y-2 backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                      <IconComponent className="w-7 h-7 text-[#A78BFA]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#A78BFA] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[#B8B6C4] leading-relaxed mb-6 text-sm sm:text-base font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Benefits */}
                <ul className="space-y-2.5 pt-4 border-t border-[#29263A]/80">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-[#8B5CF6] rounded-full mr-3 flex-shrink-0 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};