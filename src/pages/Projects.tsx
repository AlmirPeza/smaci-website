import { Link } from "react-router-dom";

const sampleProjects = [
  {
    title: "Canary Wharf Residential Tower",
    slug: "canary-wharf-residential",
    sector: "Housing Development",
  },
  {
    title: "Shoreditch Office Refurbishment",
    slug: "shoreditch-office-refurb",
    sector: "Commercial",
  },
  {
    title: "King's Cross Infrastructure Works",
    slug: "kings-cross-infrastructure",
    sector: "Infrastructure",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          Projects
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          Our project portfolio
        </h1>

        <p className="mb-12 max-w-3xl text-lg text-gray-700">
          This page will later showcase Smaci’s selected work, sectors, scope,
          and outcomes. For now, it acts as a clean route scaffold.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sampleProjects.map((project) => (
            <article
              key={project.slug}
              className="rounded-xl border border-gray-200 p-6 shadow-sm"
            >
              <p className="mb-2 text-sm font-medium text-red-600">
                {project.sector}
              </p>
              <h2 className="mb-4 text-xl font-semibold">{project.title}</h2>

              <Link
                to={`/projects/${project.slug}`}
                className="text-sm font-semibold text-black underline underline-offset-4"
              >
                View project
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}