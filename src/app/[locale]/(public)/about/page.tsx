import { Link } from "@/i18n/navigation";
import Image from "next/image";
import PageHeader from "@/components/common/PageHeader";

export default function AboutPage() {
  return (
    <div className="bg-canvas">
      
      {/* 1. Shared Page Header */}
      <PageHeader
        eyebrow="Club Identity & Heritage"
        title="About NDCSDC"
        description="Notre Dame Career & Skill Development Club (NDCSDC), established in 2025 at Notre Dame College, Dhaka, is dedicated to guiding students toward higher education pathways and professional mastery."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* 2. Moderator's Official Message */}
      <section className="section-padding bg-surface-1 border-b border-border">
        <div className="container-custom">
          <div className="bg-white border border-border rounded-lg p-5 sm:p-7 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              <div className="lg:col-span-4 text-center lg:text-left space-y-2">
                <div className="w-18 h-18 mx-auto lg:mx-0 rounded-full bg-surface-1 border-2 border-brand flex items-center justify-center font-display font-black text-xl text-ink">
                  SA
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-ink">
                    Md. Safiul Alam
                  </h3>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-brand">
                    Club Moderator
                  </div>
                  <div className="text-[11px] text-ink-muted mt-0.5">
                    Notre Dame College, Dhaka
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-3 border-t lg:border-t-0 lg:border-l border-border pt-4 lg:pt-0 lg:pl-8">
                <span className="section-eyebrow">
                  Moderator&apos;s Message
                </span>
                <h2 className="font-display text-lg sm:text-xl font-bold text-ink uppercase">
                  Nurturing Character, Intellect, and Preparedness
                </h2>
                <div className="space-y-2 text-xs sm:text-[13px] text-ink-secondary leading-relaxed">
                  <p>
                    At Notre Dame College, education has always transcended textbook memorization. It is about character, intellectual curiosity, and disciplined perseverance. NDCSDC was created to channel this spirit into focused higher education preparation and modern vocational competency.
                  </p>
                  <p>
                    Whether an aspirant aims for engineering excellence at BUET, business strategy at IBA, healthcare service in medical colleges, or global scholarship pursuits abroad, our club ensures they never walk the path alone.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Story, Mission, Vision, and Values */}
      <section className="section-padding container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          <div className="lg:col-span-6 space-y-4">
            <div>
              <span className="section-eyebrow">
                Founding Story
              </span>
              <h2 className="section-title">
                Born From Student Need
              </h2>
            </div>
            <div className="space-y-3 text-xs sm:text-[13px] text-ink-secondary leading-relaxed">
              <p>
                Each year, tens of thousands of high school students face grueling entrance examinations with minimal structured guidance. In 2025, Notre Dame College educators and senior students united to build a premier institutional platform: the Notre Dame Career & Skill Development Club.
              </p>
              <p>
                NDCSDC organizes systematic problem-solving clinics, diagnostic tests, professional CV workshops, and the flagship National Academic & Career Summit (NACS), creating an unbroken continuum of peer support and alumni mentorship.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-surface-1 border border-border rounded-lg p-4 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand font-bold">01 / Mission</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Our Mission</h3>
              <p className="text-xs text-ink-secondary leading-relaxed">
                To equip students with analytical test heuristics, career clarity, and ethical leadership to excel in competitive admissions and future vocations.
              </p>
            </div>

            <div className="bg-surface-1 border border-border rounded-lg p-4 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand font-bold">02 / Vision</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Our Vision</h3>
              <p className="text-xs text-ink-secondary leading-relaxed">
                To be Bangladesh&apos;s leading college career incubator, inspiring thousands of young minds to reach premier national and global universities.
              </p>
            </div>

            <div className="bg-surface-1 border border-border rounded-lg p-4 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand font-bold">03 / Affiliation</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">NDC Heritage</h3>
              <p className="text-xs text-ink-secondary leading-relaxed">
                Rooted in the Holy Cross tradition of Notre Dame College, Dhaka, maintaining integrity, humility, and rigorous academic excellence.
              </p>
            </div>

            <div className="bg-surface-1 border border-border rounded-lg p-4 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand font-bold">04 / Values</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Core Values</h3>
              <p className="text-xs text-ink-secondary leading-relaxed">
                Intellectual discipline, merit-based transparency, inclusive peer mentorship, and dedication to national service.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Journey Timeline */}
      <section className="section-padding bg-surface-1 border-t border-border">
        <div className="container-custom">
          <div className="max-w-3xl mb-6 sm:mb-8">
            <span className="section-eyebrow">
              Milestone Timeline
            </span>
            <h2 className="section-title">
              Our Journey (2025–2026)
            </h2>
            <p className="section-desc">
              From our founding to nationwide masterclasses and the flagship National Academic & Career Summit.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl">
            {[
              {
                year: "Early 2025",
                title: "Club Founding & Moderator Appointment",
                desc: "Official charter under Notre Dame College administration with Md. Safiul Alam appointed as Moderator.",
              },
              {
                year: "Mid 2025",
                title: "Launch of Weekly Skill Circles",
                desc: "Hands-on campus sessions on mathematical shortcuts, verbal reasoning, and academic resume writing.",
              },
              {
                year: "Late 2025",
                title: "NDC Higher Education Study Fair",
                desc: "3,200+ students counselled across 35 university and scholarship stalls at the college gymnasium.",
              },
              {
                year: "14 Nov 2026",
                title: "1st National Academic & Career Summit (NACS 2026)",
                desc: "The flagship summit hosting 1,800 delegates across 4 specialized admission tracks (IBA, BUET, Medical, Abroad).",
                isHighlight: true,
              },
            ].map((milestone, idx) => (
              <div
                key={idx}
                className={`p-4 sm:p-5 rounded-lg border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  milestone.isHighlight
                    ? "bg-white border-brand shadow-xs"
                    : "bg-canvas border-border"
                }`}
              >
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand">
                    {milestone.year}
                  </span>
                  <h3 className="font-display text-sm sm:text-base font-bold uppercase text-ink mt-0.5">
                    {milestone.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-ink-secondary mt-0.5 leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>

                {milestone.isHighlight && (
                  <Link
                    href="/summit"
                    className="btn-primary text-xs uppercase tracking-wider py-1.5 px-3.5 font-bold shrink-0 self-start sm:self-center"
                  >
                    View Summit Details
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-border flex flex-wrap items-center gap-3">
            <Link
              href="/panel/executive"
              className="btn-secondary text-xs uppercase tracking-wider py-2 px-4 font-bold"
            >
              Meet Executive Panel
            </Link>
            <Link
              href="/achievements"
              className="btn-ghost text-xs uppercase tracking-wider font-bold"
            >
              View Achievements & Impact &rarr;
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
