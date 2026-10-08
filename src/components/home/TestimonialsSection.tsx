"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  Star,
  Quote,
  Play,
  CheckCircle2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Tahmid Rahman",
    role: "BUET (CSE '25) • Ex-Notre Dame College",
    track: "BUET Track",
    rating: 5,
    quote:
      "NDCSDC's career workshops gave me clarity when I was completely overwhelmed by the transition from HSC to university entrance. The mock test timing strategies literally secured my top rank in BUET.",
    badge: "BUET Top 50 Ranker",
  },
  {
    id: 2,
    name: "Farhan Tanvir",
    role: "IBA, University of Dhaka (Batch 32)",
    track: "IBA Track",
    rating: 5,
    quote:
      "The analytical writing drills and mock viva panel were 1:1 identical to the actual DU IBA admission environment. The seniors gave actionable feedback that fixed my time management.",
    badge: "IBA DU Admitted",
  },
  {
    id: 3,
    name: "Samiha Anjum",
    role: "Dhaka Medical College (K-81)",
    track: "Medical Track",
    rating: 5,
    quote:
      "High-yield biology revision and memorization shortcuts from DMC alumni helped me master negative marking avoidance. An invaluable initiative by NDCSDC.",
    badge: "DMC Merit List",
  },
];

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="section-padding bg-canvas relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-brand">
                Student & Alumni Voices
              </span>
            </div>
            <h2 className="heading-section">
              Hear From Our Mentors <br /> And Successful Students
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
            </div>
            <span className="text-xs font-bold text-ink">
              4.9/5 Average Review Rating
            </span>
          </div>
        </div>

        {/* Testimonials & Video Mockup Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Testimonial Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {TESTIMONIALS.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveTestimonial(index)}
                className={`p-6 sm:p-7 rounded-2xl border transition-all cursor-pointer ${
                  activeTestimonial === index
                    ? "bg-white border-brand shadow-cardHover ring-1 ring-brand/20"
                    : "bg-surface-card/60 border-line hover:bg-white hover:border-line-border"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-ink text-white font-display font-bold flex items-center justify-center text-sm">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-ink">
                        {item.name}
                      </h4>
                      <p className="text-xs text-ink-muted">{item.role}</p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-brand-50 text-brand border border-brand-200">
                    {item.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed italic relative pl-4 border-l-2 border-brand">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="mt-4 flex items-center justify-between text-xs text-ink-muted">
                  <span className="font-medium text-ink">Track: {item.track}</span>
                  <div className="flex text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Featured Video Highlight Mockup (5 cols) (Inspired by Screenshot's Video Card) */}
          <div className="lg:col-span-5">
            <div className="bg-ink text-white p-6 sm:p-8 rounded-2xl border-2 border-ink-light relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand/20 rounded-full blur-2xl"></div>

              {/* Video Thumbnail Simulation */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-tr from-neutral-900 via-neutral-800 to-neutral-700 border border-white/10 mb-6 flex items-center justify-center group cursor-pointer shadow-inner">
                {/* Visual backdrop */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

                {/* Animated Play Button */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-brand text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-brand-bright transition-transform duration-300">
                  <Play className="w-7 h-7 fill-white translate-x-0.5" />
                </div>

                {/* Bottom Video Chip */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg">
                  <span className="font-medium">NACS Summit Trailer & Journey</span>
                  <span className="font-mono text-[11px] text-brand-gold">03:45</span>
                </div>
              </div>

              {/* Content underneath */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-brand-bright animate-ping"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                  Official Club Highlights
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Empowering Over 1,800 Aspirants
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                Watch how Notre Dame Career & Skill Development Club conducts on-campus study fairs, weekly problem-solving masterclasses, and executive mentorship sessions.
              </p>

              <Link
                href="/activities"
                className="w-full btn-brand-primary text-xs sm:text-sm font-bold justify-center"
              >
                Browse Full Activities & Gallery →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
