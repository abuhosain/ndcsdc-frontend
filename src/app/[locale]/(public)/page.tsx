import ClubHero from "@/components/home/ClubHero";
import WhoWeAreSection from "@/components/home/WhoWeAreSection";
import ImpactNumbersRow from "@/components/home/ImpactNumbersRow";
import FeaturedSpotlightStrip from "@/components/home/FeaturedSpotlightStrip";
import LatestNewsSection from "@/components/home/LatestNewsSection";
import RecentEventsSection from "@/components/home/RecentEventsSection";
import GalleryPreviewSection from "@/components/home/GalleryPreviewSection";
import ExecutivePanelPreview from "@/components/home/ExecutivePanelPreview";
import PartnersStripSection from "@/components/home/PartnersStripSection";
import ResourcesAlumniTeaser from "@/components/home/ResourcesAlumniTeaser";
import ContactCtaBand from "@/components/home/ContactCtaBand";

export default function HomePage() {
  return (
    <div className="bg-canvas">
      {/* 1. Hero: Club name, logos, mission, supporting line, two quiet CTAs */}
      <ClubHero />

      {/* 2. Who We Are: 3 focus areas (Career Guidance, Skill Development, Community Building) as text columns */}
      <WhoWeAreSection />

      {/* 3. Impact Numbers Row (students reached, events, panel, year active), numerals only */}
      <ImpactNumbersRow />

      {/* 4. One Featured Strip: NACS 2026 Summit card */}
      <FeaturedSpotlightStrip />

      {/* 5. Latest News and Announcements (3 items) */}
      <LatestNewsSection />

      {/* 6. Recent Events & Activities (3 items) */}
      <RecentEventsSection />

      {/* 7. Gallery Preview (6 images) */}
      <GalleryPreviewSection />

      {/* 8. Executive Panel Preview (faces + link) */}
      <ExecutivePanelPreview />

      {/* 9. Partners & Sponsors Strip */}
      <PartnersStripSection />

      {/* 10. Resources Highlight & Alumni Teaser */}
      <ResourcesAlumniTeaser />

      {/* 11. Contact CTA Band */}
      <ContactCtaBand />
    </div>
  );
}
