"use server";

import { cookies } from "next/headers";
import { getPrivate, getPublic } from "@/utils/api/get";
import { postPrivate, postPublic } from "@/utils/api/post";
import { authEndpoints, userEndpoints } from "@/utils/endpoints/endpoints";
import type {
  ApiEnvelope,
  AuthMe,
  AuthTokens,
  GenericMessageResponseData,
  LoginPayload,
  SignupPayload,
} from "@/types/auth";

const THIRTY_DAYS_SECONDS = 60 * 60 * 24 * 30;

async function setAuthCookies(tokens: AuthTokens) {
  const cookieStore = await cookies();
  const opts = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: THIRTY_DAYS_SECONDS,
  };
  cookieStore.set("accessToken",  tokens.accessToken,  opts);
  cookieStore.set("refreshToken", tokens.refreshToken, opts);
}

async function setUserCookie(profile: AuthMe) {
  const cookieStore = await cookies();
  const slim: AuthMe = {
    _id:   profile._id,
    name:  profile.name,
    email: profile.email,
    role:  profile.role,
    photo: profile.photo,
  };
  cookieStore.set("user", JSON.stringify(slim), {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: THIRTY_DAYS_SECONDS,
  });
}

export async function clearAuthCookies() {
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
  cookieStore.delete("user");
}

// ── Auth actions ────────────────────────────────────────────────────────────

export async function signup(payload: SignupPayload) {
  const response = await postPublic<ApiEnvelope<AuthTokens>>(
    authEndpoints.signup,
    payload,
  );
  await setAuthCookies(response.data);
  return response;
}

export async function login(payload: LoginPayload) {
  const response = await postPublic<ApiEnvelope<AuthTokens>>(
    authEndpoints.login,
    payload,
  );
  await setAuthCookies(response.data);
  return response;
}

export async function refreshAuth() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken")?.value;

  const response = await getPublic<ApiEnvelope<AuthTokens>>(
    authEndpoints.refresh,
    {
      headers: refreshToken
        ? { Authorization: `Bearer ${refreshToken}`, "x-refresh-token": refreshToken }
        : undefined,
    },
  );
  await setAuthCookies(response.data);
  return response;
}

export async function logout() {
  try {
    await postPrivate<ApiEnvelope<GenericMessageResponseData>>(authEndpoints.logout);
  } finally {
    await clearAuthCookies();
  }
}

// ── User helpers ─────────────────────────────────────────────────────────────

export async function getMe(options?: { persistUserCookie?: boolean }) {
  const response = await getPrivate<ApiEnvelope<AuthMe>>(userEndpoints.me);
  if (options?.persistUserCookie) {
    await setUserCookie(response.data);
  }
  return response;
}

export async function getUserFromCookie(): Promise<AuthMe | null> {
  const cookieStore = await cookies();
  const raw = cookieStore.get("user")?.value;
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AuthMe;
  } catch {
    return null;
  }
}

export async function isAuthenticated() {
  const cookieStore = await cookies();
  return Boolean(cookieStore.get("accessToken")?.value);
}
