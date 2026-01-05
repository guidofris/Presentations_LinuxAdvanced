import { SlideType } from './types';

export const windowsSlides: SlideType[] = [
  {
    title: "Context Window Asymmetry",
    subtitle: "Why input and output limits differ in LLMs",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
          <h3 className="text-2xl font-bold text-indigo-900 mb-4">Input vs Output Windows</h3>
          <p className="text-lg text-gray-700">
            LLMs have different limits for input (context) and output (generation). While models can process massive amounts of input, they generate much shorter responses.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-indigo-200">
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

          <div className="bg-white p-5 rounded-lg shadow border border-indigo-200">
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
        <div className="bg-white p-5 rounded-lg shadow border border-indigo-200">
          <h4 className="font-semibold text-indigo-900 mb-3 flex items-center">
            <span className="text-2xl mr-3">⚙️</span>
            Technical Efficiency
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex"><span className="mr-2">•</span><span>Output generation is sequential (one token at a time)</span></li>
            <li className="flex"><span className="mr-2">•</span><span>Input processing can be parallelized</span></li>
            <li className="flex"><span className="mr-2">•</span><span>Longer outputs = longer generation times + higher costs</span></li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-indigo-200">
          <h4 className="font-semibold text-indigo-900 mb-3 flex items-center">
            <span className="text-2xl mr-3">🎯</span>
            Practical Design
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex"><span className="mr-2">•</span><span>Most use cases: consume lots of information → produce focused responses</span></li>
            <li className="flex"><span className="mr-2">•</span><span>Analogy: Read an entire book to answer a question, but don't recite the whole book back</span></li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-indigo-200">
          <h4 className="font-semibold text-indigo-900 mb-3 flex items-center">
            <span className="text-2xl mr-3">✨</span>
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
