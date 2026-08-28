'use client'

import { motion } from 'framer-motion'
import {
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline'

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
    description: 'Dedicated support for our clients',
    href: 'mailto:sales@cogniwide.com',
  },
  {
    icon: CalendarDaysIcon,
    title: 'Schedule Meeting',
    details: 'Book a consultation',
    description: '30-minute strategy session',
    href: '#',
  },
]

export default function ContactInfo() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white pt-6 pb-6 px-6 h-full overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-32 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Get in Touch
          </h2>
          <p className="text-xs text-gray-600">
            Choose the way that works best for you
          </p>
        </motion.div>

        {/* Contact Methods – Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <method.icon className="w-6 h-6 text-blue-600" />
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-gray-900 mb-0.5">
                  {method.title}
                </h3>
                <p className="text-sm font-medium text-blue-600 mb-0.5 truncate">
                  {method.details}
                </p>
                <p className="text-xs text-gray-600">
                  {method.description}
                </p>
              </div>

              {/* Hover Arrow */}
              <svg
                className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          ))}
        </div>

        {/* Social Proof – Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-gray-600 mb-4">
            Join Leading Enterprises already transforming with AI
          </p>

          <div className="flex justify-center gap-8 lg:gap-12">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-0.5">24h</div>
              <div className="text-xs text-gray-600 uppercase tracking-wider">Response</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-0.5">99%</div>
              <div className="text-xs text-gray-600 uppercase tracking-wider">Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-0.5">15+</div>
              <div className="text-xs text-gray-600 uppercase tracking-wider">Clients</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
