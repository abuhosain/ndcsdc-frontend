"use server";

import { signup } from "@/services/auth";
import type { SignupPayload } from "@/types/auth";

export async function signupAction(payload: SignupPayload) {
  return signup(payload);
}
