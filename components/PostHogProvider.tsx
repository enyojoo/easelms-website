'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from '@posthog/react'
import { useEffect, useState } from 'react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
      const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST

      if (posthogKey && posthogHost) {
        // Initialize PostHog - init() is safe to call multiple times
        posthog.init(posthogKey, {
          api_host: posthogHost,
          loaded: (posthog) => {
            if (process.env.NODE_ENV === 'development') posthog.debug()
          },
        })
      }
      // Mark as initialized after init() is called (init is synchronous)
      setIsInitialized(true)
    } else {
      // Server-side, mark as initialized
      setIsInitialized(true)
    }
  }, [])

  // Only render provider after PostHog is initialized
  // This ensures the provider receives an initialized PostHog instance
  if (!isInitialized) {
    return <>{children}</>
  }

  return <PHProvider client={posthog}>{children}</PHProvider>
}
