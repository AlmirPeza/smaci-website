import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { StatCard } from "@/components/StatCard";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const featuredServices = services.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Smaci Ltd
          </p>

          <h1 className="max-w-5xl text-6xl font-bold leading-none tracking-tight md:text-8xl">
            Structural and groundworks contractor based in London
          </h1>

          <p className="mt-12 max-w-4xl text-2xl leading-10 text-gray-600">
            Smaci Ltd delivers practical construction support across structural,
            groundworks, enabling, and project-led packages with a strong focus
            on delivery, quality, and reliability.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center border border-black bg-black px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-600 hover:border-red-600"
            >
              View Projects
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center border border-black px-8 py-4 text-lg font-semibold text-black transition hover:bg-black hover:text-white"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-3 lg:px-8">
          <StatCard value="3" label="Core service areas" />
          <StatCard value="4" label="Target sectors" />
          <StatCard value="London" label="Primary operating area" />
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Services
          </p>

          <h2 className="mb-16 text-5xl font-bold md:text-6xl">
            What we do
          </h2>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-16 flex items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
                Projects
              </p>
              <h2 className="text-5xl font-bold md:text-6xl">
                Featured project work
              </h2>
            </div>

            <Link
              to="/projects"
              className="hidden text-base font-semibold text-black underline underline-offset-4 transition hover:text-red-600 md:inline-block"
            >
              See all projects
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact-section">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Contact
          </p>

          <h2 className="max-w-4xl text-5xl font-bold md:text-6xl">
            Ready to discuss your next project?
          </h2>

          <p className="mt-8 max-w-4xl text-2xl leading-10 text-gray-600">
            We are building the full branded experience step by step. For now,
            you can continue through the project and about sections, or move to
            the contact page scaffold.
          </p>

          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center border border-black bg-black px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-600 hover:border-red-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}