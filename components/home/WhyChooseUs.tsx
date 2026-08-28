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
    color: 'text-yellow-600'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption, compliance certifications, and data protection.',
    color: 'text-green-600'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Rapid Deployment',
    description: 'Get up and running quickly with our streamlined implementation process and expert support team.',
    color: 'text-blue-600'
  },
  {
    icon: UserGroupIcon,
    title: 'Expert Support',
    description: '24/7 dedicated support from AI specialists and industry experts to ensure your success.',
    color: 'text-purple-600'
  },
  {
    icon: ChartBarIcon,
    title: 'Measurable ROI',
    description: 'Track and measure the impact of AI on your business with comprehensive analytics and reporting.',
    color: 'text-red-600'
  },
  {
    icon: CogIcon,
    title: 'Seamless Integration',
    description: 'Integrate effortlessly with your existing systems and workflows without disrupting operations.',
    color: 'text-indigo-600'
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
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden lg:-top-14">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Why Choose Cogniwide?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
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
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 ease-out"
            >
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stat.value}<span className="text-brand-blue">{stat.suffix}</span>
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
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
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-yellow-100 transition-colors duration-300">
                    <IconComponent className={`w-8 h-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};