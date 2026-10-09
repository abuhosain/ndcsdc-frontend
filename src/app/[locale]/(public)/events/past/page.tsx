import { Link } from "@/i18n/navigation";
import PageHeader from "@/components/common/PageHeader";
import { getEvents } from "@/services/common";
import { ArrowRight } from "lucide-react";

export default async function PastEventsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; year?: string }>;
}) {
  const resolvedParams = await searchParams;
  const currentCategory = resolvedParams?.category || "ALL";
  const currentYear = resolvedParams?.year || "ALL";

  let pastEvents: any[] = [];

  try {
    const res = await getEvents({
      isUpcoming: false,
      category: currentCategory !== "ALL" ? currentCategory : undefined,
      year: currentYear !== "ALL" ? currentYear : undefined,
    });
    if (res?.data) {
      pastEvents = res.data;
    }
  } catch {
    // Fallback
  }

  const CATEGORIES = ["ALL", "Study Fair", "Workshop", "Seminar", "Weekly Session", "Competition"];
  const YEARS = ["ALL", "2026", "2025"];

  return (
    <div className="bg-canvas">
      
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="Chronological Archive"
        title="Past Events & Activities"
        description="A comprehensive record of study fairs, admission clinics, weekly problem-solving circles, and student skill workshops conducted by NDCSDC."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events" },
          { label: "Past Events & Activities" },
        ]}
      />

      {/* 2. Filter Bar */}
      <section className="bg-white border-b border-border py-2.5 sm:py-3">
        <div className="container-custom flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          {/* Category Filter Pills (Scrollable on mobile) */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 whitespace-nowrap">
            <span className="text-[11px] font-bold uppercase text-ink-muted mr-1">Category:</span>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`/events/past?category=${encodeURIComponent(cat)}${currentYear !== "ALL" ? `&year=${currentYear}` : ""}`}
                className={`px-2.5 py-1 rounded text-[11px] font-semibold uppercase tracking-wider transition-colors shrink-0 ${
                  currentCategory === cat
                    ? "bg-ink text-white"
                    : "bg-surface-1 text-ink-secondary hover:text-ink border border-border"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>

          {/* Year Filter */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[11px] font-bold uppercase text-ink-muted">Year:</span>
            {YEARS.map((yr) => (
              <Link
                key={yr}
                href={`/events/past?year=${encodeURIComponent(yr)}${currentCategory !== "ALL" ? `&category=${currentCategory}` : ""}`}
                className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold transition-colors ${
                  currentYear === yr
                    ? "bg-brand text-white"
                    : "bg-surface-1 text-ink-secondary hover:text-ink border border-border"
                }`}
              >
                {yr}
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Past Events Grid */}
      <section className="section-padding container-custom">
        {pastEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {pastEvents.map((event) => {
              let metrics: any = null;
              if (event.outcomeMetrics) {
                try {
                  metrics = JSON.parse(event.outcomeMetrics);
                } catch {
                  metrics = null;
                }
              }

              return (
                <article
                  key={event.id}
                  className="bg-white border border-border rounded-lg p-5 flex flex-col justify-between hover:border-brand/50 transition-colors shadow-2xs"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted">
                      <span className="px-1.5 py-0.2 rounded bg-surface-1 font-semibold uppercase text-ink">
                        {event.category}
                      </span>
                      <span>
                        {event.date ? new Date(event.date).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : ""}
                      </span>
                    </div>

                    <h2 className="font-display text-sm sm:text-base font-bold text-ink leading-snug">
                      <Link href={`/events/past/${event.slug}`} className="hover:text-brand transition-colors">
                        {event.title}
                      </Link>
                    </h2>

                    <p className="text-xs text-ink-secondary leading-relaxed line-clamp-3">
                      {event.summary}
                    </p>

                    {/* Outcome Metric Snapshot if available */}
                    {metrics && (
                      <div className="pt-1.5 grid grid-cols-2 gap-2 text-[10px] font-mono">
                        {Object.entries(metrics).slice(0, 2).map(([key, val]) => (
                          <div key={key} className="bg-surface-1 p-1 rounded border border-border/50">
                            <span className="text-ink-muted block uppercase text-[8px] truncate">{key}</span>
                            <span className="font-bold text-ink truncate text-[10px]">{String(val)}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-3 mt-3 border-t border-border/50 flex items-center justify-between">
                    <span className="text-[10px] text-ink-muted truncate max-w-[140px]">
                      {event.venue || "NDC Campus"}
                    </span>
                    <Link
                      href={`/events/past/${event.slug}`}
                      className="text-xs font-bold text-brand hover:underline inline-flex items-center gap-1"
                    >
                      <span>Event Report</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="bg-surface-1 border border-border rounded-lg p-8 sm:p-12 text-center max-w-md mx-auto space-y-3">
            <h3 className="font-display text-sm font-bold uppercase text-ink">
              No Events Found
            </h3>
            <p className="text-xs text-ink-secondary">
              Try resetting the category or year filter to view all archived activities.
            </p>
            <div className="pt-1">
              <Link href="/events/past" className="btn-secondary text-xs uppercase tracking-wider py-1.5 px-3.5 font-bold">
                Reset Filters
              </Link>
            </div>
          </div>
        )}
      </section>

    </div>
  );
}
