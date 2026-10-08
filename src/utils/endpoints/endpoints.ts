const baseURL = process.env.BASE_URL || process.env.NEXT_PUBLIC_API_URL;

export const authEndpoints = {
  signup:  `${baseURL}/auth/signup`,
  login:   `${baseURL}/auth/login`,
  refresh: `${baseURL}/auth/refresh`,
  logout:  `${baseURL}/auth/logout`,
};

export const userEndpoints = {
  me:            `${baseURL}/user/me`,
  updateProfile: `${baseURL}/user/me`,
  updatePassword:`${baseURL}/user/change-password`,
};

export const mediaEndpoints = {
  upload: `${baseURL}/media/upload`,
  delete: `${baseURL}/media`,
};

// ── Add more domain-specific endpoint groups below ──
// export const orderEndpoints = { ... };
// export const productEndpoints = { ... };
