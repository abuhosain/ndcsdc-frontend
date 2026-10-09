"use client";

import { useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import Image from "next/image";
import { X } from "lucide-react";

interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  year: string;
  src: string;
  event: string;
}

const GALLERY_DATA: GalleryPhoto[] = [
  {
    id: "1",
    title: "Notre Dame College Historic Main Campus & Quad",
    category: "Campus",
    year: "2025",
    src: "/logos/ndc-college-logo.jpeg",
    event: "Campus Grounds",
  },
  {
    id: "2",
    title: "NDCSDC Executive Panel Inaugural Meet",
    category: "Leadership",
    year: "2025",
    src: "/logos/ndcsdc-logo.jpeg",
    event: "Executive Assembly",
  },
  {
    id: "3",
    title: "Higher Education Study Fair Exhibition Floor",
    category: "Study Fair",
    year: "2025",
    src: "/logos/ndc-college-logo.jpeg",
    event: "Study Fair 2025",
  },
  {
    id: "4",
    title: "Diagnostic Medical Assessment Clinic",
    category: "Workshop",
    year: "2025",
    src: "/logos/ndcsdc-logo.jpeg",
    event: "Medical Diagnostic Clinic",
  },
  {
    id: "5",
    title: "IBA DU Verbal Speed Strategy Drills",
    category: "Masterclass",
    year: "2026",
    src: "/logos/ndc-college-logo.jpeg",
    event: "IBA DU Masterclass",
  },
  {
    id: "6",
    title: "Delegates Assembly at Notre Dame College Auditorium",
    category: "Summit",
    year: "2026",
    src: "/logos/ndcsdc-logo.jpeg",
    event: "NACS 2026 Preparations",
  },
  {
    id: "7",
    title: "Weekly Problem Solving Math Circle",
    category: "Workshop",
    year: "2025",
    src: "/logos/ndc-college-logo.jpeg",
    event: "Weekly Skill Circle",
  },
  {
    id: "8",
    title: "Academic Resume Writing Lab",
    category: "Workshop",
    year: "2026",
    src: "/logos/ndcsdc-logo.jpeg",
    event: "Career Clinic",
  },
];

const CATEGORIES = ["ALL", "Campus", "Study Fair", "Workshop", "Masterclass", "Summit", "Leadership"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedImage, setSelectedImage] = useState<GalleryPhoto | null>(null);

  const filteredPhotos = GALLERY_DATA.filter(
    (photo) => activeCategory === "ALL" || photo.category === activeCategory
  );

  return (
    <div className="bg-canvas">
      
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="Visual Archive"
        title="Photo Gallery"
        description="Capturing key moments from weekly problem-solving circles, college study fairs, academic masterclasses, and executive assemblies."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Media" },
          { label: "Gallery" },
        ]}
      />

      {/* 2. Filter Bar */}
      <section className="bg-white border-b border-border py-2 sm:py-2.5">
        <div className="container-custom flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar whitespace-nowrap py-0.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded text-[11px] font-semibold uppercase tracking-wider transition-colors cursor-pointer shrink-0 ${
                  activeCategory === cat
                    ? "bg-ink text-white"
                    : "bg-surface-1 text-ink-secondary hover:text-ink border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-[11px] text-ink-muted font-mono shrink-0 hidden sm:block">
            {filteredPhotos.length} Photos
          </div>
        </div>
      </section>

      {/* 3. Photos Grid */}
      <section className="section-padding container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedImage(photo)}
              className="group bg-white border border-border rounded-lg overflow-hidden flex flex-col hover:border-brand/50 transition-colors shadow-2xs cursor-pointer"
            >
              <div className="relative aspect-4/3 w-full bg-surface-1 flex items-center justify-center p-6">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  width={120}
                  height={120}
                  className="object-contain opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200"
                />
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-ink text-white">
                  {photo.category}
                </span>
                <span className="absolute bottom-2.5 right-2.5 px-1.5 py-0.5 rounded text-[10px] font-mono text-ink-muted bg-white/90 border border-border">
                  {photo.year}
                </span>
              </div>

              <div className="p-4 border-t border-border/50 space-y-1">
                <h3 className="font-display text-xs font-bold text-ink line-clamp-2 leading-snug">
                  {photo.title}
                </h3>
                <div className="text-[10px] font-mono text-ink-muted truncate">
                  Event: {photo.event}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-surface-1 border border-neutral-700 rounded-lg max-w-2xl w-full p-6 relative space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-ink text-white hover:bg-brand transition-colors cursor-pointer"
              aria-label="Close photo lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-16/10 w-full bg-white rounded flex items-center justify-center p-8 border border-border">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                width={240}
                height={240}
                className="object-contain"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-brand font-bold uppercase">
                <span>{selectedImage.category}</span>
                <span>&bull;</span>
                <span>{selectedImage.year}</span>
              </div>
              <h3 className="font-display text-base font-bold text-ink">
                {selectedImage.title}
              </h3>
              <p className="text-xs text-ink-secondary">
                Official archive of Notre Dame Career & Skill Development Club (NDCSDC).
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
