
import React from 'react';
import Reveal from '../components/Reveal';

// Central place to configure Amazon product/store URLs for each engagement.
// Replace these placeholders with your real Amazon links when ready.
const AMAZON_LINKS = {
  diagnostic: 'https://www.amazon.com/',
  projectDeposit: 'https://www.amazon.com/',
  tierOneRetainer: 'https://www.amazon.com/',
};

const openAmazon = (url: string) => {
  if (!url) return;
  window.open(url, '_blank', 'noopener,noreferrer');
};

const Pricing: React.FC = () => {

  return (
    <div className="fade-in pt-32 pb-24 bg-gradient-to-br from-brand-offwhite via-white to-brand-stone/10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal as="div" className="max-w-3xl mb-16">
          <span className="text-brand-brass font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Structural Investment</span>
          <h1 className="text-4xl md:text-6xl font-serif text-brand-sage mb-6">Engagement Logic</h1>
          <p className="text-brand-charcoal/60 font-light leading-relaxed">
            Our pricing is transparent and value-driven, reflecting the high-stakes nature of systemic advisory.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Reveal as="div" className="bg-white/85 backdrop-blur-sm border border-brand-stone p-10 flex flex-col shadow-sm group hover:border-brand-brass hover:-translate-y-1 transition-all" delayMs={80}>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-brass mb-2">Initial Diagnostic</h3>
            <p className="text-brand-charcoal/60 text-xs mb-8">One-hour structural analysis session.</p>
            <div className="text-3xl font-serif text-brand-sage mb-auto">$450</div>
            <button 
              onClick={() => openAmazon(AMAZON_LINKS.diagnostic)}
              className="mt-8 w-full border border-brand-stone py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-sage hover:text-white hover:border-brand-sage transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-brass focus-visible:ring-offset-2 focus-visible:ring-offset-brand-offwhite"
            >
              Book Session
            </button>
          </Reveal>
          
          <Reveal as="div" className="bg-white/85 backdrop-blur-sm border border-brand-stone p-10 flex flex-col shadow-sm group hover:border-brand-brass hover:-translate-y-1 transition-all" delayMs={160}>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-brass mb-2">Project Deposit</h3>
            <p className="text-brand-charcoal/60 text-xs mb-8">Secure commencement of customized scope.</p>
            <div className="text-3xl font-serif text-brand-sage mb-auto">$1,500</div>
            <button 
              onClick={() => openAmazon(AMAZON_LINKS.projectDeposit)}
              className="mt-8 w-full border border-brand-stone py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-sage hover:text-white hover:border-brand-sage transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-brass focus-visible:ring-offset-2 focus-visible:ring-offset-brand-offwhite"
            >
              Initiate Project
            </button>
          </Reveal>

          <Reveal as="div" className="bg-brand-sage text-white p-10 flex flex-col md:col-span-2 lg:col-span-1 shadow-md relative overflow-hidden" delayMs={240}>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-brass mb-2">Tier 1 Retainer (Monthly)</h3>
            <p className="text-white/60 text-xs mb-8">Ongoing strategic oversight and priority access.</p>
            <div className="text-3xl font-serif mb-auto">$3,500<span className="text-sm font-sans ml-1 text-white/50">/mo</span></div>
            <button 
              onClick={() => openAmazon(AMAZON_LINKS.tierOneRetainer)}
              className="mt-8 w-full bg-brand-brass py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-sage transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-sage relative z-10"
            >
              Subscribe to Tier 1
            </button>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-brand-evergreen/20 opacity-70" />
          </Reveal>
        </div>

        <div className="bg-white border border-brand-stone p-8 text-center">
          <p className="text-xs tracking-widest text-brand-charcoal/40 uppercase font-bold">
            Secure checkout is completed via Amazon. No card details are processed on this site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
