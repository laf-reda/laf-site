# Tailwind Migration Plan

## Overview
Migrate all CSS and components to use Tailwind CSS utilities while maintaining existing styles and functionality.

## Current State
- ✅ Tailwind v4 installed and configured
- ✅ `@import "tailwindcss"` added to `src/index.css`
- ✅ All existing CSS preserved
- ✅ Build successful

## Migration Strategy

### Phase 1: Component-by-Component Migration
Process each component file in order of dependency:

1. **Navbar.tsx** - Navigation component (often used across site)
2. **Hero.tsx** - Hero section with animations
3. **Fleet.tsx** - Fleet display component
4. **Jets.tsx** - Jets section
5. **Destinations.tsx** - Destinations grid
6. **Events.tsx** - Events listing
7. **Nightlife.tsx** - Nightlife section
8. **Stats.tsx** - Statistics display
9. **Contact.tsx** - Contact form
10. **index.css** - Convert custom CSS to Tailwind utilities

### Phase 2: CSS Utility Conversion
For each component:
1. Identify CSS classes used in the component
2. Find corresponding Tailwind utility equivalents
3. Replace CSS classes with Tailwind utilities
4. Test component functionality
5. Verify visual consistency

### Phase 3: Custom CSS Cleanup
After component migration:
1. Remove unused CSS from `index.css`
2. Keep only custom styles not replaceable by utilities
3. Maintain custom animations and scroll reveal effects

## Tailwind Utility Mapping

### Common CSS → Tailwind Mappings

| CSS Property | Tailwind Utility |
|-------------|------------------|
| `display: flex` | `flex` |
| `justify-content: center` | `justify-center` |
| `align-items: center` | `items-center` |
| `gap: 1.5rem` | `gap-6` |
| `padding: 1rem` | `p-4` |
| `margin: 1rem` | `m-4` |
| `font-size: 1.5rem` | `text-2xl` |
| `font-weight: 300` | `font-light` |
| `color: var(--text)` | `text-[#f0ece4]` |
| `background: var(--bg)` | `bg-[#050508]` |
| `border: 1px solid var(--gold-border)` | `border border-[rgba(201,168,76,0.22)]` |
| `opacity: 0.8` | `opacity-80` |
| `transition: all 0.3s ease` | `transition-all duration-300 ease` |
| `hover:bg-hover` | `hover:bg-[#13131f]` |

### Custom Properties → Tailwind
- `--bg`: `bg-[#050508]`
- `--bg-alt`: `bg-[#080810]`
- `--bg-surface`: `bg-[#0b0b14]`
- `--bg-card`: `bg-[#0f0f1a]`
- `--bg-hover`: `bg-[#13131f]`
- `--gold`: `text-[#c9a84c]` / `border-[#c9a84c]`
- `--gold-light`: `text-[#dbbe68]`
- `--gold-deep`: `text-[#9a7a30]`
- `--text`: `text-[#f0ece4]`
- `--text-dim`: `text-[#6e6e7a]`
- `--text-muted`: `text-[#38383e]`

### Font Families
- `--display`: `font-display` (need to add to config)
- `--body`: `font-body`
- `--label`: `font-label`

### Animations
- Scroll reveal: Keep custom CSS or add to Tailwind config
- Fade effects: `animate-fade-in`

## Progress Tracking

### Completed
- [x] Setup Tailwind v4
- [x] Configure PostCSS
- [x] Add Tailwind import to index.css
- [x] Verify build works
- [x] Navbar.tsx - Migrated to Tailwind utilities
- [x] Hero.tsx - Migrated to Tailwind utilities
- [x] Fleet.tsx - Migrated to Tailwind utilities
- [x] Jets.tsx - Migrated to Tailwind utilities
- [x] Destinations.tsx - Migrated to Tailwind utilities
- [x] Events.tsx - Migrated to Tailwind utilities
- [x] Nightlife.tsx - Migrated to Tailwind utilities
- [x] Stats.tsx - Migrated to Tailwind utilities
- [x] Contact.tsx - Migrated to Tailwind utilities
- [x] index.css - Utility classes preserved for component usage

### Pending
- [ ] Test all components
- [ ] Optimize build size
- [ ] Document migration decisions

## Notes
- Preserve all existing functionality
- Maintain visual consistency
- Use arbitrary values for custom colors
- Keep custom animations in CSS if needed
- Test each component after migration
