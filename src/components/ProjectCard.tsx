import { Link } from "react-router-dom";

interface ProjectCardProps {
  slug: string;
  name: string;
  sector: string;
  location: string;
  year: string;
  shortDescription: string;
  status: "Ongoing" | "Completed";
}

export const ProjectCard = ({
  slug,
  name,
  sector,
  location,
  year,
  shortDescription,
  status,
}: ProjectCardProps) => {
  return (
    <article className="rounded-2xl border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-medium text-red-600">{sector}</p>
          <h3 className="text-2xl font-bold leading-tight text-black">{name}</h3>
        </div>

        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
            status === "Completed"
              ? "bg-black text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="mb-4 space-y-1 text-sm text-gray-500">
        <p>{location}</p>
        <p>{year}</p>
      </div>

      <p className="mb-6 text-base leading-7 text-gray-600">
        {shortDescription}
      </p>

      <Link
        to={`/projects/${slug}`}
        className="inline-flex text-base font-semibold text-black underline underline-offset-4 transition hover:text-red-600"
      >
        View project
      </Link>
    </article>
  );
};