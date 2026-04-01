import { Link } from "react-router-dom";

const values = [
  {
    title: "Delivery",
    description:
      "We focus on practical site execution, dependable coordination, and keeping workstreams moving.",
  },
  {
    title: "Quality",
    description:
      "Every package is presented through a quality-first mindset, from groundwork preparation to structural delivery.",
  },
  {
    title: "Reliability",
    description:
      "Smaci Ltd is positioned as a contractor clients can trust for consistency, communication, and project discipline.",
  },
];

const capabilities = [
  "Structural and groundwork support",
  "Project-led coordination and delivery",
  "Residential, commercial, and infrastructure focus",
  "Practical site execution with scalable capability",
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            About Smaci Ltd
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-6xl">
            A contractor focused on delivery, quality, and reliability
          </h1>

          <div className="mt-8 max-w-3xl space-y-6 text-xl leading-9 text-gray-600">
            <p>
              This page positions Smaci Ltd as a serious contractor brand rather
              than just a temporary placeholder. It gives the project stronger
              business credibility and makes the structure feel closer to a real
              company website.
            </p>
            <p>
              Later, this section can be expanded with final client copy, team
              profiles, operational history, branded imagery, and company
              milestones.
            </p>
          </div>

          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-3 md:px-10">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Value
              </p>
              <h2 className="mb-4 text-3xl font-bold">{value.title}</h2>
              <p className="text-lg leading-8 text-gray-600">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:px-10">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Company profile
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">
              Built to present a clearer contractor identity
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-gray-600">
            <p>
              The current version presents Smaci Ltd as a London-based
              contractor with structured delivery capability across key project
              areas. The tone is intentionally direct, professional, and easy to
              extend later.
            </p>
            <p>
              This is the right stage to lock in page structure, spacing, route
              hierarchy, and business messaging before moving into richer visual
              design and more advanced component reuse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-10">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Capabilities
            </p>
            <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
              A base structure ready for stronger company storytelling
            </h2>
          </div>

          <div className="rounded-2xl border border-black/10 bg-[#f6f6f6] p-8">
            <h3 className="mb-6 text-2xl font-bold">Current focus areas</h3>
            <ul className="space-y-4 text-lg text-gray-700">
              {capabilities.map((item) => (
                <li key={item} className="border-b border-black/10 pb-4 last:border-b-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}