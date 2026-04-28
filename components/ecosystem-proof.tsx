'use client'

import Link from 'next/link'

const recognitionQuotes = [
  {
    quote: 'Nobody else has anything like this.',
    source: 'BCH-1 Hackcelerator',
    link: 'https://x.com/bch_1_official/status/2027400211946176832?s=20',
  },
  {
    quote: 'A powerful protocol for building, auditing, and compiling CashScript contracts.',
    source: 'Bitcoin Cash',
    link: 'https://x.com/BitcoinCashOG/status/2015039431246270526?s=20',
  },
]

export default function EcosystemProof() {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm sm:text-base font-mono font-bold text-primary uppercase tracking-[0.22em] mb-3 drop-shadow-[0_0_12px_rgba(0,229,255,0.25)]">
            Proof from the Ecosystem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Validation from builders and ecosystem voices</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {recognitionQuotes.map((item, i) => (
            <blockquote key={i} className="glass rounded-xl border border-primary/20 p-5">
              <p className="text-white/90 text-base leading-relaxed mb-3">"{item.quote}"</p>
              <footer className="text-xs font-mono text-primary uppercase tracking-[0.22em] mb-4">- {item.source}</footer>
              <Link
                href={item.link}
                target="_blank"
                className="inline-flex items-center px-4 py-2 rounded-lg border border-primary/30 text-primary text-xs font-mono uppercase tracking-[0.16em] hover:bg-primary/10 transition-all"
              >
                View Post
              </Link>
            </blockquote>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <blockquote className="glass rounded-xl border border-secondary/20 p-5">
            <p className="text-sm font-mono font-bold text-secondary uppercase tracking-[0.2em] mb-2">Real Impact</p>
            <p className="text-white/90 text-base leading-relaxed mb-3">
              "The audit flagged a subtle multisig edge case and suggested an automatic fix."
            </p>
            <footer className="text-xs font-mono text-secondary uppercase tracking-[0.22em] mb-4">- Milestara Team</footer>
            <Link
              href="https://x.com/jovan_0406/status/2029497825483264051?s=20"
              target="_blank"
              className="inline-flex items-center px-4 py-2 rounded-lg border border-secondary/30 text-secondary text-xs font-mono uppercase tracking-[0.16em] hover:bg-secondary/10 transition-all"
            >
              View Post
            </Link>
          </blockquote>

          <blockquote className="glass rounded-xl border border-primary/20 p-5">
            <p className="text-sm font-mono font-bold text-primary uppercase tracking-[0.2em] mb-2">Ecosystem Perception</p>
            <p className="text-white/90 text-base leading-relaxed mb-3">
              "A one-stop platform for on-chain contract auditing?"
            </p>
            <footer className="text-xs font-mono text-primary uppercase tracking-[0.22em] mb-4">- Bitcoin Cash Taiwan</footer>
            <Link
              href="https://x.com/twbitcoincash/status/2048866667292488024?s=20"
              target="_blank"
              className="inline-flex items-center px-4 py-2 rounded-lg border border-primary/30 text-primary text-xs font-mono uppercase tracking-[0.16em] hover:bg-primary/10 transition-all"
            >
              View Post
            </Link>
          </blockquote>
        </div>

        <div className="glass rounded-xl border border-white/10 p-5 sm:p-6">
          <p className="text-sm font-mono font-bold text-white/80 uppercase tracking-[0.2em] mb-2">Market Timing</p>
          <p className="text-white/85 text-base mb-3">
            "The world is not quite ready for when developer tooling matures..."
          </p>
          <p className="text-xs font-mono text-white/70 uppercase tracking-[0.22em] mb-2">- BCH-1 Hackcelerator</p>
          <p className="text-white/60 text-xs mb-4">Shared as a quote-retweet on NexOps.</p>
          <Link
            href="https://x.com/bch_1_official/status/2042681066725741040?s=20"
            target="_blank"
            className="inline-flex items-center px-4 py-2 rounded-lg border border-white/20 text-white/85 text-xs font-mono uppercase tracking-[0.16em] hover:bg-white/5 transition-all mb-4"
          >
            View Post
          </Link>
          <p className="text-secondary text-sm sm:text-base font-semibold">
            NexOps is built for that shift. Builders already see NexOps as a unified contract pipeline.
          </p>
        </div>

        <div className="glass rounded-xl border border-primary/20 p-5 sm:p-6 mt-4">
          <p className="text-sm font-mono font-bold text-primary uppercase tracking-[0.2em] mb-2">
            Backed by real-world recognition
          </p>
          <p className="text-white/90 text-base leading-relaxed mb-3">
            "Showcasing exceptional innovation, technical brilliance, and forward-thinking blockchain development."
          </p>
          <p className="text-xs font-mono text-primary uppercase tracking-[0.22em] mb-4">
            - Chennai Institute of Technology
          </p>
          <Link
            href="https://www.linkedin.com/posts/teamcit-citians-globalachievement-share-7438188408197500929-AoMG?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFLCBcwB8OCifkEDtd7TsC0QSjnQWswXRsM"
            target="_blank"
            className="inline-flex items-center px-4 py-2 rounded-lg border border-primary/30 text-primary text-xs font-mono uppercase tracking-[0.16em] hover:bg-primary/10 transition-all"
          >
            View Post
          </Link>
        </div>
      </div>
    </section>
  )
}
