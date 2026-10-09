import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function PartnersStripSection() {
  return (
    <section className="section-padding bg-canvas border-b border-border">
      <div className="container-custom">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-2">
          <div>
            <span className="section-eyebrow">
              Institutional Affiliations
            </span>
            <h2 className="section-title mb-0">
              Partners & Sponsors
            </h2>
          </div>
          <Link
            href="/partners"
            className="text-xs font-bold uppercase tracking-wider text-brand hover:underline"
          >
            Partnership Roster →
          </Link>
        </div>

        {/* Highlighted Official Website Partner Card */}
        <div className="bg-white border-2 border-brand/40 rounded-lg p-5 sm:p-6 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-2xs">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-border shrink-0 flex items-center justify-center bg-ink">
              <Image
                src="/logos/NEEXG PP5.jpg"
                alt="NeexG"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.2 rounded text-[9px] font-mono font-bold uppercase bg-brand text-white mb-0.5">
                Official Website Partner
              </div>
              <h3 className="font-display text-base font-bold text-ink">
                NeexG
              </h3>
              <p className="text-xs text-ink-secondary">
                Technical infrastructure, web engineering & digital portal design partner for NDCSDC.
              </p>
            </div>
          </div>

          <a
            href="https://neexg.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary py-2 px-3.5 inline-flex items-center gap-1 shrink-0 self-start md:self-center"
          >
            <span>Visit neexg.com</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Title & Institutional Partners Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-surface-1 border border-border rounded-lg p-4 flex items-center gap-3">
            <div className="relative w-10 h-10 bg-white rounded p-1 border border-border shrink-0 flex items-center justify-center">
              <Image
                src="/logos/ndc-college-logo.jpeg"
                alt="Notre Dame College"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <div className="text-[9px] font-mono uppercase text-ink-muted">Host Institution</div>
              <div className="font-display text-xs sm:text-sm font-bold text-ink">Notre Dame College, Dhaka</div>
            </div>
          </div>

          <div className="bg-surface-1 border border-border rounded-lg p-4 flex items-center gap-3">
            <div className="relative w-10 h-10 bg-white rounded p-1 border border-border shrink-0 flex items-center justify-center">
              <Image
                src="/logos/ndcsdc-logo.jpeg"
                alt="NDCSDC Secretariat"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <div className="text-[9px] font-mono uppercase text-ink-muted">Academic Organizers</div>
              <div className="font-display text-xs sm:text-sm font-bold text-ink">NDCSDC Secretariat</div>
            </div>
          </div>

          <div className="bg-surface-1 border border-border rounded-lg p-4 flex flex-col justify-center">
            <div className="text-[9px] font-mono uppercase text-brand font-bold">Collaborative Network</div>
            <div className="font-display text-xs sm:text-sm font-bold text-ink">BUET & IBA Mentorship Circles</div>
            <div className="text-[10px] text-ink-secondary mt-0.5">Alumni guidance & admission drills</div>
          </div>
        </div>

      </div>
    </section>
  );
}
