'use client';

import { ContentBlock } from '@/types/contentful';
import { ContentBlock as ContentBlockComponent } from './ContentBlock';
import { motion } from 'framer-motion';

interface ContentBlockRendererProps {
  blocks: ContentBlock[];
  className?: string;
}

export function ContentBlockRenderer({ blocks, className = '' }: ContentBlockRendererProps) {
  if (!blocks || blocks.length === 0) {
    return (
      <div className={`text-center py-16 ${className}`}>
        <p className="text-gray-500">No content blocks available.</p>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`space-y-0 ${className}`}
    >
      {blocks.map((block, index) => (
        <ContentBlockComponent key={block.sys.id} block={block} index={index} />
      ))}
    </motion.div>
  );
}

// Specialized renderer for different page types
interface ProductContentRendererProps {
  blocks: ContentBlock[];
  productName: string;
  productTagline: string;
}

export function ProductContentRenderer({ 
  blocks, 
  productName, 
  productTagline 
}: ProductContentRendererProps) {
  return (
    <div className="space-y-0">
      {/* Product-specific header if no hero block exists */}
      {!blocks.some(block => block.sys.contentType.sys.id === 'heroSection') && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {productName}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              {productTagline}
            </p>
          </div>
        </motion.div>
      )}
      
      <ContentBlockRenderer blocks={blocks} />
    </div>
  );
}

// Service page content renderer
interface ServiceContentRendererProps {
  blocks: ContentBlock[];
  serviceName: string;
  serviceCategory: string;
}

export function ServiceContentRenderer({ 
  blocks, 
  serviceName, 
  serviceCategory 
}: ServiceContentRendererProps) {
  const categoryLabels = {
    'product-engineering': 'Product Engineering',
    'cloud-engineering': 'Cloud Engineering',
    'data-engineering': 'Data Engineering',
    'intelligent-automation': 'Intelligent Automation',
  };

  return (
    <div className="space-y-0">
      {/* Service-specific header if no hero block exists */}
      {!blocks.some(block => block.sys.contentType.sys.id === 'heroSection') && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {categoryLabels[serviceCategory as keyof typeof categoryLabels] || serviceCategory}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {serviceName}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade solutions designed for scale and performance
            </p>
          </div>
        </motion.div>
      )}
      
      <ContentBlockRenderer blocks={blocks} />
    </div>
  );
}

// Blog post content renderer
interface BlogContentRendererProps {
  blocks: ContentBlock[];
  title: string;
  excerpt: string;
  author: {
    name: string;
    title: string;
  };
  publishedAt: string;
  readingTime?: number;
  tags: string[];
}

export function BlogContentRenderer({ 
  blocks, 
  title, 
  excerpt, 
  author, 
  publishedAt, 
  readingTime, 
  tags 
}: BlogContentRendererProps) {
  return (
    <div className="space-y-0">
      {/* Blog post header */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 py-16"
      >
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div>
                <div className="font-semibold text-gray-900">{author.name}</div>
                <div className="text-gray-600">{author.title}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-gray-600">
              <time dateTime={publishedAt}>
                {new Date(publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {readingTime && (
                <>
                  <span>•</span>
                  <span>{readingTime} min read</span>
                </>
              )}
            </div>
          </div>
          
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
      </motion.article>
      
      <ContentBlockRenderer blocks={blocks} />
    </div>
  );
}