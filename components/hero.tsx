export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-bg-primary">
      {/* Geometric background grid overlay at 3% opacity */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-[0.03]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-8">
        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-text-primary leading-[1.1] max-w-3xl">
          Operational AI Systems for Businesses That Cannot Afford Inefficiency.
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-lg text-text-primary/50 font-normal leading-relaxed max-w-2xl">
          Vanthrope designs, builds, and deploys AI agent systems that replace manual operations permanently. We work with a small number of clients. We do not work with everyone.
        </p>

        {/* CTA Button */}
        <div className="mt-4">
          <a
            href="#engagement"
            className="bg-accent-steel hover:bg-accent-steel-hover text-bg-primary font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-none transition-steel"
            style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
          >
            Assess your operation
          </a>
        </div>

        {/* Footnote */}
        <p className="text-[10px] uppercase tracking-widest text-text-primary/30 font-semibold mt-4">
          vanthrope.com — Founded by Arslan Rehmani
        </p>
      </div>
    </section>
  );
}
