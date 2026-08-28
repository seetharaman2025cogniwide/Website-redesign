import { NextResponse } from 'next/server';
import { generateRSSFeed } from '@/lib/sitemap';

export async function GET() {
  try {
    const rss = await generateRSSFeed();

    return new NextResponse(rss, {
      headers: {
        'Content-Type': 'application/rss+xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return new NextResponse('Error generating RSS feed', { status: 500 });
  }
}