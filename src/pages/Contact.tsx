import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen bg-neutral-100 text-black">
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
          Contact
        </p>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-6xl">
          Get in touch with Smaci Ltd
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
          This page now gives the project a cleaner business contact structure.
          Later we can upgrade it with a branded enquiry form, CTA layout, and
          stronger company presentation.
        </p>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-3 md:px-10">
          <div className="rounded-2xl border border-black/10 p-7">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Phone
            </p>
            <p className="text-2xl font-bold">+44 20 1234 5678</p>
            <p className="mt-3 text-gray-600">
              Main contact number for initial project enquiries.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 p-7">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Email
            </p>
            <p className="text-2xl font-bold break-words">info@smaci.co.uk</p>
            <p className="mt-3 text-gray-600">
              Best route for formal introductions and project details.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 p-7">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Location
            </p>
            <p className="text-2xl font-bold">London, United Kingdom</p>
            <p className="mt-3 text-gray-600">
              Primary business and delivery focus for the website.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold md:text-4xl">Project enquiry note</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The full contact form can be added later once the branded homepage,
            navigation, and shared layout are fully locked in. For now, this
            page works as a strong professional placeholder instead of looking
            empty.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild className="bg-black text-white hover:bg-red-600">
              <Link to="/projects">View Projects</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-black bg-transparent text-black hover:bg-black hover:text-white"
            >
              <Link to="/about">About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}