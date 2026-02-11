import React, { useState } from "react";

const Checkout: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank">("card");
  const [processing, setProcessing] = useState(false);

  const price = 2500; // change if needed

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      alert("Demo only – no real payment processed.");
    }, 2000);
  };

  return (
    <div className="fade-in pt-32 pb-24 bg-brand-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <h1 className="text-4xl md:text-5xl font-serif text-brand-sage">
          Engagement Checkout
        </h1>

        <form onSubmit={handleSubmit} className="space-y-12">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-charcoal mb-6">
              Payment Method
            </h3>

            <div className="flex space-x-4 border-b border-brand-stone/30 mb-8">
              <button
                type="button"
                onClick={() => setPaymentMethod("card")}
                className={`px-4 py-3 text-xs font-bold uppercase tracking-widest ${
                  paymentMethod === "card"
                    ? "border-b-2 border-brand-brass text-brand-brass"
                    : "text-brand-charcoal/40"
                }`}
              >
                Stripe / Card
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("bank")}
                className={`px-4 py-3 text-xs font-bold uppercase tracking-widest ${
                  paymentMethod === "bank"
                    ? "border-b-2 border-brand-brass text-brand-brass"
                    : "text-brand-charcoal/40"
                }`}
              >
                Bank Transfer
              </button>
            </div>

            {paymentMethod === "card" ? (
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full border-b py-2 outline-none"
                />
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="MM / YY"
                    className="border-b py-2 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="border-b py-2 outline-none"
                  />
                </div>
              </div>
            ) : (
              <div className="bg-brand-offwhite p-6 border border-brand-stone/50 space-y-4">
                <p className="text-sm text-brand-charcoal/70">
                  A pro-forma invoice will be issued upon confirmation.
                </p>
                <div className="text-xs font-mono uppercase space-y-2">
                  <div className="flex justify-between">
                    <span>Bank Name</span>
                    <span>Sage Global Trustees</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Account Holder</span>
                    <span>Sage Futures Ltd.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SWIFT</span>
                    <span>SAGEUS33XXX</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ref ID</span>
                    <span>
                      SF-{Math.floor(Math.random() * 90000) + 10000}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <button
              disabled={processing}
              type="submit"
              className={`w-full bg-brand-sage text-white py-4 font-bold uppercase tracking-widest ${
                processing ? "opacity-70 cursor-wait" : ""
              }`}
            >
              {processing
                ? "Processing..."
                : paymentMethod === "card"
                ? `Confirm Engagement $${price}`
                : `Request Invoice $${price}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
