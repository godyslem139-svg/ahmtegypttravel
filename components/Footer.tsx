// src/components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-white pt-20 pb-12 border-t border-[#D4AF37]/20 relative overflow-hidden">
      
      {/* خلفية مضيئة متناسقة مع الهوية */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* القسم العلوي: الشعار الحقيقي، النبذة، وأزرار التواصل وسوشيال ميديا */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-[#D4AF37]/20">
          
          {/* الجانب الأيسر: الشعار الحقيقي والاسم */}
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

          {/* الجانب الأيمن: أزرار التواصل وأيقونات السوشيال ميديا */}
          <div className="lg:col-span-7 flex flex-col items-start lg:items-end gap-6">
            
            <div className="flex flex-wrap gap-4 items-center">
              {/* زر البريد الإلكتروني */}
              <a 
                href="mailto:info@ahmegypttravel.com" 
                className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/[0.03] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 shadow-lg group"
              >
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium text-gray-200 group-hover:text-[#D4AF37] transition-colors">info@ahmegypttravel.com</span>
              </a>

              {/* زر الهاتف / الواتساب */}
              <a 
                href="https://wa.me/201226158975" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/[0.03] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 shadow-lg group"
              >
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm font-medium text-gray-200 group-hover:text-[#D4AF37] transition-colors">+20 122 615 8975</span>
              </a>
            </div>

            {/* السوشيال ميديا */}
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

        {/* القوائم السريعة */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16">
          <div>
            <h4 className="text-white text-lg font-bold mb-6 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" /> Quick Links
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {["Home", "Destinations", "Tours", "About Us", "Blog", "Contact Us"].map((link, idx) => (
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
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" /> Our Services
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {["Nile Cruises", "Pyramids Tours", "Desert Safari", "Red Sea Diving", "Tailor-Made Trips", "VIP Transportation"].map((service, idx) => (
                <div 
                  key={idx} 
                  className="py-3 px-5 rounded-xl bg-white/[0.03] border border-[#D4AF37]/20 text-gray-300 text-sm font-medium text-center hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 shadow-inner cursor-pointer"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-400 text-xs font-light">
          &copy; {new Date().getFullYear()} AHMT Egypt Travel. All rights reserved. Designed with luxury and precision.
        </div>

      </div>
    </footer>
  );
}