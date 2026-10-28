// src/components/EgyptianGallery.tsx
'use client';

import Image from 'next/image';

const galleryImages = [
  { src: "/cairo.webp", title: "Cairo & Giza Landmarks", category: "Capital & Pyramids" },
  { src: "/luxor aswan.webp", title: "Luxor & Aswan Nile Heritage", category: "Upper Egypt" },
  { src: "/red sea.webp", title: "Red Sea Coastal Paradise", category: "Hurghada & Sharm" },
  { src: "/alexandria.webp", title: "Alexandria Mediterranean Pearl", category: "Coastal History" },
];

export default function EgyptianGallery() {
  return (
    <section className="py-28 bg-[#0A192F] relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 inline-block mb-4 shadow-lg">
            Explore Egypt
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-wide mb-6">
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-yellow-500">Top Destinations</span>
          </h2>
          <p className="text-gray-300 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Journey through Egypt&apos;s most magnificent tourist cities, from the ancient pyramids of Giza to the tranquil Nile and the vibrant Red Sea.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

      </div>

      <div className="relative w-full overflow-hidden flex py-4">
        
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A192F] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A192F] to-transparent z-20 pointer-events-none" />

        <div className="flex gap-6 animate-marquee whitespace-nowrap hover:[animation-play-state:paused] items-center">
          {[...galleryImages, ...galleryImages, ...galleryImages].map((item, index) => (
            <div 
              key={index}
              className="w-[320px] sm:w-[380px] flex-shrink-0 group relative overflow-hidden rounded-[30px] border-2 border-[#D4AF37]/40 bg-[#0A192F]/90 shadow-2xl transition-all duration-500 ease-out hover:border-[#D4AF37] hover:shadow-[0_20px_50px_rgba(212,175,55,0.3)] flex flex-col"
            >
              <div className="relative w-full p-4 flex items-center justify-center bg-black/40">
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105 rounded-2xl"
                />
              </div>

              <div className="p-6 bg-[#0A192F] border-t border-[#D4AF37]/20 whitespace-normal">
                <span className="text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mb-1 block">
                  ✦ {item.category}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}