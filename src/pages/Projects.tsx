import { Link } from "react-router-dom";
import { getProjects } from "@/data/projects";

export default function Projects() {
  const projects = getProjects();

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Projects
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-6xl">
            Our project portfolio
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            This page now gives the portfolio a more realistic contractor
            structure with stronger spacing, status visibility, and clearer
            project detail routing.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:px-10 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm"
            >
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

              <h2 className="mb-4 text-3xl font-bold leading-tight">
                {project.name}
              </h2>

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
          ))}
        </div>
      </section>
    </div>
  );
}