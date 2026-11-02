import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import FinalCta from '@/components/home/final-cta';
import TruthBadge from '@/components/common/truth-badge';
import { getCaseStudies, getCaseStudyBySlug } from '@/lib/sanity';
import { Metadata } from 'next';
import { ArrowLeft, CheckCircle2, AlertTriangle, ShieldCheck, Quote } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const cases = await getCaseStudies();
  return cases.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cs = await getCaseStudyBySlug(params.slug);
  if (!cs) return { title: 'Case Study Not Found | Vanthrope' };
  return {
    title: `${cs.title} | Case Study | Vanthrope`,
    description: cs.problem.slice(0, 160),
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const cs = await getCaseStudyBySlug(params.slug);
  if (!cs) notFound();

  return (
    <>
      <Navigation />
      <main className="flex flex-col pt-20">
        
        {/* Breadcrumb Header */}
        <div className="bg-bg-secondary border-b border-border-color py-4 px-6">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-mono text-text-subtle">
            <Link href="/work" className="hover:text-text-primary transition-steel flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Work
            </Link>
            <span>/</span>
            <span className="text-text-muted">{cs.title}</span>
          </div>
        </div>

        {/* Case Study Header & Metadata */}
        <section className="bg-bg-primary py-20 sm:py-28 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <TruthBadge
              caseType={cs.caseType}
              maturity={cs.maturity}
              evidenceId={cs.evidenceId}
              className="mb-6"
            />
            
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-text-primary uppercase leading-tight max-w-4xl mb-4">
              {cs.title}
            </h1>

            <p className="text-sm font-mono text-accent-steel mb-8">
              Context: {cs.clientContext}
            </p>

            {/* Problem in Their Words */}
            <div className="p-8 bg-bg-secondary border-l-2 border-accent-steel max-w-3xl mb-12">
              <span className="text-[10px] font-mono uppercase tracking-widest text-accent-steel block mb-2">
                The Operational Problem
              </span>
              <p className="text-base text-text-primary font-normal leading-relaxed italic">
                &ldquo;{cs.problem}&rdquo;
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl text-xs font-mono">
              <div className="p-4 bg-bg-surface border border-border-color">
                <span className="text-text-subtle block text-[10px] uppercase">Timeline</span>
                <span className="text-text-primary font-bold">{cs.timeline}</span>
              </div>
              <div className="p-4 bg-bg-surface border border-border-color">
                <span className="text-text-subtle block text-[10px] uppercase">Classification</span>
                <span className="text-accent-steel font-bold">{cs.caseType}</span>
              </div>
              <div className="p-4 bg-bg-surface border border-border-color">
                <span className="text-text-subtle block text-[10px] uppercase">Status</span>
                <span className="text-accent-gold font-bold">{cs.maturity}</span>
              </div>
              <div className="p-4 bg-bg-surface border border-border-color">
                <span className="text-text-subtle block text-[10px] uppercase">Truth Gate Evidence</span>
                <span className="text-text-primary font-bold">[{cs.evidenceId}]</span>
              </div>
            </div>

          </div>
        </section>

        {/* Constraints, Solution & Architecture */}
        <section className="bg-bg-secondary py-20 sm:py-28 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
              
              {/* Constraints & Solution (7 cols) */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-3 block">
                    OPERATIONAL CONSTRAINTS
                  </span>
                  <h2 className="text-2xl font-black text-text-primary uppercase tracking-tight mb-4">
                    Real-world boundaries
                  </h2>
                  <div className="space-y-2.5">
                    {cs.constraints.map((c, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5 text-xs text-text-muted font-normal">
                        <span className="text-accent-steel font-bold">▸</span>
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-3 block">
                    ENGINEERED SOLUTION
                  </span>
                  <h2 className="text-2xl font-black text-text-primary uppercase tracking-tight mb-4">
                    What was deployed
                  </h2>
                  <p className="text-sm text-text-muted leading-relaxed font-normal">
                    {cs.solution}
                  </p>
                </div>
              </div>

              {/* Safety Guardrails (5 cols) */}
              <div className="lg:col-span-5 bg-bg-primary border border-border-steel/30 p-8 space-y-6">
                <div className="flex items-center gap-2 text-accent-steel">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    How it is kept safe
                  </span>
                </div>
                <div className="space-y-4">
                  {cs.safetyGuardrails.map((g, gIdx) => (
                    <div key={gIdx} className="flex items-start gap-2 text-xs text-text-muted">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{g}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Results & Signed Quote */}
        <section className="bg-bg-primary py-20 sm:py-28 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-4 block">
              MEASURED OUTCOMES
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-text-primary uppercase tracking-tight mb-10">
              Verified Results
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl">
              {cs.results.map((r, rIdx) => (
                <div key={rIdx} className="p-6 bg-bg-secondary border border-border-color">
                  <div className="text-2xl sm:text-3xl font-black text-text-primary font-mono mb-2">
                    {r.measure}
                  </div>
                  <div className="text-xs text-text-muted">
                    <strong className="text-text-primary">Method:</strong> {r.method}
                  </div>
                  <div className="text-[11px] text-text-subtle mt-1 font-mono">
                    Evaluation Period: {r.period}
                  </div>
                </div>
              ))}
            </div>

            {/* Signed Quote */}
            {cs.signedQuote && (
              <div className="p-8 bg-bg-secondary border border-border-steel/20 max-w-3xl flex items-start gap-4">
                <Quote className="w-6 h-6 text-accent-steel shrink-0 mt-1" />
                <div className="space-y-2">
                  <p className="text-sm text-text-primary italic leading-relaxed">
                    &ldquo;{cs.signedQuote.quote}&rdquo;
                  </p>
                  <div className="text-xs font-mono text-text-subtle">
                    — {cs.signedQuote.author}, <span className="text-text-muted">{cs.signedQuote.role}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* What Went Wrong & What I'd Do Differently */}
        <section className="bg-bg-secondary py-20 sm:py-28 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
              
              {/* What Went Wrong */}
              <div className="space-y-4 p-8 bg-bg-primary border border-border-color">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase font-bold">
                  <AlertTriangle className="w-4 h-4" />
                  What Went Wrong & What Changed
                </div>
                <h3 className="text-lg font-bold text-text-primary uppercase">
                  The Friction Encountered
                </h3>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  <strong className="text-text-primary">Friction:</strong> {cs.whatWentWrong}
                </p>
                <p className="text-xs text-emerald-400 leading-relaxed font-normal">
                  <strong className="text-text-primary">Remediation:</strong> {cs.whatChanged}
                </p>
              </div>

              {/* What I'd Do Differently */}
              <div className="space-y-4 p-8 bg-bg-primary border border-border-color">
                <div className="font-mono text-xs uppercase font-bold text-accent-steel">
                  Post-Mortem Reflection
                </div>
                <h3 className="text-lg font-bold text-text-primary uppercase">
                  What I&apos;d Do Differently
                </h3>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  {cs.whatIdDoDifferently}
                </p>
                <div className="pt-4 border-t border-border-color text-[11px] font-mono text-text-subtle">
                  Engineering Stack: {cs.stack.join(', ')}
                </div>
              </div>

            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
