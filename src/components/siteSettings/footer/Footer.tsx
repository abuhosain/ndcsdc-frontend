import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ink-onDark red-top-bar">
      <div className="container-custom py-8 sm:py-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-6 sm:pb-8 border-b border-neutral-800">
          
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1 bg-surface-1 p-1 rounded-md">
                <div className="relative w-7 h-7 flex items-center justify-center bg-white rounded-sm overflow-hidden">
                  <Image
                    src="/logos/ndc-college-logo.jpeg"
                    alt="Notre Dame College Crest"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <div className="w-[1px] h-5 bg-border"></div>
                <div className="relative w-7 h-7 flex items-center justify-center bg-white rounded-sm overflow-hidden">
                  <Image
                    src="/logos/ndcsdc-logo.jpeg"
                    alt="NDCSDC Seal"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="font-display font-black text-base tracking-wider text-white">
                NDCSDC
              </span>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed max-w-sm">
              Notre Dame Career & Skill Development Club (NDCSDC), Notre Dame College, Dhaka. Founded in 2025 to empower students with career clarity, admission masterclasses, and professional leadership.
            </p>

            <div className="pt-1 text-[11px] text-neutral-400 space-y-0.5">
              <div>Notre Dame College Campus, Toyenbee Circular Rd, Motijheel, Dhaka 1000</div>
              <div>Official Secretariat: <a href="mailto:ndcsdc.ndc@gmail.com" className="text-white hover:underline">ndcsdc.ndc@gmail.com</a></div>
            </div>
          </div>

          {/* Col 2: About & Panels (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-[11px] font-bold uppercase tracking-wider text-white mb-3">
              Club Identity
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About the Club
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-white transition-colors">
                  Achievements & Impact
                </Link>
              </li>
              <li>
                <Link href="/panel/executive" className="hover:text-white transition-colors">
                  Executive Panel
                </Link>
              </li>
              <li>
                <Link href="/panel/sub-executive" className="hover:text-white transition-colors">
                  Sub-Executive Panel
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white transition-colors">
                  Partners & Sponsors
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Events & Media (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-[11px] font-bold uppercase tracking-wider text-white mb-3">
              Events & Media
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>
                <Link href="/summit" className="hover:text-white transition-colors font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-bright inline-block" />
                  NACS 2026 Summit
                </Link>
              </li>
              <li>
                <Link href="/events/upcoming" className="hover:text-white transition-colors">
                  Upcoming Masterclasses
                </Link>
              </li>
              <li>
                <Link href="/events/past" className="hover:text-white transition-colors">
                  Past Events & Archive
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors">
                  News & Announcements
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Opportunities & Community (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-[11px] font-bold uppercase tracking-wider text-white mb-3">
              Opportunities & Alumni
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Admission Guides & Resources
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="hover:text-white transition-colors">
                  Notre Dame Alumni Network
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Secretariat
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="/summit/register"
                  className="text-xs font-bold text-brand-bright hover:underline uppercase tracking-wider"
                >
                  Register for NACS 2026 →
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Website Partner Credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <div className="text-center sm:text-left">
            &copy; {currentYear} Notre Dame Career & Skill Development Club (NDCSDC), Notre Dame College, Dhaka.
          </div>

          {/* Permanent Website Partner Credit with Logo */}
          <div className="flex items-center gap-2">
            <span>Designed & Developed by</span>
            <a
              href="https://neexg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-brand-bright transition-colors inline-flex items-center gap-1.5 group bg-neutral-900 px-2.5 py-1 rounded border border-neutral-800"
            >
              <div className="relative w-4 h-4 rounded overflow-hidden flex items-center justify-center shrink-0">
                <Image
                  src="/logos/NEEXG PP5.jpg"
                  alt="NeexG"
                  width={16}
                  height={16}
                  className="object-cover"
                />
              </div>
              <span className="text-brand-bright group-hover:underline">NeexG</span>
              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
