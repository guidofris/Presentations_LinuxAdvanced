import { SlideType } from './types';

export const modelsSlides: SlideType[] = [
  {
    title: "AI Models for Software Engineering",
    subtitle: "Choosing the Right AI Coding Assistant",
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <div className="text-center mb-6">
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Understanding model capabilities helps you delegate effectively and set realistic expectations
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-3xl">
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-6 rounded-lg shadow-lg">
            <div className="text-2xl font-bold mb-2">🎯 SWE-bench</div>
            <div className="text-sm">Real-world GitHub issue resolution - the gold standard for practical coding ability</div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-lg">
            <div className="text-2xl font-bold mb-2">🧮 HumanEval</div>
            <div className="text-sm">Algorithmic problem-solving - measures fundamental coding capabilities</div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-6 rounded-lg shadow-lg">
            <div className="text-2xl font-bold mb-2">📊 Context Window</div>
            <div className="text-sm">How much code the model can "see" at once - critical for large codebases</div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-6 rounded-lg shadow-lg">
            <div className="text-2xl font-bold mb-2">⚡ Use Case Fit</div>
            <div className="text-sm">Different models excel at different tasks - match the tool to the job</div>
          </div>
        </div>

        <div className="bg-gray-100 px-6 py-3 rounded-lg mt-4">
          <p className="text-sm text-gray-600 italic">
            Source: Lunabase AI - "Best AI Coding Models for Software Development 2025"
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Real-World Coding Performance",
    subtitle: "SWE-bench Verified Scores (2025)",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-gray-700">
            <strong>SWE-bench</strong> measures ability to resolve actual GitHub issues - real bugs from production codebases requiring understanding of complex systems.
          </p>
        </div>

        <div className="space-y-4">
          {/* Claude Sonnet 4.5 */}
          <div className="flex items-center space-x-4">
            <div className="w-40 text-right font-semibold text-gray-800">Claude Sonnet 4.5</div>
            <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-full rounded-full flex items-center justify-end pr-3" style={{width: '91.8%'}}>
                <span className="text-white font-bold text-sm">64.3%</span>
              </div>
            </div>
          </div>

          {/* GPT-5 */}
          <div className="flex items-center space-x-4">
            <div className="w-40 text-right font-semibold text-gray-800">GPT-5</div>
            <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full flex items-center justify-end pr-3" style={{width: '88.3%'}}>
                <span className="text-white font-bold text-sm">61.8%</span>
              </div>
            </div>
          </div>

          {/* Gemini 2.5 Pro */}
          <div className="flex items-center space-x-4">
            <div className="w-40 text-right font-semibold text-gray-800">Gemini 2.5 Pro</div>
            <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full flex items-center justify-end pr-3" style={{width: '83.1%'}}>
                <span className="text-white font-bold text-sm">58.2%</span>
              </div>
            </div>
          </div>

          {/* DeepSeek-Coder V3 */}
          <div className="flex items-center space-x-4">
            <div className="w-40 text-right font-semibold text-gray-800">DeepSeek-Coder V3</div>
            <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 h-full rounded-full flex items-center justify-end pr-3" style={{width: '73.9%'}}>
                <span className="text-white font-bold text-sm">51.7%</span>
              </div>
            </div>
          </div>

          {/* Llama 4 405B */}
          <div className="flex items-center space-x-4">
            <div className="w-40 text-right font-semibold text-gray-800">Llama 4 405B</div>
            <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full flex items-center justify-end pr-3" style={{width: '67.0%'}}>
                <span className="text-white font-bold text-sm">46.9%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg">
          <p className="text-sm italic text-purple-900">
            <strong>Key Insight:</strong> A 64% score means the model correctly resolves nearly 2 out of 3 real GitHub issues autonomously - productive enough to be a valuable team member.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Algorithmic Problem Solving",
    subtitle: "HumanEval Benchmark Results (2025)",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-gray-700">
            <strong>HumanEval</strong> measures fundamental coding ability on well-defined algorithmic challenges - syntax, data structures, and clean implementations.
          </p>
        </div>

        <div className="space-y-4">
          {/* GPT-5 */}
          <div className="flex items-center space-x-4">
            <div className="w-40 text-right font-semibold text-gray-800">GPT-5</div>
            <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full flex items-center justify-end pr-3" style={{width: '94.1%'}}>
                <span className="text-white font-bold text-sm">94.1%</span>
              </div>
            </div>
          </div>

          {/* Claude Sonnet 4.5 */}
          <div className="flex items-center space-x-4">
            <div className="w-40 text-right font-semibold text-gray-800">Claude Sonnet 4.5</div>
            <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-full rounded-full flex items-center justify-end pr-3" style={{width: '92.3%'}}>
                <span className="text-white font-bold text-sm">92.3%</span>
              </div>
            </div>
          </div>

          {/* Gemini 2.5 Pro */}
          <div className="flex items-center space-x-4">
            <div className="w-40 text-right font-semibold text-gray-800">Gemini 2.5 Pro</div>
            <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full flex items-center justify-end pr-3" style={{width: '89.7%'}}>
                <span className="text-white font-bold text-sm">89.7%</span>
              </div>
            </div>
          </div>

          {/* DeepSeek-Coder V3 */}
          <div className="flex items-center space-x-4">
            <div className="w-40 text-right font-semibold text-gray-800">DeepSeek-Coder V3</div>
            <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 h-full rounded-full flex items-center justify-end pr-3" style={{width: '87.4%'}}>
                <span className="text-white font-bold text-sm">87.4%</span>
              </div>
            </div>
          </div>

          {/* Llama 4 405B */}
          <div className="flex items-center space-x-4">
            <div className="w-40 text-right font-semibold text-gray-800">Llama 4 405B</div>
            <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full flex items-center justify-end pr-3" style={{width: '82.6%'}}>
                <span className="text-white font-bold text-sm">82.6%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>Notice:</strong> Rankings shift between benchmarks! GPT-5 leads on algorithmic tasks while Claude leads on real-world complexity. Choose based on your actual use case.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Choosing the Right Model",
    subtitle: "Match the Model to Your Needs",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
          <p className="text-gray-700">
            No single model optimizes all dimensions—selection depends on your specific requirements, constraints, and risk tolerance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-500 flex items-center">
            <div className="w-48 font-semibold text-purple-900">High-Stakes Development</div>
            <div className="flex-1 text-gray-700">Critical systems, complex refactoring, security-sensitive code</div>
            <div className="bg-purple-100 px-3 py-1 rounded-full text-purple-800 font-semibold text-sm">Claude Sonnet 4.5</div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500 flex items-center">
            <div className="w-48 font-semibold text-green-900">High-Volume / Speed</div>
            <div className="flex-1 text-gray-700">Code completion, interactive tools, rapid iteration</div>
            <div className="bg-green-100 px-3 py-1 rounded-full text-green-800 font-semibold text-sm">GPT-5</div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500 flex items-center">
            <div className="w-48 font-semibold text-blue-900">Enterprise GCP Users</div>
            <div className="flex-1 text-gray-700">Cloud-native workflows, compliance requirements</div>
            <div className="bg-blue-100 px-3 py-1 rounded-full text-blue-800 font-semibold text-sm">Gemini 2.5 Pro</div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-cyan-500 flex items-center">
            <div className="w-48 font-semibold text-cyan-900">Data Sovereignty</div>
            <div className="flex-1 text-gray-700">Self-hosted, IP protection critical, air-gapped environments</div>
            <div className="bg-cyan-100 px-3 py-1 rounded-full text-cyan-800 font-semibold text-sm">DeepSeek V3</div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500 flex items-center">
            <div className="w-48 font-semibold text-orange-900">Open Source Preference</div>
            <div className="flex-1 text-gray-700">Vendor independence, customization, learning environments</div>
            <div className="bg-orange-100 px-3 py-1 rounded-full text-orange-800 font-semibold text-sm">Llama 4 405B</div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm italic text-gray-700">
            <strong>Delegation Tip:</strong> Start with leading models for critical tasks, then experiment with alternatives for routine work where the performance gap matters less.
          </p>
        </div>
      </div>
    )
  },
];
