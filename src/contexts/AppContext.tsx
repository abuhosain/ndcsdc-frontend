"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  type ReactNode,
} from "react";
import type { AuthMe } from "@/types/auth";

// ── State ────────────────────────────────────────────────────────────────────

type AppState = {
  user: AuthMe | null;
  isHydrated: boolean;
};

const initialState: AppState = {
  user: null,
  isHydrated: false,
};

// ── Actions ──────────────────────────────────────────────────────────────────

type Action =
  | { type: "SET_USER"; payload: AuthMe }
  | { type: "CLEAR_USER" }
  | { type: "HYDRATE"; payload: AuthMe | null };

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "CLEAR_USER":
      return { ...state, user: null };
    case "HYDRATE":
      return { ...state, user: action.payload, isHydrated: true };
    default:
      return state;
  }
}

// ── Context ──────────────────────────────────────────────────────────────────

type AppContextValue = AppState & {
  setUser: (user: AuthMe) => void;
  clearUser: () => void;
  isLoggedIn: boolean;
};

const AppContext = createContext<AppContextValue | null>(null);

// ── Helpers ──────────────────────────────────────────────────────────────────

function getUserFromCookieClient(): AuthMe | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|; )user=([^;]*)/);
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match[1])) as AuthMe;
  } catch {
    return null;
  }
}

// ── Provider ─────────────────────────────────────────────────────────────────

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Hydrate from cookie on first mount
  useEffect(() => {
    const user = getUserFromCookieClient();
    dispatch({ type: "HYDRATE", payload: user });
  }, []);

  const value: AppContextValue = {
    ...state,
    isLoggedIn: Boolean(state.user),
    setUser: (user) => dispatch({ type: "SET_USER", payload: user }),
    clearUser: () => dispatch({ type: "CLEAR_USER" }),
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// ── Hook ─────────────────────────────────────────────────────────────────────

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
