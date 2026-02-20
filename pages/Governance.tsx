import React from "react";
import Reveal from "../components/Reveal";
import founderImage from "../images/founder.jpg";

const Governance: React.FC = () => {
  return (
    <div className="fade-in pt-32 pb-24 bg-brand-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <Reveal as="section" className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal">Governance</h1>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            Sage Futures operates under clear governance structures with accountability to the communities we serve.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-6" delayMs={80}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">Board</h2>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            A governing board provides oversight, strategic direction, and fiduciary stewardship for Sage Futures.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-6" delayMs={120}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">Leadership</h2>
          <div className="grid gap-8 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:items-start">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 bg-brand-brass/20" aria-hidden="true" />
              <img
                src={founderImage}
                alt="Nia Harper"
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
            <div className="space-y-4 text-sm md:text-base text-brand-charcoal/80 leading-relaxed">
              <h3 className="text-xl md:text-2xl font-serif text-brand-charcoal">Nia Harper</h3>
              <p>
                Nia Harper has 15 years of policy, workforce, and strategic business development experience. She has worked in leadership roles across the private and public sectors, including the federal government, law firms, university systems, and large nonprofit organizations, focused on improving underserved communities in wealth creation and maintenance. Nia is a founding member of Sage Futures Community Development Corporation and previously served as a Sustainability Ambassador for the City of Atlanta.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className="space-y-4 pt-8 border-t border-brand-stone/30" delayMs={180}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">Statement of Accountability</h2>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            Sage Futures is committed to transparent operations, community-centered decision-making, and responsible stewardship of resources in South DeKalb County and Metro Atlanta.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-4" delayMs={220}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">Mission-Aligned Structure</h2>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            Our governance structure is designed to reflect Sage Futures’ commitment to equitable development, non-extractive capital, and shared stewardship. Board composition, advisory input, and committee focus areas are oriented toward Community Wealth Management and Community Capital in South DeKalb, with regular review to ensure alignment with our mission and the Empress Evolutionary Economics framework.
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default Governance;
