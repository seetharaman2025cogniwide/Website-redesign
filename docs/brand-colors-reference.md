# Brand Colors Reference

## Available Brand Colors in Tailwind

Your company's brand colors are now configured globally in `tailwind.config.js` and can be used throughout the application with the `brand-` prefix.

### Primary Brand Colors

- **Blue**: `brand-blue` (#2563EB)
  - Light: `brand-blue-light` (#60A5FA)
  - Dark: `brand-blue-dark` (#1E40AF)
  - Usage: `bg-brand-blue`, `text-brand-blue`, `border-brand-blue`

- **Yellow**: `brand-yellow` (#FBBF24)
  - Light: `brand-yellow-light` (#FCD34D)
  - Dark: `brand-yellow-dark` (#F59E0B)
  - Usage: `bg-brand-yellow`, `text-brand-yellow`, `border-brand-yellow`

- **Red**: `brand-red` (#EF4444)
  - Light: `brand-red-light` (#F87171)
  - Dark: `brand-red-dark` (#DC2626)
  - Usage: `bg-brand-red`, `text-brand-red`, `border-brand-red`

- **Green**: `brand-green` (#10B981)
  - Light: `brand-green-light` (#34D399)
  - Dark: `brand-green-dark` (#059669)
  - Usage: `bg-brand-green`, `text-brand-green`, `border-brand-green`

- **Purple**: `brand-purple` (#8B5CF6)
  - Light: `brand-purple-light` (#A78BFA)
  - Dark: `brand-purple-dark` (#7C3AED)
  - Usage: `bg-brand-purple`, `text-brand-purple`, `border-brand-purple`

### Neutral Colors

- **White**: `brand-white` (#FFFFFF)
- **Light Grey**: `brand-light-grey` (#F8F9FA)
- **Grey**: `brand-grey` (#CED4DA)
- **Medium Grey**: `brand-medium-grey` (#6C757D)
- **Dark Grey**: `brand-dark-grey` (#212529)
- **Black**: `brand-black` (#000000)

## Typography

The application now uses **Poppins** font from Google Fonts as the primary font family.

- Font weights available: 300, 400, 500, 600, 700, 800
- Usage: Applied automatically via `font-sans` or explicitly with `font-poppins`

## Example Usage

```jsx
// Background colors
<div className="bg-brand-blue">Blue background</div>
<div className="bg-brand-yellow/10">Yellow background with 10% opacity</div>

// Text colors
<h1 className="text-brand-blue">Blue heading</h1>
<p className="text-brand-purple">Purple text</p>

// Borders
<div className="border-2 border-brand-green">Green border</div>

// Gradients
<div className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-yellow">
  Multi-color gradient
</div>

// Gradient text
<span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
  Gradient text effect
</span>
```

## Design Guidelines

- **Primary Background**: White (`bg-white`)
- **Primary CTA**: Blue (`bg-brand-blue`)
- **Secondary CTA**: Blue outline (`border-brand-blue text-brand-blue`)
- **Accent Colors**: Use yellow, purple, green, and red for highlights and visual interest
- **Text**: Dark grey for body text (`text-gray-900`, `text-gray-600`)
