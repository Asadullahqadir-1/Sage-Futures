import React, { useState } from "react";
import Reveal from "../components/Reveal";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [subjectOfInquiry, setSubjectOfInquiry] = useState('Intake Conversation – Program Fit');
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

    // Update with your actual contact email
    const contactEmail = 'inquiry@sagefutures.org';
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };
  const scrollToForm = () => {
    const form = document.getElementById("contact-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fade-in pt-24 md:pt-32 pb-16 md:pb-24 bg-brand-offwhite">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Reveal as="section" className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal">Contact</h1>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            If you are exploring partnership, program fit, or institutional strengthening, we welcome an intake conversation.
          </p>
          <button
            type="button"
            onClick={scrollToForm}
            className="inline-block bg-brand-sage text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-brass transition-all duration-300"
          >
            Request an Intake Conversation
          </button>
        </Reveal>

        <Reveal as="section" className="bg-white p-8 md:p-10 border border-brand-stone shadow-sm" delayMs={120}>
            {submitted && (
              <div className="mb-8 rounded-md border border-brand-evergreen/40 bg-brand-evergreen/5 px-4 py-3 text-xs tracking-[0.2em] uppercase text-brand-evergreen flex items-center gap-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Inquiry received. We will respond with next steps.
              </div>
            )}
            <form id="contact-form" className="space-y-8" onSubmit={handleSubmit}>
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
                  <option>Intake Conversation – Program Fit</option>
                  <option>Community Development – Triple U Initiative</option>
                  <option>Funding &amp; Grant Readiness – Liquidity Initiative</option>
                  <option>Strategic Advisory &amp; Technical Assistance – Unfinished Business Initiative</option>
                  <option>Analog Village Interest</option>
                  <option>Other / Not Listed</option>
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
                className="w-full bg-brand-sage text-white py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-brass transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Request an Intake Conversation
              </button>
            </form>
          </Reveal>
      </div>
    </div>
  );
};

export default Contact;
