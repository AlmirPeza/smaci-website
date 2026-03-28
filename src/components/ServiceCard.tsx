interface ServiceCardProps {
  title: string;
  shortDescription: string;
}

export const ServiceCard = ({
  title,
  shortDescription,
}: ServiceCardProps) => {
  return (
    <article className="rounded-2xl border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
        Service
      </p>

      <h3 className="mb-4 text-2xl font-bold leading-tight text-black">
        {title}
      </h3>

      <p className="text-base leading-7 text-gray-600">{shortDescription}</p>
    </article>
  );
};