import React from 'react';

export default function FilterBar({
  categories,
  selectedCategory,
  onSelectCategory
}) {
  return (
    <div className="sticky top-[61px] z-40 bg-[#141312]/95 backdrop-blur-md py-3 -mx-4 px-4 md:-mx-6 md:px-6 border-b border-[#2e2b28] flex items-center justify-between gap-4 overflow-x-auto custom-scrollbar">
      <div className="flex items-center gap-2 flex-nowrap">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1 ${
                isActive
                  ? 'bg-[#f5f1eb] text-[#141312] shadow-sm'
                  : 'bg-[#1d1b1a] border border-[#34302c] text-[#f5f1eb] hover:border-[#bf542c]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={() => onSelectCategory('All Crafts (142)')}
          className="flex items-center gap-1.5 text-[#dec0b7] text-xs font-semibold border border-[#34302c] px-3 py-1.5 rounded-full hover:bg-[#1d1b1a] transition-colors"
        >
          <span className="material-symbols-outlined text-[16px]">tune</span>
          <span>Filters</span>
        </button>
      </div>
    </div>
  );
}
