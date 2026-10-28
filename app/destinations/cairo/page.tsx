'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CairoDestinationPage() {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'highlights' | 'hotels'>('itinerary');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const itineraryDays = [
    {
      day: "Day 1",
      title: "The Giza Pyramids & The Sphinx",
      description: "Arrival at Cairo International Airport where our VIP representative greets you. Transfer in a luxury private vehicle to view the legendary Giza Pyramids, the Great Sphinx, and the Valley Temple with your private Egyptologist."
    },
    {
      day: "Day 2",
      title: "Historic Cairo & Khan el-Khalili",
      description: "Explore the treasures of the Grand Egyptian Museum, marvel at the Citadel of Saladin, and wander through the vibrant, ancient alleys of Khan el-Khalili Bazaar."
    },
    {
      day: "Day 3",
      title: "Coptic Cairo & Islamic Heritage",
      description: "Discover the Hanging Church, Ben Ezra Synagogue, and the majestic Mosque of Muhammad Ali before enjoying a private luxury Nile dinner cruise."
    }
  ];

  const highlights = [
    { title: "The Great Pyramids of Giza", desc: "One of the Seven Wonders of the Ancient World." },
    { title: "The Great Sphinx", desc: "The enigmatic guardian of the Giza plateau." },
    { title: "The Grand Egyptian Museum", desc: "The world's largest archaeological museum complex." },
    { title: "Khan el-Khalili Bazaar", desc: "Historic shopping haven dating back to the 14th century." },
    { title: "Cairo Citadel & Alabaster Mosque", desc: "Stunning medieval fortification overlooking the skyline." },
    { title: "Old Coptic Cairo", desc: "Ancient Christian heritage sites and holy sanctuaries." }
  ];

  const hotels = [
    { name: "Marriott Mena House Cairo", rating: "5-Star Luxury", desc: "Historic palace hotel with direct, unobstructed views of the Pyramids." },
    { name: "Four Seasons Hotel Cairo at Nile Plaza", rating: "Ultra-Luxury", desc: "Pristine elegance right on the banks of the legendary Nile River." },
    { name: "The St. Regis Cairo", rating: "Elite Hospitality", desc: "Modern architectural masterpiece offering supreme luxury and personalized butler service." }
  ];

  const faqs = [
    { q: "What is included in the Cairo private tour package?", a: "Private VIP airport transfers, luxury air-conditioned vehicle transport, expert private Egyptologist guide, entry tickets to all mentioned sites, and 24/7 concierge support." },
    { q: "Can we customize the itinerary according to our pace?", a: "Yes, 100%. All our luxury packages are fully bespoke and tailored precisely to your personal schedule and preferences." },
    { q: "What clothing is recommended when visiting historic sites in Cairo?", a: "We recommend light, breathable clothing, comfortable walking shoes, sunglasses, and modest attire when visiting religious monuments." }
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
            <source src="/cairo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-[#0A192F]/60 to-[#0A192F]" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 inline-block mb-6 shadow-xl backdrop-blur-md">
            The Cradle of Civilization
          </span>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 leading-tight">
            Cairo & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-100 to-yellow-500">Giza Wonders</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Step into 5,000 years of history where monumental pyramids meet vibrant modern luxury and timeless Pharaonic heritage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-[#0A192F] font-black text-sm tracking-wider uppercase shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book Cairo Experience
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
              The Eternal Panorama of Cairo
            </h2>
          </div>

          <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl mb-12">
            <Image 
              src="/cairo.webp" 
              alt="Cairo and Giza" 
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
              Tour Itinerary
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
              onClick={() => setActiveTab('hotels')}
              className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                activeTab === 'hotels' ? 'bg-[#D4AF37] text-[#0A192F] shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              Luxury Stays
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

          {activeTab === 'hotels' && (
            <div className="space-y-6 animate-in fade-in duration-300 max-w-4xl mx-auto">
              {hotels.map((hotel, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-white/[0.03] border border-[#D4AF37]/20 shadow-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block mb-1">{hotel.rating}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{hotel.name}</h3>
                    <p className="text-gray-300 text-sm font-light">{hotel.desc}</p>
                  </div>
                  <Link 
                    href="/contact"
                    className="px-6 py-2.5 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#0A192F] transition-all whitespace-nowrap"
                  >
                    Reserve Stay
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
            Cairo Tour FAQ
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
              Ready to Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-yellow-500">Cairo in Luxury?</span>
            </h2>
            <p className="text-gray-300 text-lg font-light mb-8">
              Contact our luxury travel planners today to design your bespoke private itinerary in Cairo and Giza.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-[#0A192F] font-black text-sm tracking-wider uppercase shadow-2xl hover:scale-105 transition-all"
              >
                Plan Your Trip
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