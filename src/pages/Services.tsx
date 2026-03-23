import { Link, useParams } from "react-router-dom";

export default function Services() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <Link
          to="/"
          className="mb-8 inline-block text-sm font-semibold text-red-600 underline underline-offset-4"
        >
          Back to home
        </Link>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          Service
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          {slug ? slug.replace(/-/g, " ") : "Service Detail"}
        </h1>

        <p className="text-lg leading-8 text-gray-700">
          This route will later show detailed information about an individual
          service, including scope, activities, and related sectors or projects.
        </p>
      </section>
    </div>
  );
}