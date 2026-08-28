'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  CalendarDaysIcon,
  MapPinIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline';

const contactMethods = [
  {
    icon: EnvelopeIcon,
    title: 'General Inquiries',
    details: 'reachus@cogniwide.com',
    description: 'We aim to respond within 24 hours',
    href: 'mailto:reachus@cogniwide.com',
  },
  {
    icon: EnvelopeIcon,
    title: 'Sales & Support',
    details: 'sales@cogniwide.com',
    description: 'Dedicated support for our enterprise clients',
    href: 'mailto:sales@cogniwide.com',
  },
  {
    icon: CalendarDaysIcon,
    title: 'Schedule Meeting',
    details: 'Book a consultation',
    description: '30-minute AI strategy consultation',
    href: 'mailto:reachus@cogniwide.com?subject=Schedule%20AI%20Consultation',
  },
  {
    icon: BuildingOffice2Icon,
    title: 'Headquarters',
    details: 'Global Presence',
    description: 'Offices in USA, UAE, UK, Singapore & India',
    href: '#',
  },
];

export default function ContactInfo() {
  return (
    <section className="relative bg-[#0B0A14] pt-8 pb-12 px-4 h-full overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Get in Touch
          </h2>
          <p className="text-xs sm:text-sm text-[#B8B6C4]">
            Choose the way that works best for you
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group flex items-start gap-4 p-5 bg-[#15151D]/90 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.5)] border border-[#29263A] hover:border-[#8B5CF6]/60 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] transition-all duration-300 backdrop-blur-xl"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-[#1A1829] border border-[#8B5CF6]/30 rounded-xl flex items-center justify-center group-hover:scale-105 group-hover:border-[#8B5CF6]/60 transition-all">
                <method.icon className="w-6 h-6 text-[#A78BFA]" />
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#A78BFA] transition-colors">
                  {method.title}
                </h3>
                <p className="text-sm font-semibold text-[#A78BFA] mb-1 truncate">
                  {method.details}
                </p>
                <p className="text-xs text-[#B8B6C4] leading-relaxed">
                  {method.description}
                </p>
              </div>

              {/* Hover Arrow */}
              <svg
                className="w-4 h-4 text-[#8B5CF6] opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          ))}
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center bg-[#15151D]/60 border border-[#29263A] rounded-2xl p-6 backdrop-blur-md"
        >
          <p className="text-xs sm:text-sm text-[#B8B6C4] mb-6">
            Join Leading Global Enterprises Transforming with AI
          </p>

          <div className="flex justify-center gap-8 sm:gap-16">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white via-[#A78BFA] to-[#8B5CF6] bg-clip-text text-transparent mb-1">
                24h
              </div>
              <div className="text-[11px] text-[#777583] uppercase tracking-wider">Response</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white via-[#A78BFA] to-[#8B5CF6] bg-clip-text text-transparent mb-1">
                99%
              </div>
              <div className="text-[11px] text-[#777583] uppercase tracking-wider">Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white via-[#A78BFA] to-[#8B5CF6] bg-clip-text text-transparent mb-1">
                50+
              </div>
              <div className="text-[11px] text-[#777583] uppercase tracking-wider">AI Projects</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
