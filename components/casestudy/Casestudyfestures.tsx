'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Casestudyfeatures() {
  const data = [
    {
      title: 'Transformation of Lycamobile Company',
      category: 'Telecom',
      description: 'How Lycamobile transformed its customer support to offer quality service with CogniAssist.',
      points: [
        'Implemented machine learning models for equipment failure prediction',
        'Integrated IoT sensors with real-time data processing',
        'Achieved 40% reduction in maintenance costs',
        'Improved overall equipment effectiveness by 25%'
      ],
      image: '/images/casestudy/lycabanner.png',
      alt: 'Lycamobile Case Study',
      author: 'Kannadhasan Kasi',
      authorRole: 'Founder at Cogniwide | Scaling Globally',
      authorImage: '/images/casestudy/user.png',
      date: 'May 10, 2023'
    },
    {
      title: 'Transformation of an Insurance Company',
      category: 'Insurance',
      description: 'How an insurance company transformed its customer support to offer quality service with CogniAssist.',
      points: [
        'Implemented machine learning models for equipment failure prediction',
        'Integrated IoT sensors with real-time data processing',
        'Achieved 40% reduction in maintenance costs',
        'Improved overall equipment effectiveness by 25%'
      ],
      image: '/images/casestudy/Insurance-main.jpg',
      alt: 'Lycamobile Case Study',
      author: 'Kannadhasan Kasi',
      authorRole: 'Founder at Cogniwide | Scaling Globally',
      authorImage: '/images/casestudy/user.png',
      date: 'August 10, 2022'
    },
    {
      title: 'Transformation of a Leading Telecom Operator in Europe',
      category: 'Leading Telecom Operator in Europe',
      description: 'How a Leading Telecom Operator in Europe transformed its customer support to offer quality service with CogniAssist.',
      points: [
        'Implemented machine learning models for equipment failure prediction',
        'Integrated IoT sensors with real-time data processing',
        'Achieved 40% reduction in maintenance costs',
        'Improved overall equipment effectiveness by 25%'
      ],
      image: '/images/casestudy/T-mobiles-main.jpg',
      alt: 'Lycamobile Case Study',
      author: 'Kannadhasan Kasi',
      authorRole: 'Founder at Cogniwide | Scaling Globally',
      authorImage: '/images/casestudy/user.png',
      date: 'August 10, 2022'
    },
    {
      title: 'Leading Telecom in Middle East',
      category: 'Transformation of a Leading Telecom company in Middle East',
      description: 'How a Leading Telecom company in Middle East transformed its end to end Quality Engineering by joining hands with Cogniwide.',
      points: [
        'Implemented machine learning models for equipment failure prediction',
        'Integrated IoT sensors with real-time data processing',
        'Achieved 40% reduction in maintenance costs',
        'Improved overall equipment effectiveness by 25%'
      ],
      image: '/images/casestudy/middle-east-telecom.jpg',
      alt: 'Lycamobile Case Study',
      author: 'Kannadhasan Kasi',
      authorRole: 'Founder at Cogniwide | Scaling Globally',
      authorImage: '/images/casestudy/user.png',
      date: 'August 10, 2022'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {data.map((item, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-b border-gray-800 pb-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
                style={{ order: index % 2 === 1 ? 2 : 1 }}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{ order: index % 2 === 1 ? 1 : 2 }}
              >
                <div className="inline-block bg-brand-blue text-white px-3 py-1 rounded-md text-sm font-semibold mb-4">
                  {item.category}
                </div>
                <h2 className="text-4xl font-bold text-brand-dark-grey mb-6">
                  {item.title}
                </h2>
                <p className="text-lg text-brand-medium-grey mb-6">
                  {item.description}
                </p>
                {/* <ul className="space-y-3 text-brand-medium-grey mb-8">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex}>• {point}</li>
                  ))}
                </ul> */}
                <div className="flex items-center pt-6 border-t border-gray-200">
                  <Image
                    src={item.authorImage}
                    alt={item.author}
                    width={48}
                    height={48}
                    className="rounded-full mr-4 object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-brand-dark-grey">{item.author}</p>
                    <p className="text-sm text-brand-medium-grey">{item.authorRole}</p>
                  </div>
                  <p className="text-sm text-brand-medium-grey">{item.date}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}