'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Something went critically wrong!</h2>
          <p className="text-gray-600 mb-8 max-w-md">
            A critical error occurred. We have been notified and are working on it.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-blue-dark transition-colors"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
