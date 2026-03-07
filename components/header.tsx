'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 glass border-b border-primary/20 shadow-lg shadow-primary/5' : 'py-5 bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/40 flex items-center justify-center group-hover:border-primary/80 transition-colors">
            <span className="text-primary font-bold text-xl">N</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">NexOps</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#protocol" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">Protocol</Link>
          <Link href="#security" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">Security</Link>
          <Link href="https://docs.hexecutioners.club" target="_blank" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">Documentation</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/nexopsbch/nexops"
            target="_blank"
            className="hidden sm:inline-flex px-4 py-1.5 rounded-lg border border-primary/30 text-foreground text-sm font-medium hover:border-primary/60 hover:bg-primary/5 transition-all duration-200"
          >
            GitHub
          </Link>
          <button className="px-4 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-200 shadow-[0_0_15px_rgba(0,229,255,0.3)]">
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
