import { Link } from "react-router-dom";
import { getFeaturedProjects } from "@/data/projects";
import { services } from "@/data/services";
import { sectors } from "@/data/sectors";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Smaci Ltd
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Structural and groundworks contractor based in London
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-gray-600">
            Smaci Ltd delivers practical construction support across structural,
            groundworks, enabling, and project-led packages with a strong focus
            on delivery, quality, and reliability.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
            >
              View Projects
            </Link>
            <Link
              to="/about"
              className="inline-flex border border-black px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
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

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Services
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">What we do</h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                  Service
                </p>
                <h3 className="mb-4 text-3xl font-bold">{service.title}</h3>
                <p className="text-lg leading-8 text-gray-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
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
              <article
                key={project.id}
                className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <p className="text-sm text-red-600">{project.sector}</p>
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

                <h3 className="mb-4 text-3xl font-bold leading-tight">
                  {project.name}
                </h3>

                <p className="mb-1 text-lg text-gray-500">{project.location}</p>
                <p className="mb-6 text-lg text-gray-500">{project.year}</p>

                <p className="mb-8 text-lg leading-8 text-gray-600">
                  {project.shortDescription}
                </p>

                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-block text-base font-semibold underline underline-offset-4 transition hover:text-red-600"
                >
                  View project
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-section" className="bg-[#f6f6f6]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Contact
          </p>

          <h2 className="max-w-4xl text-4xl font-bold md:text-6xl">
            Ready to discuss your next project?
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            We are building the full branded experience step by step. For now,
            you can continue through the project and about sections, or move to
            the contact page scaffold.
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
      </section>
    </div>
  );
}