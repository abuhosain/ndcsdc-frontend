"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";

export default function CountdownBanner() {
  const targetDate = new Date("2026-11-14T09:00:00+06:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLive: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, isLive: false });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="bg-surface-1 border-b border-border py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Label */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-brand">
              Event Countdown
            </span>
            <h3 className="font-display font-extrabold text-lg sm:text-xl uppercase text-ink">
              Saturday, 14 November 2026
            </h3>
            <p className="text-xs text-ink-secondary">
              Notre Dame College Campus, Motijheel, Dhaka
            </p>
          </div>

          {/* 4 Clean Boxes (05_DESIGN.md §3.11) */}
          <div className="flex items-center gap-3">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINUTES", value: timeLeft.minutes },
              { label: "SECONDS", value: timeLeft.seconds },
            ].map((unit) => (
              <div
                key={unit.label}
                className="flex flex-col items-center justify-center bg-white border border-border rounded-card px-4 py-3 min-w-[70px] sm:min-w-[84px]"
              >
                <span className="font-display font-black text-2xl sm:text-3xl text-brand tabular-nums leading-none">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-bold text-ink-muted uppercase tracking-wider mt-1">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          {/* Register Link */}
          <div>
            <Link
              href="/summit/register"
              className="btn-primary text-xs uppercase tracking-wider py-3 px-6 font-bold"
            >
              Get Free Ticket
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
