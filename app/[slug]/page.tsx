import { cache } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPageBySlug, getPages } from '@/lib/cms-api';
import { generatePageMetadata } from '@/lib/seo';
import { DynamicPage } from '@/components/cms/DynamicPage';
import PageLayout from '@/components/layout/PageLayout';

interface PageProps {
  params: { slug: string };
  searchParams: { preview?: string };
}

// Browsers and crawlers probe for static assets (favicon.ico, apple-touch-icon.png,
// robots.txt, ...). When those files are absent they fall through to this catch-all,
// so reject anything that looks like a file before touching the CMS.
function isCmsSlug(slug: string) {
  return !slug.includes('.');
}

// generateMetadata and the page component both need the entry; cache() collapses
// them into a single fetch per request.
const getPage = cache((slug: string, preview: boolean) =>
  getPageBySlug(slug, preview)
);

// Generate metadata for the page
export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  if (!isCmsSlug(params.slug)) {
    return generatePageMetadata(null);
  }

  const preview = searchParams.preview === 'true';
  const page = await getPage(params.slug, preview);

  return generatePageMetadata(page);
}

export default async function Page({ params, searchParams }: PageProps) {
  if (!isCmsSlug(params.slug)) {
    notFound();
  }

  const preview = searchParams.preview === 'true';
  const page = await getPage(params.slug, preview);

  if (!page) {
    notFound();
  }

  return (
    <PageLayout showNavigation={true} showFooter={true} showChatbot={true}>
      <DynamicPage page={page} preview={preview} />
    </PageLayout>
  );
}

// Generate static params for static generation (optional)
export async function generateStaticParams() {
  try {
    // Only CMS-backed pages belong here. Hardcoding slugs while Contentful is
    // unconfigured prerenders pages that immediately notFound() — and slugs like
    // `about`/`contact` already have their own static routes, which take priority.
    const pages = await getPages();

    return pages
      .map((page) => ({ slug: page.fields?.slug }))
      .filter((param): param is { slug: string } => Boolean(param.slug));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}