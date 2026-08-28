'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Casestudyfeatures1 = () => {
  const data = [
    {
      title: 'Afocusedpath centralizes student goals with Cogniwide\'s solution',
      category: 'Education',
      description: 'Parents/ caretakers can now view and track student educational progress in a single dashboard.',
      image: '/images/casestudy/online-education.jpg',
      alt: 'Education Case Study'
    },
    {
      title: 'Federal Bank Centralizes Document Search and Tracing',
      category: 'Banking',
      description: 'How an intelligent virtual assistant helped transform routine, yet tedious, chores into easy, enjoyable, and interactive tasks',
      image: '/images/casestudy/banking.jpg',
      alt: 'Banking Case Study'
    },
    {
      title: 'Fifth9 helps furloughed people find jobs despite Covid-19 pandemic',
      category: 'Work Force',
      description: 'The web application W2B developed in collaboration with Cogniwide helps skilled people return to the workforce quicker',
      image: '/images/casestudy/work-force.jpg',
      alt: 'Work Force Case Study'
    },
    {
      title: 'Covering all bases by delivering a high-quality Employee experience and Knowledge',
      category: 'Human Resources',
      description: 'How CogniAssist helped a global business service provider automate routine tasks.',
      image: '/images/casestudy/human-resources.jpg',
      alt: 'Work Force Case Study'
    },
    {
      title: 'Al Muzaini Exchange: Kuwait\'s safe and quick mobile remittance services',
      category: 'Money Exchange',
      description: 'Cogniwide helps Al Muzaini design & launch the sophisticated & quick mobile remittance services',
      image: '/images/casestudy/money-exchange.jpg',
      alt: 'Work Force Case Study'
    },
    {
      title: 'Artificial Intelligence for every Business and Industry,Agents where you need them',
      category: 'products',
      description: 'As Artificial Intelligence gains momentum propelling technology into the next big revolution',
      image: '/images/casestudy/artificial intelligence.jpg',
      alt: 'Work Force Case Study'
    },
    {
      title: 'Driving AI led automation solution for Enterprise',
      category: 'AI Led Automation',
      description: 'Cogniwide is leading provider of Enterprise AI Solutions .',
      image: '/images/casestudy/ai-solution.jpg',
      alt: 'Work Force Case Study'
    },
    {
      title: 'AI-Driven Roaming Invoice Validation for a Leading Telecom Operator',
      category: 'Telecom',
      description: 'AI-powered solution automates roaming invoice validation for a leading Middle East telecom.',
      image: '/images/casestudy/telecom.png',
      alt: 'Work Force Case Study'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <Image
                src={caseStudy.image}
                alt={caseStudy.alt}
                width={400}
                height={192}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col h-full">
                <div className="inline-block bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-semibold mb-4 w-fit">
                  {caseStudy.category}
                </div>
                <h3 className="text-lg font-bold text-brand-dark-grey mb-4 line-clamp-3 leading-snug">
                  {caseStudy.title}
                </h3>
                <p className="text-brand-medium-grey text-sm leading-relaxed line-clamp-3">
                  {caseStudy.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};