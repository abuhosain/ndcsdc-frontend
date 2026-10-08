import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "@/app/globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";
import { AppProvider } from "@/contexts/AppContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NDCSDC | Notre Dame Career & Skill Development Club & NACS 2026",
  description:
    "Official website of Notre Dame Career & Skill Development Club (NDCSDC), Notre Dame College, Dhaka. Home of the 1st National Academic Career Summit 2026 (NACS 2026).",
  icons: {
    icon: "/logos/ndcsdc-logo.jpeg",
    apple: "/logos/ndcsdc-logo.jpeg",
  },
  openGraph: {
    title: "NDCSDC & 1st National Academic Career Summit 2026",
    description: "Guidance for IBA, BUET, Medical & Abroad admissions at Notre Dame College, Dhaka.",
    images: ["/logos/ndcsdc-logo.jpeg"],
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-canvas text-ink selection:bg-brand selection:text-white">
        <NextIntlClientProvider messages={messages}>
          <AppProvider>
            {children}
            <Toaster position="top-right" richColors closeButton />
          </AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
