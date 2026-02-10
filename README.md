# Sommelier AI

A premium wine pairing application built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **50 Curated Dishes** across 5 cuisines (French, Italian, Spanish, Portuguese, English)
- **Expert Wine Pairings** with detailed explanations and bottle recommendations
- **Smart Search & Filters** by cuisine, dietary preferences, and wine characteristics
- **Reverse Pairing** - find dishes that match your wine bottle
- **Personal Cellar** - manage your wine collection
- **Wine Education** - learn about pairing principles and wine regions
- **Dark Mode** - beautiful dark theme optimized for mobile
- **LocalStorage Persistence** - save your preferences, cellar, and favorite pairings
- **Share Functionality** - Web Share API with clipboard fallback

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling with custom theme
- **React Router** - Client-side routing
- **Material Icons** - Icon system
- **Work Sans** - Custom typography

## Project Structure

```
sommelier-ai/
├── src/
│   ├── data/
│   │   ├── types.ts          # TypeScript type definitions
│   │   ├── helpers.ts        # Data manipulation utilities
│   │   └── seed.ts           # 50-dish dataset
│   ├── lib/
│   │   ├── storage.ts        # LocalStorage utilities
│   │   ├── share.ts          # Web Share API wrapper
│   │   └── slug.ts           # URL slug helpers
│   ├── state/
│   │   └── AppState.tsx      # Global state management
│   ├── ui/
│   │   ├── Shell.tsx         # Layout container
│   │   ├── BottomNav.tsx     # Navigation bar
│   │   ├── Toast.tsx         # Notifications
│   │   ├── Chips.tsx         # Filter chips
│   │   └── Cards.tsx         # Reusable card components
│   ├── pages/
│   │   ├── Home.tsx          # Main landing page
│   │   ├── Cuisine.tsx       # Cuisine-specific dishes
│   │   ├── Result.tsx        # Pairing detail view
│   │   ├── PairWine.tsx      # Reverse wine pairing
│   │   ├── Saved.tsx         # Saved pairings
│   │   ├── Cellar.tsx        # Wine cellar management
│   │   ├── Profile.tsx       # User settings
│   │   ├── Learn.tsx         # Wine education index
│   │   └── LearnDetail.tsx   # Education article view
│   ├── App.tsx               # Route configuration
│   ├── main.tsx              # Application entry point
│   └── styles.css            # Global styles
├── index.html                # HTML entry point
├── package.json              # Dependencies
├── vite.config.ts            # Vite configuration
├── tailwind.config.cjs       # Tailwind theme
├── tsconfig.json             # TypeScript config
└── netlify.toml              # Netlify deployment config
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview
```

The app will be available at `http://localhost:5173/`

## Deployment

### Netlify

This project is configured for Netlify deployment:

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The `netlify.toml` file handles SPA routing automatically

### Manual Deployment

```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

## Data Model

### Dish Type
- **id**: Stable identifier (cuisine::name)
- **cuisine**: French | Italian | Spanish | Portuguese | English
- **name**: Dish name
- **blurb**: Short description
- **flags**: Dietary tags (seafood, vegetarian, pork, beef, creamy, spicy)
- **pairings**: Array of wine pairing options

### Pairing Type
- **category**: Wine category (Red, White, Rosé, Sparkling, Dessert, Fortified)
- **subdivision**: Specific wine style (e.g., "Albariño (Rías Baixas)")
- **why**: Pairing explanation
- **idealBottle**: Recommended specific bottle
- **equivalents**: Two alternative bottles

## Features in Detail

### Home Page
- Search across all dishes and pairings
- Filter by dietary preferences
- Browse by cuisine with beautiful image cards
- Quick access to "Pair my Wine" reverse matching

### Cuisine Pages
- View all dishes from a specific cuisine
- Filter by wine preference (Red/White/Sparkling)
- Toggle low-tannin preference
- Dishes sorted by preference match score

### Result Pages
- Detailed pairing information
- Save/bookmark functionality
- Share via Web Share API or clipboard
- Ideal bottle + 2 equivalents
- Educational "why it works" explanation

### Pair My Wine
- Reverse pairing: select a bottle, find matching dishes
- Integrates with personal cellar
- Search/filter matched dishes

### Cellar
- Add bottles you own
- Used by "Pair my Wine" feature
- Persistent storage

### Learn Section
- Wine education articles
- Filter by category (Pairing 101, Reds, Whites, Regions)
- Search functionality
- Auto-generated glossary from pairing data

## Customization

### Theme Colors
Edit `tailwind.config.cjs`:
```js
colors: {
  primary: "#d41132",           // Main brand color
  "background-light": "#f8f6f6", // Light mode background
  "background-dark": "#221013",  // Dark mode background
  "surface-dark": "#2d1b1e",     // Dark mode surfaces
}
```

### Adding Dishes
Edit `src/data/seed.ts` and add new dish objects following the existing pattern.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-first responsive design
- Optimized for viewport widths 320px - 448px
- Progressive enhancement for Web Share API

## License

This project is provided as-is for educational and demonstration purposes.

## Credits

- Wine pairing data curated for demonstration
- Images from Google AIDA public CDN
- Icons from Material Icons
- Typography from Google Fonts (Work Sans)
