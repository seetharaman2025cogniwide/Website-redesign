'use client'

import React from 'react'
import { motion } from 'framer-motion'

const CogniForgeDashboard = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="relative bg-[#15151D]/95 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.6)] p-8 border border-[#29263A]">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent rounded-t-2xl" />
        {/* CogniForge Manufacturing Dashboard */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] flex items-center justify-center text-white shadow-[0_0_12px_rgba(124,58,237,0.5)]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white">CogniForge Dashboard</div>
                <div className="text-sm text-[#B8B6C4]">Real-time monitoring</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-emerald-400 font-medium">Active</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#1E1B38] rounded-lg p-4 text-center border border-[#8B5CF6]/30">
              <div className="text-2xl font-bold text-[#A78BFA]">24</div>
              <div className="text-xs text-[#B8B6C4]">Active</div>
            </div>
            <div className="bg-[#1E1B38] rounded-lg p-4 text-center border border-emerald-500/30">
              <div className="text-2xl font-bold text-emerald-400">95%</div>
              <div className="text-xs text-[#B8B6C4]">Efficiency</div>
            </div>
            <div className="bg-[#1E1B38] rounded-lg p-4 text-center border border-amber-500/30">
              <div className="text-2xl font-bold text-amber-400">1.2k</div>
              <div className="text-xs text-[#B8B6C4]">Tasks/Hour</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-[#1E1B38] rounded-lg border border-[#29263A]">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#8B5CF6]/30 rounded-full flex items-center justify-center border border-[#8B5CF6]/40">
                  <div className="w-2 h-2 bg-[#A78BFA] rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-white">Primary Process</span>
              </div>
              <span className="text-xs text-emerald-400 font-medium">Running</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#1E1B38] rounded-lg border border-[#29263A]">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#8B5CF6]/30 rounded-full flex items-center justify-center border border-[#8B5CF6]/40">
                  <div className="w-2 h-2 bg-[#A78BFA] rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-white">Secondary Process</span>
              </div>
              <span className="text-xs text-[#A78BFA] font-medium">Processing</span>
            </div>
          </div>
        </div>
      </div>


    </motion.div>
  )
}

export default CogniForgeDashboard