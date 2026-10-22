import React, { useState } from 'react';

export default function ProductDetailDrawer({
  product,
  onClose,
  isSaved,
  onToggleSave,
  onPlaceOrder,
  orderSuccess,
  onResetOrderSuccess
}) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [buyerPhone, setBuyerPhone] = useState('');
  const [buyerName, setBuyerName] = useState('');

  if (!product) return null;

  const images = product.images && product.images.length > 0 ? product.images : [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAWn8sUEKP2hUXeGmRVku_r-tW1wyqG13wlGaIxEO51yfPISQoMf7K7szCMkU48Z1mo_7trenfepxfVKHH9XJijoFnZaVweGJLCMn-V6dOiJ0BxwPOG4yoJzu3owgHvLTJXwFGfJHMDMbkG8rSG_x7SAe7tDg99V5Rn7wOVoEzvwoyVYDt0bxU97haO36uM3CWK75DF02-wp9OpjycduAXoANVxfmFEMIsFrfhbbFOyR93Ec76jTIlGeA'
  ];

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    onPlaceOrder({
      productId: product.id,
      productTitle: product.title,
      price: product.price || 3450,
      artisanName: product.artisanName || 'Master Artisan',
      buyerName: buyerName || 'Appreciative Patron',
      buyerPhone: buyerPhone || '+91 98765 43210',
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-4xl bg-[#1d1b1a] shadow-2xl flex flex-col overflow-hidden text-[#f5f1eb] border-l border-[#2e2b28]">
          
          {/* Header Action Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#2e2b28] bg-[#141312]/90 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#ffdbcf] text-[#390c00]">
                {product.category || 'GI Certified Craft'}
              </span>
              {product.provenance?.authenticityCode && (
                <span className="text-xs font-mono text-[#8a726a] hidden sm:inline">
                  Reg: {product.provenance.authenticityCode}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onToggleSave(product.id)}
                className={`p-2 rounded-full border transition-all ${
                  isSaved
                    ? 'bg-[#9f3c16] border-[#bf542c] text-white'
                    : 'border-[#38332f] text-[#dec0b7] hover:text-white hover:bg-[#252220]'
                }`}
                title="Save this craft"
              >
                <span className="material-symbols-outlined text-[18px]">bookmark</span>
              </button>
              
              <button
                onClick={onClose}
                className="p-2 rounded-full border border-[#38332f] text-[#dec0b7] hover:text-white hover:bg-[#252220] transition-colors"
                aria-label="Close drawer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-full">
              
              {/* Left Column: Visual Media & Thumbnails */}
              <div className="lg:col-span-7 bg-[#141312] p-4 sm:p-6 flex flex-col justify-between">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-black/60 shadow-inner flex items-center justify-center">
                  <img
                    src={images[activeImageIdx]}
                    alt={`${product.title} preview`}
                    className="w-full h-full object-contain sm:object-cover"
                  />

                  {images.length > 1 && (
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/70 text-white text-[11px] font-mono">
                      {activeImageIdx + 1} / {images.length}
                    </div>
                  )}
                </div>

                {images.length > 1 && (
                  <div className="flex gap-2.5 mt-4 overflow-x-auto pb-1">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIdx(idx)}
                        className={`relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                          activeImageIdx === idx
                            ? 'border-[#bf542c]'
                            : 'border-[#2e2b28] opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="thumb" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                <div className="mt-4 p-3 rounded-xl bg-[#1d1b1a] border border-[#2e2b28] text-xs text-[#a8a29e] flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-emerald-400 text-[20px]">verified</span>
                  <span>
                    Direct-from-artisan verified. 85% directly to artisan UPI. Zero middleman cuts.
                  </span>
                </div>
              </div>

              {/* Right Column: Artisan Details, Craft Provenance & Checkout */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#1d1b1a]">
                <div className="space-y-6">
                  
                  <div>
                    <h2 className="font-headline text-2xl sm:text-3xl font-semibold text-[#f5f1eb] leading-tight">
                      {product.title}
                    </h2>
                    <div className="mt-3 flex items-baseline gap-3">
                      <span className="text-3xl font-bold text-[#ffb59c]">
                        ₹{(product.price || 3450).toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-emerald-400 font-semibold">
                        Free Insured Shipping
                      </span>
                    </div>
                  </div>

                  {/* Artisan Profile Card */}
                  <div className="p-4 rounded-2xl bg-[#141312] border border-[#2e2b28] flex items-center gap-3.5">
                    {product.artisanAvatar ? (
                      <img
                        src={product.artisanAvatar}
                        alt={product.artisanName}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-[#bf542c]"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-[#bf542c]/20 text-[#ffb59c] flex items-center justify-center font-bold text-sm">
                        {product.artisanName?.slice(0, 2).toUpperCase() || 'AR'}
                      </div>
                    )}
                    <div>
                      <p className="text-[11px] font-semibold text-[#ffb59c] uppercase tracking-wider">
                        Master Artisan
                      </p>
                      <h4 className="font-bold text-[#f5f1eb] text-sm">
                        {product.artisanName}
                      </h4>
                      <p className="text-xs text-[#8a726a] flex items-center gap-1 mt-0.5">
                        <span className="material-symbols-outlined text-[14px] text-[#ffb59c]">location_on</span>
                        <span>{product.village || 'Karnataka Guild'}</span>
                      </p>
                    </div>
                  </div>

                  {/* Provenance */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-[#f5f1eb] font-headline font-semibold text-base border-b border-[#2e2b28] pb-2">
                      <span className="material-symbols-outlined text-[18px] text-[#ffb59c]">auto_stories</span>
                      <span>Craft Provenance & Heritage</span>
                    </div>

                    <div className="space-y-2 text-xs text-[#a8a29e]">
                      <div className="p-3 rounded-xl bg-[#141312] border border-[#2e2b28] flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[#ffb59c] text-[18px] shrink-0 mt-0.5">schedule</span>
                        <div>
                          <strong className="text-[#f5f1eb] block">Time Invested:</strong>
                          <span>{product.provenance?.timeSpent || '42 hours of needlework'}</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#141312] border border-[#2e2b28] flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[#ffb59c] text-[18px] shrink-0 mt-0.5">palette</span>
                        <div>
                          <strong className="text-[#f5f1eb] block">Materials & Dyes:</strong>
                          <span>{product.provenance?.materials || 'Organic khadi and vegetable dye'}</span>
                        </div>
                      </div>

                      {product.provenance?.technique && (
                        <div className="p-3 rounded-xl bg-[#141312] border border-[#2e2b28] flex items-start gap-2.5">
                          <span className="material-symbols-outlined text-[#ffb59c] text-[18px] shrink-0 mt-0.5">check_circle</span>
                          <div>
                            <strong className="text-[#f5f1eb] block">Technique:</strong>
                            <span>{product.provenance.technique}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-[#a8a29e] leading-relaxed">
                    {product.description}
                  </p>

                </div>

                {/* Checkout & Inquiry */}
                <div className="pt-6 mt-6 border-t border-[#2e2b28]">
                  <form onSubmit={handleSubmitOrder} className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Your Name (Optional)"
                        value={buyerName}
                        onChange={(e) => setBuyerName(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-[#38332f] bg-[#141312] text-[#f5f1eb] focus:outline-none focus:ring-1 focus:ring-[#bf542c]"
                      />
                      <input
                        type="tel"
                        placeholder="WhatsApp / Phone"
                        value={buyerPhone}
                        onChange={(e) => setBuyerPhone(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-[#38332f] bg-[#141312] text-[#f5f1eb] focus:outline-none focus:ring-1 focus:ring-[#bf542c]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-xl bg-[#9f3c16] hover:bg-[#bf542c] text-white font-semibold text-sm shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[18px]">bolt</span>
                      <span>Direct Buy & Connect with Artisan</span>
                    </button>
                  </form>
                  <p className="text-[11px] text-center text-[#8a726a] mt-2">
                    85% goes directly to the master artisan's UPI account.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Success Modal */}
      {orderSuccess && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-[#1d1b1a] rounded-3xl p-6 sm:p-8 text-center shadow-2xl border border-[#38332f] text-[#f5f1eb]">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>

            <h3 className="font-headline text-2xl font-bold mb-1">
              Order Placed!
            </h3>
            <p className="text-xs font-semibold text-emerald-400 mb-3">
              Direct Notification & WhatsApp Dispatched
            </p>

            <div className="p-4 rounded-2xl bg-[#141312] border border-[#2e2b28] text-left text-xs space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-[#8a726a]">Craft:</span>
                <span className="font-bold text-[#f5f1eb]">{orderSuccess.productTitle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8a726a]">Total:</span>
                <span className="font-bold text-[#ffb59c]">₹{orderSuccess.price.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8a726a]">Artisan Beneficiary:</span>
                <span className="font-medium text-[#f5f1eb]">{orderSuccess.artisanName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8a726a]">Artisan UPI Payout:</span>
                <span className="text-emerald-400 font-semibold">85% Instant Escrow</span>
              </div>
            </div>

            <button
              onClick={() => {
                onResetOrderSuccess();
                onClose();
              }}
              className="w-full py-2.5 rounded-xl bg-[#9f3c16] hover:bg-[#bf542c] text-white font-semibold text-sm transition-all"
            >
              Back to Showcase
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
