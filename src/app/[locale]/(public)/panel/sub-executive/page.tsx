import { Link } from "@/i18n/navigation";
import PageHeader from "@/components/common/PageHeader";
import { getTeamMembers } from "@/services/common";
import { Mail, Linkedin } from "lucide-react";

export default async function SubExecutivePanelPage() {
  let members: any[] = [];

  try {
    const res = await getTeamMembers({ panelType: "SUB_EXECUTIVE" });
    if (res?.data) {
      members = res.data;
    }
  } catch {
    // Fallback
  }

  // Group members by wing if available, or list
  const wings = Array.from(new Set(members.map((m) => m.wing || "General Administration")));

  return (
    <div className="bg-canvas">
      
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="Operational Wings"
        title="Sub-Executive Panel"
        description="The dedicated wing coordinators and associates driving logistics, media & IT, publications, public relations, and workshop management."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Panels" },
          { label: "Sub-Executive Panel" },
        ]}
      />

      {/* 2. Panel Switcher Tabs */}
      <section className="bg-white border-b border-border py-4">
        <div className="container-custom flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Link
              href="/panel/executive"
              className="px-4 py-2 rounded-md bg-surface-1 text-ink-secondary hover:text-ink text-xs font-bold uppercase tracking-wider transition-colors border border-border"
            >
              Executive Panel
            </Link>
            <Link
              href="/panel/sub-executive"
              className="px-4 py-2 rounded-md bg-ink text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Sub-Executive Panel (2025–26)
            </Link>
          </div>

          <div className="text-xs text-ink-muted font-mono">
            Term: 2025–2026 Academic Session
          </div>
        </div>
      </section>

      {/* 3. Sub-Executive Members Roster */}
      <section className="section-padding container-custom">
        {wings.map((wingName) => {
          const wingMembers = members.filter((m) => (m.wing || "General Administration") === wingName);
          if (wingMembers.length === 0) return null;

          return (
            <div key={wingName} className="mb-14 last:mb-0">
              <div className="border-b-2 border-brand pb-3 mb-8 flex items-baseline justify-between">
                <h2 className="font-display text-lg sm:text-xl font-bold uppercase text-ink">
                  {wingName} Wing
                </h2>
                <span className="text-xs font-mono text-ink-muted">
                  {wingMembers.length} {wingMembers.length === 1 ? "Member" : "Members"}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {wingMembers.map((member) => {
                  const initials = member.name
                    .split(" ")
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((n: string) => n[0])
                    .join("");

                  return (
                    <div
                      key={member.id}
                      className="bg-white border border-border rounded-lg p-5 flex items-start gap-4 hover:border-brand/40 transition-colors shadow-2xs"
                    >
                      <div className="w-14 h-14 rounded-full bg-surface-1 border border-border flex items-center justify-center font-display font-bold text-sm text-ink shrink-0">
                        {initials}
                      </div>

                      <div className="space-y-1 flex-1 min-w-0">
                        <h3 className="font-display text-sm font-bold text-ink truncate">
                          {member.name}
                        </h3>
                        <div className="text-xs font-semibold text-brand truncate">
                          {member.designation}
                        </div>
                        <div className="text-[11px] text-ink-muted font-mono">
                          {member.batch ? `${member.batch} • ` : ""}{member.department || "NDC"}
                        </div>

                        {member.email && (
                          <div className="pt-2 text-[11px] text-ink-muted truncate">
                            <a href={`mailto:${member.email}`} className="hover:text-brand flex items-center gap-1">
                              <Mail className="w-3 h-3" />
                              <span className="truncate">{member.email}</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Fallback if no members returned */}
        {members.length === 0 && (
          <div className="bg-surface-1 border border-border rounded-lg p-12 text-center max-w-lg mx-auto space-y-3">
            <h3 className="font-display text-base font-bold uppercase text-ink">
              Sub-Executive Panel Being Updated
            </h3>
            <p className="text-xs text-ink-secondary">
              The wing coordinator appointments for the 2025-26 term are currently being synchronized.
            </p>
          </div>
        )}

      </section>

    </div>
  );
}
