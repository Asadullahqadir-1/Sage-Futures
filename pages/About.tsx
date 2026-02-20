
import React from "react";
import Reveal from "../components/Reveal";
import founderImage from "../images/founder.jpg";

const About: React.FC = () => {
  return (
    <div className="fade-in pt-32 pb-24 bg-brand-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Reveal as="section" className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal">
            About Sage Futures
          </h1>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            Sage Futures is a South DeKalb–based 501(c)(3) community development corporation founded by Nia
            Harper and collaborators to build equitable, sustainable development and community wealth
            infrastructure in Black communities.
          </p>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            The organization exists to address a structural gap: communities facing active development pressure
            often lack the coordinated planning, governance, and capital infrastructure required to shape
            projects and protect long-term resident stability.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-4" delayMs={80}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">
            Empress Evolutionary Economics (EEE)
          </h2>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">
            Empress Evolutionary Economics (EEE) is the systems framework guiding Sage Futures’ work. EEE
            expands the definition of wealth to include land stewardship, relational infrastructure, governance
            capacity, and intergenerational durability. Rather than focusing solely on income or property
            values, EEE examines how decisions about land, capital, and institutions compound over time—either
            reinforcing extraction or building locally held stability.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-4" delayMs={120}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">
            How EEE Informs Community Wealth Management
          </h2>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">
            EEE shapes Sage Futures’ Community Wealth Management work by centering the long-term health of
            community systems. In practice, this means evaluating projects based on how they affect land
            control, governance participation, relational networks, and intergenerational prospects in South
            DeKalb, and favoring mechanisms that retain value locally and avoid extractive or speculative
            dynamics.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-10" delayMs={160}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">
            Meet Our Founder
          </h2>
          <div className="grid gap-8 md:grid-cols-[minmax(0,420px)_minmax(0,1fr)] md:items-start">
            <div className="relative">
              <div
                className="absolute -inset-4 -z-10 bg-brand-brass/20"
                aria-hidden="true"
              />
              <img
                src={founderImage}
                alt="Nia Harper"
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
            <div className="space-y-4 text-sm md:text-base text-brand-charcoal/80 leading-relaxed">
              <h3 className="text-2xl md:text-3xl font-serif text-brand-charcoal">
                Nia Harper
              </h3>
              <p>
                Nia Harper has always had a passion for social and economic justice. As an economic developer,
                she has 15 years of combined experience in policy, workforce, and strategic business
                development, serving in leadership roles across the federal government, prominent law firms,
                university systems, and large nonprofit organizations focused on wealth creation and
                maintenance in underserved communities.
              </p>
              <p>
                Ms. Harper is also an entrepreneur whose consulting services focus on solutions for community
                financial self-sufficiency and the successful scaling of Black family-owned and Black
                woman-owned small businesses for job creation. She understands the impact that viable wealth
                building options can have on empowering a community.
              </p>
              <p>
                Her experience led Nia to join FUSE Corps and support Invest Atlanta in creating programs and
                policies that influence wealth creation in Black and Brown households, businesses, and
                communities in Southwest Atlanta. She has also served as a Sustainability Ambassador for the
                City of Atlanta, contributing recommendations for long-term strategic initiatives with
                inclusive and eco-friendly solutions to citywide challenges.
              </p>
              <p>
                Nia is a founding member of Sage Futures Community Development Corporation, which leads
                development using sustainability to rebuild, innovate, and reskill for a balanced lifestyle in
                Black communities. She is a proud member of Zeta Phi Beta Sorority, Incorporated, and as a
                mother of three daughters, she is motivated to help build non-exploitative, sustainable wealth
                infrastructure for future generations.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className="space-y-4" delayMs={200}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">
            Non-Exploitative, Sustainable Wealth Infrastructure
          </h2>
          <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">
            Across its programs and partnerships, Sage Futures prioritizes ownership structures, governance
            models, and capital tools that keep residents and community institutions in positions of agency.
            This includes shared-benefit arrangements, patient capital, and stewardship entities that hold
            assets in trust for the long-term benefit of South DeKalb.
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
