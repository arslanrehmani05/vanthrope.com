export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] border-t border-border-color pt-24 pb-12 text-text-muted">
      <div className="max-w-7xl mx-auto px-6">
        {/* Three Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-start">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center text-text-primary">
              <span className="text-accent-gold font-black mr-2">{"//"}</span>
              <span className="font-black tracking-tight uppercase text-lg">Vanthrope</span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed max-w-xs">
              Operational AI systems engineered for businesses that cannot afford inefficiency.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col md:items-center">
            <div className="flex flex-col gap-3 text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent-steel mb-2">
                Navigation
              </span>
              <a 
                href="#capability" 
                className="text-xs hover:text-text-primary transition-steel py-1"
                style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
              >
                Capabilities
              </a>
              <a 
                href="#how-we-work" 
                className="text-xs hover:text-text-primary transition-steel py-1"
                style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
              >
                How We Work
              </a>
              <a 
                href="#proof" 
                className="text-xs hover:text-text-primary transition-steel py-1"
                style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
              >
                Operational Results
              </a>
              <a 
                href="#engagement" 
                className="text-xs hover:text-text-primary transition-steel py-1"
                style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
              >
                Assess Operation
              </a>
            </div>
          </div>

          {/* Column 3: arslanrehmani.com Link */}
          <div className="flex flex-col md:items-end">
            <div className="flex flex-col gap-3 md:items-end">
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent-steel mb-2">
                Founder
              </span>
              <a
                href="https://arslanrehmani.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-text-primary hover:text-accent-steel transition-steel flex items-center gap-1.5"
                style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
              >
                arslanrehmani.com
                <span className="text-[10px]">→</span>
              </a>
              <p className="text-[10px] text-text-subtle text-left md:text-right max-w-xs mt-1">
                AI Systems Consultant and developer behind TextileMode ERP and Belhide Ecommerce.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Strip with 1px steel border */}
        <div className="border-t border-border-steel/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-wider uppercase font-semibold text-text-subtle">
          <div>
            &copy; {currentYear} Vanthrope. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span>Institutional Grade AI</span>
            <span>Zero Hallucination Guarantee</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
