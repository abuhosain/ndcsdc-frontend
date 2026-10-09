"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { settingsEndpoints } from "@/utils/endpoints/endpoints";

// Custom Crisp Brand SVG Icons
function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

interface SiteSettingsData {
  club_name?: string;
  email?: string;
  phone?: string;
  address?: string;
  facebook_url?: string;
  instagram_url?: string;
  linkedin_url?: string;
  youtube_url?: string;
  whatsapp_number?: string;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [settings, setSettings] = useState<SiteSettingsData>({
    email: "ndcsdc.ndc@gmail.com",
    address: "Notre Dame College Campus, Toyenbee Circular Rd, Motijheel, Dhaka 1000",
    facebook_url: "https://facebook.com/ndcsdc",
    instagram_url: "https://instagram.com/ndcsdc",
    linkedin_url: "https://linkedin.com/company/ndcsdc",
    youtube_url: "https://youtube.com/@ndcsdc",
    whatsapp_number: "+8801700000000",
  });

  useEffect(() => {
    async function fetchSettings() {
      try {
        const res = await fetch(settingsEndpoints.get);
        if (res.ok) {
          const json = await res.json();
          if (json.data) {
            setSettings((prev) => ({
              ...prev,
              ...json.data,
            }));
          }
        }
      } catch {
        // Safe fallback
      }
    }
    fetchSettings();
  }, []);

  const getWhatsAppLink = (input?: string) => {
    if (!input) return "https://wa.me/8801700000000";
    if (input.startsWith("http")) return input;
    const cleanNumber = input.replace(/[^0-9]/g, "");
    return `https://wa.me/${cleanNumber}`;
  };

  const socialChannels = [
    {
      name: "Facebook",
      href: settings.facebook_url || "https://facebook.com/ndcsdc",
      icon: FacebookIcon,
      hoverClass: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
    },
    {
      name: "Instagram",
      href: settings.instagram_url || "https://instagram.com/ndcsdc",
      icon: InstagramIcon,
      hoverClass: "hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white hover:border-transparent",
    },
    {
      name: "LinkedIn",
      href: settings.linkedin_url || "https://linkedin.com/company/ndcsdc",
      icon: LinkedInIcon,
      hoverClass: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]",
    },
    {
      name: "YouTube",
      href: settings.youtube_url || "https://youtube.com/@ndcsdc",
      icon: YouTubeIcon,
      hoverClass: "hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]",
    },
    {
      name: "WhatsApp",
      href: getWhatsAppLink(settings.whatsapp_number),
      icon: WhatsAppIcon,
      hoverClass: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]",
    },
  ];

  return (
    <footer className="bg-ink text-ink-onDark red-top-bar">
      <div className="container-custom py-8 sm:py-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-6 sm:pb-8 border-b border-neutral-800">
          
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 flex items-center justify-center bg-white rounded-md p-1 border border-border/40 shadow-sm shrink-0 overflow-hidden">
                <Image
                  src="/logos/ndcsdc-logo.jpeg"
                  alt="NDCSDC Seal"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <span className="font-display font-black text-base tracking-wider text-white">
                NDCSDC
              </span>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed max-w-sm">
              Notre Dame Career & Skill Development Club (NDCSDC), Notre Dame College, Dhaka. Founded in 2025 to empower students with career clarity, admission masterclasses, and professional leadership.
            </p>

            <div className="pt-1 text-[11px] text-neutral-400 space-y-1">
              <div>{settings.address || "Notre Dame College Campus, Toyenbee Circular Rd, Motijheel, Dhaka 1000"}</div>
              <div>
                Official Secretariat:{" "}
                <a href={`mailto:${settings.email || "ndcsdc.ndc@gmail.com"}`} className="text-white hover:underline">
                  {settings.email || "ndcsdc.ndc@gmail.com"}
                </a>
              </div>
            </div>

            {/* Social Media Channels Strip */}
            <div className="pt-2">
              <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 mb-2">
                Connect With Us
              </div>
              <div className="flex items-center gap-2">
                {socialChannels.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Follow NDCSDC on ${item.name}`}
                      aria-label={`NDCSDC ${item.name}`}
                      className={`w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-md ${item.hoverClass}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
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
