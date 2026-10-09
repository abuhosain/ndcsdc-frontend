import { Link } from "@/i18n/navigation";
import PageHeader from "@/components/common/PageHeader";
import { getNewsBySlug } from "@/services/common";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let article: any = null;

  try {
    const res = await getNewsBySlug(slug);
    if (res?.data) {
      article = res.data;
    }
  } catch {
    //
  }

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-canvas">
      
      {/* 1. Page Header */}
      <PageHeader
        eyebrow={`Official ${article.category || "Bulletin"}`}
        title={article.title}
        description={article.summary || ""}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: article.title },
        ]}
      />

      {/* 2. Meta Strip */}
      <section className="bg-white border-b border-border py-4">
        <div className="container-custom flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4 text-ink-muted">
            <div className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-4 h-4 text-brand" />
              <span>{article.publishedAt ? new Date(article.publishedAt).toLocaleDateString("en-US", { weekday: "short", month: "long", day: "numeric", year: "numeric" }) : ""}</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Tag className="w-4 h-4 text-brand" />
              <span className="uppercase">{article.category}</span>
            </div>
          </div>

          <Link
            href="/news"
            className="text-xs font-bold text-ink hover:text-brand transition-colors inline-flex items-center gap-1 uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All News</span>
          </Link>
        </div>
      </section>

      {/* 3. Article Content */}
      <section className="section-padding container-custom">
        <div className="max-w-3xl mx-auto bg-white border border-border rounded-lg p-8 sm:p-12 space-y-6 shadow-xs">
          <div className="prose text-sm sm:text-base text-ink leading-relaxed space-y-4">
            <p className="font-semibold text-ink-secondary text-base leading-relaxed">
              {article.summary}
            </p>

            <div className="border-t border-border/60 pt-6 space-y-4 text-ink-secondary">
              <p>
                {article.body || "The Secretariat of Notre Dame Career & Skill Development Club (NDCSDC) issues this formal update for all students, prospective participants, and academic partners."}
              </p>
              <p>
                For further clarification or official correspondence regarding this notice, please reach out to the Secretariat via email at <a href="mailto:ndcsdc.ndc@gmail.com" className="text-brand font-semibold hover:underline">ndcsdc.ndc@gmail.com</a>.
              </p>
            </div>
          </div>

          {/* Share & Actions Footer */}
          <div className="pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-ink-muted">
              Published by NDCSDC Secretariat
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/news"
                className="btn-secondary text-xs uppercase tracking-wider py-2 px-4 font-bold"
              >
                More Announcements
              </Link>
              <Link
                href="/contact"
                className="btn-ghost text-xs uppercase tracking-wider font-bold text-brand"
              >
                Contact Secretariat →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
