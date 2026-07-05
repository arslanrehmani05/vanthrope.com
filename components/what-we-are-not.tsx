export default function WhatWeAreNot() {
  const columns = [
    {
      title: 'Not a consultancy',
      description: 'We do not produce slide decks, reports, or lists of recommendations. We build production-grade automated systems and deploy them directly into your operational environment.',
    },
    {
      title: 'Not a software vendor',
      description: 'We do not sell pre-packaged licenses, software subscriptions, or generic templates. We engineer custom operational solutions tailored specifically to your unique workflow constraints.',
    },
    {
      title: 'Not for everyone',
      description: 'We work exclusively with mid-market businesses that have real operational friction worth solving and the internal commitment to restructure workflows properly.',
    },
  ];

  return (
    <section id="what-we-are-not" className="bg-bg-secondary py-40 sm:py-44 border-b border-border-color">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Label */}
        <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-20 block">
          WHAT WE ARE NOT
        </span>

        {/* Three Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {columns.map((col, idx) => (
            <div key={idx} className="flex flex-col items-start text-left">
              {/* Large X character in steel color */}
              <div className="text-5xl font-black text-accent-steel mb-8 select-none">
                &times;
              </div>
              <h3 className="text-xl font-bold tracking-tight text-text-primary mb-4 uppercase">
                {col.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {col.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
