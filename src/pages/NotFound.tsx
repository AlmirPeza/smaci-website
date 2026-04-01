import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f6f6f6] px-6 text-black">
      <div className="max-w-2xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
          404
        </p>

        <h1 className="text-5xl font-bold leading-tight md:text-6xl">
          Page not found
        </h1>

        <p className="mt-8 text-xl leading-9 text-gray-600">
          The page you requested does not exist or has not been built yet.
          Return to the homepage and continue through the main site sections.
        </p>

        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}