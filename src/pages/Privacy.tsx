export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Privacy
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Privacy policy placeholder
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            This page is currently a structured placeholder and will later be
            replaced with the final business privacy content.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-10">
          <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
            <p className="text-lg leading-9 text-gray-700">
              Future privacy content can include data handling, enquiry form
              processing, cookies, user rights, and related legal details.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}