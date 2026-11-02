export default function Capability() {
  const capabilities = [
    {
      title: 'Operational Intelligence',
      description: 'Process diagnostics and structural mapping. We identify administrative leaks and compile formal integration specifications before writing a single line of code.',
    },
    {
      title: 'AI Agent Deployment',
      description: 'Engineering of autonomous, database-backed execution engines. We wrap LLMs in deterministic validation layers to process incoming documents and actions with zero margin for error.',
    },
    {
      title: 'Systems Evolution',
      description: 'Continuous optimization and API control. We monitor processing latency, execute prompt hardening, and adjust database schemas to maintain system reliability as your business scales.',
    },
  ];

  return (
    <section id="capability" className="bg-bg-primary py-40 sm:py-44 border-b border-border-color">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Label */}
        <span className="eyebrow mb-8 block">
          The Capability
        </span>

        {/* Section Header */}
        <div className="flex flex-col gap-6 mb-16 text-left max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-text-primary leading-tight">
            We replace manual operations with AI systems that run without human intervention.
          </h2>
          <p className="text-base text-text-muted leading-relaxed max-w-3xl">
            Vanthrope audits, designs, and deploys custom AI agent systems that integrate directly with enterprise databases and resource planning systems. We remove human variables from repetitive transaction processing, reconciliations, and reporting workflows—permanently.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="bg-bg-surface rounded-2xl border border-border-color p-8 flex flex-col justify-between min-h-[300px] text-left transition-all hover:border-white/20"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-text-primary tracking-tight">
                  {cap.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed font-normal">
                  {cap.description}
                </p>
              </div>

              {/* Arrow link */}
              <a
                href="#engagement"
                className="inline-flex items-center gap-2 text-xs font-medium text-text-primary hover:text-text-muted transition-colors mt-8"
                style={{ minHeight: '44px' }}
              >
                Request audit <span className="text-sm">→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
