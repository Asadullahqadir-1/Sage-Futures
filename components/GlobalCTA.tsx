import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Reveal from './Reveal';

const GlobalCTA: React.FC = () => {
  const location = useLocation();

  // Hide CTA on checkout and contact pages where a strong CTA already exists
  if (location.pathname === '/contact' || location.pathname === '/checkout') {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-sage via-brand-charcoal to-brand-sage text-brand-offwhite py-16 mt-24">
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-soft-light bg-[radial-gradient(circle_at_top_left,_rgba(247,246,242,0.35),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(140,122,74,0.4),_transparent_55%)]" />
      <Reveal as="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-2xl">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-stone/40 mb-4">Structural next steps</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-4">
            Ready to explore partnership or program fit?
          </h2>
          <p className="text-sm md:text-base text-brand-offwhite/80 leading-relaxed max-w-xl">
            Sage Futures is a South DeKalb–based Community Development Corporation. Engagements are customized based on scope, alignment, and organizational needs across our program areas.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Link
            to="/contact"
            className="flex-1 sm:flex-none text-center bg-brand-brass text-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-brand-sage transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Partner With Us
          </Link>
          <Link
            to="/programs"
            className="flex-1 sm:flex-none text-center border border-brand-offwhite/50 text-brand-offwhite px-8 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-brand-offwhite hover:text-brand-sage transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Explore Our Work
          </Link>
        </div>
      </Reveal>
    </section>
  );
};

export default GlobalCTA;
