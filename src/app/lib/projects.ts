import "server-only";

export interface Project {
  id: string;
  title: string;
  description: string;
  stars: number;
  language: string;
  updatedAt: Date;
}

// Fetch featured projects from our API
export async function getFeaturedProjects(): Promise<Project[]> {
  // In production this would be an actual API call
  await new Promise((resolve) => setTimeout(resolve, 50));
  
  return [
    {
      id: "1",
      title: "Next.js Starter",
      description: "A modern starter template for Next.js applications",
      stars: 1240,
      language: "TypeScript",
      updatedAt: new Date("2026-01-15"),
    },
    {
      id: "2", 
      title: "React Components",
      description: "A collection of reusable React components",
      stars: 892,
      language: "TypeScript",
      updatedAt: new Date("2026-01-20"),
    },
    {
      id: "3",
      title: "API Toolkit",
      description: "Tools for building robust REST APIs",
      stars: 567,
      language: "TypeScript", 
      updatedAt: new Date("2026-01-25"),
    },
  ];
}

export function formatProjectDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
