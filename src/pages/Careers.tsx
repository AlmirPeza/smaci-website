export default function Careers() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Careers
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-6xl">
            Careers page scaffold for future company growth
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-gray-600">
            This route exists to make the website structure feel more complete.
            Later, it can be expanded into a real careers page with hiring
            roles, culture, and application flows.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10">
          <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold">Current status</h2>
            <p className="mt-6 text-lg leading-9 text-gray-700">
              For now, this page serves as a professional placeholder inside the
              overall company structure. It helps the project look more natural
              and more realistic as a growing business website.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}