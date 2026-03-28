export interface Project {
  id: string;
  slug: string;
  name: string;
  sector: string;
  location: string;
  year: string;
  status: "Ongoing" | "Completed";
  shortDescription: string;
  longDescription: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "canary-wharf-residential",
    name: "Canary Wharf Residential Tower",
    sector: "Housing Development",
    location: "Canary Wharf, London",
    year: "2024",
    status: "Ongoing",
    shortDescription:
      "Residential scheme scaffold used to present Smaci’s capability in structural and groundworks delivery.",
    longDescription:
      "This placeholder project entry represents how future live projects will be presented across the website, including sector, project overview, delivery scope, and outcomes.",
    featured: true,
  },
  {
    id: "2",
    slug: "shoreditch-office-refurbishment",
    name: "Shoreditch Office Refurbishment",
    sector: "Commercial",
    location: "Shoreditch, London",
    year: "2023",
    status: "Completed",
    shortDescription:
      "Commercial refurbishment case used to structure project cards, detail pages, and sector-based filtering.",
    longDescription:
      "This sample project helps establish the portfolio layout and route structure before final client-approved content is integrated.",
    featured: true,
  },
  {
    id: "3",
    slug: "kings-cross-infrastructure",
    name: "King's Cross Infrastructure Works",
    sector: "Infrastructure",
    location: "King's Cross, London",
    year: "2024",
    status: "Ongoing",
    shortDescription:
      "Infrastructure example included to give early breadth to the portfolio and route system.",
    longDescription:
      "This entry stands in for future infrastructure and civil engineering projects that will later include fuller delivery information and outcomes.",
    featured: true,
  },
];

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

export const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};