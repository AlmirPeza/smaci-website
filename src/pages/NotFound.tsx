import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 text-black">
      <div className="max-w-xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          404
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          Page not found
        </h1>

        <p className="mb-8 text-lg leading-8 text-gray-700">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}