import { formatUserRole } from "../utils/formatters";

export const enum UserPermission {
  READ = "read",
  WRITE = "write",
  DELETE = "delete",
  ADMIN = "admin",
}

export interface UserSettings {
  theme: "light" | "dark" | "system";
  notifications: boolean;
  language: string;
}

export interface ExtendedUser {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
  permissions: UserPermission[];
  settings: UserSettings;
  lastLogin: Date;
  formattedRole: ReturnType<typeof formatUserRole>;
}

export const DEFAULT_PERMISSIONS: Record<ExtendedUser["role"], UserPermission[]> = {
  admin: [UserPermission.READ, UserPermission.WRITE, UserPermission.DELETE, UserPermission.ADMIN],
  user: [UserPermission.READ, UserPermission.WRITE],
  guest: [UserPermission.READ],
};
