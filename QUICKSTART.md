# Sommelier AI - Quick Start Guide

## 🚀 Getting Started

```bash
cd C:\Users\Jacques\Documents\CRM-tool\sommelier-ai

# Install dependencies (if needed)
npm install

# Start development server
npm run dev
# → Open http://localhost:5173/

# Build for production
npm run build

# Preview production build
npm preview
```

## 📁 Project Structure

```
sommelier-ai/
├── src/
│   ├── data/          # Types, seed data (50 dishes), helpers
│   ├── lib/           # Storage, share, slug utilities
│   ├── state/         # Global state with localStorage
│   ├── ui/            # Reusable components
│   ├── pages/         # 9 page components
│   ├── App.tsx        # Routes
│   ├── main.tsx       # Entry point
│   └── styles.css     # Global styles
├── index.html         # HTML entry
├── package.json       # Dependencies
├── vite.config.ts     # Vite config
├── tailwind.config.cjs # Theme
└── netlify.toml       # Deployment
```

## 🎯 Key Features

### Navigation
- **Home** (`/`) - Search, filters, cuisine cards
- **Cuisine** (`/cuisine/:name`) - Cuisine-specific dishes
- **Result** (`/result/:id`) - Pairing details
- **Pair Wine** (`/pair`) - Reverse pairing
- **Saved** (`/saved`) - Bookmarked pairings
- **Cellar** (`/cellar`) - Wine collection
- **Profile** (`/profile`) - Settings
- **Learn** (`/learn`) - Wine education
- **Learn Detail** (`/learn/:slug`) - Article view

### State Management
All state persists to localStorage:
- Theme (dark/light)
- Saved dish IDs
- Cellar bottles

### Data
- 50 dishes across 5 cuisines
- Each dish has complete pairing info
- Auto-generated glossary

## 🎨 Customization

### Theme Colors
Edit `tailwind.config.cjs`:
```js
colors: {
  primary: "#d41132",
  "background-light": "#f8f6f6",
  "background-dark": "#221013",
}
```

### Add Dishes
Edit `src/data/seed.ts`:
```typescript
{
  id: id("French", "New Dish"),
  cuisine: "French",
  name: "New Dish",
  blurb: "Description",
  flags: ["beef"],
  pairings: [
    P("Red", "Wine Style", "Why it works", "Ideal Bottle", ["Alt 1", "Alt 2"])
  ]
}
```

## 🌐 Deployment

### Netlify
1. Push to GitHub
2. Connect repo to Netlify
3. Build: `npm run build`
4. Publish: `dist`
5. Done! (SPA redirects configured)

### Manual
```bash
npm run build
# Upload dist/ folder to any static host
```

## 📊 Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- React Router (routing)
- Material Icons (icons)
- Work Sans (font)

## 🔑 Important Files

- **[src/data/seed.ts](file:///C:/Users/Jacques/Documents/CRM-tool/sommelier-ai/src/data/seed.ts)** - All dish data
- **[src/state/AppState.tsx](file:///C:/Users/Jacques/Documents/CRM-tool/sommelier-ai/src/state/AppState.tsx)** - Global state
- **[src/App.tsx](file:///C:/Users/Jacques/Documents/CRM-tool/sommelier-ai/src/App.tsx)** - Routes
- **[tailwind.config.cjs](file:///C:/Users/Jacques/Documents/CRM-tool/sommelier-ai/tailwind.config.cjs)** - Theme

## 💡 Tips

- Dark mode is default (toggle in Profile)
- All links/buttons are functional
- Search works across all dish fields
- Cellar bottles appear in "Pair my Wine"
- Share uses Web Share API (mobile) or clipboard (desktop)

## 🐛 Troubleshooting

### Build fails
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Dev server won't start
```bash
# Check if port 5173 is in use
# Kill process or change port in vite.config.ts
```

## 📚 Resources

- [README.md](file:///C:/Users/Jacques/Documents/CRM-tool/sommelier-ai/README.md) - Full documentation
- [Walkthrough](file:///C:/Users/Jacques/.gemini/antigravity/brain/c8e2d48b-323e-4d6a-a32b-fcc53f720279/walkthrough.md) - Detailed project overview
- [Vite Docs](https://vitejs.dev/)
- [React Router Docs](https://reactrouter.com/)
- [Tailwind Docs](https://tailwindcss.com/)
