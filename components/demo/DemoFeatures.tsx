'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ComputerDesktopIcon, 
  QuestionMarkCircleIcon, 
  MapIcon,
  CheckCircleIcon, // Standard Heroicon replacement for the custom SVG
  ArrowRightIcon
} from '@heroicons/react/24/outline';

// Define consistent color scheme
const ACCENT_COLOR = 'text-blue-600';
const ACCENT_BG = 'bg-blue-600';
const ACCENT_LIGHT_BG = 'bg-blue-50';
const PRIMARY_TEXT = 'text-gray-900';
const SECONDARY_TEXT = 'text-gray-600';

const features = [
  {
    title: 'Live Product Walkthrough',
    description: 'See our AI solutions in action with real-time demonstrations.',
    icon: ComputerDesktopIcon
  },
  {
    title: 'Custom Use Cases',
    description: 'We\'ll tailor the demo to your specific industry and business needs.',
    icon: CheckCircleIcon 
  },
  {
    title: 'Q&A Session',
    description: 'Get all your questions answered by our AI experts.',
    icon: QuestionMarkCircleIcon
  },
  {
    title: 'Implementation Roadmap',
    description: 'Learn about the implementation process and timeline.',
    icon: MapIcon
  }
];

export const DemoFeatures = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-extrabold ${PRIMARY_TEXT} mb-4`}
          >
            What to <span className={ACCENT_COLOR}>Expect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className={`text-lg ${SECONDARY_TEXT} max-w-3xl mx-auto`}
          >
            Our 45-minute demo session is designed to give you a comprehensive understanding of our AI capabilities.
          </motion.p>
        </div>

        {/* --- Features Flow Grid --- */}
        <div className="relative pt-10">
            {/* Horizontal Connector Line (Only on large screens) */}
            <div className={`absolute top-20 left-10 right-10 h-1 ${ACCENT_LIGHT_BG} hidden lg:block`}></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {features.map((feature, index) => (
                <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="relative pt-8 p-6 bg-gray-50/70 border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    {/* Step Icon and Number Container */}
                    <div 
                        className={`absolute left-1/2 transform -translate-x-1/2 -top-6 
                                w-16 h-16 ${ACCENT_BG} rounded-full 
                                flex items-center justify-center text-white 
                                ring-4 ring-white shadow-xl`}
                    >
                        {/* The Step Number */}
                        <span className="absolute top-0 right-0 w-6 h-6 bg-gray-900 rounded-full text-xs font-bold flex items-center justify-center ring-2 ring-white">
                            {index + 1}
                        </span>
                        
                        {/* The Feature Icon */}
                        <feature.icon className="w-8 h-8" />
                    </div>
                    
                    <div className="text-center mt-4">
                        <h3 className={`text-xl font-extrabold ${PRIMARY_TEXT} mb-3`}>{feature.title}</h3>
                        <p className={`text-base ${SECONDARY_TEXT} leading-relaxed`}>{feature.description}</p>
                    </div>

                    {/* Mobile/Tablet Arrow Connector */}
                    {index < features.length - 1 && (
                        <div className="mt-6 text-center lg:hidden">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.15 + 0.5 }}
                                viewport={{ once: true }}
                            >
                                <ArrowRightIcon className={`w-6 h-6 mx-auto ${ACCENT_COLOR}`} />
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            ))}
            </div>
        </div>

      </div>
    </section>
  );
};