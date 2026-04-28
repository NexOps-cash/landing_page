'use client'

import { Bot, Rocket, Boxes, BookTemplate, ShieldCheck } from 'lucide-react'

const stackRows = [
  {
    existing: 'Cursor / Copilot',
    nexops: 'NexIDE',
    outcome: 'AI-driven contract generation',
    icon: Bot,
  },
  {
    existing: 'Hardhat / Foundry',
    nexops: 'NexOps Deploy',
    outcome: 'Build, simulate, and deploy in one flow',
    icon: Rocket,
  },
  {
    existing: 'OpenZeppelin',
    nexops: 'NexWizard Templates',
    outcome: 'Verified, production-ready primitives',
    icon: BookTemplate,
  },
  {
    existing: 'npm / package repos',
    nexops: 'NexHub Registry',
    outcome: 'Share, fork, and reuse contract patterns',
    icon: Boxes,
  },
  {
    existing: 'Manual audits',
    nexops: 'TollGate (Audit Agent)',
    outcome: 'Automated security verification',
    icon: ShieldCheck,
  },
]

export default function StackComparison() {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm sm:text-base font-mono font-bold text-primary uppercase tracking-[0.22em] mb-3 drop-shadow-[0_0_12px_rgba(0,229,255,0.25)]">
            Positioning
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">The BCH development stack - unified</h2>
          <p className="text-white/75 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Developers today rely on fragmented tooling.
            <br />
            NexOps replaces the entire stack with a single integrated system:
          </p>
        </div>

        <div className="hidden md:block glass rounded-2xl border border-primary/20 overflow-hidden">
          <div className="grid grid-cols-12 border-b border-white/10 bg-white/[0.02]">
            <div className="col-span-4 px-5 py-4 text-sm font-mono font-semibold uppercase tracking-[0.18em] text-white/80">
              Existing Stack
            </div>
            <div className="col-span-4 px-5 py-4 text-sm font-mono font-bold uppercase tracking-[0.18em] text-primary bg-primary/5">
              NexOps Equivalent
            </div>
            <div className="col-span-4 px-5 py-4 text-sm font-mono font-semibold uppercase tracking-[0.18em] text-white/80">
              What You Actually Get
            </div>
          </div>

          {stackRows.map((row, i) => {
            const Icon = row.icon
            return (
              <div key={row.existing} className={`grid grid-cols-12 ${i !== stackRows.length - 1 ? 'border-b border-white/10' : ''}`}>
                <div className="col-span-4 px-5 py-4 text-sm text-white/80">{row.existing}</div>
                <div className="col-span-4 px-5 py-4 bg-primary/[0.06] border-l border-r border-primary/15">
                  <div className="inline-flex items-center gap-2 rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1">
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{row.nexops}</span>
                  </div>
                </div>
                <div className="col-span-4 px-5 py-4 text-sm text-white/85">{row.outcome}</div>
              </div>
            )
          })}
        </div>

        <div className="md:hidden space-y-3">
          {stackRows.map((row) => {
            const Icon = row.icon
            return (
              <div key={row.existing} className="glass rounded-xl border border-primary/20 p-4">
                <p className="text-sm font-mono font-semibold text-white/75 uppercase tracking-[0.16em] mb-1">Existing Stack</p>
                <p className="text-sm text-white/85 mb-3">{row.existing}</p>

                <p className="text-sm font-mono font-bold text-primary uppercase tracking-[0.16em] mb-1">NexOps Equivalent</p>
                <div className="inline-flex items-center gap-2 rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 mb-3">
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{row.nexops}</span>
                </div>

                <p className="text-sm font-mono font-semibold text-white/75 uppercase tracking-[0.16em] mb-1">What You Actually Get</p>
                <p className="text-sm text-white/85">{row.outcome}</p>
              </div>
            )
          })}
        </div>

        <p className="text-center text-white/75 mt-8 text-sm sm:text-base">
          Instead of stitching together fragmented tools, NexOps provides a single deterministic pipeline for building secure BCH contracts.
        </p>
        <p className="text-center text-white mt-3 text-lg sm:text-xl font-bold">
          Most platforms help you write contracts. NexOps ensures they are correct before deployment.
        </p>
      </div>
    </section>
  )
}
