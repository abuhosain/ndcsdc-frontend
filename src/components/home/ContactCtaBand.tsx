import { Link } from "@/i18n/navigation";
import { Mail, MapPin } from "lucide-react";

export default function ContactCtaBand() {
  return (
    <section className="bg-ink text-ink-onDark py-6 sm:py-8 border-b border-neutral-800">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-bright">
              Connect With Us
            </span>
            <h2 className="font-display text-lg sm:text-xl font-extrabold uppercase text-white tracking-tight">
              Have Questions or Partnership Inquiries?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Reach out to the NDCSDC Secretariat at Notre Dame College. We welcome university representatives, mentors, prospective partners, and student inquiries.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-brand-bright" />
                <span>ndcsdc.ndc@gmail.com</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-bright" />
                <span>Notre Dame College, Motijheel, Dhaka</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Contact Secretariat
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 rounded-lg border border-neutral-700 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors"
            >
              About Club
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
