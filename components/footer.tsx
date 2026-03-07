import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative border-t border-primary/10 bg-black/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">NexOps Protocol</h3>
            <p className="text-sm text-foreground/60 font-light">
              Security-first smart contract generation and deterministic deployment for Bitcoin Cash.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest">Product</h4>
            <ul className="space-y-2 text-sm text-foreground/60 hover:text-foreground/80 transition-colors">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Documentation */}
          <div>
            <h4 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest">Docs</h4>
            <ul className="space-y-2 text-sm text-foreground/60 hover:text-foreground/80 transition-colors">
              <li>
                <Link href="https://docs.hexecutioners.club" target="_blank" className="hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="https://github.com/nexopsbch/nexops" target="_blank" className="hover:text-primary transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Examples
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest">Connect</h4>
            <ul className="space-y-2 text-sm text-foreground/60 hover:text-foreground/80 transition-colors">
              <li>
                <Link href="https://twitter.com/nexopsbch" target="_blank" className="hover:text-primary transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://github.com/nexopsbch" target="_blank" className="hover:text-primary transition-colors">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://www.hexecutioners.club" target="_blank" className="hover:text-primary transition-colors">
                  Website
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-primary/10 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/50">
            <p className="font-mono">© 2025 NexOps Protocol. Security-first smart contracts for Bitcoin Cash.</p>
            <div className="flex gap-4">
              <Link href="https://github.com/nexopsbch/nexops" target="_blank" className="hover:text-foreground/70 transition-colors">
                GitHub
              </Link>
              <Link href="https://docs.hexecutioners.club" target="_blank" className="hover:text-foreground/70 transition-colors">
                Docs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
