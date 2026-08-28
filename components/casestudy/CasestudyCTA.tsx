'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const CasestudyCTA = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-4xl font-bold mb-6"
        >
          We empower organizations to delight their customers and employees with ease.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-700 mb-8"
        >
          Do you want to see how we can help you start your digital journey?
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href="/contact">
            <button className="px-8 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
