# Jittle Essence

> *"Stand Out From The Crowd, Define Your Essence"*

Jittle Essence is a curated fragrance showcase and digital storefront based in Ghana. The site presents a collection of authentic designer perfumes, Arabian extraits, pure perfume oils, and gift sets, allowing customers to browse the catalogue and order directly through WhatsApp.

---

## About the Store

Instead of a complex checkout cart, the website is designed for straightforward, conversational shopping:

- **Browse Curated Fragrances**: View authentic selections from top houses (Creed, Dior, Giorgio Armani, Al Haramain, Lattafa, and Victoria's Secret) with sizes and prices in Ghanaian Cedis (GH₵).
- **Direct WhatsApp Ordering**: Clicking on any product drafts an instant WhatsApp message pre-filled with the exact perfume name, size, and price.
- **Fast Customer Support**: Customers connect directly with the store for same-day delivery in Accra or courier delivery across Ghana.

---

## Website Sections

1. **Hero**: Atmospheric intro video with brand introduction and quick navigation.
2. **Brand Ribbon**: Scrolling showcase of featured international and Arabian fragrance houses.
3. **Collection Spotlight**: Filterable product catalogue organized by category (Designer, Arabian & Oud, Oils, Mists, Gift Sets).
4. **Our Story**: The store's philosophy on authentic sourcing and fragrance curation.
5. **3D Fragrance Vault**: Interactive turntable showcasing signature bottles around the brand motto.
6. **Customer Reviews**: Feedback and experiences from buyers across Accra, Kumasi, Tema, and nationwide.
7. **Direct Contact**: Quick links to order on WhatsApp or call the store directly.

---

## Project Setup & Running Locally

### Requirements
- Node.js (v18 or newer)
- npm

### Installation
```bash
# Clone or navigate to the project directory
cd "JITTLE ESSENCE"

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open `http://localhost:5173` in your browser to view the site.

### Building for Production
```bash
npm run build
```
The compiled, optimized files will be generated in the `dist/` directory, ready to deploy to Vercel, Netlify, or any static hosting service.

---

## Store Configuration

- **WhatsApp Phone Number**: Update `STORE_WHATSAPP_PHONE` in [`src/utils/whatsapp.ts`](src/utils/whatsapp.ts).
- **Products & Prices**: Update items, prices (GH₵), and images in [`src/data.ts`](src/data.ts).
- **Client Testimonials**: Edit reviews and client names in [`src/data.ts`](src/data.ts).

---

## Credits

Designed and developed by **EddTech Studios** for **Jittle Essence**.
