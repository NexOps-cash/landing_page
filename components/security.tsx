'use client'

const securityMechanisms = [
  'BCH-1 Hackcelerator winner',
  'Intent-to-Contract Protocol',
  'Deterministic CashScript for Bitcoin Cash',
]

const verificationSteps = [
  'Intent parsing',
  'Syntax validation',
  'Security rules check',
  'Bytecode generation',
  'Hash verification',
  'Deployment approval',
]

export default function Security() {
  return (
    <section id="security" className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-foreground">Security & Verification</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left - Security Mechanisms */}
          <div>
            <h3 className="text-base font-mono font-bold text-primary mb-4 uppercase tracking-[0.18em]">Security Mechanisms</h3>
            <div className="space-y-2">
              {securityMechanisms.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-1.5 px-3 rounded border border-primary/20 bg-primary/5"
                >
                  <span className="text-[10px] font-mono text-secondary font-bold uppercase tracking-tighter bg-secondary/10 px-1.5 py-0.5 rounded border border-secondary/20 whitespace-nowrap">Built for BCH</span>
                  <span className="text-xs font-mono text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Verification Process */}
          <div>
            <h3 className="text-base font-mono font-bold text-secondary mb-4 uppercase tracking-[0.18em]">Verification Process</h3>
            <div className="space-y-2">
              {verificationSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-1.5 px-3 rounded border border-secondary/20 bg-secondary/5"
                >
                  <span className="text-xs font-mono text-secondary font-bold">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-xs font-mono text-white/90">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
