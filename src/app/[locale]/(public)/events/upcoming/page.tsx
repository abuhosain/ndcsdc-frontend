import { Link } from "@/i18n/navigation";
import PageHeader from "@/components/common/PageHeader";
import { getEvents, type EventItem } from "@/services/common";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const DEFAULT_UPCOMING_EVENTS: EventItem[] = [
  {
    id: "act-1",
    title: "IBA DU Masterclass: Verbal & Analytical Speed Drills",
    slug: "iba-du-masterclass-verbal-analytical",
    category: "Workshop",
    isUpcoming: true,
    isFeatured: false,
    eventStatus: "OPEN",
    venue: "NDC Audio-Visual Hall (AV-1)",
    date: "2026-06-20T10:00:00Z",
    registrationUrl: "https://forms.gle/sample-iba-workshop",
    summary: "An intensive session on reading comprehension speed, sentence correction traps, and mathematical heuristics for IBA aspirants.",
  },
  {
    id: "act-2",
    title: "1st National Academic & Career Summit 2026 (NACS 2026)",
    slug: "nacs-2026-flagship-summit",
    category: "Summit",
    isUpcoming: true,
    isFeatured: true,
    eventStatus: "OPEN",
    venue: "Notre Dame College Auditorium & Campus, Dhaka",
    date: "2026-11-14T09:00:00Z",
    registrationUrl: "/summit/register",
    summary: "The flagship summit featuring 4 specialized tracks in IBA, BUET, Medical, and Abroad studies with top nationwide mentors and 1,800 delegates.",
  },
];

export default async function UpcomingEventsPage() {
  let upcomingEvents: EventItem[] = DEFAULT_UPCOMING_EVENTS;

  try {
    const res = await getEvents({ isUpcoming: true });
    if (res?.data && res.data.length > 0) {
      upcomingEvents = res.data;
    }
  } catch {
    // Keep DEFAULT_UPCOMING_EVENTS fallback
  }

  return (
    <div className="bg-canvas">
      
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="Academic Calendar"
        title="Upcoming Events"
        description="Explore upcoming workshops, diagnostic masterclasses, study clinics, and the flagship National Academic & Career Summit."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events" },
          { label: "Upcoming Events" },
        ]}
      />

      {/* 2. Events Filter Bar & Past Archive Link */}
      <section className="bg-white border-b border-border py-2.5 sm:py-3">
        <div className="container-custom flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-md bg-ink text-white text-[11px] font-bold uppercase tracking-wider">
              Upcoming Listings
            </span>
            <Link
              href="/events/past"
              className="px-3 py-1 rounded-md bg-surface-1 text-ink-secondary hover:text-ink text-[11px] font-bold uppercase tracking-wider transition-colors border border-border"
            >
              Past Events Archive →
            </Link>
          </div>

          <div className="text-[11px] text-ink-muted font-mono">
            {upcomingEvents.length} Active {upcomingEvents.length === 1 ? "Event" : "Events"}
          </div>
        </div>
      </section>

      {/* 3. Upcoming Events Grid / List */}
      <section className="section-padding container-custom">
        {upcomingEvents.length > 0 ? (
          <div className="space-y-4 max-w-4xl mx-auto">
            {upcomingEvents.map((event) => {
              const status = event.eventStatus || "OPEN";
              const isClosingSoon = status === "CLOSING_SOON";
              const isFull = status === "FULL" || status === "CLOSED";

              return (
                <div
                  key={event.id}
                  className="bg-white border border-border rounded-lg p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-brand/50 transition-colors shadow-2xs"
                >
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-2 py-0.2 rounded text-[10px] font-mono font-bold uppercase bg-surface-1 text-ink border border-border">
                        {event.category || "Workshop"}
                      </span>
                      
                      {/* Status Tag */}
                      <span
                        className={`px-2 py-0.2 rounded text-[10px] font-mono font-bold uppercase ${
                          isFull
                            ? "bg-neutral-200 text-neutral-600"
                            : isClosingSoon
                            ? "bg-amber-100 text-amber-800 border border-amber-300"
                            : "bg-emerald-100 text-emerald-800 border border-emerald-300"
                        }`}
                      >
                        {status.replace("_", " ")}
                      </span>
                    </div>

                    <h2 className="font-display text-base sm:text-lg font-bold uppercase text-ink">
                      {event.title}
                    </h2>

                    <p className="text-xs text-ink-secondary leading-relaxed">
                      {event.summary}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-[11px] text-ink-muted pt-1 font-medium">
                      {event.date && (
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-brand" />
                          <span>{new Date(event.date).toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "short", year: "numeric" })}</span>
                        </div>
                      )}
                      {event.venue && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-brand" />
                          <span>{event.venue}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-border/50 flex flex-col items-start md:items-end gap-2">
                    {(() => {
                      const isSummit = event.category?.toLowerCase() === "summit" || event.slug.includes("summit");
                      const defaultRegPath = isSummit ? "/summit/register" : `/events/register?slug=${event.slug}`;
                      const regPath = event.registrationUrl && !event.registrationUrl.includes("forms.gle") && !event.registrationUrl.includes("drive.google")
                        ? event.registrationUrl
                        : defaultRegPath;
                      const isExternal = regPath.startsWith("http://") || regPath.startsWith("https://");

                      if (isExternal) {
                        return (
                          <a
                            href={regPath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-xs uppercase tracking-wider py-2 px-4 font-bold inline-flex items-center gap-1 ${
                              isFull
                                ? "bg-neutral-300 text-neutral-600 cursor-not-allowed pointer-events-none rounded-lg"
                                : "btn-primary"
                            }`}
                          >
                            <span>{isFull ? "Registration Closed" : "Register Now"}</span>
                            {!isFull && <ArrowRight className="w-3 h-3" />}
                          </a>
                        );
                      }

                      return (
                        <Link
                          href={regPath}
                          className={`text-xs uppercase tracking-wider py-2 px-4 font-bold inline-flex items-center gap-1 ${
                            isFull
                              ? "bg-neutral-300 text-neutral-600 cursor-not-allowed pointer-events-none rounded-lg"
                              : "btn-primary"
                          }`}
                        >
                          <span>{isFull ? "Registration Closed" : "Register Now"}</span>
                          {!isFull && <ArrowRight className="w-3 h-3" />}
                        </Link>
                      );
                    })()}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-surface-1 border border-border rounded-lg p-8 sm:p-12 text-center max-w-lg mx-auto space-y-3 shadow-2xs">
            <div className="w-12 h-12 mx-auto rounded-full bg-white border border-border flex items-center justify-center text-brand font-bold text-lg">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-display text-base font-bold uppercase text-ink">
              No Upcoming Events Right Now
            </h3>
            <p className="text-xs text-ink-secondary leading-relaxed">
              We are finalizing the workshop schedule for the upcoming semester. Explore our past activities or follow our news bulletins.
            </p>
            <div className="pt-2 flex justify-center gap-2.5">
              <Link href="/news" className="btn-secondary text-xs uppercase tracking-wider py-1.5 px-3.5 font-bold">
                View News
              </Link>
              <Link href="/events/past" className="btn-ghost text-xs uppercase tracking-wider font-bold">
                Past Archive →
              </Link>
            </div>
          </div>
        )}
      </section>

    </div>
  );
}
