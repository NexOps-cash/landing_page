'use client'

import Image from 'next/image'
import { Eye, Share2, Search, TreePine } from 'lucide-react'

const features = [
    {
        title: 'ABI Visualizer',
        badge: 'DEBUGGER',
        description: 'Transform raw contract artifacts into intuitive, human-readable interfaces. Instantly visualize constructors, function signatures, and data types to understand the exact interaction surface of your compiled CashScript covenants.',
        icon: <Eye className="w-5 h-5 text-primary" />,
        image: '/abivisual.png',
    },
    {
        title: 'Flow Palette',
        badge: 'MECHANISM',
        description: 'Trace the logical execution path of your intents using interactive tree diagrams. Deconstruct complex validation steps into visual nodes, identify potential bottlenecks, and calculate real-time contract complexity indexes.',
        icon: <Share2 className="w-5 h-5 text-primary" />,
        image: '/flowpalette.png',
    }
]

export default function SecondaryFeatures() {
    return (
        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                    <div key={i} className="glass rounded-2xl overflow-hidden flex flex-col border border-white/5 transition-all duration-300 hover:border-primary/20 group">
                        {/* Header */}
                        <div className="p-6 pb-4">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                                    {feature.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/20 text-primary border border-primary/30 tracking-tight">
                                            {feature.badge}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-white/70 leading-relaxed min-h-[4rem]">
                                {feature.description}
                            </p>
                        </div>

                        {/* Image Area */}
                        <div className="px-6 py-2">
                            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/5 bg-black/40">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent z-10 pointer-events-none" />
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-contain opacity-90 group-hover:opacity-100 brightness-125 contrast-[1.02] transition-all duration-300"
                                />
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}
