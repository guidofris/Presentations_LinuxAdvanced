import { Puzzle } from 'lucide-react';
import { SlideType } from './types';

export const skillsSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <Puzzle className="w-20 h-20 text-purple-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-purple-900 text-center">
          Skills
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Extending Copilot's capabilities
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "Agent Skills",
    subtitle: "Teaching Copilot to Perform Specialized Tasks",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">What Are Agent Skills?</h3>
          <p className="text-lg text-gray-700">
            Agent Skills are folders of instructions, scripts, and resources that Copilot can load when relevant to your task.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">Key Features:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Open standard hosted at <a href="https://github.com/agentskills/agentskills" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">github.com/agentskills/agentskills</a></li>
              <li>• Works with Copilot coding agent, GitHub Copilot CLI, and VS Code Insiders</li>
              <li>• Create your own or use community skills</li>
              <li>• Find examples at <a href="https://github.com/anthropics/skills" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">anthropics/skills</a> and <a href="https://github.com/github/awesome-copilot" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">github/awesome-copilot</a></li>
              <li>• Browse and discover skills at <a href="https://skillsmp.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">skillsmp.com</a></li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <span className="text-amber-600 text-lg">⚠️</span>
            <div>
              <p className="text-amber-800 font-medium text-sm">Enable Agent Skills in VS Code settings:</p>
              <code className="text-xs bg-amber-100 px-2 py-1 rounded mt-1 inline-block text-amber-900">"chat.useAgentSkills": true</code>
            </div>
          </div>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg">
          <p className="text-sm italic text-purple-900">
            <strong>Key Takeaway:</strong> Skills are reusable, shareable expertise that Copilot activates automatically when needed.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Skills vs Custom Instructions",
    subtitle: "When to Use Each Approach",
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <div className="w-full max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-green-500 text-white p-4 md:p-6 rounded-lg shadow-lg">
              <div className="text-xl md:text-2xl font-bold mb-2">📝 Custom Instructions</div>
              <div className="text-sm mb-3">Simple guidelines for every task</div>
              <div className="text-xs space-y-1 opacity-90">
                <div>• Coding standards</div>
                <div>• Style preferences</div>
                <div>• General conventions</div>
              </div>
            </div>

            <div className="bg-purple-500 text-white p-4 md:p-6 rounded-lg shadow-lg">
              <div className="text-xl md:text-2xl font-bold mb-2">🎯 Agent Skills</div>
              <div className="text-sm mb-3">Detailed context when relevant</div>
              <div className="text-xs space-y-1 opacity-90">
                <div>• Testing workflows</div>
                <div>• Deployment procedures</div>
                <div>• Debugging guides</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 px-6 py-3 rounded-lg max-w-3xl w-full">
          <div className="font-semibold text-gray-800 mb-2 text-center">Working Together</div>
          <div className="text-sm text-gray-600 space-y-1 text-center">
            <div>• Skills are currently repository-level only</div>
            <div>• Both teach Copilot how to work in your codebase</div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Creating an Agent Skill",
    subtitle: "The SKILL.md File Structure",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl w-full mx-auto">
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">Skill Directory Structure</h3>
          <div className="bg-gray-900 p-4 rounded font-mono text-sm text-green-400">
            <pre>
{`.github/skills/webapp-testing/
  SKILL.md
  example_test.js
  debug_script.sh`}
            </pre>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">Location & Naming:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Store in <code className="bg-gray-100 px-2 py-1 rounded text-sm">.github/skills</code> directory</li>
              <li>• Each skill needs its own subdirectory</li>
              <li>• Use lowercase names with hyphens (e.g., webapp-testing)</li>
              <li>• Must contain a <code className="bg-gray-100 px-2 py-1 rounded text-sm">SKILL.md</code> file</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">Optional Additions:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Include scripts, examples, or other resources</li>
              <li>• Add test files or configuration templates</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg">
          <p className="text-sm italic text-purple-900">
            <strong>Note:</strong> Also supports <code className="bg-white px-2 py-1 rounded">.claude/skills</code> directory.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "SKILL.md File Format",
    subtitle: "Anatomy of a Skill Definition",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">SKILL.md Components</h3>
          <p className="text-lg text-gray-700">
            Two parts: YAML frontmatter (required metadata) and Markdown body (instructions).
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">YAML Frontmatter (Required):</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>name:</strong> lowercase identifier with hyphens</li>
              <li>• <strong>description:</strong> what it does and when to use it</li>
              <li>• <strong>license:</strong> optional license information</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">Markdown Body:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Detailed instructions and guidelines</li>
              <li>• Code examples and best practices</li>
              <li>• Step-by-step procedures</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg font-mono text-xs">
          <div className="text-blue-400 mb-2">---</div>
          <div className="text-blue-400">name: webapp-testing</div>
          <div className="text-blue-400">description: Testing guide...</div>
          <div className="text-blue-400 mb-2">---</div>
          <div className="text-green-400"># Instructions here...</div>
        </div>
      </div>
    )
  },
  {
    title: "How Copilot Uses Skills",
    subtitle: "Automatic Skill Selection and Injection",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">Automatic Activation</h3>
          <p className="text-lg text-gray-700">
            Copilot decides when to use skills based on your prompt and the skill's description.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">Selection Process:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Copilot analyzes your prompt</li>
              <li>• Matches it against skill descriptions</li>
              <li>• Injects SKILL.md into the agent's context</li>
              <li>• Agent follows instructions and uses resources</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">Best Practice:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Descriptions should explain what the skill does</li>
              <li>• Descriptions should explain when to use it</li>
              <li>• Clear descriptions enable smart automation</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg">
          <p className="text-sm italic text-purple-900">
            <strong>Remember:</strong> Well-written descriptions are the key to automatic skill activation.
          </p>
        </div>
      </div>
    )
  }
];
