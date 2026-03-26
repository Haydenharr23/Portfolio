'use client'

import { useAccent } from '@/components/AccentProvider'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const accent = useAccent()
  const tryAgainClass =
    accent === 'purple' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-emerald-600 hover:bg-emerald-700'

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-100 p-8 text-center">
      <h2 className="font-exo text-2xl font-bold text-gray-800">Something went wrong</h2>
      <p className="max-w-md text-sm text-gray-600">
        The page hit a runtime error. Check the browser console (F12) for details, or try again after
        restarting the dev server.
      </p>
      {process.env.NODE_ENV === 'development' && (
        <pre className="max-h-40 max-w-lg overflow-auto rounded bg-white p-4 text-left text-xs text-red-700 shadow">
          {error.message}
        </pre>
      )}
      <button
        type="button"
        onClick={() => reset()}
        className={`rounded-lg px-6 py-2 text-sm font-medium text-white ${tryAgainClass}`}
      >
        Try again
      </button>
    </div>
  )
}
