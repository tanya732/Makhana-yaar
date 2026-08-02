
# 🥣 Makhana Yaar — Premium Fox Nuts (Makhana)

Welcome to Makhana Yaar — premium 5+ Suta export-quality makhana (fox nuts). Carefully selected and hygienically processed, our makhana is naturally gluten-free, low in fat, and perfect for healthy snacking, roasting with spices, or using in recipes.

Our Product

- Premium 5+ Suta Export Quality Makhana (Raw Material)

Available Pack Sizes & Pricing

- 100 g — ₹150
- 250 g — ₹330
- 500 g — ₹620

Ingredients

100% Premium Natural Makhana (Fox Nuts)
- No Artificial Colors
- No Artificial Flavours
- No Preservatives
- No Added Chemicals

Nutritional Information (Approx. per 100 g)

- Energy: 347 kcal
- Protein: 9.7 g
- Carbohydrates: 76.9 g
- Dietary Fiber: 7.6 g
- Total Fat: 0.1 g
- Calcium: 60 mg
- Iron: 1.4 mg
- Potassium: 500 mg
- Sodium: 9 mg

Health Benefits

- Rich in plant-based protein
- High in dietary fiber
- Low in fat
- Naturally gluten-free
- Supports a healthy lifestyle
- Ideal for all age groups

Contact

- Email: makhanayaar@gmail.com
- Phone: +91 8802248503

Legal Information

Makhana Yaar is a brand of ICL Inc. GST registration and FSSAI (Food License) are held under ICL Inc.

Built with **React + Vite**, styled with **Tailwind CSS**, and animated with **Framer Motion**.

---

## ✨ Sections

1. **Hero** — animated landing with a glass medallion, feature pills, and a call-to-action.
2. **TrustBar** — headline stats band.
3. **Products / Flavours** — flavour packets shown as pen-and-ink doodles.
4. **Learn (Makhana 101)** — educational explainers about fox nuts, plus a "Did you know?" stat band.
5. **Benefits & Nutrition** — health benefits grid plus a per-100g nutrition strip.
6. **Journey** — the "pond to bowl" story from Darbhanga, Bihar.
7. **About** — the brand story.
8. **Contact** — contact details and a working message form (Web3Forms).
9. **Footer** — links and social icons.

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
| Fonts          | Space Grotesk + Inter (Google Fonts) |
| Form backend   | Web3Forms           |
| Deploy         | GitHub Pages (GitHub Actions) |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** and **npm** (check with `node --version`).

### 1. Install dependencies
```bash
cd makhana-yaar
npm install
```

### 2. Set up the contact form (optional for local dev)
Copy the template and add a free [Web3Forms](https://web3forms.com) access key:
```bash
cp .env.example .env
```
Then edit `.env` and set `VITE_WEB3FORMS_KEY` to your key. Without a key the form shows a friendly "not configured yet" message instead of sending. `.env` is git-ignored — never commit it.

### 3. Run the dev server
```bash
npm run dev
```
Open the URL shown in the terminal (usually **http://localhost:5173**). The page hot-reloads as you edit.

### 4. Build for production
```bash
npm run build
```
The optimized static site is generated in the **`dist/`** folder.

### 5. Preview the production build
```bash
npm run preview
```

---

## 📁 Project Structure

```
makhana-yaar/
├── index.html              # HTML entry + Google Fonts
├── package.json
├── vite.config.js          # base path for GitHub Pages
├── tailwind.config.js      # Brand colours, fonts, animations
├── postcss.config.js
├── .env.example            # Web3Forms key template
├── .github/workflows/
│   └── deploy.yml          # GitHub Pages deploy
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx            # React entry
    ├── App.jsx             # Assembles all sections
    ├── index.css           # Tailwind + base styles
    ├── data.js             # Products, benefits, nutrition, facts
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── TrustBar.jsx
        ├── Products.jsx
        ├── Learn.jsx
        ├── Benefits.jsx
        ├── Journey.jsx
        ├── About.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── Doodles.jsx     # Pen-and-ink SVG doodles
```

---

## 🎨 Customising

- **Colours & fonts:** edit `tailwind.config.js` (`theme.extend.colors`).
- **Products, benefits, nutrition values:** edit `src/data.js` — no component changes needed.
- **Contact details:** edit `src/components/Contact.jsx`.

---

## 📬 Contact form (Web3Forms)

The form in `Contact.jsx` POSTs to Web3Forms — no backend required.

1. Go to [web3forms.com](https://web3forms.com), enter your email, and copy the free access key.
2. **Locally:** put it in `.env` as `VITE_WEB3FORMS_KEY=...` (see step 2 of Getting Started).
3. **In production:** set it as a GitHub repo secret (see below) so the deploy build can read it.

Submissions arrive in the inbox tied to your access key.

---

## 🚀 Deploying to GitHub Pages

Deploys run automatically on every push to `main` via `.github/workflows/deploy.yml`.

One-time setup in the GitHub repo:

1. **Settings → Pages → Build and deployment → Source:** choose **GitHub Actions**.
2. **Settings → Secrets and variables → Actions → New repository secret:** add
   `VITE_WEB3FORMS_KEY` with your Web3Forms key (so the built form works in production).
3. Push to `main`. The workflow builds the site and publishes `dist/`.

The site is served from a project subpath, so `vite.config.js` sets:
```js
base: '/Makhana-yaar/'
```
Live URL: **https://tanya732.github.io/Makhana-yaar/**

> If you rename the repo, update `base` to match the new `/RepoName/` path.

---

Made with 🧡 for Makhana Yaar.
