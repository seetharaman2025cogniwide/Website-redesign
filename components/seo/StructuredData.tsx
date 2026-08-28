'use client';

import { useEffect } from 'react';

interface StructuredDataProps {
  data: any | any[];
}

export function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    // Ensure data is properly formatted
    const schemas = Array.isArray(data) ? data : [data];
    
    // Add structured data to the page
    schemas.forEach((schema, index) => {
      const scriptId = `structured-data-${index}`;
      
      // Remove existing script if it exists
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
      
      // Create new script element
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      
      // Add to head
      document.head.appendChild(script);
    });
    
    // Cleanup function
    return () => {
      const schemas = Array.isArray(data) ? data : [data];
      schemas.forEach((_, index) => {
        const scriptId = `structured-data-${index}`;
        const script = document.getElementById(scriptId);
        if (script) {
          script.remove();
        }
      });
    };
  }, [data]);

  return null; // This component doesn't render anything visible
}

// Convenience components for common schema types
interface OrganizationStructuredDataProps {
  name: string;
  url: string;
  logo: string;
  description: string;
  address?: any;
  contactPoint?: any[];
  sameAs?: string[];
}

export function OrganizationStructuredData(props: OrganizationStructuredDataProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    ...props,
  };

  return <StructuredData data={schema} />;
}

interface ProductStructuredDataProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  brand?: string;
  offers?: any;
  aggregateRating?: any;
  review?: any[];
}

export function ProductStructuredData(props: ProductStructuredDataProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    ...props,
  };

  return <StructuredData data={schema} />;
}

interface ServiceStructuredDataProps {
  name: string;
  description: string;
  provider: any;
  areaServed?: string[];
  serviceType?: string;
  offers?: any;
}

export function ServiceStructuredData(props: ServiceStructuredDataProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    ...props,
  };

  return <StructuredData data={schema} />;
}

interface BreadcrumbStructuredDataProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbStructuredData({ items }: BreadcrumbStructuredDataProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <StructuredData data={schema} />;
}

interface FAQStructuredDataProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQStructuredData({ faqs }: FAQStructuredDataProps) {
  const schema = {
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

  return <StructuredData data={schema} />;
}