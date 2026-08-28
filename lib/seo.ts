import { Metadata } from 'next';
import { PageEntry, ProductEntry, BlogPostEntry } from '@/types/contentful';

const defaultMetadata = {
  title: 'Cogniwide - Enterprise AI Solutions',
  description: 'Transform your enterprise operations with Cogniwide\'s agentic AI platform. Build intelligent conversations, orchestrate AI agents, and process documents at scale.',
  keywords: ['enterprise AI', 'agentic AI', 'conversational AI', 'document processing', 'AI automation'],
  image: '/images/og-default.jpg',
};

export function generatePageMetadata(
  page: PageEntry | null,
  baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL || 'https://cogniwide.com'
): Metadata {
  if (!page) {
    return {
      title: defaultMetadata.title,
      description: defaultMetadata.description,
      keywords: defaultMetadata.keywords,
      openGraph: {
        title: defaultMetadata.title,
        description: defaultMetadata.description,
        url: baseUrl,
        siteName: 'Cogniwide',
        images: [
          {
            url: `${baseUrl}${defaultMetadata.image}`,
            width: 1200,
            height: 630,
            alt: 'Cogniwide - Enterprise AI Solutions',
          },
        ],
        locale: 'en_US',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: defaultMetadata.title,
        description: defaultMetadata.description,
        images: [`${baseUrl}${defaultMetadata.image}`],
      },
    };
  }

  const title = page.fields.metaTitle || page.fields.title;
  const description = page.fields.metaDescription || defaultMetadata.description;
  const keywords = page.fields.seoKeywords || defaultMetadata.keywords;
  const imageUrl = page.fields.featuredImage?.fields.file.url 
    ? `https:${page.fields.featuredImage.fields.file.url}`
    : `${baseUrl}${defaultMetadata.image}`;
  const pageUrl = `${baseUrl}/${page.fields.slug}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: 'Cogniwide',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export function generateProductMetadata(
  product: ProductEntry | null,
  baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL || 'https://cogniwide.com'
): Metadata {
  if (!product) {
    return generatePageMetadata(null, baseUrl);
  }

  const title = `${product.fields.name} - ${product.fields.tagline} | Cogniwide`;
  const description = product.fields.description 
    ? extractTextFromRichText(product.fields.description)
    : `Discover ${product.fields.name}, Cogniwide's ${product.fields.tagline.toLowerCase()}. Transform your enterprise operations with AI-powered automation.`;
  
  const keywords = [
    product.fields.name.toLowerCase(),
    product.fields.category.replace('-', ' '),
    'enterprise AI',
    'AI automation',
    ...product.fields.keyFeatures.map(feature => feature.toLowerCase()),
  ];

  const imageUrl = product.fields.heroImage?.fields.file.url 
    ? `https:${product.fields.heroImage.fields.file.url}`
    : `${baseUrl}${defaultMetadata.image}`;
  const productUrl = `${baseUrl}/products/${product.fields.slug}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: productUrl,
      siteName: 'Cogniwide',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${product.fields.name} - ${product.fields.tagline}`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: productUrl,
    },
  };
}

export function generateBlogPostMetadata(
  post: BlogPostEntry | null,
  baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL || 'https://cogniwide.com'
): Metadata {
  if (!post) {
    return generatePageMetadata(null, baseUrl);
  }

  const title = `${post.fields.title} | Cogniwide Blog`;
  const description = post.fields.excerpt;
  const keywords = [...post.fields.tags, 'enterprise AI', 'AI insights', 'technology blog'];
  
  const imageUrl = post.fields.featuredImage?.fields.file.url 
    ? `https:${post.fields.featuredImage.fields.file.url}`
    : `${baseUrl}${defaultMetadata.image}`;
  const postUrl = `${baseUrl}/blog/${post.fields.slug}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: post.fields.author.fields.name }],
    openGraph: {
      title,
      description,
      url: postUrl,
      siteName: 'Cogniwide',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.fields.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.fields.publishedAt,
      authors: [post.fields.author.fields.name],
      tags: post.fields.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: postUrl,
    },
  };
}

// Helper function to extract plain text from Contentful rich text
function extractTextFromRichText(richText: any): string {
  if (!richText || !richText.content) {
    return '';
  }

  let text = '';
  
  function extractText(node: any) {
    if (node.nodeType === 'text') {
      text += node.value;
    } else if (node.content) {
      node.content.forEach(extractText);
    }
  }

  richText.content.forEach(extractText);
  
  // Clean up and truncate
  return text.replace(/\s+/g, ' ').trim().substring(0, 160);
}

// Generate structured data for products
export function generateProductStructuredData(
  product: ProductEntry,
  baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL || 'https://cogniwide.com'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.fields.name,
    description: extractTextFromRichText(product.fields.description),
    url: `${baseUrl}/products/${product.fields.slug}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      category: 'Enterprise Software',
    },
    provider: {
      '@type': 'Organization',
      name: 'Cogniwide',
      url: baseUrl,
    },
    featureList: product.fields.keyFeatures,
  };
}

// Generate structured data for blog posts
export function generateBlogPostStructuredData(
  post: BlogPostEntry,
  baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL || 'https://cogniwide.com'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.fields.title,
    description: post.fields.excerpt,
    url: `${baseUrl}/blog/${post.fields.slug}`,
    datePublished: post.fields.publishedAt,
    dateModified: post.sys.updatedAt,
    author: {
      '@type': 'Person',
      name: post.fields.author.fields.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cogniwide',
      url: baseUrl,
    },
    keywords: post.fields.tags.join(', '),
    ...(post.fields.featuredImage && {
      image: {
        '@type': 'ImageObject',
        url: `https:${post.fields.featuredImage.fields.file.url}`,
        width: (post.fields.featuredImage.fields.file as any).details?.image?.width || 1200,
        height: (post.fields.featuredImage.fields.file as any).details?.image?.height || 630,
      },
    }),
  };
}