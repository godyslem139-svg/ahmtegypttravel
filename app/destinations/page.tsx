// src/app/destinations/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function DestinationsPage() {
  const destinations = [
    {
      slug: "cairo",
      title: "Cairo & Giza",
      subtitle: "The Cradle of Civilization",
      description: "Home to the iconic Giza Pyramids, the Sphinx, the Grand Egyptian Museum, and historic Islamic & Coptic Cairo.",
      image: "/cairo.webp",
      toursCount: "5 Exclusive Tours"
    },
    {
      slug: "luxor-aswan",
      title: "Luxor & Aswan",
      subtitle: "The World's Greatest Open-Air Museum",
      description: "Sail the majestic Nile on luxury vessels, explore the Valley of the Kings, Karnak Temple, and Abu Simbel.",
      image: "/luxor aswan.webp",
      toursCount: "6 Luxury Itineraries"
    },
    {
      slug: "red-sea",
      title: "Red Sea (Hurghada & Sharm)",
      subtitle: "Underwater Paradise & Luxury Resorts",
      description: "Experience world-class scuba diving, crystal-clear turquoise waters, vibrant coral reefs, and 5-star beachfront resorts.",
      image: "/red sea.webp",
      toursCount: "4 Adventure Packages"
    },
    {
      slug: "alexandria",
      title: "Alexandria",
      subtitle: "The Pearl of the Mediterranean",
      description: "Discover Greco-Roman history, the legendary Bibliotheca Alexandrina, and scenic Mediterranean seaside promenades.",
      image: "/alexandria.webp",
      toursCount: "3 Cultural Tours"
    }
  ];

  return (
    <div className="min-h-screen relative text-white overflow-hidden">
      
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-50"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/90 via-[#0A192F]/80 to-[#0A192F]/95 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 inline-block mb-4 shadow-lg backdrop-blur-md">
            Timeless Landmarks
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight">
            Explore Egypt&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-yellow-500">Top Destinations</span>
          </h1>
          <p className="text-gray-300 text-lg font-light leading-relaxed">
            From the monumental pyramids of Giza to the tranquil waters of the Nile and the vibrant reefs of the Red Sea, discover our handpicked destinations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((dest, idx) => (
            <div 
              key={idx}
              className="rounded-[30px] bg-[#0A192F]/80 backdrop-blur-xl border border-[#D4AF37]/30 overflow-hidden shadow-2xl hover:border-[#D4AF37] transition-all duration-500 group flex flex-col justify-between"
            >
              <div className="relative w-full overflow-hidden bg-transparent">
                <Image 
                  src={dest.image} 
                  alt={dest.title}
                  title={dest.title}
                  width={800}
                  height={1000}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-40 pointer-events-none" />
                
                <span className="absolute top-6 right-6 bg-[#0A192F]/90 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg z-10">
                  {dest.toursCount}
                </span>
              </div>

              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-xs text-[#D4AF37] uppercase tracking-widest font-bold mb-1">{dest.subtitle}</div>
                  <h3 className="text-3xl font-black text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {dest.title}
                  </h3>
                  <p className="text-gray-300 text-sm font-light leading-relaxed mb-8">
                    {dest.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#D4AF37]/20">
                  <Link 
                    href={`/destinations/${dest.slug}`}
                    title={`Explore tours and details for ${dest.title}`}
                    className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-[#0A192F] font-black text-xs tracking-wider uppercase text-center shadow-lg hover:opacity-95 transition-all transform hover:scale-[1.02]"
                  >
                    Explore Destination
                  </Link>
                  <a 
                    href="https://wa.me/201226158975"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    title={`Chat on WhatsApp regarding ${dest.title}`}
                    className="w-12 h-12 rounded-xl bg-white/[0.04] border border-[#D4AF37]/30 flex items-center justify-center text-green-400 hover:bg-green-500/20 hover:border-[#D4AF37] transition-all"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}