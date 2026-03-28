export interface Sector {
  id: string;
  slug: string;
  title: string;
  description: string;
}

export const sectors: Sector[] = [
  {
    id: "1",
    slug: "housing-development",
    title: "Housing Development",
    description:
      "Residential projects where structure, coordination, and programme reliability are essential.",
  },
  {
    id: "2",
    slug: "commercial",
    title: "Commercial",
    description:
      "Commercial schemes requiring practical delivery, sequencing, and close project coordination.",
  },
  {
    id: "3",
    slug: "public-sector",
    title: "Public Sector",
    description:
      "Public-facing projects where safety, process, and dependable delivery standards matter.",
  },
  {
    id: "4",
    slug: "infrastructure",
    title: "Infrastructure",
    description:
      "Infrastructure and civil works that demand site discipline, planning, and reliable execution.",
  },
];

export const getSectorBySlug = (slug: string) => {
  return sectors.find((sector) => sector.slug === slug);
};