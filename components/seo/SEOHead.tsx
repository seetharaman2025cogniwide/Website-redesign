'use client';

import React from 'react';
import Head from 'next/head';
import { PageEntry, ProductEntry, BlogPostEntry } from '@/types/contentful';
import { generatePageMetadata, generateProductMetadata, generateBlogPostMetadata, generateProductStructuredData, generateBlogPostStructuredData } from '@/lib/seo';

interface SEOHeadProps {
  content: PageEntry | ProductEntry | BlogPostEntry | null;
  contentType: 'page' | 'product' | 'blogPost';
  baseUrl?: string;
}

export function SEOHead({ content, contentType, baseUrl }: SEOHeadProps) {
  if (!content) return null;

  let metadata;
  let structuredData;

  switch (contentType) {
    case 'product':
      metadata = generateProductMetadata(content as ProductEntry, baseUrl);
      structuredData = generateProductStructuredData(content as ProductEntry, baseUrl);
      break;
    case 'blogPost':
      metadata = generateBlogPostMetadata(content as BlogPostEntry, baseUrl);
      structuredData = generateBlogPostStructuredData(content as BlogPostEntry, baseUrl);
      break;
    default:
      metadata = generatePageMetadata(content as PageEntry, baseUrl);
      break;
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{metadata.title as string}</title>
      <meta name="description" content={metadata.description as string} />
      {metadata.keywords && (
        <meta name="keywords" content={Array.isArray(metadata.keywords) ? metadata.keywords.join(', ') : metadata.keywords} />
      )}

      {/* Open Graph */}
      {metadata.openGraph && (
        <>
          <meta property="og:title" content={metadata.openGraph.title as string} />
          <meta property="og:description" content={metadata.openGraph.description as string} />
          <meta property="og:url" content={metadata.openGraph.url as string} />
          <meta property="og:site_name" content={metadata.openGraph.siteName as string} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={metadata.openGraph.locale as string} />
          
          {metadata.openGraph.images && (
            <>
              {Array.isArray(metadata.openGraph.images) ? (
                metadata.openGraph.images.map((image, index) => {
                  let imageUrl = '';
                  if (typeof image === 'string') {
                    imageUrl = image;
                  } else if (image instanceof URL) {
                    imageUrl = image.toString();
                  } else if (typeof image === 'object' && image && 'url' in image) {
                    imageUrl = typeof image.url === 'string' ? image.url : image.url?.toString() || '';
                  }
                  
                  return (
                    <React.Fragment key={index}>
                      <meta property="og:image" content={imageUrl} />
                      {typeof image === 'object' && image && 'width' in image && image.width && (
                        <meta property="og:image:width" content={image.width.toString()} />
                      )}
                      {typeof image === 'object' && image && 'height' in image && image.height && (
                        <meta property="og:image:height" content={image.height.toString()} />
                      )}
                      {typeof image === 'object' && image && 'alt' in image && image.alt && (
                        <meta property="og:image:alt" content={image.alt} />
                      )}
                    </React.Fragment>
                  );
                })
              ) : (
                <>
                  <meta property="og:image" content={
                    typeof metadata.openGraph.images === 'string' ? metadata.openGraph.images :
                    metadata.openGraph.images instanceof URL ? metadata.openGraph.images.toString() :
                    typeof metadata.openGraph.images === 'object' && metadata.openGraph.images && 'url' in metadata.openGraph.images ? 
                      (typeof metadata.openGraph.images.url === 'string' ? metadata.openGraph.images.url : metadata.openGraph.images.url?.toString() || '') : ''
                  } />
                  {typeof metadata.openGraph.images === 'object' && metadata.openGraph.images && 'width' in metadata.openGraph.images && metadata.openGraph.images.width && (
                    <meta property="og:image:width" content={metadata.openGraph.images.width.toString()} />
                  )}
                  {typeof metadata.openGraph.images === 'object' && metadata.openGraph.images && 'height' in metadata.openGraph.images && metadata.openGraph.images.height && (
                    <meta property="og:image:height" content={metadata.openGraph.images.height.toString()} />
                  )}
                  {typeof metadata.openGraph.images === 'object' && metadata.openGraph.images && 'alt' in metadata.openGraph.images && metadata.openGraph.images.alt && (
                    <meta property="og:image:alt" content={metadata.openGraph.images.alt} />
                  )}
                </>
              )}
            </>
          )}

          {/* Article meta tags would be handled separately for blog posts */}
        </>
      )}

      {/* Twitter Card */}
      {metadata.twitter && (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metadata.twitter.title as string} />
          <meta name="twitter:description" content={metadata.twitter.description as string} />
          {metadata.twitter.images && Array.isArray(metadata.twitter.images) && metadata.twitter.images.length > 0 && (
            <meta name="twitter:image" content={
              typeof metadata.twitter.images[0] === 'string' ? metadata.twitter.images[0] :
              metadata.twitter.images[0] instanceof URL ? metadata.twitter.images[0].toString() :
              typeof metadata.twitter.images[0] === 'object' && metadata.twitter.images[0] && 'url' in metadata.twitter.images[0] ? 
                (typeof metadata.twitter.images[0].url === 'string' ? metadata.twitter.images[0].url : metadata.twitter.images[0].url?.toString() || '') : ''
            } />
          )}
        </>
      )}

      {/* Canonical URL */}
      {metadata.alternates?.canonical && (() => {
        let canonicalUrl = '';
        if (typeof metadata.alternates.canonical === 'string') {
          canonicalUrl = metadata.alternates.canonical;
        } else if (metadata.alternates.canonical instanceof URL) {
          canonicalUrl = metadata.alternates.canonical.toString();
        } else if (typeof metadata.alternates.canonical === 'object' && metadata.alternates.canonical && 'url' in metadata.alternates.canonical) {
          canonicalUrl = typeof metadata.alternates.canonical.url === 'string' ? metadata.alternates.canonical.url : metadata.alternates.canonical.url?.toString() || '';
        }
        return canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null;
      })()}

      {/* Authors */}
      {metadata.authors && Array.isArray(metadata.authors) && (
        metadata.authors.map((author, index) => (
          <meta key={index} name="author" content={author.name} />
        ))
      )}

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#FFD700" />
      <meta name="msapplication-TileColor" content="#FFD700" />
    </Head>
  );
}

// Simplified component for basic pages
interface BasicSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export function BasicSEO({ title, description, keywords, image, url }: BasicSEOProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cogniwide.com';
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const imageUrl = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : `${baseUrl}/images/banner.png`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      <link rel="canonical" href={fullUrl} />
    </Head>
  );
}