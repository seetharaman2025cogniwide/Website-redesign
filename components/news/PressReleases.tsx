'use client';

import React from 'react';
import { motion } from 'framer-motion';

const releases = [
  {
    title: 'Machine Learning Trends for 2026',
    date: '2025-12-20',
    summary: 'Key trends shaping the future of machine learning and predictive analytics.'
  },
  {
    title: 'Building Resilient Data Pipelines',
    date: '2025-12-05',
    summary: 'Best practices for designing fault-tolerant data processing systems.'
  },
  {
    title: 'The Rise of Edge Computing',
    date: '2025-11-22',
    summary: 'How edge computing is revolutionizing real-time data processing.'
  }
];

export const PressReleases = () => {
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
            Featured Articles
          </motion.h2>
        </div>

        <div className="space-y-6">
          {releases.map((release, index) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-brand-dark-grey mb-2">{release.title}</h3>
                  <p className="text-brand-medium-grey mb-2">{release.summary}</p>
                  <div className="text-sm text-brand-medium-grey">{release.date}</div>
                </div>
                <button className="mt-4 md:mt-0 text-brand-blue font-semibold hover:underline">
                  Read Full Article →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};