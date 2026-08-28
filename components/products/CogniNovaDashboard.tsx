'use client'

import React from 'react'
import { motion } from 'framer-motion'

const CogniNovaDashboard = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
        {/* CogniNova Educational Dashboard */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 17L12 22L21 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 8L16 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                  <path d="M16 8L8 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900">CogniNova Dashboard</div>
                <div className="text-sm text-gray-600">Real-time monitoring</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
              <span className="text-sm text-brand-green font-medium">Active</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200">
              <div className="text-2xl font-bold text-brand-blue">156</div>
              <div className="text-xs text-gray-600">Students</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center border border-green-200">
              <div className="text-2xl font-bold text-brand-green">92%</div>
              <div className="text-xs text-gray-600">Engagement</div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 text-center border border-yellow-200">
              <div className="text-2xl font-bold text-brand-yellow-dark">8.4</div>
              <div className="text-xs text-gray-600">Avg Score</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-gray-900">AI Coach Session</span>
              </div>
              <span className="text-xs text-brand-green font-medium">Active</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-gray-900">Knowledge Graph</span>
              </div>
              <span className="text-xs text-brand-blue font-medium">Learning</span>
            </div>
          </div>
        </div>
      </div>
      

    </motion.div>
  )
}

export default CogniNovaDashboard