export type ProjectStatus = "Ongoing" | "Completed";

export type Project = {
  id: number;
  slug: string;
  sector: string;
  title: string;
  location: string;
  year: string;
  status: ProjectStatus;
  description: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "canary-wharf-residential-tower",
    sector: "Housing Development",
    title: "Canary Wharf Residential Tower",
    location: "Canary Wharf, London",
    year: "2024",
    status: "Ongoing",
    description:
      "Residential scheme scaffold used to present Smaci’s capability in structural and groundworks delivery.",
  },
  {
    id: 2,
    slug: "shoreditch-office-refurbishment",
    sector: "Commercial",
    title: "Shoreditch Office Refurbishment",
    location: "Shoreditch, London",
    year: "2023",
    status: "Completed",
    description:
      "Commercial refurbishment case used to structure project cards, detail pages, and sector-based filtering.",
  },
  {
    id: 3,
    slug: "kings-cross-infrastructure-works",
    sector: "Infrastructure",
    title: "King's Cross Infrastructure Works",
    location: "King's Cross, London",
    year: "2024",
    status: "Ongoing",
    description:
      "Infrastructure example included to give early breadth to the portfolio and route system.",
  },
];