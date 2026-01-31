import { FileCode } from 'lucide-react';
import { SlideType } from './types';

export const speckitSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <FileCode className="w-20 h-20 text-teal-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-teal-900 text-center">
          Spec Kit & SDD
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Specification-Driven Development for AI agents
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-teal-300 rounded-full"></div>
          <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
          <div className="w-3 h-3 bg-teal-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "What is Spec-Driven Development?",
    subtitle: "Version control for your thinking — specifications become executable",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">📋</div>
            <div>
              <h3 className="text-2xl font-bold text-teal-900 mb-2">SDD makes technical decisions explicit, reviewable, and evolvable</h3>
              <p className="text-gray-700">Instead of having crucial architectural decisions trapped in email threads or someone's head, capture the "why" behind your technical choices in a format that grows with your project.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">🎯 What SDD Solves</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Prevents shared-context failures</li>
              <li>• Surfaces assumptions early</li>
              <li>• Avoids costly rewrites</li>
              <li>• Aligns teams before coding</li>
              <li>• Documents the "why" not just "what"</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">✨ Key Benefits</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Living docs that evolve with code</li>
              <li>• Guides AI agents to right solution</li>
              <li>• Enables multi-variant implementations</li>
              <li>• Natural as refactoring code</li>
              <li>• Unlocks parallel exploration</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 px-6 py-4 rounded-lg">
          <p className="text-center text-blue-900">
            <strong>Core Idea:</strong> Treat specs as first-class, versioned artifacts that steer implementation choices — not dusty documents written once and forgotten.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "GitHub Spec Kit Overview",
    subtitle: "Open toolkit to operationalize SDD with templates and CLI tooling",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">🌱</div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">An open source toolkit for building high-quality software faster</h3>
              <p className="text-gray-400">Focus on product scenarios and predictable outcomes instead of vibe coding every piece from scratch.</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow border-l-4 border-teal-500">
            <h4 className="font-bold text-gray-900 mb-2">🔧 Specify CLI</h4>
            <p className="text-sm text-gray-700">Bootstrapping tool that downloads official templates and sets up SDD scaffolding for your chosen AI agent. Helps initialize projects and manage the spec-driven workflow.</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border-l-4 border-teal-500">
            <h4 className="font-bold text-gray-900 mb-2">📁 Templates & Scripts</h4>
            <p className="text-sm text-gray-700">Foundation for the SDD experience — defines what specs, technical plans, and tasks look like. Includes helper scripts to ensure consistent scaffolding application.</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border-l-4 border-teal-500">
            <h4 className="font-bold text-gray-900 mb-2">🤖 Cross-Agent Support</h4>
            <p className="text-sm text-gray-700">Designed to work with Claude Code, GitHub Copilot, Cursor, Gemini CLI, Qoder, Windsurf, and many more. Works in the environment you're already using.</p>
          </div>
        </div>

        <div className="bg-green-50 px-6 py-4 rounded-lg">
          <p className="text-center text-green-900 text-sm">
            <strong>Open Source:</strong> Available at <code className="bg-green-100 px-2 py-1 rounded">github.com/github/spec-kit</code> — no magic, just good patterns you can customize.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Installing Spec Kit",
    subtitle: "Get started with Specify CLI in seconds",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Prerequisites</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center space-x-2 text-gray-300">
              <span className="text-green-400">✓</span>
              <span>Python 3.11+</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <span className="text-green-400">✓</span>
              <span>Git</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <span className="text-green-400">✓</span>
              <span>uv (package manager)</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <span className="text-green-400">✓</span>
              <span>Supported AI agent</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow border-l-4 border-green-500">
            <h4 className="font-bold text-gray-900 mb-3">Option 1: Persistent Install (Recommended)</h4>
            <p className="text-sm text-gray-700 mb-3">Install once, use everywhere — tool stays in PATH and available via <code className="bg-gray-100 px-2 py-1 rounded text-xs">specify</code> command.</p>
            <div className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code className="text-green-400 text-sm font-mono">
                uv tool install specify-cli \<br />
                &nbsp;&nbsp;--from git+https://github.com/github/spec-kit.git
              </code>
            </div>
            <div className="mt-3 bg-gray-900 p-4 rounded overflow-x-auto">
              <code className="text-blue-400 text-sm font-mono">
                # Then use directly<br />
                specify init my-project --ai claude
              </code>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-3">Option 2: One-Time Usage</h4>
            <p className="text-sm text-gray-700 mb-3">Run directly without installing — good for trying it out.</p>
            <div className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code className="text-green-400 text-sm font-mono">
                uvx --from git+https://github.com/github/spec-kit.git \<br />
                &nbsp;&nbsp;specify init my-project --ai claude
              </code>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 px-6 py-4 rounded-lg">
          <p className="text-center text-blue-900 text-sm">
            <strong>Upgrade:</strong> <code className="bg-blue-100 px-2 py-1 rounded text-xs">uv tool install specify-cli --force --from git+...</code>
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Spec Kit Workflow",
    subtitle: "Sequential slash commands guide you from idea to implementation",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4 rounded-lg text-white">
          <h3 className="text-xl font-bold mb-1">The SDD Process</h3>
          <p className="text-teal-50 text-sm">Bootstrap → constitution → spec → plan → tasks → implement</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-start space-x-3 bg-white p-3 rounded-lg shadow">
            <div className="flex-shrink-0 w-7 h-7 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Bootstrap Project</h4>
              <code className="text-xs bg-gray-100 px-2 py-0.5 rounded block mb-1">specify init --ai claude</code>
              <p className="text-xs text-gray-600">Scaffolds .specify/ and prompts</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 bg-white p-3 rounded-lg shadow">
            <div className="flex-shrink-0 w-7 h-7 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Constitution</h4>
              <code className="text-xs bg-gray-100 px-2 py-0.5 rounded block mb-1">/speckit.constitution</code>
              <p className="text-xs text-gray-600">Define principles & rules</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 bg-white p-3 rounded-lg shadow">
            <div className="flex-shrink-0 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Specify Requirements</h4>
              <code className="text-xs bg-gray-100 px-2 py-0.5 rounded block mb-1">/speckit.specify</code>
              <p className="text-xs text-gray-600">Describe <strong>what</strong> & <strong>why</strong></p>
            </div>
          </div>

          <div className="flex items-start space-x-3 bg-white p-3 rounded-lg shadow">
            <div className="flex-shrink-0 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Technical Plan</h4>
              <code className="text-xs bg-gray-100 px-2 py-0.5 rounded block mb-1">/speckit.plan</code>
              <p className="text-xs text-gray-600">Tech stack & <strong>how</strong> to build</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 bg-white p-3 rounded-lg shadow">
            <div className="flex-shrink-0 w-7 h-7 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Break Into Tasks</h4>
              <code className="text-xs bg-gray-100 px-2 py-0.5 rounded block mb-1">/speckit.tasks</code>
              <p className="text-xs text-gray-600">Actionable task list with deps</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 bg-white p-3 rounded-lg shadow">
            <div className="flex-shrink-0 w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">6</div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Execute</h4>
              <code className="text-xs bg-gray-100 px-2 py-0.5 rounded block mb-1">/speckit.implement</code>
              <p className="text-xs text-gray-600">Validates & executes tasks</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 px-4 py-3 rounded-lg border border-orange-200">
          <p className="text-center text-orange-900 text-xs">
            <strong>Pro Tip:</strong> Provide detailed initial prompts for higher quality specs. More detail = less tweaking later.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Best Practices & Tips",
    subtitle: "Get the most out of Spec-Driven Development",
    content: (
      <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-green-500">
            <h4 className="font-bold text-gray-900 mb-1 text-sm">✅ Detailed Initial Prompts</h4>
            <p className="text-xs text-gray-700">More explicit about <strong>what</strong> & <strong>why</strong> = better specs. Think through requirements before <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">/speckit.specify</code>.</p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-1 text-sm">📝 Customize Templates</h4>
            <p className="text-xs text-gray-700">Bundled templates are examples — modify prompts in <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">.specify/</code> to fit your org's needs.</p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-1 text-sm">🏛️ Use constitution.md</h4>
            <p className="text-xs text-gray-700">Enforce non-negotiable rules (testing, stack, compliance) in constitution. AI agents reference throughout all phases.</p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-orange-500">
            <h4 className="font-bold text-gray-900 mb-1 text-sm">🔍 Clarify Before Planning</h4>
            <p className="text-xs text-gray-700">Use <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">/speckit.clarify</code> after spec to surface gaps <strong>before</strong> technical plan — reduces rework.</p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-teal-500">
            <h4 className="font-bold text-gray-900 mb-1 text-sm">🔄 Version Specs w/ Code</h4>
            <p className="text-xs text-gray-700">Keep specs in repo so they survive tool switching & onboarding. Living docs that evolve with code.</p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-indigo-500">
            <h4 className="font-bold text-gray-900 mb-1 text-sm">🧪 Validate & Iterate</h4>
            <p className="text-xs text-gray-700">Use <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">/speckit.analyze</code> for consistency & <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">/speckit.checklist</code> for completeness.</p>
          </div>
        </div>

        <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
          <div className="flex items-start space-x-2">
            <div className="text-xl">💡</div>
            <div>
              <h4 className="font-bold text-yellow-900 mb-1 text-sm">Experimental Project</h4>
              <p className="text-xs text-yellow-900">Spec Kit is an experiment — community feedback shapes evolution. Open issues on GitHub for missing features.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-500 to-blue-500 px-4 py-3 rounded-lg">
          <p className="text-center text-white font-bold text-sm">
            🌱 Learn more: <code className="bg-white/20 px-2 py-1 rounded text-xs">github.com/github/spec-kit</code>
          </p>
        </div>
      </div>
    )
  }
];
