import { NextRequest, NextResponse } from 'next/server';
import { searchContent } from '@/lib/cms-api';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    const contentTypes = searchParams.get('types')?.split(',') || ['page', 'product', 'service', 'blogPost'];
    const preview = searchParams.get('preview') === 'true';
    
    if (!query || query.trim().length < 2) {
      return NextResponse.json(
        { error: 'Query must be at least 2 characters long' },
        { status: 400 }
      );
    }
    
    const results = await searchContent(query.trim(), contentTypes, preview);
    
    return NextResponse.json({
      query: query.trim(),
      results,
      total: results.length,
    });
  } catch (error) {
    console.error('Error searching content:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}