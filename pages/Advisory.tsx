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
            Unfinished Business Initiative
          </h1>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed max-w-3xl">
            A strategic advisory and technical assistance program of Sage Futures, a 501(c)(3) community development corporation,
            for institutions working through legacy constraints, misalignment, and unfinished structural repair.
          </p>
        </Reveal>

        {/* Who This Is For */}
        <Reveal as="section" className="space-y-4" delayMs={100}>
          <h2 className="text-sm font-bold tracking-[0.3em] text-brand-brass uppercase">Who This Is For</h2>
          <ul className="space-y-3 text-sm md:text-base text-brand-charcoal/80 list-disc list-inside">
            <li className="transition-colors duration-200 hover:text-brand-sage">Strong mission, weak sustainability</li>
            <li className="transition-colors duration-200 hover:text-brand-sage">Burnout masked as growth</li>
            <li className="transition-colors duration-200 hover:text-brand-sage">Funding misaligned with values</li>
            <li className="transition-colors duration-200 hover:text-brand-sage">Leadership carrying too much alone</li>
            <li className="transition-colors duration-200 hover:text-brand-sage">Programs succeeding while systems fail</li>
          </ul>
        </Reveal>

        {/* What We Do */}
        <Reveal as="section" className="space-y-4" delayMs={150}>
          <h2 className="text-sm font-bold tracking-[0.3em] text-brand-brass uppercase">What We Do</h2>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">We work alongside organizations and institutions to:</p>
          <ul className="space-y-3 text-sm md:text-base text-brand-charcoal/80 list-disc list-inside">
            <li className="transition-colors duration-200 hover:text-brand-sage">Identify where value and care are leaking from existing systems</li>
            <li className="transition-colors duration-200 hover:text-brand-sage">Redesign governance and decision-making</li>
            <li className="transition-colors duration-200 hover:text-brand-sage">Align capital with long-term impact</li>
            <li className="transition-colors duration-200 hover:text-brand-sage">Reduce burnout structurally</li>
            <li className="transition-colors duration-200 hover:text-brand-sage">Build durable infrastructure</li>
          </ul>
        </Reveal>

        {/* How It Works */}
        <Reveal as="section" className="space-y-4" delayMs={200}>
          <h2 className="text-sm font-bold tracking-[0.3em] text-brand-brass uppercase">How It Works</h2>
          <div className="space-y-3 text-sm md:text-base text-brand-charcoal/80 leading-relaxed max-w-3xl">
            <p>Outcome-driven, context-specific engagements focused on diagnosis, redesign, and implementation guidance.</p>
            <p>We deliver coherence—not generic frameworks.</p>
          </div>
        </Reveal>

        {/* Engagement Types */}
        <Reveal as="section" className="space-y-4" delayMs={250}>
          <h2 className="text-sm font-bold tracking-[0.3em] text-brand-brass uppercase">Engagement Types</h2>
          <ul className="space-y-3 text-sm md:text-base text-brand-charcoal/80 list-disc list-inside">
            <li className="transition-colors duration-200 hover:text-brand-sage">Advisory retainers</li>
            <li className="transition-colors duration-200 hover:text-brand-sage">Diagnostic engagements</li>
            <li className="transition-colors duration-200 hover:text-brand-sage">Project-based systems redesign</li>
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
