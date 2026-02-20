import React from "react";
import { useNavigate } from "react-router-dom";
import { Reveal } from "../components/Reveal";

const TrainingAdvisory: React.FC = () => {
  const navigate = useNavigate();

  const handleScheduleConversation = () => {
    navigate("/contact?subject=Discovery%20Conversation");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-offwhite via-white to-brand-offwhite/80 pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <Reveal as="section" className="space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-charcoal leading-tight">
            Training &amp; Advisory
          </h1>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed max-w-3xl">
            Capacity-building streams that strengthen governance, relational infrastructure, and capital readiness in support of community wealth—not fee-for-service consulting.
          </p>
          <p className="text-sm md:text-base text-brand-charcoal/70 leading-relaxed max-w-3xl italic">
            While Sage Futures is anchored in South DeKalb County for community development initiatives, these streams support mission-aligned organizations across the United States.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-8" delayMs={80}>
          <div className="bg-white p-8 border border-brand-stone/30 shadow-sm">
            <h2 className="text-lg font-serif text-brand-charcoal mb-3">Triple U</h2>
            <p className="text-sm md:text-base text-brand-charcoal/75 leading-relaxed">
              A structured learning and practice stream focused on community capacity building, cooperative economics, systems literacy, and collective infrastructure.
            </p>
          </div>

          <div className="bg-white p-8 border border-brand-stone/30 shadow-sm">
            <h2 className="text-lg font-serif text-brand-charcoal mb-3">Village App Cohorts &amp; Workshops</h2>
            <p className="text-sm md:text-base text-brand-charcoal/75 leading-relaxed">
              Cohort-based learning and facilitated practice spaces that use Village tools to strengthen coordination, shared responsibility, and relational infrastructure.
            </p>
          </div>

          <div className="bg-white p-8 border border-brand-stone/30 shadow-sm">
            <h2 className="text-lg font-serif text-brand-charcoal mb-3">Grant Writing &amp; Resource Alignment</h2>
            <p className="text-sm md:text-base text-brand-charcoal/75 leading-relaxed">
              Streamlined support for designing fundable projects, aligning proposals with community priorities, and building internal systems to steward public and philanthropic resources.
            </p>
          </div>

          <div className="bg-white p-8 border border-brand-stone/30 shadow-sm">
            <h2 className="text-lg font-serif text-brand-charcoal mb-3">Capital Readiness (Liquidity)</h2>
            <p className="text-sm md:text-base text-brand-charcoal/75 leading-relaxed">
              Capacity-building support that helps organizations understand capital stacks, liquidity needs, and risk so they can access aligned capital without undermining long-term community ownership.
            </p>
          </div>
        </Reveal>

        <Reveal
          as="section"
          className="bg-brand-sage text-brand-offwhite px-8 py-10 md:px-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          delayMs={200}
        >
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-xl md:text-2xl font-serif">Schedule a Discovery Conversation</h2>
          </div>
          <div className="flex flex-col items-start gap-2">
            <button
              onClick={handleScheduleConversation}
              className="bg-white text-brand-sage px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] border border-transparent hover:bg-brand-brass hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-sage focus-visible:ring-brand-brass"
            >
              Schedule a Discovery Conversation
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default TrainingAdvisory;
