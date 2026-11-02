import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import FinalCta from '@/components/home/final-cta';
import LocationBar from '@/components/common/location-bar';
import { Metadata } from 'next';
import { ShieldCheck, Lock, FileText, CheckCircle2, AlertOctagon, Key, Database } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Security, Ownership & Trust | Vanthrope',
  description: 'Client cloud asset ownership, access controls, subprocessors, backup restoration audit, and clear boundaries of our security posture.',
};

export default function SecurityPage() {
  const subprocessors = [
    { name: 'Vercel Inc.', purpose: 'Edge hosting & frontend delivery', location: 'USA / Global Edge', dpaInPlace: true },
    { name: 'Supabase Inc. / AWS', purpose: 'PostgreSQL database & object storage', location: 'EU / US Regions (Client choice)', dpaInPlace: true },
    { name: 'Anthropic / OpenAI (API)', purpose: 'LLM reasoning engine (Zero-retention API)', location: 'USA (API Tier - No data training)', dpaInPlace: true },
  ];

  const testMatrix = [
    { role: 'Anonymous Visitor', scope: 'Public website only', dbAccess: 'None', writeAccess: 'None', authState: 'Unauthenticated' },
    { role: 'Inactive / Suspended User', scope: 'Session terminated', dbAccess: 'Immediate Revocation', writeAccess: 'Blocked', authState: 'Session Expired' },
    { role: 'Operational Clerk', scope: 'Staging intake & draft creation', dbAccess: 'Row-Level Security (Own assigned queue)', writeAccess: 'Drafts only', authState: 'MFA Enforced' },
    { role: 'Client Executive / Owner', scope: 'Full organizational ledger & exports', dbAccess: 'Full Org Tenant Access', writeAccess: 'Full Approval Authority', authState: 'MFA Enforced' },
  ];

  return (
    <>
      <Navigation />
      <main className="flex flex-col pt-20">
        <LocationBar />

        {/* Header */}
        <section className="bg-bg-primary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-6 block">
              GOVERNANCE & DATA SOVEREIGNTY
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-text-primary uppercase leading-tight max-w-4xl mb-6">
              Security by design. Absolute client ownership.
            </h1>
            <p className="text-base sm:text-lg text-text-muted font-normal max-w-3xl leading-relaxed">
              We operate under an institutional standard of engineering. You own every line of code, cloud database, and secret key. We maintain clear boundaries, signed DPAs, and verifiable audit trails.
            </p>
          </div>
        </section>

        {/* 1. What the Client Owns */}
        <section className="bg-bg-secondary py-20 sm:py-28 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-4 block">
              IP & ASSET SOVEREIGNTY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-text-primary uppercase tracking-tight mb-8">
              What you own upon handover
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-bg-primary border border-border-color space-y-2">
                <Key className="w-5 h-5 text-accent-steel" />
                <h3 className="font-bold text-text-primary uppercase text-sm">Cloud Tenancy</h3>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  All databases and APIs run in your corporate AWS, Supabase, or GCP accounts. You hold the root credentials.
                </p>
              </div>
              <div className="p-6 bg-bg-primary border border-border-color space-y-2">
                <FileText className="w-5 h-5 text-accent-steel" />
                <h3 className="font-bold text-text-primary uppercase text-sm">Source Code & IP</h3>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  Full intellectual property assignment included in standard SOW contracts. Zero proprietary licensing rent.
                </p>
              </div>
              <div className="p-6 bg-bg-primary border border-border-color space-y-2">
                <Database className="w-5 h-5 text-accent-steel" />
                <h3 className="font-bold text-text-primary uppercase text-sm">Customer Data</h3>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  Your business data never trains public AI models. API calls use zero-data-retention enterprise endpoints.
                </p>
              </div>
              <div className="p-6 bg-bg-primary border border-border-color space-y-2">
                <ShieldCheck className="w-5 h-5 text-accent-steel" />
                <h3 className="font-bold text-text-primary uppercase text-sm">Runbooks & Docs</h3>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  Complete architecture diagrams, step-by-step developer runbooks, and staff training guides.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Subprocessors & DPA */}
        <section className="bg-bg-primary py-20 sm:py-28 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-4 block">
              COMPLIANCE & VENDORS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-text-primary uppercase tracking-tight mb-8">
              Subprocessor register
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border border-border-color">
                <thead className="bg-bg-secondary text-text-muted uppercase border-b border-border-color">
                  <tr>
                    <th className="p-4">Subprocessor</th>
                    <th className="p-4">Purpose</th>
                    <th className="p-4">Processing Location</th>
                    <th className="p-4">DPA Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-color text-text-primary">
                  {subprocessors.map((sub, idx) => (
                    <tr key={idx} className="hover:bg-bg-secondary/50">
                      <td className="p-4 font-bold">{sub.name}</td>
                      <td className="p-4 text-text-muted">{sub.purpose}</td>
                      <td className="p-4 text-text-muted">{sub.location}</td>
                      <td className="p-4 text-emerald-400 font-bold">Standard Contractual Clauses Signed</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-text-subtle mt-4 font-mono">
              Mutual Non-Disclosure Agreement (NDA) and formal Data Processing Agreement (DPA) executed prior to diagnostic data review.
            </p>
          </div>
        </section>

        {/* 3. Sanitized Test Matrix */}
        <section className="bg-bg-secondary py-20 sm:py-28 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-2 block">
                  ACCESS CONTROL MODEL
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-text-primary uppercase tracking-tight">
                  Sanitized access control matrix
                </h2>
              </div>
              <span className="text-xs font-mono text-text-subtle">
                Audit Cycle: 2026-10-28 Verified
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border border-border-color">
                <thead className="bg-bg-primary text-text-muted uppercase border-b border-border-color">
                  <tr>
                    <th className="p-4">Role / Persona</th>
                    <th className="p-4">Permitted Scope</th>
                    <th className="p-4">Database Layer Access</th>
                    <th className="p-4">Write Authority</th>
                    <th className="p-4">Authentication Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-color text-text-primary">
                  {testMatrix.map((tm, idx) => (
                    <tr key={idx} className="hover:bg-bg-primary/50">
                      <td className="p-4 font-bold">{tm.role}</td>
                      <td className="p-4 text-text-muted">{tm.scope}</td>
                      <td className="p-4 text-text-muted">{tm.dbAccess}</td>
                      <td className="p-4 text-text-muted">{tm.writeAccess}</td>
                      <td className="p-4 text-accent-steel">{tm.authState}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 4. Backup & Incident Process */}
        <section className="bg-bg-primary py-20 sm:py-28 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              <div className="p-8 bg-bg-secondary border border-border-color space-y-4">
                <span className="text-xs font-mono font-bold text-accent-gold uppercase">
                  Backup & Restoration Practice
                </span>
                <h3 className="text-xl font-bold text-text-primary uppercase">
                  Continuous WAL & Daily Snapshots
                </h3>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  All production databases utilize continuous Write-Ahead Log (WAL) archiving with point-in-time recovery down to the second. Daily full automated snapshots are replicated across distinct geographic cloud zones.
                </p>
                <div className="pt-2 text-[11px] font-mono text-emerald-400">
                  Last verified test recovery drill: 2026-10-15 (Restoration time: 6.2 minutes, zero data loss).
                </div>
              </div>

              <div className="p-8 bg-bg-secondary border border-border-color space-y-4">
                <span className="text-xs font-mono font-bold text-accent-steel uppercase">
                  Incident Response Protocol
                </span>
                <h3 className="text-xl font-bold text-text-primary uppercase">
                  1-Hour Triage & Automated Kill-Switches
                </h3>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  Any detected anomaly or API threshold violation immediately trips the system circuit breaker, pausing automated transactions and dispatching alerts to on-call engineering.
                </p>
                <div className="pt-2 text-[11px] font-mono text-text-subtle">
                  Client incident notification SLA: Within 2 hours of verified security event.
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. What We Do NOT Do */}
        <section className="bg-bg-secondary py-20 sm:py-28 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-rose-400 mb-4 block">
              HONEST DISCLOSURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-text-primary uppercase tracking-tight mb-8">
              What we do NOT do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              <div className="p-6 bg-bg-primary border border-border-color space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase">
                  <AlertOctagon className="w-4 h-4" /> We are NOT SOC 2 Certified
                </div>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  Vanthrope is a founder-led engineering firm, not an enterprise corporate conglomerate. We do not hold SOC 2 Type II or ISO 27001 certifications. Instead, we deploy systems directly into <em>your</em> already-certified enterprise cloud tenancy (AWS, Supabase, Vercel), ensuring your data remains protected by your existing compliance boundary.
                </p>
              </div>

              <div className="p-6 bg-bg-primary border border-border-color space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase">
                  <AlertOctagon className="w-4 h-4" /> We do NOT perform Penetration Testing
                </div>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  We are software and operational systems architects, not external red-team pen-testers. We engineer secure architectures with strict schema validation and MFA, but recommend dedicated third-party security auditors for regulated enterprise penetration tests.
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
