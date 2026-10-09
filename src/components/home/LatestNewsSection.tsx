import { Link } from "@/i18n/navigation";
import { getNews } from "@/services/common";

const DEFAULT_NEWS = [
  {
    title: "Delegate Registration Opens for 1st National Academic & Career Summit 2026",
    slug: "delegate-registration-opens-nacs-2026",
    category: "Announcement",
    summary: "Online seat reservation is now live for all 4 specialized tracks: IBA, BUET, Medical, and Abroad Studies.",
    publishedAt: "2026-03-01",
  },
  {
    title: "NDCSDC Executive & Sub-Executive Committee 2025-26 Official Roster Released",
    slug: "executive-sub-executive-committee-2025-26-announced",
    category: "Notice",
    summary: "The club administration announces appointed panel leads across Operations, Media, Logistics, and Publications.",
    publishedAt: "2026-01-15",
  },
  {
    title: "Higher Education Study Fair 2025 Concludes with Record Turnout",
    slug: "study-fair-2025-concludes-record-turnout",
    category: "Press",
    summary: "Over 3,200 students benefited from personalized counselling and academic pathway sessions at NDC premises.",
    publishedAt: "2025-10-20",
  },
];

export default async function LatestNewsSection() {
  let newsList = DEFAULT_NEWS;

  try {
    const res = await getNews();
    if (res?.data && res.data.length > 0) {
      newsList = res.data.slice(0, 3).map((item) => ({
        title: item.title,
        slug: item.slug,
        category: item.category,
        summary: item.summary,
        publishedAt: item.publishedAt ? new Date(item.publishedAt).toLocaleDateString() : "",
      }));
    }
  } catch {
    // Fallback
  }

  return (
    <section className="section-padding bg-surface-1 border-b border-border">
      <div className="container-custom">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-2">
          <div>
            <span className="section-eyebrow">
              Official Bulletins
            </span>
            <h2 className="section-title mb-0">
              Latest News & Announcements
            </h2>
          </div>
          <Link
            href="/news"
            className="text-xs font-bold uppercase tracking-wider text-brand hover:underline"
          >
            View All News →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {newsList.map((item, idx) => (
            <article
              key={idx}
              className="bg-white border border-border rounded-lg p-5 flex flex-col justify-between hover:border-brand/40 transition-colors shadow-2xs"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span className="px-2 py-0.5 rounded bg-surface-1 font-semibold uppercase text-ink">
                    {item.category}
                  </span>
                  <span>{item.publishedAt}</span>
                </div>

                <h3 className="font-display text-sm sm:text-base font-bold text-ink hover:text-brand transition-colors leading-snug">
                  <Link href={`/news/${item.slug}`}>
                    {item.title}
                  </Link>
                </h3>

                <p className="text-xs text-ink-secondary leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-border/50">
                <Link
                  href={`/news/${item.slug}`}
                  className="text-xs font-bold text-ink hover:text-brand transition-colors"
                >
                  Read announcement &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
