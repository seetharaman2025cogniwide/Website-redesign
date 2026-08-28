'use client';

import { Document } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { OptimizedImage } from './OptimizedImage';
import { optimizeContentfulImage } from '@/lib/image-optimization';

// Rich text rendering options
const renderOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <strong className="font-semibold">{text}</strong>,
    [MARKS.ITALIC]: (text: any) => <em className="italic">{text}</em>,
    [MARKS.CODE]: (text: any) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
        {text}
      </code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <h1 className="text-4xl font-bold mb-6 text-gray-900">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="text-3xl font-bold mb-5 text-gray-900">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node: any, children: any) => (
      <h4 className="text-xl font-semibold mb-3 text-gray-900">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node: any, children: any) => (
      <h5 className="text-lg font-semibold mb-3 text-gray-900">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node: any, children: any) => (
      <h6 className="text-base font-semibold mb-2 text-gray-900">{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
      <li className="text-gray-700">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node: any, children: any) => (
      <blockquote className="border-l-4 border-yellow-400 pl-6 py-4 mb-6 bg-gray-50 italic">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-gray-200" />,
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { file, title, description } = node.data.target.fields;
      const { url, details } = file;
      
      if (details.image) {
        const optimizedUrl = optimizeContentfulImage(url, {
          width: Math.min(details.image.width, 1200),
          quality: 85,
          format: 'webp',
        });
        
        return (
          <figure className="my-8">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <OptimizedImage
                src={url}
                alt={title || description || 'Content image'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
            {description && (
              <figcaption className="text-sm text-gray-600 mt-3 text-center italic">
                {description}
              </figcaption>
            )}
          </figure>
        );
      }
      
      // Handle other file types (PDFs, documents, etc.)
      return (
        <div className="my-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <a
            href={`https:${url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <div className="font-medium">{title || 'Download file'}</div>
              <div className="text-sm text-gray-500">
                {file.contentType} • {Math.round(file.size / 1024)} KB
              </div>
            </div>
          </a>
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node: any, children: any) => {
      const { uri } = node.data;
      const isExternal = uri.startsWith('http');
      
      if (isExternal) {
        return (
          <a
            href={uri}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            {children}
          </a>
        );
      }
      
      return (
        <Link href={uri} className="text-blue-600 hover:text-blue-800 underline">
          {children}
        </Link>
      );
    },
    [INLINES.ENTRY_HYPERLINK]: (node: any, children: any) => {
      const entry = node.data.target;
      const slug = entry.fields.slug;
      
      return (
        <Link
          href={`/${slug}`}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {children}
        </Link>
      );
    },
  },
};

interface ContentRendererProps {
  content: Document;
  className?: string;
}

export function ContentRenderer({ content, className = '' }: ContentRendererProps) {
  if (!content) {
    return null;
  }

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {documentToReactComponents(content, renderOptions)}
    </div>
  );
}

// Component for rendering CTA blocks from Contentful
interface CTABlockProps {
  text: string;
  url: string;
  style: 'primary' | 'secondary';
  className?: string;
}

export function CTABlock({ text, url, style, className = '' }: CTABlockProps) {
  const isExternal = url.startsWith('http');
  
  if (isExternal) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Button variant={style} className={className}>
          {text}
        </Button>
      </a>
    );
  }
  
  return (
    <Link href={url}>
      <Button variant={style} className={className}>
        {text}
      </Button>
    </Link>
  );
}