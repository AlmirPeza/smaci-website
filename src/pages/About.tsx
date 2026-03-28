import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";

export default function About() {
  return (
    <div className="min-h-screen bg-neutral-100 text-black">
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
          About Smaci Ltd
        </p>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-6xl">
          A contractor focused on delivery, quality, and reliability
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
          This page introduces the company profile and gives the project a more
          complete corporate structure. Later it can expand into a stronger
          branded story with leadership, approach, sectors, and company values.
        </p>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-3 md:px-10">
          <StatCard value="London" label="Operating focus" />
          <StatCard value="4" label="Planned sectors" />
          <StatCard value="3" label="Core services" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Who we are</h2>
            <p className="text-lg leading-8 text-gray-600">
              Smaci Ltd is being presented as a practical, delivery-focused
              structural and groundworks contractor. At this stage, the project
              is intentionally clean and minimal so the structure stays strong
              before full branded content is added.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold">What this page will become</h2>
            <p className="text-lg leading-8 text-gray-600">
              This section will later include company background, team
              presentation, delivery approach, specialist capabilities, and a
              stronger visual identity aligned with the final Smaci direction.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Button asChild className="bg-black text-white hover:bg-red-600">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}