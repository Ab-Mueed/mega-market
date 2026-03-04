# Mega Giveaway Landing Page

A pixel-perfect, responsive landing page built with React and modern CSS (Flexbox/Grid) for a giveaway campaign.

## Overview

This project demonstrates modern frontend development practices with a focus on:
- Semantic HTML and accessibility
- Mobile-first responsive design
- Clean, maintainable CSS with design tokens
- Component reusability and DRY principles
- Performance optimization

## Tech Stack

- **React 19.2.0** - Component-based UI
- **Vite 7.3.1** - Fast build tool and dev server
- **Modern CSS** - Flexbox, Grid, CSS Variables (no frameworks)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server will start at `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── PricingCard.jsx
│   ├── PricingCard.css
│   ├── CountdownTimer.jsx
│   └── CountdownTimer.css
├── data/
│   └── constants.js     # All static content and configuration
├── App.jsx              # Main application component
├── App.css              # Main application styles
├── index.css            # Global styles and CSS variables
└── main.jsx             # Application entry point
```

## Design Decisions

### CSS Architecture

**CSS Variables (Design Tokens)**
- Centralized in `:root` for consistency
- Includes colors, spacing scale, typography, and border radius
- Makes theme changes and maintenance trivial
- Single source of truth prevents inconsistencies

**Spacing Scale**
- Uses a consistent 8px-based scale (0.5rem increments)
- Ensures visual rhythm and harmony
- Makes layouts predictable and maintainable

### Layout Decisions: Flexbox vs Grid

**When Flexbox is Used:**

1. **Hero Section** - Content flows vertically and needs centering
   - Single-axis layout (column direction)
   - Vertical and horizontal centering required
   - Flexbox excels at alignment in one dimension

2. **Countdown Timer** - Four identical items in a row
   - Simple horizontal layout
   - Equal spacing between items
   - Grid would be overkill for 4 items in a row

3. **PricingCard Component** - Vertical content stacking
   - Content flows top to bottom
   - Need consistent gaps between sections
   - Footer button should stay at bottom (flex: 1 on body)

4. **Payment Methods** - Horizontal icon row with wrapping
   - Simple row layout with flex-wrap
   - Icons need to wrap on small screens
   - Centering with gap spacing

**When Grid is Used:**

1. **Brand Logos** - Responsive multi-column layout
   - 2D layout that changes columns at breakpoints
   - 2 columns mobile → 3 tablet → 4 desktop
   - Grid handles responsive columns elegantly
   - Equal-width columns with consistent gaps

2. **Pricing Cards** - Complex responsive grid
   - 1 column mobile → 2 tablet → 3 desktop → 5 extra-large
   - Special layout for 5 cards (3 top, 2 centered below)
   - Grid's 2D control is essential here
   - Auto-placement with manual overrides for special cases

**Key Principle:** Use Flexbox for 1-dimensional layouts (row OR column), use Grid for 2-dimensional layouts (rows AND columns) or when you need precise control over multiple rows/columns.

### Component Architecture

**PricingCard Component**
- Reusable with props-based configuration
- All variants use same component with different data
- CSS classes applied dynamically based on tier
- Follows DRY principle - no code duplication

**CountdownTimer Component**
- Self-contained logic with React hooks
- Updates every second using setInterval
- Cleanup on unmount prevents memory leaks
- Accessible with proper ARIA labels

**Data Separation**
- All static content in `constants.js`
- Easy to update copy without touching components
- Enables future CMS integration
- Makes internationalization straightforward

### Responsive Design

**Mobile-First Approach**
- Base styles target ~360px (small phones)
- Progressive enhancement for larger screens
- Breakpoints: 768px (tablet), 1280px (desktop), 1440px (XL)

**Responsive Images**
- `loading="lazy"` for below-the-fold images
- `object-fit: contain` for logos
- Proper alt text for accessibility

### Accessibility Features

1. **Semantic HTML**
   - `<section>`, `<article>`, `<header>`, `<footer>`
   - Proper heading hierarchy (h1 → h2 → h3)
   - `<button>` for interactive elements

2. **ARIA Labels**
   - `aria-labelledby` for section titles
   - `role="list"` and `role="listitem"` for custom lists
   - Screen reader only text with `.sr-only` class

3. **Keyboard Navigation**
   - All interactive elements focusable
   - Visible focus states with `:focus-visible`
   - Logical tab order

4. **Motion Preferences**
   - `@media (prefers-reduced-motion: reduce)`
   - Disables animations for users who prefer reduced motion
   - Respects user accessibility settings

### Performance Optimizations

1. **Lazy Loading**
   - Images use `loading="lazy"` attribute
   - Reduces initial page load time

2. **Minimal JavaScript**
   - Only essential interactivity (countdown timer)
   - No heavy libraries or frameworks beyond React

3. **CSS Optimization**
   - No unused styles
   - Efficient selectors
   - CSS variables reduce repetition

4. **Build Optimization**
   - Vite handles code splitting and minification
   - Tree shaking removes unused code

## Browser Support

- Chrome (latest)
- Safari (latest)
- Firefox (latest)

Modern CSS features used:
- CSS Grid
- Flexbox
- CSS Variables (Custom Properties)
- CSS `gap` property

## Known Gaps & Limitations

1. **Images** - Placeholder paths used; actual images need to be added to `/public` directory
2. **Countdown End Date** - Currently set to 7 days from page load; should be configured to actual campaign end date
3. **Button Actions** - Buttons are non-functional; need to integrate with payment/registration system
4. **Form Validation** - No form inputs in current design, but would need validation if added
5. **Analytics** - No tracking implemented; would add Google Analytics or similar in production

## Future Enhancements

### Productionization Checklist

1. **Backend Integration**
   - Connect buttons to payment gateway (Stripe, PayPal)
   - User registration and authentication
   - Entry tracking and validation

2. **Content Management**
   - Move static content to CMS (Contentful, Sanity)
   - Enable non-technical updates
   - A/B testing capabilities

3. **Performance**
   - Implement image CDN (Cloudinary, Imgix)
   - Add service worker for offline support
   - Optimize font loading

4. **Analytics & Monitoring**
   - Google Analytics or Mixpanel
   - Error tracking (Sentry)
   - Performance monitoring (Web Vitals)

5. **Testing**
   - Unit tests for components (Vitest)
   - E2E tests (Playwright)
   - Accessibility audits (axe-core)

6. **SEO**
   - Meta tags and Open Graph
   - Structured data (JSON-LD)
   - Sitemap and robots.txt

7. **Security**
   - HTTPS enforcement
   - Content Security Policy
   - Rate limiting on API endpoints

## Development Notes

### CSS Naming Convention

Uses a simplified BEM-like approach:
- Block: `.pricing-card`
- Element: `.card-header`, `.card-title`
- Modifier: `.pricing-card.deluxe`

### Code Style

- 2-space indentation
- Single quotes for strings
- Semicolons required
- ESLint configuration included

### Git Workflow

```bash
# Feature branch
git checkout -b feature/your-feature

# Commit with descriptive messages
git commit -m "Add countdown timer component"

# Push and create PR
git push origin feature/your-feature
```

## License

This project is for interview assessment purposes.

## Contact

For questions or feedback, please reach out to the development team.
