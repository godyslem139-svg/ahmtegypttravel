// app/page.tsx
import Hero from "@/components/Hero";
import EgyptianGallery from "@/components/EgyptianGallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import TourTypesGallery from "@/components/TourTypesGallery"; 
import SampleTours from "@/components/SampleTours";
import CuratedJourneys from "@/components/CuratedJourneys";
import CustomEscape from "@/components/CustomEscape"; 

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A192F]">
      <Hero />
      
      <EgyptianGallery />

      <WhyChooseUs />

      <TourTypesGallery />

      <SampleTours />

      <CuratedJourneys />

      <CustomEscape />
    </div>
  );
}