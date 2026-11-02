import Link from 'next/link';

export default function FinalCta() {
  return (
    <section className="bg-bg-secondary py-32 sm:py-40 border-b border-border-color">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        <span className="eyebrow mb-6">
          Next Steps
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-text-primary leading-tight mb-6">
          Ready to diagnose your operational friction?
        </h2>

        <p className="text-base text-text-muted max-w-2xl font-normal leading-relaxed mb-10">
          Book a 20-minute discovery call directly with the founder. No sales reps, no pitch decks—just an honest technical audit of whether your problem is suitable for custom automation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-primary !px-7 !py-3.5 !text-sm font-semibold rounded-full shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Book a 20-minute discovery call
          </Link>
          <Link
            href="/tools"
            className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium border border-border-color text-text-primary hover:bg-bg-surface transition-all"
          >
            Try a diagnostic tool
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

        <div className="mt-8 pt-8 border-t border-border-color max-w-xl text-center text-xs font-mono text-text-subtle">
          <span>Led by Arslan Rehmani, Founder &amp; Principal Systems Architect. For personal engineering field notes, open proof ledger, and interactive diagnostic scans, visit </span>
          <a
            href="https://arslanrehmani.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary underline hover:text-accent-steel transition-steel font-semibold inline-flex items-center gap-1"
          >
            arslanrehmani.com &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
