import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import VerifiedProofStrip from '@/components/home/verified-proof-strip';
import FourPillars from '@/components/home/four-pillars';
import SolutionsGrid from '@/components/home/solutions-grid';
import FeaturedWork from '@/components/home/featured-work';
import FiveStepMethod from '@/components/home/five-step-method';
import TrustTeaser from '@/components/home/trust-teaser';
import FinalCta from '@/components/home/final-cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col">
        {/* Outcome-focused Hero with Location line & 20s Looping Demo */}
        <Hero />

        {/* Verified Proof Strip linking directly to Truth Gate Evidence IDs */}
        <VerifiedProofStrip />

        {/* 4 Pillars: Discovery, Safety, Measurability, Ownership */}
        <FourPillars />

        {/* Solutions Grid by Problem */}
        <SolutionsGrid />

        {/* Featured Case Studies with Case Type & Maturity Badges */}
        <FeaturedWork />

        {/* 5-Step Method with Deliverables, Prerequisites, and Failure Modes */}
        <FiveStepMethod />

        {/* Trust Teaser: 3 Checkable Claims */}
        <TrustTeaser />

        {/* Final Conversion CTAs */}
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
