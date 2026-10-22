// src/components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#0A192F]/95 backdrop-blur-md border-b border-[#D4AF37]/40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          
          {/* Logo Section - تكبير اللوجو أكثر ليصبح واضحاً تماماً */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-20 h-20 overflow-hidden rounded-full border-2 border-[#D4AF37] shadow-2xl bg-[#0A192F]">
              <Image 
                src="/logo.webp" 
                alt="AHMT Egypt Travel Logo" 
                fill 
                className="object-cover p-0.5 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-wider text-white group-hover:text-[#D4AF37] transition-colors">
                ahmt <span className="text-[#D4AF37]">egypttravel</span>
              </span>
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                Explore The Pharaonic Magic
              </span>
            </div>
          </Link>

          {/* Navigation Links - English, Bold Black */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8 text-base font-bold bg-white/90 px-6 py-2.5 rounded-full shadow-inner border border-[#D4AF37]/30 text-black">
              <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
              <Link href="/destinations" className="hover:text-[#D4AF37] transition-colors">Destinations</Link>
              <Link href="/tours" className="hover:text-[#D4AF37] transition-colors">Tours</Link>
              <Link href="/about" className="hover:text-[#D4AF37] transition-colors">About Us</Link>
              <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-[#D4AF37] focus:outline-none bg-white/10 p-2 rounded-lg">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}