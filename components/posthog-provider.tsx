'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { ReactNode, useEffect } from 'react'

export function CSPostHogProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Initialize PostHog
    // We use environment variables for the key and host
    // If they are not set, PostHog will gracefully handle it or we can provide defaults
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY || 'phc_placeholder'
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'

    if (typeof window !== 'undefined' && key !== 'phc_placeholder') {
      posthog.init(key, {
        api_host: host,
        person_profiles: 'identified_only',
        capture_pageview: false, // We'll handle pageviews manually or via Next.js router if needed
        autocapture: true, // This is the "magic" that tracks all clicks automatically
      })
    }
  }, [])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
