import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import FinalCta from '@/components/home/final-cta';
import { SOLUTIONS_DATA } from '@/lib/solutions-data';
import { Metadata } from 'next';
import { CheckCircle2, XCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return Object.keys(SOLUTIONS_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = SOLUTIONS_DATA[params.slug];
  if (!item) return { title: 'Solution Not Found | Vanthrope' };
  return {
    title: `${item.title} | Solutions | Vanthrope`,
    description: item.clientProblemStatement.slice(0, 160),
  };
}

export default function SolutionDetailPage({ params }: Props) {
  const sol = SOLUTIONS_DATA[params.slug];
  if (!sol) notFound();

  return (
    <>
      <Navigation />
      <main className="flex flex-col pt-20">
        
        {/* Breadcrumb Header */}
        <div className="bg-bg-secondary border-b border-border-color py-4 px-6">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-mono text-text-subtle">
            <Link href="/solutions" className="hover:text-text-primary transition-steel flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Solutions
            </Link>
            <span>/</span>
            <span className="text-text-muted">{sol.title}</span>
          </div>
        </div>

        {/* Hero Section: Problem in the Client's Words */}
        <section className="bg-bg-primary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="eyebrow mb-6">
              {sol.categoryEyebrow}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-text-primary leading-[1.08] max-w-4xl mb-8">
              {sol.title}
            </h1>

            {/* Quote block */}
            <div className="p-8 bg-bg-secondary border-l-2 border-border-color max-w-3xl my-8 rounded-r-2xl">
              <div className="text-[11px] font-mono uppercase tracking-widest text-text-subtle mb-3">
                The Problem In The Client&apos;s Words
              </div>
              <p className="text-base sm:text-lg text-text-primary font-normal leading-relaxed italic">
                {sol.clientProblemStatement}
              </p>
            </div>

            {/* Direct Answer: What Changes */}
            <div className="mt-8 max-w-3xl">
              <h2 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-2">
                What Changes
              </h2>
              <p className="text-base text-text-muted leading-relaxed font-normal">
                {sol.whatChanges}
              </p>
            </div>
          </div>
        </section>

        {/* What We Build & Workflow Diagram */}
        <section className="bg-bg-secondary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: What We Build (7 cols) */}
              <div className="lg:col-span-7 flex flex-col text-left">
                <span className="eyebrow mb-4 block">
                  Technical Deliverables
                </span>
                <h2 className="text-2xl sm:text-4xl font-medium text-text-primary tracking-tight mb-8">
                  What we build
                </h2>
                <div className="space-y-4">
                  {sol.whatWeBuild.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-bg-primary border border-border-color rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-text-muted leading-relaxed font-normal">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Workflow Diagram (5 cols) */}
              <div className="lg:col-span-5 flex flex-col text-left">
                <span className="eyebrow mb-4 block">
                  Architecture
                </span>
                <h2 className="text-2xl sm:text-4xl font-medium text-text-primary tracking-tight mb-8">
                  Workflow pipeline
                </h2>
                <div className="bg-bg-primary border border-border-color rounded-2xl p-6 font-mono text-xs text-text-muted">
                  <div className="text-[10px] text-text-subtle uppercase tracking-widest mb-4">
                    Deterministic Action Flow
                  </div>
                  <div className="p-4 bg-bg-secondary border border-border-color rounded-xl text-text-primary font-mono text-xs leading-loose">
                    {sol.workflowDiagramText}
                  </div>
                  <div className="mt-4 text-[11px] text-text-subtle">
                    Every step is logged with input hashes, timestamped tokens, and explicit exception gates.
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Relevant Tool & Related Case Study */}
        <section className="bg-bg-primary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              
              {/* Relevant Tool */}
              <div className="bg-bg-secondary border border-border-color rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-text-subtle mb-2 block">
                    Interactive Diagnostic Tool
                  </span>
                  <h3 className="text-xl font-semibold text-text-primary tracking-tight mb-3">
                    {sol.relevantToolName}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed mb-6">
                    Audit your current operations immediately in-browser with zero signup and client-side execution.
                  </p>
                </div>
                <div>
                  <Link
                    href={`/tools/${sol.relevantToolSlug}`}
                    className="inline-flex items-center gap-2 text-xs font-medium text-text-primary hover:text-text-muted transition-colors"
                    style={{ minHeight: '44px' }}
                  >
                    Open Diagnostic Tool <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Related Case Study */}
              <div className="bg-bg-secondary border border-border-color rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-text-subtle mb-2 block">
                    Production Evidence
                  </span>
                  <h3 className="text-xl font-semibold text-text-primary tracking-tight mb-3">
                    {sol.relatedCaseName}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed mb-6">
                    Review the verified case study, architecture blueprint, failure modes encountered, and measurable results.
                  </p>
                </div>
                <div>
                  <Link
                    href={`/work/${sol.relatedCaseSlug}`}
                    className="inline-flex items-center gap-2 text-xs font-medium text-text-primary hover:text-text-muted transition-colors"
                    style={{ minHeight: '44px' }}
                  >
                    Inspect Full Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* What This Is Not */}
        <section className="bg-bg-secondary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="eyebrow mb-4 block">
              Honest Boundaries
            </span>
            <h2 className="text-2xl sm:text-4xl font-medium text-text-primary tracking-tight mb-8">
              What this is not
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {sol.whatThisIsNot.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-6 bg-bg-primary border border-border-color rounded-2xl">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-text-muted leading-relaxed font-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Short FAQ of Real Questions Only */}
        <section className="bg-bg-primary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="eyebrow mb-4 block">
              Practical FAQ
            </span>
            <h2 className="text-2xl sm:text-4xl font-medium text-text-primary tracking-tight mb-10">
              Questions real operations teams ask
            </h2>
            <div className="space-y-6 max-w-3xl">
              {sol.faq.map((f, idx) => (
                <div key={idx} className="p-6 bg-bg-secondary border border-border-color rounded-2xl">
                  <h3 className="text-sm font-semibold text-text-primary tracking-tight mb-2">
                    {f.q}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed font-normal">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
