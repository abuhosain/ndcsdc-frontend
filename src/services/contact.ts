import { postPublic } from "@/utils/api/post";
import { contactEndpoints } from "@/utils/endpoints/endpoints";
import type { ApiEnvelope } from "@/types/auth";

export interface ContactMessagePayload {
  name: string;
  email?: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface ContactMessageResponse {
  id: string;
  name: string;
  email?: string | null;
  phone?: string | null;
  subject?: string | null;
  message: string;
  createdAt: string;
}

export async function sendContactMessage(payload: ContactMessagePayload) {
  return postPublic<ApiEnvelope<ContactMessageResponse>>(
    contactEndpoints.send,
    payload
  );
}
