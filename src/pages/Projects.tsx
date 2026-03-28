import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen bg-neutral-100 text-black">
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
          Projects
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
          Our project portfolio
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
          This page introduces Smaci’s selected work structure. It will later be
          expanded with fuller project scope, delivery information, and branded
          visual content.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              slug={project.slug}
              name={project.name}
              sector={project.sector}
              location={project.location}
              year={project.year}
              shortDescription={project.shortDescription}
              status={project.status}
            />
          ))}
        </div>
      </section>
    </div>
  );
}