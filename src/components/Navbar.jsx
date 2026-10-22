import React from 'react';

export const categories = [
  'All Crafts (142)',
  '✨ GI Certified Only',
  'Kasuti Embroidery',
  'Beedu Palm & Cane',
  'Coastal Handloom',
  'Natural Indigo Dye',
  'Direct Workshop Price',
  'Under ₹2,000'
];

export default function Navbar({
  searchQuery,
  onSearchChange,
  onOpenListingModal,
  cartCount = 2,
  savedCount = 1,
  activeTab = 'Discover',
  setActiveTab
}) {
  return (
    <header className="sticky top-0 z-50 bg-[#141312]/95 backdrop-blur-md shadow-sm border-b border-[#2a2724]">
      <div className="w-full px-6 lg:px-14 max-w-7xl mx-auto flex items-center justify-between py-3">
        {/* Left: Brand Logo & Tagline */}
        <div className="flex items-center gap-6 flex-1 max-w-2xl">
          <a href="#" className="flex flex-col group flex-shrink-0">
            <span className="font-headline text-2xl lg:text-[26px] font-semibold text-[#ffb59c] tracking-tight">
              Karigar Heritage
            </span>
            <span className="text-[11px] text-[#8a726a] tracking-wider font-semibold">
              Direct from Rural & Coastal Master Artisans
            </span>
          </a>

          {/* Search Bar with Voice Input & Language Selector */}
          <div className="relative w-full max-w-md hidden sm:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8a726a]">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search craft, region (Bagalkot, Karwar), artisan..."
              className="w-full pl-9 pr-24 py-2 bg-[#1d1b1a] text-[#f5f1eb] text-sm rounded-full border border-[#38332f] focus:outline-none focus:ring-2 focus:ring-[#bf542c] focus:border-transparent transition-all placeholder:text-[#a8a29e]/70 shadow-sm"
            />
            <div className="absolute inset-y-0 right-1.5 flex items-center gap-1">
              <button
                type="button"
                className="p-1.5 text-[#ffb59c] hover:bg-[#252220] rounded-full transition-colors flex items-center justify-center"
                title="Voice Search in Kannada / Hindi / English"
              >
                <span className="material-symbols-outlined text-[18px]">mic</span>
              </button>
              <button
                type="button"
                className="flex items-center gap-0.5 text-xs font-semibold text-[#dec0b7] bg-[#2a2724] px-2 py-1 rounded-full hover:bg-[#34302c] transition-colors"
              >
                <span className="material-symbols-outlined text-[14px]">translate</span>
                <span>KN</span>
              </button>
            </div>
          </div>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6">
          {['Discover', 'Artisans', 'Story Reels', 'Craft Archives', 'GI Map'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab && setActiveTab(tab)}
              className={`text-sm font-semibold transition-colors pb-1 ${
                activeTab === tab
                  ? 'text-[#ffb59c] border-b-2 border-[#bf542c]'
                  : 'text-[#e5e2dc]/80 hover:text-[#ffb59c]'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-3">
          {/* Artisan Corner CTA */}
          <button
            onClick={onOpenListingModal}
            className="hidden md:inline-flex items-center gap-2 bg-[#9f3c16] text-white px-3.5 py-1.5 rounded-lg text-sm font-semibold shadow-sm hover:bg-[#bf542c] active:scale-[0.99] transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">storefront</span>
            <span>Create Listing</span>
          </button>

          {/* Icon Actions */}
          <div className="flex items-center gap-1 border-l border-[#3a3532] pl-3 ml-1">
            <button
              className="p-2 text-[#dec0b7] hover:text-[#ffb59c] rounded-full hover:bg-[#1d1b1a] transition-colors relative"
              title="Saved Moodboards"
            >
              <span className="material-symbols-outlined text-[20px]">bookmark</span>
              {savedCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#9f3c16] rounded-full"></span>
              )}
            </button>

            <button
              className="p-2 text-[#dec0b7] hover:text-[#ffb59c] rounded-full hover:bg-[#1d1b1a] transition-colors relative"
              title="Direct Buy Cart"
            >
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
              <span className="absolute top-0.5 right-0.5 bg-[#bf542c] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>

            <button
              className="p-2 text-[#dec0b7] hover:text-[#ffb59c] rounded-full hover:bg-[#1d1b1a] transition-colors"
              title="Account"
            >
              <span className="material-symbols-outlined text-[22px]">account_circle</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
