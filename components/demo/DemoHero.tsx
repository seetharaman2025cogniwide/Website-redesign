'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Define consistent color scheme
const ACCENT_COLOR = 'text-blue-600';
const PRIMARY_TEXT = 'text-gray-900';
const SECONDARY_TEXT = 'text-gray-600';

export const DemoHero = () => {
  return (
    // Updated background to a light gradient with a blue accent
    <section className="py-24 md:py-32 bg-gradient-to-br from-white to-blue-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            // Changed text color to dark gray and highlighted 'AI in Action'
            className={`text-5xl md:text-7xl font-bold ${PRIMARY_TEXT} mb-6`}
          >
            See <span className={ACCENT_COLOR}>AI in Action</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            // Changed secondary text color for readability
            className={`text-xl md:text-2xl ${SECONDARY_TEXT} max-w-4xl mx-auto`}
          >
            Book a personalized demo and discover how our AI solutions can <b>transform your business operations</b>.
          </motion.p>

          {/* Optional: Add a subtle call to action banner or button row here if needed */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10"
          >
            <button 
              className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              Schedule Your Demo Now
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};