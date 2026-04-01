import { Hero } from "@/components/Hero";
import { sectors } from "@/data/sectors";

export default function Sectors() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <Hero
        eyebrow="Sectors"
        title="Sector coverage that gives the website broader commercial depth"
        subtitle="The sector data is now more structured and closer to a real contractor website setup, making future expansion much easier."
      />

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-8 md:grid-cols-2">
            {sectors.map((sector) => (
              <article
                key={sector.id}
                className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                  Sector
                </p>

                <h2 className="mb-4 text-3xl font-bold">{sector.title}</h2>

                <p className="mb-6 text-lg leading-8 text-gray-600">
                  {sector.description}
                </p>

                <div className="space-y-3">
                  {sector.expertise.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-black/10 bg-[#f6f6f6] p-4"
                    >
                      <p className="text-base leading-7 text-gray-700">{item}</p>
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