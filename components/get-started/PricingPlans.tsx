'use client';

import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: 'Custom',
    description: 'Perfect for small businesses getting started with AI',
    features: [
      'AI readiness assessment',
      'Basic automation setup',
      'Email support',
      'Monthly reporting',
      'Standard integrations'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: 'Custom',
    description: 'Ideal for growing companies ready to scale AI',
    features: [
      'Everything in Starter',
      'Advanced AI models',
      'Custom integrations',
      'Priority support',
      'Weekly optimization'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with complex needs',
    features: [
      'Everything in Professional',
      'Dedicated AI team',
      '24/7 support',
      'Custom development',
      'SLA guarantees'
    ],
    popular: false
  }
];

export const PricingPlans = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-[#0D0C1A] relative overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#7C3AED]/12 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#15151D]/90 border border-[#29263A] text-[#A78BFA] rounded-full text-xs font-semibold uppercase tracking-wider mb-6 shadow-[0_0_18px_rgba(124,58,237,0.2)] backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse"></span>
            Pricing Plans
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC] drop-shadow-[0_0_25px_rgba(139,92,246,0.4)]">
              AI Journey
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#B8B6C4] max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Flexible pricing options designed to grow with your business and AI maturity level.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              viewport={{ once: true, margin: "-50px" }}
              className={`group relative rounded-3xl p-8 lg:p-10 border transition-all duration-500 ease-out hover:-translate-y-2 flex flex-col h-full backdrop-blur-xl ${
                plan.popular 
                  ? 'bg-[#15151D]/95 border-2 border-[#8B5CF6] shadow-[0_0_35px_rgba(139,92,246,0.25)] ring-1 ring-[#8B5CF6]/50' 
                  : 'bg-[#15151D]/90 border-[#29263A] shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:border-[#8B5CF6]/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white text-xs sm:text-sm font-bold px-6 py-1.5 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)] border border-[#A78BFA]/30 tracking-wide uppercase">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8 flex-shrink-0">
                <div className="h-12 flex items-center justify-center mb-2">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white text-center">
                    {plan.name}
                  </h3>
                </div>
                <div className="h-14 flex items-center justify-center mb-4">
                  <div className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#C084FC]">
                    {plan.price}
                  </div>
                </div>
                <div className="h-16 flex items-center justify-center">
                  <p className="text-[#B8B6C4] leading-relaxed text-center text-sm lg:text-base font-normal">
                    {plan.description}
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div className="flex-grow mb-8 min-h-[200px] border-t border-[#29263A]/80 pt-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-[#A78BFA]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300 leading-relaxed text-sm lg:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="flex-shrink-0 mt-auto">
                <a
                  href="/contact"
                  className={`block w-full text-center py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:-translate-y-0.5' 
                      : 'border border-[#29263A] bg-[#1E1C2E]/80 hover:bg-[#252238] hover:border-[#8B5CF6]/50 text-white hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 lg:mt-20"
        >
          <p className="text-[#B8B6C4] mb-6 font-normal">
            All plans include 24/7 support, regular updates, and our satisfaction guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="px-6 py-3 border border-[#29263A] bg-[#15151D] hover:bg-[#1E1C2E] hover:border-[#8B5CF6]/40 text-gray-200 hover:text-white rounded-xl font-semibold backdrop-blur-sm transition-all text-sm sm:text-base"
            >
              Compare All Features
            </a>
            <a
              href="/contact"
              className="px-6 py-3 text-[#A78BFA] hover:text-[#C084FC] font-semibold transition-colors flex items-center gap-1.5 text-sm sm:text-base"
            >
              Talk to Sales <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};