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
    slug: "grandmothers-blessing-frame",
    name: "Grandmother's Blessing Frame",
    shortDesc: "Hand and feet impressions of a beloved grandmother, a timeless memorial keepsake.",
    fullDesc: "Preserve the legacy of a loved one with our Grandmother's Blessing Frame. This memorial piece captures both the hands and feet of a family matriarch who has passed, creating a powerful tribute that honors her life and the blessings she bestowed. A heritage keepsake for generations to cherish.",
    mainImg: "/Assets/Frame_01.webp",
    galleryImages: [
      "/Assets/Frame_01_01.webp",
      "/Assets/Frame_01.webp"
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
    slug: "anniversary-couple-frame",
    name: "Anniversary Couple Impression Frame",
    shortDesc: "Parents' hand impressions gifted on their marriage anniversary, a wall hanging couple frame.",
    fullDesc: "Celebrate enduring love with our Anniversary Couple Frame. This wall-hanging piece captures the intertwined hands of a couple, perfect for commemorating a milestone anniversary. The vertical orientation makes it an elegant statement piece for any home, symbolizing a lifetime of partnership.",
    mainImg: "/Assets/Frame_02.webp",
    galleryImages: [
      "/Assets/Frame_02_01.webp",
      "/Assets/Frame_02.webp"
    ],
    details: {
      frameTexture: "Solid European Ash Wood",
      quality: "Durable gallery-grade 3D casting",
      customizations: [
        "Vertical Wall-Hanging Layout",
        "Custom LED Backlighting (optional)",
        "Premium Acrylic Glass Protection"
      ]
    }
  },
  {
    slug: "eternal-couple-table-frame",
    name: "Eternal Couple Table Frame",
    shortDesc: "Couple's intertwined hands in a tabletop frame with base, a freestanding keepsake.",
    fullDesc: "Designed for anniversaries, weddings, or 'just because', our Eternal Couple Table Frame captures your hands intertwined on a sturdy base. Unlike the wall-hanging version, this freestanding piece sits elegantly on any surface, a daily reminder of your bond. Preserves the unique textures and rings that define your relationship.",
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
        "Silk or Velvet Background Fabric",
        "Sturdy Tabletop Base Included"
      ]
    }
  },
  {
    slug: "grandmother-blessing-table-frame",
    name: "Grandmother's Blessing Table Frame",
    shortDesc: "Single hand impression of a beloved grandmother, a freestanding blessing keepsake.",
    fullDesc: "The hands of our elders tell stories of wisdom, struggle, and immense love. Our Grandmother's Blessing Table Frame captures a single hand impression in a freestanding tabletop frame. A delicate yet powerful reminder of her love and guidance, designed to sit proudly on any surface.",
    mainImg: "/Assets/Frame_04.webp",
    galleryImages: [
      "/Assets/Frame_04_01.webp",
      "/Assets/Frame_04.webp"
    ],
    details: {
      frameTexture: "Distressed Heritage Wood Frame with Tabletop Base",
      quality: "Enhanced texture casting to highlight wisdom lines",
      customizations: [
        "Classic Monochrome or Bronze Finish",
        "Space for Personal Inscription",
        "UV-Protected Museum Glass"
      ]
    }
  },
  {
    slug: "baby-silver-quad-impression",
    name: "Baby Silver Quad Impression Frame",
    shortDesc: "Baby's 2 hands and 2 feet (4 impressions), premium silver finish with silver linings.",
    fullDesc: "Our most luxurious baby frame featuring all four impressions in a stunning silver-colored frame with silver linings and a silver-grey border. The metallic finish adds a contemporary elegance to this comprehensive keepsake, capturing every tiny detail of your newborn's hands and feet.",
    mainImg: "/Assets/Frame_05.webp",
    galleryImages: [
      "/Assets/Frame_05_01.webp",
      "/Assets/Frame_05.webp"
    ],
    details: {
      frameTexture: "Premium Silver-Finished Frame with Silver Linings",
      quality: "High-definition 3D casting with 99.9% detail accuracy",
      customizations: [
        "Silver Grey Frame Border",
        "Personalized Nameplate Engraving",
        "Birth Details Customization",
        "Premium Matting Selection"
      ]
    }
  },
  {
    slug: "baby-classic-dual-impression",
    name: "Baby Classic Dual Impression Frame",
    shortDesc: "Baby's 1 hand and 1 foot (2 impressions), our signature newborn keepsake.",
    fullDesc: "Capture the start of a beautiful journey with our Classic Dual Impression Frame. This signature piece is our most popular choice for newborns, providing a perfectly balanced display for one tiny hand and one tiny foot. Every wrinkle and line is captured with scientific precision to create a lifetime of memories.",
    mainImg: "/Assets/Frame_06.webp",
    galleryImages: [
      "/Assets/Frame_06.webp"
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
    slug: "baby-quad-impression-standard",
    name: "Baby Quad Impression Frame",
    shortDesc: "Baby's 2 hands and 2 feet (4 impressions), complete newborn keepsake.",
    fullDesc: "Our comprehensive Baby Quad Impression Frame captures all four impressions, both tiny hands and both tiny feet. This complete keepsake preserves the full picture of your newborn's earliest days in a single elegant frame.",
    mainImg: "/Assets/Frame_07.webp",
    galleryImages: [
      "/Assets/Frame_07.webp"
    ],
    details: {
      frameTexture: "Premium Wood Frame with Matte Finish",
      quality: "High-definition 3D casting with 99.9% detail accuracy",
      customizations: [
        "Choice of Frame Color (White, Oak, Walnut, Gold)",
        "Background Matting Selection",
        "Personalized Nameplate Engraving"
      ]
    }
  },
  {
    slug: "baby-quad-wooden-sticker",
    name: "Baby Quad Impression Frame with Name & DOB Details",
    shortDesc: "Baby's 2 hands and 2 feet (4 impressions), wooden texture with custom name/DOB stickers.",
    fullDesc: "This Baby Quad Impression Frame features a warm wooden texture with off-white background, enhanced with custom sticker-cut details including baby's name, date of birth, and other personalized information. A beautifully detailed keepsake that tells the complete story.",
    mainImg: "/Assets/Frame_08.webp",
    galleryImages: [
      "/Assets/Frame_08_01.webp",
      "/Assets/Frame_08.webp"
    ],
    details: {
      frameTexture: "Wooden Texture Frame with Off-White Background",
      quality: "High-definition 3D casting with 99.9% detail accuracy",
      customizations: [
        "Custom Sticker-Cut Name & DOB",
        "Birth Time & Weight Details",
        "Hospital Name Personalization",
        "Wooden Frame Finish Options"
      ]
    }
  },
  {
    slug: "baby-quad-wooden-sticker-v2",
    name: "Baby Quad Impression Frame, Detailed Edition",
    shortDesc: "Baby's 2 hands and 2 feet (4 impressions), wooden texture with comprehensive birth details.",
    fullDesc: "A variant of our detailed baby frame with wooden texture and off-white background, featuring custom sticker-cut personalization for name, date of birth, and other birth details. Each frame is uniquely crafted with your baby's specific information.",
    mainImg: "/Assets/Frame_09.webp",
    galleryImages: [
      "/Assets/Frame_09_01.webp",
      "/Assets/Frame_09.webp"
    ],
    details: {
      frameTexture: "Wooden Texture Frame with Off-White Background",
      quality: "High-definition 3D casting with 99.9% detail accuracy",
      customizations: [
        "Custom Sticker-Cut Name & DOB",
        "Birth Time & Weight Details",
        "Hospital Name Personalization",
        "Wooden Frame Finish Options"
      ]
    }
  },
  {
    slug: "grandparents-blessing-frame",
    name: "Grandparents' Blessing Frame",
    shortDesc: "Both grandparents' hand impressions, a dual blessing keepsake for generations.",
    fullDesc: "Capture the combined blessings of both grandparents in one beautiful frame. This dual impression piece preserves the hands of a grandfather and grandmother together, creating a powerful heritage keepsake that represents the foundation of your family's love.",
    mainImg: "/Assets/Frame_10.webp",
    galleryImages: [
      "/Assets/Frame_10_01.webp",
      "/Assets/Frame_10.webp"
    ],
    details: {
      frameTexture: "Distressed Heritage Wood Frame",
      quality: "Enhanced texture casting to highlight wisdom lines",
      customizations: [
        "Classic Monochrome or Bronze Finish",
        "Space for Family Tree Inscription",
        "UV-Protected Museum Glass",
        "Dual Nameplate Engraving"
      ]
    }
  },
  {
    slug: "baby-classic-detailed-frame",
    name: "Baby Classic Detailed Frame",
    shortDesc: "Baby's 1 hand and 1 foot (2 impressions), comprehensive birth details with family photos.",
    fullDesc: "Our most detailed classic frame featuring baby's hand and foot impressions alongside comprehensive birth information: date of birth, blood group, hospital name, time of birth, and weight, plus space for family photographs. A complete story of your baby's arrival in one frame.",
    mainImg: "/Assets/Frame_11.webp",
    galleryImages: [
      "/Assets/Frame_11_01.webp",
      "/Assets/Frame_11.webp"
    ],
    details: {
      frameTexture: "Classic Premium Frame with Detail Panels",
      quality: "High-definition 3D casting with 99.9% detail accuracy",
      customizations: [
        "Full Birth Details Panel (DOB, Blood Group, Hospital, Time, Weight)",
        "Family Photo Slots (Multiple)",
        "Personalized Nameplate",
        "Choice of Frame Color (White, Oak, Walnut, Gold)"
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
  },
  {
    slug: "baby-classic-detailed-frame-v2",
    name: "Baby Classic Detailed Frame",
    shortDesc: "Baby's 1 hand and 1 foot (2 impressions), comprehensive birth details with family photos.",
    fullDesc: "Our detailed classic frame featuring baby's hand and foot impressions alongside comprehensive birth information: date of birth, blood group, hospital name, time of birth, and weight, plus space for family photographs. A complete story of your baby's arrival in one frame.",
    mainImg: "/Assets/Frame_12.webp",
    galleryImages: [
      "/Assets/Frame_12.webp"
    ],
    details: {
      frameTexture: "Classic Premium Frame with Detail Panels",
      quality: "High-definition 3D casting with 99.9% detail accuracy",
      customizations: [
        "Full Birth Details Panel (DOB, Blood Group, Hospital, Time, Weight)",
        "Family Photo Slots (Multiple)",
        "Personalized Nameplate",
        "Choice of Frame Color (White, Oak, Walnut, Gold)"
      ]
    }
  },
  {
    slug: "baby-classic-detailed-frame-v3",
    name: "Baby Classic Detailed Frame",
    shortDesc: "Baby's 1 hand and 1 foot (2 impressions), comprehensive birth details with family photos.",
    fullDesc: "Our detailed classic frame featuring baby's hand and foot impressions alongside comprehensive birth information: date of birth, blood group, hospital name, time of birth, and weight, plus space for family photographs. A complete story of your baby's arrival in one frame.",
    mainImg: "/Assets/Frame_13.webp",
    galleryImages: [
      "/Assets/Frame_13.webp"
    ],
    details: {
      frameTexture: "Classic Premium Frame with Detail Panels",
      quality: "High-definition 3D casting with 99.9% detail accuracy",
      customizations: [
        "Full Birth Details Panel (DOB, Blood Group, Hospital, Time, Weight)",
        "Family Photo Slots (Multiple)",
        "Personalized Nameplate",
        "Choice of Frame Color (White, Oak, Walnut, Gold)"
      ]
    }
  },
  {
    slug: "kids-couple-gift-frame",
    name: "Kids' Gift Couple Frame",
    shortDesc: "Couple hand impression gifted by kids to their parents, a heartfelt family tribute.",
    fullDesc: "A unique frame created when kids gift their parents a lasting memory. This couple hand impression captures the bond between a mother and father, gifted with love by their children. A beautiful way to honor the foundation of your family.",
    mainImg: "/Assets/Frame_14.webp",
    galleryImages: [
      "/Assets/Frame_14.webp"
    ],
    details: {
      frameTexture: "Premium Wood Frame with Elegant Finish",
      quality: "High-definition 3D casting with 99.9% detail accuracy",
      customizations: [
        "Personalized Gift Inscription from Kids",
        "Choice of Frame Color (White, Oak, Walnut, Gold)",
        "Background Matting Selection",
        "Family Photo Slots"
      ]
    }
  },
  {
    slug: "family-casting-frame",
    name: "Family Casting Frame",
    shortDesc: "2 baby feet + mom & dad hand impressions, with acrylic cuttings of names & DOB.",
    fullDesc: "Our Family Casting Frame brings the whole family together in one stunning piece. Featuring two baby feet impressions alongside mom and dad's hand impressions, this frame is elevated with acrylic cuttings of baby's name, date of birth, and parents' names. A complete family portrait in 3D.",
    mainImg: "/Assets/Frame_15.webp",
    galleryImages: [
      "/Assets/Frame_15.webp"
    ],
    details: {
      frameTexture: "Premium Wood Frame with Acrylic Cuttings",
      quality: "High-definition 3D casting with 99.9% detail accuracy",
      customizations: [
        "Acrylic Cut Baby Name & DOB",
        "Parents' Names Customization",
        "Background Matting Selection",
        "Choice of Frame Color (White, Oak, Walnut, Gold)"
      ]
    }
  },
  {
    slug: "classic-siblings-quad-dual",
    name: "Classic Siblings Quad-Dual Frame",
    shortDesc: "Small baby: 2 hands + 2 feet (4) + big baby: 2 hands (2), 6 impressions total.",
    fullDesc: "Celebrate the bond between siblings with our Classic Siblings Quad-Dual Frame. This unique piece captures the small baby's full set of impressions, both hands and both feet, alongside the older sibling's hand impressions. A powerful visual reminder of their lifelong connection.",
    mainImg: "/Assets/Frame_16.webp",
    galleryImages: [
      "/Assets/Frame_16.webp"
    ],
    details: {
      frameTexture: "Premium Wood Frame with Multi-Panel Layout",
      quality: "High-definition 3D casting with 99.9% detail accuracy",
      customizations: [
        "Sibling Names & Birth Dates",
        "Horizontal or Vertical Layout",
        "Custom LED Backlighting (optional)",
        "Premium Acrylic Glass Protection"
      ]
    }
  },
  {
    slug: "classic-siblings-dual-dual",
    name: "Classic Siblings Dual-Dual Frame",
    shortDesc: "Small baby: 1 hand + 1 foot (2) + big baby: 2 hands (2), 4 impressions total.",
    fullDesc: "A beautiful sibling keepsake capturing the small baby's hand and foot alongside the older sibling's hand impressions. This compact yet powerful frame tells the story of two lives joined by love.",
    mainImg: "/Assets/Frame_17.webp",
    galleryImages: [
      "/Assets/Frame_17.webp"
    ],
    details: {
      frameTexture: "Premium Wood Frame with Multi-Panel Layout",
      quality: "High-definition 3D casting with 99.9% detail accuracy",
      customizations: [
        "Sibling Names & Birth Dates",
        "Horizontal or Vertical Layout",
        "Custom LED Backlighting (optional)",
        "Premium Acrylic Glass Protection"
      ]
    }
  }
];