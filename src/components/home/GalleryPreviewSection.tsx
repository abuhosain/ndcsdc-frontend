import { Link } from "@/i18n/navigation";
import Image from "next/image";

const GALLERY_ITEMS = [
  {
    caption: "Notre Dame College Main Building & Campus Grounds",
    src: "/logos/ndc-college-logo.jpeg",
    tag: "Campus Heritage",
  },
  {
    caption: "NDCSDC Executive Committee Inaugural Meet",
    src: "/logos/ndcsdc-logo.jpeg",
    tag: "Club Assembly",
  },
  {
    caption: "Higher Education Study Fair Exhibition Floor",
    src: "/logos/ndc-college-logo.jpeg",
    tag: "Study Fair 2025",
  },
  {
    caption: "Diagnostic Medical Assessment Clinic",
    src: "/logos/ndcsdc-logo.jpeg",
    tag: "Workshop",
  },
  {
    caption: "IBA DU Verbal Speed Strategy Drills",
    src: "/logos/ndc-college-logo.jpeg",
    tag: "Masterclass",
  },
  {
    caption: "Delegates at Notre Dame College Auditorium",
    src: "/logos/ndcsdc-logo.jpeg",
    tag: "Summit Hall",
  },
];

export default function GalleryPreviewSection() {
  return (
    <section className="section-padding bg-surface-1 border-b border-border">
      <div className="container-custom">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-2">
          <div>
            <span className="section-eyebrow">
              Visual Archive
            </span>
            <h2 className="section-title mb-0">
              Campus Moments & Sessions
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-xs font-bold uppercase tracking-wider text-brand hover:underline"
          >
            View Full Gallery →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-border rounded-lg overflow-hidden flex flex-col hover:border-brand/50 transition-colors shadow-2xs"
            >
              <div className="relative aspect-square w-full bg-surface-1 flex items-center justify-center p-3">
                <Image
                  src={item.src}
                  alt={item.caption}
                  width={80}
                  height={80}
                  className="object-contain opacity-85 group-hover:opacity-100 transition-opacity"
                />
                <span className="absolute top-1.5 left-1.5 px-1.5 py-0.2 rounded text-[8px] font-mono font-bold uppercase bg-ink text-white">
                  {item.tag}
                </span>
              </div>
              <div className="p-2 border-t border-border/50 text-[10px] text-ink font-medium line-clamp-2 leading-tight">
                {item.caption}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
