import { Hero } from "@/components/Hero";
import { InsightCard } from "@/components/InsightCard";
import { getInsights } from "@/data/insights";

export default function Insights() {
  const insights = getInsights();

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <Hero
        eyebrow="Insights"
        title="News, thinking, and industry-led content structure"
        subtitle="This section gives the project an editorial layer. That matters because contractor websites often need more than services and projects to feel credible, active, and commercially alive."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:px-10 lg:grid-cols-3">
          {insights.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      </section>
    </div>
  );
}