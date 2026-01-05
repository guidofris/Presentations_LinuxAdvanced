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
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500">
          <h4 className="font-bold text-indigo-900 mb-2">Large Language Models (LLMs)</h4>
          <ul className="text-gray-700 space-y-2">
            <li className="flex"><span className="mr-2">•</span><span>AI systems trained on massive amounts of text data to understand and generate human-like language</span></li>
            <li className="flex"><span className="mr-2">•</span><span>Learn patterns, grammar, facts, and reasoning abilities from their training data</span></li>
            <li className="flex"><span className="mr-2">•</span><span>Can perform tasks like writing, answering questions, coding, and analysis</span></li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500">
          <h4 className="font-bold text-indigo-900 mb-2">Transformer Architecture</h4>
          <ul className="text-gray-700 space-y-2">
            <li className="flex"><span className="mr-2">•</span><span>GPT: Generative Pre-trained Transformer</span></li>
            <li className="flex"><span className="mr-2">•</span><span>The core technology that powers modern LLMs, introduced in 2017</span></li>
            <li className="flex"><span className="mr-2">•</span><span>Uses "attention mechanisms" to understand relationships between words in context</span></li>
            <li className="flex"><span className="mr-2">•</span><span>Processes entire sequences of text in parallel rather than word-by-word</span></li>
            <li className="flex"><span className="mr-2">•</span><span>Enables models to understand meaning across entire documents</span></li>
          </ul>
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

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold text-gray-800">Tokenization</p>
              <p className="text-gray-600">Text is split into smaller units (tokens) the model can process</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold text-gray-800">Embedding & Attention</p>
              <p className="text-gray-600">Tokens become numbers; attention finds relationships between words</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold text-gray-800">Layer Processing</p>
              <p className="text-gray-600">Multiple layers refine understanding and generate the response</p>
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
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto items-center justify-center h-full">
        <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <h4 className="font-bold text-indigo-900 mb-2">What are Parameters?</h4>
          <p className="text-gray-700">Parameters are the internal weights and connections the model learns during training. Think of them as the "knowledge" stored in the neural network - more parameters = more capacity to learn patterns.</p>
        </div>

        <p className="text-center text-lg text-gray-700">LLMs gained reasoning abilities through scaling in several key ways:</p>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-indigo-200">
            <h4 className="font-bold text-indigo-900 mb-2">More Parameters = More Pattern Recognition</h4>
            <ul className="text-gray-700 space-y-2">
              <li className="flex"><span className="mr-2">•</span><span>Larger models store vastly more patterns</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Recognize complex multi-step patterns</span></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-indigo-200">
            <h4 className="font-bold text-indigo-900 mb-2">Emergent Abilities</h4>
            <ul className="text-gray-700 space-y-2">
              <li className="flex"><span className="mr-2">•</span><span>At certain scales, models develop new capabilities</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Multi-step reasoning emerged in larger models</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Below threshold, abilities don't appear</span></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-indigo-200">
            <h4 className="font-bold text-indigo-900 mb-2">More Context = Better Reasoning</h4>
            <ul className="text-gray-700 space-y-2">
              <li className="flex"><span className="mr-2">•</span><span>Process longer context windows</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Hold more information simultaneously</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Connect ideas across longer distances</span></li>
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
            <p className="text-gray-700">Thousands of cores perform calculations simultaneously, perfect for transformer architecture that processes all tokens at once</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">🚀 Massive Speed-Up</h4>
            <p className="text-gray-700">What takes years on CPUs takes weeks on GPU clusters; modern LLM training uses thousands of GPUs together</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">🔢 Optimized for Matrix Math</h4>
            <p className="text-gray-700">Transformers rely on matrix multiplication for embeddings, attention, and layers; GPUs excel at exactly this operation</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">💾 High Memory Bandwidth</h4>
            <p className="text-gray-700">Fast access to massive arrays of weights and activations that LLMs constantly need</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-2">💰 Economic Viability</h4>
          <p className="text-gray-700">Without GPUs, training billion-parameter models would be practically and financially impossible</p>
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
          <ul className="text-gray-700 space-y-2">
            <li className="flex"><span className="mr-2">•</span><span><strong>Versatility</strong> - Handle diverse tasks (writing, coding, analysis, translation) without task-specific training</span></li>
            <li className="flex"><span className="mr-2">•</span><span><strong>Pattern Recognition</strong> - Excel at identifying complex patterns and relationships in data</span></li>
            <li className="flex"><span className="mr-2">•</span><span><strong>Natural Language</strong> - Generate human-like text and understand context and nuance</span></li>
            <li className="flex"><span className="mr-2">•</span><span><strong>Knowledge Breadth</strong> - Trained on vast amounts of information across countless domains</span></li>
            <li className="flex"><span className="mr-2">•</span><span><strong>Few-Shot Learning</strong> - Learn new tasks from just a few examples in the prompt</span></li>
          </ul>
        </div>

        <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
          <h4 className="font-bold text-red-900 mb-3">⚠️ Weaknesses</h4>
          <ul className="text-gray-700 space-y-2">
            <li className="flex"><span className="mr-2">•</span><span><strong>Hallucinations</strong> - Predict plausible-sounding text rather than compute or reason; can confidently generate false information</span></li>
            <li className="flex"><span className="mr-2">•</span><span><strong>No True Understanding</strong> - Pattern matching, not genuine comprehension</span></li>
            <li className="flex"><span className="mr-2">•</span><span><strong>Knowledge & Memory Limitations</strong> - Training data cutoffs and no persistent memory</span></li>
            <li className="flex"><span className="mr-2">•</span><span><strong>Bias & Accuracy</strong> - Reflects training data biases and can struggle with precise calculations</span></li>
            <li className="flex"><span className="mr-2">•</span><span><strong>Computational Cost</strong> - Expensive to train and run at scale</span></li>
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
