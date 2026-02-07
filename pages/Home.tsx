
import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const Home: React.FC = () => {
  return (
    <div className="fade-in pt-20">
      {/* Hero */}
      <section className="relative min-h-[90vh] py-24 md:py-36 bg-brand-offwhite border-b border-brand-stone overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
            alt="Systems Architecture"
            className="w-full h-full object-cover opacity-40 grayscale-[0.3] contrast-125"
          />
        </div>

        {/* Soft Sage Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-offwhite/90 via-brand-offwhite/85 to-brand-sage/40 mix-blend-multiply z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <Reveal as="div" className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-brand-charcoal leading-tight mb-6">
              Systems & Economic Advisory for Sustainable Futures
            </h1>
            <p className="text-lg md:text-xl text-brand-charcoal/85 leading-relaxed font-light max-w-2xl">
              Designing structures that align mission, money, and human capacity—so the work can last.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="bg-brand-sage text-white px-10 py-5 text-center text-xs font-bold uppercase tracking-widest hover:bg-brand-brass transition-all duration-300 shadow-sm transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Schedule a Discovery Conversation
              </Link>
            </div>
          </Reveal>
        </div>
        {/* Subtle decorative element */}
        <div className="absolute right-0 bottom-0 w-1/4 h-full bg-brand-stone/20 hidden lg:block -skew-x-[20deg] origin-top translate-x-24 z-10"></div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="div" className="space-y-6">
            <p className="text-base md:text-lg text-brand-charcoal/75 leading-relaxed">
              Sage Futures is a systems and economic advisory practice supporting organizations, communities, and leaders navigating complexity, growth, and change.
            </p>
            <p className="text-base md:text-lg text-brand-charcoal/75 leading-relaxed">
              We help clients move beyond short-term fixes toward durable, values-aligned structures—where care, capital, and coordination work together rather than compete.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-brand-offwhite">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="div" className="mb-10">
            <h2 className="text-2xl md:text-3xl font-serif text-brand-sage mb-4">What We Do</h2>
          </Reveal>
          <Reveal as="div" className="grid md:grid-cols-2 gap-6 text-sm md:text-base text-brand-charcoal/80">
            <ul className="space-y-3 list-disc list-inside">
              <li>Systems &amp; Economic Advisory</li>
              <li>Governance &amp; Program Redesign</li>
            </ul>
            <ul className="space-y-3 list-disc list-inside">
              <li>Strategic Funding &amp; Capital Alignment</li>
              <li>Community Ownership &amp; Infrastructure Design</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* From Strategy to Execution */}
      <section className="py-24 bg-white border-t border-brand-stone/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="div" className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif text-brand-sage">From Strategy to Execution</h2>
            <p className="text-base md:text-lg text-brand-charcoal/75 leading-relaxed">
              Many clients identify the need for capital to implement change.
            </p>
            <p className="text-base md:text-lg text-brand-charcoal/75 leading-relaxed">
              Where appropriate, Sage Futures offers access to Liquidity, a capital enablement platform supporting funding aligned with values and capacity.
            </p>
            <div className="pt-4">
              <Link
                to="/liquidity"
                className="inline-block text-xs font-bold uppercase tracking-[0.3em] px-8 py-4 border border-brand-sage text-brand-sage hover:bg-brand-sage hover:text-white transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Learn About Liquidity
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer Line */}
      <section className="py-12 bg-brand-offwhite border-t border-brand-stone/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs md:text-sm text-brand-charcoal/60 leading-relaxed italic">
            This work is informed by Empress Evolutionary Economics (EEE), a systems-based framework developed by Nia Harper.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
