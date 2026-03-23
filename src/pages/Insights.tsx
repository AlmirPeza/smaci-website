import { Link } from "react-router-dom";

const sampleInsights = [
  {
    title: "How Early Contractor Involvement Improves Project Outcomes",
    slug: "early-contractor-involvement",
    category: "Insight",
  },
  {
    title: "Delivering Complex Refurbishments in Live Environments",
    slug: "live-environment-refurbishment",
    category: "Insight",
  },
  {
    title: "Smaci's Commitment to Sustainable Construction",
    slug: "sustainability-focus-2024",
    category: "News",
  },
];

export default function Insights() {
  return (
    <div className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          Insights
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          News, insight, and thinking
        </h1>

        <p className="mb-12 max-w-3xl text-lg text-gray-700">
          This page will later contain articles, updates, and thought pieces.
          For now, it exists as a minimal route scaffold with sample links.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sampleInsights.map((item) => (
            <article
              key={item.slug}
              className="rounded-xl border border-gray-200 p-6 shadow-sm"
            >
              <p className="mb-2 text-sm font-medium text-red-600">
                {item.category}
              </p>
              <h2 className="mb-4 text-xl font-semibold">{item.title}</h2>

              <Link
                to={`/insights/${item.slug}`}
                className="text-sm font-semibold text-black underline underline-offset-4"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}