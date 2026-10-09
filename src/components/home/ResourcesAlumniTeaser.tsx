import { Link } from "@/i18n/navigation";
import { getResources } from "@/services/common";

const DEFAULT_RESOURCES = [
  {
    title: "Complete IBA DU BBA Admission Playbook (Math & Verbal)",
    category: "Admission Guides",
    type: "PDF",
    description: "Curated shortcuts, vocabulary sets, and 50 solved analytical reasoning problems.",
  },
  {
    title: "BUET Engineering Physics & Math High-Yield Compendium",
    category: "Study Material",
    type: "PDF",
    description: "200 conceptual engineering drills with calculus applications.",
  },
  {
    title: "Global Undergraduate Scholarships Blueprint",
    category: "Scholarships",
    type: "Guide",
    description: "Need-based financial aid & merit awards (MEXT, Lester Pearson, Rhodes).",
  },
];

export default async function ResourcesAlumniTeaser() {
  let resources = DEFAULT_RESOURCES;

  try {
    const res = await getResources();
    if (res?.data && res.data.length > 0) {
      resources = res.data.slice(0, 3).map((r) => ({
        title: r.title,
        category: r.category,
        type: r.type,
        description: r.description,
      }));
    }
  } catch {
    // Fallback
  }

  return (
    <section className="section-padding bg-canvas border-b border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left: Resources Highlight (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-end justify-between">
              <div>
                <span className="section-eyebrow">
                  Curated Material
                </span>
                <h2 className="section-title mb-0">
                  Admission Guides & Resources
                </h2>
              </div>
              <Link
                href="/resources"
                className="text-xs font-bold uppercase tracking-wider text-brand hover:underline"
              >
                All Resources →
              </Link>
            </div>

            <div className="space-y-3">
              {resources.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-border rounded-lg p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-brand/40 transition-colors shadow-2xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-ink-muted">
                      <span className="px-1.5 py-0.2 rounded bg-surface-1 font-semibold uppercase text-ink">
                        {item.category}
                      </span>
                      <span>&bull; {item.type}</span>
                    </div>
                    <h3 className="font-display text-xs sm:text-sm font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-ink-secondary leading-snug line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <Link
                    href="/resources"
                    className="btn-secondary text-xs uppercase tracking-wider py-1.5 px-3 shrink-0 font-bold self-start sm:self-center"
                  >
                    View
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Alumni Teaser (5 cols) */}
          <div className="lg:col-span-5 bg-ink text-ink-onDark rounded-lg p-6 sm:p-7 flex flex-col justify-between space-y-4 border border-neutral-800">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-bright">
                Notre Dame Continuum
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-tight leading-tight">
                Empowered by Our Alumni Network
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Notre Dame alumni studying at BUET, IBA, Dhaka Medical College, Cambridge, and Ivy League universities actively mentor club members through guest sessions and admission mock drills.
              </p>

              {/* Quote Highlight */}
              <div className="border-l-2 border-brand-bright pl-3 py-1 text-xs italic text-neutral-300">
                &ldquo;Notre Dame taught us intellectual perseverance. NDCSDC provides the compass that translates college talent into top-tier university admissions.&rdquo;
                <div className="not-italic font-bold text-white mt-1 text-[10px]">
                  &mdash; Tanvir Anjum (HSC &apos;22, BUET CSE)
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-800 flex flex-wrap items-center gap-2">
              <Link
                href="/alumni"
                className="btn-primary"
              >
                Explore Directory
              </Link>
              <Link
                href="/alumni"
                className="text-xs font-bold text-neutral-300 hover:text-white uppercase tracking-wider py-1.5 px-2"
              >
                Join Network &rarr;
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
