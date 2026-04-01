import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjects } from "@/data/projects";

export default function Projects() {
  const projects = getProjects();

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <Hero
        eyebrow="Projects"
        title="Our project portfolio"
        subtitle="This page now gives the portfolio a more realistic contractor structure with stronger spacing, status visibility, and clearer project detail routing."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:px-10 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}