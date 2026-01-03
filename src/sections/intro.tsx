import { SlideType } from './types';

export const introSlides: SlideType[] = [
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

        <div className="flex flex-col items-center space-y-4">
          {/* Adoption Lifecycle Bell Curve Visualization */}
          <div className="relative w-full h-64 bg-white rounded-lg p-4 shadow border border-gray-200">
            <svg viewBox="0 0 400 160" className="w-full h-full">
              <defs>
                {/* Section fills */}
                <clipPath id="curveClip">
                  <path d="M 0 140 L 0 130 C 20 130 35 128 50 120 C 70 108 90 85 120 55 C 150 25 175 10 200 8 C 225 10 250 25 280 55 C 310 85 330 108 350 120 C 365 128 380 130 400 130 L 400 140 Z" />
                </clipPath>
              </defs>

              {/* Filled sections under curve */}
              <g clipPath="url(#curveClip)">
                {/* Innovators */}
                <rect x="0" y="0" width="55" height="140" fill="#3b82f6" opacity="0.3" />
                {/* Early Adopters */}
                <rect x="55" y="0" width="70" height="140" fill="#8b5cf6" opacity="0.3" />
                {/* Early Majority */}
                <rect x="125" y="0" width="90" height="140" fill="#ec4899" opacity="0.3" />
                {/* Late Majority */}
                <rect x="215" y="0" width="100" height="140" fill="#f97316" opacity="0.3" />
                {/* Laggards */}
                <rect x="315" y="0" width="85" height="140" fill="#22c55e" opacity="0.3" />
              </g>

              {/* Bell curve outline */}
              <path
                d="M 0 130 C 20 130 35 128 50 120 C 70 108 90 85 120 55 C 150 25 175 10 200 8 C 225 10 250 25 280 55 C 310 85 330 108 350 120 C 365 128 380 130 400 130"
                fill="none"
                stroke="#374151"
                strokeWidth="2.5"
              />

              {/* Vertical divider lines */}
              <line x1="55" y1="115" x2="55" y2="140" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,2" />
              <line x1="125" y1="52" x2="125" y2="140" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,2" />
              <line x1="215" y1="30" x2="215" y2="140" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,2" />
              <line x1="315" y1="90" x2="315" y2="140" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,2" />

              {/* Stage Labels - centered in each section */}
              {/* Innovators: 0-55, center at 27.5 */}
              <text x="27" y="152" fontSize="9" fill="#3b82f6" textAnchor="middle" fontWeight="600">Innovators</text>
              {/* Early Adopters: 55-125, center at 90 */}
              <text x="90" y="152" fontSize="9" fill="#8b5cf6" textAnchor="middle" fontWeight="600">Early Adopters</text>
              {/* Early Majority: 125-215, center at 170 */}
              <text x="170" y="152" fontSize="9" fill="#ec4899" textAnchor="middle" fontWeight="600">Early Majority</text>
              {/* Late Majority: 215-315, center at 265 */}
              <text x="265" y="152" fontSize="9" fill="#f97316" textAnchor="middle" fontWeight="600">Late Majority</text>
              {/* Laggards: 315-400, center at 357 */}
              <text x="357" y="152" fontSize="9" fill="#22c55e" textAnchor="middle" fontWeight="600">Laggards</text>
            </svg>
          </div>

          {/* Quantum State Indicator */}
          <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-green-100 p-4 rounded-lg w-full">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" style={{animationDelay: '0.15s'}}></div>
              <div className="w-3 h-3 rounded-full bg-pink-500 animate-pulse" style={{animationDelay: '0.3s'}}></div>
              <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse" style={{animationDelay: '0.45s'}}></div>
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{animationDelay: '0.6s'}}></div>
              <span className="text-sm font-semibold text-gray-700 ml-2">You are here... and here... and here</span>
            </div>
            <p className="text-xs text-center text-gray-600 mt-2">
              With AI, developers often exist in multiple stages simultaneously
            </p>
          </div>
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
];
