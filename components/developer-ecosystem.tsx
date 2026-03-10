'use client'

import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import { track } from '@vercel/analytics'

export default function DeveloperEcosystem() {
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
    <section ref={containerRef} className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-700 transform ${
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Built for the CashScript Ecosystem</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />

          <p className="text-xl text-foreground/70 mb-12 leading-relaxed font-light">
            NexOps integrates seamlessly with modern BCH developer tooling, providing an abstracted layer that maintains strict protocol compliance while accelerating development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="https://github.com/NexOps-cash"
              target="_blank"
              onClick={() => track('click_github_ecosystem')}
              className="px-6 py-3 rounded-lg glass border border-primary/50 text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-200 font-medium flex items-center justify-center gap-2"
            >
              <span>→</span>
              GitHub
            </Link>
            <Link
              href="https://docs.nexops.cash"
              target="_blank"
              onClick={() => track('click_docs_ecosystem')}
              className="px-6 py-3 rounded-lg glass border border-secondary/50 text-foreground hover:border-secondary hover:bg-secondary/10 transition-all duration-200 font-medium flex items-center justify-center gap-2"
            >
              <span>→</span>
              Docs
            </Link>
          </div>

          {/* Ecosystem features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[
              { title: 'CashScript Native', desc: 'Full compatibility with CashScript ecosystem' },
              { title: 'Open Source', desc: 'Community-driven development and transparency' },
              { title: 'Developer First', desc: 'Built with developer experience in mind' },
            ].map((item, i) => (
              <div
                key={i}
                className={`glass rounded-lg p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20 -translate-y-1/2" />
    </section>
  )
}
