import React from "react";
import { Reveal } from "../components/Reveal";

const services = [
  {
    title: "Systems & Economic Advisory",
    description:
      "Strategy, diagnostics, and implementation guidance where mission, capital, and capacity converge.",
    icon: "briefcase",
  },
  {
    title: "Governance & Program Redesign",
    description:
      "Structural design for decision-making, roles, and delivery models grounded in real constraints.",
    icon: "scales",
  },
  {
    title: "Strategic Funding & Capital Alignment",
    description:
      "Aligning philanthropic, investment, and earned revenue with long-term sustainability.",
    icon: "diamond",
  },
  {
    title: "Community Ownership & Infrastructure Design",
    description:
      "Designing shared infrastructure that distributes responsibility and builds durable stewardship.",
    icon: "globe",
  },
];

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
        <Reveal as="section" className="space-y-3 text-center">
          <h1 className="text-3xl md:text-4xl font-serif text-brand-charcoal">Our Services</h1>
          <p className="text-sm md:text-base text-brand-charcoal/75 max-w-2xl mx-auto">
            Sustainability consulting spanning systems, governance, funding, and infrastructure design.
          </p>
        </Reveal>

        <Reveal as="section" className="grid gap-8 md:grid-cols-2" delayMs={80}>
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex items-start gap-4 bg-white p-8 border border-brand-stone/30 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand-brass/40"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-brand-sage/50 bg-brand-offwhite text-brand-sage">
                <ServiceIcon variant={service.icon} />
              </div>
              <div className="space-y-3">
                <h2 className="text-lg font-serif text-brand-charcoal">{service.title}</h2>
                <p className="text-sm text-brand-charcoal/75 leading-relaxed">{service.description}</p>
              </div>
              <div className="absolute inset-0 pointer-events-none border border-brand-sage/20 translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" aria-hidden="true" />
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  );
};

export default Services;
