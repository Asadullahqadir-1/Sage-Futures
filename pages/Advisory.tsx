import React from "react";
import { useNavigate } from "react-router-dom";
import { Reveal } from "../components/Reveal";

const Advisory: React.FC = () => {
  const navigate = useNavigate();

  const handleScheduleConversation = () => {
    navigate("/contact?subject=Discovery%20Conversation");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-offwhite via-white to-brand-offwhite/80 pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <Reveal as="section" className="space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-charcoal leading-tight">
            Systems &amp; Economic Advisory
          </h1>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed max-w-3xl">
            Designing sustainable value where care, capital, and coordination meet.
          </p>
        </Reveal>

        {/* Who This Is For */}
        <Reveal as="section" className="space-y-4" delayMs={100}>
          <h2 className="text-sm font-bold tracking-[0.3em] text-brand-brass uppercase">Who This Is For</h2>
          <ul className="space-y-3 text-sm md:text-base text-brand-charcoal/80 list-disc list-inside">
            <li>Organizations stewarding care, education, labor, or community infrastructure.</li>
            <li>Leaders responsible for complex, multi-stakeholder systems.</li>
            <li>Teams facing growth, transition, or structural redesign.</li>
            <li>Initiatives experiencing misalignment between mission, funding, and operations.</li>
            <li>Contexts where failure has material impacts on people or ecosystems.</li>
          </ul>
        </Reveal>

        {/* What We Do */}
        <Reveal as="section" className="space-y-4" delayMs={150}>
          <h2 className="text-sm font-bold tracking-[0.3em] text-brand-brass uppercase">What We Do</h2>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">We help clients:</p>
          <ul className="space-y-3 text-sm md:text-base text-brand-charcoal/80 list-disc list-inside">
            <li>Diagnose structural risk and fragility in existing models.</li>
            <li>Clarify the economic logic of their system.</li>
            <li>Design governance, roles, and flows that reflect real capacity.</li>
            <li>Align capital (philanthropic, investment, earned revenue) with long-term sustainability.</li>
            <li>Build structures that honor care, dignity, and accountability.</li>
          </ul>
        </Reveal>

        {/* How It Works */}
        <Reveal as="section" className="space-y-4" delayMs={200}>
          <h2 className="text-sm font-bold tracking-[0.3em] text-brand-brass uppercase">How It Works</h2>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed max-w-3xl">
            Outcome-driven, context-specific engagements focused on diagnosis, redesign, and implementation guidance. We deliver coherence—not generic frameworks.
          </p>
        </Reveal>

        {/* Engagement Types */}
        <Reveal as="section" className="space-y-4" delayMs={250}>
          <h2 className="text-sm font-bold tracking-[0.3em] text-brand-brass uppercase">Engagement Types</h2>
          <ul className="space-y-3 text-sm md:text-base text-brand-charcoal/80 list-disc list-inside">
            <li>Tiered advisory retainers for ongoing strategic support.</li>
            <li>Time-bound diagnostics and structural assessments.</li>
            <li>Project-based engagements focused on redesign and implementation.</li>
          </ul>
        </Reveal>

        {/* CTA */}
        <Reveal
          as="section"
          className="bg-brand-sage text-brand-offwhite px-8 py-10 md:px-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          delayMs={300}
        >
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-xl md:text-2xl font-serif">Schedule a Discovery Conversation</h2>
            <p className="text-xs md:text-sm text-brand-offwhite/80 leading-relaxed">
              Share context, constraints, and desired outcomes. We&apos;ll respond with a proposed approach and confirm whether Sage Futures is the right fit.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <button
              onClick={handleScheduleConversation}
              className="bg-white text-brand-sage px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] border border-transparent hover:bg-brand-brass hover:text-white hover:border-brand-offwhite transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-sage focus-visible:ring-brand-brass"
            >
              Schedule a Discovery Conversation
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Advisory;
