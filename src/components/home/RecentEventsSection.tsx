import { Link } from "@/i18n/navigation";
import { getEvents } from "@/services/common";

const DEFAULT_EVENTS = [
  {
    title: "IBA DU Masterclass: Verbal & Analytical Speed Drills",
    slug: "iba-du-masterclass-verbal-drills",
    category: "Workshop",
    date: "June 2026",
    venue: "NDC Audio-Visual Hall (AV-1)",
    summary: "Timed problem heuristics and vocabulary memory techniques led by IBA Batch 31 & 32 high achievers.",
    isUpcoming: true,
  },
  {
    title: "NDC Higher Education Study Fair 2025",
    slug: "ndc-higher-education-study-fair-2025",
    category: "Study Fair",
    date: "October 2025",
    venue: "Notre Dame College Gymnasium",
    summary: "Connecting 3,000+ college students with university representatives and scholarship boards.",
    isUpcoming: false,
  },
  {
    title: "Medical Admission Diagnostic Workshop 2025",
    slug: "medical-admission-diagnostic-workshop-2025",
    category: "Seminar",
    date: "December 2025",
    venue: "Science Building Hall 204",
    summary: "Diagnostic recall mapping and negative marking avoidance tactics with DMC doctors.",
    isUpcoming: false,
  },
];

export default async function RecentEventsSection() {
  let eventList = DEFAULT_EVENTS;

  try {
    const res = await getEvents();
    if (res?.data && res.data.length > 0) {
      eventList = res.data.slice(0, 3).map((item) => ({
        title: item.title,
        slug: item.slug,
        category: item.category,
        date: item.date ? new Date(item.date).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "2026",
        venue: item.venue || "Notre Dame College Campus",
        summary: item.summary || "",
        isUpcoming: item.isUpcoming,
      }));
    }
  } catch {
    // Fallback
  }

  return (
    <section className="section-padding bg-canvas border-b border-border">
      <div className="container-custom">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-2">
          <div>
            <span className="section-eyebrow">
              Academic Calendar
            </span>
            <h2 className="section-title mb-0">
              Recent Events & Activities
            </h2>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <Link
              href="/events/upcoming"
              className="font-bold uppercase tracking-wider text-ink hover:text-brand"
            >
              Upcoming Events
            </Link>
            <span className="text-border">|</span>
            <Link
              href="/events/past"
              className="font-bold uppercase tracking-wider text-brand hover:underline"
            >
              Past Archive →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {eventList.map((event, idx) => (
            <div
              key={idx}
              className="bg-white border border-border rounded-lg p-5 flex flex-col justify-between hover:border-ink/40 transition-colors shadow-2xs"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span className="px-2 py-0.5 rounded bg-surface-1 font-semibold uppercase text-ink">
                    {event.category}
                  </span>
                  <span>{event.date}</span>
                </div>

                <h3 className="font-display text-sm sm:text-base font-bold text-ink leading-snug">
                  <Link href={`/events/past/${event.slug}`} className="hover:text-brand transition-colors">
                    {event.title}
                  </Link>
                </h3>

                <p className="text-xs text-ink-secondary leading-relaxed line-clamp-3">
                  {event.summary}
                </p>

                <div className="text-[10px] text-ink-muted">
                  Venue: {event.venue}
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-border/50">
                <Link
                  href={event.isUpcoming ? `/events/upcoming` : `/events/past/${event.slug}`}
                  className="text-xs font-bold text-brand hover:underline inline-flex items-center gap-1"
                >
                  {event.isUpcoming ? "View Details & Register →" : "Read Event Summary →"}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
