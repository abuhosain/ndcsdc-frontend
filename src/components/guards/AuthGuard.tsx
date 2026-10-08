import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getMe } from "@/services/auth";

type AuthGuardProps = {
  children: ReactNode;
  locale: string;
};

export default async function AuthGuard({ children, locale }: AuthGuardProps) {
  try {
    // privateRequest inside getMe auto-retries on 401 with a token refresh.
    // If the refresh also fails it throws SESSION_EXPIRED.
    await getMe({ persistUserCookie: false });
  } catch {
    redirect(`/api/auth/clear?locale=${locale}`);
  }

  return <>{children}</>;
}
