import { Link } from "@/i18n/navigation";
import PageHeader from "@/components/common/PageHeader";
import { getTeamMembers } from "@/services/common";
import { Facebook, Linkedin, Mail } from "lucide-react";

export default async function ExecutivePanelPage() {
  let members: any[] = [];

  try {
    const res = await getTeamMembers({ panelType: "EXECUTIVE" });
    if (res?.data) {
      members = res.data;
    }
  } catch {
    // Graceful fallback
  }

  // Filter moderator and executive committee
  const moderator = members.find((m) => m.isModerator);
  const executives = members.filter((m) => !m.isModerator);

  return (
    <div className="bg-canvas">
      
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="Leadership & Governance"
        title="Executive Panel"
        description="The governing committee responsible for NDCSDC strategic direction, administration, academic planning, and institutional partnerships."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Panels" },
          { label: "Executive Panel" },
        ]}
      />

      {/* 2. Panel Switcher Tabs */}
      <section className="bg-white border-b border-border py-4">
        <div className="container-custom flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Link
              href="/panel/executive"
              className="px-4 py-2 rounded-md bg-ink text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Executive Panel (2025–26)
            </Link>
            <Link
              href="/panel/sub-executive"
              className="px-4 py-2 rounded-md bg-surface-1 text-ink-secondary hover:text-ink text-xs font-bold uppercase tracking-wider transition-colors border border-border"
            >
              Sub-Executive Panel
            </Link>
          </div>

          <div className="text-xs text-ink-muted font-mono">
            Term: 2025–2026 Academic Session
          </div>
        </div>
      </section>

      {/* 3. Club Moderator Featured Card */}
      {moderator && (
        <section className="section-padding-sm container-custom pt-12">
          <div className="bg-surface-1 border-2 border-brand/50 rounded-lg p-8 max-w-3xl mx-auto shadow-xs">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              
              <div className="w-24 h-24 rounded-full bg-white border-2 border-brand flex items-center justify-center font-display font-extrabold text-2xl text-ink shrink-0 shadow-xs">
                {moderator.name.split(" ").slice(0, 2).map((n: string) => n[0]).join("")}
              </div>

              <div className="space-y-2 flex-1">
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-brand text-white">
                  Faculty Advisor & Moderator
                </span>
                <h2 className="font-display text-2xl font-extrabold text-ink">
                  {moderator.name}
                </h2>
                <p className="text-xs text-ink-secondary leading-relaxed">
                  {moderator.bio || "Guiding club governance, academic rigor, and institutional affiliation with Notre Dame College administration."}
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-ink-muted">
                  {moderator.email && (
                    <a href={`mailto:${moderator.email}`} className="hover:text-brand flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5" />
                      <span>{moderator.email}</span>
                    </a>
                  )}
                  {moderator.facebookUrl && (
                    <a href={moderator.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand flex items-center gap-1">
                      <Facebook className="w-3.5 h-3.5" />
                      <span>Profile</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 4. Executive Committee Grid */}
      <section className="section-padding container-custom pt-8">
        <div className="mb-10 text-center max-w-xl mx-auto">
          <span className="section-eyebrow">
            Student Leaders
          </span>
          <h2 className="section-title mb-2">
            Executive Committee 2025–26
          </h2>
          <p className="section-desc mx-auto text-xs sm:text-sm">
            Appointed officers directing day-to-day operations, finance, secretariat, and summit planning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {executives.map((member) => {
            const initials = member.name
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((n: string) => n[0])
              .join("");

            return (
              <div
                key={member.id}
                className="bg-white border border-border rounded-lg p-6 flex flex-col justify-between hover:border-brand/40 transition-colors shadow-2xs"
              >
                <div className="space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-surface-1 border border-border flex items-center justify-center font-display font-bold text-xl text-ink">
                    {initials}
                  </div>

                  <div className="text-center space-y-1">
                    <h3 className="font-display text-base font-bold text-ink">
                      {member.name}
                    </h3>
                    <div className="text-xs font-bold text-brand uppercase tracking-wider">
                      {member.designation}
                    </div>
                    <div className="text-[11px] text-ink-muted font-mono">
                      {member.batch ? `${member.batch} • ` : ""}{member.department || "Notre Dame College"}
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 mt-4 border-t border-border/50 flex items-center justify-center gap-3 text-ink-muted text-xs">
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="p-1.5 hover:text-brand" title="Email">
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                  {member.linkedinUrl && (
                    <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 hover:text-brand" title="LinkedIn">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.facebookUrl && (
                    <a href={member.facebookUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 hover:text-brand" title="Facebook">
                      <Facebook className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to Sub-Executive */}
        <div className="mt-16 bg-surface-1 border border-border rounded-lg p-6 text-center space-y-3 max-w-2xl mx-auto">
          <h4 className="font-display text-base font-bold text-ink uppercase">
            Sub-Executive Panel & Wing Coordinators
          </h4>
          <p className="text-xs text-ink-secondary">
            Meet the associates and coordinators leading Media & IT, Logistics, Public Relations, Publications, and Workshop Operations.
          </p>
          <div>
            <Link
              href="/panel/sub-executive"
              className="btn-secondary text-xs uppercase tracking-wider py-2 px-5 font-bold inline-block"
            >
              View Sub-Executive Panel →
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}
