export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  activities: string[];
  sectors: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: "substructure",
    slug: "substructure-groundworks",
    title: "Substructure & Groundworks",
    shortDescription:
      "Expert delivery of all works below ground level, from foundations and basements to drainage and retaining walls.",
    fullDescription:
      "We specialise in substructure and groundworks packages that form the critical foundation of any construction project. Our experienced teams deliver foundations, basements, drainage systems, and retaining structures with precision and reliability. We work on challenging ground conditions across London, bringing technical expertise to every scheme.",
    activities: [
      "Piled and shallow foundations",
      "Basement construction and tanking",
      "Drainage and below-ground services",
      "Retaining walls and earthworks",
      "Ground remediation and stabilisation",
      "Underpinning and structural repairs",
    ],
    sectors: ["Housing Development", "Commercial", "Public Sector", "Infrastructure"],
    icon: "Layers",
  },
  {
    id: "superstructure",
    slug: "superstructure-frame-works",
    title: "Superstructure & Frame Works",
    shortDescription:
      "Concrete and steel frame construction, cores, and structural works above ground delivered with quality and precision.",
    fullDescription:
      "Our superstructure teams deliver the structural heart of buildings – from reinforced concrete frames and cores to steel structures. We bring expertise in complex structural works, ensuring quality, safety, and programme certainty on every project. Our approach combines technical capability with collaborative working.",
    activities: [
      "Reinforced concrete frames and cores",
      "Steel frame erection and connections",
      "Post-tensioned concrete structures",
      "Precast concrete installation",
      "Structural alterations and strengthening",
      "Temporary works design and installation",
    ],
    sectors: ["Housing Development", "Commercial", "Public Sector", "Infrastructure"],
    icon: "Building2",
  },
  {
    id: "deconstruction",
    slug: "deconstruction-concrete-works",
    title: "Deconstruction & Concrete Works",
    shortDescription:
      "Enabling works, soft strip, and small-scale deconstruction preparing sites for new structures.",
    fullDescription:
      "We deliver enabling works packages that prepare sites for new construction. From soft strip and internal demolition to concrete cutting and breaking, our teams work safely and efficiently to clear the way for new development. We focus on careful, controlled methods that minimise disruption and maximise material recovery.",
    activities: [
      "Soft strip and internal demolition",
      "Small-scale structural deconstruction",
      "Concrete cutting and breaking",
      "Asbestos removal coordination",
      "Site clearance and preparation",
      "Material salvage and recycling",
    ],
    sectors: ["Housing Development", "Commercial", "Public Sector", "Infrastructure"],
    icon: "Hammer",
  },
];

export const getServiceBySlug = (slug: string) => {
  return services.find((service) => service.slug === slug);
};