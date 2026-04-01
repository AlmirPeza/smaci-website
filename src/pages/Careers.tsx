import { Link } from "react-router-dom";

import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const opportunities = [
  "Site management and delivery support",
  "Operations and coordination roles",
  "Future company growth positions",
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <Hero
        eyebrow="Careers"
        title="Careers page scaffold for future company growth"
        subtitle="This page is now cleaner, more consistent, and better aligned with the overall contractor-style presentation of the website."
      />

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold">Current Status</h2>
                <p className="mt-6 text-lg leading-9 text-gray-700">
                  For now, this route works as a professional placeholder inside
                  the broader company structure. It helps the project feel more
                  natural, more credible, and more complete.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold">Future Opportunities</h2>

                <div className="mt-6 space-y-3">
                  {opportunities.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-black/10 bg-[#f6f6f6] p-4"
                    >
                      <p className="text-base leading-7 text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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
              Ready for a fuller company version later
            </h2>

            <p className="mt-8 text-xl leading-9 text-gray-600">
              Later, this page can evolve into a proper careers section with
              real positions, company culture content, and application flows.
            </p>

            <div className="mt-10">
              <Button asChild size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}