import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FourDSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "",
      subtitle: "",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">AI Native Software Engineering</h2>
            <p className="text-2xl text-gray-600 mb-12">How to embrace AI and improve your developer happiness</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Jan De Dobbeleer</h3>
              <p className="text-lg text-gray-600 mb-4">Engineering Leader & Open Source Innovator</p>
              <div className="flex items-center justify-center space-x-6 text-gray-600">
                <span className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>jan@itdepends.be</span>
                </span>
                <span className="flex items-center space-x-2">
                  <span>🐦</span>
                  <span>@jandedobbeleer</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "AI Adoption & the Quantum State",
      subtitle: "Understanding the unique challenges of AI adoption",
      content: (
        <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto h-full items-center">
          <div className="flex flex-col space-y-4">
            <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Quantum State Concept</h4>
              <p className="text-gray-700">AI adoption creates a 'quantum state' where developers exist in overlapping adoption stages simultaneously.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Technology Adoption Lifecycle</h4>
              <p className="text-gray-700">The traditional technology adoption lifecycle is challenged by AI's rapid evolution and integration.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Need for Adaptive Strategies</h4>
              <p className="text-gray-700">Developers must implement adaptive strategies to navigate AI's evolving and blended adoption stages.</p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img src="img/adoption.png" alt="AI Adoption Lifecycle" className="rounded-lg shadow-lg max-h-[32rem] object-contain" />
          </div>
        </div>
      )
    },
    {
      title: "Personal Experience with AI",
      subtitle: "A journey from skepticism to renewed joy",
      content: (
        <div className="flex flex-col space-y-6 max-w-3xl mx-auto items-center justify-center h-full">
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200 w-full text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Initial Skepticism</h4>
            <p className="text-gray-700">A lot of marketing terminology thrown at us does not spark enthusiasm, especially when it doesn't seem approachable.</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200 w-full text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Enhanced Productivity</h4>
            <p className="text-gray-700">AI enabled faster building processes and deeper understanding, improving overall development efficiency.</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200 w-full text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Renewed Joy in Coding</h4>
            <p className="text-gray-700">Fine tuning AI usage opened a world of new opportunities.</p>
          </div>
        </div>
      )
    },
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
    {
      title: "The 4D AI Fluency Framework",
      subtitle: "Process Flow",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="text-center mb-6">
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Four interconnected competencies for effective, efficient, ethical, and safe AI interaction
            </p>
          </div>

          <div className="relative w-full max-w-3xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold mb-2">1. Delegation</div>
                <div className="text-sm">Setting goals & deciding when to engage with AI</div>
              </div>

              <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold mb-2">2. Description</div>
                <div className="text-sm">Effectively describing goals to prompt useful AI behaviors</div>
              </div>

              <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold mb-2">3. Discernment</div>
                <div className="text-sm">Accurately assessing usefulness of AI outputs</div>
              </div>

              <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold mb-2">4. Diligence</div>
                <div className="text-sm">Taking responsibility for what we do with AI</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-block bg-gray-100 px-6 py-3 rounded-lg">
                <div className="font-semibold text-gray-800 mb-2">Three Modes of AI Interaction:</div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• Automation: AI executes specific tasks</div>
                  <div>• Augmentation: Humans & AI collaborate</div>
                  <div>• Agency: AI performs future tasks independently</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "1. Delegation",
      subtitle: "Setting Goals & Deciding When to Engage",
      content: (
        <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">What is Delegation?</h3>
            <p className="text-lg text-gray-700">
              Delegation is the process of setting goals and making strategic decisions about whether, when, and how to engage with AI systems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Key Questions:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Should I use AI for this task?</li>
                <li>• Which mode is most appropriate? (Automation, Augmentation, or Agency)</li>
                <li>• What are the risks and benefits?</li>
                <li>• What level of human oversight is needed?</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Best Practices:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Start with clear objectives before engaging AI</li>
                <li>• Consider AI capabilities and limitations</li>
                <li>• Match the task to the appropriate AI interaction mode</li>
                <li>• Plan for human involvement throughout the process</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-sm italic text-blue-900">
              <strong>Remember:</strong> Delegation is about being intentional with AI - not every task needs AI, and not every AI task needs the same approach.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "2. Description",
      subtitle: "Effectively Prompting AI Systems",
      content: (
        <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-green-900 mb-4">What is Description?</h3>
            <p className="text-lg text-gray-700">
              Description involves effectively communicating your goals, context, and requirements to AI systems to prompt useful behaviors and outputs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-5 rounded-lg shadow border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">Essential Elements:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Clear and specific instructions</li>
                <li>• Relevant context and background information</li>
                <li>• Desired format and structure of outputs</li>
                <li>• Examples when needed (few-shot prompting)</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">Prompting Techniques:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Be explicit about your expertise level</li>
                <li>• Provide constraints and requirements</li>
                <li>• Use iterative refinement to improve outputs</li>
                <li>• Specify tone, style, and audience</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-100 p-4 rounded-lg">
            <p className="text-sm italic text-green-900">
              <strong>Key Insight:</strong> Better descriptions lead to better outputs. Subject matter expertise is crucial for crafting effective prompts.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "3. Discernment",
      subtitle: "Assessing AI Outputs & Behaviors",
      content: (
        <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">What is Discernment?</h3>
            <p className="text-lg text-gray-700">
              Discernment is the ability to accurately evaluate and assess the quality, accuracy, and usefulness of AI outputs and behaviors.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">Critical Evaluation Skills:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Fact-checking and verification of AI outputs</li>
                <li>• Recognizing potential biases or limitations</li>
                <li>• Identifying hallucinations or fabricated information</li>
                <li>• Assessing relevance and quality for your specific needs</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">What to Watch For:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Overconfident or unsupported claims</li>
                <li>• Missing context or nuance</li>
                <li>• Outdated information (knowledge cutoffs)</li>
                <li>• Misalignment with your actual goals</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-100 p-4 rounded-lg">
            <p className="text-sm italic text-purple-900">
              <strong>Critical Point:</strong> AI outputs should be treated as drafts requiring human review. Your expertise is essential for proper evaluation.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "4. Diligence",
      subtitle: "Taking Responsibility for AI Use",
      content: (
        <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
          <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">What is Diligence?</h3>
            <p className="text-lg text-gray-700">
              Diligence means taking responsibility for what we do with AI, how we use it, and the impacts of our AI-assisted work.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-5 rounded-lg shadow border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2">Ethical Responsibilities:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Transparency about AI use when appropriate</li>
                <li>• Respecting privacy, copyright, and data security</li>
                <li>• Considering societal and environmental impacts</li>
                <li>• Being accountable for AI-generated outputs</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2">Practical Actions:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Document your AI workflows and decisions</li>
                <li>• Maintain human oversight and accountability</li>
                <li>• Stay informed about organizational AI policies</li>
                <li>• Consider long-term implications of AI use</li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-100 p-4 rounded-lg">
            <p className="text-sm italic text-orange-900">
              <strong>Remember:</strong> You remain accountable for work done with AI assistance. Diligence ensures AI use is responsible, ethical, and safe.
            </p>
          </div>
        </div>
      )
    },
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
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <div className="flex-1 flex flex-col p-8">
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl text-gray-600">
            {slides[currentSlide].subtitle}
          </p>
        </div>

        <div className="flex-1 overflow-auto flex items-center justify-center">
          {slides[currentSlide].content}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500">
          Slide {currentSlide + 1} of {slides.length} | AI Native Software Engineering
        </div>
      </div>
    </div>
  );
};

export default FourDSlides;
