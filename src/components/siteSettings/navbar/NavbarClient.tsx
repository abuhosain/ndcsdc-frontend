"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Summit", href: "/summit" },
  { label: "Activities", href: "/activities" },
  { label: "Team", href: "/team" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export default function NavbarClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-ink text-ink-onDark red-bottom-bar shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          
          {/* Dual Crest & Club Branding */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group shrink-0"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex items-center gap-2 bg-surface-1 p-1 rounded-md border border-border/50">
              <div className="relative w-8 h-8 flex items-center justify-center bg-white rounded-sm overflow-hidden">
                <Image
                  src="/logos/ndc-college-logo.jpeg"
                  alt="Notre Dame College Crest"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
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
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base tracking-wider uppercase text-white leading-none">
                NDCSDC
              </span>
              <span className="text-[11px] text-ink-muted tracking-tight mt-1 hidden sm:block">
                Notre Dame Career & Skill Development Club
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-semibold transition-colors rounded-md ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Register Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/summit/register"
              className="btn-primary text-xs uppercase tracking-wider py-2.5 px-5 font-bold"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-ink border-t border-neutral-800 px-5 py-6 space-y-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-semibold rounded-md transition-colors ${
                  isActive
                    ? "bg-brand text-white"
                    : "text-neutral-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-neutral-800">
            <Link
              href="/summit/register"
              onClick={() => setMenuOpen(false)}
              className="w-full btn-primary text-center block text-xs uppercase tracking-wider py-3 font-bold"
            >
              Register for Summit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
