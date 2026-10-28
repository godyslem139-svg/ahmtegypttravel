// src/components/SampleTours.tsx
import Link from 'next/link';

const sampleTrips = [
  {
    title: "Sail Through the Soul of Egypt",
    duration: "Timeless Nile Voyage",
    description: "Enjoy a serene Nile cruise aboard a traditional Felucca, and visit the majestic temples that transform Luxor and Aswan into the world’s largest open-air museum.",
    icon: (
      <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Unveil Ancient Civilizations",
    duration: "Cairo & Pyramids Legacy",
    description: "Stand in awe before the majesty of the Pyramids and the Sphinx, and uncover the museum treasures that narrate thousands of years of history in the heart of historic Cairo.",
    icon: (
      <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Dive into Crystal Clear Waters",
    duration: "Red Sea & Coastal Magic",
    description: "Conclude your journey by relaxing on the enchanting shores of the Red Sea, and explore a breathtaking underwater world filled with vibrant coral reefs and unique marine life.",
    icon: (
      <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function SampleTours() {
  return (
    <section className="py-28 bg-[#0A192F] relative overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 inline-block mb-4 shadow-lg">
            Embark on Your Next Adventure
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-wide mb-6">
            Experience Egypt's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-yellow-500">Iconic Icons</span>
          </h2>
          <p className="text-gray-300 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Discover breathtaking landscapes, timeless rivers, and ancient wonders tailored for an unforgettable journey.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleTrips.map((trip, index) => (
            <div 
              key={index}
              className="group relative bg-white/[0.03] backdrop-blur-xl border border-[#D4AF37]/30 rounded-3xl p-8 shadow-2xl transition-all duration-500 ease-out hover:-translate-y-3 hover:border-[#D4AF37] hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D4AF37]/20 to-transparent rounded-bl-full pointer-events-none transition-all duration-500 group-hover:scale-125" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3.5 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 shadow-inner group-hover:bg-[#D4AF37]/20 transition-colors">
                    {trip.icon}
                  </div>
                  <span className="text-xs font-semibold tracking-wider text-yellow-300/80 uppercase px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                    Featured Experience
                  </span>
                </div>

                <span className="text-xs font-semibold tracking-wider text-[#D4AF37] uppercase block mb-2">
                  ✦ {trip.duration}
                </span>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {trip.title}
                </h3>

                <p className="text-gray-300 text-sm font-light leading-relaxed mb-8">
                  {trip.description}
                </p>
              </div>

              <div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mb-6" />

                <Link 
                  href="/contact" 
                  className="w-full py-3.5 rounded-xl border border-[#D4AF37]/60 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#0A192F] font-bold text-sm text-center block transition-all duration-300 shadow-md transform hover:scale-[1.02]"
                >
                  Plan Your Journey
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}