import Link from 'next/link';
import { getVerifiedEvidence } from '@/lib/truth-gate';
import TruthBadge from '@/components/common/truth-badge';

export default function TrustTeaser() {
  const claim1 = getVerifiedEvidence('ev-trust-01');
  const claim2 = getVerifiedEvidence('ev-trust-02');
  const claim3 = getVerifiedEvidence('ev-trust-03');

  const claims = [
    {
      evidence: claim1,
      title: 'Full Client Asset Ownership',
      description: 'You own 100% of your source code, deployment infrastructure, cloud databases, and documentation. No vendor lock-in. No proprietary platform rent.',
      check: 'Checkable in standard SOW IP assignment clause.'
    },
    {
      evidence: claim2,
      title: 'Deterministic Schema Gating',
      description: 'LLM agents never write directly to production databases. Every payload is parsed and validated by strict Zod schemas with mathematical checksums.',
      check: 'Inspectable in our live Break-It safety demo.'
    },
    {
      evidence: claim3,
      title: 'Immutable Audit Logging',
      description: 'Every automated event, API trigger, and human approval is logged with input hashes and timestamped supervisor tokens for full rollback security.',
      check: 'Verifiable in our system test harness.'
    }
  ];

  return (
    <section className="bg-bg-secondary py-32 sm:py-40 border-b border-border-color">
      <div className="max-w-7xl mx-auto px-6">
        
        <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-6 block">
          CHECKABLE CLAIMS
        </span>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 text-left">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text-primary leading-tight">
              Safety you can verify. Not marketing promises.
            </h2>
            <p className="text-base text-text-muted mt-4 font-normal">
              Three institutional safeguards built into every Vanthrope deployment.
            </p>
          </div>
          <Link
            href="/security"
            className="text-xs font-mono uppercase tracking-widest text-accent-steel hover:text-accent-steel-hover transition-steel flex items-center gap-1 shrink-0"
            style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
          >
            Review Security & Governance Pack <span className="text-sm">→</span>
          </Link>
        </div>

        {/* 3 Claims Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {claims.map((c, idx) => (
            <div
              key={idx}
              className="bg-bg-primary border border-border-steel/20 p-8 flex flex-col justify-between text-left"
            >
              <div>
                <TruthBadge evidenceId={c.evidence.id} className="mb-4" />
                <h3 className="text-xl font-bold tracking-tight text-text-primary uppercase mb-4">
                  {c.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed font-normal mb-6">
                  {c.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border-color text-xs font-mono text-accent-steel/80">
                {c.check}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
