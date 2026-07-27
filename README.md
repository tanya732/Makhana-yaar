# 🥣 Makhana Yaar — Frontend

A warm, modern, single-page marketing website for **Makhana Yaar**, a roasted fox-nut (makhana) snack brand. This is a **frontend-only** build — there is no backend yet. The contact form and "Add to cart" buttons are UI placeholders.

Built with **React + Vite**, styled with **Tailwind CSS**, and animated with **Framer Motion**.

---

## ✨ Sections

1. **Hero** — animated landing with scroll parallax, floating makhana, and a call-to-action.
2. **Products / Packets** — four flavour packets with prices and "Add" buttons.
3. **Benefits & Nutrition** — health benefits grid plus a per-100g nutrition strip.
4. **About** — the brand story and "pond to pocket" process.
5. **Contact** — contact details and a message form (front-end only).
6. **Footer** — links and social icons.

The navbar links smooth-scroll between all sections.

---

## 🛠️ Tech Stack

| Purpose        | Tool                |
| -------------- | ------------------- |
| Build tool     | Vite 5              |
| UI library     | React 18            |
| Styling        | Tailwind CSS 3      |
| Animations     | Framer Motion       |
| Icons          | lucide-react        |
| Fonts          | Fraunces + Nunito Sans (Google Fonts) |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** and **npm** (check with `node --version`).

### 1. Install dependencies
```bash
cd makhana-yaar
npm install
```

### 2. Run the dev server
```bash
npm run dev
```
Open the URL shown in the terminal (usually **http://localhost:5173**). The page hot-reloads as you edit.

### 3. Build for production
```bash
npm run build
```
The optimized static site is generated in the **`dist/`** folder.

### 4. Preview the production build
```bash
npm run preview
```

---

## 📁 Project Structure

```
makhana-yaar/
├── index.html              # HTML entry + Google Fonts
├── package.json
├── vite.config.js
├── tailwind.config.js      # Brand colours, fonts, animations
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx            # React entry
    ├── App.jsx             # Assembles all sections
    ├── index.css           # Tailwind + base styles
    ├── data.js             # Products, benefits, nutrition data
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Products.jsx
        ├── Benefits.jsx
        ├── About.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── Makhana.jsx     # Decorative SVG
```

---

## 🎨 Customising

- **Colours & fonts:** edit `tailwind.config.js` (`theme.extend.colors`).
- **Products, benefits, nutrition values:** edit `src/data.js` — no component changes needed.
- **Contact details:** edit `src/components/Contact.jsx`.

---

## 🔌 Adding a Backend Later

When the backend is ready, wire it into:
- `Contact.jsx` → `handleSubmit` (currently just shows a confirmation).
- `Products.jsx` → the **Add** button (currently no-op).

Point them at your API endpoints (e.g. `fetch('/api/contact', …)`).

---

Made with 🧡 for Makhana Yaar.
