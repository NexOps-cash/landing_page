import Link from 'next/link'
import { usePostHog } from 'posthog-js/react'

export default function Footer() {
  const posthog = usePostHog()
  return (
    <footer className="relative border-t border-primary/10 bg-black/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">NexOps Protocol</h3>
            <p className="text-sm text-foreground/60 font-light">
              Security-first smart contract generation and deterministic deployment for Bitcoin Cash.
            </p>
          </div>

          {/* Documentation */}
          <div>
            <h4 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest">Docs</h4>
            <ul className="space-y-2 text-sm text-foreground/60 hover:text-foreground/80 transition-colors">
              <li>
                <Link 
                  href="https://docs.nexops.cash" 
                  target="_blank" 
                  onClick={() => posthog.capture('click_docs_footer')}
                  className="hover:text-primary transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/NexOps-cash/NexKB" 
                  target="_blank" 
                  onClick={() => posthog.capture('click_kb_footer')}
                  className="hover:text-primary transition-colors"
                >
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link 
                  href="https://docs.nexops.cash/docs/intent-spec" 
                  target="_blank" 
                  onClick={() => posthog.capture('click_protocol_footer')}
                  className="hover:text-primary transition-colors"
                >
                  Protocol Specification
                </Link>
              </li>
              <li>
                <Link 
                  href="https://docs.nexops.cash/docs/security-model" 
                  target="_blank" 
                  onClick={() => posthog.capture('click_security_footer')}
                  className="hover:text-primary transition-colors"
                >
                  Security Model
                </Link>
              </li>
              <li>
                <Link 
                  href="https://docs.nexops.cash/docs/intent-schema" 
                  target="_blank" 
                  onClick={() => posthog.capture('click_api_ref_footer')}
                  className="hover:text-primary transition-colors"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link 
                  href="https://docs.nexops.cash/docs/ex-escrow" 
                  target="_blank" 
                  onClick={() => posthog.capture('click_examples_footer')}
                  className="hover:text-primary transition-colors"
                >
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
                <Link 
                  href="https://x.com/nexopsbch" 
                  target="_blank" 
                  onClick={() => posthog.capture('click_twitter_footer')}
                  className="hover:text-primary transition-colors"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/NexOps-cash" 
                  target="_blank" 
                  onClick={() => posthog.capture('click_github_footer')}
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link 
                  href="https://app.nexops.cash" 
                  target="_blank" 
                  onClick={() => posthog.capture('launch_app_footer')}
                  className="hover:text-primary transition-colors"
                >
                  Launch App
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
              <Link href="https://github.com/NexOps-cash" target="_blank" className="hover:text-foreground/70 transition-colors">
                GitHub
              </Link>
              <Link href="https://docs.nexops.cash" target="_blank" className="hover:text-foreground/70 transition-colors">
                Docs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
