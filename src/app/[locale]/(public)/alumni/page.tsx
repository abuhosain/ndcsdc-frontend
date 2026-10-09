import { Link } from "@/i18n/navigation";
import PageHeader from "@/components/common/PageHeader";
import { getAlumni } from "@/services/common";
import AlumniJoinForm from "@/components/alumni/AlumniJoinForm";
import { Linkedin, Mail } from "lucide-react";

export default async function AlumniPage() {
  let alumniList: any[] = [];

  try {
    const res = await getAlumni();
    if (res?.data) {
      alumniList = res.data;
    }
  } catch {
    // Fallback
  }

  const featuredStories = alumniList.filter((a) => a.isFeatured || a.quote);
  const directory = alumniList;

  return (
    <div className="bg-canvas">
      
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="Notre Dame Continuum"
        title="Alumni Network"
        description="Connecting generations of Notre Dame College alumni across prestigious national and global universities to mentor current aspirants."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Alumni Network" },
        ]}
      />

      {/* 2. Featured Alumni Stories */}
      <section className="section-padding bg-surface-1 border-b border-border">
        <div className="container-custom">
          
          <div className="max-w-2xl mb-12">
            <span className="section-eyebrow">
              Alumni Voices & Pathways
            </span>
            <h2 className="section-title">
              Featured Alumni Stories
            </h2>
            <p className="section-desc">
              Advice and insights from Notre Dame graduates currently excelling at BUET, IBA DU, Dhaka Medical College, Cambridge, and Ivy League universities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {featuredStories.map((alumnus) => {
              const initials = alumnus.fullName
                .split(" ")
                .filter(Boolean)
                .slice(0, 2)
                .map((n: string) => n[0])
                .join("");

              return (
                <div
                  key={alumnus.id}
                  className="bg-white border border-border rounded-lg p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xs"
                >
                  <div className="space-y-4">
                    {/* Alumnus Header */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-surface-1 border-2 border-brand flex items-center justify-center font-display font-bold text-base text-ink shrink-0">
                        {initials}
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-ink">
                          {alumnus.fullName}
                        </h3>
                        <div className="text-xs font-semibold text-brand">
                          {alumnus.batch}
                        </div>
                        <div className="text-[11px] text-ink-muted">
                          {alumnus.currentInstitution}
                        </div>
                      </div>
                    </div>

                    {/* Role & Quote */}
                    {alumnus.currentRole && (
                      <div className="text-xs font-mono text-ink-secondary bg-surface-1 px-3 py-1 rounded border border-border/50">
                        {alumnus.currentRole}
                      </div>
                    )}

                    {alumnus.quote && (
                      <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed italic border-l-2 border-brand pl-3">
                        &ldquo;{alumnus.quote}&rdquo;
                      </p>
                    )}
                  </div>

                  {alumnus.linkedinUrl && (
                    <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs">
                      <a
                        href={alumnus.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand font-semibold hover:underline inline-flex items-center gap-1"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        <span>Connect on LinkedIn</span>
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Opt-in Alumni Directory */}
      <section className="section-padding container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Directory Table (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="section-eyebrow">
                Verified Roster
              </span>
              <h2 className="section-title mb-2">
                Alumni Directory
              </h2>
              <p className="section-desc text-xs sm:text-sm">
                Showing consented alumni profiles verified by the NDCSDC Secretariat.
              </p>
            </div>

            <div className="bg-white border border-border rounded-lg overflow-hidden shadow-2xs">
              <div className="divide-y divide-border">
                {directory.map((member) => (
                  <div key={member.id} className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-surface-1/50 transition-colors">
                    <div className="space-y-0.5 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-sm font-bold text-ink truncate">
                          {member.fullName}
                        </span>
                        <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-surface-1 font-bold text-brand border border-border">
                          {member.batch}
                        </span>
                      </div>
                      <div className="text-xs text-ink-secondary truncate">
                        {member.currentInstitution}
                      </div>
                      {member.currentRole && (
                        <div className="text-[11px] text-ink-muted truncate">
                          {member.currentRole}
                        </div>
                      )}
                    </div>

                    {member.linkedinUrl && (
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded hover:bg-surface-1 text-ink-muted hover:text-brand shrink-0"
                        title="LinkedIn Profile"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}

                {directory.length === 0 && (
                  <div className="p-8 text-center text-xs text-ink-muted">
                    No directory records published yet. Be the first to join below!
                  </div>
                )}
              </div>
            </div>

            {/* Mentorship Callout */}
            <div className="bg-surface-1 border border-border rounded-lg p-6 space-y-2">
              <h4 className="font-display text-sm font-bold uppercase text-ink">
                Volunteer as a Guest Speaker or Mentor
              </h4>
              <p className="text-xs text-ink-secondary leading-relaxed">
                Notre Dame alumni interested in conducting test clinics, reviewing academic resumes, or speaking at NACS 2026 are encouraged to contact our Academic Committee.
              </p>
            </div>
          </div>

          {/* Right: Join the Network Form (5 cols) */}
          <div className="lg:col-span-5">
            <AlumniJoinForm />
          </div>

        </div>
      </section>

    </div>
  );
}
