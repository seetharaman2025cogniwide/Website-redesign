'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Shared animated hero background for the /services/* detail pages.
 *
 * Dot positions/timings are a fixed table rather than Math.random() so the
 * server and client render identical markup — random values here caused a
 * React hydration mismatch.
 */
export const HERO_DOTS = [
  { top: '12%', left: '8%', duration: 4.2, delay: 0.3 },
  { top: '24%', left: '72%', duration: 5.6, delay: 1.4 },
  { top: '68%', left: '18%', duration: 3.4, delay: 0.9 },
  { top: '81%', left: '55%', duration: 6.1, delay: 1.8 },
  { top: '38%', left: '34%', duration: 4.8, delay: 0.2 },
  { top: '9%', left: '61%', duration: 5.1, delay: 1.1 },
  { top: '57%', left: '88%', duration: 3.9, delay: 1.6 },
  { top: '74%', left: '41%', duration: 6.5, delay: 0.6 },
  { top: '45%', left: '5%', duration: 4.4, delay: 1.9 },
  { top: '19%', left: '46%', duration: 5.9, delay: 0.4 },
  { top: '90%', left: '77%', duration: 3.6, delay: 1.3 },
  { top: '62%', left: '66%', duration: 5.3, delay: 0.8 },
  { top: '31%', left: '93%', duration: 4.1, delay: 1.7 },
  { top: '86%', left: '27%', duration: 6.3, delay: 0.1 },
  { top: '52%', left: '52%', duration: 4.6, delay: 1.2 },
];

const ServiceHeroBackground = () => (
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
    {HERO_DOTS.map((dot, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-brand-blue/50 rounded-full"
        style={{ top: dot.top, left: dot.left }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: dot.duration,
          repeat: Infinity,
          delay: dot.delay,
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
);

export default ServiceHeroBackground;
