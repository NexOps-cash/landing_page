'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

export default function AwardBanner() {
    return (
        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <div className="glass rounded-3xl overflow-hidden flex flex-col items-center border border-primary/20 shadow-[0_0_50px_rgba(0,229,255,0.15)] transition-all duration-500 hover:border-primary/40 group max-w-md w-full">
                    {/* Header */}
                    <div className="p-8 pb-4 text-center w-full">
                        <div className="flex flex-col items-center gap-3">
                            <div className="flex items-center gap-2 flex-wrap justify-center">
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 tracking-widest uppercase">
                                    AWARD bch-1.nexops.cash
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">
                                BCH-1 Hackcelerator <br /> Overall Winner
                            </h3>
                        </div>
                    </div>

                    {/* 1:1 Achievement Poster */}
                    <div className="px-8 pb-4 w-full">
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 bg-black/60 shadow-inner group-hover:border-primary/20 transition-all duration-700">
                            <Image
                                src="/poster.jpeg"
                                alt="BCH-1 Hackcelerator Award Poster"
                                fill
                                className="object-contain p-4"
                                style={{ filter: "drop-shadow(0 0 20px rgba(0, 229, 255, 0.2))" }}
                                priority
                            />
                        </div>
                    </div>

                    {/* Body Content */}
                    <div className="px-10 pb-6 text-center">
                        <p className="text-sm text-white/70 leading-relaxed font-medium">
                            Recognized as the #1 project in the BCH-1 Hackcelerator, NexOps was selected from 255 builders and 53 global projects for its protocol-level approach to deterministic smart contract generation and automated security verification.
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="p-8 pt-0 w-full flex flex-col items-center gap-6">
                        <button className="w-full px-8 py-4 rounded-xl bg-white text-black font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3">
                            View Announcement
                            <ExternalLink className="w-4 h-4" />
                        </button>
                        <div className="flex items-center gap-2 opacity-90">
                            <span className="text-[11px] font-bold text-primary tracking-[0.3em] uppercase">
                                🏆 ECOSYSTEM RECOGNITION
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
