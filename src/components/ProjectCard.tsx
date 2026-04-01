import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
      <div className="mb-5 flex items-start justify-between gap-4">
        <p className="text-sm text-red-600">{project.sector}</p>

        <span
          className={`rounded-full px-4 py-1 text-sm font-semibold ${
            project.status === "Completed"
              ? "bg-black text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {project.status}
        </span>
      </div>

      <h3 className="mb-4 text-3xl font-bold leading-tight">{project.name}</h3>

      <div className="mb-6 space-y-1 text-lg text-gray-500">
        <p>{project.location}</p>
        <p>{project.year}</p>
      </div>

      <p className="mb-8 text-lg leading-8 text-gray-600">
        {project.shortDescription}
      </p>

      <Link
        to={`/projects/${project.slug}`}
        className="inline-block text-base font-semibold underline underline-offset-4 transition hover:text-red-600"
      >
        View project
      </Link>
    </article>
  );
};