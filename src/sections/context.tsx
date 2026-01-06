import { SlideType } from './types';

export const contextSlides: SlideType[] = [
  {
    title: "Understanding Chat Turns & Context Growth",
    subtitle: "How conversation history accumulates and consumes your context window",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-gray-700">Each turn includes <strong>everything</strong> that came before. The AI doesn't have persistent memory — it rebuilds context from scratch every conversation.</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Turn 1 */}
          <div className="bg-white p-3 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2 text-center text-sm">Turn 1</h4>
            <div className="space-y-1">
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">System Prompt</div>
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">Context</div>
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">User Prompt 1</div>
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">Response 1</div>
            </div>
          </div>

          {/* Turn 2 */}
          <div className="bg-white p-3 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2 text-center text-sm">Turn 2</h4>
            <div className="space-y-1">
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">System Prompt</div>
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">Context</div>
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">User Prompt 1</div>
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">Response 1</div>
              <div className="bg-green-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">User Prompt 2</div>
              <div className="bg-green-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">Response 2</div>
            </div>
          </div>

          {/* Turn 3 */}
          <div className="bg-white p-3 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2 text-center text-sm">Turn 3</h4>
            <div className="space-y-1">
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">System Prompt</div>
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">Context</div>
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">User Prompt 1</div>
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">Response 1</div>
              <div className="bg-green-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">User Prompt 2</div>
              <div className="bg-green-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">Response 2</div>
              <div className="bg-orange-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">User Prompt 3</div>
              <div className="bg-orange-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">Response 3</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-2 text-sm">📈 Why Context Grows</h4>
            <ul className="space-y-1 text-gray-700 text-xs">
              <li className="flex"><span className="mr-2">•</span><span>Every prompt and response stays in history</span></li>
              <li className="flex"><span className="mr-2">•</span><span>System prompts repeat each turn</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Attached files add to the total</span></li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-2 text-sm">⚠️ The Implications</h4>
            <ul className="space-y-1 text-gray-700 text-xs">
              <li className="flex"><span className="mr-2">•</span><span>Long conversations hit limits faster</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Verbose responses consume capacity</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Starting fresh resets your context</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-indigo-100 p-3 rounded-lg">
          <p className="text-sm italic text-indigo-900">
            <strong>Key Insight:</strong> Be intentional about what goes into your context — every message takes space away from the AI's ability to reason.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Architecting Instructions for Context Efficiency",
    subtitle: "Keeping your context window lean and relevant",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500">
          <p className="text-gray-700">
            <strong>Remember:</strong> Every instruction file loaded consumes precious context window space. Scoped instructions ensure only relevant context is loaded — keeping your window available for what matters.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Problem visualization */}
          <div className="col-span-3 bg-white p-4 rounded-lg shadow border border-red-200">
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <div className="text-sm font-semibold text-red-700 mb-2">❌ Unscoped Instructions</div>
                <div className="bg-red-50 rounded-lg p-3">
                  <div className="flex h-8 rounded overflow-hidden">
                    <div className="bg-red-400 flex-[3] flex items-center justify-center text-xs text-white font-medium">Instructions</div>
                    <div className="bg-blue-400 flex-[2] flex items-center justify-center text-xs text-white font-medium">Your Context</div>
                    <div className="bg-gray-300 flex-[1] flex items-center justify-center text-xs text-gray-600 font-medium">AI Response</div>
                  </div>
                  <p className="text-xs text-red-600 mt-2">All instructions loaded → Less room for actual work</p>
                </div>
              </div>
              <div className="px-4 text-2xl text-gray-400">→</div>
              <div className="text-center flex-1">
                <div className="text-sm font-semibold text-green-700 mb-2">✓ Scoped Instructions</div>
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="flex h-8 rounded overflow-hidden">
                    <div className="bg-green-400 flex-[1] flex items-center justify-center text-xs text-white font-medium">Relevant</div>
                    <div className="bg-blue-400 flex-[3] flex items-center justify-center text-xs text-white font-medium">Your Context</div>
                    <div className="bg-purple-400 flex-[2] flex items-center justify-center text-xs text-white font-medium">AI Response</div>
                  </div>
                  <p className="text-xs text-green-600 mt-2">Only what's needed → Maximum context for work</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">📁 Scope by File Type (applyTo)</h4>
            <div className="space-y-2 text-sm">
              <p className="text-xs text-gray-500 mb-2">Use <code className="bg-gray-100 px-1 rounded">applyTo</code> frontmatter in any <code className="bg-gray-100 px-1 rounded">.instructions.md</code> file:</p>
              <div className="flex items-center space-x-2">
                <code className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded font-mono text-xs">applyTo: "**/*.go"</code>
                <span className="text-gray-500">→ Go files only</span>
              </div>
              <div className="flex items-center space-x-2">
                <code className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-mono text-xs">applyTo: "**/*.ts"</code>
                <span className="text-gray-500">→ TypeScript files</span>
              </div>
              <div className="flex items-center space-x-2">
                <code className="bg-green-100 text-green-800 px-2 py-0.5 rounded font-mono text-xs">applyTo: "**/*.md"</code>
                <span className="text-gray-500">→ Markdown files</span>
              </div>
              <div className="flex items-center space-x-2">
                <code className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-mono text-xs">applyTo: "**/*.test.*"</code>
                <span className="text-gray-500">→ Test files only</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">📂 Scope by Directory</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <code className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded font-mono text-xs">/api/AGENTS.md</code>
                <span className="text-gray-500">→ API layer context</span>
              </div>
              <div className="flex items-center space-x-2">
                <code className="bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded font-mono text-xs">/frontend/AGENTS.md</code>
                <span className="text-gray-500">→ UI components</span>
              </div>
              <div className="flex items-center space-x-2">
                <code className="bg-pink-100 text-pink-800 px-2 py-0.5 rounded font-mono text-xs">/db/AGENTS.md</code>
                <span className="text-gray-500">→ Database layer</span>
              </div>
              <div className="flex items-center space-x-2">
                <code className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded font-mono text-xs">applyTo: "src/**"</code>
                <span className="text-gray-500">→ YAML frontmatter</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">🎯 Architecture Strategy</h4>
          <div className="grid grid-cols-3 gap-3 text-sm">
            <div className="bg-white/70 p-2 rounded text-center">
              <div className="font-medium text-indigo-700">Root Level</div>
              <div className="text-xs text-gray-600">Project-wide conventions</div>
            </div>
            <div className="bg-white/70 p-2 rounded text-center">
              <div className="font-medium text-purple-700">Directory Level</div>
              <div className="text-xs text-gray-600">Layer-specific patterns</div>
            </div>
            <div className="bg-white/70 p-2 rounded text-center">
              <div className="font-medium text-pink-700">File Type Level</div>
              <div className="text-xs text-gray-600">Language/format rules</div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
          <p className="text-sm text-amber-900">
            <strong>💡 Pro Tip:</strong> Put detailed, verbose instructions in scoped files. Keep root instructions minimal — they're always loaded.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Architecting Codebases for Context Efficiency",
    subtitle: "How code structure impacts AI effectiveness",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
          <p className="text-sm text-gray-700">
            <strong>The Problem:</strong> Large monolithic files waste context window space on irrelevant code when you only need to modify a single function.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Visualization + Patterns */}
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-lg shadow border border-red-200">
              <div className="text-sm font-semibold text-red-700 mb-2 text-center">❌ Monolithic Files</div>
              <div className="flex h-6 rounded overflow-hidden mb-1">
                <div className="bg-red-400 flex-[4] flex items-center justify-center text-xs text-white font-medium">File Metadata</div>
                <div className="bg-orange-400 flex-[2] flex items-center justify-center text-xs text-white font-medium">Function</div>
                <div className="bg-gray-300 flex-[1] flex items-center justify-center text-xs text-gray-600 font-medium">AI</div>
              </div>
              <p className="text-xs text-red-600 text-center">3000-line file → Only needed 50 lines</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow border border-red-200">
              <h4 className="font-semibold text-red-900 mb-2">🚫 Context-Polluting Patterns</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>God Classes:</strong> 2000+ line files</li>
                <li>• <strong>Mixed Concerns:</strong> Logic + UI + data in one</li>
                <li>• <strong>Copy-Paste Code:</strong> Repeated functions</li>
                <li>• <strong>Deep Nesting:</strong> 6+ levels of logic</li>
                <li>• <strong>No Abstractions:</strong> Details everywhere</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-white p-3 rounded-lg shadow border border-green-200">
              <div className="text-sm font-semibold text-green-700 mb-2 text-center">✓ Modular Structure</div>
              <div className="flex h-6 rounded overflow-hidden mb-1">
                <div className="bg-green-400 flex-[1] flex items-center justify-center text-xs text-white font-medium">File</div>
                <div className="bg-blue-400 flex-[3] flex items-center justify-center text-xs text-white font-medium">Context</div>
                <div className="bg-purple-400 flex-[3] flex items-center justify-center text-xs text-white font-medium">Better AI</div>
              </div>
              <p className="text-xs text-green-600 text-center">150-line file → Relevant context only</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">✅ Context-Efficient Patterns</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>Single Responsibility:</strong> One purpose (100-300 lines)</li>
                <li>• <strong>Clear Separation:</strong> Layers isolated</li>
                <li>• <strong>DRY Principle:</strong> Shared logic reusable</li>
                <li>• <strong>Shallow Functions:</strong> 2-3 levels max</li>
                <li>• <strong>Interface Abstractions:</strong> Hide complexity</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">📊 Real-World Impact</h4>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="bg-red-50 p-2 rounded text-center">
                <div className="text-lg font-bold text-red-600">5,000</div>
                <div className="text-xs text-gray-600">Monolithic file</div>
              </div>
              <div className="bg-yellow-50 p-2 rounded text-center">
                <div className="text-lg font-bold text-yellow-600">15</div>
                <div className="text-xs text-gray-600">God classes</div>
              </div>
              <div className="bg-green-50 p-2 rounded text-center">
                <div className="text-lg font-bold text-green-600">200</div>
                <div className="text-xs text-gray-600">Lines (ideal)</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-3 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">🔧 Refactoring for AI</h4>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="bg-white/70 p-2 rounded text-center">
                <div className="font-medium text-indigo-700 text-xs">Extract Functions</div>
              </div>
              <div className="bg-white/70 p-2 rounded text-center">
                <div className="font-medium text-purple-700 text-xs">Separate Layers</div>
              </div>
              <div className="bg-white/70 p-2 rounded text-center">
                <div className="font-medium text-pink-700 text-xs">Module Boundaries</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-2 rounded-lg">
          <p className="text-sm italic text-blue-900 text-center">
            <strong>Key Insight:</strong> Well-architected code = dramatically more effective AI. Small, focused files = maximum context efficiency.
          </p>
        </div>
      </div>
    )
  }
];
