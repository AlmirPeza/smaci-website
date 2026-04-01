import { Hero } from "@/components/Hero";
import { services } from "@/data/services";

export default function Services() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <Hero
        eyebrow="Services"
        title="Practical construction support across core delivery packages"
        subtitle="This page now carries richer service data and a stronger internal structure, making it closer to the final contractor-style version you want."
      />

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                  Service
                </p>

                <h2 className="mb-4 text-3xl font-bold leading-tight">
                  {service.title}
                </h2>

                <p className="mb-6 text-lg leading-8 text-gray-600">
                  {service.fullDescription}
                </p>

                <div className="space-y-3">
                  {service.activities.map((activity) => (
                    <div
                      key={activity}
                      className="rounded-xl border border-black/10 bg-[#f6f6f6] p-4"
                    >
                      <p className="text-base leading-7 text-gray-700">
                        {activity}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}