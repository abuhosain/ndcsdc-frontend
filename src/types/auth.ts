export type UserRole = "user" | "admin" | "moderator" | (string & {});

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type SignupPayload = {
  name: string;
  email: string;
  password: string;
};

export type ApiEnvelope<T> = {
  data: T;
};

export type GenericMessageResponseData = {
  message: string;
};

export type AuthMe = {
  _id: string;
  name?: string;
  email: string;
  role?: UserRole;
  photo?: string | null;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
