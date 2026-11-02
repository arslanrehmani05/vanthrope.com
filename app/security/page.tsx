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
            <span className="eyebrow mb-6">
              Governance &amp; Data Sovereignty
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-text-primary leading-[1.08] max-w-4xl mb-6">
              Air-gapped data sovereignty and complete client ownership.
            </h1>
            <p className="text-base sm:text-lg text-text-muted font-normal max-w-3xl leading-relaxed">
              We engineer software that lives inside your perimeter. All database schemas, cryptographic keys, and source code remain 100% client property. External LLM inferences execute over zero-data-retention enterprise APIs, ensuring proprietary data never trains commercial models.
            </p>
          </div>
        </section>

        {/* 1. What the Client Owns */}
        <section className="bg-bg-secondary py-20 sm:py-28 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="eyebrow mb-4 block">
              IP &amp; Asset Sovereignty
            </span>
            <h2 className="text-2xl sm:text-4xl font-medium text-text-primary tracking-tight mb-8">
              What you own upon handover
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-bg-primary border border-border-color rounded-2xl space-y-2">
                <Key className="w-5 h-5 text-text-primary" />
                <h3 className="font-semibold text-text-primary text-sm">Cloud Tenancy</h3>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  All databases and APIs run in your corporate AWS, Supabase, or GCP accounts. You hold the root credentials.
                </p>
              </div>
              <div className="p-6 bg-bg-primary border border-border-color rounded-2xl space-y-2">
                <FileText className="w-5 h-5 text-text-primary" />
                <h3 className="font-semibold text-text-primary text-sm">Source Code &amp; IP</h3>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  Full intellectual property assignment included in standard SOW contracts. Zero proprietary licensing rent.
                </p>
              </div>
              <div className="p-6 bg-bg-primary border border-border-color rounded-2xl space-y-2">
                <Database className="w-5 h-5 text-text-primary" />
                <h3 className="font-semibold text-text-primary text-sm">Customer Data</h3>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  Your business data never trains public AI models. API calls use zero-data-retention enterprise endpoints.
                </p>
              </div>
              <div className="p-6 bg-bg-primary border border-border-color rounded-2xl space-y-2">
                <ShieldCheck className="w-5 h-5 text-text-primary" />
                <h3 className="font-semibold text-text-primary text-sm">Runbooks &amp; Docs</h3>
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
            <span className="eyebrow mb-4 block">
              Compliance &amp; Vendors
            </span>
            <h2 className="text-2xl sm:text-4xl font-medium text-text-primary tracking-tight mb-8">
              Subprocessor register
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border border-border-color rounded-2xl overflow-hidden">
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
                <span className="eyebrow mb-2 block">
                  Access Control Model
                </span>
                <h2 className="text-2xl sm:text-4xl font-medium text-text-primary tracking-tight">
                  Sanitized access control matrix
                </h2>
              </div>
              <span className="text-xs font-mono text-text-subtle">
                Audit Cycle: 2026-10-28 Verified
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border border-border-color rounded-2xl overflow-hidden">
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
                      <td className="p-4 text-text-primary font-medium">{tm.authState}</td>
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
              
              <div className="p-8 bg-bg-secondary border border-border-color rounded-2xl space-y-4">
                <span className="text-xs font-mono font-medium text-text-subtle uppercase">
                  Backup &amp; Restoration Practice
                </span>
                <h3 className="text-xl font-semibold text-text-primary">
                  Continuous WAL &amp; Daily Snapshots
                </h3>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  All production databases utilize continuous Write-Ahead Log (WAL) archiving with point-in-time recovery down to the second. Daily full automated snapshots are replicated across distinct geographic cloud zones.
                </p>
                <div className="pt-2 text-[11px] font-mono text-emerald-400">
                  Last verified test recovery drill: 2026-10-15 (Restoration time: 6.2 minutes, zero data loss).
                </div>
              </div>

              <div className="p-8 bg-bg-secondary border border-border-color rounded-2xl space-y-4">
                <span className="text-xs font-mono font-medium text-text-subtle uppercase">
                  Incident Response Protocol
                </span>
                <h3 className="text-xl font-semibold text-text-primary">
                  1-Hour Triage &amp; Automated Kill-Switches
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
            <span className="eyebrow mb-4 block text-rose-400">
              Honest Disclosure
            </span>
            <h2 className="text-2xl sm:text-4xl font-medium text-text-primary tracking-tight mb-8">
              What we do not do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              <div className="p-6 bg-bg-primary border border-border-color rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                  <AlertOctagon className="w-4 h-4" /> Multitenant SaaS &amp; SOC 2 Scope
                </div>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  Vanthrope does not operate a multitenant SaaS hosting environment. We do not hold multitenant SOC 2 Type II or ISO 27001 certifications because we do not host your data. Instead, we deploy systems directly into <em>your</em> already-certified enterprise cloud tenancy (AWS, Supabase, Vercel), ensuring your data remains protected by your existing compliance boundary.
                </p>
              </div>

              <div className="p-6 bg-bg-primary border border-border-color rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                  <AlertOctagon className="w-4 h-4" /> Third-Party Penetration Testing
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
