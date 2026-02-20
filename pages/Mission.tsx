import React from "react";
import Reveal from "../components/Reveal";

const Mission: React.FC = () => {
  return (
    <div className="fade-in pt-32 pb-24 bg-brand-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Reveal as="section" className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal">Mission</h1>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            Sage Futures serves low-to-moderate income and historically underserved communities within South DeKalb County and the broader Metro Atlanta region.
          </p>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            Our work is guided by a sustainability-centered economic framework that prioritizes long-term stewardship, responsible capital alignment, and intergenerational asset continuity.
          </p>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            Sage Futures exists to ensure that South DeKalb has the planning, governance, and capital infrastructure required to guide development on its own terms and build non-exploitative, durable community wealth.
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default Mission;
