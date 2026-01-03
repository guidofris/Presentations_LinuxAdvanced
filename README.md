# AI Native Software Engineering Workshop

An interactive slideshow for the **AI Native Developer Workshop**, built with React and TypeScript. The presentation covers AI fundamentals, LLM concepts, and the **4D AI Fluency Framework** (Delegation, Description, Discernment, Diligence).

## Purpose

This project serves as a presentation tool for teaching developers about:

- AI adoption and the "quantum state" of modern development
- How Large Language Models (LLMs) work
- Transformer architecture and GPU acceleration
- Context windows and model capabilities
- The 4D AI Fluency Framework for effective AI collaboration

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd ai_workshop
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

## Usage

### Navigation

- **Arrow keys**: Use ← and → to navigate between slides
- **Buttons**: Click Previous/Next buttons at the bottom
- **Dots**: Click any dot indicator to jump to a specific slide

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```text
ai_workshop/
├── src/
│   ├── slides.tsx      # Main slideshow component with all slides
│   ├── App.tsx         # Root application component
│   ├── main.tsx        # Entry point
│   ├── index.css       # Tailwind CSS imports
│   └── img/            # Image assets
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # This file
```

## Adding New Slides

Slides are defined in `src/slides.tsx` as an array of objects:

```tsx
{
  title: "Slide Title",
  subtitle: "Subtitle text",
  content: (
    <div>
      {/* Your JSX content here */}
    </div>
  )
}
```

Add new slides to the `slides` array - navigation automatically adjusts.

## License

Private - All rights reserved.

## Author

**Jan De Dobbeleer**
Engineering Leader & Open Source Innovator
📧 jan@itdepends.be
🐦 @jandedobbeleer
