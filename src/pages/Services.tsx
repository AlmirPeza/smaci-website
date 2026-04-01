import { Link } from "react-router-dom";
import { services } from "@/data/services";

export default function Services() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Services
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-6xl">
            Practical construction support across core delivery packages
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-gray-600">
            This page presents Smaci Ltd’s core service areas in a cleaner,
            more structured way. It gives the project a more realistic company
            profile and creates a solid base for future service detail pages.
          </p>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:px-10 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Service
              </p>

              <h2 className="mb-4 text-3xl font-bold leading-tight">
                {service.title}
              </h2>

              <p className="text-lg leading-8 text-gray-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f6f6f6]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Delivery Focus
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Built to support stronger future case studies
            </h2>

            <p className="mt-8 text-xl leading-9 text-gray-600">
              These service blocks are intentionally clean and reusable. Later,
              each area can expand into more detailed sections with delivery
              scope, project examples, and supporting visuals.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="inline-flex border border-black px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
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