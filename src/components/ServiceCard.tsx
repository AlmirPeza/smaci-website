type ServiceCardProps = {
  title: string;
  description: string;
};

export const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <article className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
        Service
      </p>

      <h3 className="mb-4 text-3xl font-bold leading-tight">{title}</h3>

      <p className="text-lg leading-8 text-gray-600">{description}</p>
    </article>
  );
};