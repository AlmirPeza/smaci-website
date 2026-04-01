import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "@/data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug ?? "");

  if (!project) {
    return (
      <div className="min-h-screen bg-[#f6f6f6] text-black">
        <div className="mx-auto max-w-5xl px-6 py-24 md:px-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Project
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">Project not found</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            The requested project could not be loaded. Return to the projects
            page and open another case study.
          </p>
          <Link
            to="/projects"
            className="mt-8 inline-flex border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="mb-5 flex flex-wrap items-center gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
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

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-6xl">
            {project.name}
          </h1>

          <div className="mt-8 space-y-2 text-lg text-gray-500">
            <p>{project.location}</p>
            <p>{project.year}</p>
          </div>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-gray-600">
            {project.description}
          </p>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Scope
          </p>

          <div className="grid gap-4">
            {project.scope.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <p className="text-lg leading-8 text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f6f6]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10">
          <Link
            to="/projects"
            className="inline-flex border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Back to projects
          </Link>
        </div>
      </section>
    </div>
  );
}