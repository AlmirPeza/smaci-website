import { useState, type ChangeEvent, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Hero } from "@/components/Hero";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
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
      <Hero
        eyebrow="Contact"
        title="Get in touch with Smaci Ltd"
        subtitle="This page now uses reusable UI primitives and is closer to the structure of the target version you shared at the beginning."
      />

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
                The contact section is now more reusable and much closer to a real
                production-style React setup.
              </p>
              <p>
                Later, this can connect to backend handling, email delivery, or a
                more advanced enquiry flow.
              </p>
            </div>

            <Card className="bg-[#f6f6f6]">
              <CardContent className="space-y-5 p-8">
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
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="mt-2"
                  />
                </div>

                <Button type="submit" size="lg">
                  Send Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}