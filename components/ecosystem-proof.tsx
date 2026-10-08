const teams = [
  {
    name: 'Cashmint Labs', category: 'Bonding curve contracts · $MINTY',
    summary: 'Cashmint announced that it received NexOps’ audit review ahead of its agent token launch.',
    quote: 'We received the official audit review from NexOps',
    source: 'Cashmint Labs · September 13, 2026',
    href: 'https://x.com/CashMintLabs/status/2099149902009995741', linkLabel: 'Read the team’s post',
    evidenceHref: 'https://app.cauldron.quest/swap/7cb1787c32ad10ffc21bbf543c4514984e1f6593f7a0f9b9487af51a824fc37a',
    outcome: '~$7k in $MINTY TVL', detail: 'Reported by NexOps · October 8, 2026 snapshot',
  },
  {
    name: 'Fun(d)Tokens', category: 'Basket index protocol',
    summary: 'The team publicly credited NexOps for helping complete the first audit of its basket index protocol.',
    quote: 'helping complete the first audit of our basket index protocol, FundTokens.',
    source: 'Fun(d)Tokens · May 5, 2026',
    href: 'https://x.com/FundTokens_Cash/status/2051378880955445283', linkLabel: 'Read the team’s post',
    outcome: 'First protocol audit completed', detail: 'Acknowledged publicly by the team',
  },
  {
    name: 'Milestara', category: 'Smart contract auditing',
    summary: 'Milestara shared a concrete finding from its audit: a subtle edge case in multisig logic, with a suggested fix.',
    quote: 'The audit flagged a subtle multisig edge case and suggested an automatic fix.',
    source: 'Milestara team',
    href: 'https://x.com/jovan_0406/status/2029497825483264051', linkLabel: 'Read the team’s post',
    outcome: 'Multisig edge case identified', detail: 'Actionable feedback on contract logic',
  },
]

export default function EcosystemProof() {
  return (
    <section id="ecosystem-proof" aria-labelledby="proof-title" className="relative scroll-mt-24 py-10 px-4 sm:px-6 lg:px-8 border-t border-primary/15">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div>
            <p className="text-xs font-mono text-secondary uppercase tracking-[0.2em] mb-3">Beyond the demo</p>
            <h2 id="proof-title" className="text-3xl sm:text-4xl font-bold text-white">3 external teams. Real audit work.</h2>
          </div>
          <p className="text-sm text-white/60 sm:max-w-xs">From bonding curves to basket indices: see what teams used NexOps for.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {teams.map((team) => (
            <article key={team.name} className="flex flex-col rounded-2xl border border-white/15 bg-black/50 p-6">
              <p className="text-xs text-secondary mb-3">{team.category}</p>
              <h3 className="text-xl font-semibold text-white">{team.name}</h3>
              <p className="text-sm leading-relaxed text-white/70 mt-3">{team.summary}</p>
              <blockquote className="border-l-2 border-primary/50 pl-4 my-6">
                <p className="text-sm leading-relaxed text-white/90">“{team.quote}”</p>
                <footer className="text-xs text-white/55 mt-3">{team.source}</footer>
              </blockquote>
              <div className="mt-auto">
                <div className="border-t border-white/10 pt-4 mb-5">
                  <p className="font-medium text-secondary">{team.outcome}</p>
                  <p className="text-xs text-white/55 mt-1">{team.detail}</p>
                  {team.evidenceHref && <a href={team.evidenceHref} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm text-primary hover:text-white">View $MINTY on Cauldron ↗</a>}
                </div>
                <a href={team.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:text-white">{team.linkLabel} <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center justify-between rounded-xl border border-secondary/20 bg-secondary/5 px-5 py-4">
          <p className="text-sm text-white/80"><span className="font-semibold text-white">BCH-1 Hackcelerator winner</span> · $10,000 award</p>
          <a href="https://x.com/bch_1_official/status/2029927755270529102" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary hover:text-white">View announcement ↗</a>
        </div>
      </div>
    </section>
  )
}
