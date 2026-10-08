import { Link } from "@/i18n/navigation";

const PREVIEW_PHOTOS = [
  { id: 1, title: "Study Fair Session at NDC Main Auditorium", category: "Study Fair" },
  { id: 2, title: "IBA Analytical Writing Drill on Stage", category: "Masterclass" },
  { id: 3, title: "BUET Engineering Problem Solving", category: "Workshop" },
  { id: 4, title: "Executive Committee Strategy Meeting", category: "Executive" },
  { id: 5, title: "One-on-One Senior Mentorship Corner", category: "Mentorship" },
  { id: 6, title: "Club Crest Presentation Ceremony", category: "Ceremony" },
];

export default function GalleryTeaser() {
  return (
    <section className="section-padding bg-surface-1 border-t border-border">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-eyebrow">
              Campus Life & Events
            </span>
            <h2 className="section-title">
              Photo Gallery
            </h2>
          </div>

          <Link
            href="/activities"
            className="text-sm font-bold text-brand hover:underline inline-block self-start md:self-end"
          >
            View full photo gallery &rarr;
          </Link>
        </div>

        {/* 6-Photo Clean Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {PREVIEW_PHOTOS.map((photo) => (
            <Link
              key={photo.id}
              href="/activities"
              className="group bg-canvas border border-border rounded-card p-4 flex flex-col justify-between aspect-square hover:border-ink transition-colors"
            >
              <div className="text-[10px] font-bold uppercase tracking-wider text-brand">
                {photo.category}
              </div>
              <div className="font-display font-bold text-xs text-ink group-hover:text-brand transition-colors line-clamp-3">
                {photo.title}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
