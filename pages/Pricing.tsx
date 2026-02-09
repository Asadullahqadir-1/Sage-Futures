
import React from "react";
import Reveal from "../components/Reveal";

const pricingSections = [
  {
    title: "Tier 1 – Advisory",
    items: [
      "Hourly Advisory: $200–$300/hr",
      "Monthly Retainers: $2,500–$7,500/month",
      "Diagnostic Engagements: $5,000–$15,000",
      "Project-Based Work: $10,000–$25,000+",
    ],
  },
  {
    title: "Tier 2 – Analog Village (Beta)",
    items: [
      "Individual Cohorts: $750–$2,500 per participant",
      "Partner-Sponsored Cohorts: $5,000–$15,000",
      "Workshops: $75–$200 per person or $2,000–$5,000 hosted",
    ],
  },
  {
    title: "Liquidity (Optional)",
    items: [
      "Capital Readiness: $1,500–$5,000",
      "Capital Packaging / Navigation: $5,000–$15,000",
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <div className="fade-in pt-32 pb-24 bg-gradient-to-br from-brand-offwhite via-white to-brand-stone/10 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <Reveal as="section" className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-sage">Pricing</h1>
        </Reveal>

        <div className="space-y-12">
          {pricingSections.map((section, index) => (
            <Reveal as="section" key={section.title} delayMs={index * 80} className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif text-brand-charcoal">{section.title}</h2>
              <ul className="list-disc list-inside text-sm md:text-base text-brand-charcoal/80 space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="transition-colors duration-200 hover:text-brand-sage">{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
