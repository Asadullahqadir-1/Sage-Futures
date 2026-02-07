
import React from 'react';
import Reveal from '../components/Reveal';

const Liquidity: React.FC = () => {
  return (
    <div className="fade-in pt-32 pb-24 bg-gradient-to-b from-brand-offwhite via-white to-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal as="div" className="max-w-3xl mb-24">
          <span className="text-brand-brass font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Systemic Fluidity</span>
          <h1 className="text-4xl md:text-6xl font-serif text-brand-sage mb-8">Liquidity</h1>
          <p className="text-xl text-brand-charcoal/60 leading-relaxed font-light italic">
            "Liquidity is the oxygen of delivery. When systems stagnate, care fails."
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-24">
          <Reveal as="div" className="space-y-16" delayMs={80}>
            <div>
              <h3 className="text-2xl font-serif text-brand-charcoal mb-4 flex items-center">
                <span className="w-8 h-px bg-brand-brass mr-4"></span> Capital Fluidity
              </h3>
              <p className="text-brand-charcoal/60 leading-relaxed">
                We assess how capital moves through your organization—not just its presence, but its velocity and impact. Our modeling ensures that resources reach the point of delivery with minimal structural friction.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-brand-charcoal mb-4 flex items-center">
                <span className="w-8 h-px bg-brand-brass mr-4"></span> Time Sovereignty
              </h3>
              <p className="text-brand-charcoal/60 leading-relaxed">
                Time is your most volatile asset. Sage Futures builds systems that reclaim professional time, transforming administrative drag into strategic opportunity and care quality.
              </p>
            </div>
          </Reveal>
          
          <Reveal as="div" className="bg-brand-offwhite/80 backdrop-blur-sm p-16 border border-brand-stone relative overflow-hidden" delayMs={160}>
            <h3 className="text-2xl font-serif text-brand-sage mb-6">Adaptive Resilience</h3>
            <p className="text-brand-charcoal/70 leading-relaxed mb-8">
              A liquid system is a resilient system. We design buffers and operational pathways that allow organizations to pivot during economic contraction or sudden systemic stress.
            </p>
            <div className="h-px bg-brand-stone w-full mb-8"></div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-brass">
              Resilience through engineering.
            </p>
            <div className="absolute top-0 right-0 p-8">
              <svg className="w-12 h-12 text-brand-stone/30" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-brand-brass/10 via-transparent to-transparent" />
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Liquidity;
