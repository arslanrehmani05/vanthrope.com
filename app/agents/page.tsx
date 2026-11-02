import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import FinalCta from '@/components/home/final-cta';
import LocationBar from '@/components/common/location-bar';
import SafeExplorer from '@/components/agents/safe-explorer';
import BreakItDemo from '@/components/agents/break-it-demo';
import AgentCapabilityCards from '@/components/agents/agent-capability-cards';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Agents & Deterministic Architecture | Vanthrope',
  description: 'Plain explainer of AI agents vs deterministic workflows, capability cards, safety guardrails, and synthetic anomaly break-it simulation.',
};

export default function AgentsPage() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col pt-20">
        <LocationBar />

        {/* Hero Section: Plain Explainer */}
        <section className="bg-bg-primary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="eyebrow mb-6">
              Architecture &amp; Capabilities
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-text-primary leading-[1.08] max-w-4xl mb-8">
              Autonomous agent pipelines bounded by deterministic safety gates.
            </h1>

            {/* Plain Explainer Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl my-10">
              
              {/* Deterministic Workflow */}
              <div className="p-8 bg-bg-secondary border border-border-color rounded-2xl text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-text-subtle block mb-2">
                  Traditional Automation
                </span>
                <h2 className="text-xl font-semibold text-text-primary mb-3">
                  Deterministic Workflow (Rule-Based)
                </h2>
                <p className="text-xs text-text-muted leading-relaxed font-normal mb-4">
                  If Input A happens, execute Step B every single time. Ideal for clean API transfers, rigid database triggers, and straightforward math calculations. Requires zero AI.
                </p>
                <div className="text-xs font-mono text-emerald-400">
                  Best For: Predictable, structured, unchanging rules.
                </div>
              </div>

              {/* AI Agent */}
              <div className="p-8 bg-bg-secondary border border-border-color rounded-2xl text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-text-subtle block mb-2">
                  Operational Agent
                </span>
                <h2 className="text-xl font-semibold text-text-primary mb-3">
                  AI Agent (Adaptive Execution)
                </h2>
                <p className="text-xs text-text-muted leading-relaxed font-normal mb-4">
                  Extracts semantic intent and tabular entities from unstructured human inputs (bills of lading, multi-page vendor invoices, dispatch emails). LLMs are restricted to parsing and transformation; all state mutations are gated by cryptographic checksums and strict database schemas.
                </p>
                <div className="text-xs font-mono text-text-primary">
                  Best For: Messy real-world data and unstructured intake.
                </div>
              </div>

            </div>

            <div className="p-6 bg-bg-surface border border-border-color rounded-2xl max-w-3xl flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-text-muted font-normal">
                Unsure if your problem needs an agent or a simple rule? Use our transparent rubric.
              </span>
              <Link
                href="/tools/decision-tool"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-text-primary hover:text-text-muted transition-colors"
                style={{ minHeight: '44px' }}
              >
                Open Agent-or-Workflow Decision Tool <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>

        {/* 8 Capability Cards */}
        <section className="bg-bg-secondary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col text-left max-w-3xl mb-16">
              <span className="eyebrow mb-4 block">
                Production Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium text-text-primary tracking-tight">
                8 operational agent jobs
              </h2>
              <p className="text-sm text-text-muted mt-3 font-normal">
                Every agent card details exact permissions, forbidden actions, failure behaviors, and human approval checkpoints.
              </p>
            </div>

            <AgentCapabilityCards />
          </div>
        </section>

        {/* Interactive "How an agent is kept safe" Explorer */}
        <section className="bg-bg-primary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6">
            <SafeExplorer />
          </div>
        </section>

        {/* Interactive "Break It" Demo Simulator */}
        <section className="bg-bg-secondary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6">
            <BreakItDemo />
          </div>
        </section>

        {/* When NOT to use an agent */}
        <section className="bg-bg-primary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="eyebrow mb-4 block text-rose-400">
              Engineering Integrity
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-text-primary tracking-tight mb-8">
              When not to use an AI agent
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
              
              <div className="p-6 bg-bg-secondary border border-border-color rounded-2xl">
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm mb-3">
                  <XCircle className="w-4 h-4" /> Fixed Relational Data
                </div>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  If your data is already clean, structured, and has well-defined database keys, an SQL script or standard cron job is substantially cheaper, significantly faster, and perfectly reliable. Do not add an LLM where math already works.
                </p>
              </div>

              <div className="p-6 bg-bg-secondary border border-border-color rounded-2xl">
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm mb-3">
                  <XCircle className="w-4 h-4" /> Zero Autonomous Fund Movement
                </div>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  Transactional payouts, vendor banking adjustments, and treasury movements require cryptographic dual-authorization. Agents prepare staging proposals; human controllers execute the commitment.
                </p>
              </div>

              <div className="p-6 bg-bg-secondary border border-border-color rounded-2xl">
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm mb-3">
                  <XCircle className="w-4 h-4" /> Undefined Processes
                </div>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  If your team does not agree on the current rule for handling an exception, an agent will simply automate your internal confusion. The process must be diagnosed and agreed before code is written.
                </p>
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
