'use client'

import PageLayout from '@/components/layout/PageLayout';
import { ProductHero } from '@/components/products/ProductHero';
// import { BeforeAfterComparison } from '@/components/products/BeforeAfterComparison';
import { CTASection } from '@/components/home/CTASection';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

const productData = {
  name: 'CogniForge',
  tagline: 'Transform Your Manufacturing Operations with Integrated ERP Solutions',
  description: 'A comprehensive ERP solution integrating all business processes to optimize production, streamline operations, and drive growth in the manufacturing industry.',
  icon: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  color: 'from-orange-400 to-red-600',
  features: [
    'Finance & Accounting Management',
    'Sales & CRM Integration',
    'Procurement & Sourcing',
    'Inventory & Warehouse Management',
    'Production Planning & MRP',
    'Shop Floor Control (MES)',
    'Quality Management System',
    'Maintenance Management',
    'Supply Chain & Logistics',
    'Business Intelligence & Analytics'
  ],
  benefits: [
    'Reduce production costs',
    'Inventory accuracy ',
    'Production efficiency',
    'Accelerate order fulfillment'
  ],
  useCases: [
    'Discrete Manufacturing',
    'Process Manufacturing',
    'Make-to-Order Operations',
    'Make-to-Stock Production',
    'Engineer-to-Order Manufacturing',
    'Mixed-Mode Manufacturing'
  ]
};

export default function CogniForgePage() {
  return (
    <PageLayout className="bg-[#0B0A14]">
      <div className="bg-[#0B0A14] text-white min-h-screen">
      <Suspense fallback={<div className="min-h-screen bg-[#08090B] flex items-center justify-center text-white">Loading...</div>}>
        <ProductHero product={productData} />

        {/* Core Business Functions Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0D0C1A]">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-[50vw] h-[50vh] bg-[#7C3AED]/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[40vw] h-[60vh] bg-[#8B5CF6]/8 rounded-full blur-[100px]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-[#15151D]/90 border border-[#29263A] shadow-[0_0_18px_rgba(124,58,237,0.2)] text-[#A78BFA] text-xs font-semibold px-5 py-2 rounded-full mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse"></span>
                <span className="uppercase tracking-wider">Essential Modules</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Core Business Functions
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6]"> (Tier 1)</span>
              </h2>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-transparent shadow-[0_0_10px_#8B5CF6] mx-auto mb-6" />
              <p className="text-lg text-[#B8B6C4] leading-relaxed">
                Essential modules that form the heart of any manufacturing ERP - Absolute must-have modules for operational excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />,
                  title: 'Finance & Accounting',
                  desc: 'Manages all financial transactions, reporting, and compliance',
                  items: ['General Ledger & Fixed Assets', 'Cost Accounting & Budgeting', 'Financial Reporting']
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
                  title: 'Sales & CRM',
                  desc: 'Manages the entire sales lifecycle from lead to order',
                  items: ['Lead & Opportunity Management', 'Quoting & Order Management', 'Sales Analytics']
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />,
                  title: 'Procurement & Sourcing',
                  desc: 'Manages acquisition of raw materials and services',
                  items: ['Supplier Management', 'Purchase Order Management', 'Spend Analysis']
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
                  title: 'Inventory & Warehouse',
                  desc: 'Oversees all aspects of stock and warehouse space',
                  items: ['Multi-location Inventory', 'Stock Levels & Reorder Points', 'Warehouse Management System']
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />,
                  title: 'Production Planning',
                  desc: 'Plans what to make, how to make it, and when',
                  items: ['Bill of Materials (BOM)', 'Material Requirements Planning', 'Capacity Requirements Planning']
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
                  title: 'Shop Floor Control (MES)',
                  desc: 'Manages and tracks real-time work on the factory floor',
                  items: ['Production Scheduling', 'Job Tracking & Data Collection', 'Real-time Dashboarding']
                }
              ].map((card, idx) => (
                <motion.div key={idx} className="group relative h-full bg-[#15151D]/95 rounded-2xl p-8 border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.2)] transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C3AED]/10 rounded-full blur-3xl transform translate-x-10 -translate-y-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 text-[#A78BFA] group-hover:border-[#A78BFA] group-hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all duration-300">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {card.icon}
                        </svg>
                      </div>
                      <div className="transform transition-all duration-300 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                        <svg className="w-5 h-5 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#A78BFA] transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-[#B8B6C4] text-sm leading-relaxed">{card.desc}</p>
                    </div>

                    <div className="mt-auto pt-6 border-t border-[#29263A]">
                      <ul className="space-y-2 text-sm text-[#B8B6C4]">
                        {card.items.map((item, i) => (
                          <li key={i} className="flex items-center"><span className="w-2 h-2 bg-[#8B5CF6] rounded-full mr-2"></span>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] transition-all duration-500 ease-out w-0 group-hover:w-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Enhancement Modules */}
        <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0B0A14]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-[#8B5CF6]/8 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[40vw] h-[60vh] bg-[#7C3AED]/8 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-[#15151D]/90 border border-[#29263A] shadow-[0_0_18px_rgba(124,58,237,0.2)] text-[#A78BFA] text-xs font-semibold px-5 py-2 rounded-full mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse"></span>
                <span className="uppercase tracking-wider">Strategic Modules</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Supporting & Strategic Functions
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6]"> (Tier 2)</span>
              </h2>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-transparent shadow-[0_0_10px_#8B5CF6] mx-auto mb-6" />
              <p className="text-lg text-[#B8B6C4] leading-relaxed">
                Enhanced modules that provide strategic value to your manufacturing ERP operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
                  title: 'Quality Management',
                  desc: 'Ensures products meet quality standards and comply with regulations',
                  items: ['Quality Control Plans', 'Incoming & In-process Inspection', 'Non-Conformance Reporting']
                },
                {
                  icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></>,
                  title: 'Maintenance Management',
                  desc: 'Manages maintenance of production equipment to maximize uptime',
                  items: ['Asset Register', 'Preventive Maintenance Scheduling', 'Downtime Tracking']
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />,
                  title: 'Human Resource Management',
                  desc: "Manages the company's workforce and employee data",
                  items: ['Employee Master Data', 'Time & Attendance', 'Payroll & Leave Management']
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />,
                  title: 'Supply Chain & Logistics',
                  desc: 'Manages the movement of goods beyond the factory walls',
                  items: ['Shipment Management', 'Carrier Management', 'Track & Trace']
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />,
                  title: 'Project Management',
                  desc: 'Essential for complex "Make-to-Order" manufacturers',
                  items: ['Project Planning & Scheduling', 'Resource Allocation', 'Project Budgeting & Costing']
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
                  title: 'Business Intelligence',
                  desc: 'Transforms data into actionable insights',
                  items: ['Key Performance Indicators', 'Custom Dashboards', 'Data Visualization']
                }
              ].map((card, idx) => (
                <motion.div key={idx} className="group relative h-full bg-[#15151D]/95 rounded-2xl p-8 border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.2)] transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C3AED]/10 rounded-full blur-3xl transform translate-x-10 -translate-y-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 text-[#A78BFA] group-hover:border-[#A78BFA] group-hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all duration-300">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {card.icon}
                        </svg>
                      </div>
                      <div className="transform transition-all duration-300 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                        <svg className="w-5 h-5 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#A78BFA] transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-[#B8B6C4] text-sm leading-relaxed">{card.desc}</p>
                    </div>

                    <div className="mt-auto pt-6 border-t border-[#29263A]">
                      <ul className="space-y-2 text-sm text-[#B8B6C4]">
                        {card.items.map((item, i) => (
                          <li key={i} className="flex items-center"><span className="w-2 h-2 bg-[#8B5CF6] rounded-full mr-2"></span>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] transition-all duration-500 ease-out w-0 group-hover:w-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0D0C1A]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">CogniForge Manufacturing Hub</h3>
                <p className="text-[#B8B6C4] mb-6">Comprehensive ERP Platform for Manufacturing Excellence</p>
                <div className="space-y-4">
                  {[
                    { title: 'Integrated Manufacturing Operations', desc: 'Seamlessly connect all manufacturing processes from order to delivery, eliminating data silos and ensuring real-time visibility across your entire operation.' },
                    { title: 'Smart Production Planning & MES', desc: 'AI-powered production scheduling and shop floor control that optimizes resource utilization, reduces waste, and ensures on-time delivery through intelligent automation.' },
                    { title: 'Complete Business Integration', desc: 'Unified platform covering finance, sales, procurement, inventory, quality, and maintenance - all working together to drive manufacturing excellence and business growth.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[#1E1B38] border border-[#8B5CF6]/40 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-[#A78BFA]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-[#B8B6C4]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#15151D] to-[#1E1B38] p-8 rounded-2xl border border-[#29263A] shadow-[0_10px_35px_rgba(0,0,0,0.4)]">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                    <svg className="w-12 h-12 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Smart Manufacturing Platform</h4>
                  <p className="text-[#B8B6C4]">Transform your manufacturing operations with intelligent ERP that adapts to your processes, optimizes performance, and drives continuous improvement.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ERP Module Interconnection */}
        <section className="py-20 bg-[#0B0A14]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-[#15151D]/90 border border-[#29263A] shadow-[0_0_18px_rgba(124,58,237,0.2)] text-[#A78BFA] text-xs font-semibold px-5 py-2 rounded-full mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse"></span>
                <span className="uppercase tracking-wider">Process Flow</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-4">
                ERP Module Interconnection
              </h2>
              <p className="text-xl text-[#B8B6C4] max-w-3xl mx-auto">
                How ERP modules work together to streamline manufacturing operations
              </p>
            </div>

            <div className="bg-[#15151D]/95 p-8 rounded-2xl border border-[#29263A] shadow-[0_10px_35px_rgba(0,0,0,0.4)]">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent rounded-t-2xl pointer-events-none" />
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Order to Fulfillment Process Flow
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { num: '1', title: 'Sales Order', desc: 'Customer places order through CRM system' },
                  { num: '2', title: 'Production Planning', desc: 'MRP calculates material requirements and schedules production' },
                  { num: '3', title: 'Shop Floor Execution', desc: 'MES manages production execution and quality control' },
                  { num: '4', title: 'Fulfillment', desc: 'Logistics manages shipping and delivery to customer' }
                ].map((step, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1E1B38] to-[#15151D] border border-[#8B5CF6]/40 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                      <span className="text-2xl font-bold text-[#A78BFA]">{step.num}</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">{step.title}</h4>
                    <p className="text-sm text-[#B8B6C4]">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-[#1E1B38] to-[#15151D] rounded-xl border border-[#29263A]">
                <h4 className="text-xl font-bold text-white mb-4">Key Integration Benefits</h4>
                <p className="text-[#B8B6C4] leading-relaxed">
                  The ERP system creates a seamless flow of information across all departments, eliminating data silos and ensuring everyone works with the same up-to-date information. This integration enables real-time visibility into operations, improves decision-making, and reduces errors from manual data entry.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection theme="dark" />
      </Suspense>
      </div>
    </PageLayout>
  );
}