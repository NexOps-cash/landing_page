'use client'

const recognitionQuotes = [
  {
    quote: 'Nobody else has anything like this.',
    source: 'BCH-1 Hackcelerator',
  },
  {
    quote: 'A powerful protocol for building, auditing, and compiling CashScript contracts.',
    source: 'Bitcoin Cash',
  },
]

export default function EcosystemProof() {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-3">Proof from the Ecosystem</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Validation from builders and ecosystem voices</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {recognitionQuotes.map((item, i) => (
            <blockquote key={i} className="glass rounded-xl border border-primary/20 p-5">
              <p className="text-white/90 text-base leading-relaxed mb-3">"{item.quote}"</p>
              <footer className="text-xs font-mono text-primary uppercase tracking-[0.22em]">- {item.source}</footer>
            </blockquote>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <blockquote className="glass rounded-xl border border-secondary/20 p-5">
            <p className="text-xs font-mono text-secondary uppercase tracking-[0.25em] mb-2">Real Impact</p>
            <p className="text-white/90 text-base leading-relaxed mb-3">
              "The audit flagged a subtle multisig edge case and suggested an automatic fix."
            </p>
            <footer className="text-xs font-mono text-secondary uppercase tracking-[0.22em]">- Milestara Team</footer>
          </blockquote>

          <blockquote className="glass rounded-xl border border-primary/20 p-5">
            <p className="text-xs font-mono text-primary uppercase tracking-[0.25em] mb-2">Ecosystem Perception</p>
            <p className="text-white/90 text-base leading-relaxed mb-3">
              "A one-stop platform for on-chain contract auditing?"
            </p>
            <footer className="text-xs font-mono text-primary uppercase tracking-[0.22em]">- Bitcoin Cash Taiwan</footer>
          </blockquote>
        </div>

        <div className="glass rounded-xl border border-white/10 p-5 sm:p-6">
          <p className="text-xs font-mono text-white/60 uppercase tracking-[0.25em] mb-2">Market Timing</p>
          <p className="text-white/85 text-base mb-3">
            "The world is not quite ready for when developer tooling matures..."
          </p>
          <p className="text-xs font-mono text-white/70 uppercase tracking-[0.22em] mb-4">- BCH-1 Hackcelerator</p>
          <p className="text-secondary text-sm sm:text-base font-semibold">
            NexOps is built for that shift. Builders already see NexOps as a unified contract pipeline.
          </p>
        </div>
      </div>
    </section>
  )
}
