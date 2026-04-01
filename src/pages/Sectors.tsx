import { Link } from "react-router-dom";
import { sectors } from "@/data/sectors";

export default function Sectors() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Sectors
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-6xl">
            Sector coverage that gives the website broader commercial depth
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-gray-600">
            This page presents the business sectors in a cleaner, more
            structured way. It helps the project feel closer to a real
            contractor website and creates space for future expansion with case
            studies and branded imagery.
          </p>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:px-10 md:grid-cols-2">
          {sectors.map((sector) => (
            <article
              key={sector.id}
              className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Sector
              </p>

              <h2 className="mb-4 text-3xl font-bold">{sector.title}</h2>

              <p className="text-lg leading-8 text-gray-600">
                {sector.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f6f6f6]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Portfolio Direction
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Ready for future sector-led project storytelling
            </h2>

            <p className="mt-8 text-xl leading-9 text-gray-600">
              The sector structure gives the site more credibility early. Later,
              each sector can connect directly to featured work, project
              categories, and more refined business messaging.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Explore Projects
              </Link>

              <Link
                to="/about"
                className="inline-flex border border-black px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
              >
                About Smaci
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}