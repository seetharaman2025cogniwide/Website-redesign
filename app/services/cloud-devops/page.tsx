'use client';
import React from 'react';
import { motion } from 'framer-motion';
import NextImage from 'next/image';
import PageLayout from '@/components/layout/PageLayout';
import { CTASection } from '@/components/home/CTASection';
import {
  CloudIcon,
  CogIcon,
  ServerIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

// Tailwind class for brand colors (add to globals.css or use your config)
const brandBlue = "rgb(37 99 235)"; // #2563eb
const brandYellow = "rgb(251 191 36)"; // #FBBF24

const CloudDevOpsServicesPage = () => {
  const heroData = {
    title: "Cloud & DevOps Services",
    subtitle: "Strategic cloud transformation, intelligent automation, and managed operations powered by AI.",
    features: ["Cloud Strategy & Migration", "DevOps Automation", "Managed Services", "CogniOps AI Integration"],
  };

  const services = [
    { title: "Cloud Consulting & Strategy", icon: GlobeAltIcon, desc: "Architecture design, cost optimization, multi-cloud strategy" },
    { title: "Cloud Engineering & Migration", icon: CloudIcon, desc: "Zero-downtime migrations, app modernization, hybrid solutions" },
    { title: "DevOps Automation", icon: CogIcon, desc: "CI/CD pipelines, IaC, container orchestration, observability" },
    { title: "Managed Cloud Operations", icon: ServerIcon, desc: "24/7 monitoring, auto-scaling, security, performance optimization" },
  ];

  const platforms = [
    { name: "AWS", imageSrc: "/images/external-integrations/aws-icon.webp" },
    { name: "Azure", imageSrc: "/images/external-integrations/azure_icon.webp" },
    { name: "Google Cloud", imageSrc: "/images/external-integrations/GCP_icon.png" },
    // { name: "Multi-Cloud & Hybrid", imageSrc: "/images/external-integrations/MCH_icon.webp" }
  ];

  return (
    <PageLayout>

      {/* Hero Section with Enhanced Animated Background */}
      <section className="relative pt-32 pb-24 bg-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Circles */}
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-brand-blue/25 rounded-full blur-3xl"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl"
            animate={{
              y: [0, 40, 0],
              x: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-80 h-80 bg-brand-blue-light/25 rounded-full blur-3xl"
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Floating Dots */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-brand-blue/50 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Geometric Shapes */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-brand-blue/40 rounded-lg"
            animate={{
              rotate: [0, 90, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-blue-500/40"
            animate={{
              rotate: [0, -90, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.10]" style={{
            backgroundImage: `linear-gradient(to right, #1a4f8c 1px, transparent 1px),
                             linear-gradient(to bottom, #1a4f8c 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            {heroData.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-10"
          >
            {heroData.subtitle}
          </motion.p>

          {/* Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {heroData.features.map((f, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4, type: "spring", stiffness: 300 }}
                className="px-5 py-2.5 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium text-gray-700"
              >
                {f}
              </motion.span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="group inline-flex items-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-200"
            >
              Start Your Cloud Journey
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>

            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(37,99,235,0.08)" }}
              className="inline-flex items-center gap-2 border-2 border-[#2563eb] text-[#2563eb] hover:text-[#2563eb] px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              Free Cloud Assessment
            </motion.a>
          </div>
        </div>
      </section>

      {/* Services Grid – super fast stagger */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              End-to-End Cloud & DevOps Solutions
            </h2>
            <p className="text-xl text-gray-600">Built for scale, security, and speed.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.15 }
                }}
                className="group relative bg-white p-8 rounded-2xl 
                          border border-gray-200 hover:border-[#2563eb]/50
                          transition-colors duration-300"
              >

                <div className="w-14 h-14 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2563eb] transition-all duration-300">
                  <service.icon className="w-8 h-8 text-[#2563eb] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                {/* <div className="mt-5 flex items-center text-[#2563eb] font-medium text-sm group-hover:translate-x-2 transition-transform duration-200">
                  Learn more <ArrowRightIcon className="w-4 h-4 ml-1" />
                </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
          >
            Certified Across All Major Clouds
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center max-w-4xl mx-auto">
            {platforms.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4, type: "spring", stiffness: 500 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white px-24 rounded-xl border border-gray-200 font-semibold text-gray-800 transition-all duration-200 flex items-center justify-center min-h-[120px]"
              >
                {p.imageSrc ? (
                  <NextImage src={p.imageSrc} alt={p.name} width={64} height={64} className="h-16 w-auto object-contain" />
                ) : (
                  <span className="text-center">{p.name}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CogniOps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#2563eb]/10 rounded-full text-[#2563eb] font-semibold mb-6">
              <RocketLaunchIcon className="w-6 h-6" /> Introducing CogniOps
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Automate Everything with AI
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            {["Auto-generate CI/CD pipelines", "AI-driven cloud migration", "Predictive cost optimization", "Self-healing infrastructure"].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200"
              >
                <div className="w-3 h-3 bg-[#FBBF24] rounded-full mt-2 flex-shrink-0" />
                <p className="text-lg text-gray-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="/solutions/cogniops"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="mt-12 inline-flex items-center gap-3 bg-[#2563eb] hover:bg-blue-700 text-white px-9 py-5 rounded-xl text-lg font-semibold shadow-xl transition-all duration-200"
          >
            Explore CogniOps <ArrowRightIcon className="w-6 h-6" />
          </motion.a>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </PageLayout>
  );
};

export default CloudDevOpsServicesPage;