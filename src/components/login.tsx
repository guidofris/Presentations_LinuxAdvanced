
import React, { useState } from 'react';
import {
  Lock,
  AlertCircle,
  Sparkles,
  Code,
  Brain,
  Network,
  Mail,
  CheckCircle,
  Rocket,
  Repeat,
  Users,
  Clock
} from 'lucide-react';
import { verifyPassword } from '../utils/hash';

interface LoginProps {
  onSuccess: () => void;
  passwordHash: string; // SHA-256 hash of the correct password
}

export const Login: React.FC<LoginProps> = ({ onSuccess, passwordHash }) => {
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);

    const isValid = await verifyPassword(inputPassword, passwordHash);

    if (isValid) {
      // Auth state managed by AuthContext - no localStorage
      onSuccess();
    } else {
      setError(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
    setIsVerifying(false);
  };

  const topics = [
    { icon: Sparkles, title: 'LLM Fundamentals', desc: 'Understand how large language models work', color: 'blue' },
    { icon: Code, title: 'GitHub Copilot', desc: 'Hands-on with AI-powered coding assistants', color: 'blue' },
    { icon: Brain, title: 'Context & Instructions', desc: 'Learn to guide AI with precision', color: 'purple' },
    { icon: Network, title: 'Multi-Agent Systems', desc: 'Orchestrate multiple AI agents effectively', color: 'purple' },
    { icon: Rocket, title: 'Practical Workflows', desc: 'Real-world patterns for AI-native development', color: 'orange' },
    { icon: Repeat, title: 'Repeating Tasks', desc: 'Automate repetitive work with AI assistance', color: 'orange' },
  ];

  const benefits = [
    'Transform your development workflow with AI',
    'Learn practical prompting techniques',
    'Hands-on demos with real tools',
    'Take home actionable skills immediately',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-300 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Interactive Workshop</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              AI Native<br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Software Engineering
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Master the art of working with AI coding assistants. Learn practical frameworks,
              hands-on techniques, and real-world patterns to supercharge your development.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button
                onClick={() => setShowLogin(true)}
                className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all shadow-lg"
              >
                Access Workshop
              </button>
              <a
                href="mailto:workshop@itdepends.be?subject=AI Native Workshop Inquiry"
                className="px-8 py-3 bg-transparent border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>6 hours (full day or 2×3h evenings)</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Teams & individuals</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>Hands-on demos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
          What You'll Learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${topic.color}-500/20 mb-4`}>
                <topic.icon className={`w-6 h-6 text-${topic.color}-400`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{topic.title}</h3>
              <p className="text-gray-400 text-sm">{topic.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Why Attend This Workshop?
            </h2>
            <ul className="space-y-4 text-left inline-block">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready to Level Up Your AI Skills?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Contact us to book this workshop for your team or get access to the materials.
          </p>
          <a
            href="mailto:workshop@itdepends.be?subject=AI Native Workshop Booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transform hover:-translate-y-0.5 transition-all shadow-lg"
          >
            <Mail className="w-5 h-5" />
            workshop@itdepends.be
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} IT depends. Already have access?{' '}
          <button
            onClick={() => setShowLogin(true)}
            className="text-blue-400 hover:underline"
          >
            Enter password
          </button>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div
            className={`bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all ${
              isShaking ? 'animate-shake' : ''
            }`}
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 rounded-full mb-4">
                <Lock className="w-7 h-7 text-gray-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Enter Workshop Password</h2>
              <p className="text-gray-500 text-sm mt-2">
                Don't have a password? Contact{' '}
                <a href="mailto:workshop@itdepends.be" className="text-blue-600 hover:underline">
                  workshop@itdepends.be
                </a>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={inputPassword}
                  onChange={(e) => {
                    setInputPassword(e.target.value);
                    setError(false);
                  }}
                  placeholder="Enter password"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors ${
                    error
                      ? 'border-red-400 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  autoFocus
                />
                {error && (
                  <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>Incorrect password. Please try again.</span>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowLogin(false)}
                  className="flex-1 py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isVerifying}
                  className="flex-1 py-3 px-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isVerifying ? 'Verifying...' : 'Unlock'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
