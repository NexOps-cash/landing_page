'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Grid Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #00E5FF 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(90deg, #00E5FF 1px, transparent 1px)', backgroundSize: '64px 64px' }}></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Trust Badge - BCH-1 Hackcelerator */}
        <div className={`flex justify-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/40 bg-secondary/10 shadow-[0_0_20px_rgba(10,193,142,0.2)]">
            <span className="text-sm font-mono text-secondary animate-pulse">✓</span>
            <span className="text-xs font-mono text-foreground tracking-widest uppercase">BCH-1 Hackcelerator winner</span>
          </div>
        </div>

        {/* Main Headline - Compact */}
        <div className={`text-center mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-4 drop-shadow-2xl">
            Intent-to-Contract Protocol
          </h1>
          <p className="text-lg font-mono text-primary tracking-[0.2em] font-bold uppercase drop-shadow-[0_0_10px_rgba(0,229,255,0.4)]">
            Deterministic CashScript for Bitcoin Cash
          </p>
        </div>

        {/* Description - One liner */}
        <p className={`text-center text-white/90 mb-8 max-w-2xl mx-auto text-sm transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          NexOps converts developer intent into audited, deterministic smart contracts through automated security verification and protocol-level compliance.
        </p>

        {/* CTA Buttons - Inline */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link
            href="https://github.com/nexopsbch/nexops"
            target="_blank"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-all duration-200 shadow-[0_0_25px_rgba(0,229,255,0.4)] border border-primary/50 uppercase tracking-wider"
          >
            Explore GitHub
          </Link>
          <Link
            href="https://docs.hexecutioners.club"
            target="_blank"
            className="px-8 py-3 rounded-lg border border-primary/20 text-foreground/80 text-sm font-medium hover:border-primary/60 hover:text-foreground hover:bg-primary/5 transition-all duration-200 backdrop-blur-sm"
          >
            Read Documentation
          </Link>
        </div>
      </div>
    </div>
  )
}
