// Product and store data for Jittle Essence - Ghana's Premier Luxury Fragrance Retailer

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: 'Designer Perfumes' | 'Pure Perfume Oils' | 'Body Mists & Philosophy' | 'Arabian & Oud' | 'Gift Sets';
  tagline: string;
  priceGHS: number;
  size: string;
  concentration: string;
  badge?: string;
  image?: string;
}

export const products: Product[] = [
  // Designer Perfumes
  {
    id: 1,
    name: "Creed Aventus",
    brand: "House of Creed",
    category: "Designer Perfumes",
    tagline: "The legendary, fruity and smoky signature scent of emperors",
    priceGHS: 300,
    size: "100ml Millésime",
    concentration: "Eau de Parfum",
    image: "/images/creed.webp",
    badge: "King of Scents",
  },
  {
    id: 2,
    name: "Baccarat Rouge 540 Extrait",
    brand: "Maison Francis Kurkdjian",
    category: "Designer Perfumes",
    tagline: "Ambery, floral and woody brilliance in its purest luxury aura",
    priceGHS: 400,
    size: "70ml Extrait",
    concentration: "Extrait de Parfum",
    image: "/images/baccarat-rouge.webp",
    badge: "Bestseller",
  },
  {
    id: 3,
    name: "Sauvage Elixir",
    brand: "Dior",
    category: "Designer Perfumes",
    tagline: "An extraordinarily concentrated fragrance steeped in iconic night freshness",
    priceGHS: 300,
    size: "60ml Parfum",
    concentration: "Elixir Intense",
    image: "/images/sauvage-elixir.webp",
    badge: "Iconic Signature",
  },
  {
    id: 4,
    name: "Emporio Armani Stronger With You",
    brand: "Giorgio Armani",
    category: "Designer Perfumes",
    tagline: "Warm decadent chestnut, spicy cardamom, and seductive vanilla amber",
    priceGHS: 850,
    size: "100ml EDP",
    concentration: "Eau de Parfum Intensely",
    image: "/images/emporio-armani.webp",
    badge: "Compliment Magnet",
  },
  {
    id: 5,
    name: "Club de Nuit Intense Man",
    brand: "Armaf Luxury",
    category: "Designer Perfumes",
    tagline: "The provocative woody spicy powerhouse with an unforgettable trail",
    priceGHS: 750,
    size: "105ml Pure Parfum",
    concentration: "Pure Parfum Edition",
    image: "/images/club-de-nuit.webp",
    badge: "Best Value",
  },

  // Arabian & Oud
  {
    id: 6,
    name: "Al Haramain Amber Oud Aqua Dubai",
    brand: "Al Haramain",
    category: "Arabian & Oud",
    tagline: "Crisp aquatic mandarin breeze meets royal crystalline amber oud",
    priceGHS: 250,
    size: "100ml Extrait",
    concentration: "Extrait de Parfum",
    image: "/images/arabian-blue.webp",
    badge: "Dubai Edition",
  },
  {
    id: 7,
    name: "Al Haramain Maze",
    brand: "Al Haramain",
    category: "Arabian & Oud",
    tagline: "Enchanting labyrinth of precious Taif rose, musk, and aged agarwood",
    priceGHS: 300,
    size: "100ml EDP",
    concentration: "Eau de Parfum",
    image: "/images/maze.webp",
    badge: "Collector's Piece",
  },
  {
    id: 8,
    name: "Khamrah Qahwa",
    brand: "Lattafa Luxury",
    category: "Arabian & Oud",
    tagline: "Rich gourmand spiced coffee, candied fruits, and decadent praline amber",
    priceGHS: 850,
    size: "100ml EDP",
    concentration: "Eau de Parfum",
    image: "/images/khamrah-qahwa.webp",
    badge: "Trending",
  },
  {
    id: 9,
    name: "Al Haramain L'Aventure Gold",
    brand: "Al Haramain",
    category: "Arabian & Oud",
    tagline: "Opulent golden amber, velvet florals, and creamy cashmere wood",
    priceGHS: 890,
    size: "100ml EDP",
    concentration: "Eau de Parfum",
    image: "/images/aura.webp",
    badge: "Gold Edition",
  },
  {
    id: 10,
    name: "Al Haramain Detour Noir",
    brand: "Al Haramain",
    category: "Arabian & Oud",
    tagline: "Rich gourmand almond, spiced vanilla, and roasted precious woods",
    priceGHS: 650,
    size: "100ml EDP",
    concentration: "Eau de Parfum",
    image: "/images/savon.webp",
    badge: "Viral Scent",
  },

  // Pure Perfume Oils
  {
    id: 11,
    name: "Pure Egyptian Musk & Royal Amber Oil",
    brand: "Jittle Signature Oils",
    category: "Pure Perfume Oils",
    tagline: "Uncut, concentrated roll-on perfume oil that melts with your body warmth",
    priceGHS: 280,
    size: "12ml Roll-on Oil",
    concentration: "100% Pure Perfume Oil (Undiluted)",
    image: "/images/story-perfume.webp",
    badge: "24h+ Sillage",
  },

  // Body Mists & Philosophy
  {
    id: 12,
    name: "Victoria's Secret Bare Vanilla Luxe",
    brand: "Victoria's Secret",
    category: "Body Mists & Philosophy",
    tagline: "Whipped decadent vanilla, soft cashmere, and sparkling solar warmth",
    priceGHS: 290,
    size: "250ml Body Mist",
    concentration: "Fragrance Body Mist",
    image: "/images/victorias-secret.webp",
    badge: "Signature Mist",
  },
  {
    id: 13,
    name: "Body Philosophy French Vanilla Cashmere",
    brand: "Body Philosophy Paris",
    category: "Body Mists & Philosophy",
    tagline: "All-day refreshing gourmand mist with golden sparkling undertones",
    priceGHS: 240,
    size: "250ml Body Mist",
    concentration: "All-Day Scent Mist",
    image: "/images/250ml-Body-Mist.webp",
    badge: "Daily Essential",
  },
  {
    id: 14,
    name: "Monogotas Exotic Vanilla Mist",
    brand: "Deliplus Parfums",
    category: "Body Mists & Philosophy",
    tagline: "Vibrant and juicy exotic Madagascar vanilla with crisp sparkling sillage",
    priceGHS: 210,
    size: "100ml Spray",
    concentration: "Eau de Cologne / Mist",
    image: "/images/monogotas-body-mist.webp",
    badge: "Fresh & Sweet",
  },

  // Gift Sets
  {
    id: 15,
    name: "Luxury Gentleman 3-Piece Gift Set",
    brand: "Jittle Vault Curation",
    category: "Gift Sets",
    tagline: "Complete signature scent ritual: Full-size EDP, matching body spray & pocket oil",
    priceGHS: 1650,
    size: "3-in-1 Deluxe Set",
    concentration: "Deluxe Gift Curation",
    image: "/images/men-gift-set.webp",
    badge: "Deluxe Gift Box",
  },
];

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  verifiedOrder: string;
  text: string;
  rating: number;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nana Ama K.",
    location: "East Legon, Accra",
    verifiedOrder: "Creed Aventus & Egyptian Musk",
    text: "Jittle Essence is my absolute go-to perfume vendor in Accra! 100% authentic designer fragrances, and the perfume oil projection is insane. I ordered in the morning and received it by 2 PM.",
    rating: 5,
    date: "Verified Buyer · 3 days ago",
  },
  {
    id: 2,
    name: "Kweku Boateng",
    location: "Kumasi, Ashanti Region",
    verifiedOrder: "Club de Nuit & Khamrah Qahwa",
    text: "Finding original perfumes in Ghana can be tricky with so many fakes around, but Jittle Essence is the real deal. Longevity is 24+ hours on clothes.",
    rating: 5,
    date: "Verified Buyer · 1 week ago",
  },
  {
    id: 3,
    name: "Dr. Ewurabena Mensah",
    location: "Tema Community 6",
    verifiedOrder: "Al Haramain Amber Oud & Detour",
    text: "The combination of their pure perfume oils with the Arabian extraits is unbeatable. You smell expensive everywhere you step. Beautiful service and polite delivery dispatch!",
    rating: 5,
    date: "Verified Buyer · 2 weeks ago",
  },
  {
    id: 4,
    name: "Samuel Osei-Tutu",
    location: "Takoradi, Western Region",
    verifiedOrder: "Luxury Royal Scent Hamper Set",
    text: "Booked the gift hamper set for my fiancée's birthday. Everything was authentic, gorgeously packaged with ribbon and a personalized card. Thank you Jittle Essence!",
    rating: 5,
    date: "Verified Buyer · 3 weeks ago",
  },
  {
    id: 5,
    name: "Akosua D.",
    location: "Cantonments, Accra",
    verifiedOrder: "Baccarat Rouge 540 Extrait",
    text: "Verified the batch code immediately on delivery and it's 100% original. The customer service on WhatsApp is super fast and polite!",
    rating: 5,
    date: "Verified Buyer · 4 days ago",
  },
  {
    id: 6,
    name: "Emmanuel Darko",
    location: "Airport Hills, Accra",
    verifiedOrder: "Sauvage Elixir & Oil Layering",
    text: "The projection is unmatched. Ordered in the morning and had it delivered to my office by noon. Jittle Essence sets the standard in Ghana.",
    rating: 5,
    date: "Verified Buyer · 1 week ago",
  }
];
