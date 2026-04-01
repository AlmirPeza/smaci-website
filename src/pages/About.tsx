import { Link } from "react-router-dom";

const team = [
  { name: "Bledar Smaci", role: "Managing Director" },
  { name: "Project Delivery Team", role: "Operations & Coordination" },
  { name: "Site Management", role: "Construction Supervision" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            About
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-6xl">
            A contractor profile built around clarity, delivery, and credibility
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-gray-600">
            Smaci Ltd is presented as a London-based structural and groundworks
            contractor with a practical, delivery-led identity. This page gives
            the website stronger company depth and supports a more professional
            client-facing impression.
          </p>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Who We Are
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">
              Built around practical construction support
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-9 text-gray-700">
            <p>
              Smaci Ltd is positioned as a specialist contractor focused on
              structural, groundworks, and enabling packages across London.
            </p>
            <p>
              The purpose of this website version is to communicate credibility,
              sector coverage, and project readiness in a clear and modern way.
            </p>
            <p>
              As the project develops further, this page can be expanded with
              real company history, leadership detail, project photography, and
              more refined commercial messaging.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Our Approach
          </p>
          <h2 className="max-w-4xl text-4xl font-bold md:text-5xl">
            Structured communication, clean delivery, and a stronger commercial presence
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold">Clear Presentation</h3>
              <p className="text-lg leading-8 text-gray-600">
                The site is being built to present Smaci in a direct,
                professional, and commercially understandable way.
              </p>
            </article>

            <article className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold">Delivery Focus</h3>
              <p className="text-lg leading-8 text-gray-600">
                Every section is being structured to support services, projects,
                sectors, and future real case studies.
              </p>
            </article>

            <article className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold">Future Expansion</h3>
              <p className="text-lg leading-8 text-gray-600">
                This is a clean foundation that can later absorb richer content,
                images, metrics, and client-specific proof points.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Team
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">Smaci Team</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                  {member.name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </div>

                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="mt-3 text-lg text-gray-600">{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f6f6]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Next Step
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">
              Ready to continue the conversation
            </h2>

            <p className="mt-8 text-xl leading-9 text-gray-600">
              The page now supports the overall brand presentation much better.
              Later we can refine this further to match the final target version
              with logo placement, stronger team visuals, and richer company copy.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>
              <Link
                to="/projects"
                className="inline-flex border border-black px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}