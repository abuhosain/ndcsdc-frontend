import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const PROPOSAL_BENEFITS = [
  "Official Website Partner recognition across all event communications",
  "Permanent credit 'Designed & Developed by NeexG' in footer & Partners page",
  "Homepage partner strip placement with direct backlink",
  "Opening & Closing ceremony stage recognition",
  "Logo placement on main backdrop, banners & promo materials",
  "Digital & social media promotion to 50,000+ student reach",
  "On-campus marketing opportunity to 1,800+ student delegates",
  "Placement in annual NDCSDC club magazine",
];

export default function PartnersPage() {
  return (
    <div className="bg-canvas">
      
      {/* Header */}
      <section className="bg-ink text-ink-onDark red-bottom-bar py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-bright">
              Sponsorship & Alliance
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl uppercase text-white tracking-tight">
              Our Partners
            </h1>
            <p className="text-base text-neutral-300 leading-relaxed max-w-2xl">
              Collaborating with industry pioneers and academic institutions to power the 1st National Academic Career Summit 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Official Website Partner Spotlight (Proposal Benefit #01, #02, #03) */}
      <section className="section-padding container-custom">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-surface-1 border-2 border-brand rounded-card p-8 sm:p-10 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-lg bg-white p-1 border border-border flex items-center justify-center shrink-0 overflow-hidden shadow-subtle">
                  <Image
                    src="/logos/NEEXG PP5.jpg"
                    alt="NeexG"
                    width={64}
                    height={64}
                    className="object-cover rounded-md"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand block">
                    Official Website Partner
                  </span>
                  <h2 className="font-display font-black text-2xl text-ink mt-0.5">
                    NeexG
                  </h2>
                  <p className="text-xs text-ink-secondary mt-0.5 max-w-sm">
                    Architecture, design, and development of NDCSDC digital infrastructure.
                  </p>
                </div>
              </div>

              <a
                href="https://neexg.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs uppercase tracking-wider py-2.5 px-5 font-bold self-start sm:self-center shrink-0 inline-flex items-center gap-1"
              >
                <span>Visit Partner</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Benefits List */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-3">
                Partnership Deliverables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink-secondary">
                {PROPOSAL_BENEFITS.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-brand font-bold">&bull;</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Tiered Partner Grid */}
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="p-6 bg-surface-1 border border-border rounded-card space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand block">
              Host & Parental Institution
            </span>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-white p-1 flex items-center justify-center border border-border shrink-0">
                <Image
                  src="/logos/ndc-college-logo.jpeg"
                  alt="NDC"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="font-display font-bold text-base uppercase text-ink">
                  Notre Dame College, Dhaka
                </h4>
                <p className="text-xs text-ink-muted">Official campus venue and institutional patron.</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-surface-1 border border-border rounded-card space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-ink-muted block">
              Academic Advisory Hubs
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold uppercase text-ink">
              <div className="p-3 bg-canvas rounded border border-border text-center">BUET Mentors</div>
              <div className="p-3 bg-canvas rounded border border-border text-center">IBA DU Guild</div>
              <div className="p-3 bg-canvas rounded border border-border text-center">DMC Clinical</div>
              <div className="p-3 bg-canvas rounded border border-border text-center">British Council</div>
            </div>
          </div>

          {/* Become a Partner CTA */}
          <div className="p-8 bg-ink text-white rounded-card border border-neutral-800 text-center space-y-4">
            <h3 className="font-display font-bold text-xl uppercase text-white">
              Become an Official Sponsor for NACS 2026
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              Connect your brand with 1,800+ ambitious college students and Notre Dame alumni.
            </p>
            <div>
              <Link
                href="/contact"
                className="btn-primary text-xs uppercase tracking-wider py-3 px-6 font-bold"
              >
                Contact Secretariat for Sponsorship
              </Link>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
