import { Link } from "react-router-dom";

interface InsightCardProps {
  slug: string;
  title: string;
  category: "News" | "Insight" | "Case Study";
  date: string;
  summary: string;
}

export const InsightCard = ({
  slug,
  title,
  category,
  date,
  summary,
}: InsightCardProps) => {
  return (
    <article className="rounded-2xl border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-red-600">{category}</span>
        <span className="text-sm text-gray-500">{date}</span>
      </div>

      <h3 className="mb-4 text-2xl font-bold leading-tight text-black">
        {title}
      </h3>

      <p className="mb-6 text-base leading-7 text-gray-600">{summary}</p>

      <Link
        to={`/insights/${slug}`}
        className="inline-flex text-base font-semibold text-black underline underline-offset-4 transition hover:text-red-600"
      >
        Read insight
      </Link>
    </article>
  );
};