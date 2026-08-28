'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const news = [
  {
    title: 'Ethics in Everything',
    excerpt: 'Nobody has a problem in being a Law-abiding person. But when it comes to areas where a definite Law or policy has not been enacted, the discretion is at the mercy of ethical values the person holds.',
    date: 'September 7, 2018',
    category: 'Ethics',
    image: '/images/blog/blog1.png',
    author: 'Kannadhasan Kasi',
    authorRole: 'Founder at Cogniwide',
    authorImage: '/images/casestudy/user.png'
  },
  {
    title: 'Two Factors that influence to build successful products',
    excerpt: 'Every product is unique on its own and has a life cycle. After the product is introduced into the market, it is hand held by the creator till it reaches the growth stage.',
    date: 'June 20, 2018',
    category: 'Products',
    image: '/images/casestudy/artificial intelligence.jpg',
    author: 'Kannadhasan Kasi',
    authorRole: 'Founder at Cogniwide',
    authorImage: '/images/casestudy/user.png'
  },
  {
    title: 'Relooking Digital Transformation at the Grassroot Level',
    excerpt: 'Any Transformation will be complete only if it takes into account all its integral constituent entities. It is heartening to see the pace at which developing countries like India is embracing technology in payments, education etc.',
    date: 'May 13, 2018',
    category: 'DIGITAL TRANSFORMATION',
    image: '/images/casestudy/Insurance-main.jpg',
    author: 'Kannadhasan Kasi',
    authorRole: 'Founder at Cogniwide',
    authorImage: '/images/casestudy/user.png'
  },
  {
    title: 'Combining Art + AI',
    excerpt: 'I don’t remember exactly when my craze towards wallpapers, screen savers, posters and abstract designs started. I remember during the late ’90s, how I loved to watch the Windows 98 wallpapers, especially the ones that had an image of clouds on it.',
    date: 'May 10, 2020',
    category: 'Products',
    image: '/images/blog/ai.jpg',
    author: 'Vivek Subburaju',
    authorRole: 'AI Consultant at Cogniwide',
    authorImage: '/images/blog/Vivek.jfif'
  },
  {
    title: 'Faster and lesser coding using Javascript Array Functions',
    excerpt: 'I’m pretty sure that most of us haven’t benefited from some of these amazing Javascript Array functions we’re going to discuss here. These functions are very useful and will definitely speed up your development.',
    date: 'May 5, 2020',
    category: 'Java Script',
    image: '/images/blog/js.jpg',
    author: 'Alfred Francis',
    authorRole: 'Platform Architect at Cogniwide',
    authorImage: '/images/blog/Alfred.jpeg'
  },
  {
    title: 'Relooking Digital Transformation at the Grassroot Level',
    excerpt: 'Any Transformation will be complete only if it takes into account all its integral constituent entities. It is heartening to see the pace at which developing countries like India is embracing technology in payments, education etc.',
    date: 'May 13, 2018',
    category: 'DIGITAL TRANSFORMATION',
    image: '/images/blog/blog1.png',
    author: 'Kannadhasan Kasi',
    authorRole: 'Founder at Cogniwide',
    authorImage: '/images/casestudy/user.png'
  },
  {
    title: 'Integrate RASA with Whatsapp',
    excerpt: 'RASA is an opensource framework for building AI-powered chatbots. You can use RASA to create awesome bots for various channels such as Facebook, Telegram, Slack, etc.',
    date: 'March 29, 2020',
    category: 'Rasa',
    image: '/images/blog/rasa.jpg',
    author: 'Alfred Francis',
    authorRole: 'Platform Architect at Cogniwide',
    authorImage: '/images/blog/Alfred.jpeg'
  }
];

export const BlogGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-brand-dark-grey mb-4"
          >
            Blog Posts
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full flex flex-col"
            >
              <Image src={article.image} alt={article.title} width={400} height={200} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <div className="text-sm font-medium text-white bg-brand-blue px-3 py-1 rounded-md inline-block mb-4 w-fit">
                  {article.category}
                </div>
                <h3 className="text-lg font-bold text-brand-dark-grey mb-4 line-clamp-3 leading-snug">{article.title}</h3>
                <p className="text-brand-medium-grey text-sm leading-relaxed line-clamp-3 mb-6">{article.excerpt}</p>
                <div className="mt-auto pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src={article.authorImage}
                      alt={article.author}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-brand-dark-grey">{article.author}</p>
                      <p className="text-xs text-brand-medium-grey">{article.authorRole}</p>
                    </div>
                  </div>
                  <p className="text-xs text-brand-medium-grey flex items-center gap-2">
                    📅 {article.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};