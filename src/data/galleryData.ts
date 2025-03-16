
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
    id: 19,
    title: "",
    description: "",
    imageUrl: "/lovable-uploads/bb30198d-f0db-4c43-8e87-78a5886a3ce2.png",
    category: "residential",
    location: "",
    year: 2024
  },
  {
    id: 20,
    title: "",
    description: "",
    imageUrl: "/lovable-uploads/b6595764-f563-49bb-94d2-f374ef45033e.png",
    category: "residential",
    location: "",
    year: 2024
  },
  {
    id: 21,
    title: "",
    description: "",
    imageUrl: "/lovable-uploads/d0ef28b6-b934-4c09-86a3-932d88c64ab7.png",
    category: "commercial",
    location: "",
    year: 2024
  },
  {
    id: 22,
    title: "",
    description: "",
    imageUrl: "/lovable-uploads/854f8fce-3949-4cbd-95d1-356f2b2d9386.png",
    category: "residential",
    location: "Tweestroom Project",
    year: 2024
  },
  {
    id: 23,
    title: "Bamboo Scaffolding Construction",
    description: "Traditional bamboo scaffolding techniques used in modern building construction, showcasing sustainable building practices.",
    imageUrl: "/lovable-uploads/bc1af56f-2872-43ee-b174-dcfef35ae5dd.png",
    category: "commercial",
    location: "Kampala, Uganda",
    year: 2023
  },
  {
    id: 24,
    title: "Multi-Story Commercial Development",
    description: "Construction of a reinforced concrete commercial building with multiple floors for office and retail spaces.",
    imageUrl: "/lovable-uploads/485cb351-5428-4a3a-89d3-df43c5782470.png",
    category: "commercial",
    location: "Entebbe, Uganda",
    year: 2023
  },
  {
    id: 25,
    title: "Foundation Construction",
    description: "Precision concrete foundation work for a residential project, showcasing our attention to structural detail.",
    imageUrl: "/lovable-uploads/a8f52eff-7a1b-40f9-bd5b-5e8d6c44ef7b.png",
    category: "residential",
    location: "Jinja, Uganda",
    year: 2022
  },
  {
    id: 26,
    title: "Steel Reinforcement Installation",
    description: "Specialized steel reinforcement work for a commercial project, demonstrating our engineering expertise.",
    imageUrl: "/lovable-uploads/a75791ea-b76a-4871-b13d-862d31d32a38.png",
    category: "commercial",
    location: "Kampala, Uganda",
    year: 2022
  },
  {
    id: 27,
    title: "Residential Development Plan",
    description: "Detailed site planning for a residential neighborhood, focusing on optimal land use and community integration.",
    imageUrl: "/lovable-uploads/7621b08a-3b70-417a-baf4-0a46a9665a5e.png",
    category: "residential",
    location: "Mukono, Uganda",
    year: 2024
  },
  {
    id: 28,
    title: "Custom Home Floor Plan",
    description: "Comprehensive floor plan for a spacious family home with multiple bedrooms, open living areas, and modern amenities.",
    imageUrl: "/lovable-uploads/3fb417ee-4ae7-4832-8f61-814aec9ef18e.png",
    category: "residential",
    location: "Kampala, Uganda",
    year: 2023
  },
  {
    id: 29,
    title: "Eco-Home Design Section",
    description: "Cross-section view of an eco-friendly home design, highlighting natural ventilation and lighting strategies.",
    imageUrl: "/lovable-uploads/dd3766b8-28e7-4cd1-ad07-1e96d4360ea3.png",
    category: "residential",
    location: "Fort Portal, Uganda",
    year: 2024
  },
  {
    id: 30,
    title: "Modern Residence Floor Plans",
    description: "Detailed architectural floor plans for a contemporary residence with efficient space utilization and thoughtful design.",
    imageUrl: "/lovable-uploads/85cfa8aa-2677-4786-8c19-b712a04cdc06.png",
    category: "residential",
    location: "Entebbe, Uganda",
    year: 2023
  }
];
