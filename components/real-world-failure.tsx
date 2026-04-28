'use client'

const failureDrivers = [
  'complex value flows',
  'edge-case execution paths',
  'missing deterministic guarantees',
]

export default function RealWorldFailure() {
  return (
    <section className="relative py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="glass rounded-2xl border border-primary/20 p-6 sm:p-8 shadow-[0_0_30px_rgba(0,229,255,0.1)]">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.28em]">Real-World Failure</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Even well-designed contracts can fail due to subtle logic flaws.
          </h3>
          <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-5">
            The Moria USD case showed how small design assumptions in smart contracts can lead to unintended behavior and risk.
            These are not obvious bugs; they often emerge only in production-like conditions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {failureDrivers.map((item, i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-black/30 px-4 py-3">
                <p className="text-xs sm:text-sm text-white/85">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-secondary text-sm font-mono mt-5">
            This is exactly what NexOps is built to prevent.
          </p>
        </div>
      </div>
    </section>
  )
}
