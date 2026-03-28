import { Link } from "react-router-dom";
import { sectors } from "@/data/sectors";

export default function Sectors() {
  return (
    <div className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          Sectors
        </p>

        <h1 className="mb-6 max-w-5xl text-5xl font-bold leading-tight md:text-6xl">
          Sectors where Smaci Ltd can deliver value
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-gray-600">
          This page presents the business sectors in a cleaner, more structured
          way. It helps the project feel closer to a real contractor website and
          gives space for future expansion with case studies and branded imagery.
        </p>
      </section>

      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-2">
          {sectors.map((sector) => (
            <article
              key={sector.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <img
                src={sector.image}
                alt={sector.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                  Sector
                </p>

                <h2 className="mb-4 text-3xl font-bold">{sector.title}</h2>

                <p className="mb-6 text-lg leading-8 text-gray-600">
                  {sector.description}
                </p>

                <div className="mb-8">
                  <h3 className="mb-3 text-lg font-bold">Relevant expertise</h3>
                  <ul className="space-y-2 text-gray-600">
                    {sector.expertise.slice(0, 4).map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
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
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}