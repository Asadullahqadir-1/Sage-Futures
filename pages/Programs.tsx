import React from 'react';
import Reveal from '../components/Reveal';

const Programs: React.FC = () => {
  return (
    <div className="fade-in pt-20">
      <section className="py-24 bg-brand-offwhite border-b border-brand-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="div" className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-6">Programs & Service Areas</h1>
            <p className="text-lg text-brand-charcoal/85 mb-8">Sage Futures operates as a nonprofit CDC, advancing community impact through three primary initiatives. Engagements are customized based on scope, alignment, and organizational needs. We offer grant-supported, subsidized, and fee-for-service support depending on the initiative and partner.</p>
          </Reveal>

          {/* Community Development */}
          <Reveal as="div" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-brand-sage mb-4">A. Community Development — Triple U Initiative</h2>
            <ul className="list-disc list-inside text-brand-charcoal/80 space-y-2">
              <li>Community capacity building</li>
              <li>Cooperative economics</li>
              <li>Systems empowerment</li>
              <li>Collective infrastructure</li>
            </ul>
            <p className="mt-4 text-sm text-brand-charcoal/70">Framing: programmatic, community-facing.</p>
          </Reveal>

          {/* Funding & Grant Readiness */}
          <Reveal as="div" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-brand-sage mb-4">B. Funding & Grant Readiness — Liquidity Initiative</h2>
            <ul className="list-disc list-inside text-brand-charcoal/80 space-y-2">
              <li>Grant readiness</li>
              <li>Capital access</li>
              <li>Revenue diversification</li>
              <li>Funding systems development</li>
            </ul>
            <p className="mt-4 text-sm text-brand-charcoal/70">Framing: financial sustainability support for organizations.</p>
          </Reveal>

          {/* Strategic Advisory & Technical Assistance */}
          <Reveal as="div">
            <h2 className="text-2xl md:text-3xl font-serif text-brand-sage mb-4">C. Strategic Advisory & Technical Assistance — Unfinished Business Initiative</h2>
            <ul className="list-disc list-inside text-brand-charcoal/80 space-y-2">
              <li>Organizational assessment</li>
              <li>Institutional alignment</li>
              <li>Systems repair</li>
              <li>Governance strengthening</li>
            </ul>
            <p className="mt-4 text-sm text-brand-charcoal/70">Framing: structured technical assistance, not personal coaching.</p>
          </Reveal>

          {/* Engagement CTA */}
          <Reveal as="div" className="mt-12">
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="/contact" className="bg-brand-sage text-white px-10 py-5 text-center text-xs font-bold uppercase tracking-widest hover:bg-brand-brass transition-all duration-300 shadow-sm transform hover:-translate-y-0.5 active:translate-y-0">Request an Intake Conversation</a>
              <a href="/partnerships" className="bg-brand-brass text-white px-10 py-5 text-center text-xs font-bold uppercase tracking-widest hover:bg-brand-sage transition-all duration-300 shadow-sm transform hover:-translate-y-0.5 active:translate-y-0">Explore Partnership Opportunities</a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Programs;
