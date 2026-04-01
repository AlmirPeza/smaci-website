import { Link } from "react-router-dom";

import smaciLogo from "@/assets/smaci-logo.png";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  { name: "Bledar Smaci", role: "Managing Director" },
  { name: "Project Delivery Team", role: "Operations & Coordination" },
  { name: "Site Management", role: "Construction Supervision" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <Hero
        eyebrow="About"
        title="A contractor profile built around clarity, delivery, and credibility"
        subtitle="This page now looks more like a proper company presentation page and is closer in spirit to the target version you shared at the start."
      />

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="flex justify-start">
            <div className="rounded-3xl border border-black/10 bg-[#f6f6f6] p-8 shadow-sm">
              <img src={smaciLogo} alt="Smaci Ltd logo" className="h-24 w-auto md:h-28" />
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Who We Are
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">
              Built around practical construction support
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-9 text-gray-700">
              <p>
                Smaci Ltd is positioned as a specialist contractor focused on
                structural, groundworks, and enabling packages across London.
              </p>
              <p>
                The goal of this version is to present the business with more
                clarity, stronger visual structure, and a more credible company-facing identity.
              </p>
              <p>
                As the project continues, this page can be expanded with richer
                company history, leadership detail, project photography, and
                stronger commercial messaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f6f6f6]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="mb-12 max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Our Approach
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">
              Structured communication, clean delivery, and stronger presentation
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-bold">Clear Presentation</h3>
                <p className="text-lg leading-8 text-gray-600">
                  The site is being built to present Smaci in a direct,
                  professional, and commercially understandable way.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-bold">Delivery Focus</h3>
                <p className="text-lg leading-8 text-gray-600">
                  Every section is structured to support services, projects,
                  sectors, and future real case studies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-bold">Future Expansion</h3>
                <p className="text-lg leading-8 text-gray-600">
                  This is a clean foundation that can later absorb richer
                  visuals, content, and more detailed company proof points.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Team
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">Smaci Team</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-8">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </div>

                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="mt-3 text-lg text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
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
              The about page now feels much more intentional and much more
              presentable. Later, we can push it even closer to the final target
              version with richer branding and more content detail.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link to="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}