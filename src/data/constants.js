export const DISCOUNT_SECTION = {
  title: "UNLOCK DISCOUNTS",
  subtitle: "At 30+ leading horse and country brands",
};

export const BRANDS = [
  {
    name: "Flexible Fit",
    image: "/src/assets/images/flexible-brand.png",
    alt: "Flexible Fit Equestrian",
  },
  {
    name: "Jono",
    image: "/src/assets/images/jono-brand.png",
    alt: "Jono & Johno",
  },
  {
    name: "Ringers",
    image: "/src/assets/images/ringers-brand.png",
    alt: "Ringers Western",
  },
  {
    name: "Leader",
    image: "/src/assets/images/leader-brand.png",
    alt: "Leader Equine",
  },
  {
    name: "CEN",
    image: "/src/assets/images/cen-brand.png",
    alt: "CEN Nutrition",
  },
  { name: "Ariat", image: "/src/assets/images/ariat-brand.png", alt: "Ariat" },
  {
    name: "Greg Grant",
    image: "/src/assets/images/greg-brand.png",
    alt: "Greg Grant Saddlery",
  },
];

export const TIMER_CONFIG = {
  label: "HURRY, GIVEAWAY CLOSES IN",
  units: ["DAYS", "HOURS", "MINUTES", "SECONDS"],
};

export const PRICING_TIERS = [
  {
    id: "starter",
    name: "STARTER",
    badge: null,
    entries: "1 ENTRY",
    features: [
      "1 week member access to partner discounts",
      "1 FREE entry into the draw",
      "Support Draught Angels helping farmers in need",
    ],
    price: "$19.99",
    buttonText: "GET ENTRY",
    buttonClass: "btn-starter",
    popular: false,
    bestValue: false,
  },
  {
    id: "basic",
    name: "BASIC",
    badge: null,
    entries: "7 ENTRIES",
    features: [
      "1 Month access to partner Discounts",
      "6 + 1 FREE entries into the draw",
      "Support Draught Angels helping farmers in need",
    ],
    price: "$69.99",
    buttonText: "GET ENTRIES",
    buttonClass: "btn-basic",
    popular: false,
    bestValue: false,
  },
  {
    id: "deluxe",
    name: "DELUXE",
    badge: "Most popular",
    entries: "30 ENTRIES",
    features: [
      "6 month member access to partner discounts",
      "30 FREE entries into the draw",
      "Support Draught Angels helping farmers in need",
    ],
    price: "$129.99",
    buttonText: "GET ENTRIES",
    buttonClass: "btn-deluxe",
    popular: true,
    bestValue: false,
  },
  {
    id: "premium",
    name: "PREMIUM",
    badge: "Best value",
    entries: "100 ENTRY",
    features: [
      "12 Month member access to partner discounts",
      "100 FREE entry into the draw",
      "Support Draught Angels helping farmers in need",
    ],
    price: "$249.99",
    buttonText: "GET ENTRY",
    buttonClass: "btn-premium",
    popular: false,
    bestValue: true,
  },
  {
    id: "elite",
    name: "ELITE",
    badge: "UNLIMITED",
    entries: "500 ENTRIES",
    features: [
      "12 months access to Partner discounts",
      "500 FREE entries into the draw",
      "Support Draught Angels helping farmers in need",
    ],
    price: "$499.99",
    buttonText: "GET ENTRIES",
    buttonClass: "btn-elite",
    popular: false,
    bestValue: false,
  },
];

export const PAYMENT_METHODS = [
  { name: "Apple Pay", alt: "Apple Pay" },
  { name: "Google Pay", alt: "Google Pay" },
  { name: "Shop Pay", alt: "Shop Pay" },
  { name: "PayPal", alt: "PayPal" },
];
