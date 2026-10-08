import { Link } from "@/i18n/navigation";

const RECENT_ACTIVITIES = [
  {
    id: 1,
    title: "National Academic Career Fair & Study Expo",
    date: "November 2025",
    type: "On-Campus Fair",
    summary:
      "A flagship multi-faculty fair connecting 800+ college students with university seniors, mock aptitude drills, and personalized admission roadmaps.",
  },
  {
    id: 2,
    title: "IBA & BUP Analytical Problem Solving Workshop",
    date: "January 2026",
    type: "Masterclass",
    summary:
      "Intensive session focused on quantitative shortcuts, critical reading heuristics, and mock viva evaluations conducted by DU IBA alumni.",
  },
  {
    id: 3,
    title: "BUET & Engineering Physics Numerical Boot Camp",
    date: "March 2026",
    type: "Bootcamp",
    summary:
      "Deep-dive technical session breaking down high-yield calculus, thermodynamics, and electromagnetism problem-solving methodologies.",
  },
];

export default function ActivitiesTeaser() {
  return (
    <section className="section-padding bg-canvas">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-eyebrow">
              Past Highlights
            </span>
            <h2 className="section-title">
              Recent Club Activities
            </h2>
          </div>

          <Link
            href="/activities"
            className="text-sm font-bold text-brand hover:underline inline-block self-start md:self-end"
          >
            Browse all events & photo gallery &rarr;
          </Link>
        </div>

        {/* 3 Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RECENT_ACTIVITIES.map((act) => (
            <div
              key={act.id}
              className="bg-surface-1 border border-border rounded-card p-6 sm:p-7 flex flex-col justify-between hover:border-ink transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-ink-muted mb-3">
                  <span>{act.type}</span>
                  <span>{act.date}</span>
                </div>

                <h3 className="font-display font-bold text-base uppercase text-ink mb-3">
                  {act.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-6">
                  {act.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-border">
                <Link
                  href="/activities"
                  className="text-xs font-bold text-brand hover:underline"
                >
                  View Event Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
