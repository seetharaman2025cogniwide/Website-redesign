# Contentful CMS Setup Guide

This document outlines how to set up and configure Contentful CMS for the Cogniwide website.

## Prerequisites

1. Contentful account (free tier available)
2. Node.js and npm installed
3. Environment variables configured

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your Contentful credentials:

```bash
CONTENTFUL_SPACE_ID=your_contentful_space_id
CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
CONTENTFUL_PREVIEW_TOKEN=your_contentful_preview_token
CONTENTFUL_PREVIEW_SECRET=your_preview_secret_key
CONTENTFUL_ENVIRONMENT=master
```

## Content Types

The following content types need to be created in your Contentful space:

### 1. Page
- **ID**: `page`
- **Fields**:
  - `title` (Short text, required)
  - `slug` (Short text, required, unique)
  - `metaTitle` (Short text, optional)
  - `metaDescription` (Long text, optional)
  - `seoKeywords` (Short text, list, optional)
  - `content` (Reference, many, accepts: heroSection, textBlock, imageBlock)
  - `featuredImage` (Media, optional)
  - `publishedAt` (Date & time, optional)

### 2. Product
- **ID**: `product`
- **Fields**:
  - `name` (Short text, required)
  - `slug` (Short text, required, unique)
  - `tagline` (Short text, required)
  - `description` (Rich text, required)
  - `keyFeatures` (Short text, list, required)
  - `useCases` (Reference, many, accepts: useCase)
  - `heroImage` (Media, optional)
  - `demoType` (Short text, required, validation: chatbot, workflow, document, calculator)
  - `category` (Short text, required, validation: conversational-ai, agentic-ai, document-processing)

### 3. Service
- **ID**: `service`
- **Fields**:
  - `name` (Short text, required)
  - `slug` (Short text, required, unique)
  - `description` (Rich text, required)
  - `category` (Short text, required, validation: product-engineering, cloud-engineering, data-engineering, intelligent-automation, cybersecurity)
  - `technologies` (Short text, list, required)
  - `deliveryMethodology` (Short text, list, required)
  - `integrationPoints` (Short text, list, optional)
  - `caseStudies` (Reference, many, accepts: caseStudy)

### 4. Industry
- **ID**: `industry`
- **Fields**:
  - `name` (Short text, required)
  - `slug` (Short text, required, unique)
  - `description` (Rich text, required)
  - `challenges` (Short text, list, required)
  - `solutions` (Short text, list, required)
  - `complianceRequirements` (Short text, list, optional)
  - `successMetrics` (JSON object, required)
  - `caseStudies` (Reference, many, accepts: caseStudy)

### 5. Blog Post
- **ID**: `blogPost`
- **Fields**:
  - `title` (Short text, required)
  - `slug` (Short text, required, unique)
  - `excerpt` (Long text, required)
  - `content` (Rich text, required)
  - `author` (Reference, one, accepts: author)
  - `publishedAt` (Date & time, required)
  - `tags` (Short text, list, optional)
  - `featuredImage` (Media, optional)
  - `readingTime` (Number, optional)

### 6. Use Case
- **ID**: `useCase`
- **Fields**:
  - `title` (Short text, required)
  - `description` (Long text, required)
  - `industry` (Short text, required)
  - `benefits` (Short text, list, required)
  - `metrics` (JSON object, optional)

### 7. Case Study
- **ID**: `caseStudy`
- **Fields**:
  - `title` (Short text, required)
  - `slug` (Short text, required, unique)
  - `client` (Short text, required)
  - `industry` (Short text, required)
  - `challenge` (Rich text, required)
  - `solution` (Rich text, required)
  - `results` (JSON object, required)
  - `technologies` (Short text, list, required)
  - `testimonial` (JSON object, optional)

### 8. Hero Section
- **ID**: `heroSection`
- **Fields**:
  - `headline` (Short text, required)
  - `subheadline` (Long text, optional)
  - `primaryCta` (JSON object, required)
  - `secondaryCta` (JSON object, optional)
  - `backgroundImage` (Media, optional)
  - `showTrustIndicators` (Boolean, optional)

### 9. Author
- **ID**: `author`
- **Fields**:
  - `name` (Short text, required)
  - `title` (Short text, required)
  - `bio` (Long text, optional)
  - `avatar` (Media, optional)

## Content Model Relationships

```
Page
├── content[] → heroSection, textBlock, imageBlock

Product
├── useCases[] → useCase
└── category → predefined values

Service
├── caseStudies[] → caseStudy
└── category → predefined values

Industry
└── caseStudies[] → caseStudy

BlogPost
└── author → author

CaseStudy
├── industry → matches Industry.name
└── technologies[] → matches Service.technologies
```

## API Usage

### Fetching Content

```typescript
import { getPageBySlug, getProducts, getBlogPosts } from '@/lib/cms-api';

// Get a page by slug
const page = await getPageBySlug('about-us');

// Get all products
const products = await getProducts();

// Get recent blog posts
const posts = await getBlogPosts(5);
```

### Preview Mode

Preview mode allows content editors to see draft content before publishing:

1. **Enable Preview**: Visit `/api/preview?secret=YOUR_SECRET&slug=PAGE_SLUG`
2. **Disable Preview**: Visit `/api/preview` (POST request)

### Search

```typescript
import { searchContent } from '@/lib/cms-api';

// Search across all content types
const results = await searchContent('AI automation');

// Search specific content types
const results = await searchContent('enterprise', ['product', 'service']);
```

## Content Creation Workflow

1. **Create Content Types**: Set up all content types in Contentful
2. **Add Sample Content**: Create initial pages, products, and services
3. **Configure Webhooks**: Set up webhooks for automatic revalidation (optional)
4. **Test Preview Mode**: Verify preview functionality works
5. **Publish Content**: Make content live

## Best Practices

### Content Structure
- Use consistent slug naming (kebab-case)
- Always fill in SEO fields (metaTitle, metaDescription)
- Optimize images before uploading
- Use rich text for formatted content

### Performance
- Enable CDN for media assets
- Use appropriate image formats (WebP when possible)
- Implement proper caching strategies
- Monitor API usage and optimize queries

### SEO
- Fill in all meta fields
- Use descriptive alt text for images
- Structure content with proper headings
- Include relevant keywords naturally

## Troubleshooting

### Common Issues

1. **Content Not Appearing**
   - Check if content is published (not draft)
   - Verify environment variables
   - Check API rate limits

2. **Preview Mode Not Working**
   - Verify preview secret matches
   - Check preview token permissions
   - Ensure cookies are enabled

3. **Images Not Loading**
   - Check media asset URLs
   - Verify CDN configuration
   - Check image processing settings

### Debug Mode

Enable debug logging by setting:
```bash
DEBUG=contentful:*
```

## Migration

When updating content types:

1. **Backup Content**: Export existing content
2. **Update Types**: Modify content type definitions
3. **Migrate Data**: Update existing entries if needed
4. **Test Changes**: Verify everything works
5. **Deploy**: Update production environment

## Security

- Keep API tokens secure and rotate regularly
- Use preview tokens only for preview functionality
- Implement proper CORS settings
- Monitor API usage for unusual activity