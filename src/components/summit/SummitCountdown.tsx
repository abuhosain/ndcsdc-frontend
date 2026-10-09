"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { Calendar, Clock, MapPin, Sparkles, ArrowRight } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

interface SummitCountdownProps {
  targetDate?: string;
  eventTitle?: string;
  eventVenue?: string;
  registrationStatus?: string;
}

export default function SummitCountdown({
  targetDate = "2026-11-14T09:00:00+06:00",
  eventTitle = "1st National Academic & Career Summit 2026",
  eventVenue = "Notre Dame College Campus, Dhaka",
  registrationStatus = "OPEN",
}: SummitCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTime = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: "Days", value: timeLeft.days, sub: "দিন" },
    { label: "Hours", value: timeLeft.hours, sub: "ঘণ্টা" },
    { label: "Minutes", value: timeLeft.minutes, sub: "মিনিট" },
    { label: "Seconds", value: timeLeft.seconds, sub: "সেকেন্ড" },
  ];

  return (
    <section className="bg-canvas border-b border-border py-8 sm:py-10">
      <div className="container-custom">
        <div className="bg-ink text-ink-onDark rounded-xl p-6 sm:p-8 lg:p-10 border-2 border-brand/40 shadow-xl relative overflow-hidden">
          
          {/* Ambient decorative glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-bright/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left Info Column */}
            <div className="space-y-3 text-center lg:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand/40 px-3 py-1 rounded-full text-xs font-bold text-brand-bright">
                <span className="w-2 h-2 rounded-full bg-brand-bright animate-ping" />
                <Sparkles className="w-3.5 h-3.5" />
                <span>Live Event Countdown</span>
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-white">
                Countdown to {eventTitle.includes("NACS") ? "NACS 2026" : "Summit 2026"}
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                The countdown is on for the largest college career and higher education summit in Bangladesh. Secure your track registration before slots fill up!
              </p>

              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-neutral-300 font-mono">
                <span className="inline-flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                  <Calendar className="w-3.5 h-3.5 text-brand-bright" />
                  <span>14 November 2026</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-brand-bright" />
                  <span>{eventVenue}</span>
                </span>
              </div>
            </div>

            {/* Right Countdown Boxes */}
            <div className="flex flex-col items-center gap-4">
              <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
                {units.map((unit, idx) => (
                  <div
                    key={idx}
                    className="bg-neutral-900/90 border border-white/15 rounded-lg p-3 sm:p-4 text-center min-w-[65px] sm:min-w-[85px] backdrop-blur-sm shadow-inner"
                  >
                    <div className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
                      {mounted
                        ? String(unit.value).padStart(2, "0")
                        : "--"}
                    </div>
                    <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-bright mt-0.5">
                      {unit.label}
                    </div>
                    <div className="text-[9px] text-neutral-400 font-sans hidden sm:block">
                      {unit.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="w-full flex justify-center lg:justify-end">
                <Link
                  href="/summit/register"
                  className="btn-primary w-full sm:w-auto text-center text-xs uppercase tracking-wider py-2.5 px-7 font-bold inline-flex items-center justify-center gap-2"
                >
                  <span>Register Free Pass</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
