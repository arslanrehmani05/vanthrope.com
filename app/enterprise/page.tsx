import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import FinalCta from '@/components/home/final-cta';
import LocationBar from '@/components/common/location-bar';
import EnterpriseCards from '@/components/enterprise/enterprise-cards';
import { getPlaceholder } from '@/lib/truth-gate';
import { Metadata } from 'next';
import { FileText, Download, ShieldCheck, Database, Lock, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Enterprise Governance Pack | Vanthrope',
  description: 'Downloadable enterprise capabilities statement, security questionnaire answers, data-flow diagrams, DPA templates, and backup restoration policy.',
};

export default function EnterprisePackPage() {
  const insuranceStatus = getPlaceholder('INSURANCE_STATUS') || 'Professional indemnity details available in contract review';

  const documents = [
    { title: 'Enterprise Capabilities Statement (2026)', size: 'PDF · 1.4 MB', desc: 'Overview of engineering standards, architecture schemas, and engagement models.' },
    { title: 'Standard Data Processing Agreement (DPA)', size: 'PDF · 480 KB', desc: 'UK GDPR and EU SCC compliant data processing terms and subprocessor schedule.' },
    { title: 'Standard Statement of Work (SOW) Template', size: 'PDF · 320 KB', desc: 'Milestone-gated contract with acceptance test criteria and full IP assignment.' },
    { title: 'Security Questionnaire Standard Answers', size: 'PDF · 610 KB', desc: 'Plain, accurate answers to standard vendor security assessments.' },
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
              Due Diligence &amp; Governance
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-text-primary leading-[1.08] max-w-4xl mb-6">
              Enterprise Governance Pack.
            </h1>
            <p className="text-base sm:text-lg text-text-muted font-normal max-w-3xl leading-relaxed">
              Standard legal templates, security questionnaire disclosures, architectural data-flow policies, and insurance statuses compiled for your legal and technical evaluation.
            </p>
          </div>
        </section>

        {/* Downloadable Documents */}
        <section className="bg-bg-secondary py-20 sm:py-28 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="eyebrow mb-4 block">
              Governance Assets
            </span>
            <h2 className="text-2xl sm:text-4xl font-medium text-text-primary tracking-tight mb-8">
              Standard legal &amp; architecture packs
            </h2>
            <EnterpriseCards documents={documents} />
          </div>
        </section>

        {/* Security Questionnaire Summary Answers */}
        <section className="bg-bg-primary py-20 sm:py-28 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="eyebrow mb-4 block">
              Questionnaire Disclosures
            </span>
            <h2 className="text-2xl sm:text-4xl font-medium text-text-primary tracking-tight mb-8">
              Standard vendor security answers
            </h2>
            <div className="space-y-6 max-w-4xl text-xs font-mono">
              
              <div className="p-6 bg-bg-secondary border border-border-color rounded-2xl space-y-2">
                <span className="text-text-subtle uppercase block text-[10px]">
                  Q1: Where does client customer and transaction data reside?
                </span>
                <p className="text-text-primary font-normal leading-relaxed">
                  A: Exclusively inside the client’s own cloud tenancy (AWS / Supabase / Vercel). Vanthrope maintains zero multitenant data stores. Client holds all root keys and access control lists.
                </p>
              </div>

              <div className="p-6 bg-bg-secondary border border-border-color rounded-2xl space-y-2">
                <span className="text-text-subtle uppercase block text-[10px]">
                  Q2: Does Vanthrope maintain SOC 2 or ISO 27001 multitenant hosting?
                </span>
                <p className="text-text-primary font-normal leading-relaxed">
                  A: Vanthrope does not operate a multitenant SaaS hosting environment. All production code, database instances, and data pipelines are provisioned exclusively within the client’s own SOC 2 / ISO 27001 certified cloud infrastructure (AWS / GCP / Azure / Supabase), directly inheriting your enterprise security perimeter and compliance policies.
                </p>
              </div>

              <div className="p-6 bg-bg-secondary border border-border-color rounded-2xl space-y-2">
                <span className="text-text-subtle uppercase block text-[10px]">
                  Q3: What is the insurance coverage status?
                </span>
                <p className="text-text-primary font-normal leading-relaxed">
                  A: {insuranceStatus}.
                </p>
              </div>

              <div className="p-6 bg-bg-secondary border border-border-color rounded-2xl space-y-2">
                <span className="text-text-subtle uppercase block text-[10px]">
                  Q4: What is the backup and recovery testing protocol?
                </span>
                <p className="text-text-primary font-normal leading-relaxed">
                  A: Continuous PostgreSQL Write-Ahead Log (WAL) archiving with point-in-time recovery. Point-in-time drill verified quarterly (last drill: 2026-10-15).
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
