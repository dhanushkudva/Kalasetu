import React from 'react';

export default function MasonryGrid({
  products,
  onSelectProduct,
  savedProductIds,
  onToggleSave,
  onQuickBuy
}) {
  return (
    <section className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
      {products.map((item) => {
        // Spotlight Bento Item: Fair Price Transparency Card
        if (item.isTransparencyCard) {
          return (
            <article
              key={item.id}
              className="break-inside-avoid bg-[#1d1b1a] rounded-xl p-5 border-2 border-[#bf542c]/40 shadow-sm space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs bg-[#ffdbcf] text-[#390c00] px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">handshake</span>
                  Fair-Trade Promise
                </span>
                <span className="text-[11px] text-[#8a726a] font-semibold">GI Registry Certified</span>
              </div>

              <div>
                <h3 className="font-headline text-xl text-[#f5f1eb] font-semibold">
                  {item.title}
                </h3>
                <p className="text-xs text-[#a8a29e] mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Visual Price Breakdown Progress Bar */}
              <div className="space-y-2 pt-1">
                <div className="w-full h-3 rounded-full overflow-hidden flex bg-[#2a2724]">
                  <div className="bg-[#9f3c16]" style={{ width: '85%' }} title="Artisan Take-home (85%)"></div>
                  <div className="bg-[#af6102]" style={{ width: '10%' }} title="Raw Material & Natural Dyes (10%)"></div>
                  <div className="bg-[#4f5e80]" style={{ width: '5%' }} title="Packaging & Fair Logistics (5%)"></div>
                </div>

                {/* Breakdown Legend */}
                <div className="grid grid-cols-3 gap-2 text-center pt-2">
                  <div className="p-2 bg-[#141312] rounded-lg border border-[#34302c]">
                    <span className="block font-bold text-[#ffb59c] text-base">85%</span>
                    <span className="text-[10px] text-[#a8a29e]">Direct to Artisan UPI</span>
                  </div>
                  <div className="p-2 bg-[#141312] rounded-lg border border-[#34302c]">
                    <span className="block font-bold text-[#ffdcc2] text-base">10%</span>
                    <span className="text-[10px] text-[#a8a29e]">Natural Dyes & Silk</span>
                  </div>
                  <div className="p-2 bg-[#141312] rounded-lg border border-[#34302c]">
                    <span className="block font-bold text-[#c7d7ff] text-base">5%</span>
                    <span className="text-[10px] text-[#a8a29e]">Craft Packaging</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#141312] rounded-lg text-xs text-[#dec0b7] flex items-start gap-2 border border-[#34302c]">
                <span className="material-symbols-outlined text-[#ffb59c] text-[18px] flex-shrink-0">account_balance</span>
                <span>Zero platform commissions. Operations funded by the Ministry of MSME & Artisan Grant Program.</span>
              </div>
            </article>
          );
        }

        // Instagram Story / Audio Preview Reel Card
        if (item.isReel) {
          return (
            <article
              key={item.id}
              className="break-inside-avoid bg-[#1d1b1a] rounded-xl overflow-hidden shadow-sm border border-[#38332f] relative group"
            >
              <div className="relative h-80 overflow-hidden cursor-pointer" onClick={() => onSelectProduct(item)}>
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/95 via-[#141312]/40 to-transparent"></div>

                {/* Reel Audio Header */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between text-white">
                  <span className="bg-[#9f3c16]/90 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">videocam</span>
                    Field Audio Reel
                  </span>
                  <span className="text-xs bg-black/50 backdrop-blur-md text-white px-2 py-0.5 rounded font-mono">
                    {item.audioDuration}
                  </span>
                </div>

                {/* Center Audio Wave / Play Trigger */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(item);
                    }}
                    className="w-14 h-14 rounded-full bg-white/90 text-[#9f3c16] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                  >
                    <span className="material-symbols-outlined text-[32px] pl-1">play_arrow</span>
                  </button>
                </div>

                {/* Bottom Audio & Provenance Info */}
                <div className="absolute bottom-4 inset-x-4 text-white space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#ffdbcf]">
                    <span className="material-symbols-outlined text-[16px]">graphic_eq</span>
                    <span>{item.audioTitle}</span>
                  </div>
                  <p className="font-headline text-lg text-white leading-tight">
                    "{item.quote}"
                  </p>
                  <p className="text-xs text-[#a8a29e]">{item.artisanName} • {item.village}</p>
                </div>
              </div>

              <div className="p-3 bg-[#1d1b1a] border-t border-[#2e2b28] flex items-center justify-between">
                <span className="text-[11px] text-[#8a726a]">Listen with Kannada / English Subtitles</span>
                <button
                  onClick={() => onSelectProduct(item)}
                  className="text-[#ffb59c] text-xs font-semibold hover:underline flex items-center gap-0.5"
                >
                  <span>Open Reel</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </article>
          );
        }

        // Standard Heritage Craft Card
        const isSaved = savedProductIds.includes(item.id);

        return (
          <article
            key={item.id}
            onClick={() => onSelectProduct(item)}
            className="break-inside-avoid bg-[#1d1b1a] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[#2e2b28] group flex flex-col cursor-pointer"
          >
            {/* Image Container with Hover Actions */}
            <div className="relative overflow-hidden bg-black/40">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Top Floating Pills */}
              <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                <span className="bg-[#141312]/90 backdrop-blur-md text-[#f5f1eb] text-xs font-medium px-2.5 py-1 rounded-full shadow-sm pointer-events-auto border border-[#38332f] flex items-center gap-1 font-serif">
                  <span className="material-symbols-outlined text-[14px] text-[#ffb59c]">verified</span>
                  {item.giTag || 'GI Certified Heritage'}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleSave(item.id);
                  }}
                  className={`w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-colors pointer-events-auto shadow-sm ${
                    isSaved
                      ? 'bg-[#9f3c16] text-white'
                      : 'bg-[#141312]/90 text-[#f5f1eb] hover:bg-[#9f3c16] hover:text-white'
                  }`}
                  title="Save to Craft Moodboard"
                >
                  <span className="material-symbols-outlined text-[18px]">bookmark</span>
                </button>
              </div>

              {/* Bottom Micro-Badge */}
              <div className="absolute bottom-3 left-3 pointer-events-none">
                <span className="bg-[#141312]/90 backdrop-blur-md text-[#f5f1eb] text-[11px] font-semibold px-2 py-0.5 rounded shadow-sm border border-[#34302c]">
                  100% Direct to Artisan
                </span>
              </div>
            </div>

            {/* Content & Social Lineage */}
            <div className="p-4 space-y-3">
              <div>
                <h3 className="font-headline text-lg text-[#f5f1eb] group-hover:text-[#ffb59c] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#a8a29e] line-clamp-2 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Artisan Lockup & Hours of Work */}
              <div className="flex items-center justify-between pt-2 border-t border-[#2e2b28]">
                <div className="flex items-center gap-2">
                  {item.artisanAvatar ? (
                    <img
                      src={item.artisanAvatar}
                      alt={item.artisanName}
                      className="w-8 h-8 rounded-full object-cover border border-[#3a3532]"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-[#4f5e80]/30 text-[#c7d7ff] flex items-center justify-center font-bold text-xs border border-[#3a3532]">
                      {item.artisanName?.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-semibold text-[#f5f1eb] leading-tight">
                      {item.artisanName}
                    </p>
                    <p className="text-[11px] text-[#8a726a] font-medium">
                      {item.timeSpent || '32 hrs needlework'}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-base font-bold text-[#f5f1eb]">
                    ₹{item.price?.toLocaleString('en-IN')}
                  </span>
                  {item.freeShipping && (
                    <p className="text-[10px] text-emerald-400 font-semibold">
                      Free Insured Shipping
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onQuickBuy(item);
                  }}
                  className="flex-1 bg-[#9f3c16] text-white py-2 rounded-lg text-xs font-semibold hover:bg-[#bf542c] transition-colors shadow-sm flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">bolt</span>
                  <span>Direct Buy</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProduct(item);
                  }}
                  className="p-2 border border-[#3a3532] hover:bg-[#252220] rounded-lg text-[#dec0b7] transition-colors"
                  title="Artisan Story"
                >
                  <span className="material-symbols-outlined text-[18px]">auto_stories</span>
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
