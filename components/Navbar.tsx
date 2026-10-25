// src/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A192F]/95 backdrop-blur-md border-b border-[#D4AF37]/40 shadow-xl">
      
      {/* Top Bar for Contact Info (Email, Phone, WhatsApp) - Visible on Mobile & Desktop */}
      <div className="bg-[#050e1c] border-b border-[#D4AF37]/20 py-2 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-gray-300">
          
          <div className="flex items-center gap-6">
            {/* Email */}
            <a href="mailto:info@ahmegypttravel.com" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
              <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="hidden sm:inline">info@ahmegypttravel.com</span>
            </a>

            {/* Phone */}
            <a href="tel:+201226158975" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
              <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+20 122 615 8975</span>
            </a>
          </div>

          {/* WhatsApp Direct Link */}
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/201226158975" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-[#D4AF37] font-semibold hover:underline"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp Chat</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-16 h-16 overflow-hidden rounded-full border-2 border-[#D4AF37] shadow-2xl bg-[#0A192F]">
              <Image 
                src="/logo.webp" 
                alt="AHMT Egypt Travel Logo" 
                fill 
                className="object-cover p-0.5 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-wider text-white group-hover:text-[#D4AF37] transition-colors">
                ahmt <span className="text-[#D4AF37]">egypttravel</span>
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                Explore The Pharaonic Magic
              </span>
            </div>
          </Link>

          {/* Navigation Links - Desktop (Blog replaced with Contact Us) */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6 text-base font-bold bg-white/90 px-6 py-2.5 rounded-full shadow-inner border border-[#D4AF37]/30 text-black">
              <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
              <Link href="/destinations" className="hover:text-[#D4AF37] transition-colors">Destinations</Link>
              <Link href="/tours" className="hover:text-[#D4AF37] transition-colors">Tours</Link>
              <Link href="/about" className="hover:text-[#D4AF37] transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Us</Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#D4AF37] focus:outline-none bg-white/10 p-2 rounded-lg"
              aria-label="Toggle Menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0A192F] border-b border-[#D4AF37]/30 px-6 py-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-4 text-center font-bold text-lg">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#D4AF37] py-2 border-b border-white/5 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/destinations" 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#D4AF37] py-2 border-b border-white/5 transition-colors"
            >
              Destinations
            </Link>
            <Link 
              href="/tours" 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#D4AF37] py-2 border-b border-white/5 transition-colors"
            >
              Tours
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#D4AF37] py-2 border-b border-white/5 transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="mt-2 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-[#0A192F] font-extrabold uppercase tracking-wider text-sm shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}