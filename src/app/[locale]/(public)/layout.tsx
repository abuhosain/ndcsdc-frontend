import type { ReactNode } from "react";
import Navbar from "@/components/siteSettings/navbar/Navbar";
import Footer from "@/components/siteSettings/footer/Footer";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-64px)]">{children}</main>
      <Footer />
    </>
  );
}
