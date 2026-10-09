import { getPublic } from "@/utils/api/get";
import { postPublic } from "@/utils/api/post";
import {
  teamEndpoints,
  partnerEndpoints,
  settingsEndpoints,
  galleryEndpoints,
  achievementEndpoints,
  newsEndpoints,
  resourceEndpoints,
  alumniEndpoints,
  activityEndpoints,
} from "@/utils/endpoints/endpoints";
import type { ApiEnvelope } from "@/types/auth";

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  panelType: "EXECUTIVE" | "SUB_EXECUTIVE";
  wing?: string | null;
  batch?: string | null;
  department?: string | null;
  bio?: string | null;
  phone?: string | null;
  email?: string | null;
  facebookUrl?: string | null;
  linkedinUrl?: string | null;
  photoUrl?: string | null;
  panelYear?: string;
  isModerator?: boolean;
  isVisible?: boolean;
  sortOrder?: number;
}

export interface PartnerItem {
  id: string;
  name: string;
  tier: "WEBSITE" | "TITLE" | "GOLD" | "SILVER" | "SUPPORT" | string;
  logoUrl?: string | null;
  websiteUrl?: string | null;
  isProtected?: boolean;
  sortOrder?: number;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  url?: string;
  imageUrl?: string;
  category?: string;
  caption?: string | null;
  items?: Array<{ id: string; url: string; caption?: string }>;
}

export interface AchievementItem {
  id: string;
  year: string;
  title: string;
  description: string;
  metric: string;
  category: string;
  sortOrder: number;
}

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  category: "Announcement" | "Notice" | "Result" | "Press" | string;
  summary: string;
  body?: string | null;
  coverUrl?: string | null;
  isPinned?: boolean;
  publishedAt: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  type: string;
  url?: string | null;
  fileUrl?: string | null;
  description: string;
  deadline?: string | null;
  sortOrder?: number;
}

export interface AlumniItem {
  id: string;
  fullName: string;
  batch: string;
  currentInstitution: string;
  currentRole?: string | null;
  quote?: string | null;
  photoUrl?: string | null;
  linkedinUrl?: string | null;
  isFeatured?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  isUpcoming: boolean;
  eventStatus?: "OPEN" | "CLOSING_SOON" | "FULL" | "CLOSED" | string;
  venue?: string | null;
  date?: string | null;
  endDate?: string | null;
  coverUrl?: string | null;
  summary?: string | null;
  body?: string | null;
  registrationUrl?: string | null;
  outcomeMetrics?: string | null;
  albums?: Array<{ id: string; title: string; items: Array<{ id: string; url: string; caption?: string }> }>;
}

export interface SiteSettings {
  club_name?: string;
  short_name?: string;
  tagline?: string;
  established_year?: string;
  college_name?: string;
  email?: string;
  phone?: string;
  office_hours?: string;
  address?: string;
  campus_directions?: string;
  google_maps_url?: string;
  event_title?: string;
  event_date?: string;
  event_venue?: string;
  registration_status?: string;
  website_partner_name?: string;
  website_partner_url?: string;
  website_partner_logo?: string;
  [key: string]: string | undefined;
}

export async function getTeamMembers(filters?: { panelType?: "EXECUTIVE" | "SUB_EXECUTIVE"; panelYear?: string }) {
  const params = new URLSearchParams();
  if (filters?.panelType) params.append("panelType", filters.panelType);
  if (filters?.panelYear) params.append("panelYear", filters.panelYear);
  const url = `${teamEndpoints.list}${params.toString() ? `?${params.toString()}` : ""}`;
  return getPublic<ApiEnvelope<TeamMember[]>>(url);
}

export async function getPartners() {
  return getPublic<ApiEnvelope<PartnerItem[]>>(partnerEndpoints.list);
}

export async function getGallery() {
  return getPublic<ApiEnvelope<GalleryPhoto[]>>(galleryEndpoints.list);
}

export async function getSiteSettings() {
  return getPublic<ApiEnvelope<SiteSettings>>(settingsEndpoints.get);
}

export async function getAchievements() {
  return getPublic<ApiEnvelope<AchievementItem[]>>(achievementEndpoints.list);
}

export async function getNews(category?: string) {
  const url = category && category !== "ALL" ? `${newsEndpoints.list}?category=${encodeURIComponent(category)}` : newsEndpoints.list;
  return getPublic<ApiEnvelope<NewsItem[]>>(url);
}

export async function getNewsBySlug(slug: string) {
  return getPublic<ApiEnvelope<NewsItem>>(newsEndpoints.getBySlug(slug));
}

export async function getResources(filters?: { category?: string; type?: string; search?: string }) {
  const params = new URLSearchParams();
  if (filters?.category && filters.category !== "ALL") params.append("category", filters.category);
  if (filters?.type && filters.type !== "ALL") params.append("type", filters.type);
  if (filters?.search) params.append("search", filters.search);
  const url = `${resourceEndpoints.list}${params.toString() ? `?${params.toString()}` : ""}`;
  return getPublic<ApiEnvelope<ResourceItem[]>>(url);
}

export async function getAlumni() {
  return getPublic<ApiEnvelope<AlumniItem[]>>(alumniEndpoints.list);
}

export async function joinAlumniNetwork(payload: {
  fullName: string;
  batch: string;
  currentInstitution: string;
  currentRole?: string;
  email?: string;
  phone?: string;
  linkedinUrl?: string;
  quote?: string;
  consentPublish?: boolean;
}) {
  return postPublic<ApiEnvelope<any>>(alumniEndpoints.join, payload);
}

export async function getEvents(filters?: { isUpcoming?: boolean; category?: string; year?: string }) {
  const params = new URLSearchParams();
  if (typeof filters?.isUpcoming === "boolean") params.append("isUpcoming", String(filters.isUpcoming));
  if (filters?.category && filters.category !== "ALL") params.append("category", filters.category);
  if (filters?.year && filters.year !== "ALL") params.append("year", filters.year);
  const url = `${activityEndpoints.list}${params.toString() ? `?${params.toString()}` : ""}`;
  return getPublic<ApiEnvelope<EventItem[]>>(url);
}

export async function getEventBySlug(slug: string) {
  return getPublic<ApiEnvelope<EventItem>>(activityEndpoints.getBySlug(slug));
}
