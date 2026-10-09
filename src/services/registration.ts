import { postPublic } from "@/utils/api/post";
import { getPublic } from "@/utils/api/get";
import { registrationEndpoints } from "@/utils/endpoints/endpoints";
import type { ApiEnvelope } from "@/types/auth";

export interface CreateRegistrationPayload {
  fullName: string;
  phone: string;
  email?: string;
  institution: string;
  hscBatch: number;
  group: "SCIENCE" | "COMMERCE" | "ARTS";
  trackId: string;
}

export interface SummitTrackInfo {
  id: string;
  name: string;
  stream: string;
  capacity: number;
  hall?: string;
  description?: string;
}

export interface RegistrationRecord {
  id: string;
  code: string;
  fullName: string;
  phone: string;
  email?: string | null;
  institution: string;
  hscBatch: number;
  group: string;
  trackId: string;
  status: "CONFIRMED" | "CANCELLED";
  createdAt: string;
  track?: SummitTrackInfo;
}

export async function registerSummitAttendee(payload: CreateRegistrationPayload) {
  return postPublic<ApiEnvelope<RegistrationRecord>>(
    registrationEndpoints.register,
    payload
  );
}

export async function verifySummitPass(code: string) {
  return getPublic<ApiEnvelope<RegistrationRecord>>(
    registrationEndpoints.verify(code)
  );
}
