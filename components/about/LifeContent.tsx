"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HackathonCarousel from '@/components/about/HackathonCarousel';
import { CareersHero } from '@/components/careers/CareersHero';
import { WhyWorkWithUs } from '@/components/careers/WhyWorkWithUs';
import { OpenPositions } from '@/components/careers/OpenPositions';
import { CTASection } from '@/components/home/CTASection';

const lifeEvents = [
  {
    id: '01',
    title: 'Bi-weekly Hackathons',
    description:
      'Fast-paced hack sessions where cross-functional teams build, iterate, and showcase solutions that often mature into real products.',
    key: 'hackathon',
  },
  {
    id: '02',
    title: 'Weekly Turf Cricket Showdowns',
    description:
      'Friendly yet competitive weekly matches that build camaraderie, teamwork, and leadership — a perfect blend of wellness and team spirit.',
    key: 'turf',
  },
  {
    id: '03',
    title: 'Pongal Celebration',
    description:
      'Our flagship gathering where teams share breakthroughs, celebrate milestones, and set the vision for the year ahead.',
    key: 'pongal',
  },
  {
    id: '04',
    title: 'Innovation Day',
    description:
      'A focused day dedicated to exploring new ideas, prototyping concepts, and demoing internal innovations across teams.',
    key: 'innovation',
  },
];

export default function LifeContent({
  hackathonImages,
  turfImages,
  pongalImages,
  innovationImages,
}: {
  hackathonImages: string[];
  turfImages: string[];
  pongalImages: string[];
  innovationImages: string[];
}) {
  const getImageSet = (key: string) => {
    switch (key) {
      case 'hackathon':
        return hackathonImages;
      case 'turf':
        return turfImages;
      case 'pongal':
        return pongalImages;
      case 'innovation':
        return innovationImages;
      default:
        return [];
    }
  };

  return (
    <div className="bg-[#0B0A14] text-white">
      {/* 1. Hero Banner */}
      <section className="relative overflow-hidden bg-[#08090B] min-h-[420px] md:min-h-[540px] flex items-center justify-center pt-20">
        {/* Background hero image with dark purple gradient overlays */}
        <div className="absolute inset-0">
          <Image
            src="/images/life-at-cogniwide/hero.JPG"
            alt="Life at Cogniwide hero"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08090B]/90 via-[#08090B]/70 to-[#0B0A14]" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#7C3AED]/10 to-transparent pointer-events-none" />
        </div>

        {/* Top ambient lighting flare */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#7C3AED]/20 rounded-full blur-[140px] pointer-events-none" />

        {/* Heading overlay */}
        <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8 text-center py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-5 py-2 bg-[#15151D]/90 backdrop-blur-md rounded-full text-xs sm:text-sm font-semibold text-[#A78BFA] mb-6 border border-[#29263A] shadow-[0_0_20px_rgba(124,58,237,0.25)] max-w-2xl mx-auto">
              Energetic, collaborative, and innovation-first. From cricket showdowns to hackathons, we keep work fun and outcomes impactful.
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
              Life at Cogniwide
            </h1>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-transparent rounded-full shadow-[0_0_15px_#8B5CF6]"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. Shape the Future of Enterprise AI (CareersHero) */}
      <CareersHero />

      {/* 3. Why Join Us (WhyWorkWithUs) */}
      <WhyWorkWithUs />

      {/* 4. Events & Moments Section */}
      <section className="py-24 bg-[#0B0A14] relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-10 w-[600px] h-[400px] bg-[#7C3AED]/10 rounded-full blur-[160px]" />
          <div className="absolute bottom-10 left-10 w-[600px] h-[400px] bg-[#8B5CF6]/10 rounded-full blur-[160px]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-1.5 bg-[#15151D] border border-[#29263A] shadow-[0_0_15px_rgba(124,58,237,0.15)] rounded-full text-xs font-semibold text-[#A78BFA] mb-4">
              Events & Moments
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              We make work memorable
            </h2>
          </motion.div>

          <div className="space-y-8">
            {lifeEvents.map((event, idx) => {
              const images = getImageSet(event.key);
              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-[#15151D]/90 rounded-3xl p-6 sm:p-8 md:p-10 border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(124,58,237,0.2)] transition-all duration-300 backdrop-blur-xl"
                >
                  {/* Subtle top edge line */}
                  <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent" />

                  <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center">
                    {/* Content on left */}
                    <div>
                      <div className="inline-flex items-center px-3 py-1 bg-[#1A1829] border border-[#8B5CF6]/40 rounded-lg text-xs font-bold text-[#A78BFA] mb-4 shadow-[0_0_10px_rgba(124,58,237,0.25)]">
                        {event.id}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-[#A78BFA] transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-[#B8B6C4] text-sm sm:text-base leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    {/* Image / Carousel on right */}
                    <div className="relative rounded-2xl overflow-hidden border border-[#29263A] bg-[#1A1829]/60 shadow-lg group-hover:border-[#8B5CF6]/40 transition-colors">
                      <HackathonCarousel images={images} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Open Positions Section */}
      <OpenPositions />

      {/* 6. CTA Section */}
      <CTASection theme="dark" />
    </div>
  );
}