import { Link } from "react-router-dom";
import * as insightsData from "@/data/insights";

type InsightItem = {
  id: string | number;
  slug: string;
  title: string;
  date: string;
  summary: string;
  category?: string;
};

const insightItems: InsightItem[] =
  typeof (insightsData as { getInsights?: () => InsightItem[] }).getInsights === "function"
    ? (insightsData as { getInsights: () => InsightItem[] }).getInsights()
    : ((insightsData as { insights?: InsightItem[] }).insights ?? []);

export default function Insights() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Insights
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-6xl">
            News, thinking, and industry-led content structure
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            This section gives the project an editorial layer. That matters
            because contractor websites often need more than services and
            projects to feel credible and alive.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3 md:px-10">
          {insightItems.map((insight) => (
            <article
              key={insight.id}
              className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                {insight.category ?? "Insight"}
              </p>

              <h2 className="mb-4 text-3xl font-bold leading-tight">
                {insight.title}
              </h2>

              <p className="mb-6 text-base text-gray-500">{insight.date}</p>

              <p className="mb-8 text-lg leading-8 text-gray-600">
                {insight.summary}
              </p>

              <Link
                to={`/insights/${insight.slug}`}
                className="inline-block text-base font-semibold underline underline-offset-4 transition hover:text-red-600"
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