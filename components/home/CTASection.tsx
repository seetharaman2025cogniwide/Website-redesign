'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CalendarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

interface CTASectionProps {
  theme?: 'light' | 'dark';
}

export const CTASection = ({ theme = 'light' }: CTASectionProps) => {
  const isDark = theme === 'dark';

  return (
    <section className={`py-20 relative overflow-hidden ${isDark ? 'bg-[#08090B]' : 'bg-[#F8FAFC]'}`}>
      {isDark && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7C3AED]/10 rounded-full blur-[140px]" />
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-4xl font-extrabold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            Ready to{' '}
            <span className={isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC] drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]' : 'text-blue-600'}>
              Scale with AI?
            </span>
          </motion.h2>
          <p className={`max-w-xl mx-auto font-normal text-base md:text-lg ${isDark ? 'text-[#B8B6C4]' : 'text-slate-600'}`}>
            Select an entry point to begin your digital transformation journey.
          </p>
        </div>

        {/* Action Row with Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Demo Option */}
          <motion.div 
            whileHover={{ y: -5 }}
            className={`p-8 rounded-3xl border transition-all duration-300 ${
              isDark 
                ? 'bg-[#15151D]/90 border-[#29263A] hover:border-[#8B5CF6]/50 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] backdrop-blur-xl' 
                : 'bg-white border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5'
            }`}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className={`p-3 rounded-2xl ${isDark ? 'bg-[#1A1829] border border-[#8B5CF6]/40 shadow-[0_0_15px_rgba(124,58,237,0.3)]' : 'bg-blue-50'}`}>
                <CalendarIcon className={`w-6 h-6 ${isDark ? 'text-[#A78BFA]' : 'text-blue-600'}`} />
              </div>
              <Link href="/contact">
                <h3 className={`text-lg font-bold tracking-tight ${isDark ? 'text-white hover:text-[#A78BFA]' : 'text-slate-900'}`}>Schedule Demo</h3>
              </Link>
            </div>
            <p className={`text-sm mb-6 leading-relaxed ${isDark ? 'text-[#B8B6C4]' : 'text-slate-500'}`}>
              Watch our AI agents solve industry-specific complex workflows in real-time.
            </p>
            <Link href="/contact" className={`inline-flex items-center text-sm font-bold group ${isDark ? 'text-[#A78BFA] hover:text-white' : 'text-blue-600'}`}>
              Book a Time <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Consultation Option */}
          <motion.div 
            whileHover={{ y: -5 }}
            className={`p-8 rounded-3xl border transition-all duration-300 ${
              isDark 
                ? 'bg-[#15151D]/90 border-[#29263A] hover:border-[#8B5CF6]/50 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] backdrop-blur-xl' 
                : 'bg-white border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5'
            }`}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className={`p-3 rounded-2xl ${isDark ? 'bg-[#1A1829] border border-[#8B5CF6]/40 shadow-[0_0_15px_rgba(124,58,237,0.3)]' : 'bg-slate-50'}`}>
                <ChatBubbleLeftRightIcon className={`w-6 h-6 ${isDark ? 'text-[#A78BFA]' : 'text-slate-600'}`} />
              </div>
              <h3 className={`text-lg font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Consultation</h3>
            </div>
            <p className={`text-sm mb-6 leading-relaxed ${isDark ? 'text-[#B8B6C4]' : 'text-slate-500'}`}>
              Speak with our solution architects to design your custom AI roadmap.
            </p>
            <Link href="/contact" className={`inline-flex items-center text-sm font-bold group ${isDark ? 'text-[#A78BFA] hover:text-white' : 'text-blue-600'}`}>
              Free Strategy Call <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Get Started - Focus Action */}
          <motion.div 
            whileHover={{ y: -5 }}
            className={`p-8 rounded-3xl border transition-all duration-300 ${
              isDark 
                ? 'bg-[#15151D]/90 border-2 border-[#8B5CF6] shadow-[0_0_35px_rgba(124,58,237,0.3)] backdrop-blur-xl' 
                : 'bg-white border-2 border-blue-600 shadow-lg shadow-blue-500/10'
            }`}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className={`p-3 rounded-2xl ${isDark ? 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] shadow-[0_0_15px_rgba(124,58,237,0.5)]' : 'bg-blue-600'}`}>
                <ArrowRightIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-lg font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Get Started</h3>
            </div>
            <p className={`text-sm mb-6 leading-relaxed ${isDark ? 'text-[#B8B6C4]' : 'text-slate-500'}`}>
              Ready to deploy? Access our enterprise platform and begin onboarding.
            </p>
            <Link 
              href="/get-started" 
              className={`block w-full py-3.5 rounded-xl text-sm font-bold transition-all text-center ${
                isDark 
                  ? 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              Quick Setup
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};