import { Link, useParams } from "react-router-dom";
import { Hero } from "@/components/Hero";
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
      <Hero
        eyebrow={project.sector}
        title={project.name}
        subtitle={project.description}
      />

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10">
          <div className="mb-10 space-y-2 text-lg text-gray-500">
            <p>{project.location}</p>
            <p>{project.year}</p>
            <p>{project.status}</p>
          </div>

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