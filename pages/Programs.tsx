import React from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import EcosystemPuzzle from "../components/EcosystemPuzzle";

const PROGRAM_PILLARS = [
  {
    title: "Sustainable Housing & Adaptive Reuse",
    sublabel: "Built Environment",
    description:
      "Projects that preserve community character while adapting underutilized properties for mixed-use, mixed-income, and community-serving purposes in South DeKalb.",
    link: "/community-wealth-management",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=600",
    imageAlt: "Community garden and built environment",
  },
  {
    title: "Community Wealth Initiatives",
    sublabel: "Shared Prosperity",
    description:
      "Initiatives that develop tools and structures for locally held wealth, including cooperative models, community enterprises, and mechanisms for keeping key assets in community control.",
    link: "/community-wealth-management",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600",
    imageAlt: "Enterprise and innovation",
  },
  {
    title: "Youth & Enterprise Infrastructure",
    sublabel: "WOW Kids & EcoBator",
    description:
      "Programming and infrastructure that support youth leadership, small enterprises, and social innovators in South DeKalb to grow in place rather than relocate for opportunity.",
    link: "/programs",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=600",
    imageAlt: "Youth and community",
  },
  {
    title: "Environmental Stewardship Programs",
    sublabel: "Goddesses Garden",
    description:
      "Environmental education, sustainable food systems, and land stewardship programs that strengthen resilience and ecological health as core components of community wealth.",
    link: "/programs",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600",
    imageAlt: "Community collaboration and environmental stewardship",
  },
];

const Programs: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-offwhite pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <Reveal as="section" className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-serif text-brand-charcoal">Programs</h1>
          <p className="text-base md:text-lg text-brand-charcoal/75 max-w-3xl leading-relaxed">
            Program pillars that organize Sage Futures’ work in South DeKalb into coherent streams of equitable development, community wealth, youth and enterprise infrastructure, and environmental stewardship.
          </p>
        </Reveal>

        <Reveal as="section" delayMs={80}>
          <EcosystemPuzzle />
        </Reveal>

        <Reveal as="section" className="space-y-12" delayMs={120}>
          <h2 className="text-xl md:text-2xl font-serif text-brand-sage">Program Pillars</h2>
          <div className="space-y-12">
            {PROGRAM_PILLARS.map((program, i) => (
              <div
                key={program.sublabel}
                className="bg-white border border-brand-stone/30 shadow-sm overflow-hidden"
              >
                <div
                  className={`grid md:grid-cols-2 gap-0 ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`relative h-48 md:h-64 md:min-h-[256px] ${
                      i % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <img
                      src={program.image}
                      alt={program.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className={`p-8 flex flex-col justify-center ${
                      i % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-brass mb-1">
                      {program.sublabel}
                    </p>
                    <h3 className="text-lg font-serif text-brand-charcoal mb-3">
                      {program.title}
                    </h3>
                    <p className="text-sm md:text-base text-brand-charcoal/75 leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <Link
                      to={program.link}
                      className="text-brand-sage font-semibold text-sm uppercase tracking-widest hover:text-brand-brass transition-colors w-fit"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Programs;
