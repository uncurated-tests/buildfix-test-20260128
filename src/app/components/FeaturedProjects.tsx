import { getFeaturedProjects } from "../lib/projects";
import ProjectCard from "./ProjectCard";

export default async function FeaturedProjects() {
  const projects = await getFeaturedProjects();

  return (
    <section className="w-full">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Featured Projects
      </h2>
      <div className="grid gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
