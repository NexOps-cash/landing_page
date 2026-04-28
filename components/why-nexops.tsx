'use client'

export default function WhyNexOps() {
  return (
    <section className="relative py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="glass rounded-2xl border border-secondary/20 p-6 sm:p-8">
          <p className="text-xs font-mono text-secondary uppercase tracking-[0.28em] mb-3">Why NexOps</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Most tools audit contracts after they are written.
          </h3>
          <p className="text-lg text-white/90 mb-2">NexOps enforces correctness during creation.</p>
          <p className="text-white/70 text-sm sm:text-base">
            Instead of detecting bugs, we prevent them from existing.
          </p>
        </div>
      </div>
    </section>
  )
}
