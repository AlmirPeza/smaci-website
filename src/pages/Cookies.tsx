import { Hero } from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";

const cookieItems = [
  "Essential cookie information",
  "Analytics-related cookie explanation",
  "User browser control guidance",
  "Future legal cookie policy details",
];

export default function Cookies() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <Hero
        eyebrow="Cookies"
        title="Cookie policy placeholder"
        subtitle="This page now feels more integrated with the rest of the project and supports a more professional legal route structure."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold">Future Cookie Content</h2>

              <div className="mt-8 space-y-3">
                {cookieItems.map((item) => (
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
      </section>
    </div>
  );
}