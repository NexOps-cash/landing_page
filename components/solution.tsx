'use client'

const guarantees = [
  'Verified before deployment',
  'Deterministic and reproducible',
  'Protected by built-in guardrails',
]

export default function Solution() {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-3">Solution</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">NexOps: Intent -&gt; Verified -&gt; Deployed</h2>
          <p className="text-base sm:text-lg text-white/80 font-medium">Generate -&gt; Audit -&gt; Simulate -&gt; Deploy</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {guarantees.map((item, i) => (
            <div key={i} className="glass rounded-xl p-5 border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="text-[10px] font-mono text-primary uppercase tracking-[0.22em] mb-2">
                Guarantee {String(i + 1).padStart(2, '0')}
              </div>
              <p className="text-white/90 text-sm sm:text-base">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
