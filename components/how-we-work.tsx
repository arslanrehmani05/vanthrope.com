export default function HowWeWork() {
  const steps = [
    {
      num: '01',
      title: 'Diagnostics First',
      description: 'We do not write code without a complete map of the status quo. We spend the initial phase identifying the exact operational bottlenecks and data silos.',
    },
    {
      num: '02',
      title: 'Hardened Engineering',
      description: 'Our systems are built to run without human supervision. We construct strict schema validators and fallbacks to ensure zero data corruption.',
    },
    {
      num: '03',
      title: 'Operational Integration',
      description: 'We deploy our agents directly into your existing infrastructure. We build clean middleware that speaks to your ERPs, databases, and APIs.',
    },
    {
      num: '04',
      title: 'Absolute Accountability',
      description: 'We do not sell licenses or walk away. We monitor accuracy, maintain prompt robustness, and evolve the systems as your operations expand.',
    },
  ];

  return (
    <section id="how-we-work" className="bg-bg-secondary py-40 sm:py-44 border-b border-border-color">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Label */}
        <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-8 block">
          HOW WE WORK
        </span>

        {/* Section Header */}
        <div className="flex flex-col gap-6 mb-20 text-left max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text-primary leading-tight">
            A small number of clients. An unreasonable standard of delivery.
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row gap-6 items-start text-left">
              {/* Number */}
              <div className="text-5xl sm:text-6xl font-black text-accent-steel leading-none select-none">
                {step.num}
              </div>
              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold tracking-tight text-text-primary uppercase">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
