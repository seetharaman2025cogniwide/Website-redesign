'use client';

import { PageEntry } from '@/types/contentful';
import { ContentBlock } from './ContentBlock';
import { generatePageMetadata } from '@/lib/seo';
import { motion } from 'framer-motion';

interface DynamicPageProps {
  page: PageEntry;
  preview?: boolean;
}

export function DynamicPage({ page, preview = false }: DynamicPageProps) {
  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600">The requested page could not be found.</p>
        </div>
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
      className="min-h-screen"
    >
      {preview && (
        <div className="bg-yellow-100 border-b border-yellow-200 px-4 py-2 text-center text-sm">
          <span className="font-medium">Preview Mode:</span> You are viewing draft content
        </div>
      )}

      {/* Render content blocks */}
      {page.fields.content && page.fields.content.length > 0 ? (
        <div className="space-y-0">
          {page.fields.content.map((block, index) => (
            <ContentBlock key={block.sys.id} block={block} index={index} />
          ))}
        </div>
      ) : (
        // Fallback for pages without content blocks
        <div className="max-w-4xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8">{page.fields.title}</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600">
                This page is currently being built. Content will be available soon.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

// Component for rendering a page with SEO metadata
interface SEOPageProps extends DynamicPageProps {
  baseUrl?: string;
}

export function SEOPage({ page, preview = false, baseUrl }: SEOPageProps) {
  // Generate metadata for the page
  const metadata = generatePageMetadata(page, baseUrl);

  return (
    <>
      {/* This would typically be handled by Next.js metadata API in app router */}
      <DynamicPage page={page} preview={preview} />
    </>
  );
}

// Loading state component
export function PageSkeleton() {
  return (
    <div className="min-h-screen animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-gray-200 h-96 mb-8"></div>
      
      {/* Content skeleton */}
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="h-8 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
        <div className="h-64 bg-gray-200 rounded"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-4/5"></div>
        </div>
      </div>
    </div>
  );
}

// Error state component
interface PageErrorProps {
  error: string;
  retry?: () => void;
}

export function PageError({ error, retry }: PageErrorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h1>
        <p className="text-gray-600 mb-6">{error}</p>
        {retry && (
          <button
            onClick={retry}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}