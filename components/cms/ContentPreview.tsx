'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ContentRenderer } from './ContentRenderer';
import { PageEntry, ProductEntry, BlogPostEntry } from '@/types/contentful';

interface ContentPreviewProps {
  contentType: 'page' | 'product' | 'blogPost';
  slug: string;
  preview?: boolean;
}

export function ContentPreview({ contentType, slug, preview = false }: ContentPreviewProps) {
  const [content, setContent] = useState<PageEntry | ProductEntry | BlogPostEntry | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `/api/content/${contentType}/${slug}?preview=${preview}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch content: ${response.statusText}`);
        }

        const data = await response.json();
        setContent(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load content');
      } finally {
        setLoading(false);
      }
    }

    fetchContent();
  }, [contentType, slug, preview]);

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h3 className="text-red-800 font-semibold mb-2">Error Loading Content</h3>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h3 className="text-yellow-800 font-semibold mb-2">Content Not Found</h3>
        <p className="text-yellow-600">
          The requested content could not be found. Please check the slug and try again.
        </p>
      </div>
    );
  }

  // Render different content types
  switch (contentType) {
    case 'page':
      const page = content as PageEntry;
      return (
        <div>
          <h1 className="text-4xl font-bold mb-6">{page.fields.title}</h1>
          {page.fields.content && page.fields.content.map((block, index) => (
            <div key={index} className="mb-8">
              <ContentBlock block={block} />
            </div>
          ))}
        </div>
      );

    case 'product':
      const product = content as ProductEntry;
      return (
        <div>
          <h1 className="text-4xl font-bold mb-2">{product.fields.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{product.fields.tagline}</p>
          {product.fields.description && (
            <ContentRenderer content={product.fields.description} />
          )}
          
          {product.fields.keyFeatures && product.fields.keyFeatures.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2">
                {product.fields.keyFeatures.map((feature, index) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );

    case 'blogPost':
      const post = content as BlogPostEntry;
      return (
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.fields.title}</h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <span>By {post.fields.author.fields.name}</span>
              <span>•</span>
              <time dateTime={post.fields.publishedAt}>
                {new Date(post.fields.publishedAt).toLocaleDateString()}
              </time>
              {post.fields.readingTime && (
                <>
                  <span>•</span>
                  <span>{post.fields.readingTime} min read</span>
                </>
              )}
            </div>
            {post.fields.tags && post.fields.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.fields.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>
          
          <div className="prose prose-lg max-w-none">
            <ContentRenderer content={post.fields.content} />
          </div>
        </article>
      );

    default:
      return null;
  }
}

// Helper component for rendering individual content blocks
function ContentBlock({ block }: { block: any }) {
  const blockType = block.sys.contentType.sys.id;

  switch (blockType) {
    case 'heroSection':
      return (
        <div className="bg-gradient-to-r from-white to-gray-50 py-16 px-8 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">{block.fields.headline}</h1>
          {block.fields.subheadline && (
            <p className="text-xl text-gray-600 mb-8">{block.fields.subheadline}</p>
          )}
          <div className="flex space-x-4">
            {block.fields.primaryCta && (
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                {block.fields.primaryCta.text}
              </button>
            )}
            {block.fields.secondaryCta && (
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                {block.fields.secondaryCta.text}
              </button>
            )}
          </div>
        </div>
      );

    case 'textBlock':
      return (
        <div className="prose prose-lg max-w-none">
          <ContentRenderer content={block.fields.content} />
        </div>
      );

    case 'imageBlock':
      return (
        <div className="my-8 relative w-full h-64 md:h-96">
          <Image
            src={`https:${block.fields.image.fields.file.url}`}
            alt={block.fields.image.fields.title}
            fill
            className="rounded-lg shadow-md object-contain"
          />
          {block.fields.caption && (
            <p className="text-sm text-gray-600 mt-2 text-center italic absolute -bottom-8 left-0 right-0">
              {block.fields.caption}
            </p>
          )}
        </div>
      );

    default:
      return (
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-600">
            Unknown content block type: {blockType}
          </p>
        </div>
      );
  }
}