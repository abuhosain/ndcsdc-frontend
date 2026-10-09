import { getPublic } from "@/utils/api/get";
import { summitEndpoints } from "@/utils/endpoints/endpoints";
import type { ApiEnvelope } from "@/types/auth";

export interface SummitTrack {
  id: string;
  name: string;
  stream: string;
  capacity: number;
  hall?: string;
  description?: string;
  sortOrder?: number;
  _count?: {
    registrations: number;
  };
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  hall?: string;
  type?: string;
  sortOrder?: number;
}

export interface FaqItem {
  id: string;
  q: string;
  a: string;
  sortOrder?: number;
}

export async function getSummitTracks() {
  return getPublic<ApiEnvelope<SummitTrack[]>>(summitEndpoints.tracks);
}

export async function getSummitSchedule() {
  return getPublic<ApiEnvelope<ScheduleItem[]>>(summitEndpoints.schedule);
}

export async function getSummitFaqs() {
  return getPublic<ApiEnvelope<FaqItem[]>>(summitEndpoints.faqs);
}
