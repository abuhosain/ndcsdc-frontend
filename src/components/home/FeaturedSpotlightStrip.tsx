import { Link } from "@/i18n/navigation";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { getEvents, type EventItem } from "@/services/common";

const DEFAULT_FEATURED_EVENT: EventItem = {
  id: "feat-1",
  title: "1st National Academic & Career Summit 2026 (NACS 2026)",
  slug: "nacs-2026-flagship-summit",
  category: "Summit",
  isUpcoming: true,
  isFeatured: true,
  eventStatus: "OPEN",
  venue: "Notre Dame College Campus",
  date: "2026-11-14T09:00:00Z",
  registrationUrl: "/summit/register",
  summary: "4 specialized tracks in IBA, BUET, Medical, and Abroad studies featuring 16 masterclasses, nationwide mentors, and 1,800 student delegates.",
};

export default async function FeaturedSpotlightStrip() {
  let featuredEvent: EventItem | null = DEFAULT_FEATURED_EVENT;

  try {
    const res = await getEvents({ isFeatured: true });
    if (res?.data) {
      if (res.data.length > 0) {
        featuredEvent = res.data[0];
      } else {
        // Explicitly empty from backend (all events unfeatured)
        featuredEvent = null;
      }
    }
  } catch {
    // Keep DEFAULT_FEATURED_EVENT fallback
  }

  // If no featured event is set, hide this section completely
  if (!featuredEvent) {
    return null;
  }

  const isFull = featuredEvent.eventStatus === "FULL" || featuredEvent.eventStatus === "CLOSED";
  const isSummit = featuredEvent.category?.toLowerCase() === "summit" || featuredEvent.slug?.includes("summit");
  const exploreHref = isSummit ? "/summit" : `/events/past/${featuredEvent.slug}`;
  const regHref = featuredEvent.registrationUrl || (isSummit ? "/summit/register" : exploreHref);
  const isExternalReg = regHref.startsWith("http://") || regHref.startsWith("https://");

  const formattedDate = featuredEvent.date
    ? new Date(featuredEvent.date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

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
              <span className="text-[11px] font-mono text-ink-muted flex items-center gap-2">
                {formattedDate && (
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-brand" />
                    {formattedDate}
                  </span>
                )}
                {featuredEvent.venue && (
                  <>
                    <span>&bull;</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-brand" />
                      {featuredEvent.venue}
                    </span>
                  </>
                )}
              </span>
            </div>

            <h3 className="font-display text-base sm:text-lg font-extrabold uppercase text-ink tracking-tight">
              {featuredEvent.title}
            </h3>

            {featuredEvent.summary && (
              <p className="text-xs text-ink-secondary leading-relaxed line-clamp-2">
                {featuredEvent.summary}
              </p>
            )}
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 shrink-0">
            <Link
              href={exploreHref}
              className="btn-secondary text-xs py-1.5 px-3.5"
            >
              {isSummit ? "Explore Summit" : "Explore Event"}
            </Link>

            {isExternalReg ? (
              <a
                href={regHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs py-1.5 px-3.5 inline-flex items-center gap-1 font-bold uppercase tracking-wider ${
                  isFull
                    ? "bg-neutral-300 text-neutral-600 cursor-not-allowed pointer-events-none rounded-lg"
                    : "btn-primary"
                }`}
              >
                <span>{isFull ? "Registration Closed" : "Register Now"}</span>
                {!isFull && <ArrowRight className="w-3.5 h-3.5" />}
              </a>
            ) : (
              <Link
                href={regHref}
                className={`text-xs py-1.5 px-3.5 inline-flex items-center gap-1 font-bold uppercase tracking-wider ${
                  isFull
                    ? "bg-neutral-300 text-neutral-600 cursor-not-allowed pointer-events-none rounded-lg"
                    : "btn-primary"
                }`}
              >
                <span>{isFull ? "Registration Closed" : "Register Now"}</span>
                {!isFull && <ArrowRight className="w-3.5 h-3.5" />}
              </Link>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
