import Image from "next/image";
import { formatUserRole, formatDate, getUserDisplayName } from "../utils/formatters";
import { UserPermission, DEFAULT_PERMISSIONS } from "../types/user";

interface UserProfileProps {
  name: string;
  email: string;
  avatarUrl?: string;
  role: "admin" | "user" | "guest";
  lastLogin: Date;
  showPermissions?: boolean;
}

export default function UserProfile({ 
  name, 
  email, 
  avatarUrl, 
  role,
  lastLogin,
  showPermissions = false,
}: UserProfileProps) {
  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800";
      case "user":
        return "bg-blue-100 text-blue-800";
      case "guest":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const displayName = getUserDisplayName(name, email);
  const formattedRole = formatUserRole(role);
  const permissions = DEFAULT_PERMISSIONS[role];

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="relative h-16 w-16 rounded-full overflow-hidden bg-gray-200">
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={`${displayName}'s avatar`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full w-full text-2xl font-semibold text-gray-500">
            {displayName.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {displayName}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{email}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getRoleBadgeColor(role)}`}>
            {formattedRole}
          </span>
          <span className="text-xs text-gray-400">
            Last login: {formatDate(lastLogin)}
          </span>
        </div>
        {showPermissions && permissions && (
          <div className="flex gap-1 mt-2 flex-wrap">
            {permissions.map((permission: UserPermission) => (
              <span
                key={permission}
                className="px-1.5 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300"
              >
                {permission}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
