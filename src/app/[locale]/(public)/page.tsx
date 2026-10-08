import { Link } from "@/i18n/navigation";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding border-b border-gray-100">
        <div className="container text-center">
          <div className="animate-fadeInUp max-w-3xl mx-auto">
            <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold text-brand-600 bg-brand-50 rounded-full tracking-wide uppercase">
              Customer Portal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              Manage everything{" "}
              <span className="text-brand-600">in one place</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl mx-auto">
              A modern, fast, and secure customer portal. Sign in to access your
              account, view orders, and manage your profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login" className="btn-primary text-base px-8 py-3.5 rounded-xl">
                Sign In
              </Link>
              <Link href="/signup" className="btn-secondary text-base px-8 py-3.5 rounded-xl">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-14 animate-fadeInUp">
            <h2 className="section-title mb-3">Everything you need</h2>
            <p className="page-subtitle mx-auto">
              Built on solid architecture so you can focus on your product, not infrastructure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="card card-hover p-6 animate-fadeInUp"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4 text-xl">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="section-title mb-4">Ready to get started?</h2>
          <p className="page-subtitle mx-auto mb-8">
            Create your account in seconds and start managing your portal today.
          </p>
          <Link href="/signup" className="btn-primary text-base px-8 py-3.5 rounded-xl">
            Get started for free
          </Link>
        </div>
      </section>
    </div>
  );
}

const FEATURES = [
  {
    icon: "🔐",
    title: "Secure Authentication",
    description:
      "HTTP-only cookie auth with silent token refresh. Session handled entirely server-side.",
  },
  {
    icon: "⚡",
    title: "Server Components",
    description:
      "Next.js App Router with React Server Components for fast, zero-JS-overhead pages.",
  },
  {
    icon: "🌍",
    title: "i18n Ready",
    description:
      "next-intl wired in from day one. Add a new locale by dropping a JSON file.",
  },
  {
    icon: "🎨",
    title: "Design System",
    description:
      "Tailwind CSS with a generic brand token palette — swap one variable to re-theme.",
  },
  {
    icon: "📡",
    title: "Layered API Client",
    description:
      "Public, private, and third-party fetch helpers with auto token refresh on 401.",
  },
  {
    icon: "🛡️",
    title: "Route Guards",
    description:
      "AuthGuard Server Component protects private routes and redirects on session expiry.",
  },
];
