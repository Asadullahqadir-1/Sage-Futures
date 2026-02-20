import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import EcosystemPuzzle from '../components/EcosystemPuzzle';

const Home: React.FC = () => {
  return (
    <div className="fade-in pt-20">
      {/* Hero - Community building */}
      <section className="relative min-h-[90vh] py-24 md:py-36 bg-brand-offwhite border-b border-brand-stone overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=2070"
            alt="Community building and involvement"
            className="w-full h-full object-cover opacity-40 grayscale-[0.3] contrast-125"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-offwhite/90 via-brand-offwhite/85 to-brand-sage/40 mix-blend-multiply z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <Reveal as="div" className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-brand-charcoal leading-tight mb-6">
              Community Wealth Infrastructure for South DeKalb
            </h1>
            <p className="text-lg md:text-xl text-brand-charcoal/85 leading-relaxed font-light max-w-2xl">
              Sage Futures is a South DeKalb–based 501(c)(3) Community Development Corporation advancing equitable, sustainable development, capital readiness, and community partnerships.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="bg-brand-sage text-white px-10 py-5 text-center text-xs font-bold uppercase tracking-widest hover:bg-brand-brass transition-all duration-300 shadow-sm transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Partner With Us
              </Link>
              <Link
                to="/programs"
                className="border border-brand-sage text-brand-sage px-10 py-5 text-center text-xs font-bold uppercase tracking-widest hover:bg-brand-sage hover:text-white transition-all duration-300 shadow-sm transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore Our Work
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute right-0 bottom-0 w-1/4 h-full bg-brand-stone/20 hidden lg:block -skew-x-[20deg] origin-top translate-x-24 z-10" aria-hidden="true" />
      </section>

      {/* Mission Snapshot with Community Involvement Image */}
      <section className="py-24 bg-white border-b border-brand-stone/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="div" className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-brass">Mission Snapshot</p>
              <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
                Sage Futures advances long-term community wealth stability in South DeKalb County through sustainable development, capital alignment, and non-extractive economic strategy.
              </p>
              <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
                We focus on building durable systems of land stewardship, financial readiness, and development coordination that strengthen underserved communities.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800"
                alt="Community involvement and collaboration"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ecosystem Puzzle - 6 Focus Areas */}
      <section className="py-24 bg-brand-offwhite">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="div" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-brand-sage mb-4">Our Ecosystem</h2>
            <p className="text-base md:text-lg text-brand-charcoal/75 max-w-2xl">
              Six interconnected focus areas that build community wealth infrastructure in South DeKalb.
            </p>
          </Reveal>
          <Reveal as="div" delayMs={80}>
            <EcosystemPuzzle />
          </Reveal>
        </div>
      </section>

      {/* Our Focus Areas - 6 Pillars with clear mapping */}
      <section className="py-24 bg-white border-t border-brand-stone/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="div" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-brand-sage mb-4">Our Focus Areas</h2>
            <p className="text-base md:text-lg text-brand-charcoal/75 max-w-2xl">
              Capital readiness, asset stewardship, sustainable land use, youth pipeline, enterprise incubation, and training infrastructure.
            </p>
          </Reveal>
          <Reveal as="div" className="grid md:grid-cols-2 gap-6">
            <div className="bg-brand-offwhite p-6 border-l-4 border-brand-sage">
              <h3 className="text-base font-serif text-brand-charcoal font-semibold mb-1">1. Capital Readiness</h3>
              <p className="text-xs text-brand-brass font-medium mb-2">Liquidity</p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Preparing small businesses, families, and development initiatives to access aligned funding pathways.
              </p>
            </div>
            <div className="bg-brand-offwhite p-6 border-l-4 border-brand-sage">
              <h3 className="text-base font-serif text-brand-charcoal font-semibold mb-1">2. Asset Stewardship</h3>
              <p className="text-xs text-brand-brass font-medium mb-2">Unfinished Business</p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Strategic advisory and technical assistance for institutions working through legacy constraints and systems repair.
              </p>
            </div>
            <div className="bg-brand-offwhite p-6 border-l-4 border-brand-sage">
              <h3 className="text-base font-serif text-brand-charcoal font-semibold mb-1">3. Sustainable Land Use</h3>
              <p className="text-xs text-brand-brass font-medium mb-2">Goddesses Garden</p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Land stewardship, environmental education, and sustainable food systems in South DeKalb.
              </p>
            </div>
            <div className="bg-brand-offwhite p-6 border-l-4 border-brand-sage">
              <h3 className="text-base font-serif text-brand-charcoal font-semibold mb-1">4. Youth Pipeline</h3>
              <p className="text-xs text-brand-brass font-medium mb-2">WOW Kids</p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Youth-focused programming building environmental awareness and intergenerational connection.
              </p>
            </div>
            <div className="bg-brand-offwhite p-6 border-l-4 border-brand-sage">
              <h3 className="text-base font-serif text-brand-charcoal font-semibold mb-1">5. Enterprise Incubation</h3>
              <p className="text-xs text-brand-brass font-medium mb-2">EcoBator</p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Supporting emerging initiatives in sustainability and community-based innovation within South DeKalb County.
              </p>
            </div>
            <div className="bg-brand-offwhite p-6 border-l-4 border-brand-sage">
              <h3 className="text-base font-serif text-brand-charcoal font-semibold mb-1">6. Training Infrastructure</h3>
              <p className="text-xs text-brand-brass font-medium mb-2">Triple U + Village</p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Governance and collective infrastructure training, relational coordination models, and Village Workshops.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why This Work Matters – contextual development gap */}
      <section className="py-20 bg-brand-offwhite border-t border-brand-stone/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="div" className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-brand-sage mb-2">
              The Challenge We Address
            </h2>
            <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
              South DeKalb has experienced long-term disinvestment, fragmented development, and limited access to coordinated capital and infrastructure planning.
            </p>
            <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
              Sage Futures exists to address these gaps by aligning equitable development, capital readiness, and stewardship strategies that support long-term community stability and locally held wealth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Garden Section with Image */}
      <section className="py-24 bg-brand-offwhite border-t border-brand-stone/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="div" className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-brass mb-4">Sustainable Land Use</p>
              <h2 className="text-2xl md:text-3xl font-serif text-brand-charcoal mb-6">Goddesses Garden</h2>
              <p className="text-base text-brand-charcoal/80 leading-relaxed mb-4">
                Community gardens and sustainable land use anchor our work in South DeKalb. Goddesses Garden advances land stewardship, environmental education, and sustainable food systems—building resilience and connection to place.
              </p>
              <Link
                to="/programs"
                className="inline-block text-brand-sage font-semibold text-sm uppercase tracking-widest hover:text-brand-brass transition-colors"
              >
                Learn more about our programs →
              </Link>
            </div>
            <div className="order-1 md:order-2 relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800"
                alt="Community garden - sustainable land use"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Demonstrated Capacity */}
      <section className="py-24 bg-white border-t border-brand-stone/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="div" className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif text-brand-sage">Demonstrated Capacity</h2>
            <p className="text-base md:text-lg text-brand-charcoal/75 leading-relaxed">
              Sage Futures has delivered:
            </p>
            <ul className="list-disc list-inside text-base md:text-lg text-brand-charcoal/80 space-y-3">
              <li>Community-based sustainability programs</li>
              <li>Governance and collective infrastructure training</li>
              <li>Capital readiness and funding advisory support</li>
              <li>Strategic development advisement for emerging initiatives</li>
            </ul>
            <p className="text-base md:text-lg text-brand-charcoal/75 leading-relaxed">
              Through these engagements, we have strengthened financial positioning, institutional clarity, and long-term sustainability for partners in South DeKalb and Metro Atlanta.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Footer Line */}
      <section className="py-12 bg-brand-offwhite border-t border-brand-stone/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs md:text-sm text-brand-charcoal/60 leading-relaxed italic">
            This work is informed by Empress Evolutionary Economics (EEE), a sustainability-centered framework developed by Nia Harper.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
