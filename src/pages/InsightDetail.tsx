import { Link, Navigate, useParams } from "react-router-dom";
import { getInsightBySlug } from "@/data/insights";

export default function InsightDetail() {
  const { slug } = useParams();
  const insight = getInsightBySlug(slug || "");

  if (!insight) {
    return <Navigate to="/insights" replace />;
  }

  const sections = insight.content.split("\n\n");

  return (
    <div className="min-h-screen bg-neutral-100 text-black">
      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-24">
        <Link
          to="/insights"
          className="mb-8 inline-flex text-sm font-semibold uppercase tracking-[0.2em] text-red-600 transition hover:text-black"
        >
          Back to insights
        </Link>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
          {insight.category}
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
          {insight.title}
        </h1>

        <p className="mt-6 text-lg text-gray-500">{insight.date}</p>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
          {insight.summary}
        </p>
      </section>

      <section className="border-t border-black/10 bg-white">
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
                <p
                  key={index}
                  className="text-lg leading-8 text-gray-600 whitespace-pre-line"
                >
                  {section}
                </p>
              );
            })}
          </article>
        </div>
      </section>
    </div>
  );
}