"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { ChevronDown } from "lucide-react";
import {
  getSummitTracks,
  getSummitSchedule,
  getSummitFaqs,
  type SummitTrack,
  type ScheduleItem,
  type FaqItem,
} from "@/services/summit";
import { getSiteSettings, getEvents, type SiteSettings, type EventItem } from "@/services/common";
import SummitCountdown from "@/components/summit/SummitCountdown";

const DEFAULT_TRACKS_DETAIL = [
  {
    id: "buet",
    slug: "buet",
    tabLabel: "BUET & Engineering",
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
    id: "iba",
    slug: "iba",
    tabLabel: "DU IBA & Business",
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
    id: "medical",
    slug: "medical",
    tabLabel: "Medical & Dental",
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
    id: "abroad",
    slug: "abroad-ielts",
    tabLabel: "Abroad & IELTS",
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

const DEFAULT_SCHEDULE = [
  { time: "08:30 – 09:30", title: "Participant Check-In & Welcome Kit Distribution", hall: "College Gate & Registration Desk", type: "Check-In" },
  { time: "09:30 – 10:30", title: "Grand Inaugural Ceremony & Keynote Speeches", hall: "Main Auditorium", type: "Ceremony" },
  { time: "10:45 – 12:45", title: "Track-Wise Masterclasses & Mentorship Sessions", hall: "Designated Halls A, B, C & Science Building", type: "Masterclass" },
  { time: "12:45 – 01:45", title: "Lunch & Networking Prayer Break", hall: "College Dining & Courtyard", type: "Break" },
  { time: "02:00 – 03:30", title: "Simulated National Mock Examination", hall: "Designated Examination Halls", type: "Mock Test" },
  { time: "03:45 – 04:45", title: "Live Paper Solution & Career Guidance Panel", hall: "Main Auditorium", type: "Panel" },
  { time: "05:00 – 06:00", title: "Closing Ceremony, Prize Giving & Certificate Distribution", hall: "Main Auditorium", type: "Awards" },
];

const DEFAULT_FAQS = [
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

function renderTwoToneTitle(rawTitle: string) {
  if (!rawTitle) {
    return (
      <>
        1st National Academic <br />
        <span className="text-brand-bright">Career Summit 2026</span>
      </>
    );
  }

  // Handle NACS summit
  if (rawTitle.toLowerCase().includes("career summit") || rawTitle.toLowerCase().includes("academic & career")) {
    return (
      <>
        1st National Academic <br />
        <span className="text-brand-bright">Career Summit 2026</span>
      </>
    );
  }

  // If title has a colon (e.g. "IBA DU Masterclass: Verbal & Analytical Speed Drills")
  if (rawTitle.includes(":")) {
    const [part1, ...rest] = rawTitle.split(":");
    return (
      <>
        {part1.trim()} <br />
        <span className="text-brand-bright">{rest.join(":").trim()}</span>
      </>
    );
  }

  // If title contains " & "
  if (rawTitle.includes(" & ")) {
    const [p1, ...p2] = rawTitle.split(" & ");
    return (
      <>
        {p1.trim()} &amp; <br />
        <span className="text-brand-bright">{p2.join(" & ").trim()}</span>
      </>
    );
  }

  // Split multiple words into 2 lines
  const words = rawTitle.split(" ");
  if (words.length > 3) {
    const half = Math.ceil(words.length / 2);
    return (
      <>
        {words.slice(0, half).join(" ")} <br />
        <span className="text-brand-bright">{words.slice(half).join(" ")}</span>
      </>
    );
  }

  return (
    <>
      {words[0]} <br />
      <span className="text-brand-bright">{words.slice(1).join(" ")}</span>
    </>
  );
}

export default function SummitPage() {
  const [tracksDetail, setTracksDetail] = useState(DEFAULT_TRACKS_DETAIL);
  const [schedule, setSchedule] = useState(DEFAULT_SCHEDULE);
  const [faqs, setFaqs] = useState(DEFAULT_FAQS);
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);
  const [featuredEvent, setFeaturedEvent] = useState<EventItem | null>(null);
  const [activeTrackTab, setActiveTrackTab] = useState("buet");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    let isMounted = true;
    async function loadSummitData() {
      try {
        const [tracksRes, schedRes, faqsRes, settingsRes, featRes] = await Promise.allSettled([
          getSummitTracks(),
          getSummitSchedule(),
          getSummitFaqs(),
          getSiteSettings(),
          getEvents({ isFeatured: true }),
        ]);

        if (isMounted) {
          if (settingsRes.status === "fulfilled" && settingsRes.value?.data) {
            setSiteSettings(settingsRes.value.data);
          }

          if (featRes.status === "fulfilled" && featRes.value?.data && featRes.value.data.length > 0) {
            setFeaturedEvent(featRes.value.data[0]);
          }

          if (tracksRes.status === "fulfilled" && tracksRes.value.data && tracksRes.value.data.length > 0) {
            const apiTracks = tracksRes.value.data.map((t: SummitTrack) => {
              const slugLower = (t.slug || "").toLowerCase();
              const nameLower = (t.name || "").toLowerCase();

              const matchedDefault = DEFAULT_TRACKS_DETAIL.find(
                (d) =>
                  slugLower.includes(d.id) ||
                  slugLower.includes(d.slug) ||
                  nameLower.includes(d.id) ||
                  nameLower.includes(d.slug) ||
                  nameLower.includes(d.tabLabel.toLowerCase())
              );

              const trackId = t.slug || matchedDefault?.id || t.id;

              return {
                id: trackId,
                slug: t.slug || matchedDefault?.slug || trackId,
                tabLabel: matchedDefault?.tabLabel || t.name || "Track",
                title: t.name || matchedDefault?.title || "Specialized Track",
                stream: t.stream || matchedDefault?.stream || "All Streams",
                hall: t.hall || matchedDefault?.hall || "Main Campus Hall",
                mockTime: "02:00 PM – 03:30 PM",
                overview: t.description || matchedDefault?.overview || "Comprehensive preparation for national admission exams.",
                syllabus: matchedDefault?.syllabus || [
                  "Comprehensive Syllabus Review",
                  "Advanced Problem-Solving Frameworks",
                  "Full-Length Mock Examination",
                ],
              };
            });
            setTracksDetail(apiTracks);
            if (apiTracks.length > 0) {
              setActiveTrackTab(apiTracks[0].id);
            }
          }

          if (schedRes.status === "fulfilled" && schedRes.value.data && schedRes.value.data.length > 0) {
            setSchedule(
              schedRes.value.data.map((s: ScheduleItem) => ({
                time: s.time,
                title: s.title,
                hall: s.hall || "Main Hall",
                type: s.type || "Session",
              }))
            );
          }

          if (faqsRes.status === "fulfilled" && faqsRes.value.data && faqsRes.value.data.length > 0) {
            setFaqs(
              faqsRes.value.data.map((f: FaqItem) => ({
                q: f.q,
                a: f.a,
              }))
            );
          }
        }
      } catch {
        // Use defaults
      }
    }
    loadSummitData();
    return () => {
      isMounted = false;
    };
  }, []);

  const rawTitle = featuredEvent?.title || siteSettings?.event_title || "1st National Academic Career Summit 2026";
  const displayVenue = featuredEvent?.venue || siteSettings?.event_venue || "Notre Dame College Campus, Motijheel, Dhaka";
  const rawDate = featuredEvent?.date || siteSettings?.event_date || "2026-11-14T09:00:00Z";
  const formattedDate = new Date(rawDate).toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const summaryText =
    featuredEvent?.summary ||
    "A full-day summit gathering 1,800+ students for admissions mentorship, expert masterclasses, and simulated mock exams.";

  const isSummit =
    featuredEvent?.category?.toLowerCase() === "summit" ||
    featuredEvent?.slug?.includes("summit") ||
    rawTitle.toLowerCase().includes("summit");

  const registerHref = featuredEvent
    ? (isSummit ? "/summit/register" : `/events/register?slug=${featuredEvent.slug}`)
    : "/summit/register";

  const targetDate = rawDate.includes("T") ? rawDate : `${rawDate}T09:00:00+06:00`;

  return (
    <div className="bg-canvas">
      {/* 1. Header Banner */}
      <section className="bg-ink text-ink-onDark red-bottom-bar py-6 sm:py-8 lg:py-10">
        <div className="container-custom">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-bright bg-white/5 border border-white/10 px-2.5 py-0.5 rounded">
                {featuredEvent?.category || "Flagship Summit 2026"}
              </span>
              <span className="text-[11px] text-neutral-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {featuredEvent?.eventStatus === "CLOSED" ? "Registration Closed" : "Registration Open"}
              </span>
            </div>

            <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase text-white tracking-tight leading-tight">
              {renderTwoToneTitle(rawTitle)}
            </h1>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl">
              {formattedDate} &bull; {displayVenue}. {summaryText}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href={registerHref}
                className="btn-primary text-xs uppercase tracking-wider py-2.5 px-6 font-bold text-center"
              >
                Register for Free Pass
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Live Summit Countdown Section */}
      <SummitCountdown
        targetDate={targetDate}
        eventTitle={rawTitle}
        eventVenue={displayVenue}
        registrationStatus={featuredEvent?.eventStatus || siteSettings?.registration_status || "OPEN"}
      />

      {/* 3. Overview & Stat Boxes */}
      <section className="section-padding container-custom">
        {(() => {
          const totalCapacity = tracksDetail.reduce((sum, t) => sum + (Number((t as any).capacity) || 0), 0);
          const stat1Number = siteSettings?.summit_stat1_num || (totalCapacity > 0 ? `${totalCapacity.toLocaleString()}+` : "1,800+");
          const stat1Label = siteSettings?.summit_stat1_label || "Expected Students";
          const stat1Desc = siteSettings?.summit_stat1_desc || "Delegates from Notre Dame College and prominent institutions across Bangladesh.";

          const stat2Number = siteSettings?.summit_stat2_num || "1 Full Day";
          const stat2Label = siteSettings?.summit_stat2_label || "Intensive Program";
          const stat2Desc = siteSettings?.summit_stat2_desc || "From morning keynote to afternoon mock exams and evening awards ceremony.";

          const stat3Number = siteSettings?.summit_stat3_num || (tracksDetail.length > 0 ? `${tracksDetail.length} Tracks` : "4 Tracks");
          const stat3Label = siteSettings?.summit_stat3_label || "Specialized Pathways";
          const stat3Desc = siteSettings?.summit_stat3_desc || "Targeted preparation for IBA, BUET, Medical and Abroad higher studies.";

          return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="p-4 sm:p-6 bg-surface-1 border border-border rounded-card">
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-brand mb-0.5">
                  {stat1Number}
                </div>
                <div className="font-bold text-xs sm:text-sm text-ink uppercase mb-0.5">
                  {stat1Label}
                </div>
                <p className="text-[11px] sm:text-xs text-ink-secondary leading-relaxed">
                  {stat1Desc}
                </p>
              </div>

              <div className="p-4 sm:p-6 bg-surface-1 border border-border rounded-card">
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-brand mb-0.5">
                  {stat2Number}
                </div>
                <div className="font-bold text-xs sm:text-sm text-ink uppercase mb-0.5">
                  {stat2Label}
                </div>
                <p className="text-[11px] sm:text-xs text-ink-secondary leading-relaxed">
                  {stat2Desc}
                </p>
              </div>

              <div className="p-4 sm:p-6 bg-surface-1 border border-border rounded-card">
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-brand mb-0.5">
                  {stat3Number}
                </div>
                <div className="font-bold text-xs sm:text-sm text-ink uppercase mb-0.5">
                  {stat3Label}
                </div>
                <p className="text-[11px] sm:text-xs text-ink-secondary leading-relaxed">
                  {stat3Desc}
                </p>
              </div>
            </div>
          );
        })()}

        {/* 3. Track Tabs & Syllabus Breakdown */}
        <div className="mb-8 sm:mb-12">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="section-eyebrow">Curriculum & Drills</span>
            <h2 className="section-title">Track Breakdown</h2>
          </div>

          {/* Track Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {tracksDetail.map((trk) => (
              <button
                key={trk.id}
                onClick={() => setActiveTrackTab(trk.id)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded border transition-colors cursor-pointer ${
                  activeTrackTab === trk.id
                    ? "bg-ink text-white border-ink"
                    : "bg-surface-1 text-ink-secondary border-border hover:border-ink"
                }`}
              >
                {(trk as any).tabLabel || trk.title}
              </button>
            ))}
          </div>

          {/* Selected Track Detail Card */}
          {tracksDetail
            .filter((t) => t.id === activeTrackTab)
            .map((track) => (
              <div
                key={track.id}
                className="bg-surface-1 border border-border rounded-card p-6 sm:p-10 max-w-4xl mx-auto shadow-sm"
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
                    href={`/summit/register?track=${encodeURIComponent((track as any).slug || track.id)}`}
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
                      {track.syllabus.map((item: string, idx: number) => (
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
        <div className="mb-8 sm:mb-12">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="section-eyebrow">Schedule Timeline</span>
            <h2 className="section-title">Program Schedule &bull; 14 Nov 2026</h2>
          </div>

          <div className="max-w-3xl mx-auto border border-border rounded-card bg-surface-1 overflow-hidden divide-y divide-border shadow-sm">
            {schedule.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 hover:bg-white transition-colors"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-8 h-8 rounded bg-canvas border border-border flex items-center justify-center text-xs font-mono font-bold text-ink shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="text-[11px] font-bold font-mono text-brand mb-0.5">
                      {item.time} &bull; <span className="uppercase text-ink-muted">{item.type}</span>
                    </div>
                    <div className="font-display font-bold text-xs sm:text-sm uppercase text-ink">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-ink-secondary mt-0.5">
                      {item.hall}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. FAQ Accordion */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <span className="section-eyebrow">Help & Information</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-surface-1 border border-border rounded-card overflow-hidden shadow-sm"
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
