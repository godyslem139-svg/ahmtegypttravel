// src/components/EgyptianGallery.tsx
import Image from 'next/image';

const galleryImages = [
  { src: "/a.webp", title: "Traditional Bazaar & Lanterns", category: "Egyptian Souq" },
  { src: "/b.webp", title: "Luxor Sunrise & Hot Air Balloons", category: "Upper Egypt" },
  { src: "/c.webp", title: "Grand Egyptian Museum", category: "Modern Architecture" },
  { src: "/d.webp", title: "Giza Pyramids & Camel Ride", category: "Giza Plateau" },
  { src: "/e.webp", title: "Red Sea Wooden Pier Resort", category: "Coastal Paradise" },
  { src: "/f.webp", title: "Ancient Temple Corridor", category: "Historic Monuments" },
  { src: "/g.webp", title: "Red Sea Scuba Diving", category: "Underwater Wonders" },
  { src: "/h.webp", title: "Tropical Red Sea Coastline", category: "Beach & Nature" },
  { src: "/i.webp", title: "Sharm El Sheikh Nightlife", category: "Downtown Nights" },
  { src: "/j.webp", title: "Luxor Temple at Dusk", category: "Pharaonic Heritage" },
  { src: "/k.webp", title: "Karnak Temple Hypostyle Hall", category: "Ancient Pillars" },
  { src: "/l.webp", title: "Desert Quad Biking Safari", category: "Adventure & Safari" },
  { src: "/m.webp", title: "Red Sea Resort Evening Glow", category: "Luxury Hospitality" },
];

export default function EgyptianGallery() {
  return (
    <section className="py-28 bg-[#0A192F] relative overflow-hidden">
      
      {/* Background Glow Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 inline-block mb-4 shadow-lg">
            Visual Masterpieces
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-wide mb-6">
            Glimpse Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-yellow-500">Ancient Egypt</span>
          </h2>
          <p className="text-gray-300 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Explore the breathtaking visual legacy of the pharaohs, sacred temples, and stunning landscapes captured in timeless frames.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

      </div>

      {/* Infinite Moving Marquee Slider for Images */}
      <div className="relative w-full overflow-hidden flex py-4">
        
        {/* Gradient Fade Edges for Smooth Look */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A192F] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A192F] to-transparent z-20 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex gap-6 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
          {[...galleryImages, ...galleryImages].map((item, index) => (
            <div 
              key={index}
              className="w-[320px] sm:w-[380px] h-[320px] flex-shrink-0 group relative overflow-hidden rounded-[30px] border-2 border-[#D4AF37]/40 bg-white/5 shadow-2xl transition-all duration-500 ease-out hover:border-[#D4AF37] hover:shadow-[0_20px_50px_rgba(212,175,55,0.3)]"
            >
              {/* Image */}
              <Image 
                src={item.src} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Luxury Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end whitespace-normal">
                <span className="text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mb-1">
                  ✦ {item.category}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Corner Gold Accent Frame */}
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}