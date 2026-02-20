
import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const Partnerships: React.FC = () => {
  return (
    <div className="fade-in pt-32 pb-24 bg-gradient-to-br from-brand-offwhite via-white to-brand-stone/10 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <Reveal as="section" className="space-y-6">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-brass">Partnerships</p>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-sage">Partnerships &amp; Engagement</h1>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed max-w-3xl">
            Sage Futures is a nonprofit community development corporation (CDC). Programs may generate earned revenue, but the
            organization itself is mission-first and governance-aligned—not a commercial advisory firm.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-4" delayMs={60}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-sage">How Engagements Work</h2>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed max-w-3xl">
            Engagements are customized based on scope, alignment, and organizational needs. Sage Futures offers a mix of
            grant-supported, subsidized, and fee-for-service support depending on the initiative and partner.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-8" delayMs={120}>
          <div className="space-y-3">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-brand-brass">Types of Partners</h3>
            <ul className="list-disc list-inside text-sm md:text-base text-brand-charcoal/80 space-y-2">
              <li>Community-based organizations and coalitions</li>
              <li>Nonprofit institutions and anchor organizations</li>
              <li>Public sector entities and educational institutions</li>
              <li>Philanthropic partners and values-aligned funders</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-brand-brass">Engagement Principles</h3>
            <ul className="list-disc list-inside text-sm md:text-base text-brand-charcoal/80 space-y-2">
              <li>Centering community development and shared benefit</li>
              <li>Prioritizing institutional strengthening over short-term fixes</li>
              <li>Treating technical assistance as capacity building, not personal coaching</li>
              <li>Aligning resources with governance, mission, and human capacity</li>
            </ul>
          </div>
        </Reveal>

        <Reveal as="section" className="space-y-6" delayMs={180}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-sage">Begin a Conversation</h2>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed max-w-3xl">
            If you are exploring partnership, funding alignment, or institutional strengthening, the first step is a brief intake
            conversation to understand context, readiness, and fit with existing initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="flex-1 sm:flex-none text-center bg-brand-sage text-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-brand-brass transition-all duration-300"
            >
              Request an Intake Conversation
            </Link>
            <Link
              to="/contact"
              className="flex-1 sm:flex-none text-center border border-brand-sage text-brand-sage px-8 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-brand-sage hover:text-white transition-all duration-300"
            >
              Explore Partnership Opportunities
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Partnerships;

