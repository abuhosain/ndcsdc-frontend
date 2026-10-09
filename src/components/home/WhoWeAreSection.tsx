export default function WhoWeAreSection() {
  return (
    <section className="section-padding bg-canvas border-b border-border">
      <div className="container-custom">
        
        <div className="max-w-2xl mb-6 sm:mb-8">
          <span className="section-eyebrow">
            Who We Are
          </span>
          <h2 className="section-title">
            Purpose-Driven Academic Guidance
          </h2>
          <p className="section-desc">
            NDCSDC was founded at Notre Dame College to turn academic ambition into tangible readiness through disciplined test strategies, professional skill circles, and a lifelong alumni continuum.
          </p>
        </div>

        {/* 3 Focus Areas as pure editorial text columns (No icons) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Pillar 1 */}
          <div className="border-t-2 border-brand pt-4 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted">01 / Focus</span>
            <h3 className="font-display text-base font-bold text-ink uppercase">
              Career Guidance
            </h3>
            <p className="text-xs text-ink-secondary leading-relaxed">
              Demystifying higher education admissions in IBA, BUET, Medical colleges, and global universities through diagnostic assessments, past paper heuristics, and syllabus breakdowns.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="border-t-2 border-brand pt-4 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted">02 / Focus</span>
            <h3 className="font-display text-base font-bold text-ink uppercase">
              Skill Development
            </h3>
            <p className="text-xs text-ink-secondary leading-relaxed">
              Equipping college aspirants with communication poise, analytical writing, business case solving, ATS resume architecture, and digital fluency required in modern academia.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="border-t-2 border-brand pt-4 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted">03 / Focus</span>
            <h3 className="font-display text-base font-bold text-ink uppercase">
              Community Building
            </h3>
            <p className="text-xs text-ink-secondary leading-relaxed">
              Fostering a culture of peer-to-peer accountability, senior mentorship from Notre Dame alumni, and collaborative study groups that elevate the entire student body.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
