import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          About Smaci Ltd
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          A contractor focused on delivery, quality, and reliability
        </h1>

        <div className="max-w-3xl space-y-6 text-lg leading-8 text-gray-700">
          <p>
            This page will present the company story, approach, specialist
            capabilities, and team overview.
          </p>
          <p>
            For now, it serves as a clean route placeholder while we build the
            reusable layout, sections, and final branded content.
          </p>
        </div>

        <div className="mt-10">
          <Link
            to="/contact"
            className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}