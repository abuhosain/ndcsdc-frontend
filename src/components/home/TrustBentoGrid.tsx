import { Link } from "@/i18n/navigation";

export default function TrustBentoGrid() {
  return (
    <section className="section-padding bg-canvas">
      <div className="container-custom">
        
        {/* Stat Row (05_DESIGN.md §3.3 & 06_UIUX_SPEC.md §3.2 Section 3) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          <div className="p-6 sm:p-8 bg-surface-1 border border-border rounded-card text-center sm:text-left">
            <div className="font-display font-extrabold text-4xl sm:text-5xl text-brand mb-1">
              1,800+
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted">
              Expected Students
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-surface-1 border border-border rounded-card text-center sm:text-left">
            <div className="font-display font-extrabold text-4xl sm:text-5xl text-brand mb-1">
              4
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted">
              Dedicated Pathways
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-surface-1 border border-border rounded-card text-center sm:text-left">
            <div className="font-display font-extrabold text-4xl sm:text-5xl text-brand mb-1">
              2026
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted">
              HSC Batches 2026–2028
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-surface-1 border border-border rounded-card text-center sm:text-left">
            <div className="font-display font-extrabold text-4xl sm:text-5xl text-brand mb-1">
              2025
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted">
              Club Founded at NDC
            </div>
          </div>
        </div>

        {/* 2-Column Editorial: Story + 3 Focus Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: About Club Story (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="section-eyebrow">
              About NDCSDC
            </span>
            <h2 className="section-title">
              Built on Trust. <br />
              Driven by Student Success.
            </h2>
            <p className="section-desc">
              Notre Dame Career & Skill Development Club was founded in 2025 at Notre Dame College, Dhaka to guide students through the critical transition from higher secondary education to university entrance exams and career planning.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="text-sm font-bold text-brand hover:underline inline-block"
              >
                Read our full story and mission &rarr;
              </Link>
            </div>
          </div>

          {/* Right: 3 Core Focus Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 sm:p-7 bg-surface-1 border border-border rounded-card hover:border-ink transition-colors">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Pillar 01
              </span>
              <h3 className="font-display font-bold text-lg text-ink uppercase mt-1 mb-2">
                Career Guidance
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Clear, unfiltered admission roadmaps for BUET, DU IBA, Government Medical Colleges, and overseas universities, mentored directly by successful Notre Dame alumni.
              </p>
            </div>

            <div className="p-6 sm:p-7 bg-surface-1 border border-border rounded-card hover:border-ink transition-colors">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Pillar 02
              </span>
              <h3 className="font-display font-bold text-lg text-ink uppercase mt-1 mb-2">
                Skill Development
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Practical workshops covering analytical problem solving, quantitative agility, communication, statement of purpose (SOP) writing, and scholarship applications.
              </p>
            </div>

            <div className="p-6 sm:p-7 bg-surface-1 border border-border rounded-card hover:border-ink transition-colors">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Pillar 03
              </span>
              <h3 className="font-display font-bold text-lg text-ink uppercase mt-1 mb-2">
                Community Building
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                A collaborative network connecting students, alumni mentors, faculty advisors, and industry partners to ensure no student prepares in isolation.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
