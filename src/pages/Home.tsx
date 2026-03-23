import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          Smaci Ltd
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          Structural and groundworks contractor based in London
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-gray-700">
          This is the initial scaffold for the Smaci Ltd website. The full design,
          content, and reusable components will be integrated step by step.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            View Projects
          </Link>

          <Link
            to="/about"
            className="rounded-md border border-black px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-100"
          >
            About Us
          </Link>
        </div>
      </section>
    </div>
  );
}