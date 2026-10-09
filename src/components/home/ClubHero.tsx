import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function ClubHero() {
  return (
    <section className="relative bg-surface-1 border-b border-border py-5 sm:py-7 lg:py-8 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          
          {/* Dual Crest Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-border/80 shadow-2xs mb-2.5">
            <div className="flex items-center gap-1.5">
              <div className="relative w-4 h-4 flex items-center justify-center">
                <Image
                  src="/logos/ndc-college-logo.jpeg"
                  alt="Notre Dame College Crest"
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </div>
              <span className="text-border text-[10px]">|</span>
              <div className="relative w-4 h-4 flex items-center justify-center">
                <Image
                  src="/logos/ndcsdc-logo.jpeg"
                  alt="NDCSDC Seal"
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </div>
            </div>
            <span className="text-[10px] font-semibold text-ink-secondary">
              Notre Dame College, Dhaka &bull; Est. 2025
            </span>
          </div>

          {/* Club Main Title */}
          <h1 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase text-ink tracking-tight leading-tight mb-2">
            Notre Dame Career & Skill Development Club
          </h1>

          {/* One-line Mission & Supporting Line */}
          <p className="text-xs sm:text-sm text-ink font-medium leading-snug mb-1">
            Guiding every student toward academic mastery, competitive university admissions, and lifelong career leadership.
          </p>
          <p className="text-[11px] sm:text-xs text-ink-secondary leading-relaxed mb-4 max-w-2xl">
            Established under the mentorship of Notre Dame College administration to provide structured roadmaps for higher education across Engineering, Business, Medicine, and Global Studies.
          </p>

          {/* Two Quiet CTAs */}
          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href="/about"
              className="btn-primary"
            >
              About the Club
            </Link>
            <Link
              href="/events/upcoming"
              className="btn-secondary"
            >
              Upcoming Events
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
