'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DocumentIcon, ChartBarIcon, VideoCameraIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const categories = [
  {
    title: 'Whitepapers',
    description: 'In-depth research and analysis on AI trends and technologies.',
    icon: <DocumentIcon className="w-8 h-8" />,
    count: '25+'
  },
  {
    title: 'Case Studies',
    description: 'Real-world examples of successful AI implementations.',
    icon: <ChartBarIcon className="w-8 h-8" />,
    count: '50+'
  },
  {
    title: 'Webinars',
    description: 'Educational sessions with AI experts and industry leaders.',
    icon: <VideoCameraIcon className="w-8 h-8" />,
    count: '30+'
  },
  {
    title: 'Blog Posts',
    description: 'Latest insights and updates from our AI experts.',
    icon: <DocumentTextIcon className="w-8 h-8" />,
    count: '100+'
  }
];

export const ResourceCategories = () => {
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
            Explore Our Resources
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-brand-dark-grey mb-3">{category.title}</h3>
              <p className="text-brand-medium-grey mb-4">{category.description}</p>
              <div className="text-brand-blue font-semibold">{category.count} resources</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};