import { SlideType } from './types';

export const llmSlides: SlideType[] = [
  {
    title: "Understanding LLMs",
    subtitle: "The Technology Powering AI Coding Assistants",
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <div className="text-center mb-4">
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Before we can effectively delegate to AI, we need to understand how these systems actually work
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-4xl">
          <div className="bg-indigo-500 text-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-3xl mb-3">🧠</div>
            <div className="text-xl font-bold mb-2">Architecture</div>
            <div className="text-sm opacity-90">How transformers process and generate text</div>
          </div>

          <div className="bg-indigo-600 text-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-3xl mb-3">📈</div>
            <div className="text-xl font-bold mb-2">Evolution</div>
            <div className="text-sm opacity-90">From simple models to emergent reasoning</div>
          </div>

          <div className="bg-indigo-700 text-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-3xl mb-3">⚖️</div>
            <div className="text-xl font-bold mb-2">Limitations</div>
            <div className="text-sm opacity-90">What LLMs can and cannot do</div>
          </div>
        </div>

        <div className="bg-indigo-100 px-6 py-4 rounded-lg max-w-2xl mt-4">
          <p className="text-center text-indigo-900">
            <strong>Why This Matters:</strong> Understanding the technology helps you set realistic expectations and use AI more effectively.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "What is an LLM?",
    subtitle: "Large Language Models & Transformer Architecture",
    content: (
      <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto h-full items-center">
        <div className="flex flex-col space-y-4">
          <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500">
            <h4 className="font-bold text-indigo-900 mb-2">Large Language Models (LLMs)</h4>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• AI systems trained on massive amounts of text data to understand and generate human-like language</li>
              <li>• Learn patterns, grammar, facts, and reasoning abilities from their training data</li>
              <li>• Can perform tasks like writing, answering questions, coding, and analysis</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500">
            <h4 className="font-bold text-indigo-900 mb-2">Transformer Architecture</h4>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• The core technology that powers modern LLMs, introduced in 2017</li>
              <li>• Uses "attention mechanisms" to understand relationships between words in context</li>
              <li>• Processes entire sequences of text in parallel rather than word-by-word</li>
              <li>• Enables models to capture long-range dependencies and understand meaning across entire documents</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "How Transformers Work",
    subtitle: "From input to output - a visual flow",
    content: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-full max-w-5xl">
          <div className="flex items-center justify-between">
            {/* Input */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 text-white px-4 py-3 rounded-lg shadow-lg">
                <p className="text-sm font-mono">"How are you?"</p>
              </div>
              <p className="text-xs text-gray-600 mt-2 font-semibold">Input</p>
            </div>

            <div className="text-gray-400 text-2xl">→</div>

            {/* Tokenization */}
            <div className="flex flex-col items-center">
              <div className="bg-amber-100 border border-amber-300 px-3 py-2 rounded-lg">
                <div className="flex space-x-1">
                  <span className="bg-amber-200 px-2 py-1 rounded text-xs font-mono">How</span>
                  <span className="bg-amber-200 px-2 py-1 rounded text-xs font-mono">are</span>
                  <span className="bg-amber-200 px-2 py-1 rounded text-xs font-mono">you</span>
                  <span className="bg-amber-200 px-2 py-1 rounded text-xs font-mono">?</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2 font-semibold">Tokenization</p>
            </div>

            <div className="text-gray-400 text-2xl">→</div>

            {/* Embedding */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 border border-blue-300 px-3 py-2 rounded-lg">
                <div className="flex flex-col space-y-1 text-xs font-mono text-blue-800">
                  <span>[0.2, -0.5, 0.8...]</span>
                  <span>[0.7, 0.1, -0.3...]</span>
                  <span>[0.4, 0.9, 0.2...]</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2 font-semibold">Embedding</p>
            </div>

            <div className="text-gray-400 text-2xl">→</div>

            {/* Attention */}
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 border border-purple-300 px-3 py-2 rounded-lg">
                <div className="grid grid-cols-3 gap-1">
                  <div className="w-4 h-4 bg-purple-300 rounded"></div>
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  <div className="w-4 h-4 bg-purple-200 rounded"></div>
                  <div className="w-4 h-4 bg-purple-600 rounded"></div>
                  <div className="w-4 h-4 bg-purple-300 rounded"></div>
                  <div className="w-4 h-4 bg-purple-400 rounded"></div>
                  <div className="w-4 h-4 bg-purple-200 rounded"></div>
                  <div className="w-4 h-4 bg-purple-400 rounded"></div>
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2 font-semibold">Attention</p>
            </div>

            <div className="text-gray-400 text-2xl">→</div>

            {/* Layers */}
            <div className="flex flex-col items-center">
              <div className="flex flex-col space-y-1">
                <div className="bg-green-200 border border-green-400 px-4 py-1 rounded text-xs">Layer N</div>
                <div className="bg-green-300 border border-green-400 px-4 py-1 rounded text-xs">...</div>
                <div className="bg-green-400 border border-green-500 px-4 py-1 rounded text-xs">Layer 1</div>
              </div>
              <p className="text-xs text-gray-600 mt-2 font-semibold">Processing</p>
            </div>

            <div className="text-gray-400 text-2xl">→</div>

            {/* Output */}
            <div className="flex flex-col items-center">
              <div className="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg">
                <p className="text-sm font-mono">"I'm doing well!"</p>
              </div>
              <p className="text-xs text-gray-600 mt-2 font-semibold">Output</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold text-gray-800">Tokenization</p>
              <p className="text-gray-600 text-xs">Text is split into smaller units (tokens) the model can process</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold text-gray-800">Embedding & Attention</p>
              <p className="text-gray-600 text-xs">Tokens become numbers; attention finds relationships between words</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold text-gray-800">Layer Processing</p>
              <p className="text-gray-600 text-xs">Multiple layers refine understanding and generate the response</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Evolution Through Scale",
    subtitle: "2017 → Now: How LLMs gained reasoning abilities",
    content: (
      <div className="flex flex-col space-y-5 max-w-4xl mx-auto items-center justify-center h-full">
        <p className="text-center text-gray-700 mb-2">LLMs gained reasoning abilities through scaling in several key ways:</p>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-indigo-200">
            <h4 className="font-bold text-indigo-900 mb-2 text-sm">More Parameters = More Pattern Recognition</h4>
            <ul className="text-gray-700 text-xs space-y-1">
              <li>• Larger models (billions to trillions of parameters) store vastly more patterns and relationships</li>
              <li>• Recognize complex multi-step patterns that smaller models miss</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-indigo-200">
            <h4 className="font-bold text-indigo-900 mb-2 text-sm">Emergent Abilities</h4>
            <ul className="text-gray-700 text-xs space-y-1">
              <li>• At certain scale thresholds, models suddenly develop new capabilities</li>
              <li>• Multi-step problem solving, analogical thinking, chain-of-thought emerged only in larger models</li>
              <li>• Below a certain size, these abilities simply don't appear</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-indigo-200">
            <h4 className="font-bold text-indigo-900 mb-2 text-sm">More Context = Better Reasoning</h4>
            <ul className="text-gray-700 text-xs space-y-1">
              <li>• Larger models process longer context windows</li>
              <li>• Hold more information "in mind" simultaneously</li>
              <li>• Connect ideas across longer distances for complex reasoning</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Role of GPUs",
    subtitle: "The hardware that made the AI revolution possible",
    content: (
      <div className="flex flex-col space-y-4 max-w-4xl mx-auto items-center justify-center h-full">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">⚡ Parallel Processing</h4>
            <p className="text-gray-700 text-sm">Thousands of cores perform calculations simultaneously, perfect for transformer architecture that processes all tokens at once</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">🚀 Massive Speed-Up</h4>
            <p className="text-gray-700 text-sm">What takes years on CPUs takes weeks on GPU clusters; modern LLM training uses thousands of GPUs together</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">🔢 Optimized for Matrix Math</h4>
            <p className="text-gray-700 text-sm">Transformers rely on matrix multiplication for embeddings, attention, and layers; GPUs excel at exactly this operation</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">💾 High Memory Bandwidth</h4>
            <p className="text-gray-700 text-sm">Fast access to massive arrays of weights and activations that LLMs constantly need</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-2">💰 Economic Viability</h4>
          <p className="text-gray-700 text-sm">Without GPUs, training billion-parameter models would be practically and financially impossible</p>
        </div>

        <div className="bg-indigo-100 p-4 rounded-lg">
          <p className="text-sm font-semibold text-indigo-900 text-center">
            Bottom Line: GPUs are the key enabler that made the modern AI revolution possible
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Key Strengths & Weaknesses",
    subtitle: "Understanding what LLMs can and cannot do",
    content: (
      <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-3">✅ Strengths</h4>
          <ul className="text-gray-700 space-y-2 text-sm">
            <li><strong>Versatility</strong> - Handle diverse tasks (writing, coding, analysis, translation) without task-specific training</li>
            <li><strong>Pattern Recognition</strong> - Excel at identifying complex patterns and relationships in data</li>
            <li><strong>Natural Language</strong> - Generate human-like text and understand context and nuance</li>
            <li><strong>Knowledge Breadth</strong> - Trained on vast amounts of information across countless domains</li>
            <li><strong>Few-Shot Learning</strong> - Learn new tasks from just a few examples in the prompt</li>
          </ul>
        </div>

        <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
          <h4 className="font-bold text-red-900 mb-3">⚠️ Weaknesses</h4>
          <ul className="text-gray-700 space-y-2 text-sm">
            <li><strong>Hallucinations</strong> - Can confidently generate false or nonsensical information</li>
            <li><strong>No True Understanding</strong> - Pattern matching, not genuine comprehension</li>
            <li><strong>Knowledge Cutoff</strong> - Training data ends at a specific date</li>
            <li><strong>Computational Cost</strong> - Expensive to train and run</li>
            <li><strong>Bias</strong> - Reflects biases present in training data</li>
            <li><strong>Math & Logic</strong> - Can struggle with precise calculations</li>
            <li><strong>No Memory</strong> - Each conversation is isolated</li>
          </ul>
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

        <div className="grid grid-cols-2 gap-4">
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
];
