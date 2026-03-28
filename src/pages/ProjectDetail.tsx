import { Link, Navigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjectBySlug, projects } from "@/data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug || "");

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-neutral-100 text-black">
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <Link
          to="/projects"
          className="mb-8 inline-flex text-sm font-semibold uppercase tracking-[0.2em] text-red-600 transition hover:text-black"
        >
          Back to projects
        </Link>

        <div className="max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            {project.sector}
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            {project.name}
          </h1>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500">
            <span>{project.location}</span>
            <span>•</span>
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.status}</span>
          </div>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            {project.longDescription}
          </p>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Project summary</h2>
              <p className="text-lg leading-8 text-gray-600">
                This detail page is part of the main route system and is designed
                to evolve into a fuller case-study format with images, scope,
                outcomes, and delivery notes.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 p-7">
              <h3 className="mb-4 text-2xl font-bold">Key information</h3>
              <ul className="space-y-3 text-lg text-gray-600">
                <li>
                  <span className="font-semibold text-black">Sector:</span>{" "}
                  {project.sector}
                </li>
                <li>
                  <span className="font-semibold text-black">Location:</span>{" "}
                  {project.location}
                </li>
                <li>
                  <span className="font-semibold text-black">Year:</span>{" "}
                  {project.year}
                </li>
                <li>
                  <span className="font-semibold text-black">Status:</span>{" "}
                  {project.status}
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <Button asChild className="bg-black text-white hover:bg-red-600">
              <Link to="/contact">Discuss a similar project</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            More projects
          </p>
          <h2 className="text-4xl font-bold">Related project entries</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {relatedProjects.map((item) => (
            <ProjectCard
              key={item.id}
              slug={item.slug}
              name={item.name}
              sector={item.sector}
              location={item.location}
              year={item.year}
              shortDescription={item.shortDescription}
              status={item.status}
            />
          ))}
        </div>
      </section>
    </div>
  );
}