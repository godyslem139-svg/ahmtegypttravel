// app/page.tsx
import Hero from "@/components/Hero";
import EgyptianGallery from "@/components/EgyptianGallery"; // معرض الصور المتحرك تحت الهيرو مباشرة
import WhyChooseUs from "@/components/WhyChooseUs";
import SampleTours from "@/components/SampleTours";
import CuratedJourneys from "@/components/CuratedJourneys";
import CustomEscape from "@/components/CustomEscape"; // سكشن تصميم الرحلة المخصصة مع فيديو bb.mp4

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A192F]">
      {/* سكشن الهيرو الرئيسي */}
      <Hero />
      
      {/* معرض الصور المتحرك تحت الهيرو مباشرة */}
      <EgyptianGallery />

      {/* سكشن مميزات الشركة مع تأثير الورقة الطائرة */}
      <WhyChooseUs />

      {/* سكشن الرحلات النموذجية */}
      <SampleTours />

      {/* سكشن الرحلات المنسقة (Curated Journeys) */}
      <CuratedJourneys />

      {/* سكشن تصميم الرحلة المخصصة مع فيديو bb.mp4 */}
      <CustomEscape />
    </div>
  );
}