import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ink-onDark red-top-bar">
      <div className="container-custom py-16 sm:py-20">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-neutral-800">
          
          {/* Col 1: Brand & Purpose (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-surface-1 p-1 rounded-md">
                <div className="relative w-8 h-8 flex items-center justify-center bg-white rounded-sm overflow-hidden">
                  <Image
                    src="/logos/ndc-college-logo.jpeg"
                    alt="Notre Dame College Crest"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div className="w-[1px] h-6 bg-border"></div>
                <div className="relative w-8 h-8 flex items-center justify-center bg-white rounded-sm overflow-hidden">
                  <Image
                    src="/logos/ndcsdc-logo.jpeg"
                    alt="NDCSDC Seal"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="font-display font-black text-lg tracking-wider text-white">
                NDCSDC
              </span>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-md">
              Notre Dame Career & Skill Development Club (NDCSDC), Notre Dame College, Dhaka. Guiding students toward higher education pathways in IBA, BUET, Medical and Abroad studies.
            </p>

            <div className="pt-2 text-xs text-ink-muted">
              Notre Dame College, Toyenbee Circular Rd, Motijheel, Dhaka 1000
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/activities" className="hover:text-white transition-colors">
                  Activities & Gallery
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Executive Team
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Summit Tracks (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-4">
              NACS 2026 Pathways
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <Link href="/summit" className="hover:text-white transition-colors">
                  IBA & Business Leadership
                </Link>
              </li>
              <li>
                <Link href="/summit" className="hover:text-white transition-colors">
                  BUET & Engineering Drills
                </Link>
              </li>
              <li>
                <Link href="/summit" className="hover:text-white transition-colors">
                  Medical & Healthcare Recall
                </Link>
              </li>
              <li>
                <Link href="/summit" className="hover:text-white transition-colors">
                  Abroad Studies & IELTS
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/summit/register"
                  className="text-xs font-bold text-brand-bright hover:underline uppercase tracking-wider"
                >
                  Register for Summit →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Person & Email (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-4">
              Secretariat
            </h4>
            <div className="space-y-2 text-xs text-neutral-300">
              <p>Email: <a href="mailto:ndcsdc.ndc@gmail.com" className="text-white hover:underline">ndcsdc.ndc@gmail.com</a></p>
              <p>Host: Notre Dame College</p>
              <p className="text-ink-muted pt-2">Saturday, 14 Nov 2026</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Website Partner Credit (Proposal Benefit #02) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            &copy; {currentYear} NDCSDC, Notre Dame College, Dhaka. All rights reserved.
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
