'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Clock, Users, Target, Cpu, Sparkles } from 'lucide-react';

const ContactHero = () => {
  const stats = [
    { icon: Clock, value: '24h', label: 'Average Response' },
    { icon: Users, value: '15+', label: 'Enterprise Clients' },
    { icon: Target, value: '99%', label: 'Satisfaction Rate' },
    { icon: Cpu, value: '50+', label: 'AI Solutions Live' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="relative py-24 bg-[#08090B] overflow-hidden pt-28 md:pt-36">
      {/* Ambient Lighting & Flares */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#7C3AED]/20 via-[#8B5CF6]/10 to-transparent blur-[130px] -z-10" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[140px] -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#7C3AED]/12 rounded-full blur-[140px] -z-10" />

        {/* Ambient Star Sparkles */}
        <div className="absolute top-24 left-[15%] w-1 h-1 bg-[#A78BFA] rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-36 right-[20%] w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-pulse" />
        <div className="absolute bottom-20 left-[30%] w-1 h-1 bg-[#8B5CF6] rounded-full opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Hero Header Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#15151D]/90 border border-[#29263A] text-[#A78BFA] rounded-full text-xs font-semibold mb-8 shadow-[0_0_18px_rgba(124,58,237,0.2)] backdrop-blur-md"
          >
            <span className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-ping" />
            Let's Connect
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          >
            Ready to Transform
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC] drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
              Your Business?
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-[#B8B6C4] max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Our AI experts are here to help you automate intelligently and scale efficiently.
            Start the conversation today.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex justify-center"
          >
            <a
              href="mailto:reachus@cogniwide.com"
              className="group px-9 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white font-bold rounded-xl shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3 text-base sm:text-lg"
            >
              <Mail className="w-5 h-5 text-white" />
              Get in Touch via Email
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Featured Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto mb-20"
        >
          <div className="group bg-[#15151D]/90 rounded-3xl p-8 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.7)] border border-[#29263A] hover:border-[#8B5CF6]/60 hover:shadow-[0_0_40px_rgba(124,58,237,0.25)] transition-all duration-500 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />

            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-[#1A1829] border border-[#8B5CF6]/40 rounded-2xl flex items-center justify-center shadow-[0_0_25px_rgba(124,58,237,0.4)] group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-10 h-10 text-[#A78BFA]" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 text-center">
              Send Us a Message
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#B8B6C4] mb-8 text-center max-w-xl mx-auto leading-relaxed">
              Get a detailed proposal within 24 hours. Our AI experts are ready to discuss your project requirements and provide tailored solutions.
            </p>

            {/* 3 Mini Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-[#1A1829]/80 rounded-xl border border-[#29263A]">
                <div className="w-9 h-9 bg-[#15151D] border border-[#8B5CF6]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-[#A78BFA]" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">24h</div>
                  <div className="text-[11px] text-[#777583]">Response Time</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-[#1A1829]/80 rounded-xl border border-[#29263A]">
                <div className="w-9 h-9 bg-[#15151D] border border-[#8B5CF6]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-[#A78BFA]" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Expert Team</div>
                  <div className="text-[11px] text-[#777583]">AI Specialists</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-[#1A1829]/80 rounded-xl border border-[#29263A]">
                <div className="w-9 h-9 bg-[#15151D] border border-[#8B5CF6]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-4 h-4 text-[#A78BFA]" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">99%</div>
                  <div className="text-[11px] text-[#777583]">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Email Button */}
            <div className="text-center">
              <a
                href="mailto:reachus@cogniwide.com"
                className="group/btn inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 text-base"
              >
                <Mail className="w-5 h-5 text-white" />
                Email Us Now
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </a>
              <p className="mt-4 text-xs sm:text-sm text-[#777583]">
                Or email us directly at:{' '}
                <a href="mailto:reachus@cogniwide.com" className="text-[#A78BFA] hover:text-white font-semibold transition-colors">
                  reachus@cogniwide.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="bg-[#15151D]/90 rounded-2xl p-6 text-center border border-[#29263A] hover:border-[#8B5CF6]/50 shadow-[0_8px_25px_rgba(0,0,0,0.5)] transition-all duration-300 backdrop-blur-xl group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1A1829] border border-[#8B5CF6]/30 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <stat.icon className="w-5 h-5 text-[#A78BFA]" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white via-[#A78BFA] to-[#8B5CF6] bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-[#B8B6C4]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;