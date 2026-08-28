import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { BlogHero } from '@/components/blog/BlogHero';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { CasestudyCTA } from '@/components/casestudy/CasestudyCTA';

export const metadata: Metadata = {
  title: 'Technology Blog - Cogniwide | Latest Tech Insights',
  description: 'Explore our latest blog posts on AI, technology, and innovation at Cogniwide.',
};

export default function NewsPage() {
  return (
    <PageLayout>
      <BlogHero />
      <BlogGrid />
      <CasestudyCTA />
    </PageLayout>
  );
}