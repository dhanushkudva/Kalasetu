import React from 'react';

export default function GIClusters({ clusters }) {
  return (
    <section className="rounded-2xl bg-[#1d1b1a] border border-[#2e2b28] p-6 lg:p-8 flex flex-col gap-6 shadow-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs text-[#ffb59c] uppercase font-bold tracking-wider font-serif">
            Direct Origin Tracking
          </span>
          <h2 className="font-headline text-2xl lg:text-3xl font-semibold text-[#f5f1eb] mt-0.5">
            Geographical Indication (GI) Craft Clusters
          </h2>
          <p className="text-xs text-[#a8a29e] mt-1">
            Explore certified heritage clusters across Karnataka's rural and coastal belts.
          </p>
        </div>

        <button
          onClick={() => alert("Launching Karnataka GI Interactive Map...")}
          className="px-3 py-1.5 bg-[#141312] border border-[#38332f] rounded-lg text-xs font-semibold hover:border-[#bf542c] transition-colors flex items-center gap-1.5 text-[#f5f1eb]"
        >
          <span className="material-symbols-outlined text-[16px] text-[#ffb59c]">map</span>
          <span>Interactive Map View</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {clusters.map((cluster) => (
          <div
            key={cluster.name}
            className="p-4 bg-[#141312] rounded-xl border border-[#2e2b28] hover:border-[#bf542c] transition-colors space-y-2 group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-[#f5f1eb]">{cluster.name}</span>
              <span className="text-[10px] bg-[#221f1d] px-2 py-0.5 rounded text-[#8a726a] font-mono">
                {cluster.tag}
              </span>
            </div>
            <p className="text-xs text-[#a8a29e] leading-snug">
              {cluster.craft}
            </p>
            <div className="pt-2 flex items-center justify-between text-xs text-[#ffb59c] font-semibold group-hover:translate-x-0.5 transition-transform">
              <span>{cluster.activeCount}</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
