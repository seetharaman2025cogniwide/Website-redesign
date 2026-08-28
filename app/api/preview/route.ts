import { NextRequest, NextResponse } from 'next/server';
import { enablePreview } from '@/lib/cms-api';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');

  // Check for required parameters
  if (!secret || !slug) {
    return NextResponse.json(
      { message: 'Missing required parameters' },
      { status: 400 }
    );
  }

  // Validate the preview secret and check if the entry exists
  const result = await enablePreview(slug, secret);

  if (result.error) {
    return NextResponse.json(
      { message: result.error },
      { status: 401 }
    );
  }

  // Enable Next.js Preview Mode
  const response = NextResponse.redirect(new URL(`/${slug}`, request.url));
  
  // Set preview cookies
  response.cookies.set('__prerender_bypass', '1', {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
    maxAge: 60 * 60, // 1 hour
  });
  
  response.cookies.set('__next_preview_data', '1', {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
    maxAge: 60 * 60, // 1 hour
  });

  return response;
}

export async function POST(request: NextRequest) {
  // Disable preview mode
  const response = NextResponse.json({ message: 'Preview mode disabled' });
  
  // Clear preview cookies
  response.cookies.delete('__prerender_bypass');
  response.cookies.delete('__next_preview_data');
  
  return response;
}