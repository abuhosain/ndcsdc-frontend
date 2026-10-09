import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export default function FeaturedSpotlightStrip() {
  return (
    <section className="bg-canvas border-b border-border py-4 sm:py-5">
      <div className="container-custom">
        <div className="bg-white border-2 border-ink rounded-lg p-3.5 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs">
          
          <div className="space-y-1 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-brand text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Featured Event
              </span>
              <span className="text-[11px] font-mono text-ink-muted">
                14 Nov 2026 &bull; Notre Dame College Campus
              </span>
            </div>

            <h3 className="font-display text-base sm:text-lg font-extrabold uppercase text-ink tracking-tight">
              1st National Academic & Career Summit 2026 (NACS 2026)
            </h3>

            <p className="text-xs text-ink-secondary leading-relaxed">
              4 specialized tracks in IBA, BUET, Medical, and Abroad studies featuring 16 masterclasses, nationwide mentors, and 1,800 student delegates.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 shrink-0">
            <Link
              href="/summit"
              className="btn-secondary text-xs py-1.5 px-3.5"
            >
              Explore Summit
            </Link>
            <Link
              href="/summit/register"
              className="btn-primary text-xs py-1.5 px-3.5 inline-flex items-center gap-1"
            >
              <span>Register Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
