"use client";

import { useState } from "react";
import { Link, useRouter } from "@/i18n/navigation";

export default function HeroSection() {
  const router = useRouter();
  const [selectedGroup, setSelectedGroup] = useState("SCIENCE");
  const [selectedBatch, setSelectedBatch] = useState("2026");
  const [selectedTrack, setSelectedTrack] = useState("BUET");

  const handleQuickMatch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/summit/register?group=${selectedGroup}&batch=${selectedBatch}&track=${selectedTrack}`
    );
  };

  return (
    <section className="relative bg-ink text-ink-onDark pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden">
      {/* Subtle Black + Red Angular Triangle Motif (Proposal Cover Motif) */}
      <div className="absolute inset-0 motif-triangles-dark opacity-30 pointer-events-none"></div>
      <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-brand/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left: Confident Editorial Title & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-block">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-bright bg-white/5 border border-white/10 px-3 py-1.5 rounded">
                NDCSDC PRESENTS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] tracking-tight uppercase text-white">
              1st National Academic <br />
              <span className="text-brand-bright">Career Summit</span> 2026
            </h1>

            {/* Tagline from Requirements */}
            <p className="text-lg sm:text-xl text-neutral-300 font-medium italic">
              &ldquo;A day dedicated to guiding every aspirant toward the right path.&rdquo;
            </p>

            {/* Event Meta Line */}
            <p className="text-sm text-neutral-300 max-w-xl leading-relaxed">
              Saturday, 14 November 2026 &bull; Notre Dame College Campus, Motijheel, Dhaka. Dedicated admission roadmaps and simulated mock tests for <strong>IBA, BUET, Medical & Abroad</strong> aspirants.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/summit/register"
                className="btn-primary text-sm uppercase tracking-wider py-3.5 px-8 font-bold text-center"
              >
                Register Now
              </Link>
              <Link
                href="/summit"
                className="btn-on-dark text-sm uppercase tracking-wider py-3.5 px-8 font-bold text-center"
              >
                Explore Summit
              </Link>
            </div>

            {/* Trust Indicator Note */}
            <div className="pt-4 border-t border-neutral-800 text-xs text-neutral-400">
              Free registration &bull; 1,800+ Expected Students &bull; Official NDCSDC Participation Certificate
            </div>
          </div>

          {/* Right: Clean Quick Pathway Selector (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-surface-1 text-ink p-7 sm:p-8 rounded-card border border-border shadow-card">
              
              <div className="mb-6 pb-4 border-b border-border">
                <span className="text-xs font-bold uppercase tracking-wider text-brand">
                  Pathway Matcher
                </span>
                <h3 className="font-display font-bold text-xl uppercase text-ink mt-0.5">
                  Select Your Stream
                </h3>
              </div>

              <form onSubmit={handleQuickMatch} className="space-y-4">
                {/* Academic Background */}
                <div>
                  <label className="label-clean">
                    Academic Background
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "SCIENCE", label: "Science" },
                      { id: "COMMERCE", label: "Commerce" },
                      { id: "ARTS", label: "Arts" },
                    ].map((grp) => (
                      <button
                        type="button"
                        key={grp.id}
                        onClick={() => setSelectedGroup(grp.id)}
                        className={`py-2 text-xs font-bold uppercase rounded border transition-colors ${
                          selectedGroup === grp.id
                            ? "bg-ink text-white border-ink"
                            : "bg-white text-ink-secondary border-border hover:border-ink"
                        }`}
                      >
                        {grp.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* HSC Batch */}
                <div>
                  <label className="label-clean">
                    HSC Batch
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["2026", "2027", "2028"].map((batch) => (
                      <button
                        type="button"
                        key={batch}
                        onClick={() => setSelectedBatch(batch)}
                        className={`py-2 text-xs font-bold rounded border transition-colors ${
                          selectedBatch === batch
                            ? "bg-brand text-white border-brand"
                            : "bg-white text-ink-secondary border-border hover:border-ink"
                        }`}
                      >
                        Batch {batch}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Target Track */}
                <div>
                  <label className="label-clean">
                    Target Track
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "IBA", label: "IBA Track" },
                      { id: "BUET", label: "BUET Track" },
                      { id: "MEDICAL", label: "Medical Track" },
                      { id: "ABROAD", label: "Abroad & IELTS" },
                    ].map((trk) => (
                      <button
                        type="button"
                        key={trk.id}
                        onClick={() => setSelectedTrack(trk.id)}
                        className={`py-2.5 px-3 text-xs font-bold text-left rounded border transition-colors ${
                          selectedTrack === trk.id
                            ? "bg-ink text-white border-ink"
                            : "bg-white text-ink-secondary border-border hover:border-ink"
                        }`}
                      >
                        {trk.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-xs uppercase tracking-wider py-3.5 font-bold mt-2"
                >
                  Continue to Registration &rarr;
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
