import { NextRequest, NextResponse } from "next/server";
import { clearAuthCookies } from "@/services/auth";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") ?? "en";

  await clearAuthCookies();

  return NextResponse.redirect(new URL("/login", request.url));
}
