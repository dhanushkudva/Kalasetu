import React from 'react';

export default function ArtisanBanner({ onOpenListingModal }) {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-[#1d1b1a] border border-[#2e2b28] p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 z-10 relative">
        <div className="space-y-1 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 bg-[#9f3c16]/20 text-[#ffb59c] px-2.5 py-0.5 rounded-full text-[11px] font-semibold">
            <span className="material-symbols-outlined text-[14px]">verified_user</span>
            <span>Zero-Literacy Voice Onboarding Enabled</span>
          </div>
          <h3 className="font-headline text-2xl text-[#f5f1eb] font-semibold leading-tight">
            Are you a Rural or Coastal Artisan? Sell directly with 3 photos & a voice note.
          </h3>
          <p className="text-[#a8a29e] text-xs sm:text-sm leading-relaxed">
            No paperwork or commissions. 85% goes straight to your UPI account within 48 hours of dispatch. Local pickup centers in Bagalkot, Honnavar, and Dharwad.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onOpenListingModal}
            className="inline-flex items-center gap-2 bg-[#9f3c16] text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-sm hover:bg-[#bf542c] active:scale-[0.99] transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">record_voice_over</span>
            <span>Start 60-Second Listing</span>
          </button>
          
          <button
            onClick={() => alert("Calling Artisan Helpline in Kannada / Hindi...")}
            className="inline-flex items-center gap-1.5 bg-[#252220] border border-[#443e3a] text-[#f5f1eb] px-3 py-2 rounded-lg text-xs font-semibold hover:bg-[#322d29] transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">support_agent</span>
            <span>Artisan Helpline (ಕನ್ನಡ / हिन्दी)</span>
          </button>
        </div>
      </div>

      {/* Background subtle craft pattern accent */}
      <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#9f3c16]/10 rounded-full pointer-events-none"></div>
    </section>
  );
}
