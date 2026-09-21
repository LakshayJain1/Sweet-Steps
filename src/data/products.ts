export type ProductCategory =
  | "Baby"
  | "Siblings"
  | "Couples"
  | "Parents & Elders"
  | "Family"
  | "Sculptures";

export interface Product {
  slug: string;
  name: string;
  /** One-line brand statement shown under the title in the popup */
  tagline?: string;
  /** Brand collection name, e.g. "First Steps" (replaces the hard-coded "Signature Style" badge) */
  collection?: string;
  /** Plain-language category, used for the filter chips */
  category?: ProductCategory;
  /** Card / hover blurb, 20 words or fewer */
  shortDesc: string;
  /** Popup story paragraph */
  fullDesc: string;
  /** What is cast and included, as a list ("Two feet cast in gold", ...) */
  composition?: string[];
  /** Occasions, shown as chips */
  bestFor?: string[];
  mainImg: string;
  /** mainImg first, then lifestyle shots */
  galleryImages: string[];
  /** Alt text keyed by image path */
  imageAlts?: Record<string, string>;
  details: {
    frameTexture: string;
    quality: string;
    customizations: string[];
  };
}

export const products: Product[] = [
  {
    slug: "signature-baby-frame",
    name: "Signature Baby Frame",
    tagline: "Nothing added. Nothing missing.",
    collection: "First Steps",
    category: "Baby",
    shortDesc: "The essential newborn keepsake: hands and feet in gold, centred in a wide, gallery-style mat.",
    fullDesc: "The frame we would choose for our own. A wide ivory mat, a dark wood frame, and nothing competing with the casts: your baby's hands above, feet below, and their name, date and time of birth set softly between. It is the quietest way to keep the loudest year of your life.",
    composition: [
      "Two hands cast in gold",
      "Two feet cast in gold",
      "Name, date and time of birth in gold lettering"
    ],
    bestFor: [
      "Newborn keepsake",
      "Naamkaran",
      "A gift for new parents"
    ],
    mainImg: "/Assets/signature-baby-frame.webp",
    galleryImages: [
      "/Assets/signature-baby-frame.webp",
      "/Assets/signature-baby-frame-lifestyle.webp"
    ],
    imageAlts: {
      "/Assets/signature-baby-frame.webp": "Dark wood frame with a wide ivory mat holding a baby's gold-cast hands and feet above and below the name and birth date",
      "/Assets/signature-baby-frame-lifestyle.webp": "Signature baby frame hung on a cream wall beside a curtain and a wooden crib rail"
    },
    details: {
      frameTexture: "Dark wood frame with a wide ivory gallery mat; wall-hanging",
      quality: "Fingerprint whorls and toe creases held in fine relief",
      customizations: [
        "Name, date and time of birth in gold lettering",
        "An optional line of your own beneath the details",
        "Portrait-format wall hanging"
      ]
    }
  },
  {
    slug: "our-little-miracle-frame",
    name: "Our Little Miracle Frame",
    tagline: "The exact minute they arrived, in gold.",
    collection: "First Steps",
    category: "Baby",
    shortDesc: "Hands and feet in gold, with the name, date and exact minute of birth lettered between them.",
    fullDesc: "There is a minute in every family's history that everything after it is measured from. This frame keeps yours: your baby's hands and feet cast in gold, with their name, the date and the exact time they arrived, lettered in gold and finished with a line only you would write.",
    composition: [
      "Two hands cast in gold",
      "Two feet cast in gold",
      "Name, date and time of birth in gold lettering",
      "A personal line (for example, 'Our Little Miracle')"
    ],
    bestFor: [
      "Newborn keepsake",
      "Naamkaran",
      "First birthday",
      "Baby shower gifts"
    ],
    mainImg: "/Assets/our-little-miracle-frame.webp",
    galleryImages: [
      "/Assets/our-little-miracle-frame.webp",
      "/Assets/our-little-miracle-frame-lifestyle.webp"
    ],
    imageAlts: {
      "/Assets/our-little-miracle-frame.webp": "Walnut frame holding a baby's gold-cast hands and feet with the name, birth date, time and the line Our Little Miracle",
      "/Assets/our-little-miracle-frame-lifestyle.webp": "Our Little Miracle baby frame on a nursery wall beside a wooden crib"
    },
    details: {
      frameTexture: "Dark walnut wood frame with a deep ivory mat; wall-hanging",
      quality: "Fingerprint whorls and toe creases held in fine relief",
      customizations: [
        "Name, date and time of birth",
        "A personal line beneath the details",
        "Gold lettering"
      ]
    }
  },
  {
    slug: "silver-lining-baby-frame",
    name: "Silver Lining Baby Frame",
    tagline: "Every tiny detail, in silver.",
    collection: "First Steps",
    category: "Baby",
    shortDesc: "Hands above, feet below, first portrait between: a newborn cast in polished silver.",
    fullDesc: "Silver suits the very beginning: quiet, luminous, made to last. A newborn's hands and feet are cast in a soft pewter-silver finish and set above and below their first portrait, in a tall three-window frame that gives every detail room to be seen. Understated enough for any nursery. Elegant enough to stay on the wall for decades.",
    composition: [
      "Two hands cast in silver",
      "Two feet cast in silver",
      "Newborn portrait in the centre window",
      "Small nameplate at the base"
    ],
    bestFor: [
      "Newborn keepsake",
      "Naamkaran",
      "First birthday",
      "Baby shower gifts"
    ],
    mainImg: "/Assets/silver-lining-baby-frame.webp",
    galleryImages: [
      "/Assets/silver-lining-baby-frame.webp",
      "/Assets/silver-lining-baby-frame-lifestyle.webp"
    ],
    imageAlts: {
      "/Assets/silver-lining-baby-frame.webp": "Tall taupe three-window frame with a newborn's silver-cast hands above, a swaddled baby portrait between and silver-cast feet below",
      "/Assets/silver-lining-baby-frame-lifestyle.webp": "Silver lining baby frame in a blush-toned frame on a sage wall above folded muslin cloths"
    },
    details: {
      frameTexture: "Tall three-window frame in taupe with a cream inner mat; wall-hanging",
      quality: "Fingerprint whorls and toe creases held in fine relief",
      customizations: [
        "Nameplate with name and date of birth",
        "Newborn portrait of your choice",
        "Silver cast finish"
      ]
    }
  },
  {
    slug: "heart-of-the-family-frame",
    name: "Heart of the Family Frame",
    tagline: "Parents' hands. Baby's feet. One heart.",
    collection: "Together",
    category: "Family",
    shortDesc: "Parents' hands, cast in gold, form a heart around their baby's tiny feet.",
    fullDesc: "Before they can walk, they are held. This frame says it in gold: two parents' hands shaped into a heart, with their baby's tiny feet resting inside it. Above, the baby's name and date of birth in gold lettering. Below, the parents' names. It is the first family portrait, made three-dimensional.",
    composition: [
      "Parents' hands cast in gold, joined to form a heart",
      "Baby's two feet cast in gold, resting within",
      "Baby's name and date of birth in gold lettering",
      "Parents' names beneath a heart"
    ],
    bestFor: [
      "Newborn welcome",
      "First Mother's or Father's Day",
      "Naamkaran",
      "Baby shower gifts"
    ],
    mainImg: "/Assets/heart-of-the-family-frame.webp",
    galleryImages: [
      "/Assets/heart-of-the-family-frame.webp",
      "/Assets/heart-of-the-family-frame-lifestyle.webp"
    ],
    imageAlts: {
      "/Assets/heart-of-the-family-frame.webp": "Walnut shadow box holding gold-cast parents' hands shaped into a heart around a baby's tiny feet, with name, date and parents' names",
      "/Assets/heart-of-the-family-frame-lifestyle.webp": "Overhead view of the heart of the family frame on a wooden table with a linen cloth"
    },
    details: {
      frameTexture: "Dark walnut deep-set shadow box with a fine gold inner edge and cream mat",
      quality: "Fingerprint whorls and toe creases held in fine relief",
      customizations: [
        "Baby's name and date of birth",
        "Parents' names",
        "Gold lettering"
      ]
    }
  },
  {
    slug: "gold-and-silver-sibling-frame",
    name: "Gold & Silver Sibling Frame",
    tagline: "Gold for the newest. Silver for the one who came first.",
    collection: "Side by Side",
    category: "Siblings",
    shortDesc: "A baby's hand and foot in gold beside an elder sibling's hands in silver, with their portrait and names.",
    fullDesc: "Two siblings, two metals, one story. The baby's hand and foot are cast in gold; the elder sibling's open hands in silver, held just beneath as if waiting. Beside them sits the portrait of the two together, and both names in a single line. It shows the difference in size, and the sameness in everything else.",
    composition: [
      "Baby's hand and foot cast in gold",
      "Elder sibling's two hands cast in silver",
      "Sibling portrait photograph",
      "Names plate and birth-dates plaque"
    ],
    bestFor: [
      "Welcoming a new sibling",
      "Raksha Bandhan",
      "Sibling birthdays"
    ],
    mainImg: "/Assets/gold-and-silver-sibling-frame.webp",
    galleryImages: [
      "/Assets/gold-and-silver-sibling-frame.webp",
      "/Assets/gold-and-silver-sibling-frame-lifestyle.webp"
    ],
    imageAlts: {
      "/Assets/gold-and-silver-sibling-frame.webp": "Black landscape frame with a sibling portrait, a baby's gold-cast hand and foot and an elder sibling's two silver-cast hands",
      "/Assets/gold-and-silver-sibling-frame-lifestyle.webp": "Gold and silver sibling frame on a table beside cream ribbon, dried flowers and scattered gold flecks"
    },
    details: {
      frameTexture: "Black wood landscape frame with an ivory mat and a copper-toned dates plaque",
      quality: "Fingerprint whorls and toe creases held in fine relief",
      customizations: [
        "Both siblings' names and birth dates",
        "Portrait photograph",
        "Gold and silver cast finishes"
      ]
    }
  },
  {
    slug: "lifelong-promise-sibling-frame",
    name: "Lifelong Promise Sibling Frame",
    tagline: "Her tiny hands. His lifelong promise.",
    collection: "Side by Side",
    category: "Siblings",
    shortDesc: "A baby's hands and feet, guarded by an elder sibling's open hands, on deep green with gold detailing.",
    fullDesc: "An elder sibling's open hands, angled as if to guard, around a baby's tiny fists and feet. Deep green sets the gold glowing, and a line of your own beneath the names says what the casts can't: that this is a promise. The frame for the bond that begins the day the second child arrives.",
    composition: [
      "Baby's two hands and two feet cast in gold",
      "Elder sibling's two hands cast in gold",
      "Both siblings' names in gold script",
      "A personal line in gold lettering"
    ],
    bestFor: [
      "Welcoming a new sibling",
      "Raksha Bandhan",
      "Birthdays"
    ],
    mainImg: "/Assets/lifelong-promise-sibling-frame.webp",
    galleryImages: [
      "/Assets/lifelong-promise-sibling-frame.webp",
      "/Assets/lifelong-promise-sibling-frame-lifestyle.webp"
    ],
    imageAlts: {
      "/Assets/lifelong-promise-sibling-frame.webp": "White frame with a deep green backdrop holding a baby's gold-cast hands and feet and an elder sibling's two open hands, with names and a line in gold",
      "/Assets/lifelong-promise-sibling-frame-lifestyle.webp": "Lifelong promise sibling frame on a table beside a wooden rattle and cream ribbon"
    },
    details: {
      frameTexture: "White wood frame with a deep olive-green backdrop and gold foil detailing",
      quality: "Fingerprint whorls and toe creases held in fine relief",
      customizations: [
        "Both siblings' names",
        "A personal line beneath the casts",
        "Backdrop colour"
      ]
    }
  },
  {
    slug: "birth-story-frame-hand-and-foot",
    name: "Birth Story Frame, Hand & Foot",
    tagline: "Small fist. Small foot. One big day.",
    collection: "First Steps",
    category: "Baby",
    shortDesc: "A baby's hand and foot in gold, surrounded by the day's details: time, weight, blood group and the proud parents.",
    fullDesc: "Everything about the day they arrived, in one frame. A baby's fist and foot are cast in gold at the centre, framed by an illustrated card of the details: the date, the time, the weight, the blood group, the hospital and the two people who were waiting. A gift the whole family will want a copy of.",
    composition: [
      "One hand cast in gold",
      "One foot cast in gold",
      "Baby portrait in a scalloped frame",
      "Date, time, weight, blood group and hospital",
      "Parents' names and a parents' photograph"
    ],
    bestFor: [
      "Newborn keepsake",
      "Baby shower gifts",
      "Grandparents' gift"
    ],
    mainImg: "/Assets/birth-story-frame-hand-and-foot.webp",
    galleryImages: [
      "/Assets/birth-story-frame-hand-and-foot.webp",
      "/Assets/birth-story-frame-hand-and-foot-lifestyle.webp",
      "/Assets/birth-story-frame-hand-and-foot-wall.webp",
      "/Assets/birth-story-frame-hand-and-foot-shelf.webp"
    ],
    imageAlts: {
      "/Assets/birth-story-frame-hand-and-foot.webp": "Walnut frame with a blue birth-details card, a baby boy's portrait and a gold-cast hand and foot on a peach backdrop with wooden blocks",
      "/Assets/birth-story-frame-hand-and-foot-lifestyle.webp": "Birth story frame with a gold-cast baby hand and foot lying on a marble surface beside a knitted blanket",
      "/Assets/birth-story-frame-hand-and-foot-wall.webp": "Birth story frame hung on a nursery wall with a hand resting on a folded blanket",
      "/Assets/birth-story-frame-hand-and-foot-shelf.webp": "Birth story frame propped on a wooden shelf beside a wooden rattle and baby's breath"
    },
    details: {
      frameTexture: "Dark walnut wood frame with a white mat and an illustrated birth-details card; wall or tabletop",
      quality: "Fingerprint whorls and toe creases held in fine relief",
      customizations: [
        "Baby's name, date, time and weight",
        "Blood group and hospital",
        "Parents' names and photograph",
        "Baby portrait",
        "Blue or pink card theme"
      ]
    }
  },
  {
    slug: "birth-story-frame-footprints",
    name: "Birth Story Frame, Footprints",
    tagline: "Every detail of the day they arrived.",
    collection: "First Steps",
    category: "Baby",
    shortDesc: "Two golden footprints inside a designed birth card: name, time, weight, blood group and the family that waited.",
    fullDesc: "The details parents swear they will never forget, and then quietly do. Here they are set into one frame: the date and time, the weight, the blood group, the hospital, the parents' names, a first portrait, and two footprints cast in gold at the centre. A birth certificate, if birth certificates were beautiful.",
    composition: [
      "Two feet cast in gold",
      "Baby portrait in a scalloped frame",
      "Date, time, weight, blood group and hospital",
      "Parents' names and small family photographs"
    ],
    bestFor: [
      "Newborn keepsake",
      "Baby shower gifts",
      "Grandparents' gift"
    ],
    mainImg: "/Assets/birth-story-frame-footprints.webp",
    galleryImages: [
      "/Assets/birth-story-frame-footprints.webp",
      "/Assets/birth-story-frame-footprints-lifestyle.webp"
    ],
    imageAlts: {
      "/Assets/birth-story-frame-footprints.webp": "Walnut frame with a pink birth-details card showing a baby girl's portrait, weight, time and blood group above two gold-cast feet",
      "/Assets/birth-story-frame-footprints-lifestyle.webp": "Woman holding a birth story frame with gold-cast baby feet beside a nursery window"
    },
    details: {
      frameTexture: "Dark walnut wood frame with a white mat and an illustrated birth-details card",
      quality: "Fingerprint whorls and toe creases held in fine relief",
      customizations: [
        "Baby's name, date, time and weight",
        "Blood group and hospital",
        "Parents' names and family photographs",
        "Pink or blue card theme"
      ]
    }
  },
  {
    slug: "bloom-baby-frame",
    name: "Bloom Baby Frame",
    tagline: "A whole little person, cast in gold.",
    collection: "First Steps",
    category: "Baby",
    shortDesc: "Both hands, both feet and a favourite photograph, set inside a border of printed roses.",
    fullDesc: "For the child who already has a personality. Their hands, still wearing the beaded bracelets of a first year, and their feet are cast in gold beside a favourite photograph, with their name in gold cut-out letters across the top. A rose-print border makes it feel like a small garden rather than a specimen case.",
    composition: [
      "Two hands cast in gold, with beaded bracelets",
      "Two feet cast in gold",
      "Favourite photograph",
      "Name in gold cut-out lettering"
    ],
    bestFor: [
      "First birthday",
      "Naamkaran",
      "A grandparents' gift"
    ],
    mainImg: "/Assets/bloom-baby-frame.webp",
    galleryImages: [
      "/Assets/bloom-baby-frame.webp"
    ],
    imageAlts: {
      "/Assets/bloom-baby-frame.webp": "Square walnut frame with a rose-print border holding a toddler's photo, a name in gold lettering and gold-cast hands and feet"
    },
    details: {
      frameTexture: "Dark walnut square frame with a rose-print border and ivory backdrop",
      quality: "Fingerprint whorls and toe creases held in fine relief",
      customizations: [
        "Border print and colour",
        "Name in gold cut-out lettering",
        "Photograph of your choice"
      ]
    }
  },
  {
    slug: "light-of-our-lives-baby-frame",
    name: "Light of Our Lives Baby Frame",
    tagline: "Their first days, told in photographs and two golden footprints.",
    collection: "First Steps",
    category: "Baby",
    shortDesc: "Two golden footprints and a collage of first-days photographs, under a line only you would write.",
    fullDesc: "A newborn's first days deserve more than one picture. This frame tells the story as a collage: a portrait, a peacock-feather shot, the moment their parents first held them, with two golden footprints, the date and the time, and a line of your own beneath the name. Less a frame, more the first chapter.",
    composition: [
      "Two feet cast in gold",
      "Hero newborn portrait plus three smaller photographs",
      "Name, date and time of birth",
      "A personal line (for example, 'Light of our Lives')"
    ],
    bestFor: [
      "Newborn keepsake",
      "Baby shower gifts",
      "A grandparents' gift"
    ],
    mainImg: "/Assets/light-of-our-lives-baby-frame.webp",
    galleryImages: [
      "/Assets/light-of-our-lives-baby-frame.webp"
    ],
    imageAlts: {
      "/Assets/light-of-our-lives-baby-frame.webp": "Espresso wood frame with two gold-cast baby feet, a newborn portrait, three smaller photographs and the words Light of our Lives"
    },
    details: {
      frameTexture: "Deep espresso wood frame with an ivory mat; landscape",
      quality: "Fingerprint whorls and toe creases held in fine relief",
      customizations: [
        "Up to four photographs",
        "Name, date and time of birth",
        "A tagline of your own"
      ]
    }
  },
  {
    slug: "eternal-bond-couple-sculpture",
    name: "Eternal Bond Couple Sculpture",
    tagline: "Two hands. One vow.",
    collection: "Forever",
    category: "Couples",
    shortDesc: "A couple's clasped hands, cast in gold on a black plinth lettered with their names and date.",
    fullDesc: "Some keepsakes hang. This one stands. A couple's clasped hands, cast in gold and set on a black plinth, lettered with your names and the date it all began. It sits on a console, a shelf or a bedside, close enough to touch, and it reads less like a keepsake than a piece of sculpture.",
    composition: [
      "Couple's clasped hands, cast in gold as one sculptural piece",
      "Black display plinth",
      "Names and date in raised gold script"
    ],
    bestFor: [
      "Wedding anniversaries",
      "Wedding gifts",
      "Milestone years"
    ],
    mainImg: "/Assets/eternal-bond-couple-sculpture.webp",
    galleryImages: [
      "/Assets/eternal-bond-couple-sculpture.webp",
      "/Assets/eternal-bond-couple-sculpture-lifestyle.webp"
    ],
    imageAlts: {
      "/Assets/eternal-bond-couple-sculpture.webp": "Gold-cast clasped hands of a couple on a black plinth lettered with names and a wedding date",
      "/Assets/eternal-bond-couple-sculpture-lifestyle.webp": "Couple's clasped-hands sculpture on a wooden table beside old books, stones and a bowl of beads"
    },
    details: {
      frameTexture: "Freestanding sculpture on a black matte plinth. No frame or glass",
      quality: "Finger, knuckle and palm-line detail, visible from every angle",
      customizations: [
        "Names and wedding date on the plinth",
        "Message or vow on the plinth"
      ]
    }
  },
  {
    slug: "virasat-parents-tribute-frame",
    name: "Virasat Parents' Tribute Frame",
    tagline: "The hands that built your world, framed.",
    collection: "Legacy",
    category: "Parents & Elders",
    shortDesc: "Papa's and Maa's hands cast in gold beside their portrait, under a single word: Virasat, legacy.",
    fullDesc: "Virasat means legacy, and no one writes yours more plainly than your parents. Their hands, cast in gold and labelled the way you have always addressed them, sit beside a framed portrait of the two of them. A gift for their anniversary, and one they will want to hang where guests will see it.",
    composition: [
      "Papa's hand cast in gold",
      "Maa's hand cast in gold",
      "Framed couple portrait with a gold border",
      "'Virasat' heading and Papa / Maa labels in Hindi"
    ],
    bestFor: [
      "Parents' wedding anniversary",
      "Milestone birthdays",
      "A gift from grown-up children"
    ],
    mainImg: "/Assets/virasat-parents-tribute-frame.webp",
    galleryImages: [
      "/Assets/virasat-parents-tribute-frame.webp",
      "/Assets/virasat-parents-tribute-frame-lifestyle.webp"
    ],
    imageAlts: {
      "/Assets/virasat-parents-tribute-frame.webp": "White wall frame with two gold-cast hands labelled Papa and Maa, a gold-framed couple portrait and the Hindi word Virasat",
      "/Assets/virasat-parents-tribute-frame-lifestyle.webp": "Virasat parents' tribute frame on a wall above a console with books, a brass bowl and a plant"
    },
    details: {
      frameTexture: "White wood frame with a fine gold inner border; wall-hanging",
      quality: "Every palm line and the character of a lifetime, preserved in relief",
      customizations: [
        "Heading and labels in Hindi or English",
        "Portrait photograph",
        "Names or anniversary date"
      ]
    }
  },
  {
    slug: "parents-blessing-heirloom-frame",
    name: "Parents' Blessing Heirloom Frame",
    tagline: "The gift of gratitude, in gold.",
    collection: "Legacy",
    category: "Parents & Elders",
    shortDesc: "Parents' open palms cast in gold beside their portraits and a blessing, in an ornate carved frame.",
    fullDesc: "The one gift parents never ask for, and never forget. Their open palms, cast in gold, rise beside portraits of the two of them and a blessing written in your words, inside a carved, antique-finish frame that looks as if it has hung in the family home for generations. Give it on an anniversary. Watch what it does to the room.",
    composition: [
      "Two open palms cast in gold",
      "Portrait photographs of the couple (colour and sepia)",
      "A personalised blessing message"
    ],
    bestFor: [
      "Parents' anniversary",
      "Birthdays",
      "A gift from grown-up children",
      "Festive occasions such as Diwali"
    ],
    mainImg: "/Assets/parents-blessing-heirloom-frame.webp",
    galleryImages: [
      "/Assets/parents-blessing-heirloom-frame.webp",
      "/Assets/parents-blessing-heirloom-frame-lifestyle.webp"
    ],
    imageAlts: {
      "/Assets/parents-blessing-heirloom-frame.webp": "Ornate carved bronze frame with two large gold-cast open palms beside a couple's portraits and a blessing message",
      "/Assets/parents-blessing-heirloom-frame-lifestyle.webp": "Parents' blessing frame lying flat among marigold petals and cream ribbon"
    },
    details: {
      frameTexture: "Ornate carved wood frame in antique bronze; landscape, wall-hanging",
      quality: "Every palm line and the character of a lifetime, preserved in relief",
      customizations: [
        "A blessing message in your own words",
        "Choice of portrait photographs",
        "Names and anniversary date"
      ]
    }
  },
  {
    slug: "matriarchs-legacy-frame",
    name: "Matriarch's Legacy Frame",
    tagline: "Her hands. Her steps. Her blessing, kept.",
    collection: "Legacy",
    category: "Parents & Elders",
    shortDesc: "A matriarch's hands and feet cast in gold beside her portrait and a verse in her honour.",
    fullDesc: "Some people hold a family together with their hands and carry it forward on their feet. This frame sets both in gold, either side of her portrait and a verse written in her honour: a tribute that reads like a portrait and feels like an heirloom. Made to hang where the whole family will pass it every day.",
    composition: [
      "Two hands cast in gold",
      "Two feet cast in gold",
      "Framed portrait photograph",
      "Personalised verse in Hindi"
    ],
    bestFor: [
      "Milestone birthdays",
      "Anniversaries",
      "Family reunions",
      "A tribute from the whole family"
    ],
    mainImg: "/Assets/matriarchs-legacy-frame.webp",
    galleryImages: [
      "/Assets/matriarchs-legacy-frame.webp",
      "/Assets/matriarchs-legacy-frame-lifestyle.webp"
    ],
    imageAlts: {
      "/Assets/matriarchs-legacy-frame.webp": "Walnut wall frame with a matriarch's gold-cast hands and feet either side of her framed portrait and a Hindi verse",
      "/Assets/matriarchs-legacy-frame-lifestyle.webp": "Matriarch's legacy frame hanging on a plaster wall above a wooden console table"
    },
    details: {
      frameTexture: "Dark walnut-toned wood frame with an ivory mat; three-panel, wall-hanging",
      quality: "Every palm line and the character of a lifetime, preserved in relief",
      customizations: [
        "Portrait photograph of your choice",
        "A verse or message in Hindi or English",
        "Name inscription above the portrait"
      ]
    }
  },
  {
    slug: "aashirwad-blessing-frame",
    name: "Aashirwad Blessing Frame",
    tagline: "Blessings, in their own hands.",
    collection: "Legacy",
    category: "Parents & Elders",
    shortDesc: "A pair of hands cast in gold beside a blessing lettered in Hindi.",
    fullDesc: "Aashirwad is the oldest gift we know how to give. Here it is made literal: a pair of hands, cast in gold with every line of the palm intact, beside a blessing written in Hindi. Hung in a nursery or a living room, it says something a card never quite can.",
    composition: [
      "A pair of hands cast in gold",
      "A personalised blessing in Hindi",
      "Patterned backdrop"
    ],
    bestFor: [
      "Naamkaran and housewarming",
      "Birthdays",
      "A gift from grandparents"
    ],
    mainImg: "/Assets/aashirwad-blessing-frame.webp",
    galleryImages: [
      "/Assets/aashirwad-blessing-frame.webp",
      "/Assets/aashirwad-blessing-frame-lifestyle.webp"
    ],
    imageAlts: {
      "/Assets/aashirwad-blessing-frame.webp": "Dark walnut frame with a pair of gold-cast hands beside a Hindi blessing on a pale patterned backdrop",
      "/Assets/aashirwad-blessing-frame-lifestyle.webp": "Aashirwad blessing frame on a wall with a deep blue textured backdrop above a small wooden shelf"
    },
    details: {
      frameTexture: "Dark walnut landscape frame with a white inner mat and a patterned backdrop",
      quality: "Every palm line and the character of a lifetime, preserved in relief",
      customizations: [
        "Blessing or message in Hindi or English",
        "Backdrop pattern and colour",
        "Name of the person being blessed"
      ]
    }
  },
  {
    slug: "glass-vitrine-hand-sculpture",
    name: "Glass Vitrine Hand Sculpture",
    tagline: "One hand, held up to the light.",
    collection: "Sculpture",
    category: "Sculptures",
    shortDesc: "A single hand cast in soft ivory and presented in a black-framed glass display case.",
    fullDesc: "A single hand can say more than a portrait. Cast in soft ivory and sealed inside a glass vitrine, it is presented the way a museum presents something irreplaceable. Place it on a console or a window ledge and it reads as art first and keepsake second.",
    composition: [
      "A single hand cast in soft ivory",
      "Black-framed glass display case",
      "Black display base"
    ],
    bestFor: [
      "Mother's Day",
      "Anniversaries",
      "A meaningful piece for the home"
    ],
    mainImg: "/Assets/glass-vitrine-hand-sculpture.webp",
    galleryImages: [
      "/Assets/glass-vitrine-hand-sculpture.webp",
      "/Assets/glass-vitrine-hand-sculpture-lifestyle.webp"
    ],
    imageAlts: {
      "/Assets/glass-vitrine-hand-sculpture.webp": "Ivory-cast single hand holding two pink flowers inside a black-framed glass display case on a wooden shelf",
      "/Assets/glass-vitrine-hand-sculpture-lifestyle.webp": "Woman smiling and touching the glass of a vitrine holding a single ivory hand sculpture"
    },
    details: {
      frameTexture: "Freestanding glass display case with a black frame and base",
      quality: "Finger, knuckle and palm-line detail, visible from every angle",
      customizations: [
        "Cast finish (ivory, gold or silver)",
        "Inscription on the base"
      ]
    }
  },
  {
    slug: "ivory-open-hand-sculpture",
    name: "Ivory Open-Hand Sculpture",
    tagline: "A hand, sculpted as art.",
    collection: "Sculpture",
    category: "Sculptures",
    shortDesc: "A single open hand cast in white, standing upright on a slim base like a piece of sculpture.",
    fullDesc: "Cast in white and left unpainted, a single open hand becomes something between a keepsake and an art object: every line of the palm visible, every finger lifted, standing upright on a slim white base. It looks at home on a desk, a console or a bedside, long after the trends of the room change.",
    composition: [
      "A single open hand cast in white",
      "White display base"
    ],
    bestFor: [
      "Anniversaries",
      "Mother's Day",
      "Wedding gifts",
      "Desk or console display"
    ],
    mainImg: "/Assets/ivory-open-hand-sculpture.webp",
    galleryImages: [
      "/Assets/ivory-open-hand-sculpture.webp"
    ],
    imageAlts: {
      "/Assets/ivory-open-hand-sculpture.webp": "White plaster open-hand sculpture on a white base with a silver chain draped across it, on a wooden table"
    },
    details: {
      frameTexture: "Freestanding sculpture on a slim white base. No frame or glass",
      quality: "Finger, knuckle and palm-line detail, visible from every angle",
      customizations: [
        "Cast finish (white, gold or silver)",
        "Inscription on the base"
      ]
    }
  }
];
