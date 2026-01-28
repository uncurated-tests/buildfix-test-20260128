import { useUserData } from "../hooks/useUserData";

type UserRole = "admin" | "user" | "guest";

const ROLE_DISPLAY_NAMES: Record<UserRole, string> = {
  admin: "Administrator",
  user: "Standard User",
  guest: "Guest Account",
};

export function formatUserRole(role: UserRole): string {
  return ROLE_DISPLAY_NAMES[role] ?? "Unknown";
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateTime(date: Date): string {
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// Utility to get user display info - uses the hook type for consistency
export type UserDataHook = typeof useUserData;

export function getUserDisplayName(name: string, email: string): string {
  return name || email.split("@")[0];
}
