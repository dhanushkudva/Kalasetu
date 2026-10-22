import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#141312] border-t border-[#2a2724] text-[#a8a29e] mt-12">
      <div className="w-full px-6 lg:px-14 py-10 max-w-7xl mx-auto flex flex-col gap-6">
        {/* Top Row: Logo & Mission */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#2a2724]">
          <div className="space-y-1">
            <span className="font-headline text-2xl font-semibold text-[#ffb59c]">
              Karigar Heritage
            </span>
            <p className="text-xs text-[#a8a29e] max-w-xl leading-relaxed">
              A certified digital craft custodian bridging rural Indian weavers directly to conscious patrons worldwide with zero middlemen and full GI provenance.
            </p>
          </div>

          {/* Language and Accessibility Toggles */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-[#1d1b1a] px-3 py-1.5 rounded-lg border border-[#34302c] text-xs">
              <span className="text-[#8a726a] mr-2">Language:</span>
              <span className="font-semibold text-[#ffb59c]">ಕನ್ನಡ (Kannada)</span>
              <span className="mx-1.5 text-[#443e3a]">|</span>
              <span className="font-medium text-[#dec0b7]">English</span>
              <span className="mx-1.5 text-[#443e3a]">|</span>
              <span className="font-medium text-[#dec0b7]">हिन्दी</span>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold">
          <a className="text-[#ffb59c] hover:underline" href="#">
            Impact Dashboard (₹42L Disbursed directly)
          </a>
          <a className="text-[#dec0b7] hover:text-[#ffb59c] transition-colors" href="#">
            Bagalkot Weaver Guild
          </a>
          <a className="text-[#dec0b7] hover:text-[#ffb59c] transition-colors" href="#">
            Coastal Coir Syndicate
          </a>
          <a className="text-[#dec0b7] hover:text-[#ffb59c] transition-colors" href="#">
            GI Certification Registry
          </a>
          <a className="text-[#dec0b7] hover:text-[#ffb59c] transition-colors" href="#">
            Ethical Sourcing Charter
          </a>
          <a className="text-[#dec0b7] hover:text-[#ffb59c] transition-colors" href="#">
            Artisan Grant Program
          </a>
          <a className="text-[#dec0b7] hover:text-[#ffb59c] transition-colors" href="#">
            Field Audio Archives
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="pt-4 border-t border-[#2a2724] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[#8a726a]">
            © 2025 Karigar Heritage Collective. Certified GI Craft Custodians. Direct Fair-Trade Commerce for Rural & Coastal Indian Guilds.
          </p>
          <div className="flex items-center gap-3 text-xs text-[#8a726a]">
            <span>Khadi Mark Certified</span>
            <span>•</span>
            <span>Silk Mark India</span>
            <span>•</span>
            <span>Handloom Mark</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
