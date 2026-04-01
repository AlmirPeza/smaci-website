import { Link } from "react-router-dom";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="bg-[#f6f6f6] text-black">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Projects
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-6xl">
            Our project portfolio
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-10 text-gray-600">
            This page presents selected project examples in a cleaner and more
            structured contractor format. It gives the site stronger portfolio
            depth and prepares the layout for future real case studies.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="rounded-2xl border border-black/10 bg-[#f6f6f6] p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-medium text-red-600">
                    {project.sector}
                  </p>

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

                <h2 className="mt-4 text-2xl font-bold leading-tight">
                  {project.name}
                </h2>

                <div className="mt-6 space-y-1 text-lg text-gray-500">
                  <p>{project.location}</p>
                  <p>{project.year}</p>
                </div>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {project.shortDescription}
                </p>

                <Link
                  to={`/projects/${project.slug}`}
                  className="mt-8 inline-block text-base font-semibold text-black underline underline-offset-4 transition hover:text-red-600"
                >
                  View project
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}