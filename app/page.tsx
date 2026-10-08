'use client'

import Hero from '@/components/hero'
import StackComparison from '@/components/stack-comparison'
import AwardBanner from '@/components/award-banner'
import Problem from '@/components/problem'
import RealWorldFailure from '@/components/real-world-failure'
import WhyNexOps from '@/components/why-nexops'
import Solution from '@/components/solution'
import WhyBitcoinCash from '@/components/why-bitcoin-cash'
import WorkbenchPreview from '@/components/workbench-preview'
import FeaturedProducts from '@/components/featured-products'
import Architecture from '@/components/architecture'
import CodeExamples from '@/components/code-examples'
import Features from '@/components/features'
import SecondaryFeatures from '@/components/secondary-features'
import Security from '@/components/security'
import ProtocolTrace from '@/components/protocol-trace'
import EcosystemProof from '@/components/ecosystem-proof'
import EcosystemRecognition from '@/components/ecosystem-recognition'
import Traction from '@/components/traction'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Hero />
      <EcosystemProof />
      <Traction />
      <EcosystemRecognition />
      <WorkbenchPreview />
      <StackComparison />
      <AwardBanner />
      <Problem />
      <RealWorldFailure />
      <WhyNexOps />
      <Solution />
      <WhyBitcoinCash />
      <FeaturedProducts />
      <Architecture />
      <CodeExamples />
      <Features />
      <SecondaryFeatures />
      <Security />
      <ProtocolTrace />
      <Footer />
    </>
  )
}
