'use client'

import { useRef, useEffect, useState } from 'react'

const traceLines = [
  { text: '$ nexops compile escrow.intent --network bch', delay: 0, success: false },
  { text: 'NexOps Protocol v1.2.4', delay: 200, success: false },
  { text: '', delay: 300, success: false },
  { text: '[→] Parsing intent specification...', delay: 400, success: false },
  { text: '[✓] Intent validated | name=Escrow | version=1.0', delay: 800, success: true },
  { text: '[→] Generating NexIR intermediate representation...', delay: 1200, success: false },
  { text: '[✓] NexIR generated | ops=47 | size=2.3KB', delay: 1800, success: true },
  { text: '[→] Compiling to CashScript bytecode...', delay: 2200, success: false },
  { text: '[✓] Bytecode compiled | hash=0x7a4c9b2f1e8d3c5a | size=1.8KB', delay: 2800, success: true },
  { text: '[→] Running TollGate security analysis...', delay: 3200, success: false },
  { text: '[✓] Logic flaws: PASS | Signatures: PASS', delay: 3700, success: true },
  { text: '[✓] Balance checks: PASS | Reentrancy: PASS', delay: 4200, success: true },
  { text: '[✓] Determinism verified | Reproducible: YES', delay: 4800, success: true },
  { text: '', delay: 5200, success: false },
  { text: 'Deployment Package:', delay: 5400, success: false },
  { text: '  Contract: Escrow (0x7a4c...5a)', delay: 5600, success: false },
  { text: '  Status: VERIFIED', delay: 5800, success: false },
  { text: '  Ready for BCH network', delay: 6000, success: true },
]

export default function ProtocolTrace() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [displayedLines, setDisplayedLines] = useState<number>(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) {
      setDisplayedLines(0)
      return
    }

    const timers: NodeJS.Timeout[] = []
    traceLines.forEach((line, i) => {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => Math.max(prev, i + 1))
      }, line.delay)
      timers.push(timer)
    })

    return () => timers.forEach(clearTimeout)
  }, [isVisible])

  return (
    <section ref={containerRef} className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Contract Generation Log</h2>

        {/* Terminal */}
        <div className="glass rounded-lg border border-primary/30 overflow-hidden">
          {/* Terminal header */}
          <div className="bg-primary/10 border-b border-primary/20 px-4 py-2 flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            <span className="ml-auto text-xs font-mono text-foreground/50">nexops@protocol:~$ </span>
          </div>

          {/* Terminal content */}
          <div className="p-4 font-mono text-xs space-y-1 max-h-96 overflow-y-auto bg-black/20">
            {traceLines.map((line, i) => (
              <div
                key={i}
                className={`transition-all duration-200 ${
                  i < displayedLines ? 'opacity-100' : 'opacity-0 h-0'
                }`}
              >
                {line.text ? (
                  <span className={line.success ? 'text-secondary' : line.text.startsWith('$') ? 'text-primary' : 'text-foreground/70'}>
                    {line.text}
                  </span>
                ) : (
                  <span className="text-transparent">-</span>
                )}
                {i === displayedLines - 1 && line.text && (
                  <span className="ml-1 inline-block w-1.5 h-3 bg-primary animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
