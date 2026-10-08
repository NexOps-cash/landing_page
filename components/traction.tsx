const metrics = [
  { value: '20+', label: 'Developers', detail: 'Using generation and auditing' },
  { value: '120+', label: 'Contracts generated', detail: 'Through compile-gated generation' },
  { value: '12+', label: 'Contracts audited', detail: 'Including the $MINTY contracts' },
  { value: '50+', label: 'Contracts deployed', detail: 'With the NexOps deployment system' },
]

export default function Traction() {
  return (
    <section aria-label="NexOps usage" className="px-4 sm:px-6 lg:px-8 pb-12">
      <div className="max-w-6xl mx-auto">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-white/10 py-7">
          {metrics.map(({ value, label, detail }) => (
            <div key={label}>
              <dt className="text-sm text-white/75">{label}</dt>
              <dd className="text-3xl sm:text-4xl font-semibold text-white mt-2">{value}</dd>
              <dd className="text-xs text-white/55 mt-2">{detail}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-xs text-white/50">Cumulative figures reported by NexOps · October 2026</p>
      </div>
    </section>
  )
}
