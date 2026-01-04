import { SlideType } from './types';

export const instructionsSlides: SlideType[] = [
    {
      title: "Custom Instructions",
      subtitle: "Teaching AI Your Coding Standards",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 max-w-2xl">
            <div className="flex items-center space-x-4">
              <div className="text-4xl">📋</div>
              <div>
                <h3 className="text-2xl font-bold text-white">Context That Persists</h3>
                <p className="text-gray-400">Define guidelines once, apply them automatically to every AI interaction</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">🎯 What Custom Instructions Do</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Set coding style & conventions</li>
                <li>• Define project-specific patterns</li>
                <li>• Specify preferred frameworks/libraries</li>
                <li>• Establish documentation standards</li>
                <li>• Share team knowledge with AI</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">✨ Why They Matter</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Consistent AI responses across sessions</li>
                <li>• No need to repeat context every prompt</li>
                <li>• Team-wide shared understanding</li>
                <li>• Version controlled with your code</li>
                <li>• Works across multiple AI agents</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 px-6 py-4 rounded-lg max-w-2xl">
            <p className="text-center text-blue-900">
              <strong>Description + Delegation:</strong> Good instructions reduce the need to describe context repeatedly and help delegate tasks more effectively.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Instruction File Types",
      subtitle: "Three Ways to Customize AI Behavior",
      content: (
        <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-5">
            {/* copilot-instructions.md */}
            <div className="bg-white p-5 rounded-lg shadow border-l-4 border-blue-500">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono">.github/copilot-instructions.md</code>
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">Global</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">Single file that applies to <strong>all</strong> chat requests in your workspace automatically.</p>
                  <p className="text-gray-500 text-xs">✓ Works in VS Code, Visual Studio, and GitHub.com</p>
                </div>
              </div>
            </div>

            {/* .instructions.md */}
            <div className="bg-white p-5 rounded-lg shadow border-l-4 border-green-500">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono">*.instructions.md</code>
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Conditional</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">Multiple files with <strong>glob patterns</strong> — apply different rules to different file types.</p>
                  <p className="text-gray-500 text-xs">✓ e.g., applyTo: "**/*.py" for Python-specific guidelines</p>
                </div>
              </div>
            </div>

            {/* AGENTS.md */}
            <div className="bg-white p-5 rounded-lg shadow border-l-4 border-purple-500">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <code className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-mono">AGENTS.md</code>
                    <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded">Multi-Agent</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">Universal format for <strong>multiple AI agents</strong> — Copilot, Claude Code, and others.</p>
                  <p className="text-gray-500 text-xs">✓ Root or subfolders for different project areas (experimental)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>💡 Tip:</strong> All files are combined when sent to the AI. Use <code className="bg-gray-200 px-1 rounded">copilot-instructions.md</code> for project-wide rules, <code className="bg-gray-200 px-1 rounded">.instructions.md</code> for language-specific, and <code className="bg-gray-200 px-1 rounded">AGENTS.md</code> for cross-tool compatibility.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Writing Instructions",
      subtitle: "Anatomy of an Effective Instructions File",
      content: (
        <div className="flex flex-col space-y-5 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-6">
            {/* Code example */}
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-gray-400 text-xs mb-2 font-mono">.github/copilot-instructions.md</p>
              <pre className="text-sm text-gray-100 font-mono whitespace-pre-wrap leading-relaxed">
{`# Project Guidelines

## Code Style
- Use TypeScript for all new code
- Prefer functional components
- Use Tailwind CSS for styling

## Conventions
- File names: kebab-case
- Components: PascalCase
- Functions: camelCase

## Project Structure
- Components in /src/components
- Hooks in /src/hooks
- Types in /src/types

## Testing
- Write tests for all new features
- Use React Testing Library`}
              </pre>
            </div>

            {/* Tips */}
            <div className="flex flex-col space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">✅ Do</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Keep instructions short & specific</li>
                  <li>• Use natural language</li>
                  <li>• Organize with Markdown headers</li>
                  <li>• Include examples when helpful</li>
                  <li>• Version control your instructions</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-900 mb-2">❌ Don't</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Write essays — be concise</li>
                  <li>• Include sensitive information</li>
                  <li>• Contradict yourself</li>
                  <li>• Expect 100% compliance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-sm italic text-blue-900">
              <strong>Pro Tip:</strong> VS Code can generate instructions automatically! Use <strong>Configure Chat → Generate Chat Instructions</strong> to create a starting point based on your codebase.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Conditional Instructions",
      subtitle: "Apply Different Rules to Different Files",
      content: (
        <div className="flex flex-col space-y-5 max-w-4xl mx-auto">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <p className="text-gray-700">
              Use <code className="bg-green-100 px-1 rounded">.instructions.md</code> files with YAML frontmatter to apply instructions only when working with specific file types.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Python example */}
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-green-400 text-xs mb-2 font-mono">python-standards.instructions.md</p>
              <pre className="text-sm text-gray-100 font-mono whitespace-pre-wrap leading-relaxed">
{`---
applyTo: "**/*.py"
description: "Python coding standards"
---
# Python Guidelines

- Follow PEP 8 style guide
- Use type hints for all functions
- Docstrings for public methods
- Use pytest for testing
- Prefer pathlib over os.path`}
              </pre>
            </div>

            {/* React example */}
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-blue-400 text-xs mb-2 font-mono">react-components.instructions.md</p>
              <pre className="text-sm text-gray-100 font-mono whitespace-pre-wrap leading-relaxed">
{`---
applyTo: "src/components/**/*.tsx"
description: "React component standards"
---
# React Components

- Use functional components only
- Props interface above component
- Destructure props in signature
- Use custom hooks for logic
- Memoize expensive calculations`}
              </pre>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">📁 Storage Locations</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-700">Workspace (project-specific):</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block mt-1">.github/instructions/</code>
              </div>
              <div>
                <p className="font-medium text-gray-700">User profile (all projects):</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block mt-1">~/.vscode/instructions/</code>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "AGENTS.md",
      subtitle: "Universal Instructions for Multiple AI Tools",
      content: (
        <div className="flex flex-col space-y-5 max-w-4xl mx-auto">
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <p className="text-gray-700">
              <code className="bg-purple-100 px-1 rounded font-mono">AGENTS.md</code> is a convention that works across multiple AI coding assistants — GitHub Copilot, Claude Code, Cursor, and more.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-purple-400 text-xs mb-2 font-mono">AGENTS.md (root)</p>
              <pre className="text-sm text-gray-100 font-mono whitespace-pre-wrap leading-relaxed">
{`# AI Agent Instructions

## Project Overview
This is a React + TypeScript app
for workshop presentations.

## Architecture
- Single-page application
- Tailwind CSS for styling
- No external UI libraries

## Code Generation Rules
- Always use TypeScript
- Prefer const over let
- Use descriptive variable names
- Include error handling

## File Structure
- slides.tsx contains all slides
- Each slide is an object in array`}
              </pre>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">🔄 Cross-Tool Benefits</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Same file works in VS Code & Claude</li>
                  <li>• Team consistency across tools</li>
                  <li>• Easy migration between AI assistants</li>
                  <li>• One source of truth</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">📂 Nested Files (Experimental)</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <code className="bg-gray-100 px-1 rounded">/frontend/AGENTS.md</code></li>
                  <li>• <code className="bg-gray-100 px-1 rounded">/backend/AGENTS.md</code></li>
                  <li>• <code className="bg-gray-100 px-1 rounded">/tests/AGENTS.md</code></li>
                  <li className="text-gray-500 text-xs mt-1">Enable: chat.useNestedAgentsMdFiles</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-100 p-4 rounded-lg">
            <p className="text-sm italic text-orange-900">
              <strong>Recommendation:</strong> Use <code className="bg-orange-200 px-1 rounded">AGENTS.md</code> for broad project context and AI-agnostic rules, <code className="bg-orange-200 px-1 rounded">copilot-instructions.md</code> for Copilot-specific features.
            </p>
          </div>
        </div>
      )
    },
];
