"use client";

import { useEffect, useState, useTransition, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { postPublic } from "@/utils/api/post";
import { registrationEndpoints } from "@/utils/endpoints/endpoints";
import { getEvents, type EventItem } from "@/services/common";
import { getSummitTracks, type SummitTrack } from "@/services/summit";
import PageHeader from "@/components/common/PageHeader";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Copy,
  Printer,
  Sparkles,
  ArrowRight,
  UserCheck,
} from "lucide-react";

const DEFAULT_EVENT_OPTIONS: EventItem[] = [
  {
    id: "act-1",
    title: "IBA DU Masterclass: Verbal & Analytical Speed Drills",
    slug: "iba-du-masterclass-verbal-drills",
    category: "Workshop",
    isUpcoming: true,
    venue: "NDC Audio-Visual Hall (AV-1)",
    date: "2026-06-20T10:00:00Z",
    summary: "An intensive session on reading comprehension speed, sentence correction traps, and mathematical heuristics for IBA aspirants.",
  },
  {
    id: "act-2",
    title: "1st National Academic & Career Summit 2026 (NACS 2026)",
    slug: "national-academic-career-summit-2026",
    category: "Summit",
    isUpcoming: true,
    venue: "Notre Dame College Auditorium & Campus, Dhaka",
    date: "2026-11-14T09:00:00Z",
    summary: "The flagship summit featuring 4 specialized tracks in IBA, BUET, Medical, and Abroad studies.",
  },
];

function EventRegisterContent() {
  const searchParams = useSearchParams();
  const eventParam = searchParams.get("event") || searchParams.get("slug") || "";

  const [events, setEvents] = useState<EventItem[]>(DEFAULT_EVENT_OPTIONS);
  const [selectedEventId, setSelectedEventId] = useState<string>("");
  const [tracks, setTracks] = useState<SummitTrack[]>([]);
  const [selectedTrackId, setSelectedTrackId] = useState<string>("");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    institution: "",
    hscBatch: "2026",
    group: "SCIENCE" as "SCIENCE" | "COMMERCE" | "ARTS",
  });

  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [confirmedPass, setConfirmedPass] = useState<any | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function loadEventsData() {
      try {
        const [evRes, trRes] = await Promise.allSettled([
          getEvents({ isUpcoming: true }),
          getSummitTracks(),
        ]);

        let loadedEvents = DEFAULT_EVENT_OPTIONS;
        if (evRes.status === "fulfilled" && evRes.value?.data && evRes.value.data.length > 0) {
          loadedEvents = evRes.value.data;
          setEvents(evRes.value.data);
        }

        if (trRes.status === "fulfilled" && trRes.value?.data) {
          setTracks(trRes.value.data);
        }

        // Match eventParam with loaded events
        if (eventParam) {
          const match = loadedEvents.find(
            (e) =>
              e.id === eventParam ||
              e.slug === eventParam ||
              e.title.toLowerCase().includes(eventParam.toLowerCase())
          );
          if (match) {
            setSelectedEventId(match.id);
          } else if (loadedEvents.length > 0) {
            setSelectedEventId(loadedEvents[0].id);
          }
        } else if (loadedEvents.length > 0) {
          setSelectedEventId(loadedEvents[0].id);
        }
      } catch {
        if (loadedEventsFallback.length > 0) {
          setSelectedEventId(loadedEventsFallback[0].id);
        }
      }
    }
    const loadedEventsFallback = DEFAULT_EVENT_OPTIONS;
    loadEventsData();
  }, [eventParam]);

  const currentSelectedEvent = events.find((e) => e.id === selectedEventId) || events[0];
  const isSummitEvent =
    currentSelectedEvent?.category?.toLowerCase() === "summit" ||
    currentSelectedEvent?.slug?.includes("summit") ||
    currentSelectedEvent?.title?.toLowerCase().includes("summit");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 11) {
      setErrorMessage("Please enter a valid 11-digit phone number (e.g. 017xxxxxxxx).");
      return;
    }
    if (!formData.institution.trim()) {
      setErrorMessage("Please enter your college or institution name.");
      return;
    }

    startTransition(async () => {
      try {
        const payload: any = {
          fullName: formData.fullName.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim() || undefined,
          institution: formData.institution.trim(),
          hscBatch: Number(formData.hscBatch) || 2026,
          group: formData.group,
          activityId: currentSelectedEvent?.id || undefined,
          eventTitle: currentSelectedEvent?.title || "NDCSDC Academic Workshop",
        };

        if (isSummitEvent && selectedTrackId) {
          payload.trackId = selectedTrackId;
        }

        const res = await postPublic<any>(registrationEndpoints.register, payload);

        if (res?.data) {
          setConfirmedPass(res.data);
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (res?.message) {
          setErrorMessage(res.message);
        } else {
          setErrorMessage("Registration could not be completed. Please check details and try again.");
        }
      } catch (err: any) {
        setErrorMessage(err?.message || "An unexpected error occurred during registration.");
      }
    });
  };

  const copyPassCode = () => {
    if (confirmedPass?.code) {
      navigator.clipboard.writeText(confirmedPass.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-canvas min-h-screen pb-16">
      <PageHeader
        eyebrow="Student Admission & Entry"
        title="Event Registration"
        description="Register directly for upcoming diagnostic workshops, academic masterclasses, study clinics, and club sessions."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events/upcoming" },
          { label: "Direct Registration" },
        ]}
      />

      <div className="container-custom max-w-3xl mt-8">
        {/* SUCCESS STATE */}
        {confirmedPass ? (
          <div className="bg-white border-2 border-emerald-600 rounded-xl p-6 sm:p-8 shadow-md space-y-6 text-center animate-in fade-in zoom-in-95 duration-300">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-0.5 rounded-full">
                Registration Confirmed
              </span>
              <h2 className="font-display font-extrabold text-2xl uppercase text-ink">
                Pass Issued Successfully
              </h2>
              <p className="text-xs text-ink-secondary">
                Your entry pass has been generated and verified in the club database roster.
              </p>
            </div>

            {/* Pass Voucher Card */}
            <div className="bg-surface-1 border-2 border-dashed border-ink/30 rounded-xl p-5 sm:p-6 text-left space-y-4 max-w-lg mx-auto">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div>
                  <div className="text-[10px] uppercase font-mono font-bold text-brand">
                    Official Student Pass
                  </div>
                  <div className="font-display font-extrabold text-xl text-ink">
                    {confirmedPass.code}
                  </div>
                </div>
                <button
                  onClick={copyPassCode}
                  className="btn-secondary text-xs py-1.5 px-3 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? "Copied!" : "Copy Pass"}</span>
                </button>
              </div>

              <div className="space-y-1.5 text-xs text-ink">
                <div>
                  <span className="text-ink-muted">Event / Program:</span>{" "}
                  <strong className="text-ink font-bold">
                    {confirmedPass.eventTitle || currentSelectedEvent?.title}
                  </strong>
                </div>
                {confirmedPass.track?.name && (
                  <div>
                    <span className="text-ink-muted">Track:</span>{" "}
                    <strong className="text-brand font-bold">{confirmedPass.track.name}</strong>
                  </div>
                )}
                <div>
                  <span className="text-ink-muted">Delegate Name:</span>{" "}
                  <strong>{confirmedPass.fullName}</strong>
                </div>
                <div>
                  <span className="text-ink-muted">College / Institution:</span>{" "}
                  <strong>{confirmedPass.institution}</strong>
                </div>
                <div>
                  <span className="text-ink-muted">Phone Number:</span>{" "}
                  <strong className="font-mono">{confirmedPass.phone}</strong>
                </div>
                <div>
                  <span className="text-ink-muted">Batch & Group:</span>{" "}
                  <strong>
                    HSC &apos;{confirmedPass.hscBatch} &bull; {confirmedPass.group}
                  </strong>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={handlePrint}
                className="btn-primary text-xs uppercase tracking-wider py-2.5 px-5 font-bold inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save Voucher</span>
              </button>
              <button
                onClick={() => {
                  setConfirmedPass(null);
                  setFormData({
                    fullName: "",
                    phone: "",
                    email: "",
                    institution: "",
                    hscBatch: "2026",
                    group: "SCIENCE",
                  });
                }}
                className="btn-secondary text-xs uppercase tracking-wider py-2.5 px-4 font-bold"
              >
                Register Another Student
              </button>
              <Link
                href="/events/upcoming"
                className="btn-ghost text-xs uppercase tracking-wider font-bold"
              >
                Browse Other Events →
              </Link>
            </div>
          </div>
        ) : (
          /* REGISTRATION FORM */
          <div className="bg-white border border-border rounded-xl p-6 sm:p-8 shadow-2xs space-y-6">
            
            {/* Event Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-ink">
                Select Event / Academic Program <span className="text-brand">*</span>
              </label>
              <select
                value={selectedEventId}
                onChange={(e) => setSelectedEventId(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-surface-1 border border-border rounded-lg text-xs font-medium text-ink focus:outline-none focus:border-brand"
              >
                {events.map((ev) => (
                  <option key={ev.id} value={ev.id}>
                    [{ev.category || "Event"}] {ev.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Selected Event Details Preview Card */}
            {currentSelectedEvent && (
              <div className="bg-canvas border border-border rounded-lg p-4 space-y-2 text-xs">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-brand text-white">
                    {currentSelectedEvent.category || "Workshop"}
                  </span>
                  {currentSelectedEvent.date && (
                    <span className="inline-flex items-center gap-1 text-ink-muted font-mono">
                      <Calendar className="w-3.5 h-3.5 text-brand" />
                      {new Date(currentSelectedEvent.date).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-extrabold text-sm uppercase text-ink">
                  {currentSelectedEvent.title}
                </h3>

                {currentSelectedEvent.venue && (
                  <div className="flex items-center gap-1 text-ink-secondary">
                    <MapPin className="w-3.5 h-3.5 text-brand shrink-0" />
                    <span>{currentSelectedEvent.venue}</span>
                  </div>
                )}

                {currentSelectedEvent.summary && (
                  <p className="text-ink-secondary leading-relaxed pt-1 border-t border-border/60">
                    {currentSelectedEvent.summary}
                  </p>
                )}
              </div>
            )}

            {/* Summit Track Selector (Only if Summit is selected) */}
            {isSummitEvent && tracks.length > 0 && (
              <div className="space-y-2 bg-amber-50/70 border border-amber-200 p-4 rounded-lg">
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-950">
                  Choose Summit Track <span className="text-brand">*</span>
                </label>
                <select
                  value={selectedTrackId}
                  onChange={(e) => setSelectedTrackId(e.target.value)}
                  className="w-full px-3.5 py-2 bg-white border border-amber-300 rounded-lg text-xs font-medium text-ink focus:outline-none"
                >
                  <option value="">-- Select Your Summit Track --</option>
                  {tracks.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name} ({t.stream} &bull; {t.hall || "NDC Campus"})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="bg-rose-50 border border-rose-200 text-rose-800 p-3.5 rounded-lg text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Attendee Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink">
                    Student Full Name <span className="text-brand">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Md. Tanvir Ahmed"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-border rounded-lg text-xs text-ink focus:outline-none focus:border-brand"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink">
                    Mobile Number <span className="text-brand">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="017xxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-border rounded-lg text-xs font-mono text-ink focus:outline-none focus:border-brand"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink">
                    Email Address <span className="text-ink-muted text-[10px]">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-border rounded-lg text-xs text-ink focus:outline-none focus:border-brand"
                  />
                </div>

                {/* Institution */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink">
                    College / Institution <span className="text-brand">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Notre Dame College, Dhaka"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-border rounded-lg text-xs text-ink focus:outline-none focus:border-brand"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* HSC Batch */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink">
                    HSC Batch <span className="text-brand">*</span>
                  </label>
                  <select
                    value={formData.hscBatch}
                    onChange={(e) => setFormData({ ...formData, hscBatch: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-border rounded-lg text-xs font-medium text-ink focus:outline-none focus:border-brand bg-white"
                  >
                    <option value="2026">HSC Batch 2026 (2nd Year)</option>
                    <option value="2027">HSC Batch 2027 (1st Year)</option>
                    <option value="2028">HSC Batch 2028 (School / SSC)</option>
                    <option value="2025">HSC Batch 2025 (Admission Aspirant)</option>
                  </select>
                </div>

                {/* Academic Stream */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink">
                    Academic Group <span className="text-brand">*</span>
                  </label>
                  <select
                    value={formData.group}
                    onChange={(e) =>
                      setFormData({ ...formData, group: e.target.value as "SCIENCE" | "COMMERCE" | "ARTS" })
                    }
                    className="w-full px-3.5 py-2.5 border border-border rounded-lg text-xs font-medium text-ink focus:outline-none focus:border-brand bg-white"
                  >
                    <option value="SCIENCE">Science Group</option>
                    <option value="COMMERCE">Business Studies / Commerce</option>
                    <option value="ARTS">Humanities / Arts</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isPending}
                  className="btn-primary w-full py-3 text-xs uppercase tracking-wider font-bold inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  {isPending ? (
                    <span>Issuing Registration Pass...</span>
                  ) : (
                    <>
                      <UserCheck className="w-4 h-4" />
                      <span>Confirm & Generate Entry Pass</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-ink-muted text-center leading-relaxed">
                By submitting, your seat will be reserved and recorded under Notre Dame Career & Skill Development Club official attendee roster.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default function EventRegistrationPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-xs font-mono text-ink-muted">
          Loading event registration system...
        </div>
      }
    >
      <EventRegisterContent />
    </Suspense>
  );
}
