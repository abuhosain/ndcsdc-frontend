"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { ChevronDown, ArrowUpRight } from "lucide-react";

const TRACKS_DETAIL = [
  {
    id: "IBA",
    title: "IBA & Business Leadership Track",
    stream: "Science, Arts & Commerce",
    hall: "Main Auditorium Hall A",
    mockTime: "02:00 PM – 03:30 PM",
    overview:
      "Comprehensive admission strategies for DU IBA, BUP FBS, and leading business faculties. Focuses on analytical writing frameworks, quantitative agility, critical reading, and viva preparation.",
    syllabus: [
      "Mathematics & Quantitative Problem Solving",
      "Analytical Writing & Case Study Frameworks",
      "Verbal Ability & Reading Comprehension Mastery",
      "Mock Viva Voce & Personality Assessment",
    ],
  },
  {
    id: "BUET",
    title: "BUET & Engineering Drills Track",
    stream: "Science Stream Only",
    hall: "Science Building Hall 301–304",
    mockTime: "02:00 PM – 03:30 PM",
    overview:
      "Strategic preparation for BUET, CKREUT, and engineering faculties. Master physics numerical problem solving, calculus speed shortcuts, and physical chemistry reaction mechanisms.",
    syllabus: [
      "Advanced Mechanics & Electrodynamics Numericals",
      "Higher Mathematics Problem Speed Techniques",
      "Organic & Physical Chemistry Reaction Frameworks",
      "Speed Management for 60 Questions in 120 Minutes",
    ],
  },
  {
    id: "MEDICAL",
    title: "Medical & Healthcare Strategy Track",
    stream: "Science Stream Only",
    hall: "Main Auditorium Hall B",
    mockTime: "02:00 PM – 03:30 PM",
    overview:
      "Targeted blueprint for Government Medical Colleges (DMC, SSMC, SOMC) and Dental faculties. Focuses on high-yield biology recall and rapid-fire MCQ accuracy.",
    syllabus: [
      "High-Yield Botany & Zoology Recall Tactics",
      "Medical Negative Marking Avoidance Strategies",
      "General Knowledge & English Precision Drills",
      "Full 100-Mark Simulated Medical Mock Examination",
    ],
  },
  {
    id: "ABROAD",
    title: "Abroad Studies & Global IELTS Track",
    stream: "All Streams",
    hall: "Seminar Hall C",
    mockTime: "02:00 PM – 03:30 PM",
    overview:
      "Complete step-by-step roadmap for North American, European, and Asian university admissions. Guidance on scholarships, IELTS Band 7.5+ prep, and Statement of Purpose (SOP) writing.",
    syllabus: [
      "IELTS Band 7.5+ Strategy Drills (Listening, Reading, Writing, Speaking)",
      "Full-Tuition Scholarship & Financial Aid Identification",
      "Crafting High-Impact Statements of Purpose (SOP)",
      "Visa & Embassy Interview Preparation",
    ],
  },
];

const SCHEDULE = [
  { time: "08:30 – 09:30", title: "Participant Check-In & Welcome Kit Distribution", room: "College Gate & Registration Desk", type: "Check-In" },
  { time: "09:30 – 10:30", title: "Grand Inaugural Ceremony & Keynote Speeches", room: "Main Auditorium", type: "Ceremony" },
  { time: "10:45 – 12:45", title: "Track-Wise Masterclasses & Mentorship Sessions", room: "Designated Halls A, B, C & Science Building", type: "Masterclass" },
  { time: "12:45 – 01:45", title: "Lunch & Networking Prayer Break", room: "College Dining & Courtyard", type: "Break" },
  { time: "02:00 – 03:30", title: "Simulated National Mock Examination", room: "Designated Examination Halls", type: "Mock Test" },
  { time: "03:45 – 04:45", title: "Live Paper Solution & Career Guidance Panel", room: "Main Auditorium", type: "Panel" },
  { time: "05:00 – 06:00", title: "Closing Ceremony, Prize Giving & Certificate Distribution", room: "Main Auditorium", type: "Awards" },
];

const FAQS = [
  {
    q: "Who is eligible to participate in NACS 2026?",
    a: "HSC Batch 2026, 2027, and 2028 students from Science, Commerce, and Humanities backgrounds from all colleges across Bangladesh are eligible to attend.",
  },
  {
    q: "Is there any registration fee for the summit?",
    a: "No. Registration for the 1st National Academic Career Summit is 100% free for all registered student participants.",
  },
  {
    q: "Can I participate in more than one track?",
    a: "Because track seminars and simulated mock exams take place concurrently, students must choose one primary track (IBA, BUET, Medical, or Abroad). General ceremonies are open to all.",
  },
  {
    q: "Will participants receive an official certificate?",
    a: "Yes. All students who attend the full-day summit and participate in the mock exam will receive an official Certificate of Participation from Notre Dame Career & Skill Development Club.",
  },
  {
    q: "What should I bring on event day?",
    a: "Bring your digital registration code (on phone or printed voucher), valid college student ID card, and basic writing supplies (pens, pencils, non-programmable calculator if applicable).",
  },
];

export default function SummitPage() {
  const [activeTrackTab, setActiveTrackTab] = useState("IBA");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-canvas">
      
      {/* 1. Header Banner */}
      <section className="bg-ink text-ink-onDark red-bottom-bar py-16 sm:py-24">
        <div className="container-custom">
          <div className="max-w-3xl space-y-4">
            
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-bright bg-white/5 border border-white/10 px-3 py-1 rounded">
                Flagship Summit 2026
              </span>
              <span className="text-xs text-neutral-400 font-semibold">
                Registration Open
              </span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase text-white tracking-tight leading-tight">
              1st National Academic <br />
              <span className="text-brand-bright">Career Summit</span> 2026
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Saturday, 14 November 2026 &bull; Notre Dame College Campus, Motijheel, Dhaka. A full-day summit gathering 1,800+ students for admissions mentorship, expert masterclasses, and simulated mock exams.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/summit/register"
                className="btn-primary text-xs uppercase tracking-wider py-3.5 px-8 font-bold text-center"
              >
                Register for Free Pass
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Overview & Stat Boxes */}
      <section className="section-padding container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 sm:p-8 bg-surface-1 border border-border rounded-card">
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-brand mb-1">
              1,800+
            </div>
            <div className="font-bold text-sm text-ink uppercase mb-1">
              Expected Students
            </div>
            <p className="text-xs text-ink-secondary">
              Delegates from Notre Dame College and prominent institutions across Bangladesh.
            </p>
          </div>

          <div className="p-6 sm:p-8 bg-surface-1 border border-border rounded-card">
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-brand mb-1">
              1 Full Day
            </div>
            <div className="font-bold text-sm text-ink uppercase mb-1">
              Intensive Program
            </div>
            <p className="text-xs text-ink-secondary">
              From morning keynote to afternoon mock exams and evening awards ceremony.
            </p>
          </div>

          <div className="p-6 sm:p-8 bg-surface-1 border border-border rounded-card">
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-brand mb-1">
              4 Tracks
            </div>
            <div className="font-bold text-sm text-ink uppercase mb-1">
              Specialized Pathways
            </div>
            <p className="text-xs text-ink-secondary">
              Targeted preparation for IBA, BUET, Medical and Abroad higher studies.
            </p>
          </div>
        </div>

        {/* 3. Track Tabs & Syllabus Breakdown */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="section-eyebrow">
              Curriculum & Drills
            </span>
            <h2 className="section-title">
              Track Breakdown
            </h2>
          </div>

          {/* Track Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {TRACKS_DETAIL.map((trk) => (
              <button
                key={trk.id}
                onClick={() => setActiveTrackTab(trk.id)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded border transition-colors cursor-pointer ${
                  activeTrackTab === trk.id
                    ? "bg-ink text-white border-ink"
                    : "bg-surface-1 text-ink-secondary border-border hover:border-ink"
                }`}
              >
                {trk.id} Track
              </button>
            ))}
          </div>

          {/* Selected Track Detail Card */}
          {TRACKS_DETAIL.filter((t) => t.id === activeTrackTab).map((track) => (
            <div
              key={track.id}
              className="bg-surface-1 border border-border rounded-card p-6 sm:p-10 max-w-4xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-border">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand">
                    {track.stream} &bull; {track.hall}
                  </span>
                  <h3 className="font-display font-bold text-2xl uppercase text-ink mt-0.5">
                    {track.title}
                  </h3>
                </div>

                <Link
                  href={`/summit/register?track=${track.id}`}
                  className="btn-primary text-xs uppercase tracking-wider py-2.5 px-6 font-bold self-start sm:self-center shrink-0"
                >
                  Register This Track
                </Link>
              </div>

              <p className="text-sm text-ink-secondary leading-relaxed mb-8">
                {track.overview}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-border">
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-ink mb-3">
                    Masterclass Syllabus:
                  </h4>
                  <ul className="space-y-2">
                    {track.syllabus.map((item, idx) => (
                      <li key={idx} className="text-xs text-ink flex items-start gap-2">
                        <span className="text-brand font-bold">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-canvas p-5 rounded border border-border space-y-3 text-xs">
                  <div>
                    <span className="font-bold uppercase text-ink-muted text-[10px] block">
                      Mock Examination Window:
                    </span>
                    <span className="font-bold text-ink">{track.mockTime}</span>
                  </div>
                  <div>
                    <span className="font-bold uppercase text-ink-muted text-[10px] block">
                      Designated Hall:
                    </span>
                    <span className="font-bold text-ink">{track.hall}</span>
                  </div>
                  <p className="text-ink-secondary pt-2 border-t border-border text-[11px]">
                    Includes printed question paper, evaluation, and national rank list feedback.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Program Schedule Timeline */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="section-eyebrow">
              Schedule Timeline
            </span>
            <h2 className="section-title">
              Program Schedule &bull; 14 Nov 2026
            </h2>
          </div>

          <div className="max-w-3xl mx-auto border border-border rounded-card bg-surface-1 overflow-hidden divide-y divide-border">
            {SCHEDULE.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-white transition-colors"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-10 h-10 rounded bg-canvas border border-border flex items-center justify-center text-xs font-mono font-bold text-ink shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="text-xs font-bold font-mono text-brand mb-0.5">
                      {item.time} &bull; <span className="uppercase text-ink-muted">{item.type}</span>
                    </div>
                    <div className="font-display font-bold text-sm sm:text-base uppercase text-ink">
                      {item.title}
                    </div>
                    <div className="text-xs text-ink-secondary mt-0.5">
                      {item.room}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. FAQ Accordion */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <span className="section-eyebrow">
              Help & Information
            </span>
            <h2 className="section-title">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-surface-1 border border-border rounded-card overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-display font-bold text-sm text-ink uppercase">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-ink shrink-0 transition-transform ${
                        isOpen ? "rotate-180 text-brand" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-ink-secondary leading-relaxed border-t border-border pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </section>
    </div>
  );
}
