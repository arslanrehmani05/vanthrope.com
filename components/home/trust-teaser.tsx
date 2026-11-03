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
    <section className="py-32 sm:py-40 border-b border-border-color relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <span className="eyebrow mb-6">
          Checkable Claims
        </span>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 text-left">
          <div className="max-w-3xl">
            <h2 className="headline text-3xl md:text-5xl font-medium tracking-tight text-text-primary leading-tight">
              Safety you can verify. Not marketing promises.
            </h2>
            <p className="text-base text-text-muted mt-4 font-normal">
              Three institutional safeguards built into every Vanthrope deployment.
            </p>
          </div>
          <Link
            href="/security"
            className="text-xs font-mono text-text-muted hover:text-text-primary transition-colors flex items-center gap-1 shrink-0"
            style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
          >
            Review Security &amp; Governance Pack <span className="text-sm">→</span>
          </Link>
        </div>

        {/* 3 Claims Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {claims.map((c, idx) => (
            <div
              key={idx}
              className="bg-bg-secondary/70 backdrop-blur-md rounded-2xl border border-border-color p-8 flex flex-col justify-between text-left transition-all hover:border-white/20 hover:-translate-y-0.5"
            >
              <div>
                <TruthBadge evidenceId={c.evidence.id} className="mb-4" />
                <h3 className="text-xl font-semibold tracking-tight text-text-primary mb-3">
                  {c.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed font-normal mb-6">
                  {c.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border-color text-xs font-mono text-text-muted">
                {c.check}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
