import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { getFeaturedProjects } from "@/data/projects";
import { services } from "@/data/services";
import { sectors } from "@/data/sectors";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <Hero
        eyebrow="Smaci Ltd"
        title="Structural and groundworks contractor based in London"
        subtitle="Smaci Ltd delivers practical construction support across structural, groundworks, enabling, and project-led packages with a strong focus on delivery, quality, and reliability."
      />

      <section className="border-b border-black/10 bg-[#f6f6f6]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-3 md:px-10">
          <article className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold">{services.length}</h2>
            <p className="mt-3 text-lg text-gray-600">Core service areas</p>
          </article>

          <article className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold">{sectors.length}</h2>
            <p className="mt-3 text-lg text-gray-600">Target sectors</p>
          </article>

          <article className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold">London</h2>
            <p className="mt-3 text-lg text-gray-600">Primary operating area</p>
          </article>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="mb-12 max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Services
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">What we do</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f6f6f6]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
                Projects
              </p>
              <h2 className="text-4xl font-bold md:text-5xl">
                Featured project work
              </h2>
            </div>

            <Link
              to="/projects"
              className="text-base font-semibold underline underline-offset-4 transition hover:text-red-600"
            >
              See all projects
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact-section" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Contact
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">
              Ready to discuss your next project?
            </h2>

            <p className="mt-8 text-xl leading-9 text-gray-600">
              We are building the full branded experience step by step. For now,
              you can continue through the project and about sections, or move
              directly to the contact page scaffold.
            </p>

            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}