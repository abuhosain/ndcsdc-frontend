import { getPublic } from "@/utils/api/get";
import { activityEndpoints } from "@/utils/endpoints/endpoints";
import type { ApiEnvelope } from "@/types/auth";

export interface ActivityItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  content: string;
  featuredImage?: string;
  eventDate?: string;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  createdAt: string;
}

export async function getActivities(params?: { category?: string; search?: string }) {
  const queryParams = new URLSearchParams();
  if (params?.category) queryParams.set("category", params.category);
  if (params?.search) queryParams.set("search", params.search);

  const url = `${activityEndpoints.list}${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
  return getPublic<ApiEnvelope<ActivityItem[]>>(url);
}

export async function getActivityBySlug(slug: string) {
  return getPublic<ApiEnvelope<ActivityItem>>(activityEndpoints.getBySlug(slug));
}
