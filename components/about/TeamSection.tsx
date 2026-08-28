'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const teamData = {
  leadership: [
    {
      name: 'Kannadasan Kasi',
      title: 'CEO & Founder',
      bio: 'Visionary leader with extensive experience in enterprise AI software and machine learning.',
      imageUrl: '/images/expert.svg',
    },
    {
      name: 'Executive Team',
      title: 'Global Operations',
      bio: 'Our leadership team comprises industry veterans from top technology and consulting firms.',
      imageUrl: '/images/expert.svg',
    },
    {
      name: 'Join Us',
      title: 'Open Positions',
      bio: 'We are always looking for talented individuals to join our growing team. Check our careers page.',
      imageUrl: '/images/expert.svg',
    },
  ],
};

export const TeamSection = () => {
  const [activeTab] = useState('leadership');
  const currentTeam = teamData[activeTab as keyof typeof teamData];

  return (
    <section className="py-24 bg-[#0B0A14] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            Meet Our Team
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] mx-auto rounded-full mb-4 shadow-[0_0_10px_#8B5CF6]"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[#B8B6C4] max-w-xl mx-auto text-base"
          >
            Talented professionals driving innovation and growth
          </motion.p>
        </div>

        {/* Team Members Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentTeam.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#15151D]/90 rounded-2xl p-6 border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] transition-all duration-300 backdrop-blur-xl"
            >
              <div className="flex items-start gap-4">
                <div className="relative w-14 h-14 bg-[#1A1829] border border-[#8B5CF6]/30 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden shadow-[0_0_12px_rgba(124,58,237,0.25)]">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-white mb-1">{member.name}</h3>
                  <div className="text-[#A78BFA] font-medium mb-2 text-sm">{member.title}</div>
                  <p className="text-[#B8B6C4] text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
