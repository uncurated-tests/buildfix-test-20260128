import Image from "next/image";

interface UserProfileProps {
  name: string;
  email: string;
  avatarUrl?: string;
  role: "admin" | "user" | "guest";
  lastLogin: Date;
}

export default function UserProfile({ 
  name, 
  email, 
  avatarUrl, 
  role,
  lastLogin 
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

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="relative h-16 w-16 rounded-full overflow-hidden bg-gray-200">
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={`${name}'s avatar`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full w-full text-2xl font-semibold text-gray-500">
            {name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{email}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getRoleBadgeColor(role)}`}>
            {role}
          </span>
          <span className="text-xs text-gray-400">
            Last login: {formatDate(lastLogin)}
          </span>
        </div>
      </div>
    </div>
  );
}
