// src/components/Hero.tsx
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover scale-105 animate-fade-in"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/90 via-[#0A192F]/70 to-[#0A192F]/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-lg">
          <svg className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          Sharm El Sheikh • Down Town • King Salman Street
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-wide leading-tight mb-6 drop-shadow-2xl">
          Your Gateway to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-300 to-yellow-500">Egypt Exploration</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl font-light leading-relaxed mb-10 drop-shadow-md">
          Immerse yourself in the pharaonic magic, pristine Red Sea beaches, and unforgettable luxury journeys curated exclusively for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link 
            href="/tours" 
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-[#0A192F] font-black text-base shadow-xl hover:shadow-[#D4AF37]/50 transition-all transform hover:-translate-y-1 text-center"
          >
            Explore Tours & Packages
          </Link>
          <Link 
            href="/contact" 
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border-2 border-[#D4AF37] font-bold text-base backdrop-blur-md transition-all transform hover:-translate-y-1 text-center"
          >
            Contact Us Now
          </Link>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A192F] to-transparent z-10" />
    </section>
  );
}