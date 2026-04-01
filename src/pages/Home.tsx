import { Link } from "react-router-dom";

import smaciLogo from "@/assets/smaci-logo.png";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getFeaturedProjects } from "@/data/projects";
import { services } from "@/data/services";
import { sectors } from "@/data/sectors";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Smaci Ltd
            </p>

            <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
              Structural and groundworks contractor based in London
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-9 text-gray-600">
              Smaci Ltd delivers practical construction support across structural,
              groundworks, enabling, and project-led packages with a strong
              focus on delivery, quality, and reliability.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/projects">View Projects</Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link to="/about">About Us</Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-start lg:justify-end">
            <div className="rounded-3xl border border-black/10 bg-[#f6f6f6] p-8 shadow-sm">
              <img src={smaciLogo} alt="Smaci Ltd logo" className="h-24 w-auto md:h-28" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f6f6f6]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-3 md:px-10">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold">{services.length}</h2>
              <p className="mt-3 text-lg text-gray-600">Core service areas</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold">{sectors.length}</h2>
              <p className="mt-3 text-lg text-gray-600">Target sectors</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold">London</h2>
              <p className="mt-3 text-lg text-gray-600">Primary operating area</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="mb-12 max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Services
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">What we do</h2>
            <p className="mt-6 text-xl leading-9 text-gray-600">
              A clean service structure gives the website immediate contractor
              credibility and creates a solid base for future expansion.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f6f6f6]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
                Projects
              </p>
              <h2 className="text-4xl font-bold md:text-5xl">
                Featured project work
              </h2>
              <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-600">
                The portfolio now starts to feel more realistic, more structured,
                and better suited for future real case studies.
              </p>
            </div>

            <div>
              <Button asChild variant="outline">
                <Link to="/projects">See all projects</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact-section" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Contact
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">
              Ready to discuss your next project?
            </h2>

            <p className="mt-8 text-xl leading-9 text-gray-600">
              The homepage is now much closer to a polished company-facing
              version. Later, this can evolve into the fuller target version
              with richer visuals, branded sections, and more content depth.
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