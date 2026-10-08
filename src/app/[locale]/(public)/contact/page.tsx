"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

const CONTACT_PERSONS = [
  {
    id: 1,
    name: "Mirza Rafid Ahmed",
    role: "General Secretary",
    phone: "+880 1711-234567",
    email: "rafid.ndcsdc@gmail.com",
    facebook: "https://facebook.com",
  },
  {
    id: 2,
    name: "Zubair Al Mahmud",
    role: "Joint Secretary",
    phone: "+880 1812-345678",
    email: "zubair.ndcsdc@gmail.com",
    facebook: "https://facebook.com",
  },
  {
    id: 3,
    name: "A. S. M. Farhan",
    role: "President (Administration)",
    phone: "+880 1913-456789",
    email: "farhan.ndcsdc@gmail.com",
    facebook: "https://facebook.com",
  },
  {
    id: 4,
    name: "Syed Tanvir Hasan",
    role: "Vice President",
    phone: "+880 1614-567890",
    email: "tanvir.ndcsdc@gmail.com",
    facebook: "https://facebook.com",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    emailOrPhone: "",
    subject: "Summit Registration",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.message.trim()) {
      toast.error("Please fill in your name and message.");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you. Your message has been received by the Secretariat.");
      setFormState({
        name: "",
        emailOrPhone: "",
        subject: "Summit Registration",
        message: "",
      });
    }, 600);
  };

  return (
    <div className="bg-canvas">
      
      {/* Header */}
      <section className="bg-ink text-ink-onDark red-bottom-bar py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-bright">
              Secretariat Desk
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl uppercase text-white tracking-tight">
              Contact Us
            </h1>
            <p className="text-base text-neutral-300 leading-relaxed max-w-2xl">
              Inquiries regarding NACS 2026 summit registration, sponsorship, or club activities.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Executive Contact Person Cards (with red left bar, 05_DESIGN.md §3.2) */}
      <section className="section-padding container-custom">
        
        <div className="mb-10">
          <span className="section-eyebrow">Direct Contacts</span>
          <h2 className="section-title">Executive Contact Persons</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CONTACT_PERSONS.map((person) => (
            <div
              key={person.id}
              className="bg-surface-1 border border-border rounded-card p-6 red-left-bar flex flex-col justify-between hover:border-ink transition-colors"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand block mb-1">
                  {person.role}
                </span>
                <h4 className="font-display font-bold text-base uppercase text-ink mb-3">
                  {person.name}
                </h4>

                <div className="space-y-1.5 text-xs text-ink-secondary">
                  <div>
                    <span className="text-ink-muted">Phone:</span>{" "}
                    <span className="font-mono font-semibold text-ink">{person.phone}</span>
                  </div>
                  <div>
                    <span className="text-ink-muted">Email:</span>{" "}
                    <span className="text-ink truncate block">{person.email}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border mt-4">
                <a
                  href={person.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-brand hover:underline"
                >
                  Facebook Profile &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form & Venue Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form (7 cols) */}
          <div className="lg:col-span-7 bg-surface-1 border border-border rounded-card p-6 sm:p-10">
            <h3 className="font-display font-bold text-xl uppercase text-ink mb-2">
              Send an Official Message
            </h3>
            <p className="text-xs sm:text-sm text-ink-secondary mb-6">
              Our secretariat will review and reply within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label-clean">
                    Your Name <span className="text-brand">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="input-clean"
                  />
                </div>

                <div>
                  <label className="label-clean">
                    Phone or Email <span className="text-brand">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contact info"
                    value={formState.emailOrPhone}
                    onChange={(e) => setFormState({ ...formState, emailOrPhone: e.target.value })}
                    className="input-clean"
                  />
                </div>
              </div>

              <div>
                <label className="label-clean">
                  Subject Category
                </label>
                <select
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="input-clean font-semibold cursor-pointer"
                >
                  <option value="Summit Registration">NACS 2026 Summit Registration</option>
                  <option value="Sponsorship">Sponsorship & Partnership</option>
                  <option value="Club Membership">Club Membership</option>
                  <option value="General Inquiry">General Secretariat Inquiry</option>
                </select>
              </div>

              <div>
                <label className="label-clean">
                  Your Message <span className="text-brand">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we help you?"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full p-4 rounded-lg border border-border bg-surface-1 text-ink text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary text-xs uppercase tracking-wider py-3.5 px-8 font-bold disabled:opacity-50"
              >
                {submitting ? "Sending…" : "Send Message to Secretariat"}
              </button>
            </form>
          </div>

          {/* Location & Secretariat Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-ink text-ink-onDark p-6 sm:p-7 rounded-card border border-neutral-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-white p-1 flex items-center justify-center shrink-0">
                  <Image
                    src="/logos/ndc-college-logo.jpeg"
                    alt="NDC"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm uppercase text-white">
                    Notre Dame College Campus
                  </h4>
                  <span className="text-xs text-neutral-400">Motijheel, Dhaka 1000</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-neutral-300 pt-3 border-t border-neutral-800">
                <div><strong>Address:</strong> Toyenbee Circular Road, Motijheel C/A, Dhaka 1000</div>
                <div><strong>Email:</strong> ndcsdc.ndc@gmail.com</div>
                <div><strong>Hours:</strong> 09:00 AM &ndash; 05:00 PM</div>
              </div>
            </div>

            <div className="p-6 bg-surface-1 border border-border rounded-card text-xs text-ink-secondary space-y-2">
              <strong className="text-ink block uppercase text-[11px]">Campus Directions</strong>
              <p>Notre Dame College is situated in Motijheel, Dhaka. Nearest metro transit: Bangladesh Secretariat Metro Station.</p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Notre+Dame+College+Dhaka"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-brand hover:underline"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}
