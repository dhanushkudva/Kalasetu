import React, { useState } from 'react';

export default function StoryBar({ stories }) {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <h2 className="font-headline text-xl text-[#f5f1eb] font-semibold">
            Live Looms & Field Audio
          </h2>
          <span className="text-[11px] font-semibold bg-[#2a2724] px-2 py-0.5 rounded-full text-[#dec0b7]">
            5 Live Right Now
          </span>
        </div>
        <a
          href="#story-archives"
          className="text-xs font-semibold text-[#ffb59c] hover:underline flex items-center gap-0.5"
        >
          <span>View all story archives</span>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        </a>
      </div>

      {/* Horizontal Scrollable Story Avatar Bubbles */}
      <div className="flex items-center gap-5 overflow-x-auto pb-3 custom-scrollbar pt-1">
        {stories.map((story) => (
          <button
            key={story.id}
            onClick={() => setSelectedStory(story)}
            className="flex flex-col items-center gap-1.5 flex-shrink-0 group focus:outline-none"
          >
            <div className="craft-ring p-[2.5px] rounded-full group-hover:scale-105 transition-transform duration-200 shadow-sm">
              <div className="p-0.5 bg-[#141312] rounded-full">
                <img
                  src={story.avatar}
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="text-center w-24">
              <p className="text-[11px] text-[#f5f1eb] font-semibold truncate group-hover:text-[#ffb59c]">
                {story.name}
              </p>
              <p className="text-[10px] text-[#8a726a] truncate">
                {story.craft} • {story.region}
              </p>
            </div>
          </button>
        ))}

        {/* Story 6: Audio Field Archive Special */}
        <button 
          onClick={() => setSelectedStory({
            name: "Loom Chants",
            craft: "Acoustic Heritage",
            region: "Karnataka",
            title: "Traditional Weaving Folk Chants",
            narrative: "Listen to original field recordings of rhythm counting and folk ballads chanted by women weavers across North Karnataka during dawn shifts.",
            audioNote: "12 Audio Clips Collected",
            duration: "Archival Recording",
            cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTrov6BxtC2mBz_A-bR7i3OkO5kXXiKZBCIUyv-3SL1EjJWVPInRZ6nJtCsAHcPXpPnvBxdAjvertmj-mDPBnaVsV7-s-Z7pMMUkAh3XOhb7WqETTbVEO6bPgz_iL8WB-oIDnz-tFh1p2opPV8IlsY_l-uc_bxOW-TXLDB0xTacZ7hHel31n_c45_4K398bwLxqsbiojgYtQCqp8PDq2c9UbMWSSrVn9nKxIYxvbsP-Pz54L4H1XW_OA",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJMle57-LHU_00xaaEs_XaYAKJmSJ6p1BO0mU5t0wESzEnMMv534W9tCp5LzdjO00KRe6EFM04B1itSLyIkU_vGv3UlWI-w1_7qlRKPZRsi_7fTCrsrMtMmZvI-rhbuS5I4I8V5WFuMuvUxurP52QfnAg-jAmZ6l13Y3PMHbj1sKtrgrw86b6TZzld6k4PNrY9vZbgnBhS2nYz2gTqMOI6lMECnYCQfle7GgOyGXCoGOB7T8xThAUi3w"
          })}
          className="flex flex-col items-center gap-1.5 flex-shrink-0 group focus:outline-none"
        >
          <div className="w-[72px] h-[72px] rounded-full border-2 border-dashed border-[#bf542c] flex items-center justify-center bg-[#1d1b1a] group-hover:bg-[#252220] transition-colors">
            <span className="material-symbols-outlined text-[#ffb59c] text-[28px]">graphic_eq</span>
          </div>
          <div className="text-center w-24">
            <p className="text-[11px] text-[#f5f1eb] font-semibold truncate">Loom Chants</p>
            <p className="text-[10px] text-[#ffb59c] truncate font-bold">12 Audio Clips</p>
          </div>
        </button>
      </div>

      {/* Story Popover Modal */}
      {selectedStory && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedStory(null)}
        >
          <div 
            className="relative w-full max-w-md bg-[#1d1b1a] rounded-3xl overflow-hidden shadow-2xl border border-[#38332f] text-[#f5f1eb]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>

            {/* Visual Cover Header */}
            <div className="relative h-64 w-full overflow-hidden bg-black">
              <img
                src={selectedStory.cover}
                alt={selectedStory.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d1b1a] via-[#1d1b1a]/40 to-transparent" />
              
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <img
                  src={selectedStory.avatar}
                  alt={selectedStory.name}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-[#bf542c]"
                />
                <div>
                  <h4 className="text-xs font-bold text-white">{selectedStory.name}</h4>
                  <p className="text-[10px] text-[#ffb59c]">{selectedStory.craft} • {selectedStory.region}</p>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#ffb59c] bg-[#9f3c16]/70 px-2 py-0.5 rounded">
                  {selectedStory.duration}
                </span>
                <h3 className="text-lg font-headline font-bold text-white mt-1 leading-tight">
                  {selectedStory.title}
                </h3>
              </div>
            </div>

            {/* Story Content & Audio Play Simulation */}
            <div className="p-6 space-y-4 text-xs text-[#dec0b7]">
              {selectedStory.audioNote && (
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#2a2724] border border-[#38332f]">
                  <div className="flex items-center gap-2 text-[#ffb59c]">
                    <span className="material-symbols-outlined text-[18px]">graphic_eq</span>
                    <span className="font-medium">{selectedStory.audioNote}</span>
                  </div>
                  <button className="px-2.5 py-1 bg-[#9f3c16] text-white rounded-md text-[11px] font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">play_arrow</span>
                    Play
                  </button>
                </div>
              )}

              <p className="font-headline text-sm text-[#f5f1eb] leading-relaxed italic">
                "{selectedStory.narrative}"
              </p>

              <button
                onClick={() => setSelectedStory(null)}
                className="w-full py-2.5 rounded-xl bg-[#9f3c16] hover:bg-[#bf542c] text-white font-semibold transition-all mt-2"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
