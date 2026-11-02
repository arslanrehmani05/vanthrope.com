import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import FinalCta from '@/components/home/final-cta';
import LocationBar from '@/components/common/location-bar';
import ResourceCards from '@/components/resources/resource-cards';
import { Metadata } from 'next';
import { Download, FileText, CheckCircle2, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Operational Resources & Playbooks | Vanthrope',
  description: 'Downloadable worksheets, vendor evaluation scorecards, acceptance test templates, and engineering playbooks. Zero email walls.',
};

const PLAYBOOKS = [
  {
    title: 'Process Mapping Worksheet',
    type: 'Interactive PDF / Template',
    desc: 'Structured 4-page worksheet for interviewing line clerks, identifying shadow Excel files, and mapping handoff bottlenecks.',
    filename: 'process-mapping-worksheet.pdf'
  },
  {
    title: 'Requirements & Scope Checklist',
    type: 'Markdown / Checklist',
    desc: 'Pre-flight technical checklist covering API authentication, edge cases, error rate thresholds, and backup expectations.',
    filename: 'requirements-scope-checklist.pdf'
  },
  {
    title: 'Vendor Evaluation Scorecard',
    type: 'Spreadsheet / Scorecard',
    desc: 'Weighted decision scorecard for evaluating software proposals, consultants, and internal builds without marketing bias.',
    filename: 'vendor-evaluation-scorecard.xlsx'
  },
  {
    title: 'SOW & Acceptance-Test Template',
    type: 'Contract Template',
    desc: 'Standard milestone-gated agreement with written acceptance test specifications and full intellectual property assignment.',
    filename: 'sow-acceptance-test-template.pdf'
  },
  {
    title: 'Spreadsheet-to-System Guide',
    type: 'Technical Guide',
    desc: 'Step-by-step engineering roadmap for migrating fragile multi-tab workbooks into Postgres without halting ongoing factory operations.',
    filename: 'spreadsheet-to-system-guide.pdf'
  },
  {
    title: 'Agents Without the Hype',
    type: 'Architectural Whitepaper',
    desc: 'Clear, plain-English breakdown of when to deploy an LLM agent, when a cron script is better, and how to trap hallucinations deterministically.',
    filename: 'agents-without-the-hype.pdf'
  }
];

export default function ResourcesPage() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col pt-20">
        <LocationBar />

        {/* Header */}
        <section className="bg-bg-primary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="eyebrow mb-6">
              Playbooks &amp; Worksheets
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-text-primary leading-[1.08] max-w-4xl mb-6">
              Practical tools. No email gating.
            </h1>
            <p className="text-base sm:text-lg text-text-muted font-normal max-w-3xl leading-relaxed">
              Every playbook, checklist, and engineering template we publish is freely downloadable. We do not hide educational material behind lead-capture email gates.
            </p>
          </div>
        </section>

        {/* Playbooks Grid */}
        <section className="bg-bg-secondary py-20 sm:py-28 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6">
            <ResourceCards playbooks={PLAYBOOKS} />
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
