import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <p className="text-7xl font-bold text-brand-600 mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Page not found</h1>
        <p className="text-gray-500 mb-8 max-w-sm mx-auto">
          The page you're looking for may have been moved, renamed, or is no longer available.
        </p>
        <Link href="/" className="btn-primary px-6 py-3 rounded-xl">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
