"use client";

import { useState } from "react";
import { joinAlumniNetwork } from "@/services/common";
import { toast } from "sonner";
import { Check } from "lucide-react";

export default function AlumniJoinForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    batch: "",
    currentInstitution: "",
    currentRole: "",
    email: "",
    phone: "",
    linkedinUrl: "",
    quote: "",
    consentPublish: true,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await joinAlumniNetwork(formData);
      if (res.success) {
        toast.success("Thank you! Your profile has been submitted for moderation.");
        setSubmitted(true);
      } else {
        toast.error(res.message || "Failed to submit. Please try again.");
      }
    } catch (err: any) {
      toast.error(err?.message || "An error occurred while submitting.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-300 rounded-lg p-8 text-center space-y-3">
        <div className="w-12 h-12 mx-auto rounded-full bg-emerald-600 text-white flex items-center justify-center">
          <Check className="w-6 h-6" />
        </div>
        <h3 className="font-display text-lg font-bold text-emerald-950 uppercase">
          Submission Received
        </h3>
        <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
          Thank you for staying connected with Notre Dame Career & Skill Development Club. The Secretariat will verify your details and include your profile in the directory.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-border rounded-lg p-6 sm:p-8 space-y-5 shadow-xs">
      <div className="border-b border-border pb-3">
        <h3 className="font-display text-lg font-bold uppercase text-ink">
          Join the Alumni Network
        </h3>
        <p className="text-xs text-ink-secondary mt-0.5">
          Are you a Notre Dame College alumnus? Join our alumni directory to mentor aspirants or share insights.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label-clean">Full Name *</label>
          <input
            type="text"
            required
            placeholder="e.g. Tanvir Anjum"
            className="input-clean"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
        </div>

        <div>
          <label className="label-clean">NDC Batch *</label>
          <input
            type="text"
            required
            placeholder="e.g. HSC '23"
            className="input-clean"
            value={formData.batch}
            onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label-clean">Current Institution / University *</label>
          <input
            type="text"
            required
            placeholder="e.g. BUET, CSE or IBA DU"
            className="input-clean"
            value={formData.currentInstitution}
            onChange={(e) => setFormData({ ...formData, currentInstitution: e.target.value })}
          />
        </div>

        <div>
          <label className="label-clean">Current Role / Major</label>
          <input
            type="text"
            placeholder="e.g. Undergraduate Researcher / Student"
            className="input-clean"
            value={formData.currentRole}
            onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label-clean">Email Address</label>
          <input
            type="email"
            placeholder="e.g. name@alumni.ndc.edu"
            className="input-clean"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label className="label-clean">LinkedIn Profile Link</label>
          <input
            type="url"
            placeholder="https://linkedin.com/in/username"
            className="input-clean"
            value={formData.linkedinUrl}
            onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label className="label-clean">Advice or Quote for Aspirants</label>
        <textarea
          rows={3}
          placeholder="Share a short word of advice for students..."
          className="w-full p-3 rounded-lg border border-border bg-surface-1 text-ink text-sm placeholder:text-ink-muted focus:outline-none focus:border-brand"
          value={formData.quote}
          onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
        />
      </div>

      {/* Privacy Consent Checkbox */}
      <div className="flex items-start gap-2.5 pt-2">
        <input
          type="checkbox"
          id="consentPublish"
          checked={formData.consentPublish}
          onChange={(e) => setFormData({ ...formData, consentPublish: e.target.checked })}
          className="mt-1 h-4 w-4 rounded border-border text-brand focus:ring-brand"
        />
        <label htmlFor="consentPublish" className="text-xs text-ink-secondary leading-snug cursor-pointer">
          I consent to display my name, NDC batch, institution, role, and quote publicly on the NDCSDC Alumni Directory. (Private contact info is kept confidential).
        </label>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full text-xs uppercase tracking-wider py-3 font-bold cursor-pointer"
        >
          {loading ? "Submitting Profile..." : "Submit to Alumni Network"}
        </button>
      </div>
    </form>
  );
}
