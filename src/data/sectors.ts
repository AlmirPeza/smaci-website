export type Sector = {
  id: string;
  slug: string;
  title: string;
  description: string;
  expertise: string[];
};

export const sectors: Sector[] = [
  {
    id: "housing-development",
    slug: "housing-development",
    title: "Housing Development",
    description:
      "We position Smaci Ltd to support residential and mixed-housing schemes with practical structural and groundworks capability.",
    expertise: [
      "Residential-led project presentation",
      "Groundworks and structural package alignment",
      "Portfolio-ready housing project positioning",
      "Future expansion into real case studies and visuals",
    ],
  },
  {
    id: "commercial",
    slug: "commercial",
    title: "Commercial",
    description:
      "Commercial sector coverage gives the website stronger depth and a more complete contractor identity.",
    expertise: [
      "Office and mixed-use positioning",
      "Commercial delivery-focused service narrative",
      "Clearer portfolio breadth for business credibility",
      "Future-ready structure for real refurbishment and build examples",
    ],
  },
  {
    id: "public-sector",
    slug: "public-sector",
    title: "Public Sector",
    description:
      "Public sector coverage helps the site feel more realistic and commercially balanced from the start.",
    expertise: [
      "Education and civic project positioning",
      "Structured contractor presentation for institutional work",
      "Credibility-building sector coverage",
      "Expandable framework for future public-facing case studies",
    ],
  },
  {
    id: "infrastructure",
    slug: "infrastructure-civil-engineering",
    title: "Infrastructure & Civil Engineering",
    description:
      "Infrastructure positioning strengthens the project by showing broader delivery capability and sector readiness.",
    expertise: [
      "Infrastructure and enabling works narrative",
      "Civil engineering support presentation",
      "Sector diversification across the website structure",
      "Future fit for more technical project storytelling",
    ],
  },
];