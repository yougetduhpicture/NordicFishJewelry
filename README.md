# Nordic Fish Jewelry Website

A professional, responsive static website for Nordic Fish Jewelry - a Finnish company creating handcrafted jewelry from upcycled fish skin.

## Tech Stack

- **Vite** - Build tool
- **React 18+** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **React Router** - Client-side routing
- **react-i18next** - Internationalization (Finnish/English)
- **react-helmet-async** - SEO meta tags

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/yougetduhpicture/NordicFishJewelry.git
cd NordicFishJewelry

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
nordic-fish-jewelry/
├── public/
│   ├── fonts/              # Glacial Indifference font files
│   ├── images/
│   │   ├── hero/          # Hero section images
│   │   ├── categories/    # Category card images
│   │   ├── products/      # Individual product images
│   │   │   ├── rings/
│   │   │   ├── cufflinks/
│   │   │   └── necklaces/
│   │   ├── about/         # About page images
│   │   ├── logo/          # Logo files
│   │   └── flags/         # Language flag icons
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page components
│   ├── data/             # Product data (JSON)
│   ├── locales/          # Translation files
│   │   ├── en/
│   │   └── fi/
│   ├── types/            # TypeScript type definitions
│   ├── i18n.ts           # i18n configuration
│   ├── App.tsx           # Main app with routing
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles & Tailwind
├── render.yaml           # Render deployment config
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Features

- **Bilingual Support**: Full Finnish (FI) and English (EN) translations
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 1024px
- **SEO Optimized**: Meta tags, Open Graph, sitemap, and structured data
- **Performance**: Image lazy loading, optimized fonts
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page (English) |
| `/fi` | Home page (Finnish) |
| `/products` | Products overview |
| `/products/rings` | Rings collection |
| `/products/cufflinks` | Cuff links collection |
| `/products/necklaces` | Necklaces collection |
| `/about` | About us page |
| `/contact` | Contact information |

## Deployment

### Render (Recommended)

1. Connect your GitHub repository to Render
2. The `render.yaml` file will automatically configure the deployment
3. Build Command: `npm install && npm run build`
4. Publish Directory: `./dist`

### Custom Domain Setup

1. Add your custom domain in Render dashboard
2. Configure DNS with a CNAME record pointing to your Render URL
3. SSL certificate will be automatically provisioned

## Client Content Required

Before going live, the following content needs to be provided by the client:

### Images
- [ ] Hero images (1920x1080px, 2 images)
- [ ] Category images (800x800px, 3 images)
- [ ] Product images (600x600px, variable quantity)
- [ ] Workshop photo (1600x900px)
- [ ] Founder portraits (600x800px, 2 images)
- [ ] About page hero banner (1920x600px)

### Text Content
- [ ] Finnish translations for all placeholder text
- [ ] Anne's bio (Finnish & English)
- [ ] Arska's bio (Finnish & English)
- [ ] Sustainability section text
- [ ] Crafting process description

### URLs & Contact Info
- [ ] Etsy shop URL
- [ ] Instagram URL
- [ ] Contact email address
- [ ] Phone number
- [ ] Business ID (Y-tunnus)
- [ ] Individual Etsy product URLs

## Updating Products

Products are stored in `src/data/products.json`. To add a new product:

```json
{
  "id": "unique-id",
  "name": "Product Name (English)",
  "nameFi": "Product Name (Finnish)",
  "category": "rings" | "cufflinks" | "necklaces",
  "image": "/images/products/category/image.jpg",
  "etsyUrl": "https://www.etsy.com/listing/..."
}
```

## Design System

### Colors
- Background: `#F9F3E0` (Cream)
- Navy: `#1C2F4D`
- Gold: `#D8BA83`
- White: `#FFFFFF`

### Typography
- Font: Glacial Indifference
- Weights: Regular (400), Bold (700)

## License

This project is proprietary software for Nordic Fish Jewelry.

## Credits

Website by Rasmus Ruonakoski
