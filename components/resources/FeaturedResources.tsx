'use client';

import React from 'react';
import { motion } from 'framer-motion';

const resources = [
  {
    title: 'The Future of Enterprise AI',
    type: 'Whitepaper',
    description: 'A comprehensive guide to implementing AI in large organizations.',
    date: '2024-01-15'
  },
  {
    title: 'Banking AI Success Story',
    type: 'Case Study',
    description: 'How a major bank reduced fraud by 85% with our AI solutions.',
    date: '2024-01-10'
  },
  {
    title: 'AI Implementation Best Practices',
    type: 'Webinar',
    description: 'Learn from our experts about successful AI deployment strategies.',
    date: '2024-01-05'
  }
];

export const FeaturedResources = () => {
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
            Featured Resources
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-sm font-medium text-brand-blue bg-brand-blue/10 px-2 py-1 rounded-full inline-block mb-4">
                {resource.type}
              </div>
              <h3 className="text-xl font-bold text-brand-dark-grey mb-3">{resource.title}</h3>
              <p className="text-brand-medium-grey mb-4">{resource.description}</p>
              <div className="text-sm text-brand-medium-grey mb-4">{resource.date}</div>
              <button className="text-brand-blue font-semibold hover:underline">
                Read More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};