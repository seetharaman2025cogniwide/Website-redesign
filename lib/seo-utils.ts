// SEO utility functions and helpers

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

// Generate canonical URL
export function generateCanonicalUrl(path: string, baseUrl?: string): string {
  const base = baseUrl || process.env.NEXT_PUBLIC_SITE_URL || 'https://cogniwide.com';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

// Generate meta description from content
export function generateMetaDescription(content: string, maxLength: number = 160): string {
  // Remove HTML tags and extra whitespace
  const cleanContent = content
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  
  if (cleanContent.length <= maxLength) {
    return cleanContent;
  }
  
  // Truncate at word boundary
  const truncated = cleanContent.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > 0 
    ? `${truncated.substring(0, lastSpace)}...`
    : `${truncated}...`;
}

// Generate SEO-friendly slug
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim()
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

// Extract keywords from content
export function extractKeywords(content: string, maxKeywords: number = 10): string[] {
  // Common stop words to exclude
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
    'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
    'will', 'would', 'could', 'should', 'may', 'might', 'can', 'this', 'that', 'these', 'those',
    'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them'
  ]);

  // Extract words and count frequency
  const words = content
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 2 && !stopWords.has(word));

  const wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Sort by frequency and return top keywords
  return Object.entries(wordCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word);
}

// Generate Open Graph image URL
export function generateOGImageUrl(
  title: string,
  subtitle?: string,
  baseUrl?: string
): string {
  const base = baseUrl || process.env.NEXT_PUBLIC_SITE_URL || 'https://cogniwide.com';
  
  // If using a service like Vercel OG or custom OG image generator
  const params = new URLSearchParams({
    title,
    ...(subtitle && { subtitle }),
  });
  
  return `${base}/api/og?${params.toString()}`;
}

// Validate SEO configuration
export function validateSEOConfig(config: SEOConfig): {
  isValid: boolean;
  warnings: string[];
  errors: string[];
} {
  const warnings: string[] = [];
  const errors: string[] = [];

  // Title validation
  if (!config.title) {
    errors.push('Title is required');
  } else {
    if (config.title.length < 30) {
      warnings.push('Title is shorter than recommended (30+ characters)');
    }
    if (config.title.length > 60) {
      warnings.push('Title is longer than recommended (60 characters max)');
    }
  }

  // Description validation
  if (!config.description) {
    errors.push('Description is required');
  } else {
    if (config.description.length < 120) {
      warnings.push('Description is shorter than recommended (120+ characters)');
    }
    if (config.description.length > 160) {
      warnings.push('Description is longer than recommended (160 characters max)');
    }
  }

  // Keywords validation
  if (config.keywords) {
    if (config.keywords.length > 10) {
      warnings.push('Too many keywords (10 max recommended)');
    }
    if (config.keywords.some(keyword => keyword.length > 50)) {
      warnings.push('Some keywords are too long (50 characters max)');
    }
  }

  // Image validation
  if (config.image) {
    if (!config.image.startsWith('http')) {
      warnings.push('Image URL should be absolute');
    }
  }

  return {
    isValid: errors.length === 0,
    warnings,
    errors,
  };
}

// Generate hreflang tags for international SEO
export function generateHreflangTags(
  currentPath: string,
  locales: Array<{ code: string; url: string }>,
  baseUrl?: string
): Array<{ hreflang: string; href: string }> {
  const base = baseUrl || process.env.NEXT_PUBLIC_SITE_URL || 'https://cogniwide.com';
  
  return locales.map(locale => ({
    hreflang: locale.code,
    href: `${locale.url}${currentPath}`,
  }));
}

// Calculate reading time
export function calculateReadingTime(content: string, wordsPerMinute: number = 200): number {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Generate schema.org markup for articles
export function generateArticleSchema(article: {
  title: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  modifiedAt?: string;
  image?: string;
  url: string;
  tags?: string[];
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cogniwide.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image ? [article.image] : undefined,
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt || article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cogniwide',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`,
      },
    },
    url: article.url,
    wordCount: article.content.trim().split(/\s+/).length,
    keywords: article.tags?.join(', '),
  };
}

// SEO audit function
export function auditPageSEO(pageData: {
  title?: string;
  description?: string;
  content?: string;
  images?: Array<{ src: string; alt?: string }>;
  links?: Array<{ href: string; text: string }>;
}): {
  score: number;
  issues: Array<{ type: 'error' | 'warning' | 'info'; message: string }>;
} {
  const issues: Array<{ type: 'error' | 'warning' | 'info'; message: string }> = [];
  let score = 100;

  // Title checks
  if (!pageData.title) {
    issues.push({ type: 'error', message: 'Missing page title' });
    score -= 20;
  } else {
    if (pageData.title.length < 30) {
      issues.push({ type: 'warning', message: 'Title is too short (< 30 characters)' });
      score -= 5;
    }
    if (pageData.title.length > 60) {
      issues.push({ type: 'warning', message: 'Title is too long (> 60 characters)' });
      score -= 5;
    }
  }

  // Description checks
  if (!pageData.description) {
    issues.push({ type: 'error', message: 'Missing meta description' });
    score -= 15;
  } else {
    if (pageData.description.length < 120) {
      issues.push({ type: 'warning', message: 'Description is too short (< 120 characters)' });
      score -= 5;
    }
    if (pageData.description.length > 160) {
      issues.push({ type: 'warning', message: 'Description is too long (> 160 characters)' });
      score -= 5;
    }
  }

  // Content checks
  if (pageData.content) {
    const wordCount = pageData.content.trim().split(/\s+/).length;
    if (wordCount < 300) {
      issues.push({ type: 'warning', message: 'Content is too short (< 300 words)' });
      score -= 10;
    }
  }

  // Image checks
  if (pageData.images) {
    const imagesWithoutAlt = pageData.images.filter(img => !img.alt);
    if (imagesWithoutAlt.length > 0) {
      issues.push({ 
        type: 'warning', 
        message: `${imagesWithoutAlt.length} images missing alt text` 
      });
      score -= imagesWithoutAlt.length * 2;
    }
  }

  // Link checks
  if (pageData.links) {
    const emptyLinks = pageData.links.filter(link => !link.text.trim());
    if (emptyLinks.length > 0) {
      issues.push({ 
        type: 'warning', 
        message: `${emptyLinks.length} links with empty text` 
      });
      score -= emptyLinks.length;
    }
  }

  return {
    score: Math.max(0, score),
    issues,
  };
}