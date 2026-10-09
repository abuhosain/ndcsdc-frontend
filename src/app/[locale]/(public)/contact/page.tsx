"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import { toast } from "sonner";
import { sendContactMessage } from "@/services/contact";
import { getTeamMembers } from "@/services/common";
import { Mail, MapPin, Clock, Phone, ExternalLink } from "lucide-react";

export default function ContactPage() {
  const [contactPersons, setContactPersons] = useState<any[]>([]);
  const [formState, setFormState] = useState({
    name: "",
    emailOrPhone: "",
    subject: "General Inquiry",
    message: "",
    honeypot: "", // Anti-spam trap
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function loadContacts() {
      try {
        const res = await getTeamMembers({ panelType: "EXECUTIVE" });
        if (isMounted && res.data && res.data.length > 0) {
          const executives = res.data.filter((m: any) => !m.isModerator).slice(0, 4);
          setContactPersons(executives);
        }
      } catch {
        //
      }
    }
    loadContacts();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check: If hidden field filled, silently drop bot submission
    if (formState.honeypot) {
      toast.success("Thank you. Your message has been received.");
      return;
    }

    if (!formState.name.trim() || !formState.message.trim()) {
      toast.error("Please fill in your name and message.");
      return;
    }

    setSubmitting(true);
    try {
      const isEmail = formState.emailOrPhone.includes("@");
      await sendContactMessage({
        name: formState.name.trim(),
        email: isEmail ? formState.emailOrPhone.trim() : undefined,
        phone: !isEmail && formState.emailOrPhone.trim() ? formState.emailOrPhone.trim() : undefined,
        subject: formState.subject,
        message: formState.message.trim(),
      });

      toast.success("Thank you. Your message has been received by the NDCSDC Secretariat.");
      setFormState({
        name: "",
        emailOrPhone: "",
        subject: "General Inquiry",
        message: "",
        honeypot: "",
      });
    } catch (err: any) {
      toast.error(err?.message || "Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-canvas">
      
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="Secretariat & Communications"
        title="Contact Us"
        description="Official inquiries regarding NDCSDC activities, summit registration, institutional sponsorships, and student memberships."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      {/* 2. Executive Contacts Strip */}
      {contactPersons.length > 0 && (
        <section className="section-padding-sm bg-surface-1 border-b border-border">
          <div className="container-custom">
            <div className="max-w-xl mb-4 sm:mb-6">
              <span className="section-eyebrow">Direct Outreach</span>
              <h2 className="section-title mb-0">Executive Contact Persons</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {contactPersons.map((person) => (
                <div
                  key={person.id}
                  className="bg-white border border-border rounded-lg p-4 red-left-bar space-y-1.5 shadow-2xs"
                >
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand block">
                    {person.designation}
                  </span>
                  <h3 className="font-display font-bold text-xs sm:text-sm text-ink">
                    {person.name}
                  </h3>
                  <div className="text-[11px] text-ink-muted font-mono space-y-0.5 pt-0.5">
                    {person.email && (
                      <div className="truncate">
                        <a href={`mailto:${person.email}`} className="hover:text-brand flex items-center gap-1">
                          <Mail className="w-3 h-3 text-brand shrink-0" />
                          <span className="truncate">{person.email}</span>
                        </a>
                      </div>
                    )}
                    {person.phone && (
                      <div className="flex items-center gap-1">
                        <Phone className="w-3 h-3 text-brand shrink-0" />
                        <span>{person.phone}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Form & Location Split */}
      <section className="section-padding container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-border rounded-lg p-5 sm:p-7 shadow-xs space-y-4">
            <div>
              <span className="section-eyebrow">Direct Dispatch</span>
              <h2 className="font-display text-lg sm:text-xl font-bold uppercase text-ink">
                Send an Official Message
              </h2>
              <p className="text-xs text-ink-secondary mt-0.5">
                Our Secretariat will review and respond within 24–48 business hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot hidden input */}
              <input
                type="text"
                name="website_url_check"
                value={formState.honeypot}
                onChange={(e) => setFormState({ ...formState, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label-clean">
                    Your Full Name <span className="text-brand">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mirza Rafid"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="input-clean"
                  />
                </div>

                <div>
                  <label className="label-clean">
                    Email or Phone <span className="text-brand">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. name@domain.com or +8801..."
                    value={formState.emailOrPhone}
                    onChange={(e) => setFormState({ ...formState, emailOrPhone: e.target.value })}
                    className="input-clean"
                  />
                </div>
              </div>

              <div>
                <label className="label-clean">Subject Category</label>
                <select
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="input-clean font-medium cursor-pointer"
                >
                  <option value="General Inquiry">General Secretariat Inquiry</option>
                  <option value="Summit Registration">NACS 2026 Summit Registration</option>
                  <option value="Sponsorship">Sponsorship & Partnership Proposal</option>
                  <option value="Alumni Network">Alumni Network & Mentorship</option>
                  <option value="Event Collaboration">Event / Workshop Collaboration</option>
                </select>
              </div>

              <div>
                <label className="label-clean">
                  Your Message <span className="text-brand">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="State your inquiry or message clearly..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full p-4 rounded-lg border border-border bg-surface-1 text-ink text-sm focus:outline-none focus:border-brand"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary text-xs uppercase tracking-wider py-3.5 px-8 font-bold disabled:opacity-50 cursor-pointer"
              >
                {submitting ? "Sending Message..." : "Submit to Secretariat"}
              </button>
            </form>
          </div>

          {/* Location & Secretariat Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Campus Info Card */}
            <div className="bg-ink text-ink-onDark p-6 sm:p-8 rounded-lg border border-neutral-800 space-y-5 shadow-xs">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-bright">
                  Notre Dame College Campus
                </span>
                <h3 className="font-display font-bold text-xl uppercase text-white mt-1">
                  Secretariat Office
                </h3>
              </div>

              <div className="space-y-3 text-xs text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-bright shrink-0 mt-0.5" />
                  <span>Toyenbee Circular Road, Motijheel C/A, Dhaka 1000, Bangladesh</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-bright shrink-0" />
                  <a href="mailto:ndcsdc.ndc@gmail.com" className="text-white hover:underline">
                    ndcsdc.ndc@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>08:00 AM – 04:30 PM (Sunday to Thursday)</span>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <a
                  href="https://maps.google.com/?q=Notre+Dame+College+Dhaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-brand-bright hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Open Campus in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Directions & Transit */}
            <div className="bg-surface-1 border border-border rounded-lg p-6 space-y-2 text-xs text-ink-secondary shadow-2xs">
              <span className="text-ink font-bold uppercase text-[11px] block">Public Transit Directions</span>
              <p className="leading-relaxed">
                Notre Dame College is centrally located in Motijheel. The nearest metro transit is the <strong>Bangladesh Secretariat Metro Station</strong> or <strong>Motijheel Metro Station</strong> (5 minutes by rickshaw).
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
