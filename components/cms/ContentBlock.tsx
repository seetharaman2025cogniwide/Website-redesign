'use client';

import { ContentBlock as ContentBlockType } from '@/types/contentful';
import { ContentRenderer } from './ContentRenderer';
import { OptimizedImage } from './OptimizedImage';
import { CTABlock } from './ContentRenderer';
import { motion } from 'framer-motion';

interface ContentBlockProps {
  block: ContentBlockType;
  index?: number;
}

export function ContentBlock({ block, index = 0 }: ContentBlockProps) {
  const blockType = block.sys.contentType.sys.id;
  const animationDelay = index * 0.1;

  const blockVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: animationDelay,
        ease: "easeOut"
      }
    }
  };

  switch (blockType) {
    case 'heroSection':
      return (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={blockVariants}
          className="relative overflow-hidden"
        >
          <HeroSectionBlock fields={block.fields} />
        </motion.section>
      );

    case 'textBlock':
      return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={blockVariants}
          className="max-w-4xl mx-auto px-4 py-8"
        >
          <TextBlock fields={block.fields} />
        </motion.div>
      );

    case 'imageBlock':
      return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={blockVariants}
          className="max-w-6xl mx-auto px-4 py-8"
        >
          <ImageBlock fields={block.fields} />
        </motion.div>
      );

    case 'ctaBlock':
      return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={blockVariants}
          className="max-w-4xl mx-auto px-4 py-12 text-center"
        >
          <CTABlockComponent fields={block.fields} />
        </motion.div>
      );

    case 'featureGrid':
      return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={blockVariants}
          className="max-w-6xl mx-auto px-4 py-12"
        >
          <FeatureGridBlock fields={block.fields} />
        </motion.div>
      );

    case 'testimonialBlock':
      return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={blockVariants}
          className="max-w-4xl mx-auto px-4 py-12"
        >
          <TestimonialBlock fields={block.fields} />
        </motion.div>
      );

    case 'statsBlock':
      return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={blockVariants}
          className="max-w-6xl mx-auto px-4 py-12"
        >
          <StatsBlock fields={block.fields} />
        </motion.div>
      );

    default:
      return (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800">
              Unknown content block type: <code className="bg-yellow-100 px-2 py-1 rounded">{blockType}</code>
            </p>
          </div>
        </div>
      );
  }
}

// Hero Section Block Component
function HeroSectionBlock({ fields }: { fields: any }) {
  return (
    <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20 lg:py-32">
      {fields.backgroundImage && (
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src={fields.backgroundImage.fields.file.url}
            alt={fields.backgroundImage.fields.title || 'Hero background'}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            {fields.headline}
          </motion.h1>
          
          {fields.subheadline && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              {fields.subheadline}
            </motion.p>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {fields.primaryCta && (
              <CTABlock
                text={fields.primaryCta.text}
                url={fields.primaryCta.url}
                style={fields.primaryCta.style || 'primary'}
                className="text-lg px-8 py-4"
              />
            )}
            {fields.secondaryCta && (
              <CTABlock
                text={fields.secondaryCta.text}
                url={fields.secondaryCta.url}
                style={fields.secondaryCta.style || 'secondary'}
                className="text-lg px-8 py-4"
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Text Block Component
function TextBlock({ fields }: { fields: any }) {
  return (
    <div className="prose prose-lg prose-gray max-w-none">
      {fields.title && (
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{fields.title}</h2>
      )}
      <ContentRenderer content={fields.content} />
    </div>
  );
}

// Image Block Component
function ImageBlock({ fields }: { fields: any }) {
  return (
    <figure className="space-y-4">
      <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
        <OptimizedImage
          src={fields.image.fields.file.url}
          alt={fields.image.fields.title || fields.caption || 'Content image'}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>
      {fields.caption && (
        <figcaption className="text-center text-gray-600 italic">
          {fields.caption}
        </figcaption>
      )}
    </figure>
  );
}

// CTA Block Component
function CTABlockComponent({ fields }: { fields: any }) {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
      {fields.title && (
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{fields.title}</h2>
      )}
      {fields.description && (
        <p className="text-xl text-gray-600 mb-8">{fields.description}</p>
      )}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {fields.primaryCta && (
          <CTABlock
            text={fields.primaryCta.text}
            url={fields.primaryCta.url}
            style={fields.primaryCta.style || 'primary'}
            className="text-lg px-8 py-4"
          />
        )}
        {fields.secondaryCta && (
          <CTABlock
            text={fields.secondaryCta.text}
            url={fields.secondaryCta.url}
            style={fields.secondaryCta.style || 'secondary'}
            className="text-lg px-8 py-4"
          />
        )}
      </div>
    </div>
  );
}

// Feature Grid Block Component
function FeatureGridBlock({ fields }: { fields: any }) {
  return (
    <div>
      {fields.title && (
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{fields.title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fields.features?.map((feature: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
          >
            {feature.icon && (
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">{feature.icon}</span>
              </div>
            )}
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Testimonial Block Component
function TestimonialBlock({ fields }: { fields: any }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 text-center">
      <blockquote className="text-2xl font-medium text-gray-900 mb-6">
        "{fields.quote}"
      </blockquote>
      <div className="flex items-center justify-center space-x-4">
        {fields.avatar && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <OptimizedImage
              src={fields.avatar.fields.file.url}
              alt={fields.authorName}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="text-left">
          <div className="font-semibold text-gray-900">{fields.authorName}</div>
          <div className="text-gray-600">{fields.authorTitle}</div>
          {fields.company && (
            <div className="text-gray-500">{fields.company}</div>
          )}
        </div>
      </div>
    </div>
  );
}

// Stats Block Component
function StatsBlock({ fields }: { fields: any }) {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-white">
      {fields.title && (
        <h2 className="text-3xl font-bold text-center mb-12">{fields.title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {fields.stats?.map((stat: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.value}</div>
            <div className="text-xl font-semibold mb-1">{stat.label}</div>
            {stat.description && (
              <div className="text-gray-300 text-sm">{stat.description}</div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}