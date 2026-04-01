import { Link } from "react-router-dom";
import { sectors } from "@/data/sectors";

type SectorItem = {
  id: string | number;
  title: string;
  description: string;
  expertise?: string[];
};

const sectorItems = sectors as SectorItem[];

export default function Sectors() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Sectors
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-6xl">
            Business sectors presented in a clearer and more commercial way
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            This page presents the business sectors in a cleaner, more
            structured way. It helps the project feel closer to a real
            contractor website and creates space for future expansion with case
            studies and branded imagery.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-2 md:px-10">
          {sectorItems.map((sector) => (
            <article
              key={sector.id}
              className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Sector
              </p>

              <h2 className="mb-4 text-3xl font-bold">{sector.title}</h2>

              <p className="mb-6 text-lg leading-8 text-gray-600">
                {sector.description}
              </p>

              {Array.isArray(sector.expertise) && sector.expertise.length > 0 && (
                <div className="mb-8">
                  <h3 className="mb-3 text-lg font-bold">Relevant expertise</h3>
                  <ul className="space-y-3 text-gray-700">
                    {sector.expertise.slice(0, 4).map((item) => (
                      <li key={item} className="border-b border-black/10 pb-3 last:border-b-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Link
                to="/projects"
                className="inline-block text-base font-semibold underline underline-offset-4 transition hover:text-red-600"
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