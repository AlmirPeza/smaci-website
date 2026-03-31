import { Link } from "react-router-dom";
import { insights } from "@/data/insights";

export default function Insights() {
  return (
    <div className="min-h-screen bg-neutral-100 text-black">
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
          Insights
        </p>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-6xl">
          News, thinking, and industry-led content structure
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
          This section gives the project an editorial layer. That matters because
          contractor websites often need more than services and projects to feel
          credible and alive.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {insights.map((insight) => (
            <article
              key={insight.slug}
              className="rounded-2xl border border-black/10 bg-white p-7"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                {insight.category}
              </p>

              <h2 className="text-3xl font-bold leading-tight">
                {insight.title}
              </h2>

              <p className="mt-4 text-sm text-gray-500">{insight.date}</p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                {insight.summary}
              </p>

              <Link
                to={`/insights/${insight.slug}`}
                className="mt-6 inline-block font-semibold text-black underline underline-offset-4 transition hover:text-red-600"
              >
                Read insight
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}