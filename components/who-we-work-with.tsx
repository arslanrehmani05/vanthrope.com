export default function WhoWeWorkWith() {
  const clients = [
    {
      title: 'The Manufacturer',
      description: 'Mid-market manufacturing conglomerates running critical supply chains and production schedules on fragmented legacy databases and spreadsheets. You need automated machine balancing, yarn tracking, and scheduling.',
    },
    {
      title: 'The Ecommerce Operator',
      description: 'High-volume retail brands managing multi-channel sales, inventory levels, advertising feeds, and shipping reconciliations across multiple platforms. You need automated profit reporting and ledger reconciliation.',
    },
    {
      title: 'The Service Business',
      description: 'Professional services firms processing large volumes of client agreements, invoices, data entry, and manual transaction routing daily. You need fail-safe document ingestion and automated action pipelines.',
    },
  ];

  return (
    <section id="who-we-work-with" className="bg-bg-secondary py-40 sm:py-44 border-b border-border-color">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Label */}
        <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-8 block">
          THE CLIENT
        </span>

        {/* Section Header */}
        <div className="flex flex-col gap-6 mb-20 text-left max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text-primary leading-tight">
            We work with businesses serious about operational transformation.
          </h2>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-bg-secondary border border-border-steel/20 p-8 flex flex-col justify-between min-h-[320px] text-left"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-bold tracking-tight text-text-primary uppercase">
                  {client.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {client.description}
                </p>
              </div>

              {/* Action link */}
              <a
                href="#engagement"
                className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-accent-steel hover:text-accent-steel-hover transition-steel mt-8"
                style={{ minHeight: '44px' }}
              >
                This is you? <span className="text-sm">→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
