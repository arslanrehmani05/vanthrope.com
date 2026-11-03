import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FinalCta() {
  return (
    <section className="py-32 sm:py-40 border-b border-border-color relative">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        <span className="eyebrow mb-6">
          Next Steps
        </span>

        <h2 className="headline text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-text-primary leading-tight mb-6">
          Ready to eliminate your highest-drag manual bottleneck?
        </h2>

        <p className="text-base text-text-muted max-w-2xl font-normal leading-relaxed mb-10">
          Schedule a 20-minute operational scoping session directly with our Principal Systems Architect. We evaluate your current transactional volume, assess database readiness, and determine the deterministic architecture required to eliminate your operational bottleneck.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-primary !px-7 !py-3.5 !text-sm font-semibold flex items-center gap-3 group cursor-pointer"
          >
            <span>Schedule 20-min Scoping Call</span>
            <span className="btn-arrow-badge w-6 h-6">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </span>
          </Link>
          <Link
            href="/tools"
            className="btn-ghost !px-6 !py-3.5 !text-sm font-medium flex items-center gap-2 cursor-pointer group"
          >
            <span>Run Operational Diagnostic</span>
            <ArrowRight className="w-4 h-4 text-text-muted group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Verification Ticks */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-text-subtle">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Direct founder response within 24h</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero high-pressure sales pitches</span>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border-color/60 max-w-xl text-center text-xs font-mono text-text-subtle">
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
