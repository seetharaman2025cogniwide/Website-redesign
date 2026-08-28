import { getPages, getProducts, getServices, getIndustries, getBlogPosts, getCaseStudies } from './cms-api';

export interface SitemapEntry {
  url: string;
  lastModified: Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

/**
 * Generate sitemap entries for all content
 */
export async function generateSitemap(baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL || 'https://cogniwide.com'): Promise<SitemapEntry[]> {
  const entries: SitemapEntry[] = [];

  try {
    // Static pages
    const staticPages = [
      { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
      { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
      { url: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
      { url: '/products', priority: 0.9, changeFrequency: 'weekly' as const },
      // { url: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
      // { url: '/industries', priority: 0.8, changeFrequency: 'monthly' as const },
      // { url: '/resources', priority: 0.7, changeFrequency: 'weekly' as const },
      { url: '/blog', priority: 0.8, changeFrequency: 'daily' as const },
    ];

    staticPages.forEach(page => {
      entries.push({
        url: `${baseUrl}${page.url}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    });

    // Dynamic pages from CMS
    const [pages, products, services, industries, blogPosts, caseStudies] = await Promise.all([
      getPages(),
      getProducts(),
      getServices(),
      getIndustries(),
      getBlogPosts(100), // Get more blog posts for sitemap
      getCaseStudies(),
    ]);

    // CMS Pages
    pages.forEach(page => {
      entries.push({
        url: `${baseUrl}/${page.fields.slug}`,
        lastModified: new Date(page.sys.updatedAt),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });

    // Products
    products.forEach(product => {
      entries.push({
        url: `${baseUrl}/products/${product.fields.slug}`,
        lastModified: new Date(product.sys.updatedAt),
        changeFrequency: 'weekly',
        priority: 0.9,
      });
    });

    // Services
    services.forEach(service => {
      entries.push({
        url: `${baseUrl}/services/${service.fields.slug}`,
        lastModified: new Date(service.sys.updatedAt),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });

    // Industries
    industries.forEach(industry => {
      entries.push({
        url: `${baseUrl}/industries/${industry.fields.slug}`,
        lastModified: new Date(industry.sys.updatedAt),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });

    // Blog Posts
    blogPosts.forEach(post => {
      entries.push({
        url: `${baseUrl}/blog/${post.fields.slug}`,
        lastModified: new Date(post.sys.updatedAt),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });

    // Case Studies
    caseStudies.forEach(caseStudy => {
      entries.push({
        url: `${baseUrl}/case-studies/${caseStudy.fields.slug}`,
        lastModified: new Date(caseStudy.sys.updatedAt),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });

  } catch (error) {
    console.error('Error generating sitemap:', error);
  }

  return entries.sort((a, b) => b.priority - a.priority);
}

/**
 * Generate XML sitemap string
 */
export function generateSitemapXML(entries: SitemapEntry[]): string {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified.toISOString()}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
}

/**
 * Generate robots.txt content
 */
export function generateRobotsTxt(baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL || 'https://cogniwide.com'): string {
  return `User-agent: *
Allow: /

# Disallow admin and preview pages
Disallow: /admin/
Disallow: /api/
Disallow: /preview/

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay (optional)
Crawl-delay: 1`;
}

/**
 * Generate RSS feed for blog posts
 */
export async function generateRSSFeed(baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL || 'https://cogniwide.com'): Promise<string> {
  try {
    const blogPosts = await getBlogPosts(20);

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Cogniwide Blog</title>
    <description>Insights on enterprise AI, agentic automation, and digital transformation</description>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>blog@cogniwide.com (Cogniwide Team)</managingEditor>
    <webMaster>tech@cogniwide.com (Cogniwide Tech Team)</webMaster>
    
${blogPosts.map(post => `    <item>
      <title><![CDATA[${post.fields.title}]]></title>
      <description><![CDATA[${post.fields.excerpt}]]></description>
      <link>${baseUrl}/blog/${post.fields.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.fields.slug}</guid>
      <pubDate>${new Date(post.fields.publishedAt).toUTCString()}</pubDate>
      <author>blog@cogniwide.com (${post.fields.author.fields.name})</author>
      ${post.fields.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('\n      ')}
    </item>`).join('\n')}
  </channel>
</rss>`;

    return rss;
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return '';
  }
}