import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import FinalCta from '@/components/home/final-cta';
import LocationBar from '@/components/common/location-bar';
import Link from 'next/link';
import { Metadata } from 'next';
import { TOOLS_DIRECTORY } from '@/lib/tools-data';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Operational Diagnostic Tools | Vanthrope',
  description: '7 free, in-browser diagnostic tools. No email signups, client-side execution, visible formulas, and zero server data uploads.',
};

export default function ToolsHubPage() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col pt-20">
        <LocationBar />

        {/* Header */}
        <section className="bg-bg-primary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-6 block">
              DIAGNOSTIC SUITE
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-text-primary uppercase leading-tight max-w-4xl mb-6">
              7 in-browser operational tools. Zero signup required.
            </h1>
            <p className="text-base sm:text-lg text-text-muted font-normal max-w-3xl leading-relaxed">
              We never gate diagnostic results behind email walls. Every tool runs transparently in your browser, displays its formulas and assumptions, cites dated sources, and allows free PDF or printable export.
            </p>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="bg-bg-secondary py-20 sm:py-28 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {TOOLS_DIRECTORY.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={tool.slug}
                    className="bg-bg-primary border border-border-steel/20 p-8 flex flex-col justify-between transition-steel hover:border-accent-steel/50"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-border-color mb-6">
                        <Icon className="w-6 h-6 text-accent-steel" />
                        <span className="text-[10px] font-mono text-accent-gold uppercase tracking-wider">
                          {tool.badge}
                        </span>
                      </div>

                      <h2 className="text-xl font-black text-text-primary uppercase tracking-tight mb-2">
                        {tool.title}
                      </h2>

                      <div className="text-xs font-mono text-accent-steel mb-4">
                        {tool.tagline}
                      </div>

                      <p className="text-xs text-text-muted leading-relaxed font-normal mb-8">
                        {tool.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border-color">
                      <Link
                        href={`/tools/${tool.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent-steel hover:text-accent-steel-hover transition-steel"
                        style={{ minHeight: '44px' }}
                      >
                        Launch Interactive Tool <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
