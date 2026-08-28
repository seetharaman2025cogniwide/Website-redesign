'use client';
import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import { CTASection } from '@/components/home/CTASection';
import {
  ChartBarIcon,
  CpuChipIcon,
  CogIcon,
  ShieldCheckIcon,
  CloudIcon,
  BeakerIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const DataEngineeringServicesPage = () => {
  const heroData = {
    title: "AI-Powered Data Engineering Services",
    subtitle: "Transform raw data into actionable business intelligence with AI-powered data pipeline and analytics infrastructure services that drive informed decision-making.",
    features: [
      "AI-powered data pipelines",
      "Real-time analytics infrastructure",
      "ML infrastructure & MLOps",
      "Data governance & quality",
      "CogniAura integration"
    ]
  };

  const serviceOfferings = [
    {
      title: "AI-Powered Data Pipelines",
      description: "Build intelligent data pipelines that automatically adapt, optimize, and scale based on data patterns and business requirements.",
      icon: CpuChipIcon,
      capabilities: [
        "Automated data ingestion and processing",
        "Intelligent data transformation",
        "Real-time stream processing",
        "Self-healing pipeline architecture"
      ]
    },
    {
      title: "Real-Time Analytics Infrastructure",
      description: "Design and implement high-performance analytics infrastructure for real-time insights and decision-making at enterprise scale.",
      icon: ChartBarIcon,
      capabilities: [
        "Real-time data streaming",
        "High-performance analytics engines",
        "Interactive dashboards and visualizations",
        "Scalable data warehouse solutions"
      ]
    },
    {
      title: "ML Infrastructure & MLOps",
      description: "Comprehensive machine learning infrastructure and MLOps practices for seamless model development, deployment, and monitoring.",
      icon: CogIcon,
      capabilities: [
        "ML model deployment pipelines",
        "Automated model training and retraining",
        "Model performance monitoring",
        "Feature store management"
      ]
    },
    {
      title: "Data Governance & Quality",
      description: "Implement robust data governance frameworks with AI-powered quality monitoring and compliance management.",
      icon: ShieldCheckIcon,
      capabilities: [
        "Data quality monitoring and validation",
        "Automated compliance reporting",
        "Data lineage and cataloging",
        "Privacy and security controls"
      ]
    },
    {
      title: "Cloud Data Platforms",
      description: "Design and deploy scalable cloud-native data platforms optimized for performance, cost, and reliability.",
      icon: CloudIcon,
      capabilities: [
        "Multi-cloud data architecture",
        "Serverless data processing",
        "Auto-scaling infrastructure",
        "Cost optimization strategies"
      ]
    },
    {
      title: "Advanced Analytics & AI",
      description: "Implement advanced analytics solutions including predictive modeling, AI/ML algorithms, and business intelligence.",
      icon: BeakerIcon,
      capabilities: [
        "Predictive analytics models",
        "AI/ML algorithm implementation",
        "Business intelligence solutions",
        "Custom analytics applications"
      ]
    }
  ];

  const technologyStack = [
    {
      category: "Data Processing",
      technologies: ["Apache Spark", "Apache Kafka", "Apache Airflow", "dbt", "Apache Beam"]
    },
    {
      category: "Cloud Platforms",
      technologies: ["AWS", "Azure", "Google Cloud", "Snowflake", "Databricks"]
    },
    {
      category: "Databases & Storage",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "ClickHouse"]
    },
    {
      category: "ML & AI Tools",
      technologies: ["TensorFlow", "PyTorch", "MLflow", "Kubeflow", "Weights & Biases"]
    }
  ];

  const cogniAuraIntegration = {
    title: "CogniAura Integration",
    description: "Seamlessly integrate with our analytics platform for one-click BI migration and comprehensive data management.",
    features: [
      {
        title: "PortBI Migration",
        description: "Enable seamless migration between BI tools with automated report and dashboard conversion."
      },
      {
        title: "CogniCraft MDM",
        description: "Implement master data management with intelligent data governance and quality controls."
      },
      {
        title: "Unified Analytics",
        description: "Create unified analytics platforms that work across multiple BI tools and data sources."
      },
      {
        title: "Data Governance",
        description: "Automated data governance with compliance monitoring and quality assurance."
      }
    ]
  };

  return (
    <PageLayout>
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.45, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 -right-32 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      {/* Hero – same subtle gradient as all other pages */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-indigo-50 via-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
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
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-10"
          >
            {heroData.subtitle}
          </motion.p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {heroData.features.map((f, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4, type: "spring", stiffness: 300 }}
                className="px-5 py-2.5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm"
              >
                {f}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="group inline-flex items-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-200"
            >
              Start Data Project
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(37,99,235,0.1)" }}
              className="inline-flex items-center gap-2 border-2 border-[#2563eb] text-[#2563eb] px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              Data Assessment
            </motion.a>
          </div>
        </div>
      </section>

      {/* 6 Services – Perfect 3×2 Grid, ALL CONTENT PRESERVED */}
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
              Comprehensive Data Engineering Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From data strategy to implementation, we provide end-to-end data engineering services powered by AI and modern technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serviceOfferings.map((service, i) => (
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
                          transition-colors duration-300 
                          flex flex-col h-full min-h-[420px]"
              >

                <div className="w-14 h-14 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2563eb] transition-all duration-300">
                  <service.icon className="w-8 h-8 text-[#2563eb] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 text-sm text-gray-600 flex-1">
                  {service.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-[#FBBF24] rounded-full mr-2 mt-1.5 flex-shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>

                {/* <div className="mt-8 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-[#2563eb] font-medium text-sm group-hover:translate-x-2 transition-transform duration-200">
                    Learn more <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </div>
                </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Modern Data Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and platforms to build robust, scalable data solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologyStack.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{category.category}</h3>
                <div className="space-y-3">
                  {category.technologies.map((tech, idx) => (
                    <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg border border-gray-100">
                      <span className="text-sm font-medium text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CogniAura Integration – same style as CogniOps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#2563eb]/10 rounded-full text-[#2563eb] font-semibold mb-6">
              <RocketLaunchIcon className="w-6 h-6" /> Powered by CogniAura
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {cogniAuraIntegration.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {cogniAuraIntegration.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            {cogniAuraIntegration.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200"
              >
                <div className="w-3 h-3 bg-[#FBBF24] rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                  <p className="text-gray-600 mt-1">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="mt-12 inline-flex items-center gap-3 bg-[#2563eb] hover:bg-blue-700 text-white px-9 py-5 rounded-xl text-lg font-semibold shadow-xl transition-all duration-200"
          >
            Explore CogniAura <ArrowRightIcon className="w-6 h-6" />
          </motion.a>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </PageLayout>
  );
};

export default DataEngineeringServicesPage;