// Brand images
import flexibleBrand from "../assets/images/flexible-brand.png";
import jonoBrand from "../assets/images/jono-brand.png";
import ringersBrand from "../assets/images/ringers-brand.png";
import leaderBrand from "../assets/images/leader-brand.png";
import cenBrand from "../assets/images/cen-brand.png";
import ariatBrand from "../assets/images/ariat-brand.png";
import gregBrand from "../assets/images/greg-brand.png";

// Payment method images
import applePay from "../assets/images/apple-pay.svg";
import googlePay from "../assets/images/g-pay.svg";
import stripe from "../assets/images/stripe.svg";
import payPal from "../assets/images/pay-pal.svg";

export const DISCOUNT_SECTION = {
  title: "UNLOCK DISCOUNTS",
  subtitle: "At 30+ leading horse and country brands",
};

export const BRANDS = [
  {
    name: "Flexible Fit",
    image: flexibleBrand,
    alt: "Flexible Fit Equestrian",
  },
  {
    name: "Jono",
    image: jonoBrand,
    alt: "Jono & Johno",
  },
  {
    name: "Ringers",
    image: ringersBrand,
    alt: "Ringers Western",
  },
  {
    name: "Leader",
    image: leaderBrand,
    alt: "Leader Equine",
  },
  {
    name: "CEN",
    image: cenBrand,
    alt: "CEN Nutrition",
  },
  { name: "Ariat", image: ariatBrand, alt: "Ariat" },
  {
    name: "Greg Grant",
    image: gregBrand,
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
      "6 FREE entries into the draw",
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
  { name: "Apple Pay", image: applePay },
  { name: "Google Pay", image: googlePay },
  { name: "Stripe", image: stripe },
  { name: "PayPal", image: payPal },
];
