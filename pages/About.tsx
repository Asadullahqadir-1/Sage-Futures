
import React from "react";
import Reveal from "../components/Reveal";
import founderImage from "../images/founder.jpg";

const About: React.FC = () => {
  return (
    <div className="fade-in pt-32 pb-24 bg-brand-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Reveal as="section" className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal">About</h1>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            Sage Futures supports decisions made today with tomorrow in mind—helping organizations design systems that can sustain care, mission, and impact.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-4" delayMs={80}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">Why Sage Futures</h2>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">Sage represents wisdom, discernment, and pattern recognition.</p>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">Futures reflects both what is next and how value is shaped over time.</p>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">
            Together, Sage Futures stands for long-term thinking grounded in lived reality.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-4" delayMs={160}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">Founder</h2>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">Founded by Nia Harper, systems thinker and economic advisor.</p>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">
            Work is informed by Empress Evolutionary Economics (EEE). Clients do not need to learn the framework to benefit from it.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-10" delayMs={240}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">Meet Our Founder</h2>
          <div className="grid gap-8 md:grid-cols-[minmax(0,420px)_minmax(0,1fr)] md:items-center">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 bg-brand-brass/20" aria-hidden="true" />
              <img
                src={founderImage}
                alt="Nia Harper"
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
            <div className="space-y-4 text-sm md:text-base text-brand-charcoal/80 leading-relaxed">
              <h3 className="text-2xl md:text-3xl font-serif text-brand-charcoal">Nia Harper</h3>
              <p>
                Nia Harper has always had a passion for social and economic justice. She has used this passion to direct her career choices.
              </p>
              <p>
                As an economic developer with 15 years of policy, workforce, and strategic business development experience combined, Nia has worked in leadership roles that call on her knowledge in entrepreneurship, project management, and strategic partnerships across both the private and public sectors—including the federal government, prominent law firms, university systems, and large non-profit organizations—each aimed at improving underserved communities in wealth creation and maintenance.
              </p>
              <p>
                She brings this integrated perspective to Sage Futures, anchoring structural solutions that align mission, capital, and human capacity for sustainable futures.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
