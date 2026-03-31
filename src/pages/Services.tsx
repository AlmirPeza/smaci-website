import { services } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";

export default function Services() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Services
          </p>

          <h1 className="max-w-5xl text-5xl font-bold md:text-6xl">
            Practical construction support across key delivery areas
          </h1>

          <p className="mt-8 max-w-4xl text-2xl leading-10 text-gray-600">
            This page presents the service structure in a cleaner, more useful
            format so the website already feels closer to a real contractor
            build.
          </p>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}