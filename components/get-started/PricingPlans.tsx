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
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-semibold tracking-wide uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
            Pricing Plans
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark-grey mb-6 tracking-tight"
          >
            Choose Your <span className="text-brand-blue">AI Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
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
              className={`group relative bg-white rounded-3xl p-8 lg:p-10 border transition-all duration-500 ease-out hover:-translate-y-2 flex flex-col h-full ${
                plan.popular 
                  ? 'border-brand-blue shadow-2xl shadow-brand-blue/10 ring-2 ring-brand-blue/20' 
                  : 'border-gray-200 shadow-lg hover:shadow-2xl hover:border-brand-blue/30'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-brand-blue text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header - Fixed Height */}
              <div className="text-center mb-8 flex-shrink-0">
                <div className="h-12 flex items-center justify-center mb-2">
                  <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark-grey text-center">
                    {plan.name}
                  </h3>
                </div>
                <div className="h-14 flex items-center justify-center mb-4">
                  <div className="text-4xl lg:text-5xl font-bold text-brand-blue">
                    {plan.price}
                  </div>
                </div>
                <div className="h-16 flex items-center justify-center">
                  <p className="text-gray-600 leading-relaxed text-center text-sm lg:text-base">
                    {plan.description}
                  </p>
                </div>
              </div>

              {/* Features List - Flexible Height */}
              <div className="flex-grow mb-8 min-h-[200px]">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-brand-blue/10 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 leading-relaxed text-sm lg:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button - Fixed at Bottom */}
              <div className="flex-shrink-0 mt-auto">
                <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-brand-blue text-white hover:bg-brand-blue-dark shadow-lg hover:shadow-xl' 
                    : 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
          <p className="text-gray-600 mb-6">
            All plans include 24/7 support, regular updates, and our satisfaction guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 border border-brand-blue text-brand-blue rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-all">
              Compare All Features
            </button>
            <button className="px-6 py-3 text-brand-blue font-semibold hover:text-brand-blue-dark transition-colors">
              Talk to Sales →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};