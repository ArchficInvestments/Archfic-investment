export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'residential' | 'commercial' | 'interiors' | 'renovations';
  location: string;
  year: number;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Modern Residential Villa",
    description: "A contemporary 4-bedroom family home featuring open-plan living spaces, sustainable materials, and energy-efficient design.",
    imageUrl: "/lovable-uploads/28cef5c4-7df4-4b0a-8977-da34130766cc.png",
    category: "residential",
    location: "Kampala, Uganda",
    year: 2023
  },
  {
    id: 2,
    title: "Commercial Office Complex",
    description: "A state-of-the-art office building with flexible workspaces, meeting rooms, and modern amenities for businesses.",
    imageUrl: "/lovable-uploads/91cf1076-7091-4501-ac07-b5a7e0f5649b.png",
    category: "commercial",
    location: "Entebbe, Uganda",
    year: 2022
  },
  {
    id: 3,
    title: "Luxury Apartment Interior",
    description: "Complete interior design and finishing for a high-end apartment, featuring custom furniture and premium materials.",
    imageUrl: "/lovable-uploads/ac830e73-d4d5-47f3-98e7-6418329b7677.png",
    category: "interiors",
    location: "Luweero, Uganda",
    year: 2023
  },
  {
    id: 4,
    title: "Heritage Home Renovation",
    description: "Careful restoration and modernization of a historic property, preserving architectural details while adding contemporary comforts.",
    imageUrl: "/lovable-uploads/abb11484-e4c2-42a6-a835-84eb2113d051.png",
    category: "renovations",
    location: "Jinja, Uganda",
    year: 2021
  },
  {
    id: 5,
    title: "Retail Shopping Center",
    description: "A modern shopping complex designed to maximize foot traffic and create pleasant shopping experiences for customers.",
    imageUrl: "/lovable-uploads/a0e2168b-d411-46c9-8eec-45d545588260.png",
    category: "commercial",
    location: "Mbale, Uganda",
    year: 2022
  },
  {
    id: 6,
    title: "Single Family Home",
    description: "Custom-designed family residence featuring 3 bedrooms, spacious living areas, and a garden designed for outdoor entertainment.",
    imageUrl: "/lovable-uploads/9639e92e-28d5-4b64-a7bd-c6f5982cb61a.png",
    category: "residential",
    location: "Gulu, Uganda",
    year: 2023
  },
  {
    id: 7,
    title: "Corporate Headquarters",
    description: "Design and construction of a flagship office building featuring modern workspaces, conference facilities, and recreation areas.",
    imageUrl: "/lovable-uploads/cf260a4a-9a98-43bd-9770-a56edbec72d6.png",
    category: "commercial",
    location: "Kampala, Uganda",
    year: 2022
  },
  {
    id: 8,
    title: "Restaurant Interior Design",
    description: "Complete interior redesign for an upscale restaurant, featuring custom lighting, furniture, and an open kitchen concept.",
    imageUrl: "/lovable-uploads/d1d33731-fa6a-491a-8d63-d700a324d7e6.png",
    category: "interiors",
    location: "Entebbe, Uganda",
    year: 2023
  },
  {
    id: 9,
    title: "Historic Building Restoration",
    description: "Meticulous restoration of a colonial-era building, preserving historical elements while upgrading structural components.",
    imageUrl: "/lovable-uploads/e0c3b996-c80e-44e2-b2bc-448fa4cc8d95.png",
    category: "renovations",
    location: "Fort Portal, Uganda",
    year: 2021
  },
  {
    id: 10,
    title: "Contemporary Family Home",
    description: "A modern family residence featuring open spaces, natural lighting, and sustainable building materials.",
    imageUrl: "/lovable-uploads/28cef5c4-7df4-4b0a-8977-da34130766cc.png",
    category: "residential",
    location: "Kampala, Uganda",
    year: 2023
  },
  {
    id: 11,
    title: "Urban Office Complex",
    description: "A multi-story office building designed for collaboration and productivity in the heart of the city.",
    imageUrl: "/lovable-uploads/91cf1076-7091-4501-ac07-b5a7e0f5649b.png",
    category: "commercial",
    location: "Kampala, Uganda",
    year: 2022
  },
  {
    id: 12,
    title: "Luxury Kitchen Remodel",
    description: "Complete redesign of a kitchen space featuring custom cabinetry, premium appliances, and elegant finishes.",
    imageUrl: "/lovable-uploads/ac830e73-d4d5-47f3-98e7-6418329b7677.png",
    category: "interiors",
    location: "Entebbe, Uganda",
    year: 2023
  },
  {
    id: 13,
    title: "Colonial Home Restoration",
    description: "Meticulous restoration of a heritage property, preserving historical elements while adding modern conveniences.",
    imageUrl: "/lovable-uploads/abb11484-e4c2-42a6-a835-84eb2113d051.png",
    category: "renovations",
    location: "Jinja, Uganda",
    year: 2021
  },
  {
    id: 14,
    title: "Retail Center Development",
    description: "Modern shopping complex with multiple retail spaces, food court, and ample parking for visitors.",
    imageUrl: "/lovable-uploads/a0e2168b-d411-46c9-8eec-45d545588260.png",
    category: "commercial",
    location: "Kampala, Uganda",
    year: 2022
  },
  {
    id: 15,
    title: "Suburban Villa",
    description: "Elegant family home with 4 bedrooms, landscaped garden, and premium finishes throughout.",
    imageUrl: "/lovable-uploads/9639e92e-28d5-4b64-a7bd-c6f5982cb61a.png",
    category: "residential",
    location: "Mukono, Uganda",
    year: 2023
  },
  {
    id: 16,
    title: "Corporate Headquarters",
    description: "Signature office building with branded design elements, staff amenities, and sustainable features.",
    imageUrl: "/lovable-uploads/cf260a4a-9a98-43bd-9770-a56edbec72d6.png",
    category: "commercial",
    location: "Kampala, Uganda",
    year: 2022
  },
  {
    id: 17,
    title: "Restaurant Interior",
    description: "Stylish dining space featuring ambient lighting, custom furniture, and a distinctive aesthetic.",
    imageUrl: "/lovable-uploads/d1d33731-fa6a-491a-8d63-d700a324d7e6.png",
    category: "interiors",
    location: "Entebbe, Uganda",
    year: 2023
  },
  {
    id: 18,
    title: "Historic Building Renewal",
    description: "Careful renovation of a cultural landmark, maintaining architectural integrity while upgrading facilities.",
    imageUrl: "/lovable-uploads/e0c3b996-c80e-44e2-b2bc-448fa4cc8d95.png",
    category: "renovations",
    location: "Fort Portal, Uganda",
    year: 2021
  }
];
