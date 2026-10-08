import { Link } from "@/i18n/navigation";

export default function CtaBanner() {
  return (
    <section className="bg-ink text-ink-onDark red-top-bar py-16 sm:py-20">
      <div className="container-custom text-center max-w-2xl mx-auto space-y-6">
        
        <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-bright">
          NACS 2026 Registration
        </span>

        <h2 className="font-display font-extrabold text-3xl sm:text-4xl uppercase text-white tracking-tight leading-tight">
          Secure Your Seat at <br />
          1st National Academic Career Summit
        </h2>

        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
          Saturday, 14 November 2026 at Notre Dame College, Dhaka. Attend 4 specialized track seminars, take part in timed mock exams, and receive your official certificate.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/summit/register"
            className="w-full sm:w-auto btn-primary text-sm uppercase tracking-wider py-3.5 px-8 font-bold"
          >
            Register for Free
          </Link>
          <Link
            href="/summit"
            className="w-full sm:w-auto btn-on-dark text-sm uppercase tracking-wider py-3.5 px-8 font-bold"
          >
            View Schedule & Tracks
          </Link>
        </div>

      </div>
    </section>
  );
}
