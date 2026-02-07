import React from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";

const services = [
  "Systems & Economic Advisory",
  "Governance & Program Redesign",
  "Strategic Funding & Capital Alignment",
  "Community Ownership & Infrastructure Design",
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-offwhite via-white to-brand-offwhite/80 pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <Reveal as="section" className="space-y-4">
          <p className="text-xs font-bold tracking-[0.35em] text-brand-brass uppercase">Services</p>
          <h1 className="text-3xl md:text-4xl font-serif text-brand-charcoal">How Sage Futures Engages</h1>
        </Reveal>

        <Reveal as="section" className="grid gap-8 md:grid-cols-2" delayMs={80}>
          {services.map((label, index) => (
            <div
              key={label}
              className="group relative bg-white/85 backdrop-blur-sm border border-brand-stone/40 hover:border-brand-brass/70 shadow-sm px-8 py-10 flex flex-col justify-between transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-brand-sage/5 via-transparent to-brand-brass/10 transition-opacity duration-500" />
              <div className="relative space-y-4">
                <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-brand-stone/70">0{index + 1}</span>
                <h2 className="text-xl md:text-2xl font-serif text-brand-sage">{label}</h2>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal
          as="section"
          className="border-t border-brand-stone/30 pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          delayMs={160}
        >
          <div className="space-y-3 max-w-xl text-xs md:text-sm text-brand-charcoal/75 leading-relaxed">
            <p>Unsure which service is the right entry point?</p>
            <p>We can help you map your current context to the appropriate advisory, redesign, or capital pathway.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/advisory"
              className="text-[11px] font-bold uppercase tracking-[0.3em] px-8 py-3 border border-brand-sage text-brand-sage hover:bg-brand-sage hover:text-white transition-all duration-300"
            >
              Explore Advisory
            </Link>
            <Link
              to="/contact"
              className="text-[11px] font-bold uppercase tracking-[0.3em] px-8 py-3 bg-brand-sage text-white hover:bg-brand-brass transition-all duration-300"
            >
              Discuss Services
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Services;
