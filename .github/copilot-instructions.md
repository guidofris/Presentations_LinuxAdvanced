# Copilot Instructions for AI Workshop Slides

## Project Overview

This is a React-based interactive slideshow for an **AI Native Developer Workshop**. Topics range from AI fundamentals to hands-on tool demos. The core framework presented is the **4D AI Fluency Framework** (Delegation, Description, Discernment, Diligence). All slides live in a single component file.

## Architecture

- **Single-component app**: [slides.tsx](../slides.tsx) contains the complete slideshow
- **Framework**: React with TypeScript, `useState` for navigation
- **Styling**: Tailwind CSS utility classes only (no external CSS)
- **Icons**: `lucide-react` for UI elements

## Slide Object Structure

```tsx
{
  title: string,      // Main heading (e.g., "1. Delegation")
  subtitle: string,   // Subheading description
  content: JSX.Element // React JSX for slide body
}
```

Add new slides to the `slides` array—navigation auto-adjusts.

## Color Scheme by Topic

| Topic | Primary | Accent Classes |
|-------|---------|----------------|
| Delegation | Blue | `blue-500`, `blue-50`, `blue-100`, `blue-200`, `blue-900` |
| Description | Green | `green-500`, `green-50`, `green-100`, `green-200`, `green-900` |
| Discernment | Purple | `purple-500`, `purple-50`, `purple-100`, `purple-200`, `purple-900` |
| Diligence | Orange | `orange-500`, `orange-50`, `orange-100`, `orange-200`, `orange-900` |
| Overview/Intro | Gray | `gray-100`, `gray-600`, `gray-800` with multi-color cards |
| Tool Demos | *Choose contextually* | Match related 4D topic or use `gray-*` for neutral |

## Reusable Slide Patterns

### Definition Box (top of topic slides)
```tsx
<div className="bg-{color}-50 p-6 rounded-lg border-l-4 border-{color}-500">
  <h3 className="text-2xl font-bold text-{color}-900 mb-4">Title</h3>
  <p className="text-lg text-gray-700">Description text</p>
</div>
```

### Content Card (white background, for lists/details)
```tsx
<div className="bg-white p-5 rounded-lg shadow border border-{color}-200">
  <h4 className="font-semibold text-{color}-900 mb-2">Section Title:</h4>
  <ul className="space-y-2 text-gray-700">
    <li>• Bullet point</li>
  </ul>
</div>
```

### Callout/Reminder Box (bottom emphasis)
```tsx
<div className="bg-{color}-100 p-4 rounded-lg">
  <p className="text-sm italic text-{color}-900">
    <strong>Remember:</strong> Key takeaway message.
  </p>
</div>
```

### Feature Grid (overview slides)
```tsx
<div className="grid grid-cols-2 gap-6">
  <div className="bg-{color}-500 text-white p-6 rounded-lg shadow-lg">
    <div className="text-2xl font-bold mb-2">Title</div>
    <div className="text-sm">Short description</div>
  </div>
</div>
```

### Info Box (neutral, for modes/concepts)
```tsx
<div className="inline-block bg-gray-100 px-6 py-3 rounded-lg">
  <div className="font-semibold text-gray-800 mb-2">Heading</div>
  <div className="text-sm text-gray-600 space-y-1">
    <div>• Item</div>
  </div>
</div>
```

## Slide Layout Guidelines

1. **Max width**: Wrap content in `max-w-3xl mx-auto` for readability
2. **Vertical spacing**: Use `space-y-6` between major sections
3. **Grid layouts**: `grid grid-cols-1 gap-4` for stacked cards, `grid-cols-2` for side-by-side
4. **Text hierarchy**:
   - Headings: `text-2xl font-bold text-{color}-900`
   - Body: `text-lg text-gray-700`
   - Lists: `text-gray-700` with `space-y-2`

## Demo Slide Recommendations

For tool demonstration slides:
- Use screenshots/diagrams as centered `<img>` with `rounded-lg shadow-lg`
- Code snippets: wrap in `<pre>` with `bg-gray-900 text-green-400 p-4 rounded-lg`
- Step-by-step: numbered list in content cards
- Before/after: use 2-column grid

## Navigation Behavior

- Previous disabled on first slide, Next disabled on last
- Dot indicators: active = `bg-blue-600 w-8`, inactive = `bg-gray-300`
- Click any dot to jump directly

## Attribution Layout

When content requires attribution, use the footer pattern:
```tsx
<div className="mt-4 text-center text-sm text-gray-500">
  Slide {currentSlide + 1} of {slides.length} | Attribution text here
</div>
```

For slide-specific attribution (not global), add a subtle note within the slide content:
```tsx
<p className="text-xs text-gray-400 mt-4 text-right">Source: Attribution here</p>
```
