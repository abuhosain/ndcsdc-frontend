"use client";

import { useState, useRef, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavGroup {
  label: string;
  isSummit?: boolean;
  href?: string;
  items?: { label: string; href: string; description?: string }[];
}

const NAV_STRUCTURE: NavGroup[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    items: [
      { label: "About Us", href: "/about", description: "Our story, mission, Notre Dame heritage & moderator note" },
      { label: "Achievements & Impact", href: "/achievements", description: "Quantified reach, milestones & student testimonials" },
    ],
  },
  {
    label: "Panels",
    items: [
      { label: "Executive Panel", href: "/panel/executive", description: "Club moderator & governing executive committee" },
      { label: "Sub-Executive Panel", href: "/panel/sub-executive", description: "Wing coordinators across logistics, media & ops" },
    ],
  },
  {
    label: "Events",
    items: [
      { label: "Upcoming Events", href: "/events/upcoming", description: "Open registrations, masterclasses & workshops" },
      { label: "Past Events & Activities", href: "/events/past", description: "Study fairs, clinics, archives & event outcomes" },
    ],
  },
  {
    label: "Summit",
    href: "/summit",
    isSummit: true,
  },
  {
    label: "Media",
    items: [
      { label: "News & Announcements", href: "/news", description: "Official press releases, notices & result bulletins" },
      { label: "Photo Gallery", href: "/gallery", description: "Moments from sessions, clinics & summit editions" },
    ],
  },
  { label: "Resources", href: "/resources" },
  { label: "Alumni", href: "/alumni" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export default function NavbarClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedMobileGroups, setExpandedMobileGroups] = useState<Record<string, boolean>>({});
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const toggleMobileGroup = (label: string) => {
    setExpandedMobileGroups((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const isGroupActive = (group: NavGroup) => {
    if (group.href) {
      if (group.href === "/") return pathname === "/" || pathname === "/en" || pathname === "/bn";
      return pathname.includes(group.href);
    }
    if (group.items) {
      return group.items.some((item) => pathname.includes(item.href));
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-ink text-ink-onDark red-bottom-bar shadow-md" ref={navRef}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          
          {/* Dual Crest & Club Branding */}
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="flex items-center gap-1.5 bg-surface-1 p-1 rounded-md border border-border/40 shadow-sm">
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
              <span className="text-[10px] text-ink-muted tracking-tight mt-1 hidden sm:block">
                Notre Dame Career & Skill Development Club
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main Navigation">
            {NAV_STRUCTURE.map((group) => {
              const active = isGroupActive(group);

              if (group.items) {
                const isOpen = openDropdown === group.label;
                return (
                  <div key={group.label} className="relative group">
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : group.label)}
                      onMouseEnter={() => setOpenDropdown(group.label)}
                      className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                        active
                          ? "text-white bg-white/10"
                          : "text-neutral-300 hover:text-white hover:bg-white/5"
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span>{group.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                      <div
                        onMouseLeave={() => setOpenDropdown(null)}
                        className="absolute top-full left-0 mt-1 w-64 bg-ink border border-neutral-800 rounded-lg shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                      >
                        {group.items.map((item) => {
                          const itemActive = pathname.includes(item.href);
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`block px-4 py-2.5 transition-colors ${
                                itemActive
                                  ? "bg-white/10 text-white font-semibold"
                                  : "text-neutral-300 hover:text-white hover:bg-white/5"
                              }`}
                            >
                              <div className="text-xs font-medium text-white">{item.label}</div>
                              {item.description && (
                                <div className="text-[10px] text-neutral-400 leading-tight mt-0.5 line-clamp-1">
                                  {item.description}
                                </div>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              // Single Link
              return (
                <Link
                  key={group.label}
                  href={group.href || "/"}
                  className={`relative px-3 py-2 text-xs font-semibold rounded-md transition-colors ${
                    active
                      ? "text-white bg-white/10"
                      : group.isSummit
                      ? "text-white font-bold hover:bg-white/5"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {group.label}
                    {group.isSummit && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block animate-pulse" title="Featured Event" />
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Understated Register Button (Shown when open) */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/summit/register"
              className="btn-primary text-xs uppercase tracking-wider py-2 px-4 font-bold"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-neutral-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-ink border-t border-neutral-800 px-5 py-6 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
          {NAV_STRUCTURE.map((group) => {
            if (group.items) {
              const isExpanded = !!expandedMobileGroups[group.label];
              const active = isGroupActive(group);
              return (
                <div key={group.label} className="border-b border-neutral-800/60 pb-2">
                  <button
                    onClick={() => toggleMobileGroup(group.label)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                      active ? "text-brand-bright" : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    <span>{group.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                  </button>

                  {isExpanded && (
                    <div className="pl-4 pr-2 py-1 space-y-1 mt-1 border-l-2 border-neutral-800">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 text-xs text-neutral-300 hover:text-white rounded hover:bg-white/5 transition-colors"
                        >
                          <div className="font-semibold text-neutral-200">{item.label}</div>
                          {item.description && (
                            <div className="text-[10px] text-neutral-400 mt-0.5">{item.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            const active = isGroupActive(group);
            return (
              <div key={group.label} className="border-b border-neutral-800/60 pb-2">
                <Link
                  href={group.href || "/"}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                    active
                      ? "bg-brand text-white"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {group.label}
                    {group.isSummit && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-bright inline-block" />
                    )}
                  </span>
                </Link>
              </div>
            );
          })}

          <div className="pt-4">
            <Link
              href="/summit/register"
              onClick={() => setMobileMenuOpen(false)}
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
