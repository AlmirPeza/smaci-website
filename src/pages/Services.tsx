import { services } from "@/data/services";

type ServiceItem = {
  id: string | number;
  title: string;
  description: string;
  activities?: string[];
  sectors?: string[];
};

const serviceItems = services as ServiceItem[];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Services
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-6xl">
            Structured service presentation for a stronger contractor profile
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            This page makes the service offer clearer, more credible, and easier
            to scale. It moves the project away from a basic placeholder and
            closer to a real commercial website structure.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:px-10">
          {serviceItems.map((service) => (
            <article
              key={service.id}
              className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Service
              </p>

              <h2 className="mb-4 text-3xl font-bold">{service.title}</h2>

              <p className="max-w-4xl text-lg leading-8 text-gray-600">
                {service.description}
              </p>

              {Array.isArray(service.activities) && service.activities.length > 0 && (
                <div className="mt-8">
                  <h3 className="mb-3 text-lg font-bold">Typical activities</h3>
                  <ul className="space-y-3 text-gray-700">
                    {service.activities.map((activity) => (
                      <li key={activity} className="border-b border-black/10 pb-3 last:border-b-0">
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {Array.isArray(service.sectors) && service.sectors.length > 0 && (
                <div className="mt-8">
                  <h3 className="mb-3 text-lg font-bold">Relevant sectors</h3>
                  <p className="text-lg text-gray-600">{service.sectors.join(" · ")}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}