import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const CommunityCapital: React.FC = () => {
  return (
    <div className="fade-in pt-32 pb-24 bg-brand-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <Reveal as="section" className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal">
            Community Capital
          </h1>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            Sage Futures strengthens community capital readiness in South DeKalb County by preparing organizations,
            families, and initiatives to access aligned funding pathways and build financial stability.
          </p>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            Over the next three years, we are developing infrastructure to expand capital access in support of equitable
            community development.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-6" delayMs={80}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">
            What We Mean by Community Capital
          </h2>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            Community capital includes financial resources as well as the relationships, trust, and institutional
            capacity that determine how money moves through a place. In South DeKalb, community capital must be structured
            so residents, neighborhood institutions, and local enterprises can participate in and benefit from development
            without displacement.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-6" delayMs={140}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">
            Community Capital Priorities
          </h2>
          <ul className="list-disc list-inside text-base md:text-lg text-brand-charcoal/80 space-y-2">
            <li>
              <span className="font-semibold">Aligned Capital Pathways:</span> Identifying and structuring funding that
              matches community-set priorities, risk tolerance, and time horizons.
            </li>
            <li>
              <span className="font-semibold">Readiness &amp; Stewardship:</span> Building the internal systems partners
              need to receive, manage, and report on capital responsibly.
            </li>
            <li>
              <span className="font-semibold">Non-Extractive Structures:</span> Promoting capital tools that recycle
              value locally and avoid predatory terms or displacement pressures.
            </li>
          </ul>
        </Reveal>

        <Reveal
          as="section"
          className="space-y-4 pt-8 border-t border-brand-stone/30"
          delayMs={200}
        >
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-sage">
            Liquidity: Capital Readiness Stream
          </h2>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            Liquidity is Sage Futures’ capital readiness stream, supporting planning, strategy, and alignment when
            capital is part of the solution. Funding is never guaranteed, and participation is always optional.
          </p>
          <div className="pt-2">
            <Link
              to="/contact?subject=Liquidity%20Support"
              className="inline-block bg-brand-sage text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-brass transition-all duration-300"
            >
              Inquire About Liquidity Support
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default CommunityCapital;
