// src/components/WhyChooseUs.tsx
import Image from 'next/image';

const features = [
  {
    title: "Flexible Booking & Competitive Prices",
    description: "Enjoy stress-free planning with flexible cancellation policies and the best rates guaranteed for your luxury Egyptian holiday.",
    image: "/Flexible Booking.webp",
  },
  {
    title: "Local Experts, Authentic Experiences",
    description: "Discover hidden gems and rich history guided by passionate local experts who know Egypt inside and out.",
    image: "/Local Experts, Authentic Experiences.webp",
  },
  {
    title: "Trusted by Thousands of Travelers",
    description: "Join our community of happy explorers from around the globe who experienced the true magic of the pharaohs with us.",
    image: "/Trusted by Thousands of Travelers.webp",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0A192F] relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 inline-block mb-4 shadow-md">
            WHAT MAKES US DIFFERENT
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-wide mb-6">
            Why Book <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-300 to-yellow-500">With Us</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
            At ahmt egypt travel, we turn your Egyptian dreams into unforgettable memories. With years of experience, a passionate local team, and a deep love for our heritage, we offer handpicked tours, expert guides, and unbeatable value. Whether you’re seeking ancient wonders, Nile cruises, or Red Sea adventures – we make sure your journey is safe, smooth, and truly special.
          </p>
        </div>

        {/* Features Cards Grid with Flying Paper Hover Effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-[#D4AF37]/20 rounded-3xl p-8 shadow-2xl transition-all duration-500 ease-out hover:-translate-y-4 hover:rotate-1 hover:scale-[1.02] hover:border-[#D4AF37] hover:shadow-[0_20px_50px_rgba(212,175,55,0.2)] flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top light reflection like paper gloss */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div>
                {/* Image Container with Floating Animation */}
                <div className="relative w-full h-56 mb-6 rounded-2xl overflow-hidden shadow-lg border border-[#D4AF37]/30">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Gold Accent Line */}
              <div className="w-12 h-1 bg-[#D4AF37] rounded-full mt-6 transition-all duration-500 group-hover:w-full bg-gradient-to-r from-[#D4AF37] to-yellow-200" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}