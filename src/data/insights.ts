export type Insight = {
  id: number;
  slug: string;
  title: string;
  date: string;
  summary: string;
  category: string;
  content: string;
};

const insights: Insight[] = [
  {
    id: 1,
    slug: "delivery-thinking-on-live-sites",
    title: "Delivery Thinking on Live Sites",
    date: "March 2026",
    category: "Insight",
    summary:
      "A placeholder article showing how future Smaci insights will be presented inside the website structure.",
    content: `## Delivery Thinking on Live Sites

Working on live environments requires structured planning, sequencing, and communication. This article placeholder exists to show how Smaci Ltd can later publish more thoughtful industry-facing content.

## Why this matters

A contractor website feels stronger when it includes not only services and projects, but also practical written thinking. That makes the business appear active, experienced, and commercially credible.

### Future direction

Later, this page can include real delivery examples, planning notes, site lessons, and more developed company insight content.`,
  },
  {
    id: 2,
    slug: "why-early-coordination-matters",
    title: "Why Early Coordination Matters",
    date: "March 2026",
    category: "Case Study",
    summary:
      "A structured example showing how Smaci can later present thinking around planning, sequencing, and delivery.",
    content: `## Why Early Coordination Matters

Early coordination reduces delivery friction and improves how project packages connect from the beginning.

## Core benefit

Strong coordination helps clients, consultants, and site teams align earlier. That improves decision-making and reduces confusion later in the programme.

### Future direction

This scaffold can later become a proper thought piece or mini case study supported by real client delivery examples.`,
  },
  {
    id: 3,
    slug: "company-update-placeholder",
    title: "Company Update Placeholder",
    date: "March 2026",
    category: "News",
    summary:
      "Temporary news-style entry included so the insights page has realistic variety from the start.",
    content: `## Company Update Placeholder

This placeholder entry is here to ensure the insights section feels varied and commercially realistic.

## Why include it

A mix of insight, case-study, and news-style content gives the website better structure and makes future content planning easier.

### Future direction

Later, this route can be used for announcements, project wins, operational updates, or company milestones.`,
  },
];

export function getInsights(): Insight[] {
  return insights;
}

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((insight) => insight.slug === slug);
}

export { insights };