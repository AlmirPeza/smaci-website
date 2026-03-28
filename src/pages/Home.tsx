import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { StatCard } from "@/components/StatCard";
import { getFeaturedProjects } from "@/data/projects";
import { services } from "@/data/services";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen bg-neutral-100 text-black">
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
          Smaci Ltd
        </p>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          Structural and groundworks contractor based in London
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
          Smaci Ltd delivers practical construction support across structural,
          groundworks, enabling, and project-led packages with a strong focus on
          delivery, quality, and reliability.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild className="bg-black text-white hover:bg-red-600">
            <Link to="/projects">View Projects</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-black bg-transparent text-black hover:bg-black hover:text-white"
          >
            <Link to="/about">About Us</Link>
          </Button>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-3 md:px-10">
          <StatCard value="3" label="Core service areas" />
          <StatCard value="4" label="Target sectors" />
          <StatCard value="London" label="Primary operating area" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Services
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">What we do</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              shortDescription={service.shortDescription}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
                Projects
              </p>
              <h2 className="text-4xl font-bold md:text-5xl">
                Featured project work
              </h2>
            </div>

            <Link
              to="/projects"
              className="text-base font-semibold text-black underline underline-offset-4 transition hover:text-red-600"
            >
              See all projects
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Contact
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Ready to discuss your next project?
          </h2>
          <p className="mt-6 text-xl leading-9 text-gray-600">
            We are building the full branded experience step by step. For now,
            you can continue through the project and about sections, or move to
            the contact page scaffold.
          </p>

          <div className="mt-8">
            <Button asChild className="bg-black text-white hover:bg-red-600">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}