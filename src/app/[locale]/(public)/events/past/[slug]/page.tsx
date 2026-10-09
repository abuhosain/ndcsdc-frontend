import { Link } from "@/i18n/navigation";
import PageHeader from "@/components/common/PageHeader";
import { getEventBySlug } from "@/services/common";
import { notFound } from "next/navigation";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let event: any = null;

  try {
    const res = await getEventBySlug(slug);
    if (res?.data) {
      event = res.data;
    }
  } catch {
    //
  }

  if (!event) {
    notFound();
  }

  let metrics: any = null;
  if (event.outcomeMetrics) {
    try {
      metrics = JSON.parse(event.outcomeMetrics);
    } catch {
      metrics = null;
    }
  }

  return (
    <div className="bg-canvas">
      
      {/* 1. Page Header */}
      <PageHeader
        eyebrow={`${event.category || "Event"} Report`}
        title={event.title}
        description={event.summary || ""}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events/past" },
          { label: event.title },
        ]}
      />

      {/* 2. Event Meta Strip */}
      <section className="bg-white border-b border-border py-4">
        <div className="container-custom flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-6 text-ink-muted">
            {event.date && (
              <div className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-4 h-4 text-brand" />
                <span>{new Date(event.date).toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "long", year: "numeric" })}</span>
              </div>
            )}
            {event.venue && (
              <div className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-brand" />
                <span>{event.venue}</span>
              </div>
            )}
          </div>

          <Link
            href="/events/past"
            className="text-xs font-bold text-ink hover:text-brand transition-colors inline-flex items-center gap-1 uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Archive</span>
          </Link>
        </div>
      </section>

      {/* 3. Event Content & Metrics Body */}
      <section className="section-padding container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Body (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white border border-border rounded-lg p-8 sm:p-10 space-y-6 shadow-xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-ink">
                Executive Overview & Session Breakdown
              </h2>

              <div className="prose text-sm text-ink-secondary leading-relaxed space-y-4">
                <p>
                  {event.body || event.summary || "This event brought together students, faculty, and industry mentors under the NDCSDC banner to foster academic rigor and test mastery."}
                </p>
                <p>
                  Participants took part in hands-on diagnostic exercises, real-time problem solving, and received detailed roadmaps curated by senior Notre Dame alumni.
                </p>
              </div>

              {/* Photo Album Items if present */}
              {event.albums && event.albums.length > 0 && (
                <div className="pt-6 border-t border-border space-y-4">
                  <h3 className="font-display text-base font-bold uppercase text-ink">
                    Session Gallery
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {event.albums.flatMap((a: any) => a.items || []).map((item: any) => (
                      <div key={item.id} className="bg-surface-1 border border-border rounded p-2 text-center text-xs">
                        <span className="font-mono text-[10px] text-ink-muted block">{item.caption || "Event Photo"}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar: Outcome Numbers & Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Outcome Numbers Card */}
            {metrics && (
              <div className="bg-surface-1 border border-border rounded-lg p-6 space-y-4 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-brand block">
                  Outcome & Impact
                </span>
                <div className="space-y-3">
                  {Object.entries(metrics).map(([key, val]) => (
                    <div key={key} className="border-b border-border/60 pb-2 last:border-b-0">
                      <div className="text-[10px] font-mono uppercase text-ink-muted">{key}</div>
                      <div className="font-display text-lg font-bold text-ink">{String(val)}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Action Card */}
            <div className="bg-ink text-ink-onDark rounded-lg p-6 space-y-4 border border-neutral-800 shadow-xs">
              <h4 className="font-display text-base font-bold uppercase text-white">
                Upcoming Activities
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Stay updated with our future masterclasses, diagnostic workshops, and the 1st National Academic & Career Summit 2026.
              </p>
              <div className="pt-2">
                <Link
                  href="/events/upcoming"
                  className="btn-primary text-xs uppercase tracking-wider py-2.5 px-4 font-bold block text-center"
                >
                  View Upcoming Schedule
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
