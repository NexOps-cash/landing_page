'use client'

import Image from 'next/image'
import { Code, ArrowRight } from 'lucide-react'

export default function WorkbenchPreview() {
    return (
        <section className="relative py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                {/* Large IDE Preview */}
                <div className="w-full relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl">
                        <Image
                            src="/workbench.png"
                            alt="NexOps Workbench IDE"
                            width={1920}
                            height={1080}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
