const baseURL =
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.BASE_URL ||
  "http://localhost:8001/api/v1";

export const authEndpoints = {
  signup: `${baseURL}/auth/signup`,
  login: `${baseURL}/auth/login`,
  refresh: `${baseURL}/auth/refresh`,
  logout: `${baseURL}/auth/logout`,
};

export const userEndpoints = {
  me: `${baseURL}/user/me`,
  updateProfile: `${baseURL}/user/me`,
  updatePassword: `${baseURL}/user/change-password`,
};

export const registrationEndpoints = {
  register: `${baseURL}/registrations`,
  verify: (code: string) => `${baseURL}/registrations/verify/${encodeURIComponent(code)}`,
};

export const summitEndpoints = {
  tracks: `${baseURL}/summit/tracks`,
  schedule: `${baseURL}/summit/schedule`,
  faqs: `${baseURL}/summit/faqs`,
};

export const activityEndpoints = {
  list: `${baseURL}/activities`,
  getBySlug: (slug: string) => `${baseURL}/activities/${encodeURIComponent(slug)}`,
};

export const teamEndpoints = {
  list: `${baseURL}/team`,
};

export const partnerEndpoints = {
  list: `${baseURL}/partners`,
};

export const galleryEndpoints = {
  list: `${baseURL}/gallery`,
};

export const achievementEndpoints = {
  list: `${baseURL}/achievements`,
};

export const newsEndpoints = {
  list: `${baseURL}/news`,
  getBySlug: (slug: string) => `${baseURL}/news/article/${encodeURIComponent(slug)}`,
};

export const resourceEndpoints = {
  list: `${baseURL}/resources`,
};

export const alumniEndpoints = {
  list: `${baseURL}/alumni`,
  join: `${baseURL}/alumni/join`,
};

export const contactEndpoints = {
  send: `${baseURL}/contact`,
};

export const settingsEndpoints = {
  get: `${baseURL}/settings`,
};

export const mediaEndpoints = {
  upload: `${baseURL}/media/upload`,
  delete: `${baseURL}/media`,
};
