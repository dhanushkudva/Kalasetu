import React, { useState } from 'react';

export default function ArtisanListingModal({
  isOpen,
  onClose,
  onAddNewProduct
}) {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Kasuti Embroidery');
  const [imagePreview, setImagePreview] = useState('');
  const [artisanName, setArtisanName] = useState('Shakuntala Devi');
  const [village, setVillage] = useState('Bagalkot Guild');
  const [timeSpent, setTimeSpent] = useState('36 hrs needlework');

  if (!isOpen) return null;

  const quickSamples = [
    {
      label: 'Kasuti Chariot',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWn8sUEKP2hUXeGmRVku_r-tW1wyqG13wlGaIxEO51yfPISQoMf7K7szCMkU48Z1mo_7trenfepxfVKHH9XJijoFnZaVweGJLCMn-V6dOiJ0BxwPOG4yoJzu3owgHvLTJXwFGfJHMDMbkG8rSG_x7SAe7tDg99V5Rn7wOVoEzvwoyVYDt0bxU97haO36uM3CWK75DF02-wp9OpjycduAXoANVxfmFEMIsFrfhbbFOyR93Ec76jTIlGeA'
    },
    {
      label: 'Beedu Cane Basket',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAim2-d9n0dVsQEaRN8CeefGt3c2KZBI8KfoYV8YVjcVFmzNCOBahAtnMgfifue7PTtxp4rFiTo50F5DUjKHVy_792B6a75QekYDDgEJdEH8A-GBc4dKuS8S35K6QWnayy5mpYtCAmEfasUmhoG7azrK3E9hTFpCynmpxuEuyk7a9I_Gye0qwzMWxcGjk1Mm5sFfWSWK9aDcrilCYJq50QDSMoaYasEDzqzutS0mKbmYfpwxd2RrF3lFQ'
    },
    {
      label: 'Coastal Coir Pod',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3klzsSFTxOt6JXDFp3nYI8WRM-XQKq8O59GiKILqOwzjSk1rhStVnnYBJQBxXTCTzIlYiRiDyAf1pkmim2_WmJKiJNa2Sg94Ki7tDRS1uVkXQKU1CNo2ghiRl7P7WuHM9M0XdVw49ERZSMFcaAMKTaTnLlFs7WWfiBY9f4p0fByEVG9Qe8RDfrDvv7PZQRBwOuE2K5C_UnvEZ7AKP5bI9WtcAuYgN-I4gAt84a2MHVE-A9VO3yp0NyA'
    }
  ];

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName.trim() || !price) {
      alert('Please fill craft name and price.');
      return;
    }

    const newCraft = {
      id: `custom-${Date.now()}`,
      title: productName.trim(),
      category: category,
      price: Number(price),
      artisanName: artisanName || 'Local Master Artisan',
      village: village || 'Karnataka Guild',
      giTag: `GI Certified • ${village}`,
      artisanAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiicij0F5rpmoE_pU9PaWtGkHzNxdtYRXOlR9Fe-HPyHmaxL5vLoxX3b3C3qF29L4bSLY0P6dKrshUknzGu27U_PgEaDeYpR0OmW9Uf8akhRhrqtV9jodtn6mcOIXaSDtamUW4sq7tiuxqJDk6DS2rCshNaMaVDuwORZmtI9RTVDnoYWR5AQmjcrDIwCLCdMOOcpj4sZ-ck2Pu0dEUqGw0jWPK3GhlVNgSCUN_ktFA0oV28DvmeY0Bbg',
      images: [imagePreview || quickSamples[0].url],
      timeSpent: timeSpent || '24 hrs handmade',
      provenance: {
        timeSpent: timeSpent || '24 hours of artisanal craft',
        materials: 'Pure natural fibers and vegetable dyes',
        origin: village,
        authenticityCode: `GI-REG-${Math.floor(100 + Math.random() * 900)}`,
        technique: `${category} traditional master technique`,
      },
      description: `New authentic release from ${village} by ${artisanName}. Direct fair-trade verified with 85% going straight to artisan UPI.`,
      freeShipping: true,
    };

    onAddNewProduct(newCraft);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-[#1d1b1a] rounded-3xl shadow-2xl border border-[#38332f] overflow-hidden text-[#f5f1eb]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#141312] border-b border-[#2e2b28] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-[#ffb59c] text-xs font-semibold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">record_voice_over</span>
              <span>60-Second Artisan Listing</span>
            </div>
            <h3 className="font-headline text-xl font-bold mt-0.5">
              Publish Direct Heritage Craft
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#252220] hover:bg-[#34302c] flex items-center justify-center text-[#dec0b7] transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* 3-Field Simple Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* Photo upload dropzone */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#dec0b7] mb-1.5">
              1. Craft Photos (3 Photos or Quick Select)
            </label>
            <div className="relative border-2 border-dashed border-[#38332f] hover:border-[#bf542c] rounded-2xl p-4 text-center transition-colors bg-[#141312] cursor-pointer group">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer z-10"
              />
              {imagePreview ? (
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-16 h-16 rounded-xl object-cover ring-2 ring-[#bf542c]"
                  />
                  <div className="text-left text-xs">
                    <p className="font-semibold text-white">Photo loaded successfully</p>
                    <p className="text-[#8a726a]">Tap to replace</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-2 text-[#a8a29e]">
                  <span className="material-symbols-outlined text-[28px] text-[#ffb59c] mb-1">
                    photo_camera
                  </span>
                  <p className="text-xs font-semibold text-white">
                    Snap or upload craft picture
                  </p>
                  <p className="text-[10px] text-[#8a726a]">
                    Instant upload & automatic sharpening
                  </p>
                </div>
              )}
            </div>

            {/* Quick sample pickers */}
            <div className="mt-2 flex items-center gap-2 overflow-x-auto pb-1">
              <span className="text-[10px] text-[#8a726a] shrink-0">Sample photo:</span>
              {quickSamples.map((s, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => setImagePreview(s.url)}
                  className={`text-[10px] px-2.5 py-1 rounded-full border whitespace-nowrap transition-colors ${
                    imagePreview === s.url
                      ? 'bg-[#bf542c] text-white border-[#bf542c]'
                      : 'bg-[#141312] text-[#dec0b7] border-[#38332f]'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#dec0b7] mb-1.5">
              2. Craft Title
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Kasuti Needlework Temple Chariot Dupatta"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-[#38332f] bg-[#141312] text-sm text-[#f5f1eb] focus:border-[#bf542c] focus:outline-none"
            />
          </div>

          {/* Price & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#dec0b7] mb-1.5">
                3. Direct Price (₹ INR)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-[#8a726a]">
                  ₹
                </span>
                <input
                  type="number"
                  required
                  placeholder="2400"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full pl-8 pr-4 py-2 rounded-xl border border-[#38332f] bg-[#141312] text-sm font-semibold text-white focus:border-[#bf542c] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#dec0b7] mb-1.5">
                Craft Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#38332f] bg-[#141312] text-sm text-[#f5f1eb] focus:border-[#bf542c] focus:outline-none"
              >
                <option value="Kasuti Embroidery">Kasuti Embroidery</option>
                <option value="Beedu Palm & Cane">Beedu Palm & Cane</option>
                <option value="Coastal Handloom">Coastal Handloom</option>
                <option value="Natural Indigo Dye">Natural Indigo Dye</option>
              </select>
            </div>
          </div>

          {/* Artisan & Village */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <label className="block text-[#8a726a] mb-1">Artisan / Guild Name</label>
              <input
                type="text"
                value={artisanName}
                onChange={(e) => setArtisanName(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg border border-[#38332f] bg-[#141312] text-[#f5f1eb]"
              />
            </div>
            <div>
              <label className="block text-[#8a726a] mb-1">Region / Cluster</label>
              <input
                type="text"
                value={village}
                onChange={(e) => setVillage(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg border border-[#38332f] bg-[#141312] text-[#f5f1eb]"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#9f3c16] hover:bg-[#bf542c] text-white font-bold text-sm shadow-xl active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>Publish Instantly to Discovery Grid</span>
            </button>
            <p className="text-[10px] text-center text-[#8a726a] mt-2">
              Prepends live to the top of the showcase with verified direct UPI routing.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}
