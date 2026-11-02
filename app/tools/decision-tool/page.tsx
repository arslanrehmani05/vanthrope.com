'use client';

import { useState } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import LocationBar from '@/components/common/location-bar';
import Link from 'next/link';
import { ArrowLeft, Printer, CheckCircle2, AlertOctagon, HelpCircle } from 'lucide-react';

export default function DecisionToolPage() {
  const [dataCleanliness, setDataCleanliness] = useState<'structured' | 'unstructured'>('unstructured');
  const [ruleStability, setRuleStability] = useState<'static' | 'dynamic'>('static');
  const [errorTolerance, setErrorTolerance] = useState<'zero' | 'tolerant'>('zero');
  const [actionType, setActionType] = useState<'api_sync' | 'semantic_decision'>('api_sync');
  const [volumePerDay, setVolumePerDay] = useState<'low' | 'high'>('high');

  // Decision logic favoring simpler deterministic option
  let recommendation: 'WORKFLOW' | 'AGENT' | 'HYBRID' = 'WORKFLOW';
  let reason = '';

  if (dataCleanliness === 'structured' && ruleStability === 'static') {
    recommendation = 'WORKFLOW';
    reason = 'Your data is already structured and your rules are stable. A deterministic code pipeline (Node/Python script, SQL query, or cron worker) is 100x cheaper, faster, and avoids generative variability. Do NOT build an AI agent here.';
  } else if (dataCleanliness === 'unstructured' && actionType === 'semantic_decision') {
    recommendation = 'AGENT';
    reason = 'Your inputs require semantic parsing (e.g. natural language email bodies, noisy scanned PDFs) where fixed regex fails. An AI agent is justified, but must be wrapped in deterministic schema validation and human approval gates.';
  } else {
    recommendation = 'HYBRID';
    reason = 'A hybrid architecture is best: use an LLM parser strictly for data extraction and normalization into JSON, then hand off execution to a 100% deterministic rule engine with human approval on high-value exceptions.';
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Navigation />
      <main className="flex flex-col pt-20">
        <LocationBar />

        {/* Breadcrumb Header */}
        <div className="bg-bg-secondary border-b border-border-color py-4 px-6 print:hidden">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-mono text-text-subtle">
            <Link href="/tools" className="hover:text-text-primary transition-steel flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Tools
            </Link>
            <span>/</span>
            <span className="text-text-muted">Agent-or-Workflow Decision Tool</span>
          </div>
        </div>

        {/* Tool Header */}
        <section className="bg-bg-primary py-16 sm:py-20 border-b border-border-color text-left">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-3 block">
              TOOL 03 // ARCHITECTURAL SIZING RUBRIC
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-text-primary uppercase leading-tight max-w-4xl mb-4">
              Agent-or-Workflow Decision Tool
            </h1>
            <p className="text-sm text-text-muted max-w-3xl leading-relaxed font-normal">
              Most business problems do NOT need an AI agent. This diagnostic rubric evaluates your input structure, risk tolerance, and rules to recommend the simplest, most reliable technology choice.
            </p>
          </div>
        </section>

        {/* Questions & Assessment */}
        <section className="bg-bg-secondary py-16 sm:py-24 border-b border-border-color text-left">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Questions (6 cols) */}
              <div className="lg:col-span-6 bg-bg-primary p-8 border border-border-color space-y-6 print:hidden">
                <div className="flex items-center justify-between pb-4 border-b border-border-color">
                  <span className="text-xs font-mono uppercase font-bold text-accent-steel">
                    5 Diagnostic Questions
                  </span>
                  <span className="text-[10px] font-mono text-text-subtle">
                    Anti-Hype Sizing
                  </span>
                </div>

                <div className="space-y-6 text-xs font-mono">
                  <div>
                    <label className="text-text-muted block mb-2 font-bold">
                      1. How does your incoming data arrive?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setDataCleanliness('structured')}
                        className={`p-3 text-left border transition-steel ${
                          dataCleanliness === 'structured' ? 'border-accent-steel bg-bg-surface text-text-primary font-bold' : 'border-border-color text-text-subtle'
                        }`}
                      >
                        Structured (APIs, clean CSVs, database tables)
                      </button>
                      <button
                        onClick={() => setDataCleanliness('unstructured')}
                        className={`p-3 text-left border transition-steel ${
                          dataCleanliness === 'unstructured' ? 'border-accent-steel bg-bg-surface text-text-primary font-bold' : 'border-border-color text-text-subtle'
                        }`}
                      >
                        Unstructured (PDFs, noisy emails, free text)
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-text-muted block mb-2 font-bold">
                      2. Are the decision rules fixed or subjective?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setRuleStability('static')}
                        className={`p-3 text-left border transition-steel ${
                          ruleStability === 'static' ? 'border-accent-steel bg-bg-surface text-text-primary font-bold' : 'border-border-color text-text-subtle'
                        }`}
                      >
                        Fixed (Always calculate X based on threshold Y)
                      </button>
                      <button
                        onClick={() => setRuleStability('dynamic')}
                        className={`p-3 text-left border transition-steel ${
                          ruleStability === 'dynamic' ? 'border-accent-steel bg-bg-surface text-text-primary font-bold' : 'border-border-color text-text-subtle'
                        }`}
                      >
                        Subjective (Requires contextual nuance)
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-text-muted block mb-2 font-bold">
                      3. What is your tolerance for algorithmic variance?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setErrorTolerance('zero')}
                        className={`p-3 text-left border transition-steel ${
                          errorTolerance === 'zero' ? 'border-accent-steel bg-bg-surface text-text-primary font-bold' : 'border-border-color text-text-subtle'
                        }`}
                      >
                        Zero Tolerance (General Ledger, tax, payroll)
                      </button>
                      <button
                        onClick={() => setErrorTolerance('tolerant')}
                        className={`p-3 text-left border transition-steel ${
                          errorTolerance === 'tolerant' ? 'border-accent-steel bg-bg-surface text-text-primary font-bold' : 'border-border-color text-text-subtle'
                        }`}
                      >
                        Tolerant with Review (Drafting emails, triage)
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-text-muted block mb-2 font-bold">
                      4. Primary task action required:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setActionType('api_sync')}
                        className={`p-3 text-left border transition-steel ${
                          actionType === 'api_sync' ? 'border-accent-steel bg-bg-surface text-text-primary font-bold' : 'border-border-color text-text-subtle'
                        }`}
                      >
                        Syncing APIs / moving rows between tools
                      </button>
                      <button
                        onClick={() => setActionType('semantic_decision')}
                        className={`p-3 text-left border transition-steel ${
                          actionType === 'semantic_decision' ? 'border-accent-steel bg-bg-surface text-text-primary font-bold' : 'border-border-color text-text-subtle'
                        }`}
                      >
                        Interpreting meaning and classifying requests
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Recommendation Card (6 cols) */}
              <div className="lg:col-span-6 bg-bg-primary p-8 sm:p-10 border border-border-steel/30 space-y-6 font-mono text-left">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border-color">
                  <div>
                    <span className="text-[10px] uppercase text-accent-gold block font-bold">
                      Architectural Recommendation (Estimate)
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-text-primary tracking-tight mt-1">
                      {recommendation === 'WORKFLOW' ? 'Simple Deterministic Workflow' : recommendation === 'AGENT' ? 'AI Agent with Strict Schema' : 'Hybrid Pipeline'}
                    </div>
                  </div>
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-primary border border-border-color px-3 py-1.5 transition-steel print:hidden"
                    style={{ minHeight: '36px' }}
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Assessment</span>
                  </button>
                </div>

                {/* Recommendation explanation */}
                <div className="p-4 bg-bg-secondary border border-border-color text-xs text-text-primary leading-relaxed font-normal">
                  <strong className="text-accent-steel block font-mono mb-2 uppercase">
                    Why this option:
                  </strong>
                  {reason}
                </div>

                {/* Sizing Comparison Matrix */}
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between p-3 bg-bg-surface border border-border-color">
                    <span className="text-text-muted">Complexity Score:</span>
                    <span className="text-text-primary font-bold">{recommendation === 'WORKFLOW' ? 'Low (Recommended)' : recommendation === 'HYBRID' ? 'Medium' : 'High'}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-bg-surface border border-border-color">
                    <span className="text-text-muted">Running Cost / Month:</span>
                    <span className="text-emerald-400 font-bold">{recommendation === 'WORKFLOW' ? '$5 - $25 (Cloud cron)' : '$40 - $180 (LLM tokens)'}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-bg-surface border border-border-color">
                    <span className="text-text-muted">Failure Probability:</span>
                    <span className="text-text-primary font-bold">{recommendation === 'WORKFLOW' ? '0.0% (Zero hallucination)' : 'Gated by supervisor check'}</span>
                  </div>
                </div>

                <div className="pt-2 text-[10px] text-text-subtle">
                  Rubric rule: Recommends the simplest reliable option per Vanthrope engineering standard.
                </div>

              </div>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
