import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Minimal auth header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container h-14 flex items-center">
          <Link href="/" className="text-base font-bold text-gray-900">
            MyPortal
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        {children}
      </main>

      <footer className="border-t border-gray-200 bg-white py-4">
        <p className="text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} MyPortal. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
