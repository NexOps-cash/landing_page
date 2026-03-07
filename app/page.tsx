'use client'

import Hero from '@/components/hero'
import AwardBanner from '@/components/award-banner'
import WorkbenchPreview from '@/components/workbench-preview'
import FeaturedProducts from '@/components/featured-products'
import Architecture from '@/components/architecture'
import CodeExamples from '@/components/code-examples'
import Features from '@/components/features'
import SecondaryFeatures from '@/components/secondary-features'
import Security from '@/components/security'
import ProtocolTrace from '@/components/protocol-trace'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <AwardBanner />
      <WorkbenchPreview />
      <FeaturedProducts />
      <Architecture />
      <CodeExamples />
      <Features />
      <SecondaryFeatures />
      <Security />
      <ProtocolTrace />
      <Footer />
    </main>
  )
}
