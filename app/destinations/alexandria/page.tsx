'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AlexandriaDestinationPage() {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'highlights' | 'hotels'>('itinerary');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const itineraryDays = [
    {
      day: "Day 1",
      title: "Arrival & The Legendary Bibliotheca Alexandrina",
      description: "Welcome in the Pearl of the Mediterranean. Check-in at your luxury seaside hotel before visiting the magnificent modern Library of Alexandria and its rare manuscript collections."
    },
    {
      day: "Day 2",
      title: "Citadel of Qaitbay & Greco-Roman Heritage",
      description: "Explore the historic 15th-century Qaitbay Citadel standing proudly on the Mediterranean coast, followed by the Catacombs of Kom el Shoqafa and Pompey's Pillar."
    },
    {
      day: "Day 3",
      title: "Montazah Royal Gardens & Seaside Stroll",
      description: "Stroll through the breathtaking royal gardens of Montazah Palace, enjoy panoramic corniche views, and savor world-class seafood dining before your departure."
    }
  ];

  const highlights = [
    { title: "Bibliotheca Alexandrina", desc: "A magnificent tribute to the ancient wonder of the ancient world." },
    { title: "Qaitbay Citadel", desc: "Historic medieval fortress guarding the Mediterranean harbor." },
    { title: "Montazah Palace Gardens", desc: "Exquisite royal gardens overlooking picturesque private beaches." },
    { title: "Catacombs of Kom el Shoqafa", desc: "Largest Roman burial site blending Pharaonic and Greco-Roman art." },
    { title: "The Alexandria Corniche", desc: "Scenic coastal boulevard framing the blue Mediterranean." },
    { title: "Pompey's Pillar", desc: "Massive triumphal Roman monolithic column." }
  ];

  const hotels = [
    { name: "Four Seasons Hotel Alexandria at San Stefano", rating: "5-Star Ultra Luxury", desc: "Palatial seaside elegance offering panoramic views of the Mediterranean Sea." },
    { name: "Helnan Palestine Hotel", rating: "Royal Historic Stay", desc: "Nestled inside the Montazah Royal Gardens with private beach access." },
    { name: "Tolip Hotel Alexandria", rating: "Modern Prestige", desc: "Sophisticated luxury hospitality right on the Corniche waterfront." }
  ];

  const faqs = [
    { q: "What is the best time of year to visit Alexandria?", a: "Spring and autumn offer delightful Mediterranean breezes and pleasant weather for sightseeing." },
    { q: "Are private transfers from Cairo to Alexandria included?", a: "Yes, we provide comfortable private Mercedes transport with professional drivers for the scenic drive between Cairo and Alexandria." },
    { q: "Are entry tickets and expert guides included in the package?", a: "Yes, your dedicated private Egyptologist and all monument admission fees are fully covered." }
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
            <source src="/alexandria.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-[#0A192F]/60 to-[#0A192F]" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 inline-block mb-6 shadow-xl backdrop-blur-md">
            The Pearl of the Mediterranean
          </span>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 leading-tight">
            Alexandria <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-100 to-yellow-500">Coastal Heritage</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Discover timeless Greco-Roman history, magnificent royal palaces, and scenic Mediterranean seaside promenades.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-[#0A192F] font-black text-sm tracking-wider uppercase shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book Alexandria Tour
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

      {/* 2. BACK LINK */}
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
              The Mediterranean Elegance of Alexandria
            </h2>
          </div>

          <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl mb-12">
            <Image 
              src="/alexandria.webp" 
              alt="Alexandria Coastline" 
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
            Alexandria Tour FAQ
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
              Ready to Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-yellow-500">Alexandria?</span>
            </h2>
            <p className="text-gray-300 text-lg font-light mb-8">
              Contact our luxury travel planners today to design your private Mediterranean getaway in Alexandria.
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