export default function ValueProposition() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Why NexOps Exists</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
        </div>

        <div className="glass rounded-lg p-12">
          <p className="text-xl text-foreground/70 leading-relaxed font-light max-w-2xl mx-auto">
            NexOps eliminates smart contract vulnerabilities by enforcing protocol-level deterministic generation and automated security audits before a single satoshi is funded.
          </p>
        </div>

        {/* Accent elements */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { label: 'Protocol-First', icon: '⚙️' },
            { label: 'Security Audited', icon: '🛡️' },
            { label: 'Deterministic', icon: '✓' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-sm text-foreground/60 font-mono">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
