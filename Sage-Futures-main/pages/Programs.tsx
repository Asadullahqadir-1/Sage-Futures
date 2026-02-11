import React from 'react';

const Programs: React.FC = () => (
  <div className="fade-in pt-20">
    <section className="py-24 bg-brand-offwhite border-b border-brand-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-6">Programs & Service Areas</h1>
        <p className="text-lg text-brand-charcoal/85 mb-8">Sage Futures operates as a nonprofit CDC. Our work is organized into three primary categories, each with a distinct initiative and framing:</p>

        {/* Community Development */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-serif text-brand-sage mb-4">A. Community Development</h2>
          <h3 className="text-xl font-bold text-brand-charcoal mb-2">Triple U Initiative</h3>
          <ul className="list-disc list-inside text-brand-charcoal/80 space-y-2">
            <li>Community capacity building</li>
            <li>Cooperative economics</li>
            <li>Systems empowerment</li>
            <li>Collective infrastructure</li>
          </ul>
          <p className="mt-4 text-sm text-brand-charcoal/70">Framing: programmatic, community-facing.</p>
        </div>

        {/* Funding & Grant Readiness */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-serif text-brand-sage mb-4">B. Funding & Grant Readiness</h2>
          <h3 className="text-xl font-bold text-brand-charcoal mb-2">Liquidity Initiative</h3>
          <ul className="list-disc list-inside text-brand-charcoal/80 space-y-2">
            <li>Grant readiness</li>
            <li>Capital access</li>
            <li>Revenue diversification</li>
            <li>Funding systems development</li>
          </ul>
          <p className="mt-4 text-sm text-brand-charcoal/70">Framing: financial sustainability support for organizations.</p>
        </div>

        {/* Strategic Advisory & Technical Assistance */}
        <div>
          <h2 className="text-2xl md:text-3xl font-serif text-brand-sage mb-4">C. Strategic Advisory & Technical Assistance</h2>
          <h3 className="text-xl font-bold text-brand-charcoal mb-2">Unfinished Business Initiative</h3>
          <ul className="list-disc list-inside text-brand-charcoal/80 space-y-2">
            <li>Organizational assessment</li>
            <li>Institutional alignment</li>
            <li>Systems repair</li>
            <li>Governance strengthening</li>
          </ul>
          <p className="mt-4 text-sm text-brand-charcoal/70">Framing: structured technical assistance, not personal coaching.</p>
        </div>

        {/* Engagement CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6">
          <a href="/contact" className="bg-brand-sage text-white px-10 py-5 text-center text-xs font-bold uppercase tracking-widest hover:bg-brand-brass transition-all duration-300 shadow-sm transform hover:-translate-y-0.5 active:translate-y-0">Request an Intake Conversation</a>
          <a href="/partnerships" className="bg-brand-brass text-white px-10 py-5 text-center text-xs font-bold uppercase tracking-widest hover:bg-brand-sage transition-all duration-300 shadow-sm transform hover:-translate-y-0.5 active:translate-y-0">Explore Partnership Opportunities</a>
        </div>
      </div>
    </section>
  </div>
);

export default Programs;
