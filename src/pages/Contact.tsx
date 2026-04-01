import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Contact form scaffold submitted successfully.");
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  }

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

          <p className="mt-8 max-w-4xl text-xl leading-9 text-gray-600">
            This page gives the project a more complete company feel and creates
            a realistic enquiry route. For now, it works as a clean front-end
            scaffold before any live backend form handling is added.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
                Contact Details
              </p>
              <h2 className="text-4xl font-bold md:text-5xl">
                Let’s discuss your next project
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-gray-700">
              <p>
                The contact area is intentionally simple for now, but already
                gives the website a more credible business feel.
              </p>
              <p>
                Later, this can connect to email handling, CRM workflows, or a
                more advanced enquiry pipeline.
              </p>
            </div>

            <div className="space-y-5 rounded-2xl border border-black/10 bg-[#f6f6f6] p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                  Email
                </p>
                <p className="mt-2 text-lg text-gray-700">info@smaciltd.com</p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                  Location
                </p>
                <p className="mt-2 text-lg text-gray-700">London, United Kingdom</p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                  Enquiries
                </p>
                <p className="mt-2 text-lg text-gray-700">
                  General contractor and project-related discussions
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-black/20 px-4 py-3 outline-none transition focus:border-black"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-black/20 px-4 py-3 outline-none transition focus:border-black"
                />
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-semibold">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border border-black/20 px-4 py-3 outline-none transition focus:border-black"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full resize-none border border-black/20 px-4 py-3 outline-none transition focus:border-black"
                />
              </div>

              <button
                type="submit"
                className="inline-flex border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}