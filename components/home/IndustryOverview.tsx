'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Landmark,
  HeartPulse,
  ShoppingBag,
  ShieldCheck,
  Factory,
  Radio,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

// --- Configuration Mock ---
// In your actual project, these classes come from your tailwind.config.js
// I have mapped standard Tailwind colors to match your hex codes exactly where possible
// to ensure this preview looks correct.

const industries = [
  {
    name: 'Banking & Finance',
    description: 'AI-driven fraud detection, risk assessment, and customer insights.',
    icon: Landmark,
    href: '/industries/banking',
    stats: '40% faster processing'
  },
  {
    name: 'Healthcare',
    description: 'Intelligent diagnostics, treatment optimization, and operational efficiency.',
    icon: HeartPulse,
    href: '/industries/healthcare',
    stats: '60% improved accuracy'
  },
  {
    name: 'Retail',
    description: 'Personalized recommendations, inventory optimization, and behavior analysis.',
    icon: ShoppingBag,
    href: '/industries/retail',
    stats: '35% increase in sales'
  },
  {
    name: 'Insurance',
    description: 'Streamlined claims processing, risk assessment, and policy management.',
    icon: ShieldCheck,
    href: '/industries/insurance',
    stats: '50% faster claims'
  },
  {
    name: 'Manufacturing',
    description: 'Supply chain optimization with predictive analytics and route planning.',
    icon: Factory,
    href: '/industries/manufacturing',
    stats: '25% cost reduction'
  },
  {
    name: 'Telecommunications',
    description: 'Enhanced network performance and customer experience solutions.',
    icon: Radio,
    href: '/industries/telecom',
    stats: '30% better uptime'
  }
];

const Card = ({ industry, index }: { industry: typeof industries[0]; index: number }) => {
  const Icon = industry.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 ease-out overflow-hidden"
    >
      {/* Abstract Background Decoration on Hover */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl transform translate-x-10 -translate-y-10 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header: Icon & Arrow */}
        <div className="flex justify-between items-start mb-6">
          <div className={`p-3 rounded-xl transition-colors duration-300 ${isHovered ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
            <Icon size={28} strokeWidth={1.5} />
          </div>
          <div className={`transform transition-all duration-300 ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
            <ArrowRight className="text-blue-600" size={20} />
          </div>
        </div>

        {/* Text Content */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {industry.name}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            {industry.description}
          </p>
        </div>

        {/* Footer: Stats */}
        <div className="mt-auto pt-6 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <TrendingUp size={16} className="text-blue-600" />
            <span className="text-xs font-semibold tracking-wide uppercase text-blue-600">
              Impact
            </span>
          </div>
          <p className="text-slate-900 font-semibold mt-1 text-lg">
            {industry.stats}
          </p>
        </div>
      </div>

      {/* Bottom Blue Line Interaction */}
      <div className={`absolute bottom-0 left-0 h-1 bg-blue-600 transition-all duration-500 ease-out ${isHovered ? 'w-full' : 'w-0'}`} />
    </motion.div>
  );
};

export const IndustryOverview = () => {
  return (
    <></>
    // <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50">

    //   {/* Global Background Elements (Subtle MNC Feel) */}
    //   <div className="absolute inset-0 pointer-events-none">
    //     {/* Large Blue Gradient Mesh */}
    //     <div className="absolute top-0 left-0 w-[50vw] h-[50vh] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply" />
    //     <div className="absolute bottom-0 right-0 w-[40vw] h-[60vh] bg-slate-200/50 rounded-full blur-[100px] mix-blend-multiply" />

    //     {/* Grid Pattern Overlay */}
    //     <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
    //   </div>

    //   <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    //     {/* Section Header */}
    //     <div className="max-w-3xl mx-auto text-center mb-20">
    //       <motion.div
    //         initial={{ opacity: 0, y: 10 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         viewport={{ once: true }}
    //         className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6"
    //       >
    //         <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
    //         <span className="text-xs font-semibold tracking-wider text-blue-700 uppercase">
    //           Sector Expertise
    //         </span>
    //       </motion.div>

    //       <motion.h2
    //         initial={{ opacity: 0, y: 20 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.6 }}
    //         viewport={{ once: true }}
    //         className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
    //       >
    //         Industry Solutions 
    //         <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
    //           <span className="text-brand-blue"> We Serve</span>
    //         </span>
    //       </motion.h2>

    //       <motion.p
    //         initial={{ opacity: 0, y: 20 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.6, delay: 0.1 }}
    //         viewport={{ once: true }}
    //         className="text-lg text-slate-600 leading-relaxed"
    //       >
    //         Leveraging enterprise-grade AI to decode complexity and drive 
    //         unprecedented growth across key market sectors.
    //       </motion.p>
    //     </div>

    //     {/* Cards Grid */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
    //       {industries.map((industry, index) => (
    //         <Card key={industry.name} industry={industry} index={index} />
    //       ))}
    //     </div>

    //     {/* CTA Button */}
    //     <motion.div
    //       initial={{ opacity: 0 }}
    //       whileInView={{ opacity: 1 }}
    //       transition={{ duration: 0.5, delay: 0.6 }}
    //       viewport={{ once: true }}
    //       className="text-center"
    //     >
    //       <button className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
    //         <span className="mr-2">Explore All Solutions</span>
    //         <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
    //       </button>
    //     </motion.div>

    //   </div>
    // </section>
  );
}