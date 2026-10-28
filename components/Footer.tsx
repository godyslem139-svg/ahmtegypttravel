// src/components/Footer.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-white pt-20 pb-12 border-t border-[#D4AF37]/20 relative overflow-hidden">
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-[#D4AF37]/20">
          
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-lg bg-white/5 flex-shrink-0">
                <Image 
                  src="/logo.webp" 
                  alt="AHMT Egypt Travel Logo" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-wider text-white">AHMT Egypt Travel</h3>
                <p className="text-xs text-[#D4AF37] tracking-[0.2em] uppercase">Explore The Pharaonic Magic</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm font-light leading-relaxed max-w-md">
              The premier luxury travel agency offering private tours, Nile cruises, and exceptional experiences specially designed to discover the finest wonders of Egypt.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col items-start lg:items-end gap-6">
            
            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="mailto:info@ahmegypttravel.com" 
                className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/[0.03] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 shadow-lg group"
              >
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium text-gray-200 group-hover:text-[#D4AF37] transition-colors">info@ahmegypttravel.com</span>
              </a>

              <a 
                href="https://wa.me/201226158975" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/[0.03] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 shadow-lg group"
              >
                <svg className="w-5 h-5 text-green-400 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span className="text-sm font-medium text-gray-200 group-hover:text-[#D4AF37] transition-colors">+20 122 615 8975</span>
              </a>

              <a 
                href="https://wa.me/201080132708" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/[0.03] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 shadow-lg group"
              >
                <svg className="w-5 h-5 text-green-400 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span className="text-sm font-medium text-gray-200 group-hover:text-[#D4AF37] transition-colors">+20 108 013 2708</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              {[
                { href: "https://wa.me/201226158975", label: "WhatsApp" },
                { href: "#", label: "Facebook" },
                { href: "#", label: "Instagram" },
                { href: "#", label: "TikTok" },
                { href: "#", label: "YouTube" },
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-white/[0.03] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A192F] transition-all duration-300 shadow-md"
                  aria-label={social.label}
                >
                  <span className="text-xs font-bold">{social.label[0]}</span>
                </a>
              ))}
            </div>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16">
          <div>
            <h4 className="text-white text-lg font-bold mb-6 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" /> Quick Links
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {["Home", "Destinations", "Tours", "About", "Contact"].map((link, idx) => (
                <Link 
                  key={idx} 
                  href={`/${link === "Home" ? "" : link.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="py-3 px-5 rounded-xl bg-white/[0.03] border border-[#D4AF37]/20 text-gray-300 text-sm font-medium text-center hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 shadow-inner"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-6 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" /> Top Destinations
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {[
                { name: "Cairo", path: "/destinations/cairo" },
                { name: "Alexandria", path: "/destinations/alexandria" },
                { name: "Red Sea", path: "/destinations/red-sea" },
                { name: "Luxor & Aswan", path: "/destinations/luxor-aswan" }
              ].map((destination, idx) => (
                <Link 
                  key={idx} 
                  href={destination.path} 
                  className="py-3 px-5 rounded-xl bg-white/[0.03] border border-[#D4AF37]/20 text-gray-300 text-sm font-medium text-center hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 shadow-inner block"
                >
                  {destination.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-400 text-xs font-light">
          &copy; 2026 AHMT Egypt Travel. All rights reserved. Designed with luxury and precision.
        </div>

      </div>
    </footer>
  );
}