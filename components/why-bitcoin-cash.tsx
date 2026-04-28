'use client'

const networkStats = [
  '~50,000 transactions processed daily',
  '$150M+ in value moved on-chain per day',
  '~$10B market capitalization',
]

const toolingGap = [
  'Developer tooling remains limited',
  'No unified IDE like Remix or Hardhat',
  'UTXO-based execution is harder to reason about',
  'Small mistakes can lock funds permanently',
]

const vibeContracting = [
  'Intent -&gt; verified contract generation',
  'Deterministic validation beyond syntax',
  'Guardrails to prevent unsafe execution',
]

const deploymentToday = [
  'Manual transaction construction',
  'UTXO inputs/outputs must be exact',
  'Value-flow + token handling is error-prone',
  'One mistake -&gt; failed tx or locked funds',
]

const deploymentWithNexOps = [
  'One-click deployment from verified contracts',
  'Automatic transaction construction',
  'Built-in value-flow and token checks',
  'Deterministic, reproducible execution',
]

const outcomes = [
  'Faster onboarding',
  'Safer contracts',
  'More contracts deployed',
]

function FactList({ items }: { items: string[] }) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item} className="rounded-lg border border-white/10 bg-black/25 px-4 py-3">
          <p className="text-sm text-white/85">{item}</p>
        </div>
      ))}
    </div>
  )
}

export default function WhyBitcoinCash() {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/10">
      <div
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(90deg, #00E5FF 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm sm:text-base font-mono font-bold text-primary uppercase tracking-[0.22em] mb-3 drop-shadow-[0_0_12px_rgba(0,229,255,0.25)]">
            Why Bitcoin Cash
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Bitcoin Cash is one of the most actively used peer-to-peer transaction networks.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {networkStats.map((stat) => (
            <div key={stat} className="glass rounded-xl border border-primary/20 p-5 text-center">
              <p className="text-white/90 text-sm sm:text-base font-medium">{stat}</p>
            </div>
          ))}
        </div>

        <div className="glass rounded-2xl border border-white/10 p-6 sm:p-7 mb-6">
          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            With upgrades like CashTokens and Layla expanding smart contract capabilities, BCH is evolving into a
            programmable UTXO-based platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className="glass rounded-2xl border border-primary/20 p-6">
            <p className="text-sm font-mono font-bold text-primary uppercase tracking-[0.2em] mb-4">The gap</p>
            <FactList items={toolingGap} />
          </div>

          <div className="glass rounded-2xl border border-secondary/20 p-6">
            <p className="text-sm font-mono font-bold text-secondary uppercase tracking-[0.2em] mb-4">Why NexOps</p>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed">
              NexOps is built specifically for BCH&apos;s execution model - enforcing deterministic behavior, validating
              value flow, and ensuring contracts behave exactly as intended before deployment.
            </p>
          </div>
        </div>

        <div className="glass rounded-2xl border border-primary/20 p-6 mb-6">
          <p className="text-sm font-mono font-bold text-primary uppercase tracking-[0.2em] mb-3">Enabling "vibe contracting"</p>
          <p className="text-white/80 text-sm sm:text-base mb-4">
            General AI tools are not trained on CashScript and often produce unsafe code.
          </p>
          <FactList items={vibeContracting} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className="glass rounded-2xl border border-white/10 p-6">
            <p className="text-sm font-mono font-bold text-white/80 uppercase tracking-[0.2em] mb-4">Deployment today</p>
            <FactList items={deploymentToday} />
          </div>

          <div className="glass rounded-2xl border border-primary/20 p-6">
            <p className="text-sm font-mono font-bold text-primary uppercase tracking-[0.2em] mb-4">With NexOps</p>
            <FactList items={deploymentWithNexOps} />
          </div>
        </div>

        <div className="glass rounded-2xl border border-secondary/20 p-6 sm:p-7">
          <p className="text-sm font-mono font-bold text-secondary uppercase tracking-[0.2em] mb-4">The result</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
            {outcomes.map((item) => (
              <div key={item} className="rounded-lg border border-secondary/20 bg-secondary/10 px-4 py-3 text-center">
                <p className="text-sm text-white/90 font-medium">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-white text-lg font-semibold">BCH enables powerful contracts.</p>
          <p className="text-secondary text-lg font-semibold">NexOps makes them safe to build.</p>
        </div>
      </div>
    </section>
  )
}
