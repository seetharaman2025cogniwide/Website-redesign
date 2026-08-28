'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon } from '@heroicons/react/24/outline';

// Define consistent color scheme
const ACCENT_COLOR = 'text-blue-600';
const ACCENT_BG = 'bg-blue-600';
const PRIMARY_TEXT = 'text-gray-900';
const SECONDARY_TEXT = 'text-gray-600';

export const DemoScheduler = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-4xl font-extrabold ${PRIMARY_TEXT} mb-4`}
          >
            Schedule Your <span className={ACCENT_COLOR}>Demo</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className={`text-lg ${SECONDARY_TEXT}`}
          >
            Choose a time that works for you and we'll show you how our AI solutions can benefit your business.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          // Added shadow and border for better definition
          className="bg-gray-50 rounded-xl shadow-lg border border-gray-100 p-8 lg:p-12" 
        >
          <div className="text-center">
            <div className="mb-6">
              {/* Applied ACCENT_COLOR to the icon */}
              <CalendarIcon className={`w-16 h-16 mx-auto ${ACCENT_COLOR}`} />
            </div>
            <h3 className={`text-2xl font-bold ${PRIMARY_TEXT} mb-4`}>Demo Booking Coming Soon</h3>
            <p className={`${SECONDARY_TEXT} mb-8 max-w-lg mx-auto`}>
              We're currently setting up our integrated demo booking system. In the meantime, please contact us directly to schedule your personalized demonstration.
            </p>
            {/* Applied ACCENT_BG to the button */}
            <button className={`${ACCENT_BG} text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md`}>
              Contact Us to Schedule
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};