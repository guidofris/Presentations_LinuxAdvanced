import { Monitor } from 'lucide-react';
import { SlideType } from './types';

export const windowsSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <Monitor className="w-20 h-20 text-indigo-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-indigo-900 text-center">
          Context Windows
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Copilot across VS Code
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-indigo-300 rounded-full"></div>
          <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
          <div className="w-3 h-3 bg-indigo-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "Context Window",
    subtitle: "Understanding the model's working memory",
    content: (
      <div className="flex flex-col space-y-4 max-w-4xl mx-auto items-center justify-center h-full">
        <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500">
          <p className="text-gray-700 italic">The maximum amount of text (measured in tokens) an LLM can process at once - includes both your input and the model's response</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">📏 Practical Limit</h4>
            <p className="text-gray-700 text-sm">Determines how much conversation history, documents, or code the model can "see" and work with simultaneously</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">📊 Size Varies</h4>
            <p className="text-gray-700 text-sm">Ranges from a few thousand tokens (early models) to millions of tokens (modern models like Claude 4.5 or GPT-5.2)</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">🔢 Token Count</h4>
            <p className="text-gray-700 text-sm">Everything counts: your prompts, previous messages, uploaded files, and the AI's responses all consume the window</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">🚫 Beyond the Window</h4>
            <p className="text-gray-700 text-sm">Information outside the context window is effectively "forgotten" - the model can't reference it</p>
          </div>
        </div>

        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
          <p className="text-sm text-amber-900"><strong>Example:</strong> 200K tokens ≈ 150,000 words or a 500-page book</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm text-gray-700"><strong>Trade-offs:</strong> Larger windows enable more complex tasks but require more computational resources and cost</p>
        </div>
      </div>
    )
  },
    {
    title: "Context Window Asymmetry",
    subtitle: "Why input and output limits differ in LLMs",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-indigo-50 p-4 md:p-6 rounded-lg border-l-4 border-indigo-500">
          <h3 className="text-xl md:text-2xl font-bold text-indigo-900 mb-4">Input vs Output Windows</h3>
          <p className="text-base md:text-lg text-gray-700">
            LLMs have different limits for input (context) and output (generation). While models can process massive amounts of input, they generate much shorter responses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 md:p-5 rounded-lg shadow border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-3">Claude Sonnet 4.5</h4>
            <div className="space-y-2 text-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-sm">Input:</span>
                <span className="font-bold text-indigo-600">128K tokens</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Output:</span>
                <span className="font-bold text-indigo-600">16K tokens</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 md:p-5 rounded-lg shadow border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-3">GPT-5.2</h4>
            <div className="space-y-2 text-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-sm">Input:</span>
                <span className="font-bold text-indigo-600">128K tokens</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Output:</span>
                <span className="font-bold text-indigo-600">64K tokens</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-100 p-4 rounded-lg">
          <p className="text-sm italic text-indigo-900">
            <strong>Key Takeaway:</strong> Think of LLMs as having a large "reading" capacity but a focused "speaking" style - by design.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Why This Asymmetry Exists",
    subtitle: "Technical, practical, and quality reasons",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-white p-4 md:p-5 rounded-lg shadow border border-indigo-200">
          <h4 className="font-semibold text-indigo-900 mb-3 flex items-center">
            <span className="text-xl md:text-2xl mr-3">⚙️</span>
            Technical Efficiency
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex"><span className="mr-2">•</span><span>Output generation is sequential (one token at a time)</span></li>
            <li className="flex"><span className="mr-2">•</span><span>Input processing can be parallelized</span></li>
            <li className="flex"><span className="mr-2">•</span><span>Longer outputs = longer generation times + higher costs</span></li>
          </ul>
        </div>

        <div className="bg-white p-4 md:p-5 rounded-lg shadow border border-indigo-200">
          <h4 className="font-semibold text-indigo-900 mb-3 flex items-center">
            <span className="text-xl md:text-2xl mr-3">🎯</span>
            Practical Design
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex"><span className="mr-2">•</span><span>Most use cases: consume lots of information → produce focused responses</span></li>
            <li className="flex"><span className="mr-2">•</span><span>Analogy: Read an entire book to answer a question, but don't recite the whole book back</span></li>
          </ul>
        </div>

        <div className="bg-white p-4 md:p-5 rounded-lg shadow border border-indigo-200">
          <h4 className="font-semibold text-indigo-900 mb-3 flex items-center">
            <span className="text-xl md:text-2xl mr-3">✨</span>
            Quality Concerns
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex"><span className="mr-2">•</span><span>Very long outputs risk: repetition, drift from intent, error accumulation</span></li>
            <li className="flex"><span className="mr-2">•</span><span>Shorter outputs maintain better coherence and quality</span></li>
          </ul>
        </div>
      </div>
    )
  }
];
