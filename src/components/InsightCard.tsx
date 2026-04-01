import { Link } from "react-router-dom";
import type { Insight } from "@/data/insights";

type InsightCardProps = {
  insight: Insight;
};

export const InsightCard = ({ insight }: InsightCardProps) => {
  return (
    <article className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
        {insight.category}
      </p>

      <h3 className="mb-5 text-3xl font-bold leading-tight">
        {insight.title}
      </h3>

      <p className="mb-6 text-lg text-gray-500">{insight.date}</p>

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
  );
};