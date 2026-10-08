import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en"],
  defaultLocale: "en",
  // "as-needed" omits the locale prefix for the default locale (/en → /)
  localePrefix: "as-needed",
});
