'use client'

import Image from 'next/image'
import workbenchImage from '@/assets/workbench.png'

export default function WorkbenchPreview() {
    return (
        <section className="relative py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                {/* Large IDE Preview */}
                <div className="w-full relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/15 via-transparent to-primary/15 rounded-2xl blur-xl opacity-10 group-hover:opacity-15 transition-opacity" />
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl">
                        <Image
                            src={workbenchImage}
                            alt="NexOps Workbench IDE"
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
