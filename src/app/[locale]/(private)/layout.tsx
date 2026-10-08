import type { ReactNode } from "react";
import AuthGuard from "@/components/guards/AuthGuard";
import Navbar from "@/components/siteSettings/navbar/Navbar";
import Footer from "@/components/siteSettings/footer/Footer";

export default async function PrivateLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <AuthGuard locale={locale}>
      <Navbar />
      <main className="min-h-[calc(100vh-64px)]">{children}</main>
      <Footer />
    </AuthGuard>
  );
}
