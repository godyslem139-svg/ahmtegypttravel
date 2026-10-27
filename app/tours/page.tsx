// src/app/tours/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ToursPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toursList = [
    {
      title: "Pharaonic Antiquities Tours",
      category: "Antiquities",
      image: "/Antiquities.webp",
      duration: "Full Day / Multi-Day",
      description: "Explore the timeless wonders of Giza Pyramids, the Valley of the Kings, and magnificent ancient temples with elite Egyptologists.",
      highlights: ["Giza Pyramids & Sphinx", "Karnak Temple", "Valley of the Kings"]
    },
    {
      title: "Red Sea Diving & Marine Life",
      category: "Diving",
      image: "/Diving.webp",
      duration: "3 to 7 Days",
      description: "Discover crystal-clear waters, vibrant coral reefs, and world-class diving and snorkeling spots in Hurghada and Sharm El-Sheikh.",
      highlights: ["Coral Reef Exploration", "Luxury Yacht Excursions", "PADI Certified Guides"]
    },
    {
      title: "Elite Medical Tourism Packages",
      category: "Medical",
      image: "/Medical Tourism.webp",
      duration: "Customized Program",
      description: "Combine world-class healthcare and wellness treatments with a relaxing, luxurious therapeutic climate and VIP hospitality.",
      highlights: ["Top Specialized Doctors", "5-Star Recovery Resorts", "Private Medical Concierge"]
    },
    {
      title: "Majestic Nile Cruises",
      category: "Nile Cruises",
      image: "/Nile Cruises.webp",
      duration: "4 to 8 Days",
      description: "Sail the legendary Nile River between Luxor and Aswan aboard ultra-luxury floating palaces and traditional Dahabiyaas.",
      highlights: ["Luxor to Aswan Route", "Private Balcony Suites", "Exquisite Fine Dining"]
    },
    {
      title: "Sacred Religious Journeys",
      category: "Religious",
      image: "/Religious Tourism.webp",
      duration: "Flexible Itinerary",
      description: "Walk through historic Islamic Cairo, Coptic Christian heritage sites, and ancient spiritual landmarks that shaped human history.",
      highlights: ["Historic Mosques & Citadels", "Old Cairo Coptic Churches", "St. Catherine's Monastery"]
    },
    {
      title: "Bespoke Desert Safari Expeditions",
      category: "Safari",
      image: "/Safari.webp",
      duration: "1 to 3 Days",
      description: "Experience thrilling dune bashing, quad biking, authentic Bedouin dinners, and stargazing under the majestic Egyptian desert skies.",
      highlights: ["Luxury Desert Camps", "Camel Trekking", "Stargazing Astronomy Night"]
    }
  ];

  const categories = ["All", "Antiquities", "Diving", "Medical", "Nile Cruises", "Religious", "Safari"];

  const filteredTours = selectedCategory === 'All' 
    ? toursList 
    : toursList.filter(tour => tour.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="min-h-screen relative text-white overflow-hidden">
      
      {/* 1. BACKGROUND VIDEO & OVERLAY */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-50"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Luxury Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/90 via-[#0A192F]/80 to-[#0A192F]/95 backdrop-blur-[2px]" />
      </div>

      {/* 2. MAIN CONTENT CONTAINER */}
      <div className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 inline-block mb-4 shadow-lg backdrop-blur-md">
            World-Class Experiences
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight">
            Our Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-yellow-500">Luxury Tours</span>
          </h1>
          <p className="text-gray-300 text-lg font-light leading-relaxed">
            Handcrafted private journeys across Egypt, designed exclusively to blend ancient Pharaonic majesty with absolute 5-star modern comfort.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 backdrop-blur-md border ${
                selectedCategory === cat 
                  ? 'bg-[#D4AF37] text-[#0A192F] border-[#D4AF37] shadow-xl scale-105' 
                  : 'bg-white/[0.03] text-gray-300 border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour, idx) => (
            <div 
              key={idx}
              className="rounded-[30px] bg-[#0A192F]/70 backdrop-blur-xl border border-[#D4AF37]/30 overflow-hidden shadow-2xl hover:border-[#D4AF37] transition-all duration-500 group flex flex-col justify-between"
            >
              {/* Tour Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-black/40">
                <Image 
                  src={tour.image} 
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-80" />
                
                {/* Duration Badge */}
                <span className="absolute top-4 right-4 bg-[#0A192F]/80 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                  {tour.duration}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-gray-300 text-sm font-light leading-relaxed mb-6">
                    {tour.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 mb-8">
                    {tour.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#D4AF37]/20">
                  <Link 
                    href="/contact"
                    className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-[#0A192F] font-black text-xs tracking-wider uppercase text-center shadow-lg hover:opacity-95 transition-all transform hover:scale-[1.02]"
                  >
                    Inquire Now
                  </Link>
                  <a 
                    href="https://wa.me/201226158975"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Chat"
                    className="w-12 h-12 rounded-xl bg-white/[0.04] border border-[#D4AF37]/30 flex items-center justify-center text-green-400 hover:bg-green-500/20 hover:border-[#D4AF37] transition-all"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Custom Tailor-Made Banner */}
        <div className="mt-20 rounded-[40px] bg-[#0A192F]/80 backdrop-blur-2xl border-2 border-[#D4AF37]/40 p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 inline-block mb-4">
              Custom Itineraries
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6">
              Need a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-yellow-500">Tailor-Made Tour?</span>
            </h2>
            <p className="text-gray-300 text-lg font-light mb-8">
              Let our expert travel architects design a private, customized Egyptian holiday built completely around your personal schedule and luxury expectations.
            </p>
            <Link 
              href="/contact"
              className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-[#0A192F] font-black text-sm tracking-wider uppercase shadow-2xl hover:scale-105 transition-all"
            >
              Design Your Custom Trip
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}