export interface Project {
  id: string;
  title: string;
  description: string;
  stars: number;
  language: string;
  updatedAt: Date;
}

export function formatProjectDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
