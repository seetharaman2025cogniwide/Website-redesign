'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// --- Inline Icons for Portability ---
const StarIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

const QuoteIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
  </svg>
);

const BankIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const ShoppingBagIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

const ShieldCheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const TruckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>
);

const SignalIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

const AcademicCapIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);


// --- Data Structures ---

const testimonials = [
  {
    id: 1,
    name: 'Muralikrishnan R',
    title: 'CFO, AWNIC',
    content: '"We wanted to extend reach and improve customer access to our services by adding Whats App and Chatbot channel. Cogniwide has helped us boost our support to a whole new level.Their valuable support has been crucial to our success in launching a sophisticated BOT to provide great experiences to our customers. They have professional team to support us all throughout the project phase in providing timely response to all the queries raised..',
    results: '75% Faster Response',
    rating: 5,
  },
  {
    id: 2,
    name: 'Leading Workforce Management Company',
    title: 'India',
    content: 'As a large organization, we receive thousands of queries that need immediate resolution each day. This was the key reason we looked for a virtual assistant to support our employees. We went ahead with Cogniwide’s CogniAssist, and how it worked! It was utterly simple to use and had everything we needed to solve our problem.',
    results: '40% Efficiency Gain',
    rating: 5,
  },
  {
    id: 3,
    name: 'Leading Consulting Company',
    title: 'United Kingdom',
    content: 'Covid-19 has disrupted our lives, some more so than the others – like the daily wage workers. Hence, we planned to build a platform to help furloughed people return to work faster.Cogniwide brought clarity and expertise to this project and delivered a robust, user-friendly platform that helps job-seekers find lucrative and trustworthy opportunities in testing times.',
    results: '45% Conversion Lift',
    rating: 5,
  },
  {
    id: 4,
    name: 'Leading Insurance Company',
    title: 'Dubai',
    content: 'Cogniwide helped us shift to an advanced capability that helps us stay in the lead. With CogniAssist, our customers always have help at hand and information at hand. Also, our support desk team can focus on complex queries. Within a few months, Cogniassist has become an integral part of our team',
    results: '45% Conversion Lift',
    rating: 5,
  }
];

const caseStudies = [
  {
    id: 'banking',
    industry: 'Banking & Finance',
    title: 'Global Bank Fraud Shield',
    description: 'Implementing real-time AI fraud detection across the branches worldwide, securing assets and building trust.',
    metrics: [
      { label: 'Fraud Reduction', value: '85%', sub: 'Year over Year' },
      { label: 'Annual Savings', value: '$50M+', sub: 'Operational Cost' },
      { label: 'Accuracy', value: '99.9%', sub: 'False Positive Rate' }
    ],
    icon: BankIcon,
    imageColor: 'bg-blue-100',
    image: '/images/Industry/banking.jpg'
  },
  {
    id: 'healthcare',
    industry: 'Healthcare',
    title: 'Diagnostic AI Assistant',
    description: 'Empowering doctors with AI-driven diagnostic assistance across a 10-hospital network to improve patient outcomes.',
    metrics: [
      { label: 'Faster Diagnosis', value: '30%', sub: 'Time saved' },
      { label: 'Cost Reduction', value: '25%', sub: 'Admin Overhead' },
      { label: 'Accuracy', value: '95%', sub: 'Clinical Validation' }
    ],
    icon: HeartIcon,
    imageColor: 'bg-green-100',
    image: '/images/Industry/healthcare.webp'
  },
  {
    id: 'retail',
    industry: 'Retail ',
    title: 'Omnichannel Personalization',
    description: 'Deploying a unified recommendation engine that adapts to user behavior in real-time across web and mobile apps.',
    metrics: [
      { label: 'Engagement', value: '60%', sub: 'Increase in CTR' },
      { label: 'Sales Uplift', value: '35%', sub: 'Quarterly Revenue' },
      { label: 'Cost Savings', value: '20%', sub: 'Inventory Opt.' }
    ],
    icon: ShoppingBagIcon,
    imageColor: 'bg-purple-100',
    image: '/images/Industry/retail.jpg'
  },
  {
    id: 'education',
    industry: 'Education',
    title: 'AI-Powered Learning Platform',
    description: 'Transforming education with personalized AI tutoring and intelligent ERP systems across 10+ institutions.',
    metrics: [
      { label: 'Learning Outcomes', value: '40%', sub: 'Improvement' },
      { label: 'Admin Efficiency', value: '30%', sub: 'Cost Reduction' },
      { label: 'Student Engagement', value: '85%', sub: 'Satisfaction Rate' }
    ],
    icon: AcademicCapIcon,
    imageColor: 'bg-indigo-100',
    image: '/images/Industry/education.jpg'
  },
  {
    id: 'insurance',
    industry: 'Insurance',
    title: 'Intelligent Claims Processing',
    description: 'Automating claims processing and fraud detection for a leading insurance provider, reducing processing time by 70%.',
    metrics: [
      { label: 'Processing Time', value: '70%', sub: 'Faster Claims' },
      { label: 'Fraud Detection', value: '92%', sub: 'Accuracy Rate' },
      { label: 'Cost Savings', value: '$35M+', sub: 'Annual Savings' }
    ],
    icon: ShieldCheckIcon,
    imageColor: 'bg-teal-100',
    image: '/images/Industry/insurance.png'
  },
  {
    id: 'manufacturing',
    industry: 'Manufacturing',
    title: 'Smart Factory Optimization',
    description: 'Implementing AI-driven predictive maintenance and supply chain optimization across global manufacturing facilities.',
    metrics: [
      { label: 'Downtime Reduction', value: '45%', sub: 'Equipment Uptime' },
      { label: 'Production Efficiency', value: '35%', sub: 'Output Increase' },
      { label: 'Cost Savings', value: '28%', sub: 'Operational Cost' }
    ],
    icon: TruckIcon,
    imageColor: 'bg-cyan-100',
    image: '/images/Industry/manufacturing.jpg'
  },
  {
    id: 'telecom',
    industry: 'Telecommunications',
    title: 'Network Intelligence Platform',
    description: 'Deploying AI-powered network optimization and predictive maintenance for a major telecom operator serving 50M+ customers.',
    metrics: [
      { label: 'Network Uptime', value: '99.9%', sub: 'Reliability' },
      { label: 'Customer Churn', value: '40%', sub: 'Reduction' },
      { label: 'Service Quality', value: '55%', sub: 'Improvement' }
    ],
    icon: SignalIcon,
    imageColor: 'bg-violet-100',
    image: '/images/Industry/telecom.png'
  }
];

// --- Components ---

export const SuccessStories = () => {
  const [activeTab, setActiveTab] = useState(caseStudies[0].id);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const activeStudy = caseStudies.find(s => s.id === activeTab) || caseStudies[0];

  return (
    <section className="font-poppins bg-white overflow-hidden">

      {/* 1. Header Section with Stats Ticker */}
      <div className="bg-brand-blue-dark text-white pt-20 pb-24 relative">
        {/* Abstract Tech Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-purple rounded-full blur-[100px]" />
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L100 0" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
            <path d="M20 100 L100 20" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide">Proven Enterprise Results</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            Driving Impact at <span className="text-brand-blue-light">Scale</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-brand-blue-light/80 max-w-3xl mx-auto"
          >
            We don't just implement AI. We engineer measurable outcomes for the world's most ambitious organizations.
          </motion.p>
        </div>
      </div>

      {/* 2. Overlapping Interactive Case Study Panel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl shadow-strong border border-gray-100 overflow-hidden flex flex-col lg:flex-row min-h-[600px]">

          {/* Left: Tab Navigation (Vertical on Desktop) */}
          <div className="lg:w-1/3 bg-gray-50 border-r border-gray-100 p-6 flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2 pl-4">Industries</h3>
            {caseStudies.map((study) => {
              const Icon = study.icon;
              return (
                <button
                  key={study.id}
                  onClick={() => setActiveTab(study.id)}
                  className={`group relative flex items-center p-4 rounded-xl text-left transition-all duration-300 ease-in-out
                  ${activeTab === study.id
                      ? 'bg-white shadow-medium border-l-4 border-brand-blue'
                      : 'hover:bg-gray-100 border-l-4 border-transparent'
                    }`}
                >
                  <div className={`p-3 rounded-lg mr-4 transition-colors duration-300 ${activeTab === study.id ? 'bg-brand-blue text-white' : 'bg-gray-200 text-gray-500 group-hover:text-brand-blue'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg ${activeTab === study.id ? 'text-brand-dark-grey' : 'text-gray-500 group-hover:text-gray-700'}`}>
                      {study.industry}
                    </h4>
                    <p className="text-xs text-gray-400 truncate w-40">View Impact Analysis</p>
                  </div>
                  {activeTab === study.id && (
                    <motion.div layoutId="activeTabIndicator" className="absolute right-4 text-brand-blue">
                      <ArrowRightIcon className="w-5 h-5" />
                    </motion.div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Right: Content Display */}
          <div className="lg:w-2/3 p-8 lg:p-12 relative bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStudy.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col justify-between"
              >
                {/* Header of Content */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue/10 text-brand-blue uppercase tracking-wide">
                      Case Study
                    </span>
                    <span className="h-px flex-1 bg-gray-100"></span>
                  </div>

                  <h3 className="text-3xl font-bold text-brand-dark-grey mb-4">
                    {activeStudy.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-2xl">
                    {activeStudy.description}
                  </p>

                  {/* Case Study Image */}
                  <div className="relative w-full h-48 rounded-xl overflow-hidden mb-8 border border-gray-200">
                    <Image
                      src={activeStudy.image}
                      alt={activeStudy.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {activeStudy.metrics.map((metric, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="bg-brand-blue-light1/50 rounded-2xl p-6 border border-brand-blue-light/20 hover:border-brand-blue/40 transition-colors"
                    >
                      <div className="text-4xl font-bold text-brand-blue mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm font-bold text-brand-dark-grey">
                        {metric.label}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {metric.sub}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Call to Action within Card */}
                <div className="mt-10 flex items-center gap-4">
                  <Link href="/casestudy">
                  <button className="flex items-center gap-2 text-brand-blue font-semibold hover:gap-4 transition-all group">
                    Read full case study
                    <ArrowRightIcon className="w-4 h-4 group-hover:text-brand-yellow" />
                  </button>
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-blue-light1 to-transparent opacity-50 rounded-bl-full pointer-events-none" />
          </div>
        </div>
      </div>

      {/* 3. Social Proof / Testimonials (MNC Style: Clean, Dark Text on Light, or Dark Strip) */}
      <div className="py-24 bg-brand-light-grey relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left: Text Context */}
            <div className="lg:w-1/3">
              <QuoteIcon className="w-16 h-16 text-brand-blue/20 mb-6" />
              <h2 className="text-3xl font-bold text-brand-dark-grey mb-4">Trusted by Industry Leaders</h2>
              <p className="text-gray-600 mb-8">
                Our partners don't just use our software; they transform their business models with it.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-xs font-bold text-white shadow-sm" style={{ backgroundColor: i === 1 ? '#1a4f8c' : i === 2 ? '#2563eb' : '#93C5FD' }}>
                      {i === 3 ? '30+' : ''}
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-500">Enterprise Partners</span>
              </div>
            </div>

            {/* Right: Carousel Card */}
            <div className="lg:w-2/3 w-full">
              <div className="relative h-96 w-full">
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={testimonials[activeTestimonial].id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 bg-white rounded-2xl p-8 md:p-12 shadow-medium border-l-8 border-brand-blue flex flex-col justify-center"
                  >
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-brand-yellow" />
                      ))}
                    </div>
                    <h3 className="text-sm md:text-base font-normal text-brand-dark-grey leading-relaxed mb-6 italic">
                      "{testimonials[activeTestimonial].content}"
                    </h3>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                      <div>
                        <div className="font-bold text-brand-dark-grey">{testimonials[activeTestimonial].name}</div>
                        <div className="text-sm text-brand-blue">{testimonials[activeTestimonial].title}</div>
                      </div>
                      <div className="hidden sm:flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg border border-green-100">
                        <CheckCircleIcon className="w-5 h-5 text-brand-green" />
                        <span className="text-sm font-bold text-brand-green-dark">{testimonials[activeTestimonial].results}</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Custom Indicators */}
                <div className="absolute -bottom-10 right-0 flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonial === index ? 'w-8 bg-brand-blue' : 'bg-gray-300 hover:bg-brand-blue-light'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;