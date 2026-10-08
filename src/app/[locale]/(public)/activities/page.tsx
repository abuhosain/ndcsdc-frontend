"use client";

import { useState } from "react";
import { X } from "lucide-react";

const ACTIVITIES = [
  {
    id: 1,
    title: "National Academic Career Fair & Study Expo",
    category: "Study Fair",
    date: "November 2025",
    summary:
      "A flagship multi-faculty fair connecting 800+ college students with university representatives, mock aptitude drills, and senior mentors.",
  },
  {
    id: 2,
    title: "IBA & BUP Analytical Problem Solving Workshop",
    category: "Masterclass",
    date: "January 2026",
    summary:
      "Intensive workshop focused on quantitative shortcuts, critical reading heuristics, and mock viva evaluations conducted by DU IBA alumni.",
  },
  {
    id: 3,
    title: "BUET & Engineering Physics Numerical Boot Camp",
    category: "Bootcamp",
    date: "March 2026",
    summary:
      "Deep-dive technical session breaking down high-yield calculus, thermodynamics, and electromagnetism problem-solving methodologies.",
  },
];

const GALLERY_PHOTOS = [
  { id: 1, category: "study-fairs", title: "Study Fair Session at NDC Main Auditorium", caption: "Notre Dame College Main Hall packed during the opening session of the career expo." },
  { id: 2, category: "workshops", title: "IBA Analytical Masterclass Drill", caption: "Senior alumni conducting live problem-solving on board for HSC aspirants." },
  { id: 3, category: "workshops", title: "Engineering Numerical Speed Solving", caption: "Interactive Q&A during the BUET physics and math seminar." },
  { id: 4, category: "executive", title: "NDCSDC Executive Panel Meeting", caption: "Executive committee and moderator organizing summit logistics." },
  { id: 5, category: "study-fairs", title: "One-on-One Senior Mentorship Corner", caption: "Direct student counseling with alumni mentors across medical and abroad tracks." },
  { id: 6, category: "executive", title: "Club Crest Presentation Ceremony", caption: "Honoring club moderators and keynote speakers with official crest mementos." },
];

export default function ActivitiesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === "all"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-canvas">
      
      {/* Header */}
      <section className="bg-ink text-ink-onDark red-bottom-bar py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-bright">
              Event Archive
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl uppercase text-white tracking-tight">
              Activities & Gallery
            </h1>
            <p className="text-base text-neutral-300 leading-relaxed max-w-2xl">
              Past study fairs, weekly problem-solving masterclasses, and campus moments at Notre Dame College.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="section-padding container-custom">
        <div className="mb-10">
          <span className="section-eyebrow">Recent Events</span>
          <h2 className="section-title">Club Activities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACTIVITIES.map((act) => (
            <div
              key={act.id}
              className="bg-surface-1 border border-border rounded-card p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-ink-muted mb-3">
                  <span>{act.category}</span>
                  <span>{act.date}</span>
                </div>
                <h3 className="font-display font-bold text-base uppercase text-ink mb-2">
                  {act.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                  {act.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery with Clean Filters & Lightbox */}
      <section className="section-padding bg-surface-1 border-t border-border">
        <div className="container-custom">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="section-eyebrow">Visual Archive</span>
              <h2 className="section-title">Photo Gallery</h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Photos" },
                { id: "study-fairs", label: "Study Fairs" },
                { id: "workshops", label: "Masterclasses" },
                { id: "executive", label: "Executive" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded border transition-colors cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-ink text-white border-ink"
                      : "bg-canvas text-ink-secondary border-border hover:border-ink"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(index)}
                className="bg-canvas border border-border rounded-card p-6 aspect-[4/3] flex flex-col justify-between hover:border-ink cursor-pointer transition-colors"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-brand">
                  {photo.category}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm uppercase text-ink mb-1">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-ink-secondary line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-surface-1 border border-border rounded-card max-w-xl w-full p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                {filteredPhotos[lightboxIndex]?.category}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-1 text-ink hover:text-brand"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video bg-canvas border border-border rounded flex items-center justify-center p-6 text-center">
              <div className="space-y-2">
                <h3 className="font-display font-bold text-base uppercase text-ink">
                  {filteredPhotos[lightboxIndex]?.title}
                </h3>
                <p className="text-xs text-ink-secondary max-w-sm mx-auto">
                  {filteredPhotos[lightboxIndex]?.caption}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-ink-muted pt-2">
              <span>Photo {lightboxIndex + 1} of {filteredPhotos.length}</span>
              <div className="flex items-center gap-2">
                <button
                  disabled={lightboxIndex === 0}
                  onClick={() => setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : prev))}
                  className="px-3 py-1 bg-white border border-border rounded disabled:opacity-40"
                >
                  Prev
                </button>
                <button
                  disabled={lightboxIndex === filteredPhotos.length - 1}
                  onClick={() => setLightboxIndex((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : prev))}
                  className="px-3 py-1 bg-white border border-border rounded disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
