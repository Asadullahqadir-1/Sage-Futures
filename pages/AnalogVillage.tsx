
import React from 'react';
import Reveal from '../components/Reveal';

const AnalogVillage: React.FC = () => {
  return (
    <div className="fade-in pt-32 pb-24 bg-brand-charcoal text-white min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(140,122,74,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(79,111,100,0.25),_transparent_55%)] opacity-70" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <Reveal as="div">
            <span className="bg-brand-brass text-[10px] font-bold uppercase tracking-[0.3em] px-3 py-1 mb-6 inline-block">Tier 2 Initiative • Beta</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Analog <span className="italic text-brand-stone">Village</span></h1>
            <p className="text-xl text-brand-stone/60 leading-relaxed font-light mb-10 max-w-lg">
              Exploring the economics of physical presence. A sanctuary for deep work and manual systems architecture in a hyper-digital era.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-px h-12 bg-brand-brass"></div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Offline Infrastructure</h4>
                  <p className="text-sm text-brand-stone/40">Resource management independent of digital platforms.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-px h-12 bg-brand-brass"></div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Human-Paced Systems</h4>
                  <p className="text-sm text-brand-stone/40">Architecting delivery models that respect cognitive load.</p>
                </div>
              </div>
            </div>
          </Reveal>
          
          <Reveal as="div" className="relative" delayMs={140}>
            <div className="aspect-[4/5] bg-brand-offwhite/5 border border-brand-stone/20 flex items-center justify-center p-12">
              <div className="text-center">
                <div className="text-brand-brass text-7xl font-serif italic mb-6">A.V.</div>
                <h3 className="text-xs font-bold uppercase tracking-[0.5em] mb-4">In Development</h3>
                <p className="text-brand-stone/40 text-xs">Access by strategic invitation only.</p>
              </div>
            </div>
            {/* Decorative frame elements */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-brand-brass/30 -mt-4 -mr-4"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-brand-brass/30 -mb-4 -ml-4"></div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default AnalogVillage;
