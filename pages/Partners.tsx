import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const Partners: React.FC = () => {
  return (
    <div className="fade-in pt-32 pb-24 bg-gradient-to-br from-brand-offwhite via-white to-brand-stone/10 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <Reveal as="section" className="space-y-6">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-brass">Partners</p>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-sage">Partners</h1>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed max-w-3xl">
            Sage Futures collaborates with municipal, community, capital, and institutional partners to advance sustainable development and community wealth infrastructure in South DeKalb County.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-8" delayMs={80}>
          <div className="space-y-3">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">Types of Partners</h2>
            <ul className="list-disc list-inside text-base md:text-lg text-brand-charcoal/80 space-y-2 max-w-3xl">
              <li>Municipal partners</li>
              <li>Community-based organizations and coalitions</li>
              <li>Capital partners and values-aligned funders</li>
              <li>Institutional partners and anchor organizations</li>
            </ul>
          </div>
        </Reveal>

        <Reveal as="section" className="space-y-6 pt-8 border-t border-brand-stone/30" delayMs={140}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-sage">Begin a Conversation</h2>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed max-w-3xl">
            If you are exploring partnership, funding alignment, or institutional strengthening, the first step is a brief intake conversation to understand context, readiness, and fit with existing initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="flex-1 sm:flex-none text-center bg-brand-sage text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-brass transition-all duration-300"
            >
              Partner With Us
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Partners;
