import { Metadata } from 'next';
import LifeContent from '@/components/about/LifeContent';
import PageLayout from '@/components/layout/PageLayout';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'Life at Cogniwide - Our Culture and Team',
  description: 'Explore the vibrant culture, achievements, and work environment at Cogniwide. See what makes our team unique.',
};

// Utility: read images dynamically from public/life-at-cogniwide/<subdir>
const allowedImageExts = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']);

function getImagesFrom(subdir: string): string[] {
  const dir = path.join(process.cwd(), 'public', 'images', 'life-at-cogniwide', subdir);
  try {
    const files = fs.readdirSync(dir);
    return files
      .filter((f) => allowedImageExts.has(path.extname(f).toLowerCase()))
      .sort((a, b) => a.localeCompare(b))
      .map((f) => `/images/life-at-cogniwide/${subdir}/${f}`);
  } catch {
    return [];
  }
}

function withFallback(images: string[]): string[] {
  return images.length > 0 ? images : ['/images/placeholder.svg'];
}

export default function LifeAtCogniwidePage() {
  const hackathonImages = withFallback(getImagesFrom('hackathon'));
  const turfImages = withFallback(getImagesFrom('turf'));
  const pongalImages = withFallback(getImagesFrom('pongal_celebration'));
  const innovationImages = withFallback(getImagesFrom('innovation'));

  return (
    <PageLayout className="bg-[#0B0A14]">
      <div className="bg-[#0B0A14] text-white min-h-screen">
        <LifeContent
          hackathonImages={hackathonImages}
          turfImages={turfImages}
          pongalImages={pongalImages}
          innovationImages={innovationImages}
        />
      </div>
    </PageLayout>
  );
}