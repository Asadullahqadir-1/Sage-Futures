
import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const AnalogVillage: React.FC = () => {
  return (
    <div className="fade-in pt-32 pb-24 bg-brand-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Reveal as="section" className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal">Analog Village (Beta)</h1>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            A facilitated practice space for people who carry care, coordination, and responsibility for others.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-4" delayMs={80}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">Overview</h2>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">
            Analog Village is a small-group, facilitated cohort for people who routinely hold responsibility across family, work, and community systems—often without shared load or infrastructure.
          </p>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">This is not therapy.</p>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">This is not a support group.</p>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">This is not certification.</p>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">
            It is a practice space for coordination, shared responsibility, and sustainable care.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-4" delayMs={120}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">Participant Profile</h2>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">Designed for:</p>
          <ul className="list-disc list-inside text-sm md:text-base text-brand-charcoal/80 space-y-3">
            <li className="transition-colors duration-200 hover:text-brand-sage">Care professionals (doulas, maternal mental health practitioners, case managers, social workers, community health workers, program leads)</li>
            <li className="transition-colors duration-200 hover:text-brand-sage">Mothers navigating multi-generational caregiving</li>
            <li className="transition-colors duration-200 hover:text-brand-sage">Individuals who have long been the “responsible one”</li>
          </ul>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">
            Participants share a readiness to move from individual over-functioning toward collective infrastructure.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-4" delayMs={160}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">What Happens</h2>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">Participants practice:</p>
          <ul className="list-disc list-inside text-sm md:text-base text-brand-charcoal/80 space-y-3">
            <li className="transition-colors duration-200 hover:text-brand-sage">Shared responsibility</li>
            <li className="transition-colors duration-200 hover:text-brand-sage">Coordination without hierarchy</li>
            <li className="transition-colors duration-200 hover:text-brand-sage">Naming invisible labor</li>
            <li className="transition-colors duration-200 hover:text-brand-sage">Sustainable pacing and boundaries</li>
          </ul>
        </Reveal>

        <Reveal as="section" className="space-y-4" delayMs={200}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">Structure</h2>
          <ul className="list-disc list-inside text-sm md:text-base text-brand-charcoal/80 space-y-3">
            <li className="transition-colors duration-200 hover:text-brand-sage">6–10 participants</li>
            <li className="transition-colors duration-200 hover:text-brand-sage">Time-bound cohort</li>
            <li className="transition-colors duration-200 hover:text-brand-sage">Live, facilitated sessions</li>
            <li className="transition-colors duration-200 hover:text-brand-sage">Limited or no recordings</li>
            <li className="transition-colors duration-200 hover:text-brand-sage">Application or invitation only</li>
          </ul>
        </Reveal>

        <Reveal as="section" className="space-y-4" delayMs={240}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">Payment Options</h2>
          <div className="space-y-4 text-sm md:text-base text-brand-charcoal/80 leading-relaxed">
            <p>Employer-Sponsored Participation:</p>
            <p>
              Organizations may sponsor participation as professional development or workforce sustainability.
            </p>
            <p>Individual Payment:</p>
            <p>
              Some participants may seek HSA/FSA reimbursement depending on plan rules. Sage Futures cannot guarantee eligibility.
            </p>
          </div>
        </Reveal>

        <Reveal as="section" className="pt-4" delayMs={280}>
          <Link
            to="/contact"
            className="inline-block bg-brand-sage text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-brass transition-all duration-300"
          >
            Inquire About Analog Village (Beta)
          </Link>
        </Reveal>
      </div>
    </div>
  );
};

export default AnalogVillage;
