"use server";

import { login } from "@/services/auth";
import type { LoginPayload } from "@/types/auth";

export async function loginAction(payload: LoginPayload) {
  return login(payload);
}
