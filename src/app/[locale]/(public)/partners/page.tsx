import { Link } from "@/i18n/navigation";
import PageHeader from "@/components/common/PageHeader";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { getPartners } from "@/services/common";

export default async function PartnersPage() {
  let partnersList: any[] = [];

  try {
    const res = await getPartners();
    if (res?.data) {
      partnersList = res.data;
    }
  } catch {
    // Fallback
  }

  const websitePartner = partnersList.find((p) => p.tier === "WEBSITE" || p.name === "NeexG") || {
    name: "NeexG",
    tier: "WEBSITE",
    logoUrl: "/logos/NEEXG PP5.jpg",
    websiteUrl: "https://neexg.com",
    isProtected: true,
  };

  const titlePartners = partnersList.filter((p) => p.tier === "TITLE" || p.name === "Notre Dame College");
  const goldPartners = partnersList.filter((p) => p.tier === "GOLD");
  const silverPartners = partnersList.filter((p) => p.tier === "SILVER" || p.tier === "SUPPORT");

  return (
    <div className="bg-canvas">
      
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="Alliances & Collaborations"
        title="Partners & Sponsors"
        description="Collaborating with visionary institutions and technical partners to empower thousands of students across Bangladesh."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Partners & Sponsors" },
        ]}
      />

      {/* 2. Official Website Partner Featured Tier */}
      <section className="section-padding bg-surface-1 border-b border-border">
        <div className="container-custom">
          
          <div className="max-w-2xl mb-10">
            <span className="section-eyebrow">
              Official Website Partner
            </span>
            <h2 className="section-title mb-2">
              Digital Infrastructure & Engineering Partner
            </h2>
            <p className="section-desc text-xs sm:text-sm">
              Dedicated technology partner powering NDCSDC portal architecture, user security, and summit registration systems.
            </p>
          </div>

          <div className="bg-white border-2 border-brand/50 rounded-lg p-8 sm:p-10 shadow-xs max-w-4xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              
              <div className="flex items-start sm:items-center gap-6">
                <div className="relative w-20 h-20 rounded-lg bg-ink p-1 border border-neutral-700 flex items-center justify-center shrink-0 overflow-hidden shadow-xs">
                  <Image
                    src="/logos/NEEXG PP5.jpg"
                    alt="NeexG Logo"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-brand text-white">
                    Official Website Partner
                  </span>
                  <h3 className="font-display text-2xl font-extrabold text-ink">
                    {websitePartner.name}
                  </h3>
                  <p className="text-xs text-ink-secondary max-w-md leading-relaxed">
                    NeexG engineers modern digital experiences, scalable enterprise software, and mission-critical web platforms for visionary organizations.
                  </p>
                </div>
              </div>

              <div className="shrink-0">
                <a
                  href={websitePartner.websiteUrl || "https://neexg.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs uppercase tracking-wider py-3 px-6 font-bold inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Visit neexg.com</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-border/60 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-ink-secondary">
              <div className="flex items-center gap-2">
                <span className="text-brand font-bold">&bull;</span>
                <span>Permanent institutional portal design & development</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand font-bold">&bull;</span>
                <span>Real-time delegate registration & barcode verification</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Tiered Partners Wall */}
      <section className="section-padding container-custom">
        
        {/* Title Partner: Notre Dame College */}
        <div className="mb-14 max-w-4xl">
          <div className="border-b-2 border-brand pb-3 mb-6 flex items-baseline justify-between">
            <h3 className="font-display text-lg font-bold uppercase text-ink">
              Host & Parental Institution
            </h3>
            <span className="text-xs font-mono text-ink-muted">Title Tier</span>
          </div>

          <div className="bg-surface-1 border border-border rounded-lg p-6 flex items-center gap-5">
            <div className="w-14 h-14 rounded-lg bg-white p-1 flex items-center justify-center border border-border shrink-0">
              <Image
                src="/logos/ndc-college-logo.jpeg"
                alt="Notre Dame College"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-ink">
                Notre Dame College, Dhaka
              </h4>
              <p className="text-xs text-ink-secondary">
                Historic campus host, administrative patron, and spiritual home of NDCSDC.
              </p>
            </div>
          </div>
        </div>

        {/* Gold & Advisory Partners */}
        <div className="mb-14 max-w-4xl">
          <div className="border-b border-border pb-3 mb-6 flex items-baseline justify-between">
            <h3 className="font-display text-base font-bold uppercase text-ink">
              Academic & Advisory Partners
            </h3>
            <span className="text-xs font-mono text-ink-muted">Gold / Collaborative Tier</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-border rounded-lg p-5 space-y-1 shadow-2xs">
              <span className="text-[10px] font-mono uppercase text-brand font-bold">Academic Guild</span>
              <h4 className="font-display text-base font-bold text-ink">BUET Mentors Circle</h4>
              <p className="text-xs text-ink-secondary">
                Curating problem-solving heuristics, speed tactics, and simulated engineering mock exams.
              </p>
            </div>

            <div className="bg-white border border-border rounded-lg p-5 space-y-1 shadow-2xs">
              <span className="text-[10px] font-mono uppercase text-brand font-bold">Business Faculty</span>
              <h4 className="font-display text-base font-bold text-ink">IBA DU Alumni Guild</h4>
              <p className="text-xs text-ink-secondary">
                Analytical writing frameworks, verbal reasoning mastery, and mock interview coaching.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Become a Partner / Sponsor Section */}
        <div className="max-w-4xl bg-ink text-ink-onDark rounded-lg p-8 sm:p-12 space-y-6 border border-neutral-800 shadow-sm">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-bright">
              Partnership Opportunity
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
              Partner with NDCSDC for NACS 2026
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
              Connect your brand, academic organization, or university with 1,800+ driven higher secondary students and an influential Notre Dame alumni network.
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-xs uppercase tracking-wider py-3 px-6 font-bold"
            >
              Request Partnership Proposal
            </Link>
            <a
              href="mailto:ndcsdc.ndc@gmail.com"
              className="px-5 py-3 rounded-lg border border-neutral-700 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email Secretariat</span>
            </a>
          </div>
        </div>

      </section>

    </div>
  );
}
