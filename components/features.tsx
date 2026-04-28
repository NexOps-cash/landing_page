'use client'

const features = [
  {
    title: 'Intent-to-Code',
    badge: 'COMPILATION',
    description: 'High-level intent → optimized CashScript',
  },
  {
    title: 'NexIR',
    badge: 'REPRESENTATION',
    description: 'Cross-compatible bytecode generation',
  },
  {
    title: 'TollGate',
    badge: 'VERIFICATION',
    description: 'Automated security analysis & checks',
  },
  {
    title: 'Deterministic',
    badge: 'REPRODUCIBLE',
    description: 'Cryptographically verified builds',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-foreground">Key Capabilities</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="glass rounded-lg p-4 border border-primary/20 hover:border-primary/50 transition-colors duration-200"
            >
              <p className="text-sm font-mono font-semibold text-primary/80 mb-2 uppercase tracking-[0.14em]">{feature.badge}</p>
              <p className="text-sm font-semibold text-foreground mb-1">{feature.title}</p>
              <p className="text-xs text-foreground/60 line-clamp-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
