"use client";

import {
  Code,
  FileCode,
  FileJson,
  FileText,
  Code2,
  Braces,
  Terminal,
  Database,
  FileCode2,
  Zap,
  Hash,
  Package,
  Shield,
  Diamond,
  Gem,
  Coffee,
  Boxes,
  Binary,
  Cpu,
} from "lucide-react";
import { JSX } from "react";

// Languages data
const languages = [
  { name: "Python", slug: "python", id: 71 },
  { name: "JavaScript", slug: "javascript", id: 63 },
  { name: "TypeScript", slug: "typescript", id: 74 },
  { name: "Java", slug: "java", id: 62 },
  { name: "C", slug: "c", id: 50 },
  { name: "C++", slug: "cpp", id: 54 },
  { name: "C#", slug: "csharp", id: 51 },
  { name: "Go", slug: "go", id: 60 },
  { name: "Rust", slug: "rust", id: 73 },
  { name: "Kotlin", slug: "kotlin", id: 78 },
  { name: "Swift", slug: "swift", id: 83 },
  { name: "PHP", slug: "php", id: 68 },
  { name: "Ruby", slug: "ruby", id: 72 },
  { name: "Perl", slug: "perl", id: 79 },
  { name: "R", slug: "r", id: 80 },
  { name: "Scala", slug: "scala", id: 81 },
  { name: "Lua", slug: "lua", id: 82 },
  { name: "Haskell", slug: "haskell", id: 61 },
  { name: "Shell Script", slug: "bash", id: 46 },
  { name: "Objective-C", slug: "objective_c", id: 84 },
  { name: "Dart", slug: "dart", id: 85 },
  { name: "SQL", slug: "sql", id: 86 },
  { name: "Elixir", slug: "elixir", id: 87 },
  { name: "Assembly", slug: "assembly", id: 45 },
];

export default function HomePage() {
  // Comprehensive language icon mapping for all 24 languages
  const languageIcons: { [key: string]: JSX.Element } = {
    python: <Code2 className="w-6 h-6 text-blue-500" />,
    javascript: <FileJson className="w-6 h-6 text-yellow-400" />,
    typescript: <FileCode className="w-6 h-6 text-blue-600" />,
    java: <Coffee className="w-6 h-6 text-red-500" />,
    c: <Code className="w-6 h-6 text-blue-400" />,
    cpp: <Braces className="w-6 h-6 text-blue-500" />,
    csharp: <Hash className="w-6 h-6 text-purple-500" />,
    go: <Zap className="w-6 h-6 text-cyan-400" />,
    rust: <Shield className="w-6 h-6 text-orange-500" />,
    kotlin: <Diamond className="w-6 h-6 text-purple-400" />,
    swift: <Gem className="w-6 h-6 text-orange-400" />,
    php: <Terminal className="w-6 h-6 text-indigo-400" />,
    ruby: <Gem className="w-6 h-6 text-red-400" />,
    perl: <FileCode2 className="w-6 h-6 text-blue-300" />,
    r: <Database className="w-6 h-6 text-blue-500" />,
    scala: <Boxes className="w-6 h-6 text-red-500" />,
    lua: <Code className="w-6 h-6 text-blue-400" />,
    haskell: <Package className="w-6 h-6 text-purple-600" />,
    bash: <Terminal className="w-6 h-6 text-green-500" />,
    objective_c: <Code className="w-6 h-6 text-blue-500" />,
    dart: <Diamond className="w-6 h-6 text-blue-400" />,
    sql: <Database className="w-6 h-6 text-orange-500" />,
    elixir: <Zap className="w-6 h-6 text-purple-500" />,
    assembly: <Binary className="w-6 h-6 text-green-400" />,
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 pt-24 px-4 sm:px-6 lg:px-8 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-8">
          {/* Main Heading */}
          <div className="flex items-center justify-center mb-6 animate-fade-in">
            <div className="animate-bounce-slow">
              <Cpu className="w-12 h-12 md:w-16 md:h-16 text-indigo-400 mr-4" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white">
              Welcome to{" "}
              <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                CompileX
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in-delay">
            Code in{" "}
            <span className="text-indigo-400 font-semibold">24+ languages</span>{" "}
            directly in your browser. No setup, no installation—just pure
            coding.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-8 flex-wrap animate-fade-in-delay-2">
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-400">Instant Execution</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-gray-400">Secure Sandbox</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <Code2 className="w-5 h-5 text-blue-400" />
              <span className="text-gray-400">Syntax Highlighting</span>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-10 animate-fade-in-delay-3">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Choose Your Language
          </h2>
          <p className="text-gray-400">
            Select from our wide range of supported languages
          </p>
        </div>

        {/* Language Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {languages.map((lang, index) => (
            <a key={lang.slug} href={`/editor/${lang.slug}`} className="block">
              <div
                className="group relative bg-linear-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-500 transition-all duration-300 h-full min-h-[120px] flex items-center justify-center overflow-hidden cursor-pointer transform hover:scale-105 hover:-translate-y-1 animate-card-in"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-300" />

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                <div className="relative flex flex-col items-center justify-center space-y-3 w-full p-4">
                  {/* Icon */}
                  <div className="shrink-0 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                    {languageIcons[lang.slug.toLowerCase()] || (
                      <FileText className="w-6 h-6 text-gray-400" />
                    )}
                  </div>

                  {/* Language Name */}
                  <div className="text-gray-100 text-sm md:text-base font-semibold group-hover:text-indigo-400 transition-colors duration-200 text-center">
                    {lang.name}
                  </div>

                  {/* Small Badge */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-delay-4">
          <div className="bg-linear-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700 shadow-2xl hover:border-indigo-500/50 transition-all duration-500">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Coding?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join thousands of developers who trust CompileX for quick
              prototyping, learning, and testing code snippets.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="/editor/python"
                className="px-8 py-3 bg-linear-to-r from-indigo-600 to-purple-600 rounded-full font-semibold text-white shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden group inline-block"
              >
                <span className="relative z-10">Start with Python</span>
                <span className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="/tutorials"
                className="px-8 py-3 bg-gray-700 rounded-full font-semibold text-white hover:bg-gray-600 transition-all duration-300 hover:scale-105 inline-block"
              >
                View Tutorials
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-gray-400 text-sm md:text-base text-center animate-fade-in-delay-5">
          <p>
            Built with <span className="text-red-400 animate-pulse">❤️</span>{" "}
            using <span className="text-indigo-400 font-medium">Next.js</span>,{" "}
            <span className="text-indigo-400 font-medium">Tailwind CSS</span> &{" "}
            <span className="text-indigo-400 font-medium">Lucide Icons</span>
          </p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes card-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-3 {
          animation: fade-in 0.6s ease-out 0.6s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-4 {
          animation: fade-in 0.6s ease-out 0.8s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-5 {
          animation: fade-in 0.6s ease-out 1s forwards;
          opacity: 0;
        }
        .animate-card-in {
          animation: card-in 0.5s ease-out forwards;
          opacity: 0;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
