import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { BlogHero } from '@/components/blog/BlogHero';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Technology Blog - Cogniwide | Latest Tech Insights',
  description: 'Explore our latest blog posts on AI, technology, and innovation at Cogniwide.',
};

export default function BlogPage() {
  return (
    <PageLayout className="bg-[#0B0A14]">
      <div className="bg-[#0B0A14] text-white min-h-screen">
        <BlogHero />
        <BlogGrid />
        <CTASection theme="dark" />
      </div>
    </PageLayout>
  );
}