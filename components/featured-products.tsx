'use client'

import Image from 'next/image'
import Link from 'next/link'
import { LayoutGrid, Wand2, Zap, Hammer } from 'lucide-react'
import { usePostHog } from 'posthog-js/react'

const products = [
    {
        title: 'NexHub Registry',
        badge: 'REGISTRY',
        url: 'hub.nexops.cash',
        description: 'A decentralized directory for verified NexOps intents and audited script templates. Browse, share, and fork secure Bitcoin Cash contract patterns within a community-driven ecosystem.',
        primaryAction: 'Explore Registry',
        secondaryInfo: 'VERIFIED TEMPLATES',
        secondaryIcon: <Zap className="w-3 h-3 text-secondary" />,
        icon: <LayoutGrid className="w-5 h-5 text-primary" />,
        image: '/registry.png',
        link: 'https://hub.nexops.cash'
    },
    {
        title: 'NexWizard',
        badge: 'BUILDER',
        url: 'wizard.nexops.cash',
        description: 'The ultimate low-code environment for BCH contract creation. Use AI-assisted visual nodes to map out complex covenant logic, trigger automated audits, and deploy directly to Chipnet or Mainnet.',
        primaryAction: 'Open Wizard',
        secondaryInfo: 'LOW-CODE ENGINE',
        secondaryIcon: <Hammer className="w-3 h-3 text-secondary" />,
        icon: <Wand2 className="w-5 h-5 text-primary" />,
        image: '/wizard.png',
        link: 'https://wiz.nexops.cash'
    }
]

export default function FeaturedProducts() {
    const posthog = usePostHog()
    return (
        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((product, i) => (
                    <div key={i} className="glass rounded-2xl overflow-hidden flex flex-col border border-white/5 transition-all duration-300 hover:border-primary/20">
                        {/* Header */}
                        <div className="p-6 pb-4">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                    {product.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-xl font-bold text-white">{product.title}</h3>
                                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/20 text-primary border border-primary/30 tracking-tight">
                                            {product.badge}
                                        </span>
                                    </div>
                                    <p className="text-xs font-mono text-white/40">{product.url}</p>
                                </div>
                            </div>
                            <p className="text-sm text-white/70 leading-relaxed min-h-[4rem]">
                                {product.description}
                            </p>
                        </div>

                        {/* Screenshot Area */}
                        <div className="px-6 py-2">
                            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/5 bg-black/40">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent z-10 pointer-events-none" />
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-contain opacity-90 group-hover:opacity-100 brightness-125 contrast-[1.02] transition-all duration-300"
                                />
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 pt-4 mt-auto flex items-center justify-between">
                            <Link
                                href={product.link}
                                target="_blank"
                                onClick={() => posthog.capture(`click_product_${product.title.toLowerCase().replace(' ', '_')}`)}
                                className="px-6 py-2 rounded-lg bg-white text-black text-sm font-bold hover:bg-white/90 transition-colors inline-block"
                            >
                                {product.primaryAction}
                            </Link>
                            <div className="flex items-center gap-1.5 opacity-60">
                                {product.secondaryIcon}
                                <span className="text-[10px] font-bold text-white tracking-widest uppercase">
                                    {product.secondaryInfo}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
