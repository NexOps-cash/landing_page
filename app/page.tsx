'use client'

import Hero from '@/components/hero'
import Architecture from '@/components/architecture'
import CodeExamples from '@/components/code-examples'
import Features from '@/components/features'
import Security from '@/components/security'
import ProtocolTrace from '@/components/protocol-trace'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Architecture />
      <CodeExamples />
      <Features />
      <Security />
      <ProtocolTrace />
      <Footer />
    </main>
  )
}
