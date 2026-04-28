'use client'

const painPoints = [
  'Small logic errors create irreversible fund loss',
  'Audits are manual, expensive, and often too late',
  'UTXO-based systems introduce non-obvious edge cases',
  'Developers rely on fragmented tooling and guesswork',
]

export default function Problem() {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/10">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #00E5FF 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-3">Problem</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Smart contracts fail in subtle ways</h2>
          <p className="text-white/70 max-w-3xl mx-auto text-sm sm:text-base">
            Even experienced teams can ship unsafe contracts when verification happens too late.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {painPoints.map((point, i) => (
            <div key={i} className="glass rounded-xl p-5 border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-start gap-3">
                <span className="text-[10px] font-mono text-secondary font-bold uppercase tracking-widest px-2 py-1 rounded border border-secondary/30 bg-secondary/10 mt-0.5">
                  Risk
                </span>
                <p className="text-white/85 text-sm leading-relaxed">{point}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
