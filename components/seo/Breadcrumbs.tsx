'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BreadcrumbStructuredData } from './StructuredData';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const pathname = usePathname();

  // Generate breadcrumbs from pathname if items not provided
  const breadcrumbItems = items || generateBreadcrumbsFromPath(pathname);

  if (breadcrumbItems.length <= 1) {
    return null;
  }

  return (
    <>
      <BreadcrumbStructuredData
        items={breadcrumbItems.map(item => ({
          name: item.name,
          url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://cogniwide.com'}${item.href}`,
        }))}
      />

      <nav className={`flex ${className}`} aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="inline-flex items-center">
              {index > 0 && (
                <svg
                  className="w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              )}

              {index === breadcrumbItems.length - 1 ? (
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  {index === 0 && (
                    <svg
                      className="w-3 h-3 mr-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L9 5.414V17a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5.414l6.293 6.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                  )}
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

function generateBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', href: '/' }
  ];

  let currentPath = '';

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;

    // Convert segment to readable name
    const name = formatSegmentName(segment);

    breadcrumbs.push({
      name,
      href: currentPath,
    });
  });

  return breadcrumbs;
}

function formatSegmentName(segment: string): string {
  // Handle special cases
  const specialCases: Record<string, string> = {
    'CogniAssist': 'CogniAssist',
    'cogniloom': 'CogniLoom',
    'cogniaura': 'CogniAura',
    'cogninova': 'CogniNova',
    'cogniforge': 'CogniForge',
    'ai': 'AI',
    'api': 'API',
    'seo': 'SEO',
  };

  if (specialCases[segment.toLowerCase()]) {
    return specialCases[segment.toLowerCase()];
  }

  // Convert kebab-case to Title Case
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Custom breadcrumbs for specific pages
export function ProductBreadcrumbs({ productName }: { productName: string }) {
  const items = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: productName, href: '#' },
  ];

  return <Breadcrumbs items={items} />;
}

export function IndustryBreadcrumbs({ industryName }: { industryName: string }) {
  const items = [
    { name: 'Home', href: '/' },
    { name: 'Industries', href: '/industries' },
    { name: industryName, href: '#' },
  ];

  return <Breadcrumbs items={items} />;
}

export function ServiceBreadcrumbs({ serviceName }: { serviceName: string }) {
  const items = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: serviceName, href: '#' },
  ];

  return <Breadcrumbs items={items} />;
}

export function BlogBreadcrumbs({ postTitle }: { postTitle: string }) {
  const items = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: postTitle, href: '#' },
  ];

  return <Breadcrumbs items={items} />;
}