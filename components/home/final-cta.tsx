import Link from 'next/link';

export default function FinalCta() {
  return (
    <section className="py-32 sm:py-40 border-b border-border-color relative">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        <span className="eyebrow mb-6">
          Next Steps
        </span>

        <h2 className="headline text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-text-primary leading-tight mb-6">
          Ready to diagnose your operational friction?
        </h2>

        <p className="text-base text-text-muted max-w-2xl font-normal leading-relaxed mb-10">
          Schedule a 20-minute operational scoping session directly with our Principal Systems Architect. We evaluate your current transactional volume, assess database readiness, and determine the deterministic architecture required to eliminate your operational bottleneck.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-primary !px-7 !py-3.5 !text-sm font-semibold rounded-full shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Schedule 20-min Scoping Call
          </Link>
          <Link
            href="/tools"
            className="btn-ghost !px-7 !py-3.5 !text-sm font-medium rounded-full transition-all"
          >
            Run Operational Diagnostic &rarr;
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-medium text-text-muted hover:text-text-primary transition-all"
          >
            Explore case studies &rarr;
          </Link>
        </div>

        <div className="mt-12 text-xs font-mono text-text-subtle">
          Direct founder response guaranteed within 24 business hours.
        </div>

        <div className="mt-8 pt-8 border-t border-border-color/60 max-w-xl text-center text-xs font-mono text-text-subtle">
          <span>Led by Arslan Rehmani, Founder &amp; Principal Systems Architect. For personal engineering field notes, open proof ledger, and interactive diagnostic scans, visit </span>
          <a
            href="https://arslanrehmani.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary underline hover:text-text-muted transition-colors font-medium inline-flex items-center gap-1"
          >
            arslanrehmani.com &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
