// src/components/TourTypesGallery.tsx
'use client';

import Image from 'next/image';

const tourTypesImages = [
  { src: "/Antiquities.webp", title: "Pharaonic Antiquities Tours", category: "Antiquities" },
  { src: "/Diving.webp", title: "Red Sea Diving & Marine Life", category: "Diving" },
  { src: "/Medical Tourism.webp", title: "Elite Medical Tourism Packages", category: "Medical" },
  { src: "/Nile Cruises.webp", title: "Majestic Nile Cruises", category: "Nile Cruises" },
  { src: "/Religious Tourism.webp", title: "Sacred Religious Journeys", category: "Religious" },
  { src: "/Safari.webp", title: "Bespoke Desert Safari Expeditions", category: "Safari" },
];

export default function TourTypesGallery() {
  return (
    <section className="py-28 bg-[#0A192F] relative overflow-hidden border-t border-[#D4AF37]/20">
      
      {/* Background Glow Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 inline-block mb-4 shadow-lg">
            Our Specialties
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-wide mb-6">
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-yellow-500">Tour Types</span>
          </h2>
          <p className="text-gray-300 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Explore our diverse range of curated luxury experiences, from ancient historical explorations to Red Sea diving and majestic Nile cruises.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

      </div>

      {/* Infinite Moving Marquee Slider for Tour Types (Reverse Direction) */}
      <div className="relative w-full overflow-hidden flex py-4">
        
        {/* Gradient Fade Edges for Smooth Look */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A192F] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A192F] to-transparent z-20 pointer-events-none" />

        {/* Marquee Track with Reverse Animation */}
        <div className="flex gap-6 animate-marquee-reverse whitespace-nowrap hover:[animation-play-state:paused] items-center">
          {[...tourTypesImages, ...tourTypesImages, ...tourTypesImages].map((item, index) => (
            <div 
              key={index}
              className="w-[320px] sm:w-[380px] flex-shrink-0 group relative overflow-hidden rounded-[30px] border-2 border-[#D4AF37]/40 bg-[#0A192F]/90 shadow-2xl transition-all duration-500 ease-out hover:border-[#D4AF37] hover:shadow-[0_20px_50px_rgba(212,175,55,0.3)] flex flex-col"
            >
              {/* Image Box */}
              <div className="relative w-full p-4 flex items-center justify-center bg-black/40">
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105 rounded-2xl"
                />
              </div>

              {/* Content Box */}
              <div className="p-6 bg-[#0A192F] border-t border-[#D4AF37]/20 whitespace-normal">
                <span className="text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mb-1 block">
                  ✦ {item.category}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Corner Gold Accent Frame */}
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}