// src/components/CustomEscape.tsx
import Link from 'next/link';

export default function CustomEscape() {
  return (
    <section className="py-28 bg-[#0A192F] relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative group rounded-[35px] overflow-hidden border-2 border-[#D4AF37]/40 shadow-2xl h-[420px] sm:h-[480px]">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source src="/bb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-30" />
            
            <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-[#D4AF37]" />
            <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-[#D4AF37]" />
          </div>

          <div className="flex flex-col justify-center">
            
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 inline-block mb-6 shadow-lg w-fit">
              Tailor-Made Experiences
            </span>

            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-wide mb-6 leading-tight">
              Design Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-yellow-500">Tailor-Made Egyptian Odyssey</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed mb-8">
              Travel strictly on your terms. From deep historical expeditions and cherished family retreats to bespoke luxury indulgences, our local specialists are ready to bring your dream itinerary to life. Begin shaping your unforgettable adventure today.
            </p>

            <div>
              <Link 
                href="/contact" 
                title="Start designing your custom Egyptian trip"
                className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-[#0A192F] font-black text-sm tracking-wider shadow-lg hover:opacity-95 transition-all transform hover:scale-[1.02]"
              >
                START DESIGNING YOUR TRIP
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}