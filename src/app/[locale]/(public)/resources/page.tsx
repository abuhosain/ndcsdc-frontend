import { Link } from "@/i18n/navigation";
import PageHeader from "@/components/common/PageHeader";
import { getResources } from "@/services/common";
import { ArrowUpRight, Calendar } from "lucide-react";

export default async function ResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const resolvedParams = await searchParams;
  const currentCategory = resolvedParams?.category || "ALL";
  const currentSearch = resolvedParams?.search || "";

  let resourcesList: any[] = [];

  try {
    const res = await getResources({
      category: currentCategory !== "ALL" ? currentCategory : undefined,
      search: currentSearch || undefined,
    });
    if (res?.data) {
      resourcesList = res.data;
    }
  } catch {
    // Fallback
  }

  const CATEGORIES = [
    "ALL",
    "Admission Guides",
    "Study Material",
    "Scholarships",
    "Internships & Jobs",
    "Competitions",
    "Useful Links",
  ];

  return (
    <div className="bg-canvas">
      
      {/* 1. Page Header (Tight & Compact) */}
      <PageHeader
        eyebrow="Academic Repository"
        title="Resources & Opportunities"
        description="Comprehensive admission guides, high-yield problem compendiums, scholarship roadmaps, and student competitions curated by NDCSDC mentors."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources & Opportunities" },
        ]}
      />

      {/* 2. Search & Category Filter Bar */}
      <section className="bg-white border-b border-border py-2.5 sm:py-3">
        <div className="container-custom flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          
          {/* Horizontal scrollable category pills on mobile */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 whitespace-nowrap">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`/resources?category=${encodeURIComponent(cat)}${currentSearch ? `&search=${encodeURIComponent(currentSearch)}` : ""}`}
                className={`px-3 py-1 rounded text-[11px] font-semibold uppercase tracking-wider transition-colors shrink-0 ${
                  currentCategory === cat
                    ? "bg-ink text-white"
                    : "bg-surface-1 text-ink-secondary hover:text-ink border border-border"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>

          <div className="text-[11px] text-ink-muted font-mono shrink-0 hidden sm:block">
            {resourcesList.length} {resourcesList.length === 1 ? "Item" : "Items"}
          </div>

        </div>
      </section>

      {/* 3. Resources Grid */}
      <section className="section-padding container-custom">
        {resourcesList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {resourcesList.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-border rounded-lg p-4 sm:p-5 flex flex-col justify-between hover:border-brand/50 transition-colors shadow-2xs"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted">
                    <span className="px-1.5 py-0.2 rounded bg-surface-1 font-semibold uppercase text-ink">
                      {item.category}
                    </span>
                    <span className="px-1.5 py-0.2 rounded bg-surface-1 font-bold text-brand uppercase text-[9px]">
                      {item.type}
                    </span>
                  </div>

                  <h2 className="font-display text-sm sm:text-base font-bold text-ink leading-snug">
                    {item.title}
                  </h2>

                  <p className="text-xs text-ink-secondary leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  {item.deadline && (
                    <div className="flex items-center gap-1.5 text-[10px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      <Calendar className="w-3 h-3" />
                      <span>Deadline: {new Date(item.deadline).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>

                <div className="pt-3 mt-3 border-t border-border/50">
                  {item.url || item.fileUrl ? (
                    <a
                      href={item.url || item.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full text-xs uppercase tracking-wider py-1.5 font-bold inline-flex items-center justify-center gap-1"
                    >
                      <span>Access Resource</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs text-ink-muted block text-center py-1.5">
                      Available on Request
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-surface-1 border border-border rounded-lg p-8 sm:p-12 text-center max-w-md mx-auto space-y-3">
            <h3 className="font-display text-sm font-bold uppercase text-ink">
              No Resources Found
            </h3>
            <p className="text-xs text-ink-secondary">
              Try switching category filters to find study guides and materials.
            </p>
            <div className="pt-1">
              <Link href="/resources" className="btn-secondary text-xs uppercase tracking-wider py-1.5 px-3.5 font-bold">
                Reset Filter
              </Link>
            </div>
          </div>
        )}
      </section>

    </div>
  );
}
