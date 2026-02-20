import React from "react";
import Reveal from "../components/Reveal";
import EcosystemPuzzle from "../components/EcosystemPuzzle";

const CommunityWealthManagement: React.FC = () => {
  return (
    <div className="fade-in pt-32 pb-24 bg-brand-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <Reveal as="section" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-6">Community Wealth Management</h1>
              <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
                Community Wealth Management is the coordinated stewardship of land, capital, infrastructure, and relationships to ensure long-term stability and prosperity in South DeKalb County.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800"
                alt="Community building and collaboration"
                className="w-full h-56 md:h-64 object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* Systems-level rationale – why this matters structurally */}
        <Reveal as="section" className="space-y-4" delayMs={40}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">Why This Matters</h2>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            Without coordinated stewardship of land, capital, and development, communities experience displacement, fragmented growth, and short-term interventions that fail to build durable wealth.
          </p>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            Community Wealth Management addresses this by aligning development, capital, and governance strategies toward long-term stability, equitable asset ownership, and non-extractive wealth creation.
          </p>
        </Reveal>

        <Reveal as="section" className="py-8" delayMs={80}>
          <EcosystemPuzzle />
        </Reveal>

        <Reveal as="section" className="space-y-6" delayMs={120}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">Pillars</h2>
          <ul className="space-y-3 text-base md:text-lg text-brand-charcoal/80 list-disc list-inside max-w-3xl">
            <li>Sustainable development</li>
            <li>Capital alignment</li>
            <li>Asset retention</li>
            <li>Governance coordination</li>
            <li>Ecological integration</li>
          </ul>
        </Reveal>
      </div>
    </div>
  );
};

export default CommunityWealthManagement;
