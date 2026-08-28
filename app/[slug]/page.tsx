import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPageBySlug } from '@/lib/cms-api';
import { generatePageMetadata } from '@/lib/seo';
import { DynamicPage } from '@/components/cms/DynamicPage';
import PageLayout from '@/components/layout/PageLayout';

interface PageProps {
  params: { slug: string };
  searchParams: { preview?: string };
}

// Generate metadata for the page
export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const preview = searchParams.preview === 'true';
  const page = await getPageBySlug(params.slug, preview);
  
  return generatePageMetadata(page);
}

export default async function Page({ params, searchParams }: PageProps) {
  const preview = searchParams.preview === 'true';
  const page = await getPageBySlug(params.slug, preview);

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
    // For now, return common page slugs since Contentful is not configured
    // In a real implementation with Contentful, you'd use getPages() to get all pages
    return [
      { slug: 'about' },
      { slug: 'contact' },
      { slug: 'privacy' },
      { slug: 'terms' },
    ];
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}