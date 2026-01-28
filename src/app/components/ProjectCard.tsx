"use client";

import { useState } from "react";
import { type Project, formatProjectDate } from "../lib/projects";

interface ProjectCardProps {
  project: Project;
  onStar?: (projectId: string) => void;
}

export default function ProjectCard({ project, onStar }: ProjectCardProps) {
  const [isStarred, setIsStarred] = useState(false);

  const handleStar = () => {
    setIsStarred(!isStarred);
    onStar?.(project.id);
  };

  return (
    <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h4>
        <button
          onClick={handleStar}
          className={`text-sm px-2 py-1 rounded ${
            isStarred 
              ? "bg-yellow-100 text-yellow-700" 
              : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          {isStarred ? "★" : "☆"} {project.stars + (isStarred ? 1 : 0)}
        </button>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        {project.description}
      </p>
      <div className="flex items-center gap-3 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          {project.language}
        </span>
        <span>Updated {formatProjectDate(project.updatedAt)}</span>
      </div>
    </div>
  );
}
