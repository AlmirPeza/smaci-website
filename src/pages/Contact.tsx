export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Contact
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-6xl">
            Get in touch with Smaci Ltd
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            This page now gives the project a cleaner business contact
            structure. Later we can upgrade it with a branded enquiry form, CTA
            layout, and stronger company presentation.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3 md:px-10">
          <article className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Phone
            </p>
            <h2 className="mb-4 text-3xl font-bold">+44 20 1234 5678</h2>
            <p className="text-lg leading-8 text-gray-600">
              Main contact number for initial project enquiries.
            </p>
          </article>

          <article className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Email
            </p>
            <h2 className="mb-4 text-3xl font-bold">info@smaci.co.uk</h2>
            <p className="text-lg leading-8 text-gray-600">
              Best route for formal introductions and project details.
            </p>
          </article>

          <article className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Location
            </p>
            <h2 className="mb-4 text-3xl font-bold">London, United Kingdom</h2>
            <p className="text-lg leading-8 text-gray-600">
              Primary business and delivery focus for the website.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}