import React from "react";
import { Reveal } from "../components/Reveal";

const ServiceIcon: React.FC<{ variant: string }> = ({ variant }) => {
  const sharedProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: 1.6,
    stroke: "currentColor",
    className: "w-6 h-6",
  };

  switch (variant) {
    case "scales":
      return (
        <svg {...sharedProps}>
          <path d="M4 10l4 6 4-6H4z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 4h8l-4 6-4-6z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 4v16" strokeLinecap="round" />
        </svg>
      );
    case "diamond":
      return (
        <svg {...sharedProps}>
          <path d="M12 3l8 7-8 11-8-11 8-7z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 3l4 7-4 11-4-11 4-7z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "globe":
      return (
        <svg {...sharedProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" strokeLinecap="round" />
          <path d="M12 3c2.5 2.7 4 6.1 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6.1-4-9s1.5-6.3 4-9z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg {...sharedProps}>
          <rect x="4" y="6" width="16" height="12" rx="2" />
          <path d="M4 10h16" strokeLinecap="round" />
          <path d="M9 14h2" strokeLinecap="round" />
        </svg>
      );
  }
};

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-offwhite pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <Reveal as="section" className="space-y-4">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-brass">Programs & Service Areas</p>
          <h1 className="text-3xl md:text-4xl font-serif text-brand-charcoal">
            Nonprofit Community Development, Funding Readiness, and Technical Assistance
          </h1>
          <p className="text-sm md:text-base text-brand-charcoal/75 max-w-3xl">
            Sage Futures is a nonprofit community development corporation (CDC). Our work is organized into programmatic
            initiatives that support community development, funding and grant readiness, and organizational systems change.
          </p>
          <p className="text-sm md:text-base text-brand-charcoal/75 max-w-3xl">
            Sustainability consulting for Construction, Food, fashion, finance industries.
          </p>
          <p className="text-sm md:text-base text-brand-charcoal/75 max-w-3xl">
            Legacy initiatives such as NVZN Innovation Lab, SisTainable, and Baby Greenz have shaped how Sage Futures centers
            Black ecopreneurs, Black women in sustainability leadership, and youth-focused environmental education within this work.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-10" delayMs={80}>
          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">A. Community Development</h2>
            <div className="bg-white p-8 border border-brand-stone/30 shadow-sm relative overflow-hidden card-animated rounded-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-brand-sage/50 bg-brand-offwhite text-brand-sage">
                  <ServiceIcon variant="globe" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-serif text-brand-charcoal">Triple U Initiative</h3>
                  <p className="text-sm md:text-base text-brand-charcoal/75 leading-relaxed">
                    Programmatic, community-facing capacity building grounded in cooperative economics and shared responsibility.
                  </p>
                  <ul className="list-disc list-inside text-sm md:text-base text-brand-charcoal/80 space-y-2">
                    <li>Community capacity building</li>
                    <li>Cooperative economics</li>
                    <li>Systems empowerment</li>
                    <li>Collective infrastructure</li>
                  </ul>
                </div>
              </div>
              <div
                className="absolute inset-0 pointer-events-none border border-brand-sage/15 translate-x-2 translate-y-2"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">B. Funding &amp; Grant Readiness</h2>
            <div className="bg-white p-8 border border-brand-stone/30 shadow-sm relative overflow-hidden card-animated rounded-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-brand-sage/50 bg-brand-offwhite text-brand-sage">
                  <ServiceIcon variant="diamond" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-serif text-brand-charcoal">Liquidity Initiative</h3>
                  <p className="text-sm md:text-base text-brand-charcoal/75 leading-relaxed">
                    Financial sustainability support for organizations aligning capital with mission, capacity, and community impact.
                  </p>
                  <ul className="list-disc list-inside text-sm md:text-base text-brand-charcoal/80 space-y-2">
                    <li>Grant readiness</li>
                    <li>Capital access</li>
                    <li>Revenue diversification</li>
                    <li>Funding systems development</li>
                  </ul>
                </div>
              </div>
              <div
                className="absolute inset-0 pointer-events-none border border-brand-sage/15 translate-x-2 translate-y-2"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">
              C. Strategic Advisory &amp; Technical Assistance
            </h2>
            <div className="bg-white p-8 border border-brand-stone/30 shadow-sm relative overflow-hidden card-animated rounded-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-brand-sage/50 bg-brand-offwhite text-brand-sage">
                  <ServiceIcon variant="scales" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-serif text-brand-charcoal">Unfinished Business Initiative</h3>
                  <p className="text-sm md:text-base text-brand-charcoal/75 leading-relaxed">
                    Structured technical assistance for institutions working through legacy constraints, structural misalignment, and systems repair.
                  </p>
                  <ul className="list-disc list-inside text-sm md:text-base text-brand-charcoal/80 space-y-2">
                    <li>Organizational assessment</li>
                    <li>Institutional alignment</li>
                    <li>Systems repair</li>
                    <li>Governance strengthening</li>
                  </ul>
                </div>
              </div>
              <div
                className="absolute inset-0 pointer-events-none border border-brand-sage/15 translate-x-2 translate-y-2"
                aria-hidden="true"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Services;
