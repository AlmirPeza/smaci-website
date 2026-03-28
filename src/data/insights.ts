export interface Insight {
  id: string;
  slug: string;
  title: string;
  category: "News" | "Insight" | "Case Study";
  date: string;
  summary: string;
  content: string;
}

export const insights: Insight[] = [
  {
    id: "1",
    slug: "delivery-thinking-on-live-sites",
    title: "Delivery Thinking on Live Sites",
    category: "Insight",
    date: "March 2026",
    summary:
      "A placeholder article showing how future Smaci insights will be presented inside the website structure.",
    content:
      "This is a temporary insight article used to scaffold the route, card, and detail layout for the future insights section.",
  },
  {
    id: "2",
    slug: "why-coordination-matters-early",
    title: "Why Early Coordination Matters",
    category: "Case Study",
    date: "March 2026",
    summary:
      "A structured example showing how Smaci can later present thinking around planning, sequencing, and delivery.",
    content:
      "This content is intentionally simple for now. Later it will be replaced with polished branded writing and project-led examples.",
  },
  {
    id: "3",
    slug: "company-update-placeholder",
    title: "Company Update Placeholder",
    category: "News",
    date: "March 2026",
    summary:
      "Temporary news-style entry included so the insights page has realistic variety from the start.",
    content:
      "This placeholder entry exists to help build and test the final structure before real updates are added.",
  },
];

export const getInsightBySlug = (slug: string) => {
  return insights.find((insight) => insight.slug === slug);
};