export interface Product {
  slug: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  mainImg: string;
  galleryImages: string[];
  details: {
    frameTexture: string;
    quality: string;
    customizations: string[];
  };
}

export const products: Product[] = [
  {
    slug: "classic-two-impression",
    name: "Classic Two Impression Frame",
    shortDesc: "Perfect for one hand and one foot impression of your newborn.",
    fullDesc: "Capture the start of a beautiful journey with our Classic Two Impression Frame. This signature piece is our most popular choice for newborns, providing a perfectly balanced display for one tiny hand and one tiny foot. Every wrinkle and line is captured with scientific precision to create a lifetime of memories.",
    mainImg: "/Assets/Frame_01.webp",
    galleryImages: [
      "/Assets/Frame_01_01.webp",
      "/Assets/Frame_01.webp"
    ],
    details: {
      frameTexture: "Premium Teak Wood with Matte/Gloss Finish",
      quality: "High-definition 3D casting with 99.9% detail accuracy",
      customizations: [
        "Choice of Frame Color (White, Oak, Walnut, Gold)",
        "Background Matting Selection",
        "Personalized Nameplate Engraving"
      ]
    }
  },
  {
    slug: "sibling-bond-keepsake",
    name: "Sibling Bond Keepsake",
    shortDesc: "A beautiful representation of the unbreakable bond between brothers and sisters.",
    fullDesc: "There is no bond quite like that between siblings. Our Sibling Bond Keepsake captures the hands of brothers and sisters together, creating a powerful visual reminder of their lifelong connection. Whether they are toddlers or older children, this casting preserves a moment of unity forever.",
    mainImg: "/Assets/Frame_02.webp",
    galleryImages: [
      "/Assets/Frame_02_01.webp",
      "/Assets/Frame_02.webp"
    ],
    details: {
      frameTexture: "Solid European Ash Wood",
      quality: "Durable gallery-grade 3D casting",
      customizations: [
        "Horizontal or Vertical Layout",
        "Custom LED backlighting (optional)",
        "Premium Acrylic Glass Protection"
      ]
    }
  },
  {
    slug: "eternal-couple-casting",
    name: "Eternal Couple Casting",
    shortDesc: "Hold hands forever with a stunning life-like 3D sculpture of your togetherness.",
    fullDesc: "Designed for anniversaries, weddings, or 'just because', our Eternal Couple Casting is a masterpiece of intimacy. We capture your hands intertwined, preserving the unique textures and rings that define your relationship. It's more than art—it's a vow rendered in 3D.",
    mainImg: "/Assets/Frame_03.webp",
    galleryImages: [
      "/Assets/Frame_03_01.webp",
      "/Assets/Frame_03.webp"
    ],
    details: {
      frameTexture: "Modern Shadowbox with Metallic Accents",
      quality: "Museum-quality archival casting material",
      customizations: [
        "Antique Silver or Eternal Gold Finish",
        "Engraved Date and Venue Details",
        "Silk or Velvet Background Fabric"
      ]
    }
  },
  {
    slug: "elder-blessing-keepsake",
    name: "Elder Blessing Keepsake",
    shortDesc: "Capture the precious bond and wisdom of grandparents for generations to come.",
    fullDesc: "The hands of our elders tell stories of wisdom, struggle, and immense love. Our Elder Blessing Keepsake captures the hands of grandparents holding their grandchildren, or simply the hands of the family patriarch/matriarch. It is a heritage piece that will be cherished by generations to come.",
    mainImg: "/Assets/Frame_04.webp",
    galleryImages: [
      "/Assets/Frame_04_01.webp",
      "/Assets/Frame_04.webp"
    ],
    details: {
      frameTexture: "Distressed Heritage Wood Frame",
      quality: "Enhanced texture casting to highlight wisdom lines",
      customizations: [
        "Classic Monochrome or Bronze Finish",
        "Space for Family Tree Inscription",
        "UV-Protected Museum Glass"
      ]
    }
  },
  {
    slug: "luxury-family-trio",
    name: "Luxury Family Trio",
    shortDesc: "A grand display for three impressions, perfect for small families or growing toddlers.",
    fullDesc: "Our Luxury Family Trio is designed to celebrate the beautiful trinity of your family. Whether it's both parents with a baby, or three siblings together, this wide-format frame provides a sophisticated stage for your most treasured connections.",
    mainImg: "/Assets/Frame_05.webp",
    galleryImages: [
      "/Assets/Frame_05_01.webp",
      "/Assets/Frame_05.webp"
    ],
    details: {
      frameTexture: "Hand-finished Imperial Mahogany",
      quality: "Premium high-density casting with silk finish",
      customizations: [
        "Triple Matting Options",
        "Golden Calligraphy",
        "Integrated LED Spotlight"
      ]
    }
  },
  {
    slug: "newborn-solo-keepsake",
    name: "Newborn Solo Keepsake",
    shortDesc: "A delicate single-impression frame focused on the smallest details.",
    fullDesc: "Sometimes, one tiny hand is all you need to tell the whole story. Our Newborn Solo Keepsake focuses entirely on a single hand or foot, emphasizing the incredible detail and smallness of your baby's earliest days.",
    mainImg: "/Assets/Single Hand.webp",
    galleryImages: [
      "/Assets/Single Hand.webp",
      "/Assets/Frame_06.webp"
    ],
    details: {
      frameTexture: "Minimalist Nordic Pine",
      quality: "Ultra-fine detail reproduction",
      customizations: [
        "Pastel Color Matting",
        "Birth Date Engraving",
        "Desktop or Wall Mount"
      ]
    }
  }
];
