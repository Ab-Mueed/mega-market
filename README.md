# Mega Giveaway Landing Page

A responsive landing page for a giveaway campaign built with React and modern CSS.

## Overview

This is a pixel-perfect implementation of a Figma design focusing on:

- Semantic HTML and accessibility
- Mobile-first responsive design
- Modern CSS with Flexbox/Grid (no frameworks)
- Clean component architecture

## Tech Stack

- React 19.2.0
- Vite 7.3.1
- Modern CSS (Flexbox, Grid, CSS Variables)

## How to Run Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/     # React components
├── styles/         # Component CSS files
├── data/           # Static content (constants.js)
├── assets/         # Images and icons
├── App.jsx         # Main app
└── index.css       # Global styles and CSS variables
```

## Key Features

- **Responsive Design**: Mobile-first
- **Accessibility**: Semantic HTML, ARIA labels, reduced motion support
- **CSS Variables**: Centralized design tokens for colors, spacing, typography
- **Component Reusability**: DRY principles, props-based configuration
- **Performance**: Lazy loading, minimal JS

## Design Decisions

**CSS Architecture:**

- CSS variables in `:root` for consistency
- Mobile-first media queries

**Accessibility:**

- `prefers-reduced-motion` support
- Proper focus states
- Semantic markup

## Browser Support

Latest versions of Chrome, Safari, and Firefox.

## Notes

- Mapped content is in `src/data/constants.js` for easy updates
- Images are imported from `src/assets/images/`
- Icons are imported from `src/assets/icons`
- Fonts are in `public/fonts/`
- CSS variables defined in `src/index.css`

## Known Limitations

- Countdown timer uses static date
- Buttons are non-functional
