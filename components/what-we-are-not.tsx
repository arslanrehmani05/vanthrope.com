export default function WhatWeAreNot() {
  const columns = [
    {
      title: 'Production Software, Not Strategy Decks',
      description: 'We deploy working software directly into your cloud tenancy. Our deliverables are versioned codebases, immutable database schemas, and parallel-verified automation pipelines.',
    },
    {
      title: 'Custom Engineering, Not Vendor SaaS',
      description: 'We do not sell pre-packaged licenses, per-seat subscriptions, or generic templates. We engineer custom operational software tailored specifically to your unique workflow constraints.',
    },
    {
      title: 'Dedicated Partnership, Not Mass Consulting',
      description: 'We work exclusively with mid-market enterprises ($10M–$100M+) that have high-friction transactional bottlenecks and the executive commitment to automate safely.',
    },
  ];

  return (
    <section id="what-we-are-not" className="bg-bg-secondary py-40 sm:py-44 border-b border-border-color">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Label */}
        <span className="eyebrow mb-16 block">
          What We Are Not
        </span>

        {/* Three Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {columns.map((col, idx) => (
            <div key={idx} className="flex flex-col items-start text-left">
              {/* Large X character */}
              <div className="text-4xl font-light text-text-subtle mb-6 select-none">
                &times;
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-text-primary mb-3">
                {col.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed font-normal">
                {col.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
