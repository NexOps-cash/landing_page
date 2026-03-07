export default function TrustBanner() {
  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-b border-primary/10">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-lg p-8 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-2xl">🥇</span>
            <span className="text-xs font-mono text-primary uppercase tracking-widest">Recognition</span>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-white">Overall Winner — BCH-1 Hackcelerator</h3>
          <p className="text-foreground/60">
            Selected as the #1 project out of 255 builders and 53 global entries for technical excellence in the Bitcoin Cash ecosystem.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-20" />
    </div>
  )
}
