export const DISCOUNT_SECTION = {
  title: "UNLOCK DISCOUNTS",
  subtitle: "At 30+ leading horse and country brands",
};

export const BRAND_LOGOS = [
  { name: "Flexible Fit Equestrian", alt: "Flexible Fit Equestrian logo" },
  { name: "John & Jarrod", alt: "John & Jarrod logo" },
  { name: "Horseland", alt: "Horseland logo" },
  { name: "Leader Equine", alt: "Leader Equine logo" },
  { name: "GEN Equestrian", alt: "GEN Equestrian logo" },
  { name: "Ariat", alt: "Ariat logo" },
  { name: "Easy Feed", alt: "Easy Feed logo" },
];

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

export const COUNTDOWN_END_DATE = new Date(
  Date.now() + 7 * 24 * 60 * 60 * 1000,
); // 7 days from now
