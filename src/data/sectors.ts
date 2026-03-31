export interface Sector {
  id: string;
  slug: string;
  title: string;
  description: string;
  expertise: string[];
  image: string;
}

export const sectors: Sector[] = [
  {
    id: "residential",
    slug: "residential",
    title: "Housing Development",
    description:
      "We deliver high-quality housing developments across London, from single plots to multi-unit schemes, with a focus on build quality, safety and programme.",
    expertise: [
      "High-rise residential towers in Zones 1-3",
      "Mixed-tenure affordable housing schemes",
      "Luxury apartment developments and penthouses",
      "Student accommodation and build-to-rent",
      "Heritage building conversions to residential",
    ],
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
  },
  {
    id: "commercial",
    slug: "commercial",
    title: "Commercial",
    description:
      "We deliver commercial spaces for a wide range of businesses, including:",
    expertise: [
      "Office refurbishments and fit-outs",
      "Retail units and shopfronts",
      "Restaurants and hospitality spaces",
      "Industrial and warehouse units",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
  },
  {
    id: "public-sector",
    slug: "public-sector",
    title: "Public Sector",
    description:
      "We're trusted delivery partners for public sector clients across education, health, and civic projects. We understand the unique requirements of public procurement and the importance of social value and community engagement.",
    expertise: [
      "Schools, academies, and further education",
      "Healthcare facilities and medical centres",
      "Civic and community buildings",
      "Emergency services infrastructure",
      "Social value and local employment initiatives",
    ],
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
  },
  {
    id: "infrastructure",
    slug: "infrastructure",
    title: "Infrastructure & Civil Engineering",
    description:
      "We deliver essential infrastructure that enables development and supports London's growth. Our civils and infrastructure expertise includes highways, utilities, remediation, and public realm works.",
    expertise: [
      "Highways and transport infrastructure",
      "Utilities diversions and installations",
      "Site remediation and enabling works",
      "Public realm and landscaping",
      "Temporary works and complex logistics",
    ],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
  },
];

export const getSectorBySlug = (slug: string) => {
  return sectors.find((sector) => sector.slug === slug);
};