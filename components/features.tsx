'use client'

import { useRef, useEffect, useState } from 'react'

const features = [
  {
    title: 'Intent-to-Code',
    badge: 'COMPILATION',
    description: 'High-level intent → optimized CashScript',
  },
  {
    title: 'NexIR',
    badge: 'REPRESENTATION',
    description: 'Cross-compatible bytecode generation',
  },
  {
    title: 'TollGate',
    badge: 'VERIFICATION',
    description: 'Automated security analysis & checks',
  },
  {
    title: 'Deterministic',
    badge: 'REPRODUCIBLE',
    description: 'Cryptographically verified builds',
  },
]

export default function Features() {
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
    <section ref={containerRef} className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-foreground">Key Capabilities</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`glass rounded-lg p-4 border border-primary/20 hover:border-primary/50 transition-all duration-300 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="text-xs font-mono text-primary/60 mb-2 uppercase tracking-wider">{feature.badge}</p>
              <p className="text-sm font-semibold text-foreground mb-1">{feature.title}</p>
              <p className="text-xs text-foreground/60 line-clamp-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
