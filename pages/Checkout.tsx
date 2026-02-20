
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Checkout: React.FC = () => {
  const location = useLocation();
  const [tier, setTier] = useState('Diagnostic Consultation');
  const [price, setPrice] = useState('450');
  const [processing, setProcessing] = useState(false);
  const [complete, setComplete] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank'>('card');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const t = params.get('tier');
    const p = params.get('price');
    if (t) setTier(t);
    if (p) setPrice(p);
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    // Simulate payment processing or registration
    setTimeout(() => {
      setProcessing(false);
      setComplete(true);
    }, 2500);
  };

  if (complete) {
    return (
      <div className="pt-48 pb-32 flex items-center justify-center fade-in">
        <div className="max-w-md w-full text-center px-6">
          <div className="w-20 h-20 bg-brand-evergreen/10 text-brand-evergreen rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-serif text-brand-sage mb-4">
            {paymentMethod === 'card' ? 'Payment Successful' : 'Inquiry Registered'}
          </h1>
          <p className="text-brand-charcoal/60 mb-10 leading-relaxed">
            {paymentMethod === 'card' 
              ? `Your engagement for ${tier} has been secured. You will receive a confirmation email shortly.`
              : `Your request for bank transfer engagement has been logged. Please check your email for the official invoice and transfer instructions.`}
          </p>
          <Link to="/" className="inline-block bg-brand-sage text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-brass transition-all">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-brand-offwhite min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link to="/pricing" className="text-xs font-bold text-brand-brass uppercase tracking-widest flex items-center hover:opacity-70 transition-opacity">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            Back to Pricing
          </Link>
          <h1 className="text-4xl font-serif text-brand-sage mt-6">Secure Checkout</h1>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-brand-charcoal/50 max-w-xl">
            Note: Most purchases are now completed via Amazon using the pricing page. This page is reserved for invoice-based engagements and bank transfers.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Order Summary */}
          <div className="lg:col-span-2 order-2 lg:order-1 bg-white border border-brand-stone p-8 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-charcoal/40 mb-8 pb-4 border-b border-brand-stone/50">Order Summary</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-brand-charcoal text-sm">{tier}</p>
                  <p className="text-xs text-brand-charcoal/40 mt-1 uppercase tracking-widest">Engagement Service</p>
                </div>
                <p className="font-serif text-brand-sage">${price}</p>
              </div>
              <div className="pt-6 border-t border-brand-stone/30 space-y-2">
                <div className="flex justify-between text-xs text-brand-charcoal/60">
                  <span>Subtotal</span>
                  <span>${price}.00</span>
                </div>
                <div className="flex justify-between text-xs text-brand-charcoal/60">
                  <span>Processing Fee</span>
                  <span>$0.00</span>
                </div>
              </div>
              <div className="pt-6 border-t-2 border-brand-sage flex justify-between items-end">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-sage">Total Due</span>
                <span className="text-2xl font-serif text-brand-sage">${price}.00</span>
              </div>
            </div>
            
            <div className="mt-12 space-y-4">
              <div className="flex items-center text-[10px] text-brand-charcoal/40 uppercase tracking-widest">
                <svg className="w-4 h-4 mr-2 text-brand-evergreen" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Secure 256-bit SSL Encryption
              </div>
              <div className="flex items-center text-[10px] text-brand-charcoal/40 uppercase tracking-widest">
                <svg className="w-4 h-4 mr-2 text-brand-evergreen" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" /><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" /></svg>
                PCI DSS Compliant Infrastructure
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="bg-white border border-brand-stone p-8 md:p-12 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-charcoal mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-brand-charcoal/50 font-bold">Email Address</label>
                      <input type="email" required className="w-full bg-transparent border-b border-brand-stone py-2 focus:border-brand-brass outline-none transition-colors" placeholder="e.g. contact@organization.com" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-charcoal mb-6">Payment Method</h3>
                  <div className="space-y-6">
                    <div className="flex space-x-2 mb-8 border-b border-brand-stone/30">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        className={`px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-all ${
                          paymentMethod === 'card' 
                            ? 'border-b-2 border-brand-brass text-brand-brass' 
                            : 'text-brand-charcoal/30 border-b-2 border-transparent hover:text-brand-charcoal/60'
                        }`}
                      >
                        Stripe / Card
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('bank')}
                        className={`px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-all ${
                          paymentMethod === 'bank' 
                            ? 'border-b-2 border-brand-brass text-brand-brass' 
                            : 'text-brand-charcoal/30 border-b-2 border-transparent hover:text-brand-charcoal/60'
                        }`}
                      >
                        Bank Transfer
                      </button>
                    </div>
                    
                    {paymentMethod === 'card' ? (
                      <div className="space-y-6 fade-in">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest text-brand-charcoal/50 font-bold">Card Details</label>
                          <div className="relative">
                            <input type="text" required pattern="[0-9 ]*" className="w-full bg-transparent border-b border-brand-stone py-2 focus:border-brand-brass outline-none transition-colors pr-12" placeholder="0000 0000 0000 0000" />
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex space-x-1">
                              <div className="w-6 h-4 bg-brand-stone/20 rounded-sm"></div>
                              <div className="w-6 h-4 bg-brand-stone/40 rounded-sm"></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-8">
                          <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-brand-charcoal/50 font-bold">Expiry Date</label>
                            <input type="text" required placeholder="MM / YY" className="w-full bg-transparent border-b border-brand-stone py-2 focus:border-brand-brass outline-none transition-colors" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-brand-charcoal/50 font-bold">CVC</label>
                            <input type="text" required placeholder="000" className="w-full bg-transparent border-b border-brand-stone py-2 focus:border-brand-brass outline-none transition-colors" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6 fade-in bg-brand-offwhite p-6 border border-brand-stone/50">
                        <p className="text-xs text-brand-charcoal/70 leading-relaxed mb-4">
                          Upon confirmation, we will generate a pro-forma invoice for your accounts department. Engagement formally commences upon receipt of cleared funds.
                        </p>
                        <div className="space-y-4 font-mono text-[10px] text-brand-charcoal/80 uppercase tracking-widest">
                          <div className="flex justify-between border-b border-brand-stone/20 pb-2">
                            <span>Bank Name</span>
                            <span className="font-bold">Sage Global Trustees</span>
                          </div>
                          <div className="flex justify-between border-b border-brand-stone/20 pb-2">
                            <span>Account Holder</span>
                            <span className="font-bold">Sage Futures Ltd.</span>
                          </div>
                          <div className="flex justify-between border-b border-brand-stone/20 pb-2">
                            <span>SWIFT / BIC</span>
                            <span className="font-bold">SAGEUS33XXX</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Ref ID</span>
                            <span className="font-bold text-brand-brass italic">SF-{Math.floor(Math.random() * 90000) + 10000}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-8">
                  <button 
                    disabled={processing}
                    type="submit" 
                    className={`w-full bg-brand-sage text-white py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-brass transition-all flex items-center justify-center ${processing ? 'opacity-70 cursor-wait' : ''}`}
                  >
                    {processing ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {paymentMethod === 'card' ? 'Securing Funds...' : 'Generating Invoice...'}
                      </>
                    ) : (
                      paymentMethod === 'card' ? `Confirm Engagement $${price}.00` : `Request Bank Invoice $${price}.00`
                    )}
                  </button>
                  <p className="mt-6 text-[10px] text-center text-brand-charcoal/40 font-medium uppercase tracking-[0.1em] leading-relaxed">
                    {paymentMethod === 'card' 
                      ? 'By confirming, you authorize Sage Futures to process this one-time transaction.'
                      : 'By requesting, you acknowledge that project milestones are subject to transfer verification.'}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
