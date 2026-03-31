import { Link } from "react-router-dom";
import { sectors } from "@/data/sectors";

export default function Sectors() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Sectors
          </p>

          <h1 className="max-w-5xl text-5xl font-bold md:text-6xl">
            Business sectors and contractor focus areas
          </h1>

          <p className="mt-8 max-w-4xl text-2xl leading-10 text-gray-600">
            This page presents the business sectors in a cleaner, more
            structured way and gives the project room to grow naturally later.
          </p>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-2 lg:px-8">
          {sectors.map((sector) => (
            <article
              key={sector.id}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Sector
              </p>

              <h2 className="mb-4 text-3xl font-bold">{sector.title}</h2>

              <p className="mb-6 text-lg leading-8 text-gray-600">
                {sector.description}
              </p>

              <div className="mb-6">
                <h3 className="mb-3 text-lg font-bold">Relevant expertise</h3>
                <ul className="space-y-2 text-gray-600">
                  {sector.expertise.slice(0, 4).map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <Link
                to="/projects"
                className="inline-block font-semibold text-black underline underline-offset-4 transition hover:text-red-600"
              >
                View related projects
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}