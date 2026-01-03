import { SlideType } from './types';

export const copilotSlides: SlideType[] = [
    {
      title: "GitHub Copilot",
      subtitle: "Your AI-Powered Development Partner",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 max-w-2xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-4xl">🤖</div>
              <div>
                <h3 className="text-2xl font-bold text-white">Not a Model — An Abstraction</h3>
                <p className="text-gray-400">GitHub Copilot is an AI-powered coding assistant that sits between you and multiple AI models</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-4xl">
            <div className="bg-white p-5 rounded-lg shadow border border-gray-200 text-center">
              <div className="text-3xl mb-3">💻</div>
              <h4 className="font-bold text-gray-900 mb-2">IDE Integration</h4>
              <p className="text-sm text-gray-600">Works directly in VS Code, Visual Studio, JetBrains, Neovim, and more</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border border-gray-200 text-center">
              <div className="text-3xl mb-3">⌨️</div>
              <h4 className="font-bold text-gray-900 mb-2">CLI Support</h4>
              <p className="text-sm text-gray-600">GitHub CLI extension brings AI assistance to your terminal</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border border-gray-200 text-center">
              <div className="text-3xl mb-3">🔄</div>
              <h4 className="font-bold text-gray-900 mb-2">Model Agnostic</h4>
              <p className="text-sm text-gray-600">Leverages Claude, GPT, Gemini and other models under the hood</p>
            </div>
          </div>

          <div className="bg-blue-50 px-6 py-4 rounded-lg max-w-2xl">
            <p className="text-center text-blue-900">
              <strong>Key Benefit:</strong> You focus on your code while Copilot handles the complexity of model selection, context management, and prompt engineering.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Copilot Chat Modes",
      subtitle: "Four Ways to Interact with AI in Your Workflow",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <p className="text-xl text-gray-700 max-w-2xl text-center mb-4">
            Copilot offers different interaction modes — each optimized for specific tasks and levels of AI autonomy
          </p>

          <div className="flex space-x-4 max-w-6xl">
            {/* Ask Mode */}
            <div className="flex-1 bg-gradient-to-b from-blue-500 to-blue-700 text-white p-5 rounded-lg shadow-lg">
              <div className="text-center mb-3">
                <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-2">Ask Mode</div>
                <div className="text-3xl mb-2">💬</div>
              </div>
              <ul className="text-xs space-y-1 opacity-90">
                <li>• Chat-based Q&A interface</li>
                <li>• Explore ideas and concepts</li>
                <li>• Get explanations of code</li>
                <li>• No direct file changes</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-white/20 text-xs text-center opacity-75">
                <strong>Best for:</strong> Learning, exploring
              </div>
            </div>

            {/* Edit Mode */}
            <div className="flex-1 bg-gradient-to-b from-green-500 to-green-700 text-white p-5 rounded-lg shadow-lg">
              <div className="text-center mb-3">
                <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-2">Edit Mode</div>
                <div className="text-3xl mb-2">✏️</div>
              </div>
              <ul className="text-xs space-y-1 opacity-90">
                <li>• Direct code modifications</li>
                <li>• Inline suggestions & changes</li>
                <li>• You review before accepting</li>
                <li>• Scoped to specific files</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-white/20 text-xs text-center opacity-75">
                <strong>Best for:</strong> Targeted changes
              </div>
            </div>

            {/* Plan Mode */}
            <div className="flex-1 bg-gradient-to-b from-orange-500 to-orange-700 text-white p-5 rounded-lg shadow-lg">
              <div className="text-center mb-3">
                <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-2">Plan Mode</div>
                <div className="text-3xl mb-2">📋</div>
              </div>
              <ul className="text-xs space-y-1 opacity-90">
                <li>• Generate step-by-step plans</li>
                <li>• Review before execution</li>
                <li>• Iterate on the approach</li>
                <li>• Then execute with Agent</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-white/20 text-xs text-center opacity-75">
                <strong>Best for:</strong> Complex planning
              </div>
            </div>

            {/* Agent Mode */}
            <div className="flex-1 bg-gradient-to-b from-purple-500 to-purple-700 text-white p-5 rounded-lg shadow-lg">
              <div className="text-center mb-3">
                <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-2">Agent Mode</div>
                <div className="text-3xl mb-2">🤖</div>
              </div>
              <ul className="text-xs space-y-1 opacity-90">
                <li>• Autonomous task execution</li>
                <li>• Multi-file operations</li>
                <li>• Runs terminal commands</li>
                <li>• Iterates until complete</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-white/20 text-xs text-center opacity-75">
                <strong>Best for:</strong> Complex tasks
              </div>
            </div>
          </div>

          <div className="bg-gray-100 px-6 py-3 rounded-lg mt-2">
            <p className="text-sm text-gray-600 italic text-center">
              Each mode represents a different balance between human control and AI autonomy
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Ask Mode",
      subtitle: "Chat, Learn, and Explore",
      content: (
        <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">What is Ask Mode?</h3>
            <p className="text-lg text-gray-700">
              A conversational interface for asking questions about your code, exploring ideas, and getting explanations — without making any changes to your files.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-3">✅ Great For:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Understanding unfamiliar code</li>
                <li>• Exploring architecture decisions</li>
                <li>• Learning new frameworks or APIs</li>
                <li>• Brainstorming approaches</li>
                <li>• Getting code explanations</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-3">💡 Key Features:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Workspace-aware context</li>
                <li>• References your open files</li>
                <li>• Suggests code snippets (copy/paste)</li>
                <li>• No automatic file modifications</li>
                <li>• Safe for exploration</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-green-400 font-mono text-sm mb-2">Example prompts:</p>
            <div className="space-y-2 text-gray-300 font-mono text-sm">
              <p>"How does the authentication flow work in this project?"</p>
              <p>"What's the best way to handle errors in this function?"</p>
              <p>"Explain what this regex does"</p>
            </div>
          </div>

          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-sm italic text-blue-900">
              <strong>4D Connection:</strong> Ask mode supports <strong>Delegation</strong> (deciding approach) and <strong>Description</strong> (refining your requirements through conversation).
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Edit Mode",
      subtitle: "Targeted, Controlled Code Changes",
      content: (
        <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-green-900 mb-2">What is Edit Mode?</h3>
            <p className="text-lg text-gray-700">
              Copilot proposes direct changes to your code that you can review, accept, or reject — giving you precise control over every modification.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow border border-green-200">
              <h4 className="font-semibold text-green-900 mb-3">✅ Great For:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Refactoring existing code</li>
                <li>• Adding specific features</li>
                <li>• Fixing bugs you've identified</li>
                <li>• Code style improvements</li>
                <li>• Documentation updates</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border border-green-200">
              <h4 className="font-semibold text-green-900 mb-3">💡 Key Features:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Inline diff view of changes</li>
                <li>• Accept/reject per change</li>
                <li>• Scoped to selected files</li>
                <li>• You maintain full control</li>
                <li>• Iterative refinement possible</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-green-400 font-mono text-sm mb-2">Example prompts:</p>
            <div className="space-y-2 text-gray-300 font-mono text-sm">
              <p>"Add error handling to this function"</p>
              <p>"Convert this class component to a functional component"</p>
              <p>"Add JSDoc comments to all public methods"</p>
            </div>
          </div>

          <div className="bg-green-100 p-4 rounded-lg">
            <p className="text-sm italic text-green-900">
              <strong>4D Connection:</strong> Edit mode emphasizes <strong>Discernment</strong> (reviewing each change) and <strong>Diligence</strong> (you approve everything).
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Plan Mode",
      subtitle: "Think Before You Build",
      content: (
        <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
          <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-orange-900 mb-2">What is Plan Mode?</h3>
            <p className="text-lg text-gray-700">
              Plan mode generates a detailed, step-by-step implementation plan before any code changes. You review and refine the approach, then execute it — separating planning from doing.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-3">✅ Great For:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Complex features requiring thought</li>
                <li>• Architectural decisions</li>
                <li>• Tasks where approach matters</li>
                <li>• Learning by seeing the plan first</li>
                <li>• When you want control over strategy</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-3">💡 How It Works:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• AI analyzes your request</li>
                <li>• Generates detailed step-by-step plan</li>
                <li>• You review and adjust the plan</li>
                <li>• Execute plan with Agent mode</li>
                <li>• Iterate on plan if needed</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-green-400 font-mono text-sm mb-2">Example workflow:</p>
            <div className="space-y-2 text-gray-300 font-mono text-sm">
              <p>1. <span className="text-orange-400">Plan:</span> "How should I implement user authentication?"</p>
              <p>2. <span className="text-gray-400">Review:</span> AI proposes JWT tokens, middleware, route guards...</p>
              <p>3. <span className="text-purple-400">Agent:</span> Execute the approved plan</p>
            </div>
          </div>

          <div className="bg-orange-100 p-4 rounded-lg">
            <p className="text-sm italic text-orange-900">
              <strong>4D Connection:</strong> Plan mode is pure <strong>Delegation</strong> — you're strategizing the approach before any execution, maximizing your control over the AI's direction.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Agent Mode",
      subtitle: "Autonomous Multi-Step Task Execution",
      content: (
        <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-2xl font-bold text-purple-900 mb-2">What is Agent Mode?</h3>
            <p className="text-lg text-gray-700">
              The most autonomous mode — Copilot independently plans and executes multi-step tasks, creating files, running commands, and iterating until the goal is achieved.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-3">✅ Great For:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Building new features end-to-end</li>
                <li>• Scaffolding projects or components</li>
                <li>• Complex multi-file refactoring</li>
                <li>• Implementing from specs or issues</li>
                <li>• Tasks you'd delegate to a junior dev</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-3">💡 Key Features:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Creates and modifies multiple files</li>
                <li>• Runs terminal commands</li>
                <li>• Self-corrects on errors</li>
                <li>• Iterates until task complete</li>
                <li>• Shows reasoning and progress</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-green-400 font-mono text-sm mb-2">Example prompts:</p>
            <div className="space-y-2 text-gray-300 font-mono text-sm">
              <p>"Create a REST API endpoint for user authentication with tests"</p>
              <p>"Add dark mode support throughout the application"</p>
              <p>"Set up CI/CD pipeline with GitHub Actions"</p>
            </div>
          </div>

          <div className="bg-purple-100 p-4 rounded-lg">
            <p className="text-sm italic text-purple-900">
              <strong>4D Connection:</strong> Agent mode requires strong <strong>Delegation</strong> skills (clear goals) and heightened <strong>Discernment</strong> (reviewing autonomous work).
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Choosing the Right Mode",
      subtitle: "Match the Mode to Your Task",
      content: (
        <div className="flex flex-col space-y-5 max-w-4xl mx-auto">
          {/* Visual comparison */}
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">More Human Control</span>
              <span className="text-sm font-semibold text-gray-600">More AI Autonomy</span>
            </div>
            <div className="h-4 bg-gradient-to-r from-blue-500 via-green-500 via-orange-500 to-purple-500 rounded-full"></div>
            <div className="flex justify-between mt-2">
              <div className="text-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-1"></div>
                <span className="text-xs font-semibold text-blue-700">Ask</span>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-1"></div>
                <span className="text-xs font-semibold text-green-700">Edit</span>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full mx-auto mb-1"></div>
                <span className="text-xs font-semibold text-orange-700">Plan</span>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full mx-auto mb-1"></div>
                <span className="text-xs font-semibold text-purple-700">Agent</span>
              </div>
            </div>
          </div>

          {/* Decision guide */}
          <div className="grid grid-cols-4 gap-3">
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2 text-center text-sm">Use Ask When...</h4>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Need to understand code</li>
                <li>• Exploring approaches</li>
                <li>• Learning something new</li>
              </ul>
            </div>

            <div className="bg-green-50 p-3 rounded-lg border border-green-200">
              <h4 className="font-bold text-green-900 mb-2 text-center text-sm">Use Edit When...</h4>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Know what to change</li>
                <li>• Working in specific files</li>
                <li>• Review each change</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
              <h4 className="font-bold text-orange-900 mb-2 text-center text-sm">Use Plan When...</h4>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Complex implementation</li>
                <li>• Want to review approach</li>
                <li>• Architectural decisions</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-900 mb-2 text-center text-sm">Use Agent When...</h4>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Multi-file tasks</li>
                <li>• Building something new</li>
                <li>• Clear, defined goals</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm italic text-gray-700">
              <strong>Pro Tip:</strong> Start with <span className="text-blue-600 font-semibold">Ask</span> to explore → <span className="text-orange-600 font-semibold">Plan</span> for strategy → <span className="text-purple-600 font-semibold">Agent</span> to execute → <span className="text-green-600 font-semibold">Edit</span> to refine. Switch modes anytime!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Adding Context to Chat",
      subtitle: "Help AI Understand Your Code Better",
      content: (
        <div className="flex flex-col space-y-5 max-w-4xl mx-auto">
          <div className="bg-cyan-50 p-5 rounded-lg border-l-4 border-cyan-500">
            <p className="text-gray-700">
              Better context = better responses. VS Code provides multiple ways to give Copilot the information it needs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* #-mentions */}
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="bg-cyan-500 text-white px-2 py-0.5 rounded text-sm font-mono mr-2">#</span>
                Mentions
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">#file</code>
                  <span className="text-gray-600">Reference specific files</span>
                </div>
                <div className="flex items-start space-x-2">
                  <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">#folder</code>
                  <span className="text-gray-600">Include entire folders</span>
                </div>
                <div className="flex items-start space-x-2">
                  <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">#symbol</code>
                  <span className="text-gray-600">Functions, classes, variables</span>
                </div>
                <div className="flex items-start space-x-2">
                  <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">#codebase</code>
                  <span className="text-gray-600">Search your entire project</span>
                </div>
              </div>
            </div>

            {/* Web & External */}
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="bg-purple-500 text-white px-2 py-0.5 rounded text-sm mr-2">🌐</span>
                Web & External
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">#fetch URL</code>
                  <span className="text-gray-600">Fetch web page content</span>
                </div>
                <div className="flex items-start space-x-2">
                  <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">#githubRepo</code>
                  <span className="text-gray-600">Search GitHub repos</span>
                </div>
                <div className="flex items-start space-x-2">
                  <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">#terminalSelection</code>
                  <span className="text-gray-600">Terminal output</span>
                </div>
                <div className="flex items-start space-x-2">
                  <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">#changes</code>
                  <span className="text-gray-600">Git changes / diffs</span>
                </div>
              </div>
            </div>

            {/* @-mentions */}
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="bg-green-500 text-white px-2 py-0.5 rounded text-sm font-mono mr-2">@</span>
                Participants
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">@workspace</code>
                  <span className="text-gray-600">Workspace-aware answers</span>
                </div>
                <div className="flex items-start space-x-2">
                  <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">@vscode</code>
                  <span className="text-gray-600">VS Code settings & features</span>
                </div>
                <div className="flex items-start space-x-2">
                  <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">@terminal</code>
                  <span className="text-gray-600">Terminal commands</span>
                </div>
              </div>
            </div>

            {/* Other methods */}
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="bg-orange-500 text-white px-2 py-0.5 rounded text-sm mr-2">📎</span>
                Other Methods
              </h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• <strong>Drag & drop</strong> files onto chat</p>
                <p>• <strong>Images</strong> for vision queries</p>
                <p>• <strong>Selected text</strong> auto-included</p>
                <p>• <strong>Active file</strong> in Ask/Edit modes</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-3 rounded-lg">
            <p className="text-green-400 font-mono text-sm mb-1">Example prompts:</p>
            <div className="text-gray-300 font-mono text-xs space-y-1">
              <p>"Explain how auth works #codebase"</p>
              <p>"Update this to match #fetch https://api-docs.example.com"</p>
              <p>"@terminal what's causing this error?"</p>
            </div>
          </div>
        </div>
      )
    }
];
