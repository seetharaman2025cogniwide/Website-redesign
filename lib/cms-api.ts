import { client, previewClient, isContentfulConfigured } from './contentful';
import {
  PageEntry,
  ProductEntry,
  ServiceEntry,
  IndustryEntry,
  BlogPostEntry,
  ResourceEntry,
  CaseStudyEntry,
} from '@/types/contentful';

// Generic function to get entries with preview support
async function getEntries<T>(
  contentType: string,
  preview: boolean = false,
  query: any = {}
) {
  if (!isContentfulConfigured) {
    console.warn('Contentful is not configured. Returning empty array.');
    return [];
  }

  const contentfulClient = preview ? previewClient : client;
  
  if (!contentfulClient) {
    console.warn('Contentful client is not available. Returning empty array.');
    return [];
  }
  
  try {
    const response = await contentfulClient.getEntries({
      content_type: contentType,
      ...query,
    });
    
    return response.items as T[];
  } catch (error) {
    console.error(`Error fetching ${contentType}:`, error);
    return [];
  }
}

// Generic function to get a single entry by slug
async function getEntryBySlug<T>(
  contentType: string,
  slug: string,
  preview: boolean = false
) {
  if (!isContentfulConfigured) {
    console.warn('Contentful is not configured. Returning null.');
    return null;
  }

  const contentfulClient = preview ? previewClient : client;
  
  if (!contentfulClient) {
    console.warn('Contentful client is not available. Returning null.');
    return null;
  }
  
  try {
    const response = await contentfulClient.getEntries({
      content_type: contentType,
      'fields.slug': slug,
      limit: 1,
    });
    
    return response.items[0] as T || null;
  } catch (error) {
    console.error(`Error fetching ${contentType} by slug ${slug}:`, error);
    return null;
  }
}

// Page API functions
export async function getPages(preview: boolean = false): Promise<PageEntry[]> {
  return getEntries<PageEntry>('page', preview);
}

export async function getPageBySlug(
  slug: string,
  preview: boolean = false
): Promise<PageEntry | null> {
  return getEntryBySlug<PageEntry>('page', slug, preview);
}

// Product API functions
export async function getProducts(preview: boolean = false): Promise<ProductEntry[]> {
  return getEntries<ProductEntry>('product', preview, {
    order: 'fields.name',
  });
}

export async function getProductBySlug(
  slug: string,
  preview: boolean = false
): Promise<ProductEntry | null> {
  return getEntryBySlug<ProductEntry>('product', slug, preview);
}

export async function getProductsByCategory(
  category: string,
  preview: boolean = false
): Promise<ProductEntry[]> {
  return getEntries<ProductEntry>('product', preview, {
    'fields.category': category,
    order: 'fields.name',
  });
}

// Service API functions
export async function getServices(preview: boolean = false): Promise<ServiceEntry[]> {
  return getEntries<ServiceEntry>('service', preview, {
    order: 'fields.name',
  });
}

export async function getServiceBySlug(
  slug: string,
  preview: boolean = false
): Promise<ServiceEntry | null> {
  return getEntryBySlug<ServiceEntry>('service', slug, preview);
}

export async function getServicesByCategory(
  category: string,
  preview: boolean = false
): Promise<ServiceEntry[]> {
  return getEntries<ServiceEntry>('service', preview, {
    'fields.category': category,
    order: 'fields.name',
  });
}

// Industry API functions
export async function getIndustries(preview: boolean = false): Promise<IndustryEntry[]> {
  return getEntries<IndustryEntry>('industry', preview, {
    order: 'fields.name',
  });
}

export async function getIndustryBySlug(
  slug: string,
  preview: boolean = false
): Promise<IndustryEntry | null> {
  return getEntryBySlug<IndustryEntry>('industry', slug, preview);
}

// Blog API functions
export async function getBlogPosts(
  limit: number = 10,
  preview: boolean = false
): Promise<BlogPostEntry[]> {
  return getEntries<BlogPostEntry>('blogPost', preview, {
    order: '-fields.publishedAt',
    limit,
  });
}

export async function getBlogPostBySlug(
  slug: string,
  preview: boolean = false
): Promise<BlogPostEntry | null> {
  return getEntryBySlug<BlogPostEntry>('blogPost', slug, preview);
}

export async function getBlogPostsByTag(
  tag: string,
  preview: boolean = false
): Promise<BlogPostEntry[]> {
  return getEntries<BlogPostEntry>('blogPost', preview, {
    'fields.tags[in]': tag,
    order: '-fields.publishedAt',
  });
}

// Resource API functions
export async function getResources(
  type?: string,
  preview: boolean = false
): Promise<ResourceEntry[]> {
  const query: any = {
    order: '-fields.publishedAt',
  };
  
  if (type) {
    query['fields.type'] = type;
  }
  
  return getEntries<ResourceEntry>('resource', preview, query);
}

export async function getResourceBySlug(
  slug: string,
  preview: boolean = false
): Promise<ResourceEntry | null> {
  return getEntryBySlug<ResourceEntry>('resource', slug, preview);
}

// Case study API functions
export async function getCaseStudies(preview: boolean = false): Promise<CaseStudyEntry[]> {
  return getEntries<CaseStudyEntry>('caseStudy', preview, {
    order: '-sys.createdAt',
  });
}

export async function getCaseStudyBySlug(
  slug: string,
  preview: boolean = false
): Promise<CaseStudyEntry | null> {
  return getEntryBySlug<CaseStudyEntry>('caseStudy', slug, preview);
}

export async function getCaseStudiesByIndustry(
  industry: string,
  preview: boolean = false
): Promise<CaseStudyEntry[]> {
  return getEntries<CaseStudyEntry>('caseStudy', preview, {
    'fields.industry': industry,
    order: '-sys.createdAt',
  });
}

// Search functionality
export async function searchContent(
  query: string,
  contentTypes: string[] = ['page', 'product', 'service', 'blogPost'],
  preview: boolean = false
): Promise<any[]> {
  if (!isContentfulConfigured) {
    console.warn('Contentful is not configured. Returning empty array.');
    return [];
  }

  const contentfulClient = preview ? previewClient : client;
  
  if (!contentfulClient) {
    console.warn('Contentful client is not available. Returning empty array.');
    return [];
  }
  
  try {
    const searchPromises = contentTypes.map(contentType =>
      contentfulClient.getEntries({
        content_type: contentType,
        query,
        limit: 5,
      })
    );
    
    const results = await Promise.all(searchPromises);
    
    // Flatten and combine results
    return results.flatMap(result => result.items);
  } catch (error) {
    console.error('Error searching content:', error);
    return [];
  }
}

// Preview functionality
export async function enablePreview(slug: string, secret: string) {
  // Validate preview secret
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return { error: 'Invalid preview secret' };
  }
  
  // Check if the entry exists
  const entry = await getPageBySlug(slug, true);
  
  if (!entry) {
    return { error: 'Entry not found' };
  }
  
  return { success: true };
}