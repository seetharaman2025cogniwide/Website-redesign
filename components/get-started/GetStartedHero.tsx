'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { RocketLaunchIcon, ChartBarIcon, CogIcon } from '@heroicons/react/24/outline';

export const GetStartedHero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0 bg-brand-blue/5"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Subtle accent elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center lg:justify-start mb-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-brand-blue shadow-lg">
                  <RocketLaunchIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Get Started with AI
              </motion.h1>

              <motion.h2
                className="text-xl sm:text-2xl lg:text-3xl text-brand-blue mb-6 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transform Your Business Today
              </motion.h2>

              <motion.p
                className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Begin your AI transformation journey with Cogniwide. Our proven methodology and expert guidance ensure successful implementation and maximum ROI from day one.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <button className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-blue-dark transition-all shadow-lg hover:shadow-xl">
                  Schedule Consultation
                </button>
                <button className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-blue hover:text-white transition-all">
                  View Pricing
                </button>
              </motion.div>
            </div>

            {/* Right Visual - Dashboard */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white">
                        <RocketLaunchIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">AI Transformation Dashboard</div>
                        <div className="text-sm text-gray-600">Implementation Progress</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-500 font-medium">Active</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200">
                      <div className="text-2xl font-bold text-brand-blue">3</div>
                      <div className="text-xs text-gray-600">Weeks to Deploy</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center border border-green-200">
                      <div className="text-2xl font-bold text-green-600">85%</div>
                      <div className="text-xs text-gray-600">Success Rate</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center border border-purple-200">
                      <div className="text-2xl font-bold text-purple-600">24/7</div>
                      <div className="text-xs text-gray-600">Support</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center space-x-3">
                        <ChartBarIcon className="w-5 h-5 text-brand-blue" />
                        <span className="text-sm font-medium text-gray-900">Assessment Complete</span>
                      </div>
                      <span className="text-xs text-green-500 font-medium">✓ Done</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center space-x-3">
                        <CogIcon className="w-5 h-5 text-brand-blue" />
                        <span className="text-sm font-medium text-gray-900">Solution Design</span>
                      </div>
                      <span className="text-xs text-blue-500 font-medium">In Progress</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center space-x-3">
                        <RocketLaunchIcon className="w-5 h-5 text-gray-400" />
                        <span className="text-sm font-medium text-gray-500">Deployment</span>
                      </div>
                      <span className="text-xs text-gray-400 font-medium">Pending</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};