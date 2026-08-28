'use client';

import { useState, useEffect, useRef } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import { CTASection } from '@/components/home/CTASection';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    const width = scrollContainerRef.current.offsetWidth;
    setCurrentSlide(Math.round(scrollLeft / width));
  };

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const width = scrollContainerRef.current.offsetWidth;
    scrollContainerRef.current.scrollTo({
      left: width * index,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    setMounted(true);
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  if (!mounted) {
    return (
      <PageLayout className="bg-[#0B0A14]">
        <div className="bg-[#0B0A14] text-white min-h-screen">
          <ContactHero />
          <div className="min-h-screen bg-[#0B0A14]">
            <ContactForm />
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout className="bg-[#0B0A14]">
      <div className="bg-[#0B0A14] text-white min-h-screen">
        <ContactHero />

        {/* Horizontal Form/Info Section */}
        <div className="relative min-h-[750px] w-full overflow-hidden bg-[#0B0A14] border-t border-[#29263A]">
          {/* Ambient Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#7C3AED]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

          {/* Horizontal Slides */}
          <div
            ref={scrollContainerRef}
            className="w-full overflow-x-auto snap-x snap-mandatory 
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            <div className="flex h-full min-h-[720px]">
              {/* Slide 1: Contact Form */}
              <div className="min-w-full snap-start flex flex-col justify-center py-6">
                <ContactForm />
              </div>

              {/* Slide 2: Contact Info */}
              <div className="min-w-full snap-start flex flex-col justify-center py-6">
                <ContactInfo />
              </div>
            </div>
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex justify-center items-center gap-2.5 py-6">
            {[0, 1].map((index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`transition-all duration-300 ${
                  currentSlide === index
                    ? 'w-8 h-2 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] rounded-full shadow-[0_0_10px_#8B5CF6]'
                    : 'w-2 h-2 bg-[#29263A] hover:bg-[#8B5CF6]/50 rounded-full'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Floating Arrow Right */}
          {currentSlide === 0 && (
            <button
              onClick={() => scrollToSlide(1)}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 bg-[#15151D]/90 hover:bg-[#1A1829] 
              text-[#A78BFA] hover:text-white p-4 rounded-full border border-[#29263A] hover:border-[#8B5CF6] shadow-[0_0_25px_rgba(124,58,237,0.3)] transition-all duration-300 group"
              aria-label="Next section"
            >
              <ChevronRightIcon className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          )}

          {/* Floating Arrow Left */}
          {currentSlide === 1 && (
            <button
              onClick={() => scrollToSlide(0)}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 bg-[#15151D]/90 hover:bg-[#1A1829] 
              text-[#A78BFA] hover:text-white p-4 rounded-full border border-[#29263A] hover:border-[#8B5CF6] shadow-[0_0_25px_rgba(124,58,237,0.3)] transition-all duration-300 group"
              aria-label="Previous section"
            >
              <ChevronLeftIcon className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
          )}
        </div>

        {/* Global Dark CTA */}
        <CTASection theme="dark" />
      </div>
    </PageLayout>
  );
}
