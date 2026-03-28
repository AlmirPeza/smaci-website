export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
}

export const services: Service[] = [
  {
    id: "1",
    slug: "substructure-groundworks",
    title: "Substructure & Groundworks",
    shortDescription:
      "Foundations, excavation support, drainage, and below-ground works delivered with practical site focus.",
    fullDescription:
      "This service placeholder represents Smaci’s below-ground delivery capability and will later be expanded into a fuller service description page.",
  },
  {
    id: "2",
    slug: "superstructure-frame-works",
    title: "Superstructure & Frame Works",
    shortDescription:
      "Structural frame delivery supporting safe and efficient progression of the main build programme.",
    fullDescription:
      "This placeholder service description will later be replaced with final content about frame construction, coordination, and delivery value.",
  },
  {
    id: "3",
    slug: "deconstruction-concrete-works",
    title: "Deconstruction & Concrete Works",
    shortDescription:
      "Controlled enabling works and concrete-related packages that support wider site progress.",
    fullDescription:
      "This service entry is included to build the final services structure before detailed company-approved wording is added.",
  },
];

export const getServiceBySlug = (slug: string) => {
  return services.find((service) => service.slug === slug);
};