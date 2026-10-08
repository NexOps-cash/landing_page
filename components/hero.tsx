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
    <div className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Grid Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #00E5FF 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(90deg, #00E5FF 1px, transparent 1px)', backgroundSize: '64px 64px' }}></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Trust Badge - BCH-1 Hackcelerator */}
        <div className={`flex justify-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/40 bg-secondary/10 shadow-[0_0_20px_rgba(10,193,142,0.2)]">
            <span className="text-xs sm:text-sm font-mono text-secondary font-bold uppercase tracking-[0.12em]">Built for BCH</span>
            <span className="text-xs sm:text-sm font-mono text-foreground font-semibold tracking-[0.18em] uppercase">
              BCH-1 Hackcelerator winner
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className={`text-center mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl leading-[1.1]">
            AI builds the contract.
            Verification comes next.
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-4 font-medium">
            Generate, audit, and deploy Bitcoin Cash smart contracts in one platform. Built around compile checks, security analysis, and targeted repair.
          </p>
          <p className="text-sm sm:text-base font-mono text-primary tracking-[0.12em] font-bold uppercase drop-shadow-[0_0_10px_rgba(0,229,255,0.4)] mb-3">
            Used by 3 external teams and 20+ developers.
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
            href="#ecosystem-proof"
            onClick={() => posthog.capture('view_team_proof_hero')}
            className="px-8 py-4 rounded-xl border border-white/10 text-white/80 text-sm font-bold hover:border-primary/40 hover:text-white hover:bg-primary/5 transition-all duration-200 backdrop-blur-sm min-w-[200px] text-center"
          >
            See the team proof
          </Link>
        </div>
        <p className="mt-6 text-center text-sm text-white/60">Built by <a href="https://nishanth.vip" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4 hover:text-primary">Nishanth B</a></p>
      </div>
    </div>
  )
}
