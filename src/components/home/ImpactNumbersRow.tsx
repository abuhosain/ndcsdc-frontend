interface StatItem {
  numeral: string;
  label: string;
  subtext: string;
}

const STATS: StatItem[] = [
  {
    numeral: "5,200+",
    label: "Students Reached",
    subtext: "Across weekly clinics, diagnostic workshops & fair exhibitions",
  },
  {
    numeral: "24+",
    label: "Events & Sessions",
    subtext: "Masterclasses in engineering, business, medicine & IELTS",
  },
  {
    numeral: "35+",
    label: "Panel Members",
    subtext: "Dedicated student leaders across 5 specialized club wings",
  },
  {
    numeral: "2025",
    label: "Year Founded",
    subtext: "Established under the guidance of Notre Dame College Dhaka",
  },
];

export default function ImpactNumbersRow() {
  return (
    <section className="bg-surface-1 border-b border-border py-4 sm:py-6">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-ink tracking-tight">
                {stat.numeral}
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-ink">
                {stat.label}
              </div>
              <div className="text-[10px] text-ink-secondary leading-snug">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
