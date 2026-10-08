import HeroSection from "@/components/home/HeroSection";
import CountdownBanner from "@/components/home/CountdownBanner";
import TrustBentoGrid from "@/components/home/TrustBentoGrid";
import PathwaysSection from "@/components/home/PathwaysSection";
import ActivitiesTeaser from "@/components/home/ActivitiesTeaser";
import GalleryTeaser from "@/components/home/GalleryTeaser";
import PartnersSection from "@/components/home/PartnersSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <div className="bg-canvas">
      {/* 1. Hero with NDCSDC PRESENTS, Big Title, Date/Venue & Stream Matcher */}
      <HeroSection />

      {/* 2. Real-time Countdown Banner */}
      <CountdownBanner />

      {/* 3. Stat Row + 3 Core Focus Pillars */}
      <TrustBentoGrid />

      {/* 4. 4 Specialized Pathways (IBA, BUET, Medical, Abroad) */}
      <PathwaysSection />

      {/* 5. Latest Activities */}
      <ActivitiesTeaser />

      {/* 6. Photo Gallery Preview */}
      <GalleryTeaser />

      {/* 7. Partners Strip with Website Partner Highlight */}
      <PartnersSection />

      {/* 8. Closing Registration CTA Band */}
      <CtaBanner />
    </div>
  );
}
