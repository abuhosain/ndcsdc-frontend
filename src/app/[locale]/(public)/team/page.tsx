import { Link } from "@/i18n/navigation";

const MODERATOR = {
  name: "Md. Safiul Alam",
  designation: "Club Moderator",
  affiliation: "Senior Faculty, Notre Dame College, Dhaka",
  bio: "Guiding and mentoring NDCSDC since its founding, fostering academic discipline, career clarity, and student leadership across higher secondary education.",
};

const EXECUTIVE_PANEL = [
  {
    id: 1,
    name: "A. S. M. Farhan",
    designation: "President (Administration)",
    batch: "HSC '26",
    social: "https://facebook.com",
  },
  {
    id: 2,
    name: "Syed Tanvir Hasan",
    designation: "Vice President",
    batch: "HSC '26",
    social: "https://facebook.com",
  },
  {
    id: 3,
    name: "Mirza Rafid Ahmed",
    designation: "General Secretary",
    batch: "HSC '26",
    social: "https://facebook.com",
  },
  {
    id: 4,
    name: "Zubair Al Mahmud",
    designation: "Joint Secretary",
    batch: "HSC '26",
    social: "https://facebook.com",
  },
  {
    id: 5,
    name: "Shadman Sakib",
    designation: "Director of Public Relations",
    batch: "HSC '26",
    social: "https://facebook.com",
  },
  {
    id: 6,
    name: "Nabil Chowdhury",
    designation: "Director of Event Operations",
    batch: "HSC '26",
    social: "https://facebook.com",
  },
];

export default function TeamPage() {
  return (
    <div className="bg-canvas">
      
      {/* Header */}
      <section className="bg-ink text-ink-onDark red-bottom-bar py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-bright">
              Leadership
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl uppercase text-white tracking-tight">
              Our Team
            </h1>
            <p className="text-base text-neutral-300 leading-relaxed max-w-2xl">
              Faculty guidance and executive student committee of Notre Dame Career & Skill Development Club.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Moderator Card (05_DESIGN.md §3.9 & 06_UIUX_SPEC.md §3.7) */}
      <section className="section-padding container-custom">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="p-8 sm:p-10 bg-surface-1 border-2 border-border rounded-card space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand block">
              Faculty Moderator
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase text-ink">
              {MODERATOR.name}
            </h2>
            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted">
              {MODERATOR.designation} &bull; {MODERATOR.affiliation}
            </div>
            <p className="text-sm text-ink-secondary leading-relaxed pt-2 border-t border-border">
              {MODERATOR.bio}
            </p>
          </div>
        </div>

        {/* Panel Switcher & Executive Grid */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="section-eyebrow">Executive Panel</span>
          <h3 className="section-title">Committee 2025–2026</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXECUTIVE_PANEL.map((member) => (
            <div
              key={member.id}
              className="bg-surface-1 border border-border rounded-card p-6 flex flex-col justify-between hover:border-ink transition-colors"
            >
              <div>
                <div className="w-12 h-12 rounded bg-ink text-white font-display font-bold text-sm flex items-center justify-center mb-4">
                  {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>

                <div className="text-[10px] font-bold uppercase text-ink-muted mb-0.5">
                  {member.batch}
                </div>
                <h4 className="font-display font-bold text-base uppercase text-ink mb-1">
                  {member.name}
                </h4>
                <div className="text-xs font-semibold text-brand">
                  {member.designation}
                </div>
              </div>

              <div className="pt-4 border-t border-border mt-6">
                <a
                  href={member.social}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-ink-muted hover:text-brand"
                >
                  Contact Profile &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
