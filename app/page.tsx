import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import WhatWeAreNot from '@/components/what-we-are-not';
import Capability from '@/components/capability';
import HowWeWork from '@/components/how-we-work';
import Proof from '@/components/proof';
import WhoWeWorkWith from '@/components/who-we-work-with';
import Founder from '@/components/founder';
import Engagement from '@/components/engagement';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col">
        <Hero />
        <WhatWeAreNot />
        <Capability />
        <HowWeWork />
        <Proof />
        <WhoWeWorkWith />
        <Founder />
        <Engagement />
      </main>
      <Footer />
    </>
  );
}
