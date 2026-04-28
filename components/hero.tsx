'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePostHog } from 'posthog-js/react'

export default function Hero() {
  const posthog = usePostHog()
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
            <span className="text-[10px] font-mono text-secondary font-bold uppercase tracking-tighter">Built for BCH</span>
            <span className="text-xs font-mono text-foreground tracking-widest uppercase">BCH-1 Hackcelerator winner</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className={`text-center mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl leading-[1.1]">
            The developer platform for Bitcoin Cash smart contracts.
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-4 font-medium">
            NexOps combines an AI contract IDE, built-in auditing, deterministic deployment, and a registry of verified templates - all in one system.
          </p>
          <p className="text-sm sm:text-base font-mono text-primary tracking-[0.12em] font-bold uppercase drop-shadow-[0_0_10px_rgba(0,229,255,0.4)] mb-3">
            Generate -&gt; Verify -&gt; Deploy secure contracts without manual workflows.
          </p>
        </div>

        <div className="mb-10" />

        {/* CTA Buttons - Inline */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link
            href="https://app.nexops.cash"
            target="_blank"
            onClick={() => posthog.capture('launch_app_hero')}
            className="px-8 py-4 rounded-xl bg-white text-black text-sm font-bold hover:bg-white/90 transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.2)] uppercase tracking-widest min-w-[200px] text-center"
          >
            Launch App
          </Link>
          <Link
            href="https://docs.nexops.cash"
            target="_blank"
            onClick={() => posthog.capture('read_docs_hero')}
            className="px-8 py-4 rounded-xl border border-white/10 text-white/80 text-sm font-bold hover:border-primary/40 hover:text-white hover:bg-primary/5 transition-all duration-200 backdrop-blur-sm min-w-[200px] text-center"
          >
            Read Docs
          </Link>
        </div>
      </div>
    </div>
  )
}
