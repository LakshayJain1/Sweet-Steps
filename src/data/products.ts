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
    mainImg: "/product-1.jpg",
    galleryImages: [
      "/products/two-imp/616561075_17884532361431293_6748449571348436754_n.jpg",
      "/products/two-imp/624027004_18080704790020495_1901701617521697128_n.jpg",
      "/products/two-imp/624872407_18079786994584308_3771641984599392725_n.jpg",
      "/products/two-imp/627446331_18106562986766187_3381016230724678298_n.jpg"
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
    mainImg: "/product-2.jpg",
    galleryImages: [
      "/products/four-imp/623791658_18082922257965629_7135710008465237176_n.jpg",
      "/products/four-imp/625014262_18037330799541096_3734195408163251281_n.jpg",
      "/product-2.jpg"
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
    mainImg: "/og-image.jpg",
    galleryImages: [
      "/og-image.jpg",
      "/product-1.jpg",
      "/product-2.jpg"
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
    mainImg: "/product-3.jpg",
    galleryImages: [
      "/products/elder-blessing/565952625_17863936869481205_1499331118673531301_n.webp",
      "/products/elder-blessing/625008219_18092323357985877_3288329523995516286_n.jpg",
      "/product-3.jpg"
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
  }
];
