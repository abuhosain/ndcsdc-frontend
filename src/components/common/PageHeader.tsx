import { Link } from "@/i18n/navigation";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs = [{ label: "Home", href: "/" }],
}: PageHeaderProps) {
  return (
    <section className="bg-surface-1 border-b border-border py-3.5 sm:py-4.5 lg:py-5">
      <div className="container-custom">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-[10px] text-ink-muted mb-1 font-medium overflow-x-auto no-scrollbar whitespace-nowrap" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <div key={crumb.label} className="flex items-center gap-1.5 shrink-0">
                  {crumb.href && !isLast ? (
                    <Link href={crumb.href} className="hover:text-brand transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-ink font-semibold">{crumb.label}</span>
                  )}
                  {!isLast && <span className="text-ink-muted/40">/</span>}
                </div>
              );
            })}
          </nav>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <span className="block text-[10px] font-bold uppercase tracking-[0.1em] text-brand mb-0.5">
            {eyebrow}
          </span>
        )}

        {/* Title */}
        <h1 className="font-display text-lg sm:text-xl lg:text-2xl font-bold uppercase text-ink tracking-tight leading-snug">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="mt-1 text-xs sm:text-[13px] text-ink-secondary max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
