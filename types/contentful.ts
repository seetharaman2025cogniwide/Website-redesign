import { Document } from '@contentful/rich-text-types';

// Base content type interface
export interface ContentfulEntry {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
    contentType: {
      sys: {
        id: string;
      };
    };
  };
  fields: any;
}

// Page content type
export interface PageEntry extends ContentfulEntry {
  fields: {
    title: string;
    slug: string;
    metaDescription?: string;
    metaTitle?: string;
    seoKeywords?: string[];
    content: ContentBlock[];
    publishedAt?: string;
    featuredImage?: {
      fields: {
        file: {
          url: string;
          details: {
            image: {
              width: number;
              height: number;
            };
          };
        };
        title: string;
        description?: string;
      };
    };
  };
}

// Content block types
export interface ContentBlock {
  sys: {
    id: string;
    contentType: {
      sys: {
        id: string;
      };
    };
  };
  fields: any;
}

// Text block content type
export interface TextBlockEntry extends ContentfulEntry {
  fields: {
    title?: string;
    content: Document;
  };
}

// Image block content type
export interface ImageBlockEntry extends ContentfulEntry {
  fields: {
    image: {
      fields: {
        file: {
          url: string;
          details: {
            image: {
              width: number;
              height: number;
            };
          };
        };
        title: string;
        description?: string;
      };
    };
    caption?: string;
    altText?: string;
  };
}

// CTA block content type
export interface CTABlockEntry extends ContentfulEntry {
  fields: {
    title?: string;
    description?: string;
    primaryCta?: {
      text: string;
      url: string;
      style: 'primary' | 'secondary';
    };
    secondaryCta?: {
      text: string;
      url: string;
      style: 'primary' | 'secondary';
    };
  };
}

// Feature grid content type
export interface FeatureGridEntry extends ContentfulEntry {
  fields: {
    title?: string;
    features: {
      title: string;
      description: string;
      icon?: string;
    }[];
  };
}

// Testimonial block content type
export interface TestimonialBlockEntry extends ContentfulEntry {
  fields: {
    quote: string;
    authorName: string;
    authorTitle: string;
    company?: string;
    avatar?: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
  };
}

// Stats block content type
export interface StatsBlockEntry extends ContentfulEntry {
  fields: {
    title?: string;
    stats: {
      value: string;
      label: string;
      description?: string;
    }[];
  };
}

// Hero section content type
export interface HeroSectionEntry extends ContentfulEntry {
  fields: {
    headline: string;
    subheadline?: string;
    primaryCta: {
      text: string;
      url: string;
      style: 'primary' | 'secondary';
    };
    secondaryCta?: {
      text: string;
      url: string;
      style: 'primary' | 'secondary';
    };
    backgroundImage?: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
    showTrustIndicators?: boolean;
  };
}

// Product content type
export interface ProductEntry extends ContentfulEntry {
  fields: {
    name: string;
    slug: string;
    tagline: string;
    description: Document;
    keyFeatures: string[];
    useCases: UseCaseEntry[];
    heroImage?: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
    demoType: 'chatbot' | 'workflow' | 'document' | 'calculator';
    category: 'conversational-ai' | 'agentic-ai' | 'document-processing';
  };
}

// Use case content type
export interface UseCaseEntry extends ContentfulEntry {
  fields: {
    title: string;
    description: string;
    industry: string;
    benefits: string[];
    metrics?: {
      label: string;
      value: string;
    }[];
  };
}

// Service content type
export interface ServiceEntry extends ContentfulEntry {
  fields: {
    name: string;
    slug: string;
    description: Document;
    category: 'product-engineering' | 'cloud-engineering' | 'data-engineering' | 'intelligent-automation';
    technologies: string[];
    deliveryMethodology: string[];
    integrationPoints: string[];
    caseStudies?: CaseStudyEntry[];
  };
}

// Industry content type
export interface IndustryEntry extends ContentfulEntry {
  fields: {
    name: string;
    slug: string;
    description: Document;
    challenges: string[];
    solutions: string[];
    complianceRequirements?: string[];
    successMetrics: {
      label: string;
      value: string;
      description?: string;
    }[];
    caseStudies?: CaseStudyEntry[];
  };
}

// Case study content type
export interface CaseStudyEntry extends ContentfulEntry {
  fields: {
    title: string;
    slug: string;
    client: string;
    industry: string;
    challenge: Document;
    solution: Document;
    results: {
      metric: string;
      improvement: string;
      description?: string;
    }[];
    technologies: string[];
    testimonial?: {
      quote: string;
      author: string;
      title: string;
      company: string;
    };
  };
}

// Blog post content type
export interface BlogPostEntry extends ContentfulEntry {
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    content: Document;
    author: {
      fields: {
        name: string;
        title: string;
        bio?: string;
        avatar?: {
          fields: {
            file: {
              url: string;
            };
            title: string;
          };
        };
      };
    };
    publishedAt: string;
    tags: string[];
    featuredImage?: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
    readingTime?: number;
  };
}

// Resource content type
export interface ResourceEntry extends ContentfulEntry {
  fields: {
    title: string;
    slug: string;
    type: 'whitepaper' | 'case-study' | 'webinar' | 'documentation';
    description: Document;
    downloadUrl?: string;
    gatedContent: boolean;
    industry?: string;
    tags: string[];
    publishedAt: string;
    thumbnail?: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
  };
}