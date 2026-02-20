import React from "react";
import Reveal from "../components/Reveal";

const Resources: React.FC = () => {
  return (
    <div className="fade-in pt-32 pb-24 bg-brand-offwhite min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <Reveal as="section" className="space-y-4 text-center md:text-left">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-brass">Resources</p>
          <h1 className="text-3xl md:text-4xl font-serif text-brand-charcoal">
            Tools for Community Development and Institutional Strengthening
          </h1>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed max-w-3xl">
            Resources are designed to support community development practitioners, organizational leaders, and partners advancing
            systems change. Materials emphasize capacity building, technical assistance, and shared language rather than one-size-fits-all solutions.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-10" delayMs={80}>
          <div className="space-y-3 bg-white p-6 border border-brand-stone/30 shadow-sm card-animated rounded-sm">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-sage">For Community-Based Organizations</h2>
            <ul className="list-disc list-inside text-sm md:text-base text-brand-charcoal/80 space-y-2">
              <li>Checklists for community capacity building and cooperative project design</li>
              <li>Reflection questions for aligning programs with community-defined outcomes</li>
              <li>Guides for naming and distributing invisible labor in teams</li>
            </ul>
          </div>

          <div className="space-y-3 bg-white p-6 border border-brand-stone/30 shadow-sm card-animated rounded-sm">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-sage">For Funders &amp; Philanthropic Partners</h2>
            <ul className="list-disc list-inside text-sm md:text-base text-brand-charcoal/80 space-y-2">
              <li>Considerations for funding systems change and infrastructure, not just programs</li>
              <li>Questions to assess organizational capacity and readiness with care</li>
              <li>Examples of shared-risk, values-aligned partnership structures</li>
            </ul>
          </div>

          <div className="space-y-3 bg-white p-6 border border-brand-stone/30 shadow-sm card-animated rounded-sm">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-sage">For Institutions in Transition</h2>
            <ul className="list-disc list-inside text-sm md:text-base text-brand-charcoal/80 space-y-2">
              <li>Frameworks for governance strengthening and role clarity</li>
              <li>Prompts for examining institutional alignment and systems repair</li>
              <li>Scaffolds for pacing change to reduce burnout and fragmentation</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Resources;

