export default function Proof() {
  const caseStudies = [
    {
      title: 'TextileMode ERP',
      industry: 'Textiles & Manufacturing',
      problem: 'Daily scheduling and production routing took a team of 4 coordinators over 48 hours to plan and balance across loom capacities every week, leading to persistent delivery backlogs.',
      solution: 'Built a custom, lightweight Next.js ERP containing capacity matching algorithms that dynamically route jobs based on loom speeds, yarn availability, and order dates.',
      results: [
        { value: '48h → 10h', label: 'Weekly administrative overhead' },
        { value: '$100,000', label: 'Saved annually in labor costs' },
      ],
    },
    {
      title: 'Belhide Ecommerce Intelligence',
      industry: 'Ecommerce & Retail',
      problem: 'Sales tracking, shipping cost reconciliation, and advertising analysis was scattered across seven distinct dashboards, requiring daily manual copy-pasting into spreadsheets.',
      solution: 'Designed and deployed an integrated automated backend that pulls APIs daily from Shopify, Meta Ads, and DHL, centralizing metrics into a single source of truth.',
      results: [
        { value: '7 feeds', label: 'Systems automated' },
        { value: 'Zero', label: 'Manual reporting required' },
      ],
    },
  ];

  return (
    <section id="proof" className="bg-bg-primary py-40 sm:py-44 border-b border-border-color">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Label */}
        <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-8 block">
          OPERATIONAL RESULTS
        </span>

        {/* Section Header */}
        <div className="flex flex-col gap-6 mb-20 text-left max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text-primary leading-tight">
            Systems deployed. Results measured.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="bg-bg-secondary border border-border-steel/20 p-8 md:p-12 flex flex-col justify-between min-h-[420px] text-left"
            >
              <div>
                {/* Industry Tag */}
                <div className="inline-block border border-accent-steel/40 text-accent-steel text-[10px] font-bold tracking-widest uppercase px-3 py-1 mb-6">
                  {cs.industry}
                </div>
                
                <h3 className="text-2xl font-black text-text-primary tracking-tight mb-4 uppercase">
                  {cs.title}
                </h3>
                
                <p className="text-sm text-text-muted leading-relaxed mb-8">
                  {cs.problem}
                </p>

                {/* Metrics Row */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border-steel/10">
                  {cs.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex flex-col">
                      <span className="text-2xl sm:text-3xl font-black text-text-primary tracking-tight">
                        {res.value}
                      </span>
                      <span className="text-xs text-text-muted mt-1 font-medium">
                        {res.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Study Link */}
              <div className="mt-10 pt-4">
                <a
                  href="#engagement"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent-steel hover:text-accent-steel-hover transition-steel"
                  style={{ minHeight: '44px' }}
                >
                  Request Architecture Blueprint <span className="text-sm">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-text-subtle text-xs tracking-wider uppercase font-semibold text-center mt-12">
          Additional case studies available under NDA for qualified prospects.
        </p>

      </div>
    </section>
  );
}
