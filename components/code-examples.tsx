'use client'

import { useEffect, useRef, useState } from 'react'

export default function CodeExamples() {
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

  const codeBlocks = [
    {
      title: 'Developer Intent',
      language: 'javascript',
      code: `// Define contract intent
intent {
  name: "Escrow",
  network: "BCH",
  parameters: {
    amount: uint256,
    timeout: block_height
  },
  rules: [
    "2-of-2 multisig",
    "timeout release",
    "no double spend"
  ]
}`
    },
    {
      title: 'Generated NexIR',
      language: 'assembly',
      code: `// Intermediate Representation
@nexir_v1
contract Escrow {
  sig_verify(pk1, pk2)
  amount_check(balance)
  timeout_validate()
  
  @verify "no_reentrancy"
  @verify "deterministic_output"
  
  state = VERIFIED
  deploy()
}`
    },
    {
      title: 'TollGate Output',
      language: 'text',
      code: `Status: VERIFIED ✓

Security Checks:
├─ Logic flaws: PASS
├─ Signature verification: PASS
├─ Timeout logic: PASS
├─ Balance verification: PASS
└─ Determinism: PASS

Hash: 0x7a4c9b...
Ready for deployment`
    }
  ]

  return (
    <section ref={containerRef} className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-foreground">Intent-to-Deployment Flow</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {codeBlocks.map((block, i) => (
            <div
              key={i}
              className={`glass rounded-lg border border-primary/30 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Header */}
              <div className="px-4 py-3 border-b border-primary/20 bg-primary/5">
                <p className="text-xs font-mono text-primary font-semibold">{block.title}</p>
              </div>

              {/* Code block */}
              <div className="p-4 font-mono text-xs overflow-x-auto max-h-64 overflow-y-auto bg-black/40">
                <pre className="text-white/90 whitespace-pre-wrap break-words">
                  {block.code}
                </pre>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className={`mt-8 px-4 py-3 rounded-lg border border-primary/20 bg-primary/5 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'
          }`} style={{ transitionDelay: '450ms' }}>
          <p className="text-xs text-foreground/70 font-mono">
            <span className="text-secondary">→</span> Each intent is compiled to deterministic bytecode, verified by TollGate, and deployed to BCH network
          </p>
        </div>
      </div>
    </section>
  )
}
