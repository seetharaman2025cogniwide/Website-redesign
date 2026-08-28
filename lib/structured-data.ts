// Enhanced structured data generation for better SEO

export interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  foundingDate?: string;
  founders?: Array<{
    '@type': string;
    name: string;
  }>;
  address?: {
    '@type': string;
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  contactPoint?: Array<{
    '@type': string;
    telephone?: string;
    contactType: string;
    email?: string;
  }>;
  sameAs?: string[];
  services?: string[];
}

export interface WebsiteSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  description: string;
  publisher: {
    '@type': string;
    name: string;
    logo: {
      '@type': string;
      url: string;
    };
  };
  potentialAction?: {
    '@type': string;
    target: string;
    'query-input': string;
  };
}

export interface SoftwareApplicationSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem: string;
  offers: {
    '@type': string;
    category: string;
    priceRange?: string;
  };
  provider: {
    '@type': string;
    name: string;
    url: string;
  };
  featureList?: string[];
  screenshot?: string[];
  aggregateRating?: {
    '@type': string;
    ratingValue: number;
    reviewCount: number;
  };
}

export interface ServiceSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
    url: string;
  };
  areaServed?: string[];
  serviceType: string;
  offers?: {
    '@type': string;
    category: string;
  };
}

export interface FAQPageSchema {
  '@context': string;
  '@type': string;
  mainEntity: Array<{
    '@type': string;
    name: string;
    acceptedAnswer: {
      '@type': string;
      text: string;
    };
  }>;
}

export interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item: string;
  }>;
}

// Generate organization schema
export function generateOrganizationSchema(baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL || 'https://cogniwide.com'): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Cogniwide',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description: 'Enterprise AI solutions provider specializing in agentic AI, conversational AI, and intelligent document processing.',
    foundingDate: '2020',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'contact@cogniwide.com',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'sales@cogniwide.com',
      },
    ],
    sameAs: [
      'https://linkedin.com/company/cogniwide',
      'https://twitter.com/cogniwide',
    ],
    services: [
      'Artificial Intelligence Consulting',
      'Enterprise Software Development',
      'Process Automation',
      'Digital Transformation',
    ],
  };
}

// Generate website schema
export function generateWebsiteSchema(baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL || 'https://cogniwide.com'): WebsiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Cogniwide - Enterprise AI Solutions',
    url: baseUrl,
    description: 'Transform your enterprise operations with AI-powered automation, conversational AI, and intelligent document processing.',
    publisher: {
      '@type': 'Organization',
      name: 'Cogniwide',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

// Generate product schema
export function generateProductSchema(
  product: {
    name: string;
    description: string;
    slug: string;
    category: string;
    features: string[];
  },
  baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL || 'https://cogniwide.com'
): SoftwareApplicationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    description: product.description,
    url: `${baseUrl}/products/${product.slug}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      category: 'Enterprise Software',
      priceRange: 'Contact for pricing',
    },
    provider: {
      '@type': 'Organization',
      name: 'Cogniwide',
      url: baseUrl,
    },
    featureList: product.features,
    screenshot: [`${baseUrl}/images/products/${product.slug}-screenshot.png`],
  };
}

// Generate service schema
export function generateServiceSchema(
  service: {
    name: string;
    description: string;
    slug: string;
    category: string;
  },
  baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL || 'https://cogniwide.com'
): ServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Cogniwide',
      url: baseUrl,
    },
    areaServed: ['United States', 'Canada', 'United Kingdom', 'European Union'],
    serviceType: service.category,
    offers: {
      '@type': 'Offer',
      category: 'Professional Services',
    },
  };
}

// Generate FAQ schema
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Generate breadcrumb schema
export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>,
  baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL || 'https://cogniwide.com'
): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url.startsWith('http') ? crumb.url : `${baseUrl}${crumb.url}`,
    })),
  };
}

// Generate local business schema (if applicable)
export function generateLocalBusinessSchema(
  location: {
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
    phone?: string;
    hours?: Array<{
      day: string;
      open: string;
      close: string;
    }>;
  },
  baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL || 'https://cogniwide.com'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: location.name,
    url: baseUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address.street,
      addressLocality: location.address.city,
      addressRegion: location.address.state,
      postalCode: location.address.zip,
      addressCountry: location.address.country,
    },
    ...(location.phone && { telephone: location.phone }),
    ...(location.hours && {
      openingHoursSpecification: location.hours.map(hour => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: hour.day,
        opens: hour.open,
        closes: hour.close,
      })),
    }),
  };
}

// Combine all schemas for homepage
export function generateHomepageSchemas(baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL || 'https://cogniwide.com') {
  return [
    generateOrganizationSchema(baseUrl),
    generateWebsiteSchema(baseUrl),
  ];
}