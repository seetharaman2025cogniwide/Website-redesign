'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const solutions = [
  {
    name: 'CogniVibe',
    description: 'AI-powered SDLC framework that unifies the software development lifecycle. Automates workflows, eliminates friction, and accelerates product delivery.',
    features: ['Unified SDLC Framework', 'Workflow Automation', 'Friction Elimination', 'Accelerated Delivery'],
    href: '/solutions/cognivibe',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: 'from-indigo-600 to-purple-600'
  },
  {
    name: 'CogniTest',
    description: 'AI-powered test automation solution covering functional & non-functional testing, test data generation, and screen comparison via CogniPixel.',
    features: ['Functional Testing', 'Non-Functional Testing', 'Test Data Generation', 'CogniPixel Screen Comparison'],
    href: '/solutions/cognitest',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: 'from-emerald-600 to-teal-600'
  },
  {
    name: 'CogniOps',
    description: 'AI-powered Cloud & DevOps solution enabling seamless DevOps pipeline creation with Helm charts, and cloud-to-cloud migration.',
    features: ['DevOps Pipeline Creation', 'Helm Chart Automation', 'Cloud-to-Cloud Migration', 'Infrastructure Management'],
    href: '/solutions/cogniops',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 16.5C3 15 3 12.5 4.5 11L11 4.5C12.5 3 15 3 16.5 4.5C18 6 18 8.5 16.5 10L10 16.5C8.5 18 6 18 4.5 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.5 7.5L16.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: 'from-orange-600 to-red-600'
  }
];

export const SolutionGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-brand-dark-grey mb-4"
          >
            Our AI Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-brand-medium-grey max-w-3xl mx-auto"
          >
            Comprehensive AI-powered solutions designed to transform every aspect of your software development and operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center text-white shadow-lg`}>
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark-grey">{solution.name}</h3>
                  </div>
                </div>
                
                <p className="text-brand-medium-grey mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                      <span className="text-brand-medium-grey">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link href={solution.href}>
                  <button className="w-full border border-brand-medium-grey text-brand-dark-grey px-4 py-2 rounded-lg font-medium hover:bg-brand-yellow hover:text-brand-dark-grey hover:border-brand-yellow transition-all duration-300 group-hover:bg-brand-yellow group-hover:border-brand-yellow flex items-center justify-center">
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};