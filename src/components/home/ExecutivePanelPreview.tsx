import { Link } from "@/i18n/navigation";
import { getTeamMembers } from "@/services/common";

const DEFAULT_MEMBERS = [
  {
    name: "Md. Safiul Alam",
    designation: "Club Moderator",
    batch: "Faculty Advisor",
    isModerator: true,
  },
  {
    name: "Mirza Rafid Ahmed",
    designation: "General Secretary",
    batch: "HSC '25",
    isModerator: false,
  },
  {
    name: "Zubair Al Mahmud",
    designation: "Joint Secretary",
    batch: "HSC '25",
    isModerator: false,
  },
  {
    name: "A. S. M. Farhan",
    designation: "President (Administration)",
    batch: "HSC '25",
    isModerator: false,
  },
];

export default async function ExecutivePanelPreview() {
  let members = DEFAULT_MEMBERS;

  try {
    const res = await getTeamMembers({ panelType: "EXECUTIVE" });
    if (res?.data && res.data.length > 0) {
      members = res.data.slice(0, 4).map((m) => ({
        name: m.name,
        designation: m.designation,
        batch: m.batch || (m.isModerator ? "Faculty" : "HSC '25"),
        isModerator: !!m.isModerator,
      }));
    }
  } catch {
    // Fallback
  }

  return (
    <section className="section-padding bg-surface-1 border-b border-border">
      <div className="container-custom">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-2">
          <div>
            <span className="section-eyebrow">
              Leadership & Governance
            </span>
            <h2 className="section-title mb-0">
              Executive Committee 2025–26
            </h2>
          </div>
          <Link
            href="/panel/executive"
            className="text-xs font-bold uppercase tracking-wider text-brand hover:underline"
          >
            Full Executive Panel →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {members.map((m, idx) => {
            const initials = m.name
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((n) => n[0])
              .join("");

            return (
              <div
                key={idx}
                className="bg-white border border-border rounded-lg p-4 text-center space-y-2 hover:border-brand/40 transition-colors shadow-2xs"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-surface-1 border border-border flex items-center justify-center font-display font-bold text-base text-ink">
                  {initials}
                </div>

                <div>
                  <h3 className="font-display text-xs sm:text-sm font-bold text-ink leading-tight truncate">
                    {m.name}
                  </h3>
                  <div className="text-[11px] text-brand font-semibold mt-0.5 truncate">
                    {m.designation}
                  </div>
                  <div className="text-[10px] text-ink-muted mt-0.5 font-mono">
                    {m.batch}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/panel/sub-executive"
            className="text-[11px] font-bold text-ink-secondary hover:text-ink transition-colors uppercase tracking-wider"
          >
            Looking for Sub-Executive Panel & Wing Coordinators? View Sub-Executive Panel →
          </Link>
        </div>

      </div>
    </section>
  );
}
