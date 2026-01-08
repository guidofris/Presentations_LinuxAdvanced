import { Layout } from 'lucide-react';
import { SlideType } from './types';

export const spacesSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <Layout className="w-20 h-20 text-blue-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 text-center">
          Spaces
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Organizing context for better results
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "Copilot Spaces",
    subtitle: "Persistent, Shareable Context for Copilot",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-900 mb-3">What are Copilot Spaces?</h3>
          <p className="text-lg text-gray-700">
            A dedicated place to organize the context Copilot uses to answer your questions—repositories, code, PRs, issues, notes, and files all in one curated collection.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-3">🎯 The Problem Spaces Solve</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Context fragmentation:</strong> Relevant info scattered across repos, docs, and conversations</li>
            <li>• <strong>Repeated explanations:</strong> Re-describing project context in every new chat</li>
            <li>• <strong>Knowledge silos:</strong> Team expertise trapped in individual chat histories</li>
            <li>• <strong>Stale context:</strong> Manually keeping AI up-to-date with project changes</li>
          </ul>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>Key Benefit:</strong> Spaces stay in sync—GitHub sources automatically update as they change, making Copilot an "evergreen expert" in your project.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Creating a Space",
    subtitle: "Set Up Your Organized Context in Minutes",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Getting Started</h3>
          <p className="text-gray-700">
            Go to <code className="bg-blue-100 px-2 py-1 rounded">github.com/copilot/spaces</code> and click <strong>Create space</strong>.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-3">📝 Steps to Create</h4>
          <ol className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">1</span>
              <span>Give your space a <strong>name</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">2</span>
              <span>Choose <strong>ownership</strong>: your personal account or an organization</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">3</span>
              <span>Click <strong>Create Space</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">4</span>
              <span>Optionally add a <strong>description</strong> to help others understand the space</span>
            </li>
          </ol>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>Pro Tip:</strong> Name and description can be changed anytime by hovering over them and clicking the edit icon.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Adding Context to a Space",
    subtitle: "Two Types of Context to Ground Copilot's Responses",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-bold text-blue-900 mb-2">📋 Instructions</h3>
            <p className="text-sm text-gray-700 mb-2">
              Free text describing what Copilot should focus on within this space.
            </p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Define areas of expertise</li>
              <li>• Specify task types to help with</li>
              <li>• Set boundaries on what to avoid</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-bold text-green-900 mb-2">📁 Sources</h3>
            <p className="text-sm text-gray-700 mb-2">
              Content used to provide more relevant answers. Always references the latest version on <code className="bg-green-100 px-1 rounded">main</code>.
            </p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-3">4 Ways to Add Sources</h4>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="flex items-start gap-2">
              <span className="text-xl">📄</span>
              <div>
                <p className="font-medium text-gray-800">Files & Repositories</p>
                <p className="text-xs text-gray-600">Files, folders, or entire repos</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl">🔗</span>
              <div>
                <p className="font-medium text-gray-800">Link GitHub Content</p>
                <p className="text-xs text-gray-600">PRs, issues, file URLs</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl">📤</span>
              <div>
                <p className="font-medium text-gray-800">Upload Files</p>
                <p className="text-xs text-gray-600">Images, docs, spreadsheets</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl">📝</span>
              <div>
                <p className="font-medium text-gray-800">Add Text Content</p>
                <p className="text-xs text-gray-600">Transcripts, notes, any text</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>Quick Add:</strong> From any file in GitHub's code view, click the "Add to space" icon to add it without leaving your flow.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Where to Use Copilot Spaces",
    subtitle: "Access Your Curated Context in GitHub and Your IDE",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 md:p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3">🌐 GitHub (Web)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Chat interface grounded in your space's context</li>
              <li>• View all conversations in the "Conversations" tab</li>
              <li>• Change the LLM model per space</li>
              <li>• Star favorite spaces for quick access</li>
              <li>• Access all spaces at <code className="bg-blue-100 px-1 rounded">github.com/copilot/spaces</code></li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 md:p-5 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-lg md:text-xl font-bold text-purple-900 mb-3">💻 Your IDE</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Access via GitHub MCP server</li>
              <li>• <strong>Agent mode only</strong> (uses MCP tools)</li>
              <li>• Enable <code className="bg-purple-100 px-1 rounded">copilot_spaces</code> toolset</li>
              <li>• Works in any IDE with Copilot + MCP support</li>
              <li>• Reference space by name in prompts</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
          <h4 className="font-semibold text-purple-900 mb-2">💡 Example IDE Prompts</h4>
          <div className="space-y-2 text-sm">
            <code className="block bg-gray-100 p-2 rounded text-gray-800">
              Using the Copilot space 'Checkout Flow Redesign' owned by myorg, summarize the implementation plan.
            </code>
            <code className="block bg-gray-100 p-2 rounded text-gray-800">
              Summarize the implementation plan from the Copilot space for the checkout flow redesign.
            </code>
          </div>
        </div>

        <div className="bg-orange-100 p-4 rounded-lg">
          <p className="text-sm italic text-orange-900">
            <strong>Note:</strong> When using Spaces in your IDE, repository context is not supported—only sources and instructions from the space.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Sharing Copilot Spaces",
    subtitle: "Collaborate with Teams or Share Knowledge Publicly",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 md:p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3">🏢 Organization-Owned</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Share with organization members</li>
              <li>• <strong>Three access levels:</strong></li>
              <li className="ml-4">👑 Admin — Full control</li>
              <li className="ml-4">✏️ Editor — Add/modify content</li>
              <li className="ml-4">👁️ Viewer — Read-only access</li>
              <li>• Can set "No access" to keep hidden</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 md:p-5 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg md:text-xl font-bold text-green-900 mb-3">👤 Individual-Owned</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Three sharing options:</strong></li>
              <li className="ml-4">🌍 Public — View-only by default</li>
              <li className="ml-4">🔗 Specific users — Invite by username</li>
              <li className="ml-4">🔒 Private — Only you</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-2">🔐 Access Control</h4>
          <p className="text-sm text-gray-700">
            <strong>Important:</strong> Viewers can only see sources they already have access to. If a space contains a private repo, viewers without repo access won't see that content.
          </p>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>Availability:</strong> Anyone with a Copilot license (including Copilot Free) can create and use Spaces. Usage counts toward your Copilot Chat requests.
          </p>
        </div>
      </div>
    )
  }
];
