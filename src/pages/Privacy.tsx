import { Hero } from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";

const privacyItems = [
  "What information is collected through future enquiry forms",
  "How user and company data may be processed",
  "How long information may be retained",
  "How legal and compliance details can be added later",
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <Hero
        eyebrow="Privacy"
        title="Privacy policy placeholder"
        subtitle="This page is now styled consistently with the rest of the website and can later be replaced with final business privacy content."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold">Future Privacy Content</h2>

              <div className="mt-8 space-y-3">
                {privacyItems.map((item) => (
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