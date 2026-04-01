import { Link, useParams } from "react-router-dom";
import { getInsightBySlug } from "@/data/insights";

export default function InsightDetail() {
  const { slug } = useParams();
  const insight = getInsightBySlug(slug ?? "");

  if (!insight) {
    return (
      <div className="min-h-screen bg-[#f6f6f6] text-black">
        <div className="mx-auto max-w-5xl px-6 py-24 md:px-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Insight
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">Insight not found</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            The requested insight could not be loaded. Return to the insights
            page and open another article.
          </p>
          <Link
            to="/insights"
            className="mt-8 inline-flex border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Back to insights
          </Link>
        </div>
      </div>
    );
  }

  const sections = insight.content.split("\n\n");

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            {insight.category}
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
            {insight.title}
          </h1>

          <p className="mt-6 text-lg text-gray-500">{insight.date}</p>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            {insight.summary}
          </p>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-10">
          <article className="space-y-6">
            {sections.map((section, index) => {
              if (section.startsWith("## ")) {
                return (
                  <h2 key={index} className="pt-4 text-3xl font-bold">
                    {section.replace("## ", "")}
                  </h2>
                );
              }

              if (section.startsWith("### ")) {
                return (
                  <h3 key={index} className="pt-2 text-2xl font-bold">
                    {section.replace("### ", "")}
                  </h3>
                );
              }

              return (
                <p key={index} className="text-lg leading-9 text-gray-700">
                  {section}
                </p>
              );
            })}
          </article>
        </div>
      </section>

      <section className="bg-[#f6f6f6]">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-10">
          <Link
            to="/insights"
            className="inline-flex border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Back to insights
          </Link>
        </div>
      </section>
    </div>
  );
}