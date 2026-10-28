// app/page.tsx
import Hero from "@/components/Hero";
import EgyptianGallery from "@/components/EgyptianGallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import TourTypesGallery from "@/components/TourTypesGallery"; // استيراد معرض أنواع السياحة المتحرك العكسي
import SampleTours from "@/components/SampleTours";
import CuratedJourneys from "@/components/CuratedJourneys";
import CustomEscape from "@/components/CustomEscape"; 

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A192F]">
      {/* سكشن الهيرو الرئيسي */}
      <Hero />
      
      {/* معرض المدن المتحرك تحت الهيرو مباشرة */}
      <EgyptianGallery />

      {/* سكشن مميزات الشركة مع تأثير الورقة الطائرة */}
      <WhyChooseUs />

      {/* معرض أنواع السياحة المتحرك بالعكس بعد سكشن Why Choose Us */}
      <TourTypesGallery />

      {/* سكشن الرحلات النموذجية */}
      <SampleTours />

      {/* سكشن الرحلات المنسقة (Curated Journeys) */}
      <CuratedJourneys />

      {/* سكشن تصميم الرحلة المخصصة مع فيديو bb.mp4 */}
      <CustomEscape />
    </div>
  );
}