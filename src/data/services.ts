export type Service = {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  activities: string[];
};

export const services: Service[] = [
  {
    id: "substructure",
    slug: "substructure-groundworks",
    title: "Substructure & Groundworks",
    description:
      "Expert delivery of below-ground works, foundations, drainage, and enabling packages across London.",
    fullDescription:
      "Smaci Ltd provides practical support across substructure and groundworks packages, helping projects establish a strong delivery foundation from the earliest construction stages. This structured service data is designed to support future branded service pages and more detailed company messaging.",
    activities: [
      "Groundworks and below-ground package coordination",
      "Foundations and early-stage structural preparation",
      "Drainage and enabling works support",
      "Practical delivery structure for future service-led case studies",
    ],
  },
  {
    id: "superstructure",
    slug: "superstructure-frame-works",
    title: "Superstructure & Frame Works",
    description:
      "Support across structural frame delivery, build sequencing, and above-ground package coordination.",
    fullDescription:
      "This service block presents Smaci Ltd as a contractor able to support key superstructure and frame-related work with a clear, delivery-led identity. It strengthens the commercial structure of the site and creates room for future expansion into project-backed proof.",
    activities: [
      "Structural frame package presentation",
      "Build sequence and delivery-focused messaging",
      "Above-ground works support structure",
      "Future-ready scaffold for visual and technical company content",
    ],
  },
  {
    id: "deconstruction",
    slug: "deconstruction-concrete-works",
    title: "Deconstruction & Concrete Works",
    description:
      "Controlled enabling, deconstruction, and concrete-related works positioned within a practical contractor framework.",
    fullDescription:
      "This service area helps broaden the commercial offer shown on the website. It gives the project more realism and reflects how a contractor site often presents enabling capability alongside structural delivery and package coordination.",
    activities: [
      "Enabling and deconstruction-led work positioning",
      "Concrete package and preparation support narrative",
      "Commercial breadth inside the services section",
      "Scaffold for future real project-backed examples",
    ],
  },
];