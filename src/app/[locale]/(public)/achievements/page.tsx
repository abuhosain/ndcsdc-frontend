import { Link } from "@/i18n/navigation";
import PageHeader from "@/components/common/PageHeader";
import { getAchievements } from "@/services/common";

const DEFAULT_TESTIMONIALS = [
  {
    student: "Shahriar Hasan",
    batch: "HSC '25 (Science, NDC)",
    target: "BUET Engineering Aspirant",
    quote: "The physics speed drills and calculus problem heuristics conducted by NDCSDC transformed my approach to timed test solving. The peer accountability in weekly clinics is unmatched.",
  },
  {
    student: "Nafisa Tabassum",
    batch: "HSC '25 (Commerce, Holy Cross College)",
    target: "DU IBA Aspirant",
    quote: "NDCSDC's verbal analytical frameworks and past question breakdown gave me the exact mental model required for IBA examination. It is an indispensable community for any serious aspirant.",
  },
  {
    student: "Arafat Hossain",
    batch: "HSC '25 (Science, Dhaka College)",
    target: "Medical College Aspirant",
    quote: "The high-yield biology diagnostic recall sessions helped me eliminate negative marking errors. Learning directly from senior DMC doctors built real confidence.",
  },
];

export default async function AchievementsPage() {
  let achievements: any[] = [];

  try {
    const res = await getAchievements();
    if (res?.data) {
      achievements = res.data;
    }
  } catch {
    // Fallback
  }

  return (
    <div className="bg-canvas">
      
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="Milestones & Reach"
        title="Achievements & Impact"
        description="Quantified milestones, participation scale, and real student outcomes from NDCSDC career clinics and nationwide mentorship programs."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Achievements & Impact" },
        ]}
      />

      {/* 2. Key Impact Numerals */}
      <section className="section-padding bg-surface-1 border-b border-border">
        <div className="container-custom">
          
          <div className="max-w-xl mb-12">
            <span className="section-eyebrow">
              Quantified Metrics
            </span>
            <h2 className="section-title">
              Our Institutional Reach
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-border rounded-lg p-6 space-y-2 shadow-2xs"
              >
                <span className="text-xs font-mono uppercase text-brand font-bold">
                  {item.year} &bull; {item.category}
                </span>
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-ink tracking-tight">
                  {item.metric}
                </div>
                <h3 className="font-display text-base font-bold uppercase text-ink">
                  {item.title}
                </h3>
                <p className="text-xs text-ink-secondary leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Milestone Timeline */}
      <section className="section-padding container-custom">
        <div className="max-w-3xl mb-12">
          <span className="section-eyebrow">
            Club History
          </span>
          <h2 className="section-title">
            Key Institutional Milestones
          </h2>
          <p className="section-desc">
            The formative journey of Notre Dame Career & Skill Development Club from foundation to national scale.
          </p>
        </div>

        <div className="max-w-3xl space-y-6">
          {[
            {
              period: "January 2025",
              title: "Establishment of NDCSDC at Notre Dame College",
              body: "Official recognition by the Notre Dame College administration to address the growing need for structured higher secondary career guidance and university prep.",
            },
            {
              period: "May 2025",
              title: "Launch of Multi-Track Weekly Clinics",
              body: "Commencement of weekly student problem-solving circles across engineering physics, business case analytics, biology diagnostics, and IELTS practice.",
            },
            {
              period: "October 2025",
              title: "Inaugural Higher Education Study Fair",
              body: "Hosted 3,200+ students from 45 colleges in Dhaka with 35 university information stalls, scholarship counselors, and admission faculty panels.",
            },
            {
              period: "November 2026",
              title: "1st National Academic & Career Summit (NACS 2026)",
              body: "Flagship nationwide summit bringing together 1,800 delegates for 4 specialized masterclass tracks and simulated mock exams at Notre Dame College.",
            },
          ].map((milestone, idx) => (
            <div key={idx} className="bg-surface-1 border border-border rounded-lg p-6 space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-brand">
                {milestone.period}
              </span>
              <h3 className="font-display text-lg font-bold uppercase text-ink">
                {milestone.title}
              </h3>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                {milestone.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Student Testimonials (Editorial Text, No Icons) */}
      <section className="section-padding bg-surface-1 border-t border-border">
        <div className="container-custom">
          
          <div className="max-w-2xl mb-12">
            <span className="section-eyebrow">
              Student Voices
            </span>
            <h2 className="section-title">
              What Our Aspirants Say
            </h2>
            <p className="section-desc">
              Feedback from students participating in NDCSDC weekly clinics, diagnostic assessments, and seminars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEFAULT_TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-border rounded-lg p-6 flex flex-col justify-between space-y-4 shadow-2xs"
              >
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="pt-4 border-t border-border/60">
                  <div className="font-display text-sm font-bold text-ink">
                    {t.student}
                  </div>
                  <div className="text-[11px] text-brand font-semibold">
                    {t.target}
                  </div>
                  <div className="text-[10px] text-ink-muted font-mono">
                    {t.batch}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/summit"
              className="btn-primary text-xs uppercase tracking-wider py-3 px-6 font-bold"
            >
              Experience NACS 2026 Summit
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
