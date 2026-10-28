'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function RedSeaDestinationPage() {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'highlights' | 'resorts'>('itinerary');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const itineraryDays = [
    {
      day: "Day 1",
      title: "Arrival in Hurghada & Beachfront Check-in",
      description: "Arrival at Hurghada or Sharm El-Sheikh international airport. VIP transfer to your 5-star beachfront resort where pristine white sands and crystal-clear waters await."
    },
    {
      day: "Day 2",
      title: "World-Class Scuba Diving & Coral Reefs",
      description: "Embark on a private luxury yacht excursion to premier Red Sea coral reefs, guided by professional diving instructors to explore vibrant marine life."
    },
    {
      day: "Day 3",
      title: "Desert Quad Biking & Bedouin Stargazing",
      description: "An exhilarating afternoon desert safari featuring quad biking through golden dunes, an authentic Bedouin dinner, and magical stargazing under clear desert skies."
    },
    {
      day: "Day 4",
      title: "Island Excursion & Snorkeling Paradise",
      description: "Sail to Giftun Island or Ras Mohammed National Park for secluded beach relaxation, premium snorkeling, and gourmet seaside dining."
    },
    {
      day: "Day 5",
      title: "Spa Relaxation & VIP Departure",
      description: "Unwind with signature therapeutic spa treatments at your resort before your private transfer to the airport for your departure."
    }
  ];

  const highlights = [
    { title: "Vibrant Coral Reefs", desc: "Home to some of the world's most diverse marine ecosystems." },
    { title: "Hurghada & Sharm El-Sheikh", desc: "Premier coastal destinations offering elite beachfront hospitality." },
    { title: "Private Yacht Excursions", desc: "Customized maritime trips for snorkeling and island hopping." },
    { title: "Desert Safari Adventures", desc: "Thrilling dune explorations and authentic Bedouin cultural nights." },
    { title: "Ras Mohammed National Park", desc: "World-renowned protected marine and terrestrial sanctuary." },
    { title: "Luxury Beach Resorts", desc: "5-star ultra-comfortable retreats with panoramic sea views." }
  ];

  const resorts = [
    { name: "The Oberoi Beach Resort, Sahl Hasheesh", rating: "5-Star Ultra Luxury", desc: "Secluded beachfront suites offering supreme tranquility and personalized butler service." },
    { name: "Four Seasons Resort Sharm El Sheikh", rating: "Elite Coastal Haven", desc: "Stunning cliffside luxury overlooking the Red Sea's most spectacular diving spots." },
    { name: "Kempinski Hotel Soma Bay", rating: "Architectural Elegance", desc: "Moorish-style palace resort surrounded by crystal lagoons and championship golf." }
  ];

  const faqs = [
    { q: "What water activities are available in the Red Sea package?", a: "Scuba diving, snorkeling, luxury yacht charters, windsurfing, and glass-bottom boat excursions guided by certified professionals." },
    { q: "Do I need prior diving experience for the Red Sea tour?", a: "No prior experience is necessary; we provide introductory 'Discover Scuba' sessions with expert instructors for beginners." },
    { q: "Are resort transfers included from the airport?", a: "Yes, all VIP airport transfers and local private transportation are fully included in your bespoke itinerary." }
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
            <source src="/redsea.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-[#0A192F]/60 to-[#0A192F]" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 inline-block mb-6 shadow-xl backdrop-blur-md">
            Underwater Paradise & Coastal Luxury
          </span>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 leading-tight">
            Red Sea <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-100 to-yellow-500">Coastal Escape</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Immerse yourself in crystal-clear turquoise waters, vibrant coral reefs, and world-class 5-star beachfront resorts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-[#0A192F] font-black text-sm tracking-wider uppercase shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book Red Sea Package
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
              The Pristine Red Sea Coastline
            </h2>
          </div>

          <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl mb-12">
            <Image 
              src="/red sea.webp" 
              alt="Red Sea Coastline" 
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
              onClick={() => setActiveTab('resorts')}
              className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                activeTab === 'resorts' ? 'bg-[#D4AF37] text-[#0A192F] shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              Luxury Resorts
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

          {activeTab === 'resorts' && (
            <div className="space-y-6 animate-in fade-in duration-300 max-w-4xl mx-auto">
              {resorts.map((resort, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-white/[0.03] border border-[#D4AF37]/20 shadow-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block mb-1">{resort.rating}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{resort.name}</h3>
                    <p className="text-gray-300 text-sm font-light">{resort.desc}</p>
                  </div>
                  <Link 
                    href="/contact"
                    className="px-6 py-2.5 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#0A192F] transition-all whitespace-nowrap"
                  >
                    Reserve Resort
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
            Red Sea Tour FAQ
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
              Ready to Dive into the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-yellow-500">Red Sea Wonders?</span>
            </h2>
            <p className="text-gray-300 text-lg font-light mb-8">
              Contact our luxury travel planners today to design your bespoke beach and diving escape along the Red Sea coast.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-[#0A192F] font-black text-sm tracking-wider uppercase shadow-2xl hover:scale-105 transition-all"
              >
                Plan Your Escape
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