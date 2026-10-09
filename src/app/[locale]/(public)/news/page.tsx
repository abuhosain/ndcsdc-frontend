import { Link } from "@/i18n/navigation";
import PageHeader from "@/components/common/PageHeader";
import { getNews } from "@/services/common";
import { ArrowRight, Pin } from "lucide-react";

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const resolvedParams = await searchParams;
  const currentCategory = resolvedParams?.category || "ALL";

  let newsItems: any[] = [];

  try {
    const res = await getNews(currentCategory !== "ALL" ? currentCategory : undefined);
    if (res?.data) {
      newsItems = res.data;
    }
  } catch {
    // Fallback
  }

  const CATEGORIES = ["ALL", "Announcement", "Notice", "Result", "Press"];

  return (
    <div className="bg-canvas">
      
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="Press & Secretariat"
        title="News & Announcements"
        description="Official notices, delegate registration updates, panel declarations, and event press releases from NDCSDC."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Media" },
          { label: "News & Announcements" },
        ]}
      />

      {/* 2. Filter Bar */}
      <section className="bg-white border-b border-border py-2.5 sm:py-3">
        <div className="container-custom flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 whitespace-nowrap">
            <span className="text-[11px] font-bold uppercase text-ink-muted mr-1">Category:</span>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`/news?category=${encodeURIComponent(cat)}`}
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

          <div className="text-[11px] text-ink-muted font-mono shrink-0">
            {newsItems.length} {newsItems.length === 1 ? "Article" : "Articles"}
          </div>
        </div>
      </section>

      {/* 3. News Feed List */}
      <section className="section-padding container-custom">
        {newsItems.length > 0 ? (
          <div className="max-w-4xl mx-auto space-y-4">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className={`bg-white border rounded-lg p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-brand/40 transition-colors shadow-2xs ${
                  item.isPinned ? "border-brand/60 bg-white" : "border-border"
                }`}
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2 text-xs">
                    {item.isPinned && (
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded text-[9px] font-mono font-bold uppercase bg-brand text-white">
                        <Pin className="w-2.5 h-2.5" />
                        Pinned Notice
                      </span>
                    )}
                    <span className="px-2 py-0.2 rounded text-[10px] font-mono font-bold uppercase bg-surface-1 text-ink border border-border">
                      {item.category}
                    </span>
                    <span className="text-ink-muted font-mono text-[10px]">
                      {item.publishedAt ? new Date(item.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : ""}
                    </span>
                  </div>

                  <h2 className="font-display text-base sm:text-lg font-bold uppercase text-ink">
                    <Link href={`/news/${item.slug}`} className="hover:text-brand transition-colors">
                      {item.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-ink-secondary leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-border/50">
                  <Link
                    href={`/news/${item.slug}`}
                    className="btn-secondary text-xs uppercase tracking-wider py-1.5 px-3.5 font-bold inline-flex items-center gap-1"
                  >
                    <span>Read Notice</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-surface-1 border border-border rounded-lg p-8 sm:p-12 text-center max-w-md mx-auto space-y-3">
            <h3 className="font-display text-sm font-bold uppercase text-ink">
              No Articles Found
            </h3>
            <p className="text-xs text-ink-secondary">
              Try switching categories or viewing all announcements.
            </p>
            <div className="pt-1">
              <Link href="/news" className="btn-secondary text-xs uppercase tracking-wider py-1.5 px-3.5 font-bold">
                View All News
              </Link>
            </div>
          </div>
        )}
      </section>

    </div>
  );
}
