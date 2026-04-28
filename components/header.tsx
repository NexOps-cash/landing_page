'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePostHog } from 'posthog-js/react'

export default function Header() {
  const posthog = usePostHog()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass border-b border-primary/20 shadow-lg shadow-primary/5' : 'py-5 bg-transparent border-b border-transparent'
      }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          onClick={() => posthog.capture('click_home_logo')}
          className="flex items-center gap-2 group"
        >
          <div className="relative w-9 h-9 overflow-hidden rounded-xl border border-primary/20 group-hover:border-primary/60 transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.1)]">
            <Image
              src="/logo.jpeg"
              alt="NexOps Logo"
              fill
              className="object-cover brightness-110 contrast-[1.02] group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <span className="text-lg font-bold tracking-tight text-white group-hover:text-primary transition-colors">NexOps</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="https://docs.nexops.cash/docs/intent-spec" 
            target="_blank" 
            onClick={() => posthog.capture('click_protocol_header')}
            className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors"
          >
            Protocol
          </Link>
          <Link 
            href="https://docs.nexops.cash/docs/security-model" 
            target="_blank" 
            onClick={() => posthog.capture('click_security_header')}
            className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors"
          >
            Security
          </Link>
          <Link 
            href="https://github.com/NexOps-cash/NexKB" 
            target="_blank" 
            onClick={() => posthog.capture('click_kb_header')}
            className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors"
          >
            Knowledge Base
          </Link>
          <Link 
            href="https://docs.nexops.cash" 
            target="_blank" 
            onClick={() => posthog.capture('click_docs_header')}
            className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors"
          >
            Documentation
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/NexOps-cash"
            target="_blank"
            onClick={() => posthog.capture('click_github_header')}
            className="hidden sm:inline-flex px-4 py-1.5 rounded-lg border border-primary/30 text-foreground text-sm font-medium hover:border-primary/60 hover:bg-primary/5 transition-all duration-200"
          >
            GitHub
          </Link>
          <Link
            href="https://app.nexops.cash"
            target="_blank"
            onClick={() => posthog.capture('launch_app_header')}
            className="px-4 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-200 shadow-[0_0_15px_rgba(0,229,255,0.3)]"
          >
            Launch App
          </Link>
        </div>
      </div>
    </header>
  )
}
