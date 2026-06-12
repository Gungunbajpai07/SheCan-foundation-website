# She Can Foundation — Website

This is a lightweight, responsive, and professional website for the She Can Foundation (women empowerment NGO).

Project structure

she-can-foundation/
│
├── index.html
├── about.html
├── volunteer.html
├── contact.html
│
├── css/
│   ├── style.css
│   ├── about.css
│   ├── volunteer.css
│   └── contact.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── hero.jpg (add a professional hero image)
│   ├── about.jpg
│   ├── volunteer.jpg
│   ├── contact.jpg
│   └── gallery/
│       ├── photo1.jpg
│       ├── photo2.jpg
│       └── ...
│
└── README.md

How to view the site locally

- Open `index.html` in your browser (double-click or right-click -> Open with...).
- For quick local development with live reload, you can serve the folder with a simple HTTP server, for example (Python 3):

```bash
cd "she-can-foundation"
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Images

- Replace files in `images/` with real photos. Recommended sizes:
  - `hero.jpg`: ~1600×1000 (or 1200–1800px width) optimized for web
  - page images: 1200×800 or 800×600
  - gallery images: 800×600 (or square crops) to keep a consistent grid
- Use compressed JPEGs or WebP for better performance.

What is included

- Semantic HTML5 pages: `index.html`, `about.html`, `volunteer.html`, `contact.html`.
- Organized CSS files: global `css/style.css` and page-specific styles.
- Plain JavaScript (no frameworks) in `js/script.js` for:
  - mobile menu toggle
  - back-to-top button
  - smooth anchor scrolling
  - simple scroll reveal animations
  - basic client-side form validation
- Accessibility-conscious features: clear labels, ARIA attributes, focus states.

Next steps / Customization

- Add high-quality, licensed images to `images/`.
- Hook up forms to a backend endpoint or service (e.g., Formspree, Netlify Forms, or your server) — currently they show a simulated success message.
- Replace placeholder social links with real accounts.
- Adjust copy, values, and numbers to match the real NGO data.

License & attribution

This scaffold is provided as-is for building the She Can Foundation website. Replace placeholder content and images with your organization's real content and licensed media.

---

If you want, I can also:
- Add small sample images (SVG placeholders) inside `images/` so the layout looks filled during local preview.
- Wire the forms to a sample serverless endpoint for demo purposes.
- Create a small deploy guide for GitHub Pages or Netlify.

What would you like next?