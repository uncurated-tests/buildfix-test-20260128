"use client";

import { useState, useEffect } from "react";
import { ExtendedUser, DEFAULT_PERMISSIONS, UserPermission } from "../types/user";

interface UseUserDataOptions {
  includePermissions?: boolean;
}

interface UseUserDataResult {
  user: ExtendedUser | null;
  isLoading: boolean;
  error: Error | null;
  hasPermission: (permission: UserPermission) => boolean;
}

export function useUserData(
  userId: string,
  options: UseUserDataOptions = {}
): UseUserDataResult {
  const [user, setUser] = useState<ExtendedUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        // Simulated API call
        await new Promise((resolve) => setTimeout(resolve, 100));
        
        const mockUser: ExtendedUser = {
          id: userId,
          name: "John Doe",
          email: "john@example.com",
          role: "admin",
          permissions: options.includePermissions 
            ? DEFAULT_PERMISSIONS["admin"] 
            : [],
          settings: {
            theme: "system",
            notifications: true,
            language: "en",
          },
          lastLogin: new Date(),
          formattedRole: "Administrator",
        };
        
        setUser(mockUser);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [userId, options.includePermissions]);

  const hasPermission = (permission: UserPermission): boolean => {
    if (!user) return false;
    return user.permissions.includes(permission);
  };

  return { user, isLoading, error, hasPermission };
}

export { UserPermission };
