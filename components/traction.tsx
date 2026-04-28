'use client'

const tractionItems = [
  '900+ internal contract generation and audit runs',
  'Active usage across BCH contract flows from emerging BCH projects such as Fun(d)Tokens and Milestara',
  'Continuous iteration from real-world audits and feedback',
]

export default function Traction() {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm sm:text-base font-mono font-bold text-secondary uppercase tracking-[0.22em] mb-3 drop-shadow-[0_0_12px_rgba(10,193,142,0.2)]">
            Traction
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Usage momentum from real contract workflows</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tractionItems.map((item, i) => (
            <div key={i} className="glass rounded-xl p-5 border border-secondary/20 hover:border-secondary/40 transition-all duration-300">
              <p className="text-xs sm:text-sm font-mono font-semibold text-secondary uppercase tracking-[0.18em] mb-2">
                Signal {String(i + 1).padStart(2, '0')}
              </p>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
