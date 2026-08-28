'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, PlayCircle, Clock, Users, Target, Cpu } from 'lucide-react';

const ContactHero = () => {
  const contactMethods = [
    // {
    //   icon: Phone,
    //   title: 'Schedule a Call',
    //   description: 'Book a 30-min consultation with our AI experts',
    //   action: 'Book Call',
    //   href: '#',
    // },
    {
      icon: Mail,
      title: 'Send a Message',
      description: 'Get a detailed proposal within 24 hours',
      action: 'Email Us',
      href: 'mailto:hello@yourcompany.com',
    },
    // {
    //   icon: PlayCircle,
    //   title: 'Request Demo',
    //   description: 'See our AI platform in action',
    //   action: 'Schedule demo',
    //   href: '#',
    // },
  ];

  const stats = [
    { icon: Clock, value: '24h', label: 'Average Response' },
    { icon: Users, value: '15+', label: 'Enterprise Clients' },
    { icon: Target, value: '99%', label: 'Satisfaction Rate' },
    { icon: Cpu, value: '50+', label: 'AI Solutions Live' },
  ];

  // Stagger container for grid items
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Subtle Decorative Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 -right-10 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Content */}
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 text-brand-blue rounded-full text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
            Let's Connect
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            Ready to Transform
            <br />
            <span className="text-brand-blue">Your Business?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Our AI experts are here to help you automate intelligently and scale efficiently.
            Start the conversation today.
          </motion.p>

          {/* CTA Button - Direct Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <a
              href="mailto:reachus@cogniwide.com"
              className="group px-10 py-5 bg-brand-blue text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 text-lg"
            >
              <Mail className="w-6 h-6" />
              Get in Touch via Email
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Featured Contact Card - Centered and Prominent */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto mb-20"
        >
          <div className="group bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-10 md:p-12 shadow-xl border-2 border-blue-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-500">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Send Us a Message
            </h3>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 text-center max-w-xl mx-auto leading-relaxed">
              Get a detailed proposal within 24 hours. Our AI experts are ready to discuss your project requirements and provide tailored solutions.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-blue-100">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">24h</div>
                  <div className="text-xs text-gray-600">Response Time</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-blue-100">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Expert Team</div>
                  <div className="text-xs text-gray-600">AI Specialists</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-blue-100">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">99%</div>
                  <div className="text-xs text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Email Button */}
            <div className="text-center">
              <a
                href="mailto:reachus@cogniwide.com"
                className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-brand-blue text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 text-lg"
              >
                <Mail className="w-6 h-6" />
                Email Us Now
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </a>
              <p className="mt-4 text-sm text-gray-500">
                Or email us directly at:{' '}
                <a href="mailto:reachus@cogniwide.com" className="text-brand-blue hover:underline font-semibold">
                  reachus@cogniwide.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm"
            >
              <div className="flex justify-center mb-3">
                <stat.icon className="w-8 h-8 text-brand-blue" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;