export type Sector = {
  id: number;
  slug: string;
  title: string;
  description: string;
  expertise: string[];
};

export const sectors: Sector[] = [
  {
    id: 1,
    slug: "housing-development",
    title: "Housing Development",
    description:
      "Residential-focused delivery across structural and groundwork packages for private and mixed-use developments.",
    expertise: [
      "Residential blocks",
      "Basement structures",
      "Reinforced concrete frames",
      "Groundworks sequencing",
    ],
  },
  {
    id: 2,
    slug: "commercial",
    title: "Commercial",
    description:
      "Support for office, mixed-use, and business-led construction environments where coordination and programme matter.",
    expertise: [
      "Refurbishment support",
      "Frame and slab works",
      "Site logistics awareness",
      "Programme-led delivery",
    ],
  },
  {
    id: 3,
    slug: "public-sector",
    title: "Public Sector",
    description:
      "Construction support suited to schools, civic works, and public-use buildings where consistency and reliability are essential.",
    expertise: [
      "Compliance-led delivery",
      "Structured site coordination",
      "Stakeholder-sensitive execution",
      "Quality-focused handover",
    ],
  },
  {
    id: 4,
    slug: "infrastructure",
    title: "Infrastructure",
    description:
      "Groundworks and structural contribution for transport-adjacent and civil-led environments requiring disciplined execution.",
    expertise: [
      "Civil support works",
      "Drainage and concrete packages",
      "Access and sequencing awareness",
      "Urban infrastructure coordination",
    ],
  },
];