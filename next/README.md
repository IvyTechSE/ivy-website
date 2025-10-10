# 🌟 Next.js Multilingual Blog Template

Welcome to our cutting-edge Next.js Multilingual Blog Template! This powerful and flexible template is designed to help you create stunning, multilingual blogs with ease.

## ✨ Features

- 🌐 Multilingual support (English and French)
- 📱 Fully responsive design
- 🎨 Customizable themes
- 🖼️ Image optimization
- 🔍 SEO-friendly
- 🚀 Fast performance with Next.js

## 🚀 Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local` and update the variables
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Customization

- Modify `config.ts` to change language settings
- Update `next.config.mjs` for advanced configurations
- Add your own MDX files in the `blog` page directly

## 🤝 Contributing

We welcome contributions! Please see our [contributing guidelines](link-to-contributing-guidelines) for more information.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<footer>
<p align="center">
  Made by <a href="https://aceternity.com">Aceternity</a><br>
  Powered by <a href="https://nextjs.org/">Next.js</a> | <a href="https://tailwindcss.com/">Tailwind CSS</a> | <a href="https://framer.com/motion">Framer Motion</a> | <a href="https://ui.aceternity.com">Aceternity UI</a>
</p>
</footer>

++ Deploy

## 🎨 Theming System

The app uses a semantic, CSS variable driven theming layer integrated with Tailwind. Dark mode is enabled via `darkMode: 'class'` in `tailwind.config.ts` and toggled by adding/removing the `dark` class on `<html>`.

### Brand Base Colors
- Forest `#596e5c` – primary brand accent
- Sand `#F1EADA` – light background
- Onyx `#1C1C1B` – dark background
- Midnight `#2E333A` – dark surface / cards

### Semantic Tokens
Declared in `app/globals.css` as CSS variables (e.g. `--color-background`, `--color-primary`, etc.) for both light (`:root`) and dark (`.dark`) scopes. Tailwind maps them to utilities in `tailwind.config.ts` under `extend.colors`:

```
bg-background text-foreground bg-card text-card-foreground
bg-primary text-primary-foreground bg-muted text-muted-foreground
border-border ring-ring bg-accent text-accent-foreground
```

Use these semantic classes instead of raw color names/hex values. This ensures dark mode stays consistent and future palette shifts only require variable edits.

### Adding a New Token
1. Add `--color-newtoken` to both the light and dark sections in `globals.css`.
2. Map it in `tailwind.config.ts` like `newtoken: 'var(--color-newtoken)'`.
3. Use in markup: `class="text-newtoken"` or `bg-newtoken`.

### Theme Toggle
Implemented in `components/theme-toggle.tsx`. It persists the user's choice in `localStorage` and applies on mount. Place it anywhere in the UI (already integrated in the desktop navbar).

### Accessibility Notes
- Maintain a minimum 4.5:1 contrast ratio for standard text; adjust `--color-foreground` or `--color-muted-foreground` if you introduce new surfaces.
- Prefer using opacity variants (`bg-primary/90`) instead of separate hex colors for hover states.

Feel free to extend the system with additional semantic roles (e.g. `--color-warning`, `--color-info`) following the same pattern.

### Shadows & Motion
Shadow tokens are defined in `globals.css` for both light and dark themes:

- `--shadow-soft`
- `--shadow-medium`
- `--shadow-elevated`
- `--shadow-inner-alt`
- `--shadow-ring`

Utility classes are exposed: `shadow-soft`, `shadow-medium`, `shadow-elevated`, `shadow-inner-alt`, `shadow-ring`.

When animating background or elevation with Framer Motion, prefer animating width/opacity and toggling a semantic class (`bg-card`, `bg-background`, etc.) instead of directly animating hard-coded color values. This keeps dark/light parity and reduces repaint cost.
