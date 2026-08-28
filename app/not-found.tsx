import Link from 'next/link'
import PageLayout from '@/components/layout/PageLayout'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <PageLayout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-gray-50">
        <h1 className="text-9xl font-bold text-brand-blue mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 max-w-lg mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/" className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-brand-blue text-white hover:bg-brand-blue-dark focus:ring-brand-blue shadow-md hover:shadow-lg px-6 py-3 text-lg">
          Return Home
        </Link>
      </div>
    </PageLayout>
  )
}
