// src/app/about/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

  const faqs = [
    {
      question: "What makes AHMT Egypt Travel different from other agencies?",
      answer: "We specialize exclusively in bespoke luxury tourism, combining deep Pharaonic heritage expertise with modern 5-star comfort, private Egyptologists, and 24/7 dedicated concierge service."
    },
    {
      question: "Are your tours completely private and customizable?",
      answer: "Yes, 100%. Every itinerary is handcrafted from scratch to match your exact pace, preferences, luxury accommodations, and special historical interests."
    },
    {
      question: "What kind of guides will accompany our tours?",
      answer: "You will be accompanied exclusively by certified, elite Egyptologists holding degrees in Egyptology and history, ensuring deep and engaging historical insights."
    },
    {
      question: "How do you handle airport transfers and domestic VIP logistics?",
      answer: "We provide seamless VIP meet-and-greet services right at the arrival gate, private luxury air-conditioned Mercedes transport, and expedited domestic flights or luxury Nile cruises."
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "The Foundation of Excellence",
      description: "AHMT Egypt Travel was established in Cairo with a singular vision: to redefine luxury travel through authentic Pharaonic discovery."
    },
    {
      year: "2020",
      title: "Expanding Private Nile Fleets",
      description: "Partnered with exclusive 5-star luxury Dahabiyaas and Nile steamers to offer private river journeys between Luxor and Aswan."
    },
    {
      year: "2023",
      title: "Global Recognition & VIP Hub",
      description: "Became the premier choice for international diplomats, luxury seekers, and private family groups exploring Egypt's timeless wonders."
    },
    {
      year: "2026",
      title: "Next-Gen Tailored Experiences",
      description: "Launched advanced digital concierge services and expanded bespoke desert safari and Red Sea diving VIP packages."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Ahmed Al-Masry",
      role: "Head of Egyptology & Historical Research",
      bio: "With over 20 years of field excavation and academic research, Dr. Ahmed brings the temples of Luxor and Giza vividly to life.",
      image: "/logo.webp"
    },
    {
      name: "Hala Mahmoud",
      role: "Director of Luxury Guest Relations",
      bio: "Dedicated to curating flawless itineraries, ensuring every minute of your Egyptian stay exceeds 5-star international standards.",
      image: "/logo.webp"
    },
    {
      name: "Tarek El-Shennawy",
      role: "Chief Logistics & VIP Operations Officer",
      bio: "Mastermind behind our seamless private transport, security details, and exclusive hotel partnerships across Egypt.",
      image: "/logo.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A192F] text-white selection:bg-[#D4AF37] selection:text-[#0A192F] overflow-hidden">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/20">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] mb-6 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            About AHMT Egypt Travel
          </div>

          <h1 className="text-4xl sm:text-7xl font-black tracking-tight mb-8 leading-tight">
            Unveiling The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-100 to-yellow-500">
              Pharaonic Magic
            </span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl font-light max-w-3xl mx-auto leading-relaxed mb-12">
            We are Egypt’s premier luxury travel architect. We transform ancient history into breathtaking, personalized, and unforgettable private journeys designed for discerning travelers.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/tours" 
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-[#0A192F] font-black text-sm tracking-wider uppercase shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Explore Our Tours
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 rounded-full bg-white/[0.03] border border-[#D4AF37]/40 text-white font-bold text-sm tracking-wider uppercase hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-300"
            >
              Contact Our Experts
            </Link>
          </div>

        </div>
      </section>

      {/* 2. STATS COUNTER SECTION */}
      <section className="py-16 border-b border-[#D4AF37]/10 bg-[#050e1c]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-[#D4AF37]/20 shadow-xl backdrop-blur-md">
              <div className="text-3xl sm:text-5xl font-black text-[#D4AF37] mb-2">100%</div>
              <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest font-semibold">Tailored Itineraries</div>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.02] border border-[#D4AF37]/20 shadow-xl backdrop-blur-md">
              <div className="text-3xl sm:text-5xl font-black text-[#D4AF37] mb-2">24/7</div>
              <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest font-semibold">VIP Concierge Support</div>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.02] border border-[#D4AF37]/20 shadow-xl backdrop-blur-md">
              <div className="text-3xl sm:text-5xl font-black text-[#D4AF37] mb-2">5★</div>
              <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest font-semibold">Luxury Hotels & Cruises</div>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.02] border border-[#D4AF37]/20 shadow-xl backdrop-blur-md">
              <div className="text-3xl sm:text-5xl font-black text-[#D4AF37] mb-2">15+</div>
              <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest font-semibold">Expert Egyptologists</div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. STORY & MISSION / VISION / VALUES TABS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#D4AF37] text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 inline-block">
                Our Heritage & Philosophy
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Crafting Legendarary Journeys Through <span className="text-[#D4AF37]">Egyptian Antiquity</span>
              </h2>
              <p className="text-gray-300 text-base font-light leading-relaxed">
                Egypt is not merely a destination; it is a profound historical experience that spans over 5,000 years of civilization. At AHMT Egypt Travel, we bridge the gap between ancient majesty and contemporary ultra-luxury.
              </p>
              <p className="text-gray-300 text-base font-light leading-relaxed">
                Every temple we explore, every Nile cruise we curate, and every desert adventure we design is crafted with meticulous attention to detail, uncompromising safety standards, and unmatched authenticity.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative p-8 rounded-[35px] bg-white/[0.03] border-2 border-[#D4AF37]/40 shadow-2xl backdrop-blur-xl">
                
                {/* Tabs Navigation */}
                <div className="flex rounded-2xl bg-black/40 p-1.5 border border-[#D4AF37]/20 mb-8">
                  <button
                    onClick={() => setActiveTab('mission')}
                    className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                      activeTab === 'mission' ? 'bg-[#D4AF37] text-[#0A192F] shadow-lg' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Our Mission
                  </button>
                  <button
                    onClick={() => setActiveTab('vision')}
                    className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                      activeTab === 'vision' ? 'bg-[#D4AF37] text-[#0A192F] shadow-lg' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Our Vision
                  </button>
                  <button
                    onClick={() => setActiveTab('values')}
                    className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                      activeTab === 'values' ? 'bg-[#D4AF37] text-[#0A192F] shadow-lg' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Core Values
                  </button>
                </div>

                {/* Tab Content */}
                <div className="min-h-[180px] text-gray-200">
                  {activeTab === 'mission' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <h3 className="text-xl font-bold text-[#D4AF37]">Deliver Unmatched Egyptian Luxury</h3>
                      <p className="text-sm font-light leading-relaxed text-gray-300">
                        Our mission is to provide world travelers with immersive, private, and prestigious travel experiences across Cairo, Luxor, Aswan, Alexandria, and the Red Sea, ensuring absolute comfort and historical enlightenment.
                      </p>
                    </div>
                  )}

                  {activeTab === 'vision' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <h3 className="text-xl font-bold text-[#D4AF37]">The Global Benchmark for Luxury Travel in Egypt</h3>
                      <p className="text-sm font-light leading-relaxed text-gray-300">
                        To be recognized globally as the most trusted and elite luxury tour operator in Egypt, renowned for impeccable personal service, exclusive access, and sustainable tourism practices.
                      </p>
                    </div>
                  )}

                  {activeTab === 'values' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <h3 className="text-xl font-bold text-[#D4AF37]">Integrity, Elegance & Authenticity</h3>
                      <p className="text-sm font-light leading-relaxed text-gray-300">
                        We believe in uncompromising quality, absolute transparency, treating Egyptian heritage with utmost respect, and treating every traveler like royalty from arrival to departure.
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. OUR CORE PILLARS (WHY CHOOSE US GRID) */}
      <section className="py-24 bg-[#050e1c] border-y border-[#D4AF37]/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 inline-block mb-4">
              The AHMT Advantage
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
              Why Elite Travelers Choose Us
            </h2>
            <p className="text-gray-300 text-base font-light">
              Every detail of your Egyptian holiday is meticulously curated to guarantee perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 shadow-xl group">
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:bg-[#D4AF37] group-hover:text-[#0A192F] transition-all">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Private & Secure</h3>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Enjoy complete privacy with private vehicles, personal security coordinators upon request, and exclusive VIP access to restricted historical sites.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 shadow-xl group">
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:bg-[#D4AF37] group-hover:text-[#0A192F] transition-all">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">5-Star Accommodations</h3>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Handpicked luxury palace hotels overlooking the Nile, historic Mena House views of the Pyramids, and ultra-premium Dahabiya Nile cruises.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 shadow-xl group">
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:bg-[#D4AF37] group-hover:text-[#0A192F] transition-all">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Expert Egyptologists</h3>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Our guides are top-tier university scholars and historians who bring hieroglyphs, pharaohs, and ancient myths to thrilling life.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. OUR JOURNEY / MILESTONES TIMELINE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 inline-block mb-4">
              Evolution of Excellence
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Our Milestone Timeline
            </h2>
          </div>

          <div className="relative border-l-2 border-[#D4AF37]/30 ml-4 sm:ml-32 space-y-12">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-12 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0A192F] border-2 border-[#D4AF37] group-hover:bg-[#D4AF37] transition-all" />
                
                {/* Year Badge */}
                <div className="sm:absolute sm:-left-36 sm:top-0 text-[#D4AF37] font-mono font-bold text-lg mb-2 sm:mb-0">
                  {item.year}
                </div>

                {/* Content Box */}
                <div className="p-6 rounded-3xl bg-white/[0.03] border border-[#D4AF37]/20 shadow-xl backdrop-blur-md">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. LEADERSHIP & EXPERT TEAM */}
      <section className="py-24 bg-[#050e1c] border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 inline-block mb-4">
              Master Minds
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
              Meet Our Leadership & Specialists
            </h2>
            <p className="text-gray-300 text-base font-light">
              Dedicated professionals committed to delivering the ultimate Egyptian adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/[0.02] border border-[#D4AF37]/20 text-center shadow-xl group hover:border-[#D4AF37] transition-all duration-300">
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-2xl mb-6 bg-white/5">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">{member.name}</h3>
                <div className="text-xs text-[#D4AF37] font-semibold tracking-wider uppercase mb-4">{member.role}</div>
                <p className="text-gray-300 text-sm font-light leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 inline-block mb-4">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="rounded-3xl bg-white/[0.03] border border-[#D4AF37]/20 overflow-hidden transition-all shadow-xl"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-lg text-white hover:text-[#D4AF37] transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="w-8 h-8 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-gray-300 text-sm font-light leading-relaxed border-t border-[#D4AF37]/10 pt-4 animate-in fade-in duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto rounded-[40px] bg-gradient-to-r from-[#050e1c] via-[#0A192F] to-[#050e1c] border-2 border-[#D4AF37]/40 p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6">
              Ready to Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-yellow-500">Pharaonic Magic?</span>
            </h2>
            <p className="text-gray-300 text-lg font-light mb-8">
              Let our luxury travel planners design your dream Egyptian vacation today. Contact us now via email or WhatsApp.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-[#0A192F] font-black text-sm tracking-wider uppercase shadow-2xl hover:scale-105 transition-all"
              >
                Start Planning Now
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