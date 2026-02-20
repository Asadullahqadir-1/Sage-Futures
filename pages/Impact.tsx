import React from "react";
import Reveal from "../components/Reveal";

const Impact: React.FC = () => {
  return (
    <div className="fade-in pt-32 pb-24 bg-brand-offwhite min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <Reveal as="section" className="space-y-4 text-center md:text-left">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-brass">Impact</p>
          <h1 className="text-3xl md:text-4xl font-serif text-brand-charcoal">
            Community Development, Institutional Strengthening, and Systems Change
          </h1>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed max-w-3xl">
            As a nonprofit community development corporation (CDC), Sage Futures measures impact in terms of strengthened
            institutions, more sustainable community systems, and improved conditions for those carrying care and coordination work.
          </p>
        </Reveal>

        <Reveal as="section" className="grid md:grid-cols-3 gap-8" delayMs={80}>
          <div className="bg-white p-6 border border-brand-stone/30 shadow-sm card-animated rounded-sm">
            <h2 className="text-xs font-bold tracking-[0.25em] uppercase text-brand-sage mb-3">
              Community Development
            </h2>
            <ul className="text-sm text-brand-charcoal/80 space-y-2 list-disc list-inside">
              <li>Strengthened local networks and cooperative projects</li>
              <li>Community-led infrastructure and shared governance practices</li>
              <li>Reduced isolation for those carrying disproportionate responsibility</li>
            </ul>
          </div>

          <div className="bg-white p-6 border border-brand-stone/30 shadow-sm card-animated rounded-sm">
            <h2 className="text-xs font-bold tracking-[0.25em] uppercase text-brand-sage mb-3">
              Funding &amp; Grant Readiness
            </h2>
            <ul className="text-sm text-brand-charcoal/80 space-y-2 list-disc list-inside">
              <li>Improved alignment between funding, mission, and capacity</li>
              <li>More resilient revenue portfolios for partner organizations</li>
              <li>Clearer internal systems for stewarding grants and capital</li>
            </ul>
          </div>

          <div className="bg-white p-6 border border-brand-stone/30 shadow-sm card-animated rounded-sm">
            <h2 className="text-xs font-bold tracking-[0.25em] uppercase text-brand-sage mb-3">
              Strategic Advisory &amp; Technical Assistance
            </h2>
            <ul className="text-sm text-brand-charcoal/80 space-y-2 list-disc list-inside">
              <li>Governance and decision-making structures that reduce burnout</li>
              <li>Repaired systems that better hold program growth</li>
              <li>Institutional practices that reflect stated values in daily operations</li>
            </ul>
          </div>
        </Reveal>

        <Reveal as="section" className="space-y-4" delayMs={140}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">How We Document Impact</h2>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed max-w-3xl">
            Impact stories are developed in partnership with organizations and communities. Rather than treating partners as
            clients or transactions, Sage Futures prioritizes long-term, trust-based relationships and shared accountability for outcomes.
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default Impact;

