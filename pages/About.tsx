
import React from 'react';
import Reveal from '../components/Reveal';

const About: React.FC = () => {
  return (
    <div className="fade-in pt-32 pb-24 bg-gradient-to-b from-brand-offwhite via-white to-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <Reveal as="div">
            <span className="text-brand-brass font-bold tracking-[0.4em] uppercase text-xs mb-4 block">The Practice</span>
            <h1 className="text-4xl md:text-7xl font-serif text-brand-sage mb-10">Why Sage Futures?</h1>
            <div className="space-y-6 text-brand-charcoal/70 text-lg font-light leading-relaxed">
              <p>
                Standard advisory focuses on the surface—optimizing existing flaws. Sage Futures operates at the bedrock. We address the root economic and systemic causes of organizational fragility.
              </p>
              <p>
                We bridge high-level economic theory with the operational reality of care systems. No buzzwords. No clinical abstraction. Just credible structural logic.
              </p>
            </div>
            
            <div className="mt-16 bg-white p-10 border border-brand-stone italic text-brand-sage font-serif text-xl border-l-4 border-l-brand-brass">
              "Structural integrity is not an option; it is the prerequisite for sustainability."
            </div>
          </Reveal>
          
          <Reveal as="div" className="space-y-8" delayMs={140}>
            {[
              { title: "Economic Rigor", body: "Data-informed modeling based on systemic reality, not aspirational metrics." },
              { title: "Grounded Perspective", body: "Non-clinical, operational strategy that respects the complexity of delivery." },
              { title: "Long-term Durability", body: "We design for the next decade, ensuring systems are built to withstand economic cycles." }
            ].map((pillar, i) => (
              <div key={pillar.title} className="bg-white p-10 border border-brand-stone group hover:border-brand-brass transition-all duration-500">
                <h3 className="text-xl font-serif text-brand-charcoal mb-3 group-hover:text-brand-sage transition-colors">{pillar.title}</h3>
                <p className="text-brand-charcoal/50 text-sm leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default About;
