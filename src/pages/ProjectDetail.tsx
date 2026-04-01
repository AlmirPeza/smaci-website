import { Link, Navigate, useParams } from "react-router-dom";

import { getProjectBySlug, projects } from "@/data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug || "");

  if (!project) {
    return <Navigate to="/not-found" replace />;
  }

  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  return (
    <div className="bg-white text-black">
      <section className="relative overflow-hidden border-b border-black/10">
        <div className="absolute inset-0">
          <img
            src={project.heroImage}
            alt={project.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Link
            to="/projects"
            className="inline-block text-sm font-semibold uppercase tracking-[0.25em] text-white/80 transition hover:text-white"
          >
            Back to projects
          </Link>

          <div className="mt-8 max-w-5xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
              {project.sector}
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              {project.name}
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-white/85">
              {project.longDescription}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                  Location
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  {project.location}
                </p>
              </div>

              <div className="border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                  Year
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  {project.year}
                </p>
              </div>

              <div className="border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                  Project value
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  {project.value}
                </p>
              </div>

              <div className="border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                  Status
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  {project.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
              Overview
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Project summary
            </h2>

            <p className="mt-8 text-xl leading-9 text-gray-600">
              {project.longDescription}
            </p>

            <div className="mt-14">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
                Key outcomes
              </p>

              <div className="space-y-4">
                {project.keyOutcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="border border-black/10 bg-[#f5f5f5] p-5"
                  >
                    <p className="text-lg leading-8 text-gray-700">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside>
            <div className="border border-black/10 bg-[#f5f5f5] p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
                Services
              </p>

              <h3 className="text-2xl font-bold">Our involvement</h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="mt-10 border-t border-black/10 pt-10">
                <p className="text-lg leading-8 text-gray-600">
                  This detail page is structured to feel like a professional case
                  study page for a contractor website, with enough space later to
                  add more client-facing content if needed.
                </p>

                <Link
                  to="/contact"
                  className="mt-8 inline-block border border-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-black hover:text-white"
                >
                  Discuss a project
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
              More work
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Related projects
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {relatedProjects.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-black/10 bg-white p-8"
              >
                <p className="text-sm font-medium text-red-600">{item.sector}</p>

                <h3 className="mt-4 text-2xl font-bold leading-tight">
                  {item.name}
                </h3>

                <p className="mt-4 text-base text-gray-500">{item.location}</p>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {item.shortDescription}
                </p>

                <Link
                  to={`/projects/${item.slug}`}
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