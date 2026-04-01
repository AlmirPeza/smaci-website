export type ProjectStatus = "Ongoing" | "Completed";

export type Project = {
  id: number;
  slug: string;
  name: string;
  sector: string;
  location: string;
  year: string;
  status: ProjectStatus;
  shortDescription: string;
  description: string;
  scope: string[];
};

const projects: Project[] = [
  {
    id: 1,
    slug: "canary-wharf-residential-tower",
    name: "Canary Wharf Residential Tower",
    sector: "Housing Development",
    location: "Canary Wharf, London",
    year: "2024",
    status: "Ongoing",
    shortDescription:
      "Residential scheme scaffold used to present Smaci’s capability in structural and groundworks delivery.",
    description:
      "This placeholder project presents how Smaci Ltd can showcase a major residential package with clean structure, sector alignment, and strong delivery-focused language.",
    scope: [
      "Groundworks and enabling package coordination",
      "Substructure preparation and concrete-related works",
      "Delivery support across phased residential construction",
      "Structured presentation of sector capability for future case studies",
    ],
  },
  {
    id: 2,
    slug: "shoreditch-office-refurbishment",
    name: "Shoreditch Office Refurbishment",
    sector: "Commercial",
    location: "Shoreditch, London",
    year: "2023",
    status: "Completed",
    shortDescription:
      "Commercial refurbishment case used to structure project cards, detail pages, and sector-based filtering.",
    description:
      "This example project gives the commercial side of the website more depth and shows how Smaci can present office-led or mixed-use refurbishment work in a polished way.",
    scope: [
      "Commercial refurbishment positioning",
      "Structural adaptation and site coordination narrative",
      "Delivery-focused portfolio storytelling",
      "Reusable structure for future project expansion",
    ],
  },
  {
    id: 3,
    slug: "kings-cross-infrastructure-works",
    name: "King's Cross Infrastructure Works",
    sector: "Infrastructure",
    location: "King's Cross, London",
    year: "2024",
    status: "Ongoing",
    shortDescription:
      "Infrastructure example included to give early breadth to the portfolio and route system.",
    description:
      "This infrastructure placeholder strengthens the portfolio by showing that the website is ready to support multiple sectors, larger project narratives, and broader delivery capability.",
    scope: [
      "Infrastructure-focused project presentation",
      "Groundworks and enabling narrative for public-facing portfolio",
      "Sector diversification inside the website structure",
      "Scaffold for future branded case study content",
    ],
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.slice(0, 3);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export { projects };