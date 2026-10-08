import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function PartnersSection() {
  return (
    <section className="section-padding bg-canvas border-t border-border">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="section-eyebrow">
            Our Partners
          </span>
          <h2 className="section-title">
            Strategic Partners & Affiliation
          </h2>
        </div>

        {/* Website Partner Highlighted Block (Proposal Benefit #03) */}
        <div className="max-w-2xl mx-auto mb-10 p-6 sm:p-7 bg-surface-1 border-2 border-brand rounded-card flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-lg bg-white p-1 border border-border flex items-center justify-center shrink-0 overflow-hidden shadow-subtle">
              <Image
                src="/logos/NEEXG PP5.jpg"
                alt="NeexG"
                width={56}
                height={56}
                className="object-cover rounded-md"
              />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand block">
                Official Website Partner
              </span>
              <h3 className="font-display font-extrabold text-xl text-ink mt-0.5">
                NeexG
              </h3>
              <p className="text-xs text-ink-secondary mt-0.5 max-w-sm">
                Official technology partner designing and architecting the digital infrastructure for NDCSDC and NACS 2026.
              </p>
            </div>
          </div>

          <a
            href="https://neexg.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs uppercase tracking-wider py-2.5 px-5 font-bold shrink-0"
          >
            Visit Partner &rarr;
          </a>
        </div>

        {/* Partner Strip (Grayscale to legible hover, 05_DESIGN.md §3.10) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { name: "Notre Dame College", type: "Parent Institution" },
            { name: "BUET Engineering", type: "Engineering Mentors" },
            { name: "IBA DU Alumni", type: "Business Network" },
            { name: "Dhaka Medical College", type: "Clinical Society" },
            { name: "British Council", type: "IELTS & Global" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-surface-1 border border-border rounded-card text-center hover:border-ink transition-colors"
            >
              <div className="font-display font-bold text-xs uppercase text-ink">
                {item.name}
              </div>
              <div className="text-[10px] text-ink-muted mt-0.5">
                {item.type}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/partners"
            className="text-xs font-bold text-brand hover:underline"
          >
            View all partnership benefits and sponsorship tiers &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
