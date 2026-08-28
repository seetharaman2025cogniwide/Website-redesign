'use client';

import React from 'react';
import { motion } from 'framer-motion';

const comparisonData = [
  {
    category: 'Development Speed',
    traditional: 'Manual processes, lengthy cycles',
    withCogni: '70% faster with AI automation',
    improvement: '+70%'
  },
  {
    category: 'Testing Coverage',
    traditional: 'Limited manual testing',
    withCogni: 'Comprehensive AI-powered testing',
    improvement: '+85%'
  },
  {
    category: 'Deployment Time',
    traditional: 'Hours to days for deployment',
    withCogni: 'Minutes with automated pipelines',
    improvement: '+90%'
  },
  {
    category: 'Error Detection',
    traditional: 'Reactive bug fixing',
    withCogni: 'Proactive AI-driven detection',
    improvement: '+75%'
  }
];

export const SolutionComparison = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-brand-dark-grey mb-4"
          >
            Transform Your Development Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-brand-medium-grey max-w-3xl mx-auto"
          >
            See how our AI solutions compare to traditional development approaches.
          </motion.p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            <div className="bg-brand-dark-grey text-white p-6">
              <h3 className="text-lg font-bold">Comparison</h3>
            </div>
            <div className="bg-gray-100 p-6">
              <h3 className="text-lg font-bold text-brand-dark-grey">Traditional Approach</h3>
            </div>
            <div className="bg-brand-yellow p-6">
              <h3 className="text-lg font-bold text-brand-dark-grey">With Cogniwide Solutions</h3>
            </div>
            <div className="bg-green-100 p-6">
              <h3 className="text-lg font-bold text-green-800">Improvement</h3>
            </div>
          </div>

          {comparisonData.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-gray-200"
            >
              <div className="p-6 font-semibold text-brand-dark-grey bg-gray-50">
                {item.category}
              </div>
              <div className="p-6 text-brand-medium-grey">
                {item.traditional}
              </div>
              <div className="p-6 text-brand-dark-grey font-medium">
                {item.withCogni}
              </div>
              <div className="p-6 text-green-800 font-bold text-xl">
                {item.improvement}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};