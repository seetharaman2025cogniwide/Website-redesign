'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: LightBulbIcon,
    title: 'Cutting-Edge Innovation',
    description: 'Stay ahead with the latest AI technologies and machine learning algorithms tailored for your business needs.',
    color: 'text-neon-300'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption, compliance certifications, and data protection.',
    color: 'text-neon-400'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Rapid Deployment',
    description: 'Get up and running quickly with our streamlined implementation process and expert support team.',
    color: 'text-neon-300'
  },
  {
    icon: UserGroupIcon,
    title: 'Expert Support',
    description: '24/7 dedicated support from AI specialists and industry experts to ensure your success.',
    color: 'text-mint-300'
  },
  {
    icon: ChartBarIcon,
    title: 'Measurable ROI',
    description: 'Track and measure the impact of AI on your business with comprehensive analytics and reporting.',
    color: 'text-neon-300'
  },
  {
    icon: CogIcon,
    title: 'Seamless Integration',
    description: 'Integrate effortlessly with your existing systems and workflows without disrupting operations.',
    color: 'text-mint-300'
  }
];

const stats = [
  { label: 'Enterprise Clients', value: '15', suffix: '+' },
  { label: 'AI Solutions Deployed', value: '50', suffix: '+' },
  { label: 'Operational Efficiency', value: '60', suffix: '%' },
  { label: 'Client Satisfaction', value: '95', suffix: '%' }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 lg:py-20 bg-transparent relative overflow-hidden lg:-top-14">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-neon-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-mint-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Why Choose Cogniwide?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl text-night-400 max-w-3xl mx-auto"
          >
            Deep industry expertise with cutting-edge AI technology for real business value.
          </motion.p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="cw-glass cw-gradient-border cw-tilt text-center p-6 rounded-2xl"
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                <span data-cw-count>{stat.value}</span><span className="cw-glow-text">{stat.suffix}</span>
              </div>
              <div className="text-night-400 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
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
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="cw-glass cw-gradient-border cw-tilt group rounded-2xl p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-mint-300/8 border border-mint-300/15 flex items-center justify-center group-hover:bg-neon-400/15 group-hover:border-neon-400/40 transition-colors duration-300">
                    <IconComponent className={`cw-icon-float w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-night-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};