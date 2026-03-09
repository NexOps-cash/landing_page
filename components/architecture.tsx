'use client'

import { useEffect, useRef, useState } from 'react'

const steps = [
  { label: 'Intent\nSpecification', short: 'Intent' },
  { label: 'NexIR\nGeneration', short: 'NexIR' },
  { label: 'Logic\nInjection', short: 'Logic' },
  { label: 'TollGate\nAudit', short: 'Verify' },
  { label: 'Deterministic\nDeployment', short: 'Deploy' },
]

export default function Architecture() {
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

  return (
    <section id="protocol" ref={containerRef} className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-12 text-foreground">Protocol Pipeline</h2>

        {/* Desktop horizontal flow */}
        <div className="hidden md:block">
          <div className="relative h-32">
            {/* SVG Connectors */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 150" preserveAspectRatio="none">
              <defs>
                <style>{`
                  @keyframes dashFlow {
                    0% { stroke-dashoffset: 0; }
                    100% { stroke-dashoffset: -10; }
                  }
                  .animated-line {
                    stroke-dasharray: 5,5;
                    animation: dashFlow 1s linear infinite;
                  }
                `}</style>
              </defs>

              {/* Connecting lines with animation */}
              {[0, 1, 2, 3].map((i) => (
                <line
                  key={`line-${i}`}
                  x1={150 + i * 240}
                  y1="75"
                  x2={240 + i * 240}
                  y2="75"
                  stroke="#00E5FF"
                  strokeWidth="1.5"
                  className={`animated-line ${isVisible ? '' : 'opacity-0'}`}
                  opacity={isVisible ? 1 : 0}
                />
              ))}
            </svg>

            {/* Step nodes */}
            <div className="absolute inset-0 flex justify-between items-center px-0">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-lg glass flex items-center justify-center border border-primary/60 mb-3 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                    <span className="text-xs font-mono text-primary font-bold text-center">{step.short}</span>
                  </div>
                  <p className="text-xs font-mono text-white font-medium text-center whitespace-pre-line drop-shadow-md">{step.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical flow */}
        <div className="md:hidden space-y-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`glass rounded-lg p-3 border border-primary/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="text-xs font-mono text-primary font-semibold">{step.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
