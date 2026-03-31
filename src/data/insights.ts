export type Insight = {
  id: number;
  slug: string;
  category: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export const insights: Insight[] = [
  {
    id: 1,
    slug: "delivery-thinking-on-live-sites",
    category: "Insight",
    title: "Delivery Thinking on Live Sites",
    date: "March 2026",
    excerpt:
      "A placeholder article showing how future Smaci insights will be presented inside the website structure.",
    content:
      "This placeholder insight shows how editorial-style content can support the credibility of a contractor website. Later, this section can be expanded with real delivery insights, practical thinking, and company updates that reinforce the business profile.",
  },
  {
    id: 2,
    slug: "why-early-coordination-matters",
    category: "Case Study",
    title: "Why Early Coordination Matters",
    date: "March 2026",
    excerpt:
      "A structured example showing how Smaci can later present thinking around planning, sequencing, and delivery.",
    content:
      "Early coordination reduces delays, improves sequencing, and helps site teams manage dependencies more effectively. This placeholder content is included so the insights detail route has meaningful data to render from day one.",
  },
  {
    id: 3,
    slug: "company-update-placeholder",
    category: "News",
    title: "Company Update Placeholder",
    date: "March 2026",
    excerpt:
      "Temporary news-style entry included so the insights page has realistic variety from the start.",
    content:
      "This entry acts as a basic news item within the Smaci website structure. It helps demonstrate how announcements, milestone updates, or project progress notes could be published later inside the finished build.",
  },
];