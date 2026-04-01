import heroImage from "@/assets/hero.png";

export type Project = {
  id: number;
  slug: string;
  name: string;
  sector: string;
  location: string;
  year: string;
  status: "Ongoing" | "Completed";
  value: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  services: string[];
  keyOutcomes: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "canary-wharf-residential",
    name: "Canary Wharf Residential Tower",
    sector: "Housing Development",
    location: "Canary Wharf, London",
    year: "2024",
    status: "Ongoing",
    value: "£18m",
    shortDescription:
      "Residential scheme scaffold used to present Smaci’s capability in structural and groundworks delivery.",
    longDescription:
      "This project detail is a structured placeholder for a large-scale housing development scheme in London. It gives the website a realistic contractor case-study format and creates a strong base for future client-facing portfolio content.",
    heroImage,
    services: [
      "Substructure & Groundworks",
      "Concrete Works",
      "Project Coordination",
    ],
    keyOutcomes: [
      "Early-stage project structure prepared for portfolio presentation",
      "Clear separation between sector, service, and project detail content",
      "Reusable layout format for future real Smaci project case studies",
    ],
    featured: true,
  },
  {
    id: 2,
    slug: "shoreditch-office-refurbishment",
    name: "Shoreditch Office Refurbishment",
    sector: "Commercial",
    location: "Shoreditch, London",
    year: "2023",
    status: "Completed",
    value: "£6m",
    shortDescription:
      "Commercial refurbishment case used to structure project cards, detail pages, and sector-based filtering.",
    longDescription:
      "This project acts as a commercial-sector example for the Smaci website. It helps demonstrate how office, mixed-use, and city-based work can be presented inside the final website without needing backend complexity at this stage.",
    heroImage,
    services: [
      "Superstructure & Frame Works",
      "Concrete Works",
      "Delivery Support",
    ],
    keyOutcomes: [
      "Professional commercial project card structure",
      "Reusable project detail layout for future schemes",
      "Balanced mix of credibility, readability, and visual hierarchy",
    ],
    featured: true,
  },
  {
    id: 3,
    slug: "kings-cross-infrastructure-works",
    name: "King's Cross Infrastructure Works",
    sector: "Infrastructure",
    location: "King's Cross, London",
    year: "2024",
    status: "Ongoing",
    value: "£11m",
    shortDescription:
      "Infrastructure example included to give early breadth to the portfolio and route system.",
    longDescription:
      "This project broadens the website beyond housing and commercial work. It gives the platform an infrastructure and civils angle, which makes the contractor profile feel more complete and more realistic from the start.",
    heroImage,
    services: [
      "Groundworks",
      "Enabling Works",
      "Deconstruction & Concrete Works",
    ],
    keyOutcomes: [
      "Stronger sector breadth across the website",
      "Improved portfolio realism for early demos",
      "More complete contractor positioning across pages",
    ],
    featured: true,
  },
];

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}