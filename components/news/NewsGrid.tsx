'use client';

import React from 'react';
import { motion } from 'framer-motion';

const news = [
  {
    title: 'The Future of AI in Enterprise',
    excerpt: 'Exploring how artificial intelligence is transforming business operations and decision-making processes.',
    date: '2025-12-15',
    category: 'AI',
    image: '/images/blog/ai.jpg'
  },
  {
    title: 'Cloud-Native Development Best Practices',
    excerpt: 'Learn about modern cloud architecture and how to build scalable, resilient applications.',
    date: '2025-11-28',
    category: 'Cloud Computing',
    image: '/images/blog/js.jpg'
  },
  {
    title: 'AI in the Age of IoT',
    excerpt: 'How AI is reshaping the landscape of connected devices and smart infrastructure.',
    date: 'March 15, 2024',
    category: 'AI & IoT',
    image: '/images/blog/blog1.png'
  },
  {
    title: 'Future of Cloud Computing',
    excerpt: 'Exploring the next generation of cloud technologies and their impact on enterprise architecture.',
    date: 'March 10, 2024',
    category: 'Cloud Engineering',
    image: '/images/blog/blog-img1.png'
  },
  {
    title: 'Data Engineering Best Practices',
    excerpt: 'Essential guidelines for building scalable and reliable data pipelines.',
    date: 'March 5, 2024',
    category: 'Data Engineering',
    image: '/images/blog/ai.jpg'
  },
  {
    title: 'Intelligent Automation Trends',
    excerpt: 'The latest trends and innovations in enterprise automation and RPA.',
    date: 'February 28, 2024',
    category: 'Intelligent Automation',
    image: '/images/blog/rasa.jpg'
  }
];

import Image from "next/image";

export const NewsGrid = () => {
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
            Latest Blog Posts
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="relative w-full h-48">
                <Image src={article.image} alt={article.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-sm font-medium text-brand-blue bg-brand-blue/10 px-2 py-1 rounded-full inline-block mb-4">
                  {article.category}
                </div>
                <h3 className="text-xl font-bold text-brand-dark-grey mb-3">{article.title}</h3>
                <p className="text-brand-medium-grey mb-4 flex-1">{article.excerpt}</p>
                <div className="text-sm text-brand-medium-grey">{article.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};