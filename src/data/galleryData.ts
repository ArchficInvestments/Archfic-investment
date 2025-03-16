
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
  },
  {
    id: 31,
    title: "Residential 2F Floor Plan",
    description: "Second floor plan of a modern home design, showing the layout of bedrooms, bathrooms, and living spaces.",
    imageUrl: "/lovable-uploads/5a4306ba-5b4e-4767-beb6-5b3d8ff222a5.png",
    category: "residential",
    location: "Kampala, Uganda",
    year: 2024
  },
  {
    id: 32,
    title: "Residential 1F Floor Plan",
    description: "First floor plan of a modern home design, showcasing the office space, cafe, and functional areas.",
    imageUrl: "/lovable-uploads/6fde4f2f-b0d1-4a3b-b95d-95d08ed68c52.png",
    category: "residential",
    location: "Kampala, Uganda",
    year: 2024
  },
  {
    id: 33,
    title: "Edrington Urban Site Plan",
    description: "Detailed site plan showing the building's location in relation to surrounding infrastructure and landscape.",
    imageUrl: "/lovable-uploads/b7d364d3-48f2-42cb-92c2-7bcbd9b25687.png",
    category: "commercial",
    location: "Rubicon, Edrington",
    year: 2023
  },
  {
    id: 34,
    title: "Urban Fringe Development Plan",
    description: "Strategic development plan for an urban fringe area, showcasing innovative land use and architectural integration.",
    imageUrl: "/lovable-uploads/647470a8-3b35-4b7a-b38b-0295fe9c5a27.png",
    category: "commercial",
    location: "Rubicon, Edrington",
    year: 2023
  },
  {
    id: 35,
    title: "Apartment Interior Layout",
    description: "Efficient interior layout design for an apartment unit, maximizing space utilization and functional living areas.",
    imageUrl: "/lovable-uploads/5f454239-cf7f-4966-a4d7-4db8dcadb88e.png",
    category: "interiors",
    location: "Kampala, Uganda",
    year: 2023
  },
  {
    id: 36,
    title: "Multi-Unit Residential Layout",
    description: "Comprehensive floor plan for a multi-unit residential building, showcasing efficient space distribution and circulation.",
    imageUrl: "/lovable-uploads/2489fa4e-6a7f-468b-8075-73dee34541c3.png",
    category: "residential",
    location: "Entebbe, Uganda",
    year: 2022
  },
  {
    id: 37,
    title: "Compact Apartment Design",
    description: "Smart design solution for a compact apartment, featuring multifunctional spaces and integrated storage.",
    imageUrl: "/lovable-uploads/dab40695-d43f-4c0a-ac17-4b426919b678.png",
    category: "interiors",
    location: "Kampala, Uganda",
    year: 2023
  },
  {
    id: 38,
    title: "Linear Residential Complex",
    description: "Innovative linear layout for a residential complex, optimizing natural light and ventilation throughout.",
    imageUrl: "/lovable-uploads/e7120a22-9e74-4561-b649-b9a2aaf254c2.png",
    category: "residential",
    location: "Jinja, Uganda",
    year: 2022
  },
  {
    id: 39,
    title: "Open Concept Living Space",
    description: "Contemporary open-concept floor plan for a residential unit with seamless flow between living spaces.",
    imageUrl: "/lovable-uploads/68d4cf04-7857-4878-a464-4fe46674583d.png",
    category: "interiors",
    location: "Kampala, Uganda",
    year: 2024
  },
  {
    id: 40,
    title: "Multi-Floor Residential Section",
    description: "Detailed section view of a multi-floor residential building, showing the vertical relationships between spaces.",
    imageUrl: "/lovable-uploads/0ac9b233-c25b-42de-8a0d-85e9056898f7.png",
    category: "residential",
    location: "Entebbe, Uganda",
    year: 2023
  },
  {
    id: 41,
    title: "Sectional House Concept",
    description: "Cross-section design of a modern residence showing spatial relationships and structural elements.",
    imageUrl: "/lovable-uploads/f12c8972-4401-471c-be58-58edbeede81f.png",
    category: "residential",
    location: "Kampala, Uganda",
    year: 2024
  },
  {
    id: 42,
    title: "Ground Floor Residential Plan",
    description: "Detailed ground floor plan for a residential project with clear delineation of functional spaces.",
    imageUrl: "/lovable-uploads/a94179b0-f518-4a50-ad3a-f4160da4a0a4.png",
    category: "residential",
    location: "Kampala, Uganda",
    year: 2023
  },
  {
    id: 43,
    title: "Basement Floor Planning",
    description: "Strategic basement layout for a residential project, incorporating utility spaces and recreational areas.",
    imageUrl: "/lovable-uploads/08e837ea-15de-4892-8b00-2364dae4eda0.png",
    category: "residential",
    location: "Kampala, Uganda",
    year: 2023
  },
  {
    id: 44,
    title: "Lakeside Residence Site Plan",
    description: "Site planning for a lakeside residence, taking advantage of natural surroundings and views.",
    imageUrl: "/lovable-uploads/fd92d23e-d797-4936-915b-120b10e86fdd.png",
    category: "residential",
    location: "Jinja, Uganda",
    year: 2023
  },
  {
    id: 45,
    title: "Before and After Renovation Concept",
    description: "Comparison showing the transformation of a traditional structure through modern renovation techniques.",
    imageUrl: "/lovable-uploads/4b4ea967-76e7-4621-91ed-0179229c71c1.png",
    category: "renovations",
    location: "Fort Portal, Uganda",
    year: 2022
  },
  {
    id: 46,
    title: "Traditional Building Elevation",
    description: "Elevation drawing of a traditional building renovation, preserving historical character while updating functionality.",
    imageUrl: "/lovable-uploads/e9225624-5dcf-4609-bb29-ef23e8d5b482.png",
    category: "renovations",
    location: "Jinja, Uganda",
    year: 2022
  },
  {
    id: 47,
    title: "Modern Home Section Drawing",
    description: "Detailed sectional drawing of a modern home, highlighting spatial relationships and construction details.",
    imageUrl: "/lovable-uploads/bd122235-2ac9-4d7f-87b6-28b70163cb3b.png",
    category: "residential",
    location: "Kampala, Uganda",
    year: 2024
  },
  {
    id: 48,
    title: "Comprehensive Project Site Plan",
    description: "Detailed site plan for a large-scale residential development project, showing building footprints and landscape elements.",
    imageUrl: "/lovable-uploads/ed02edd2-8e1a-4cca-89e5-4e6b7feb681d.png",
    category: "residential",
    location: "Entebbe, Uganda",
    year: 2023
  },
  {
    id: 49,
    title: "South Elevation Building Design",
    description: "Elevation drawing from the south perspective, showcasing the building's façade treatment and proportions.",
    imageUrl: "/lovable-uploads/35b32f28-e0f8-4622-8871-1371a7d9c575.png",
    category: "commercial",
    location: "Kampala, Uganda",
    year: 2023
  },
  {
    id: 50,
    title: "East Elevation Building Design",
    description: "Elevation drawing from the east perspective, highlighting the building's architectural features and materials.",
    imageUrl: "/lovable-uploads/4b6309c7-4fc3-4434-ac4e-b60f55c2ceab.png",
    category: "commercial",
    location: "Kampala, Uganda",
    year: 2023
  },
  {
    id: 51,
    title: "First Floor Detailed Plan",
    description: "Comprehensive first floor plan with detailed room designations and dimensional information.",
    imageUrl: "/lovable-uploads/8f57e56a-db72-4047-9b8e-d2d0e9ab94e4.png",
    category: "residential",
    location: "Kampala, Uganda",
    year: 2024
  },
  {
    id: 52,
    title: "Ground Floor Detailed Plan",
    description: "Detailed ground floor layout with clear delineation of spaces and circulation paths.",
    imageUrl: "/lovable-uploads/aaed46bd-4872-4d55-93dd-29c53a5c767b.png",
    category: "residential",
    location: "Kampala, Uganda",
    year: 2024
  },
  {
    id: 53,
    title: "Master Plan Development",
    description: "Comprehensive master planning for a multi-building development, showcasing relationships between structures.",
    imageUrl: "/lovable-uploads/371dffc2-4419-45a1-a994-c7c404725a89.png",
    category: "commercial",
    location: "Kampala, Uganda",
    year: 2023
  },
  {
    id: 54,
    title: "Longitudinal Section Drawing",
    description: "Detailed longitudinal section of a single-family residence, showing interior spatial relationships.",
    imageUrl: "/lovable-uploads/cc131bc7-96ab-42b2-a583-4fbba59c8cc8.png",
    category: "residential",
    location: "Entebbe, Uganda",
    year: 2023
  },
  {
    id: 55,
    title: "Luxury Residence Ground Floor",
    description: "Ground floor plan of a luxury residence with detailed space allocations and dimensional information.",
    imageUrl: "/lovable-uploads/c5f6b19e-19ee-4734-8287-029cb5c9f558.png",
    category: "residential",
    location: "Kampala, Uganda",
    year: 2024
  },
  {
    id: 56,
    title: "Cross-Section Building Analysis",
    description: "Detailed cross-sectional analysis of a multi-story building, illustrating structural and spatial configurations.",
    imageUrl: "/lovable-uploads/62b2e1e6-3261-4ba4-89de-faa7f7809d99.png",
    category: "commercial",
    location: "Kampala, Uganda",
    year: 2023
  },
  {
    id: 57,
    title: "Multi-Level Building Section",
    description: "Comprehensive sectional drawing showing multiple levels of a commercial structure with technical details.",
    imageUrl: "/lovable-uploads/f3f680b8-a1f9-4182-bcd7-8ca2ad1f0db8.png",
    category: "commercial",
    location: "Entebbe, Uganda",
    year: 2022
  },
  {
    id: 58,
    title: "Commercial Building Floor Plan",
    description: "Detailed floor plan of a commercial facility with clear delineation of functional areas and circulation paths.",
    imageUrl: "/lovable-uploads/27c587c8-7d06-4f5d-ace8-2a2713f029cc.png",
    category: "commercial",
    location: "Kampala, Uganda",
    year: 2023
  },
  {
    id: 59,
    title: "Multi-Building Complex Plan",
    description: "Master plan for a multi-building complex, showing relationships between structures and outdoor spaces.",
    imageUrl: "/lovable-uploads/d5dd1fb4-700b-4fc2-96f1-4e8819af4f31.png",
    category: "commercial",
    location: "Kampala, Uganda",
    year: 2022
  },
  {
    id: 60,
    title: "Detailed Facility Floor Plan",
    description: "Comprehensive floor plan of an institutional facility with detailed space allocations and technical information.",
    imageUrl: "/lovable-uploads/c501a26f-969d-4687-93a4-b6b448090f70.png",
    category: "commercial",
    location: "Entebbe, Uganda",
    year: 2023
  },
  {
    id: 61,
    title: "Isometric Building Concept",
    description: "Isometric representation of a modern residential concept, showcasing volumetric relationships and spatial organization.",
    imageUrl: "/lovable-uploads/0f6a7bdf-0236-41d4-8a24-9e455d1eb97f.png",
    category: "residential",
    location: "Kampala, Uganda",
    year: 2024
  },
  {
    id: 62,
    title: "Exploded Axonometric Drawing",
    description: "Exploded axonometric drawing of a residential project, illustrating the relationships between building components.",
    imageUrl: "/lovable-uploads/81415e2c-0b41-4866-8d62-25670ac4e358.png",
    category: "residential",
    location: "Entebbe, Uganda",
    year: 2023
  },
  {
    id: 63,
    title: "Hillside Residence Section",
    description: "Sectional drawing of a hillside residence, showing how the structure adapts to the sloping terrain.",
    imageUrl: "/lovable-uploads/ac638aae-fb43-4252-97de-e6353d9cd5c5.png",
    category: "residential",
    location: "Fort Portal, Uganda",
    year: 2023
  },
  {
    id: 64,
    title: "Modern Home Elevation",
    description: "Front elevation of a contemporary residential design, highlighting façade materials and architectural features.",
    imageUrl: "/lovable-uploads/b3ef838a-c029-4fbd-9201-4901c31d7e0b.png",
    category: "residential",
    location: "Kampala, Uganda",
    year: 2024
  },
  {
    id: 65,
    title: "Multi-Level Floor Plans",
    description: "Stacked floor plans showing the vertical relationships between multiple levels of a residential project.",
    imageUrl: "/lovable-uploads/f393ecd5-f590-46c4-a24a-4e79fa86f7db.png",
    category: "residential",
    location: "Kampala, Uganda",
    year: 2023
  },
  {
    id: 66,
    title: "Tweestroom Housing Concept",
    description: "Conceptual diagram for the Tweestroom housing project, showing spatial adaptability and transformation.",
    imageUrl: "/lovable-uploads/238d05a5-bef4-45bc-9c9c-8a10dec7840b.png",
    category: "residential",
    location: "Tweestroom Project",
    year: 2024
  },
  {
    id: 67,
    title: "Building Systems Diagram",
    description: "Detailed diagrammatic representation of a residential building's systems and functional components.",
    imageUrl: "/lovable-uploads/617fc1ea-9da7-4f5f-ae85-459f4e45faae.png",
    category: "residential",
    location: "Kampala, Uganda",
    year: 2023
  },
  {
    id: 68,
    title: "Residential Site Context Plan",
    description: "Site context plan for a residential project, showing the building's relationship to its surrounding environment.",
    imageUrl: "/lovable-uploads/d8afd132-b64b-49ab-9123-9b86de04ea03.png",
    category: "residential",
    location: "Entebbe, Uganda",
    year: 2024
  },
  {
    id: 69,
    title: "Floor Plan Comparison Studies",
    description: "Comparative study of different floor plan layouts for a residential project, analyzing efficiency and functionality.",
    imageUrl: "/lovable-uploads/889890c8-4e8a-4698-bba6-d0bb0a91a7c2.png",
    category: "residential",
    location: "Kampala, Uganda",
    year: 2023
  },
  {
    id: 70,
    title: "Detailed Architectural Section",
    description: "Highly detailed architectural section showing construction elements, material transitions, and spatial organization.",
    imageUrl: "/lovable-uploads/5368790d-4d1f-4bb0-a303-ea45f89b3f57.png",
    category: "residential",
    location: "Kampala, Uganda",
    year: 2023
  }
];
