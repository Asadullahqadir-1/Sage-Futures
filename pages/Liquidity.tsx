
import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const Liquidity: React.FC = () => {
  return (
    <div className="fade-in pt-32 pb-24 bg-brand-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Reveal as="section" className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-sage">Liquidity</h1>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            Capital enablement for organizations ready to implement change.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-4" delayMs={80}>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">
            Liquidity supports readiness, strategy, and alignment when capital is part of the solution.
          </p>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">Funding is never guaranteed.</p>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">
            Participation is optional and separate from advisory or Analog Village.
          </p>
        </Reveal>

        <Reveal as="section" className="pt-4" delayMs={160}>
          <Link
            to="/contact"
            className="inline-block bg-brand-sage text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-brass transition-all duration-300"
          >
            Inquire About Liquidity Support
          </Link>
        </Reveal>
      </div>
    </div>
  );
};

export default Liquidity;
