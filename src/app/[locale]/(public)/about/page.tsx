import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-canvas">
      
      {/* 1. Page Header (05_DESIGN.md §3.4) */}
      <section className="bg-ink text-ink-onDark red-bottom-bar py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-bright">
              Notre Dame College, Dhaka
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl uppercase text-white tracking-tight">
              About NDCSDC
            </h1>
            <p className="text-base text-neutral-300 leading-relaxed max-w-2xl">
              Notre Dame Career & Skill Development Club (founded 2025) prepares higher secondary students to bridge classroom learning with competitive higher education entrance exams.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Story & College Affiliation Split */}
      <section className="section-padding container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="section-eyebrow">
              Genesis & Mission
            </span>
            <h2 className="section-title">
              Guiding Aspirants Toward the Right Path
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-ink-secondary leading-relaxed">
              <p>
                Every year, thousands of capable students from Notre Dame College and colleges across Bangladesh face intense competition during university entrance examinations. Without clear strategy and senior mentorship, many students struggle with time management and preparation focus.
              </p>
              <p>
                NDCSDC was established under the guidance of club moderator <strong>Md. Safiul Alam</strong> and student leadership to provide a structured platform for peer problem solving, admission seminars, and career development.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-border">
              <div className="p-4 bg-surface-1 rounded border border-border">
                <span className="font-display font-black text-2xl text-brand block">2025</span>
                <span className="text-xs font-bold uppercase text-ink-muted">Founding Year</span>
              </div>
              <div className="p-4 bg-surface-1 rounded border border-border">
                <span className="font-display font-black text-2xl text-brand block">1,800+</span>
                <span className="text-xs font-bold uppercase text-ink-muted">Aspirants Reached</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-surface-1 border border-border rounded-card p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
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
                  <h4 className="font-display font-bold text-sm uppercase text-ink">
                    Notre Dame College
                  </h4>
                  <span className="text-xs text-ink-muted">Motijheel, Dhaka</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                NDCSDC operates under the direct guidance and moral heritage of Notre Dame College, Dhaka, instilling discipline, ethical leadership, and academic excellence in every initiative.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Three Core Focus Pillars */}
      <section className="section-padding bg-surface-1 border-y border-border">
        <div className="container-custom">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="section-eyebrow">
              Core Focus
            </span>
            <h2 className="section-title">
              Three Focus Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-border rounded-card p-6 sm:p-7">
              <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-1">
                Pillar 01
              </span>
              <h3 className="font-display font-bold text-lg uppercase text-ink mb-2">
                Career Guidance
              </h3>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                Direct guidance for BUET, DU IBA, Government Medical Colleges, and overseas universities with experienced Notre Dame alumni mentors.
              </p>
            </div>

            <div className="bg-white border border-border rounded-card p-6 sm:p-7">
              <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-1">
                Pillar 02
              </span>
              <h3 className="font-display font-bold text-lg uppercase text-ink mb-2">
                Skill Development
              </h3>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                Workshops on analytical writing, quantitative speed drills, verbal communication, and scholarship application development.
              </p>
            </div>

            <div className="bg-white border border-border rounded-card p-6 sm:p-7">
              <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-1">
                Pillar 03
              </span>
              <h3 className="font-display font-bold text-lg uppercase text-ink mb-2">
                Community Building
              </h3>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                Connecting students, alumni, faculty, and industry partners to ensure supportive peer learning across Bangladesh.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Journey Timeline */}
      <section className="section-padding container-custom">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="section-eyebrow">
            Milestones
          </span>
          <h2 className="section-title">
            Our Journey
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { period: "Early 2025", title: "Club Founding & Panel Formation", desc: "Established at Notre Dame College under moderator Md. Safiul Alam." },
            { period: "Mid 2025", title: "Weekly Problem Solving Drills", desc: "Launched campus sessions for admission mathematics and verbal agility." },
            { period: "Late 2025", title: "On-Campus Study Fairs", desc: "Multi-track fairs connecting students with alumni and university mentors." },
            { period: "14 Nov 2026", title: "1st National Academic Career Summit", desc: "Flagship summit hosting 1,800+ students, 4 mock exam tracks, and awards.", isEvent: true },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-card border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                item.isEvent
                  ? "bg-ink text-white border-ink"
                  : "bg-surface-1 text-ink border-border"
              }`}
            >
              <div>
                <span className={`text-xs font-bold uppercase tracking-wider ${item.isEvent ? "text-brand-bright" : "text-brand"}`}>
                  {item.period}
                </span>
                <h4 className="font-display font-bold text-base uppercase mt-0.5">
                  {item.title}
                </h4>
                <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${item.isEvent ? "text-neutral-300" : "text-ink-secondary"}`}>
                  {item.desc}
                </p>
              </div>

              {item.isEvent && (
                <Link
                  href="/summit/register"
                  className="btn-primary text-xs uppercase tracking-wider py-2.5 px-5 font-bold shrink-0"
                >
                  Join NACS 2026
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
