// src/components/CuratedJourneys.tsx
import Link from 'next/link';

const journeys = [
  {
    title: "Luxurious Sharm Retreat",
    subtitle: "Red Sea Coastal Elegance",
    description: "Unwind in ultimate luxury on the Red Sea coast, enjoying the breathtaking views and world-class hospitality of Sharm El Sheikh.",
  },
  {
    title: "Timeless Wonders of Cairo",
    subtitle: "Pharaonic Heritage & Modern Pulse",
    description: "Discover the true heart of Egyptian civilization, where ancient history seamlessly meets the vibrant pulse of modern city life.",
  },
  {
    title: "The Nile & Sea Blend",
    subtitle: "From River Valleys to Turquoise Shores",
    description: "Embark on an extraordinary journey that perfectly balances the timeless heritage of historic Cairo with the serene shores of Hurghada.",
  },
  {
    title: "The Ultimate Egyptian Odyssey",
    subtitle: "Complete Royal Expedition",
    description: "Your comprehensive journey through Egypt's greatest landmarks, from the iconic Pyramids to the pristine Red Sea—the adventure of a lifetime.",
  },
  {
    title: "Whispers of Ancient Glory",
    subtitle: "Historic Streets & Secrets",
    description: "Immerse yourself in the enchanting streets of historic Cairo, where every corner holds a secret of the past waiting to be uncovered.",
  },
  {
    title: "Reefs & Desert Majesty",
    subtitle: "Safari & Underwater Wonders",
    description: "An unforgettable adventure awaits in Sharm El Sheikh; explore vibrant coral reefs beneath the sea and the awe-inspiring beauty of the desert.",
  },
];

export default function CuratedJourneys() {
  return (
    <section className="py-28 bg-[#0A192F] relative overflow-hidden">
      
      {/* Background Glow Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 inline-block mb-4 shadow-lg">
            Curated Journeys Awaiting You
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-wide mb-6">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-yellow-500">Hand-Picked Itineraries</span>
          </h2>
          <p className="text-gray-300 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Explore our hand-picked itineraries, designed to immerse you in the magic of Egypt. Find your inspiration, then let us tailor it to your vision.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

      </div>

      {/* Infinite Moving Marquee Slider */}
      <div className="relative w-full overflow-hidden flex py-4">
        
        {/* Gradient Fade Edges for Smooth Look */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A192F] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A192F] to-transparent z-20 pointer-events-none" />

        {/* Marquee Track (Repeated for infinite seamless scroll) */}
        <div className="flex gap-8 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
          {[...journeys, ...journeys].map((item, index) => (
            <div 
              key={index}
              className="w-[380px] sm:w-[420px] flex-shrink-0 group relative bg-white/[0.04] backdrop-blur-2xl border-2 border-[#D4AF37]/40 rounded-[45px] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_25px_60px_rgba(212,175,55,0.25)] flex flex-col justify-between whitespace-normal"
            >
              {/* Top Gold Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/20 to-transparent rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125" />

              <div>
                {/* Subtitle */}
                <span className="text-xs font-semibold tracking-wider text-[#D4AF37] uppercase block mb-3">
                  ✦ {item.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 group-hover:text-[#D4AF37] transition-colors leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              {/* Action Area */}
              <div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mb-6" />

                <Link 
                  href="/contact" 
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-[#0A192F] font-black text-sm tracking-wider text-center block shadow-lg hover:opacity-95 transition-all transform hover:scale-[1.02]"
                >
                  BOOK NOW
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}