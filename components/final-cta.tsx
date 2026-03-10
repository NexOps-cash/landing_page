'use client'

import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import { usePostHog } from 'posthog-js/react'

export default function FinalCTA() {
  const posthog = usePostHog()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative py-10 px-4 sm:px-6 lg:px-8 border-t border-primary/10"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-sm text-foreground/70 mb-4 font-mono">
            Ready to deploy secure smart contracts?
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">
            Start with NexOps Protocol
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="https://github.com/NexOps-cash"
              target="_blank"
              onClick={() => posthog.capture('click_github_final_cta')}
              className="px-6 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-200 border border-primary/50"
            >
              GitHub Repository
            </Link>
            <Link
              href="https://docs.nexops.cash"
              target="_blank"
              onClick={() => posthog.capture('click_docs_final_cta')}
              className="px-6 py-2 rounded-lg border border-primary/30 text-foreground text-sm font-medium hover:border-primary/60 hover:bg-primary/5 transition-all duration-200"
            >
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
