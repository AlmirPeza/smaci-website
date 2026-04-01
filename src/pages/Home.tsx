import { Link } from "react-router-dom";

import { getFeaturedProjects } from "@/data/projects";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="bg-[#f6f6f6] text-black">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Smaci Ltd
          </p>

          <h1 className="max-w-6xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Structural and groundworks contractor based in London
          </h1>

          <p className="mt-10 max-w-4xl text-xl leading-10 text-gray-600">
            Smaci Ltd delivers practical construction support across structural,
            groundworks, enabling, and project-led packages with a strong focus
            on delivery, quality, and reliability.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="border border-black bg-black px-8 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-black"
            >
              View Projects
            </Link>

            <Link
              to="/about"
              className="border border-black px-8 py-4 text-base font-semibold text-black transition hover:bg-black hover:text-white"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-3 lg:px-8">
          <div className="rounded-2xl border border-black/10 p-8">
            <p className="text-5xl font-bold">3</p>
            <p className="mt-4 text-xl text-gray-600">Core service areas</p>
          </div>

          <div className="rounded-2xl border border-black/10 p-8">
            <p className="text-5xl font-bold">4</p>
            <p className="mt-4 text-xl text-gray-600">Target sectors</p>
          </div>

          <div className="rounded-2xl border border-black/10 p-8">
            <p className="text-5xl font-bold">London</p>
            <p className="mt-4 text-xl text-gray-600">Primary operating area</p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Projects
          </p>

          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Featured project work
            </h2>

            <Link
              to="/projects"
              className="hidden text-base font-semibold text-black underline underline-offset-4 transition hover:text-red-600 md:inline-block"
            >
              See all projects
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="rounded-2xl border border-black/10 bg-white p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-medium text-red-600">
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

                <h3 className="mt-4 text-2xl font-bold leading-tight">
                  {project.name}
                </h3>

                <p className="mt-6 text-lg text-gray-500">{project.location}</p>
                <p className="mt-2 text-lg text-gray-500">{project.year}</p>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {project.shortDescription}
                </p>

                <Link
                  to={`/projects/${project.slug}`}
                  className="mt-8 inline-block text-base font-semibold text-black underline underline-offset-4 transition hover:text-red-600"
                >
                  View project
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-section" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Contact
          </p>

          <h2 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            Ready to discuss your next project?
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-10 text-gray-600">
            We are building the full branded experience step by step. For now,
            you can continue through the project and about sections, or move to
            the contact page scaffold.
          </p>

          <Link
            to="/contact"
            className="mt-10 inline-block border border-black bg-black px-8 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}