"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { toast } from "sonner";

function RegisterFormContent() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    institution: "",
    hscBatch: "2026",
    group: "SCIENCE",
    track: "BUET",
    agreed: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [ticketData, setTicketData] = useState<{
    code: string;
    fullName: string;
    phone: string;
    email: string;
    institution: string;
    hscBatch: string;
    group: string;
    track: string;
    timestamp: string;
  } | null>(null);

  useEffect(() => {
    const groupParam = searchParams.get("group");
    const batchParam = searchParams.get("batch");
    const trackParam = searchParams.get("track");

    if (groupParam) setFormData((prev) => ({ ...prev, group: groupParam.toUpperCase() }));
    if (batchParam) setFormData((prev) => ({ ...prev, hscBatch: batchParam }));
    if (trackParam) setFormData((prev) => ({ ...prev, track: trackParam.toUpperCase() }));
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      toast.error("Please enter your full name.");
      return;
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, "");
    if (!/^01[3-9]\d{8}$/.test(cleanPhone)) {
      toast.error("Please enter a valid 11-digit Bangladesh phone number (01XXXXXXXXX).");
      return;
    }

    if (!formData.institution.trim()) {
      toast.error("Please enter your College / School name.");
      return;
    }

    if (!formData.agreed) {
      toast.error("Please confirm attendance terms.");
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      const randomId = Math.floor(1000 + Math.random() * 9000);
      const generatedCode = `NACS26-${randomId}`;

      setTicketData({
        code: generatedCode,
        fullName: formData.fullName,
        phone: cleanPhone,
        email: formData.email || "N/A",
        institution: formData.institution,
        hscBatch: formData.hscBatch,
        group: formData.group,
        track: formData.track,
        timestamp: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      });

      setSubmitting(false);
      toast.success("Registration confirmed! Your pass is ready.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 600);
  };

  const copyCode = () => {
    if (ticketData?.code) {
      navigator.clipboard.writeText(ticketData.code);
      toast.success(`Copied code ${ticketData.code}`);
    }
  };

  return (
    <div className="section-padding container-custom max-w-4xl">
      
      {/* Success Voucher Pass State */}
      {ticketData ? (
        <div className="max-w-xl mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <span className="section-eyebrow">
              Registration Confirmed
            </span>
            <h1 className="section-title">
              Your Summit Pass is Ready
            </h1>
            <p className="text-sm text-ink-secondary">
              Save your voucher code below. Present this pass at the Notre Dame College gate on 14 Nov 2026.
            </p>
          </div>

          {/* Clean Editorial Voucher Card */}
          <div className="bg-surface-1 border-2 border-brand rounded-card overflow-hidden">
            
            {/* Header */}
            <div className="bg-ink text-white p-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-bright block">
                  Official Student Pass
                </span>
                <h3 className="font-display font-bold text-base uppercase text-white">
                  1st National Academic Career Summit 2026
                </h3>
                <p className="text-xs text-neutral-400">
                  Saturday, 14 Nov 2026 &bull; Notre Dame College, Dhaka
                </p>
              </div>

              <div className="text-right bg-black/40 px-3.5 py-2 rounded border border-neutral-700">
                <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-400 block">
                  Pass Code
                </span>
                <span className="font-mono font-bold text-lg text-brand-gold">
                  {ticketData.code}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[10px] font-bold uppercase text-ink-muted block">
                    Student Name
                  </span>
                  <span className="font-display font-bold text-sm text-ink block mt-0.5">
                    {ticketData.fullName}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase text-ink-muted block">
                    Target Track
                  </span>
                  <span className="font-display font-bold text-sm text-brand uppercase block mt-0.5">
                    {ticketData.track} Track
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase text-ink-muted block">
                    Institution
                  </span>
                  <span className="font-semibold text-ink block mt-0.5">
                    {ticketData.institution}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase text-ink-muted block">
                    Batch & Stream
                  </span>
                  <span className="font-semibold text-ink block mt-0.5">
                    Batch {ticketData.hscBatch} &bull; {ticketData.group}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-canvas rounded border border-border text-xs text-ink-secondary">
                <strong>Event Instructions:</strong> Gates open at 08:30 AM. Please bring a valid college student ID card and your writing materials for the simulated mock examination.
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 bg-white border-t border-border flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={copyCode}
                className="btn-secondary text-xs uppercase tracking-wider py-2.5 px-5 font-bold"
              >
                Copy Code
              </button>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => window.print()}
                  className="btn-ghost text-xs uppercase tracking-wider font-bold"
                >
                  Print Pass
                </button>
                <button
                  onClick={() => setTicketData(null)}
                  className="btn-primary text-xs uppercase tracking-wider py-2.5 px-5 font-bold"
                >
                  Register Another
                </button>
              </div>
            </div>

          </div>

          <div className="text-center">
            <Link
              href="/"
              className="text-xs font-bold text-brand hover:underline"
            >
              &larr; Return to NDCSDC Homepage
            </Link>
          </div>

        </div>
      ) : (
        /* Form View */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form (8 cols) */}
          <div className="lg:col-span-8 bg-surface-1 border border-border rounded-card p-6 sm:p-10">
            
            <div className="mb-8 pb-4 border-b border-border">
              <span className="section-eyebrow">
                Registration Desk
              </span>
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl uppercase text-ink">
                Student Registration &bull; NACS 2026
              </h1>
              <p className="text-xs sm:text-sm text-ink-secondary mt-1">
                Enter your academic details to reserve your free seat and mock test paper.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <label className="label-clean">
                  Full Name <span className="text-brand">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Md. Tanvir Ahmed"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="input-clean"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label-clean">
                    Phone Number (SMS Alert) <span className="text-brand">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="01XXXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-clean font-mono"
                  />
                </div>

                <div>
                  <label className="label-clean">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="name@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-clean"
                  />
                </div>
              </div>

              <div>
                <label className="label-clean">
                  Current College / Institution <span className="text-brand">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Notre Dame College, Dhaka"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="input-clean"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label-clean">
                    HSC Batch <span className="text-brand">*</span>
                  </label>
                  <select
                    value={formData.hscBatch}
                    onChange={(e) => setFormData({ ...formData, hscBatch: e.target.value })}
                    className="input-clean font-semibold cursor-pointer"
                  >
                    <option value="2026">HSC Batch 2026</option>
                    <option value="2027">HSC Batch 2027</option>
                    <option value="2028">HSC Batch 2028</option>
                  </select>
                </div>

                <div>
                  <label className="label-clean">
                    Academic Group <span className="text-brand">*</span>
                  </label>
                  <select
                    value={formData.group}
                    onChange={(e) => setFormData({ ...formData, group: e.target.value })}
                    className="input-clean font-semibold cursor-pointer"
                  >
                    <option value="SCIENCE">Science Group</option>
                    <option value="COMMERCE">Commerce / Business Studies</option>
                    <option value="ARTS">Humanities / Arts</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="label-clean">
                  Select Target Pathway & Mock Test <span className="text-brand">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: "IBA", label: "IBA Track" },
                    { id: "BUET", label: "BUET Track" },
                    { id: "MEDICAL", label: "Medical Track" },
                    { id: "ABROAD", label: "Abroad & IELTS" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, track: item.id })}
                      className={`p-3 text-xs font-bold text-left rounded border transition-colors cursor-pointer ${
                        formData.track === item.id
                          ? "bg-ink text-white border-ink"
                          : "bg-white text-ink border-border hover:border-ink"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-2.5 text-xs text-ink-secondary cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreed}
                    onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                    className="mt-0.5 rounded text-brand focus:ring-brand"
                  />
                  <span>
                    I confirm that I will present a valid student ID card at Notre Dame College on 14 Nov 2026 and follow event guidelines.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full btn-primary text-xs uppercase tracking-wider py-4 font-bold disabled:opacity-50"
              >
                {submitting ? "Confirming Pass…" : "Confirm Registration & Generate Pass"}
              </button>

            </form>
          </div>

          {/* Right Summary Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-ink text-ink-onDark p-6 rounded-card border border-neutral-800">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-bright block mb-2">
                Summit Information
              </span>
              <h4 className="font-display font-bold text-base uppercase text-white mb-2">
                NACS 2026
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                Saturday, 14 November 2026 &bull; Notre Dame College Campus, Motijheel, Dhaka.
              </p>
              <div className="text-xs text-neutral-400 space-y-1.5 pt-3 border-t border-neutral-800">
                <div>&bull; Admission Roadmaps & Seminars</div>
                <div>&bull; Simulated Mock Examination</div>
                <div>&bull; Official Participation Certificate</div>
                <div>&bull; Zero Registration Fee</div>
              </div>
            </div>

            <div className="p-6 bg-surface-1 border border-border rounded-card text-xs text-ink-secondary space-y-2">
              <strong className="text-ink block uppercase text-[11px]">Need Help?</strong>
              <p>For inquiries, contact the secretariat at <strong className="text-ink">ndcsdc.ndc@gmail.com</strong>.</p>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-ink-muted">Loading Registration Desk…</div>}>
      <RegisterFormContent />
    </Suspense>
  );
}
