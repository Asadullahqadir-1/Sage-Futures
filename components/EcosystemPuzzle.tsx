import React from 'react';

const PIECES = [
  { label: 'Capital Readiness', sublabel: 'Liquidity', num: '1' },
  { label: 'Asset Stewardship', sublabel: 'Unfinished Business', num: '2' },
  { label: 'Sustainable Land Use', sublabel: "Goddesses Garden", num: '3' },
  { label: 'Youth Pipeline', sublabel: 'WOW Kids', num: '4' },
  { label: 'Enterprise Incubation', sublabel: 'EcoBator', num: '5' },
  { label: 'Training Infrastructure', sublabel: 'Triple U + Village', num: '6' },
];

const EcosystemPuzzle: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <p className="text-center text-[10px] font-bold tracking-[0.3em] uppercase text-brand-brass mb-6">Our Ecosystem</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {PIECES.map((piece) => (
          <div
            key={piece.num}
            className="relative bg-white border-2 border-brand-sage/70 shadow-lg hover:shadow-xl hover:border-brand-brass hover:-translate-y-0.5 transition-all duration-300 p-5 md:p-6 rounded-lg overflow-hidden"
          >
            <span className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-brand-sage text-white text-sm font-bold">
              {piece.num}
            </span>
            <h3 className="text-sm md:text-base font-serif text-brand-charcoal font-semibold pr-10 mb-1">
              {piece.label}
            </h3>
            <p className="text-xs text-brand-brass font-medium">{piece.sublabel}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcosystemPuzzle;
