import { Link } from "@/i18n/navigation";
import { Briefcase, Cpu, Stethoscope, Globe } from "lucide-react";

const TRACKS = [
  {
    id: "iba",
    title: "IBA & Business Leadership",
    tag: "Science, Arts & Commerce",
    icon: Briefcase,
    description:
      "Admission strategies for DU IBA, BUP FBS, and premier business faculties. Focus on analytical writing, mathematics, verbal agility, and mock viva evaluations.",
    topics: [
      "Mathematics & Problem Solving",
      "Analytical Writing & Case Studies",
      "Verbal Ability & Comprehension",
      "Full Simulated Mock Test",
    ],
  },
  {
    id: "buet",
    title: "BUET & Engineering Drills",
    tag: "Science Stream",
    icon: Cpu,
    description:
      "Strategic preparation for BUET, CKREUT, and engineering faculties. Master physics numericals, calculus speed techniques, and chemistry reaction mechanisms.",
    topics: [
      "Physics Advanced Problem Drills",
      "Higher Mathematics Speed Shortcuts",
      "Chemistry Reaction Frameworks",
      "Timed Speed Optimization Exam",
    ],
  },
  {
    id: "medical",
    title: "Medical & Healthcare Strategy",
    tag: "Science Stream",
    icon: Stethoscope,
    description:
      "High-yield syllabus review for Government Medical Colleges (DMC, SSMC, SOMC) and Dental faculties with rapid-fire MCQ recall drills.",
    topics: [
      "Botany & Zoology High-Yield Recall",
      "Medical Negative Marking Avoidance",
      "General Knowledge & English Drills",
      "Full 100-Mark Simulated Mock Test",
    ],
  },
  {
    id: "abroad",
    title: "Abroad Studies & Global IELTS",
    tag: "All Streams",
    icon: Globe,
    description:
      "Complete admission and scholarship roadmap for North America, Europe, and Asia. Master IELTS Band 7.5+ strategies and SOP writing.",
    topics: [
      "IELTS Band 7.5+ Strategy Drills",
      "Full-Tuition Scholarship Roadmaps",
      "Statement of Purpose (SOP) Crafting",
      "Visa & Financial Documentation",
    ],
  },
];

export default function PathwaysSection() {
  return (
    <section className="section-padding bg-surface-1 border-y border-border">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-eyebrow">
            Academic Pathways
          </span>
          <h2 className="section-title">
            Choose Your Target Track
          </h2>
          <p className="section-desc mx-auto">
            Four specialized tracks curated by faculty advisors, Notre Dame alumni, and subject matter specialists.
          </p>
        </div>

        {/* 4 Track Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRACKS.map((track) => {
            const Icon = track.icon;
            return (
              <div
                key={track.id}
                className="bg-white border border-border rounded-card p-6 sm:p-7 flex flex-col justify-between hover:border-ink transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded bg-surface-1 border border-border flex items-center justify-center text-ink">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-surface-1 text-ink-secondary border border-border/60">
                      {track.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base uppercase text-ink mb-2">
                    {track.title}
                  </h3>
                  <p className="text-xs text-ink-secondary leading-relaxed mb-6">
                    {track.description}
                  </p>

                  <div className="space-y-1.5 pt-4 border-t border-border/60 mb-6">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-ink-muted mb-2">
                      Key Highlights:
                    </div>
                    {track.topics.map((topic, idx) => (
                      <div key={idx} className="text-xs text-ink flex items-start gap-2">
                        <span className="text-brand font-bold">&bull;</span>
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <Link
                    href={`/summit/register?track=${track.id.toUpperCase()}`}
                    className="block w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-ink bg-surface-1 hover:bg-ink hover:text-white border border-border rounded transition-colors"
                  >
                    Select Track &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
