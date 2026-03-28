import { Link } from "react-router-dom";
import { services } from "@/data/services";

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          Services
        </p>

        <h1 className="mb-6 max-w-5xl text-5xl font-bold leading-tight md:text-6xl">
          Specialist structural and groundworks services
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-gray-600">
          This page introduces the core service structure of Smaci Ltd. It gives
          the project a more professional content layer and prepares the website
          for fuller branded service sections later.
        </p>
      </section>

      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Service
              </p>

              <h2 className="mb-4 text-3xl font-bold">{service.title}</h2>

              <p className="mb-4 text-lg leading-8 text-gray-600">
                {service.shortDescription}
              </p>

              <p className="mb-6 text-base leading-7 text-gray-600">
                {service.fullDescription}
              </p>

              <div className="mb-6">
                <h3 className="mb-3 text-lg font-bold">Typical activities</h3>
                <ul className="space-y-2 text-gray-600">
                  {service.activities.slice(0, 4).map((activity) => (
                    <li key={activity}>• {activity}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="mb-3 text-lg font-bold">Relevant sectors</h3>
                <p className="text-gray-600">{service.sectors.join(" · ")}</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-block bg-black px-5 py-3 font-semibold text-white transition hover:bg-red-600"
                >
                  View projects
                </Link>

                <Link
                  to="/contact"
                  className="inline-block border border-black px-5 py-3 font-semibold text-black transition hover:bg-black hover:text-white"
                >
                  Contact us
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}