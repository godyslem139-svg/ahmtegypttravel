'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LuxorAswanDestinationPage() {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'highlights' | 'cruises'>('itinerary');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const itineraryDays = [
    {
      day: "Day 1",
      title: "Arrival in Luxor & East Bank Temples",
      description: "Welcome at Luxor airport or station by our VIP representative. Board your ultra-luxury floating vessel and explore the magnificent Karnak and Luxor Temples illuminated at dusk."
    },
    {
      day: "Day 2",
      title: "West Bank: Valley of the Kings & Hatshepsut",
      description: "Cross the Nile to the West Bank to explore the Valley of the Kings, the mortuary Temple of Queen Hatshepsut, and the Colossi of Memnon with your private Egyptologist."
    },
    {
      day: "Day 3",
      title: "Sail to Edfu & Kom Ombo Temples",
      description: "Sailing down the majestic Nile River toward Edfu to visit the Temple of Horus, continuing onward to the dual Temple of Kom Ombo."
    },
    {
      day: "Day 4",
      title: "Aswan Wonders: Philae Temple & High Dam",
      description: "Arrive in Aswan, visit the romantic Philae Temple on Agilkia Island, the Unfinished Obelisk, and the legendary Aswan High Dam."
    },
    {
      day: "Day 5",
      title: "Abu Simbel Excursion & Departure",
      description: "An optional morning VIP excursion to the monumental Sun Temples of Ramses II at Abu Simbel before concluding your magical journey."
    }
  ];

  const highlights = [
    { title: "Valley of the Kings", desc: "Burial place of Egypt's pharaohs including Tutankhamun." },
    { title: "Karnak Temple Complex", desc: "The largest ancient religious site ever built worldwide." },
    { title: "Luxor Temple at Dusk", desc: "Awe-inspiring illuminated avenue of sphinxes and towering statues." },
    { title: "Queen Hatshepsut Temple", desc: "Architectural masterpiece carved into towering limestone cliffs." },
    { title: "Philae Temple of Aswan", desc: "Sacred island sanctuary dedicated to the goddess Isis." },
    { title: "Abu Simbel Temples", desc: "Colossal rock-cut temples built by Ramses II." }
  ];

  const cruises = [
    { name: "Oberoi Zahra Luxury Nile Cruiser", rating: "5-Star Ultra Luxury", desc: "The pinnacle of refinement on the Nile featuring private balconies and spa." },
    { name: "Sanctuary Sun Boat IV", rating: "Elite Steamer", desc: "Classic 1920s style elegance combined with modern 5-star hospitality." },
    { name: "Traditional Dahabiya Nile Sail", rating: "Private Charter", desc: "Intimate private sailing yacht experience with unmatched tranquility." }
  ];

  const faqs = [
    { q: "What type of vessels are used for Luxor & Aswan cruises?", a: "We partner exclusively with top-tier 5-star luxury cruisers and traditional private Dahabiyaas offering spacious suites and fine dining." },
    { q: "Are internal transfers and flights included?", a: "Yes, all VIP meet-and-greet services, private transfers, and Nile sailing logistics are fully covered in your bespoke package." },
    { q: "Is the private Egyptologist guide available throughout the cruise?", a: "Yes, your dedicated elite Egyptologist accompanies you on all temple visits and historical excursions." }
  ];

  return (
    <div className="min-h-screen bg-[#0A192F] text-white selection:bg-[#D4AF37] selection:text-[#0A192F] overflow-hidden">
      
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-50"
          >
            <source src="/luxoraswan.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-[#0A192F]/60 to-[#0A192F]" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 inline-block mb-6 shadow-xl backdrop-blur-md">
            The World&apos;s Greatest Open-Air Museum
          </span>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 leading-tight">
            Luxor & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-100 to-yellow-500">Aswan Nile Cruise</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Sail the legendary Nile River between ancient capitals aboard ultra-luxury vessels and discover timeless Pharaonic majesty.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-[#0A192F] font-black text-sm tracking-wider uppercase shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book Nile Cruise
            </Link>
            <a 
              href="https://wa.me/201226158975" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white/[0.03] border border-[#D4AF37]/40 text-white font-bold text-sm tracking-wider uppercase hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-300"
            >
              WhatsApp Concierge
            </a>
          </div>
        </div>

      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <Link 
          href="/destinations"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-8 hover:underline"
        >
          ← Back to All Destinations
        </Link>
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="rounded-[40px] bg-[#050e1c]/80 backdrop-blur-2xl border-2 border-[#D4AF37]/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 inline-block mb-4">
              Visual Masterpiece
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              The Majestic Nile Landscape
            </h2>
          </div>

          <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl mb-12">
            <Image 
              src="/luxor aswan.webp" 
              alt="Luxor and Aswan" 
              width={1200}
              height={1500}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex rounded-2xl bg-black/40 p-1.5 border border-[#D4AF37]/20 mb-8 max-w-xl mx-auto">
            <button
              onClick={() => setActiveTab('itinerary')}
              className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                activeTab === 'itinerary' ? 'bg-[#D4AF37] text-[#0A192F] shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              Cruise Itinerary
            </button>
            <button
              onClick={() => setActiveTab('highlights')}
              className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                activeTab === 'highlights' ? 'bg-[#D4AF37] text-[#0A192F] shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              Key Highlights
            </button>
            <button
              onClick={() => setActiveTab('cruises')}
              className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                activeTab === 'cruises' ? 'bg-[#D4AF37] text-[#0A192F] shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              Luxury Vessels
            </button>
          </div>

          {activeTab === 'itinerary' && (
            <div className="space-y-6 animate-in fade-in duration-300 max-w-4xl mx-auto">
              {itineraryDays.map((day, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-white/[0.03] border border-[#D4AF37]/20 shadow-xl">
                  <span className="text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-widest block mb-1">{day.day}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{day.title}</h3>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">{day.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'highlights' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in fade-in duration-300 max-w-4xl mx-auto">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-white/[0.03] border border-[#D4AF37]/20 shadow-xl">
                  <h3 className="text-lg font-bold text-[#D4AF37] mb-2">✦ {item.title}</h3>
                  <p className="text-gray-300 text-sm font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'cruises' && (
            <div className="space-y-6 animate-in fade-in duration-300 max-w-4xl mx-auto">
              {cruises.map((cruise, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-white/[0.03] border border-[#D4AF37]/20 shadow-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block mb-1">{cruise.rating}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{cruise.name}</h3>
                    <p className="text-gray-300 text-sm font-light">{cruise.desc}</p>
                  </div>
                  <Link 
                    href="/contact"
                    className="px-6 py-2.5 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#0A192F] transition-all whitespace-nowrap"
                  >
                    Reserve Vessel
                  </Link>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 inline-block mb-4">
            Traveler Guidance
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Luxor & Aswan FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-3xl bg-white/[0.03] border border-[#D4AF37]/20 overflow-hidden shadow-xl">
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between font-bold text-lg text-white hover:text-[#D4AF37] transition-colors"
              >
                <span>{faq.q}</span>
                <span className="w-8 h-8 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                  {activeFaq === idx ? '−' : '+'}
                </span>
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-6 text-gray-300 text-sm font-light leading-relaxed border-t border-[#D4AF37]/10 pt-4 animate-in fade-in duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-32">
        <div className="rounded-[40px] bg-gradient-to-r from-[#050e1c] via-[#0A192F] to-[#050e1c] border-2 border-[#D4AF37]/40 p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6">
              Ready to Cruise the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-yellow-500">Legendary Nile?</span>
            </h2>
            <p className="text-gray-300 text-lg font-light mb-8">
              Contact our luxury travel planners today to reserve your private Nile cruise between Luxor and Aswan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-[#0A192F] font-black text-sm tracking-wider uppercase shadow-2xl hover:scale-105 transition-all"
              >
                Plan Your Voyage
              </Link>
              <a 
                href="https://wa.me/201226158975" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-white/[0.03] border border-[#D4AF37]/40 text-white font-bold text-sm tracking-wider uppercase hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all"
              >
                WhatsApp Direct Chat
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}