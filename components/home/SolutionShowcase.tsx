'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// --- Icons (Inline SVGs for portability) ---
const Icons = {
  Cpu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 1v3" /><path d="M15 1v3" /><path d="M9 20v3" /><path d="M15 20v3" /><path d="M20 9h3" /><path d="M20 14h3" /><path d="M1 9h3" /><path d="M1 14h3" /></svg>
  ),
  CheckCircle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
  ),
  Infinity: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" /></svg>
  ),
  ArrowRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
  ),
  Zap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
  ),
  Shield: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
  ),
  Cloud: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19" /><path d="M12 13.5v-8" /><path d="M12 5.5l4 4" /><path d="M12 5.5l-4 4" /></svg>
  )
};

// --- Data ---
const solutions = [
  {
    id: 'cognivibe',
    name: 'CogniVibe',
    tagline: 'Intelligent Development',
    subtitle: 'Agents that think & code',
    description: 'A unified SDLC framework where AI agents handle the heavy lifting. From planning to coding, automate workflows and ship products with unprecedented velocity.',
    features: ['Auto-Code Generation', 'Contextual Planning', 'Code Refactoring', 'Workflow Automation'],
    icon: <Icons.Cpu />,
    color: '#8B5CF6' // Brand Blue
  },
  {
    id: 'cognitest',
    name: 'CogniTest',
    tagline: 'Enterprise Quality',
    subtitle: 'Pixel-perfect validation',
    description: 'Ensure functional and visual perfection. Our AI generates test data, detects visual regressions via CogniPixel, and secures your quality gates automatically.',
    features: ['Visual Regression', 'Auto-Data Gen', 'Security Scanning', 'E2E Automation'],
    icon: <Icons.CheckCircle />,
    color: '#7C3AED' // Darker Blue
  },
  {
    id: 'cogniops',
    name: 'CogniOps',
    tagline: 'Seamless Delivery',
    subtitle: 'Zero-downtime deployment',
    description: 'Master multi-cloud complexity. Deploy Helm charts seamlessly, optimize infrastructure costs intelligently, and migrate between clouds with zero friction.',
    features: ['Multi-Cloud Sync', 'Helm Management', 'Cost Optimization', 'Pipeline Logic'],
    icon: <Icons.Infinity />,
    color: '#C4B5FD' // Lighter Blue
  }
];

// --- Sub-Components for Mock UIs ---

const CodeWindow = () => (
  <div className="flex flex-col h-full font-mono text-xs">
    <div className="flex space-x-2 pb-4 border-b border-night-800">
      <div className="w-8 h-8 rounded-full bg-neon-400/15 border border-neon-400/30 flex items-center justify-center text-neon-400 font-bold">AI</div>
      <div className="bg-mint-300/8 border border-mint-300/12 rounded-lg p-3 w-full text-night-300">
        Generate a React component for a login form with validation.
      </div>
    </div>
    <div className="pt-4 flex-1 space-y-2 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-mint-300"
      >
        import <span className="text-night-100">React</span> from <span className="text-neon-300">'react'</span>;
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="pl-4 border-l-2 border-neon-500"
      >
        <span className="text-neon-300">const</span> <span className="text-mint-300">LoginForm</span> = () ={'>'} {'{'}
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="pl-8 text-night-400"
      >
        // AI Generating logic...
      </motion.div>
      <motion.div 
         animate={{ width: ["0%", "80%"] }}
         transition={{ duration: 1.5, ease: "easeInOut" }}
         className="h-2 bg-neon-400/25 rounded mt-2 ml-8"
      />
       <motion.div 
         animate={{ width: ["0%", "60%"] }}
         transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
         className="h-2 bg-neon-400/25 rounded mt-2 ml-8"
      />
    </div>
    <div className="mt-auto pt-4 flex justify-between items-center text-night-500">
      <span>main.tsx</span>
      <span className="flex items-center gap-1 text-neon-300 text-[10px] bg-neon-400/15 border border-neon-400/25 px-2 py-1 rounded-full">
        <Icons.Zap /> Optimized
      </span>
    </div>
  </div>
);

const TestDashboard = () => (
  <div className="flex flex-col h-full space-y-3">
    <div className="flex justify-between items-end mb-2">
        <div>
            <div className="text-xs text-night-500 uppercase tracking-wider">Test Coverage</div>
            <div className="text-2xl font-bold text-night-100">98.4%</div>
        </div>
        <div className="text-xs font-semibold text-neon-300 bg-neon-400/15 border border-neon-400/25 px-2 py-1 rounded">+2.1%</div>
    </div>
    {[1, 2, 3].map((i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.1 }}
        className="bg-mint-300/6 rounded-lg p-3 flex items-center justify-between border border-mint-300/12"
      >
        <div className="flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full ${i === 3 ? 'bg-neon-400' : 'bg-neon-500'}`} />
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-night-200">Module_Auth_0{i}</span>
            <span className="text-[10px] text-night-500">Visual Regression Test</span>
          </div>
        </div>
        <div className="text-xs font-medium text-night-300">
            {i === 3 ? 'Running...' : 'Passed'}
        </div>
      </motion.div>
    ))}
    <div className="mt-auto p-3 bg-neon-400/10 rounded-lg border border-neon-400/25">
        <div className="flex items-center gap-2 mb-2">
            <Icons.Shield />
            <span className="text-xs font-bold text-neon-400">Security Gate</span>
        </div>
        <div className="w-full bg-mint-300/15 h-1.5 rounded-full overflow-hidden">
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2 }}
                className="bg-gradient-to-r from-neon-400 to-mint-300 h-full" 
            />
        </div>
    </div>
  </div>
);

const OpsPipeline = () => (
  <div className="flex flex-col h-full relative">
     {/* Connecting Lines */}
     <div className="absolute top-8 left-[19px] bottom-8 w-0.5 bg-mint-300/15 -z-10"></div>

    {['Build', 'Deploy', 'Monitor'].map((step, idx) => (
        <motion.div 
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="flex items-center gap-4 mb-6 last:mb-0"
        >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 shadow-sm z-10 ${idx === 1 ? 'bg-neon-400 text-night-950 border-night-950' : 'bg-night-850 text-mint-300 border-night-900'}`}>
                {idx === 0 ? <Icons.Cpu /> : idx === 1 ? <Icons.Cloud /> : <Icons.Infinity />}
            </div>
            <div className="bg-mint-300/6 border border-mint-300/12 p-3 rounded-lg flex-1">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-night-200">{step} Stage</span>
                    <span className="text-[10px] text-night-500">AWS :: us-east-1</span>
                </div>
                {idx === 1 && (
                     <div className="flex gap-1 mt-2">
                        <span className="h-1 w-1 bg-neon-500 rounded-full animate-bounce"></span>
                        <span className="h-1 w-1 bg-neon-500 rounded-full animate-bounce delay-75"></span>
                        <span className="h-1 w-1 bg-neon-500 rounded-full animate-bounce delay-150"></span>
                     </div>
                )}
            </div>
        </motion.div>
    ))}
  </div>
);

// --- Main Component ---

const SolutionShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false); // Can be enabled for auto-rotation

  // Optional: Auto-rotate tabs if user is idle (disabled by default)
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % solutions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  return (
    <section className="py-24 bg-transparent overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cw-eyebrow inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide"
          >
            INTELLIGENT ECOSYSTEM
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-night-50 tracking-tight mb-6"
          >
            AI Powered <span className="cw-glow-text">Development Solutions</span> 
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-night-400 max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive frameworks that streamline development, testing, and deployment with intelligent automation.
          </motion.p>
        </div>

        {/* Main Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Navigation Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {solutions.map((solution, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={solution.id}
                  onClick={() => setActiveTab(index)}
                  className={`group relative text-left p-6 rounded-2xl transition-all duration-300 border-2 overflow-hidden ${
                    isActive 
                      ? 'cw-glass cw-tab-active border-neon-400/60' 
                      : 'cw-glass border-transparent hover:border-mint-300/30'
                  }`}
                >
                  {/* Background Progress Bar for Active State */}
                  {isActive && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute inset-0 bg-neon-400/8 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                  
                  <div className="flex items-start gap-4 z-10 relative">
                    <div className={`p-3 rounded-xl transition-colors duration-300 ${
                      isActive ? 'bg-neon-400 text-night-950' : 'bg-mint-300/10 border border-mint-300/20 text-night-400 group-hover:bg-neon-400/15 group-hover:text-neon-400'
                    }`}>
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold mb-1 transition-colors ${isActive ? 'text-night-50' : 'text-night-300'}`}>
                        {solution.name}
                      </h3>
                      <p className={`text-sm font-medium transition-colors ${isActive ? 'text-neon-400' : 'text-night-500'}`}>
                        {solution.tagline}
                      </p>
                    </div>
                  </div>
                  
                  <div className={`mt-4 text-sm leading-relaxed transition-all duration-300 ${isActive ? 'opacity-100 h-auto text-night-300' : 'opacity-0 h-0 text-transparent'}`}>
                     {solution.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Content Window */}
          <div className="lg:col-span-8 relative">
             <div className="absolute inset-0 bg-[#8B5CF6] rounded-3xl transform rotate-1 opacity-20 blur-3xl"></div>
             
             <div className="cw-glass cw-topline relative rounded-3xl overflow-hidden min-h-[500px] flex flex-col">
                
                {/* Window Header */}
                <div className="h-14 border-b border-mint-300/12 bg-night-950/40 flex items-center px-6 justify-between backdrop-blur-sm">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-mint-400/80"></div>
                        <div className="w-3 h-3 rounded-full bg-neon-400/80"></div>
                        <div className="w-3 h-3 rounded-full bg-neon-400/80"></div>
                    </div>
                    <div className="text-xs font-mono text-night-500">
                        {solutions[activeTab].id}.ai-platform.internal
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-8 grid md:grid-cols-2 gap-8">
                    
                    {/* Text Content */}
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col justify-center"
                        >
                            <div className="cw-eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold w-fit mb-4">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-500 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-500"></span>
                                </span>
                                {solutions[activeTab].tagline}
                            </div>
                            <h3 className="text-3xl font-bold text-night-50 mb-4">
                                {solutions[activeTab].name}
                            </h3>
                            <p className="text-night-300 leading-relaxed mb-8">
                                {solutions[activeTab].description}
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {solutions[activeTab].features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm font-medium text-night-200">
                                        <div className="text-[#8B5CF6]">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                        </div>
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8">
                              <Link href={`/solutions/${solutions[activeTab].id}`} className="cw-link-underline group inline-flex items-center gap-2 text-neon-400 font-semibold hover:text-mint-200 transition-colors">
                                    Explore  
                                    <span className="group-hover:translate-x-1 transition-transform">
                                        <Icons.ArrowRight />
                                    </span>
                              </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dynamic Visual Mockup */}
                    <div className="cw-glass cw-inner-grid rounded-2xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-400/15 to-transparent rounded-bl-full pointer-events-none"></div>
                        
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                className="h-full"
                            >
                                {activeTab === 0 && <CodeWindow />}
                                {activeTab === 1 && <TestDashboard />}
                                {activeTab === 2 && <OpsPipeline />}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
             </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
        >
            <Link href="/contact" className="cw-btn cw-btn-primary cw-btn-pulse inline-block px-10 py-4 rounded-full font-semibold text-lg">
                Schedule a Demo
            </Link>
            {/* <p className="mt-4 text-sm text-night-500">No credit card required • Enterprise Ready</p> */}
        </motion.div>

      </div>
    </section>
  );
};

export default SolutionShowcase;