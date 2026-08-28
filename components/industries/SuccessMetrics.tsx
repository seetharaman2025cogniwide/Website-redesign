'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Metric {
  label: string;
  value: string;
  description: string;
  icon: string | React.ReactElement;
  trend?: 'up' | 'down' | 'stable';
  color: 'blue' | 'green' | 'yellow' | 'purple';
}

interface SuccessMetricsProps {
  industry: string;
  metrics: Metric[];
}

export function SuccessMetrics({ industry, metrics }: SuccessMetricsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const colorClasses = {
    blue: {
      bg: 'bg-gradient-to-br from-blue-50 to-blue-100/50',
      border: 'border-blue-200/60',
      text: 'text-blue-700',
      icon: 'text-blue-600',
      glow: 'shadow-blue-100/50',
    },
    green: {
      bg: 'bg-gradient-to-br from-emerald-50 to-emerald-100/50',
      border: 'border-emerald-200/60',
      text: 'text-emerald-700',
      icon: 'text-emerald-600',
      glow: 'shadow-emerald-100/50',
    },
    yellow: {
      bg: 'bg-gradient-to-br from-yellow-50 to-amber-100/50',
      border: 'border-yellow-200/60',
      text: 'text-yellow-700',
      icon: 'text-yellow-600',
      glow: 'shadow-yellow-100/50',
    },
    purple: {
      bg: 'bg-gradient-to-br from-purple-50 to-purple-100/50',
      border: 'border-purple-200/60',
      text: 'text-purple-700',
      icon: 'text-purple-600',
      glow: 'shadow-purple-100/50',
    },
  };

  const trendIcons = {
    up: (
        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
        </svg>
      ),
      down: (
        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-9.2 9.2M7 7v10h10" />
        </svg>
      ),
      stable: (
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      ),
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-white via-gray-50/50 to-yellow-50/30 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-r from-yellow-400/8 to-amber-400/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/6 to-cyan-400/4 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-400/3 to-transparent rounded-full blur-3xl"></div>
        {/* Refined Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-yellow-100/80 backdrop-blur-sm text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-yellow-200/60"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            <span>Proven Results</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            Measurable Success in {industry}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real-world impact and transformative results from our AI implementations
          </p>
        </motion.div>

        {/* Enhanced Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => {
            const colors = colorClasses[metric.color];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8 text-center hover:shadow-xl ${colors.glow} transition-all duration-500 ease-out backdrop-blur-sm group`}
              >
                <div className={`w-20 h-20 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 border-2 ${colors.border} group-hover:scale-110 transition-transform duration-300`}>
                  {typeof metric.icon === 'string' ? (
                    <span className={`text-3xl ${colors.icon} group-hover:scale-110 transition-transform duration-300`}>{metric.icon}</span>
                  ) : (
                    <div className={`${colors.icon} group-hover:scale-110 transition-transform duration-300`}>{metric.icon}</div>
                  )}
                </div>
                
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
                    transition={{ duration: 1.2, delay: 0.8 + index * 0.15, ease: "easeOut" }}
                    className={`text-4xl font-bold ${colors.text} group-hover:scale-105 transition-transform duration-300`}
                  >
                    {metric.value}
                  </motion.div>
                  {metric.trend && (
                    <motion.div
                      initial={{ opacity: 0, rotate: -180 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    >
                      {trendIcons[metric.trend]}
                    </motion.div>
                  )}
                </div>
                
                <h3 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-gray-800 transition-colors">
                  {metric.label}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>



        {/* Enhanced CTA Section - Three Card Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
        >
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Ready to <span className="text-brand-blue">Transform Your Business?</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Join hundreds of forward-thinking companies revolutionizing operations with our AI solutions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Schedule a Demo Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m0 4l-6 6m6-6h6m-6 0v4m0 0v10a2 2 0 01-2 2H8a2 2 0 01-2-2V11m8 0H8m8 0l-4-4m4 4l-4 4" />
                  </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Schedule a Demo</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                See our AI solutions in action with a personalized demonstration.
              </p>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Book Demo
              </motion.button>
            </motion.div>

            {/* Free Consultation Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Free Consultation</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Expert advice on how AI can transform your specific business needs.
              </p>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get Consultation
              </motion.button>
            </motion.div>

            {/* Start Your Journey Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Start Your Journey</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Begin your AI transformation with our comprehensive onboarding process.
              </p>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}