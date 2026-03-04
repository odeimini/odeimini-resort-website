/**
 * Ode'imini Resort — Site Configuration
 * Edit all text, URLs, and cabin specs here. No code changes needed for content updates.
 */

export const SITE = {
  name: "Ode'imini Resort",
  tagline: "A Native-owned lakeside retreat in the Northwoods of Wisconsin",
  description:
    "4-cabin lakeside mini resort in Wisconsin. Private lakeshore, quiet cabins, Northwoods setting. Now in development.",
  email: "odeiminiresort@gmail.com",
  baseUrl: "https://odeimini-resort-website.vercel.app",
} as const;

/** Placeholder — replace with your Airbnb listing URL when live */
export const AIRBNB_LISTING_URL = "https://www.airbnb.com/rooms/placeholder";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/cabins", label: "Cabins" },
  { href: "/property", label: "Property" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const BANNER = {
  enabled: true,
  text: "Now in Development — construction updates coming soon.",
} as const;

/** Image paths — swap files in /public/images without code changes */
export const IMAGES = {
  hero: "/images/land-03-cleared-view.jpg",
  heroAlt: "Semi-cleared lakeside view at Ode'imini Resort, Northwoods Wisconsin",
  standardCabin: "/images/cabin-standard-placeholder.svg",
  premiumCabin: "/images/cabin-premium-placeholder.svg",
  /** Real land/site photos for property and gallery — lender-facing */
  landPhotos: [
    {
      src: "/images/land-01-beach-hill.jpg",
      caption: "Hill to excavate for ~100 ft beach frontage",
    },
    {
      src: "/images/land-02-cabin-area.jpg",
      caption: "Area for cabin placement — clearing in progress",
    },
    {
      src: "/images/land-03-cleared-view.jpg",
      caption: "Semi-cleared area with lake view",
    },
    {
      src: "/images/land-04-lakeshore-view.jpg",
      caption: "Lakeshore and property view",
    },
  ],
  gallery: [
    "/images/gallery/01.svg",
    "/images/gallery/02.svg",
    "/images/gallery/03.svg",
    "/images/gallery/04.svg",
    "/images/gallery/05.svg",
    "/images/gallery/06.svg",
    "/images/gallery/07.svg",
    "/images/gallery/08.svg",
    "/images/gallery/09.svg",
    "/images/gallery/10.svg",
    "/images/gallery/11.svg",
    "/images/gallery/12.svg",
  ],
} as const;

/** Standard cabin specs (3 identical cabins) */
export const STANDARD_CABIN = {
  count: 3,
  dimensions: "24ft × 26ft",
  rooms: [
    "Full kitchen (no island)",
    "Living room with TV, couch, dining table",
    "1 full bath",
    "2 bedrooms",
  ],
  features: [
    "Full kitchen",
    "Living room with TV, couch, dining table",
    "1 full bath",
    "2 bedrooms",
  ],
} as const;

/** Premium cabin (owner/office; limited availability) */
export const PREMIUM_CABIN = {
  name: "Premium Cabin",
  description: "Upscale owner/office cabin",
  dimensions: "TBD",
  status: "coming_soon",
  limitedAvailability: true,
} as const;

/** Lakeshore / property details */
export const PROPERTY = {
  lakeshoreFeet: 400,
  elevationProfile: [
    { feet: 200, heightAboveLake: 50 },
    { feet: 100, heightAboveLake: 40 },
    { feet: 100, heightAboveLake: 30 },
  ],
  beachFrontagePlanned: 100,
  dock: "Quality dock planned. Guests do NOT have access to boats or jet skis (private/trusted use only).",
  storageBuilding: "Beach/boat storage building planned.",
  disclaimer:
    "Plans are subject to permitting and timeline. Details may be updated as development progresses.",
} as const;

/** Development roadmap phases */
export const ROADMAP = [
  "Selective clearing and excavation",
  "~100 ft of beach frontage with gentle access",
  "Quality dock installation",
  "Beach/boat storage building",
  "3 standard cabins (24×26 ft)",
  "1 premium owner/office cabin",
] as const;

/** Amenities for home page grid */
export const AMENITIES = [
  "Private lakeshore",
  "Quiet cabin setting",
  "Northwoods location",
  "Beach access (planned)",
  "Dock (planned)",
  "Full kitchens",
  "TV & Wi-Fi",
  "Parking",
] as const;

/** FAQ items */
export const FAQ_ITEMS = [
  {
    q: "How do I make a reservation?",
    a: "All reservations are handled through Airbnb. Use the 'Book on Airbnb' button to view availability and book your stay.",
  },
  {
    q: "What are check-in and check-out times?",
    a: "Check-in and check-out times will be communicated upon booking. Typical times: check-in 3:00 PM, check-out 11:00 AM.",
  },
  {
    q: "Are pets allowed?",
    a: "Pet policy will be finalized before opening. Please check our Airbnb listing for current policy.",
  },
  {
    q: "Is smoking allowed?",
    a: "Smoking is not permitted inside the cabins. Designated outdoor areas may be available.",
  },
  {
    q: "What are quiet hours?",
    a: "Quiet hours are typically 10:00 PM to 8:00 AM to ensure a peaceful experience for all guests.",
  },
  {
    q: "Can I bring my boat or jet ski?",
    a: "Guest boats and jet skis are not permitted. The dock is for private/trusted use only. We prioritize safety and a quiet lakeside experience.",
  },
  {
    q: "What are the dock and lake safety rules?",
    a: "Dock use and lake safety guidelines will be posted on-site. Life jackets are recommended for water activities.",
  },
] as const;

/** Investor page content */
export const INVESTOR = {
  summary:
    "Ode'imini Resort is a Native-owned, 4-cabin lakeside mini resort in Wisconsin. The property features approximately 400 feet of lakeshore with plans for selective clearing, excavation, and beach creation. The development includes 3 standard cabins (24×26 ft each), 1 premium owner/office cabin, a quality dock, and beach/boat storage. Reservations and marketing are handled exclusively through Airbnb.",
  phases: [
    "Sitework and selective clearing",
    "Excavation and beach frontage creation (~100 ft)",
    "Dock installation",
    "Storage building construction",
    "Cabin construction (3 standard + 1 premium)",
    "Utilities and furnishings",
  ],
  useOfFunds: [
    "Sitework and excavation",
    "Dock",
    "Cabins (construction)",
    "Furnishings",
    "Utilities",
    "Storage building",
    "Contingency",
  ],
  communityImpact: [
    "Local contractor and labor employment",
    "Local purchasing for materials and supplies",
    "Tourism and visitation to the region",
  ],
  riskMitigation: [
    "Airbnb channel for reservations and marketing",
    "Phased build approach to manage capital",
    "Insurance and standard risk management",
  ],
} as const;
