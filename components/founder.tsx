import Image from 'next/image';

export default function Founder() {
  return (
    <section id="founder" className="bg-bg-primary py-40 sm:py-44 border-b border-border-color">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text Biography (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel">
              THE FIRM
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text-primary leading-tight">
              Founded by Arslan Rehmani.
            </h2>
            <div className="space-y-4 text-sm text-text-muted leading-relaxed font-normal">
              <p>
                Arslan Rehmani operates at the unique intersection of corporate finance and full-stack software engineering. As an ACCA-qualified finance professional turned developer, he designs systems that directly influence balance sheets and business margins.
              </p>
              <p>
                Since 2016, he has dedicated himself to a daily learning path across system architectures, data structures, and modern cloud deployment models. This dual capability allows him to diagnose operational leaks in mid-market companies and translate them directly into production-grade software.
              </p>
              <p>
                As the developer behind TextileMode ERP and Belhide Ecommerce Intelligence, Arslan established Vanthrope to build custom, automated AI agents that permanently eliminate administrative coordination costs.
              </p>
            </div>
          </div>

          {/* Right Column: Headshot and Website Link (5 columns) */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            {/* Portrait Image container with 1px steel border */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 border border-accent-steel overflow-hidden bg-bg-secondary">
              <Image
                src="/headshot.png"
                alt="Arslan Rehmani portrait"
                fill
                sizes="(max-width: 768px) 256px, 288px"
                className="object-cover grayscale"
                priority
              />
            </div>

            {/* Link below photo in steel */}
            <a
              href="https://arslanrehmani.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-accent-steel hover:text-accent-steel-hover transition-steel mt-2"
              style={{ minHeight: '44px' }}
            >
              arslanrehmani.com <span className="text-sm">→</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
