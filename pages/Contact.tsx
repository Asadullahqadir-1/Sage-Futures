import React, { useState } from 'react';
import Reveal from '../components/Reveal';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [subjectOfInquiry, setSubjectOfInquiry] = useState('Tier 1 Advisory (Retainer)');
  const [messageOverview, setMessageOverview] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New inquiry from ${fullName || 'Sage Futures contact form'}`);
    const bodyLines = [
      `Full Name: ${fullName || 'N/A'}`,
      `Organization: ${organization || 'N/A'}`,
      `Subject of Inquiry: ${subjectOfInquiry || 'N/A'}`,
      '',
      'Message:',
      messageOverview || 'N/A',
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));

    window.location.href = `mailto:info@niazharper.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };
  return (
    <div className="fade-in pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-brand-offwhite via-white to-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <Reveal as="div">
            <span className="text-brand-brass font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Engagement</span>
            <h1 className="text-4xl md:text-6xl font-serif text-brand-sage mb-10">Initiate Dialogue</h1>
            <p className="text-lg text-brand-charcoal/60 leading-relaxed font-light mb-12">
              Sage Futures is currently reviewing inquiries for Tier 1 Advisory and selective Project Engagements for the upcoming fiscal cycle.
            </p>
            
            <div className="space-y-10">
              <div className="space-y-3">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand-brass font-bold mb-2">Direct Inquiry</h4>
                  <a
                    href="mailto:info@niazharper.com"
                    className="text-2xl font-serif text-brand-charcoal underline decoration-brand-brass/40 underline-offset-4 hover:decoration-brand-brass"
                  >
                    info@niazharper.com
                  </a>
                </div>
                <div>
                  <p className="text-[11px] text-brand-charcoal/60">
                    For practice-specific questions, you may also reach us at
                    {' '}
                    <a
                      href="mailto:inquiry@sagefutures.com"
                      className="underline decoration-brand-brass/40 underline-offset-2 hover:decoration-brand-brass"
                    >
                      inquiry@sagefutures.com
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand-brass font-bold mb-2">Availability</h4>
                <p className="text-sm text-brand-charcoal/60">Q3 & Q4 2024 Strategy Openings Available.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand-brass font-bold mb-2">Contact Details</h4>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed">
                  3900 Crown Rd SW #16709,
                  <br />
                  Atlanta, GA, 30304, USA
                </p>
                <p className="text-sm text-brand-charcoal/70">
                  Phone:{' '}
                  <a
                    href="tel:16785612160"
                    className="underline decoration-brand-brass/40 underline-offset-2 hover:decoration-brand-brass"
                  >
                    678-561-2160
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
          
          <Reveal as="div" className="bg-brand-offwhite/80 backdrop-blur-sm p-8 md:p-12 border border-brand-stone shadow-sm" delayMs={140}>
            {submitted && (
              <div className="mb-8 rounded-md border border-brand-evergreen/40 bg-brand-evergreen/5 px-4 py-3 text-xs tracking-[0.2em] uppercase text-brand-evergreen flex items-center gap-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Inquiry received. We will respond with next steps.
              </div>
            )}
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-brand-charcoal/50 font-bold">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-brand-stone py-2 focus:border-brand-brass outline-none transition-colors"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-brand-charcoal/50 font-bold">Organization</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-brand-stone py-2 focus:border-brand-brass outline-none transition-colors"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-charcoal/50 font-bold">Subject of Inquiry</label>
                <select
                  className="w-full bg-transparent border-b border-brand-stone py-2 focus:border-brand-brass outline-none transition-colors appearance-none cursor-pointer"
                  value={subjectOfInquiry}
                  onChange={(e) => setSubjectOfInquiry(e.target.value)}
                >
                  <option>Tier 1 Advisory (Retainer)</option>
                  <option>Project Based Engagement</option>
                  <option>Analog Village Interest</option>
                  <option>Diagnostic Consultation</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-charcoal/50 font-bold">Message Overview</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-brand-stone py-2 focus:border-brand-brass outline-none transition-colors resize-none"
                  placeholder="Briefly describe your systemic needs."
                  value={messageOverview}
                  onChange={(e) => setMessageOverview(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-sage text-white py-5 text-xs font-bold uppercase tracking-widest hover:bg-brand-brass transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {submitted ? 'Submit Another Inquiry' : 'Submit Inquiry'}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
      <div className="mt-12 md:mt-16 border-t border-brand-stone/20">
        <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
          <iframe
            title="Sage Futures Location"
            src="https://www.google.com/maps?q=3900%20Crown%20Rd%20SW%20Atlanta%20GA%2030304&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
