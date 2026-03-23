import { Link, useParams } from "react-router-dom";

export default function InsightDetail() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <Link
          to="/insights"
          className="mb-8 inline-block text-sm font-semibold text-red-600 underline underline-offset-4"
        >
          Back to insights
        </Link>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          Insight Detail
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          {slug ? slug.replace(/-/g, " ") : "Insight"}
        </h1>

        <p className="text-lg leading-8 text-gray-700">
          This is the temporary dynamic insight page. Later, it will render real
          article content using structured data and the route slug.
        </p>
      </section>
    </div>
  );
}