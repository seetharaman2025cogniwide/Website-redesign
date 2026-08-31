'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

const news = [
  {
    title: 'Ethics in Everything',
    excerpt:
      'Nobody has a problem in being a Law-abiding person. But when it comes to areas where a definite Law or policy has not been enacted, the discretion is at the mercy of ethical values the person holds.',
    date: 'September 7, 2018',
    category: 'Ethics',
    image: '/images/blog/blog1.png',
    author: 'Kannadhasan Kasi',
    authorRole: 'Founder at Cogniwide',
    authorImage: '/images/casestudy/user.png',
  },
  {
    title: 'Two Factors that influence to build successful products',
    excerpt:
      'Every product is unique on its own and has a life cycle. After the product is introduced into the market, it is hand held by the creator till it reaches the growth stage.',
    date: 'June 20, 2018',
    category: 'Products',
    image: '/images/casestudy/artificial intelligence.jpg',
    author: 'Kannadhasan Kasi',
    authorRole: 'Founder at Cogniwide',
    authorImage: '/images/casestudy/user.png',
  },
  {
    title: 'Relooking Digital Transformation at the Grassroot Level',
    excerpt:
      'Any Transformation will be complete only if it takes into account all its integral constituent entities. It is heartening to see the pace at which developing countries like India is embracing technology in payments, education etc.',
    date: 'May 13, 2018',
    category: 'Digital Transformation',
    image: '/images/casestudy/Insurance-main.jpg',
    author: 'Kannadhasan Kasi',
    authorRole: 'Founder at Cogniwide',
    authorImage: '/images/casestudy/user.png',
  },
  {
    title: 'Combining Art + AI',
    excerpt:
      'I don’t remember exactly when my craze towards wallpapers, screen savers, posters and abstract designs started. I remember during the late ’90s, how I loved to watch the Windows 98 wallpapers, especially the ones that had an image of clouds on it.',
    date: 'May 10, 2020',
    category: 'Products',
    image: '/images/blog/ai.jpg',
    author: 'Vivek Subburaju',
    authorRole: 'AI Consultant at Cogniwide',
    authorImage: '/images/blog/Vivek.jfif',
  },
  {
    title: 'Faster and lesser coding using Javascript Array Functions',
    excerpt:
      'I’m pretty sure that most of us haven’t benefited from some of these amazing Javascript Array functions we’re going to discuss here. These functions are very useful and will definitely speed up your development.',
    date: 'May 5, 2020',
    category: 'JavaScript',
    image: '/images/blog/js.jpg',
    author: 'Alfred Francis',
    authorRole: 'Platform Architect at Cogniwide',
    authorImage: '/images/blog/Alfred.jpeg',
  },
  {
    title: 'Integrate RASA with Whatsapp',
    excerpt:
      'RASA is an opensource framework for building AI-powered chatbots. You can use RASA to create awesome bots for various channels such as Facebook, Telegram, Slack, etc.',
    date: 'March 29, 2020',
    category: 'Rasa',
    image: '/images/blog/rasa.jpg',
    author: 'Alfred Francis',
    authorRole: 'Platform Architect at Cogniwide',
    authorImage: '/images/blog/Alfred.jpeg',
  },
];

const categories = ['All', 'Products', 'Digital Transformation', 'Ethics', 'JavaScript', 'Rasa'];

export const BlogGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredNews =
    activeCategory === 'All'
      ? news
      : news.filter((item) => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section className="py-20 bg-[#0B0A14] relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-[#7C3AED]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-[#8B5CF6]/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white shadow-[0_0_20px_rgba(139,92,246,0.45)] scale-105'
                    : 'bg-[#15151D] text-[#B8B6C4] border border-[#29263A] hover:border-[#8B5CF6]/50 hover:text-white hover:bg-[#1A1829]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((article, index) => (
            <motion.article
              key={`${article.title}-${index}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group bg-[#15151D]/90 rounded-3xl border border-[#29263A] hover:border-[#8B5CF6]/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(124,58,237,0.25)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col backdrop-blur-xl"
            >
              {/* Image Container */}
              <div className="relative w-full h-52 overflow-hidden bg-[#1A1829]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as any).src = '/images/placeholder.svg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15151D] via-transparent to-transparent opacity-80" />

                {/* Category Badge overlay on image */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#15151D]/90 border border-[#8B5CF6]/40 text-[#A78BFA] shadow-[0_0_12px_rgba(124,58,237,0.3)] backdrop-blur-md">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#A78BFA] transition-colors leading-snug line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-[#B8B6C4] leading-relaxed line-clamp-3 mb-6 font-normal">
                  {article.excerpt}
                </p>

                {/* Footer / Author info */}
                <div className="mt-auto pt-5 border-t border-[#29263A] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#8B5CF6]/40 bg-[#1A1829] flex-shrink-0">
                      <Image
                        src={article.authorImage}
                        alt={article.author}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          (e.currentTarget as any).src = '/images/casestudy/user.png';
                        }}
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">{article.author}</p>
                      <p className="text-[11px] text-[#777583]">{article.authorRole}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#777583]">
                    <CalendarDaysIcon className="w-3.5 h-3.5 text-[#A78BFA]" />
                    <span className="text-[11px]">{article.date}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};