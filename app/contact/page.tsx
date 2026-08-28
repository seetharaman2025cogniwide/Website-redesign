'use client'

import { useState, useEffect, useRef } from 'react'
import PageLayout from '@/components/layout/PageLayout'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function ContactPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (!scrollContainerRef.current) return
    const scrollLeft = scrollContainerRef.current.scrollLeft
    const width = scrollContainerRef.current.offsetWidth
    setCurrentSlide(Math.round(scrollLeft / width))
  }

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return
    const width = scrollContainerRef.current.offsetWidth
    scrollContainerRef.current.scrollTo({
      left: width * index,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    setMounted(true)
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Prevent hydration mismatch by not rendering interactive elements until mounted
  if (!mounted) {
    return (
      <PageLayout>
        <ContactHero />
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
          <ContactForm />
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <ContactHero />

      {/* FIXED: Parent controls height fully */}
      <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 to-white">

        {/* Horizontal Slides */}
        <div
          ref={scrollContainerRef}
          className="absolute inset-0 overflow-x-auto overflow-y-hidden snap-x snap-mandatory 
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <div className="flex h-full">
            
            {/* Slide 1 — NO GAP */}
            <div className="min-w-full h-screen snap-start flex flex-col overflow-hidden">
              <div className="flex-1 overflow-y-auto">
                <ContactForm />
              </div>
            </div>

            {/* Slide 2 — NO GAP */}
            <div className="min-w-full h-screen snap-start flex flex-col overflow-hidden">
              <div className="flex-1 overflow-y-auto">
                <ContactInfo />
              </div>
            </div>

          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-60 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`transition-all duration-300 ${
                currentSlide === index
                  ? 'w-6 h-1 bg-blue-600 rounded-full'
                  : 'w-1.5 h-1.5 bg-gray-300 rounded-full'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Floating Arrow Right */}
        {currentSlide === 0 && (
          <button
            onClick={() => scrollToSlide(1)}
            className="absolute right-5 top-1/2 -translate-y-1/2 z-50 bg-blue-600 hover:bg-blue-700 
            text-white p-5 rounded-full shadow-2xl transition-all animate-pulse hover:animate-none"
            aria-label="Next section"
          >
            <ChevronRightIcon className="w-8 h-8" />
          </button>
        )}

        {/* Floating Arrow Left */}
        {currentSlide === 1 && (
          <button
            onClick={() => scrollToSlide(0)}
            className="absolute left-5 top-1/2 -translate-y-1/2 z-50 bg-blue-600 hover:bg-blue-700 
            text-white p-5 rounded-full shadow-2xl transition-all"
            aria-label="Previous section"
          >
            <ChevronLeftIcon className="w-8 h-8" />
          </button>
        )}
      </div>
    </PageLayout>
  )
}
