export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          Contact
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          Get in touch with Smaci Ltd
        </h1>

        <div className="space-y-4 text-lg text-gray-700">
          <p>This is the temporary contact page scaffold.</p>
          <p>Final contact details, enquiry form, and layout will be added later.</p>
          <p>
            Planned contact details:
            <br />
            Phone: +44 20 1234 5678
            <br />
            Email: info@smaci.co.uk
            <br />
            Location: London, United Kingdom
          </p>
        </div>
      </section>
    </div>
  );
}