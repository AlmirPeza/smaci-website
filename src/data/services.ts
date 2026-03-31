export type Service = {
  id: number;
  slug: string;
  title: string;
  description: string;
  activities: string[];
  sectors: string[];
};

export const services: Service[] = [
  {
    id: 1,
    slug: "substructure-groundworks",
    title: "Substructure & Groundworks",
    description:
      "Expert delivery of all works below ground level, from foundations and basements to drainage and retaining walls.",
    activities: [
      "Bulk excavation and reduced level dig",
      "Foundations and ground beams",
      "Basement enabling works",
      "Drainage and attenuation systems",
    ],
    sectors: [
      "Housing Development",
      "Commercial",
      "Infrastructure",
      "Public Sector",
    ],
  },
  {
    id: 2,
    slug: "superstructure-frame-works",
    title: "Superstructure & Frame Works",
    description:
      "Concrete and steel frame construction, cores, and structural works above ground delivered with quality and precision.",
    activities: [
      "RC frame packages",
      "Concrete slabs and columns",
      "Core construction",
      "Structural coordination support",
    ],
    sectors: [
      "Housing Development",
      "Commercial",
      "Public Sector",
    ],
  },
  {
    id: 3,
    slug: "deconstruction-concrete-works",
    title: "Deconstruction & Concrete Works",
    description:
      "Enabling works, soft strip, and small-scale deconstruction preparing sites for new structures.",
    activities: [
      "Soft strip and demolition prep",
      "Breaking out concrete elements",
      "Temporary works coordination",
      "Site clearance and enabling support",
    ],
    sectors: [
      "Commercial",
      "Infrastructure",
      "Public Sector",
    ],
  },
];