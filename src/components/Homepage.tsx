"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { languages } from "@/utils/languages";
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
} from "lucide-react";
import { JSX } from "react/jsx-runtime";

export default function HomePage() {
  // Map language slugs to icons (adjust based on your languages array)
  const languageIcons: { [key: string]: JSX.Element } = {
    python: (
      <Code2 className="w-6 h-6 text-blue-500 group-hover:text-blue-600" />
    ),
    javascript: (
      <FileJson className="w-6 h-6 text-yellow-400 group-hover:text-yellow-500" />
    ),
    typescript: (
      <FileCode className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
    ),
    java: <Code className="w-6 h-6 text-red-500 group-hover:text-red-600" />,
    cpp: (
      <Braces className="w-6 h-6 text-purple-500 group-hover:text-purple-600" />
    ),
    csharp: (
      <FileCode2 className="w-6 h-6 text-purple-400 group-hover:text-purple-500" />
    ),
    go: (
      <Terminal className="w-6 h-6 text-teal-500 group-hover:text-teal-600" />
    ),
    sql: (
      <Database className="w-6 h-6 text-blue-400 group-hover:text-blue-500" />
    ),
    // Add more mappings as needed based on your languages array
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 px-6 py-12">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center text-white">
        <span className="inline-flex items-center">
          <Code className="w-8 h-8 md:w-10 md:h-10 text-indigo-400 mr-2" />
          Welcome to{" "}
          <span className="text-indigo-400 ml-2">CodePlayground</span>
        </span>
      </h1>

      <p className="text-gray-300 mb-10 text-center max-w-xl text-base md:text-lg">
        Select a programming language and start coding instantly in your
        browser.
      </p>

      {/* Language Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl w-full">
        {languages.map((lang) => (
          <Link key={lang.slug} href={`/editor/${lang.slug}`}>
            <Card className="group relative bg-gray-800 border border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:border-indigo-500 transition-all duration-300 min-h-[100px] flex items-center justify-center">
              <CardHeader className="flex flex-row items-center justify-center space-x-3 w-full">
                {/* Icon */}
                <div className="flex-shrink-0">
                  {languageIcons[lang.slug.toLowerCase()] || (
                    <FileText className="w-6 h-6 text-gray-400 group-hover:text-indigo-400" />
                  )}
                </div>
                {/* Language Name */}
                <CardTitle className="text-gray-100 text-sm md:text-base font-semibold group-hover:text-indigo-400 transition-colors duration-200 text-center">
                  {lang.name}
                </CardTitle>
              </CardHeader>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-gray-400 text-sm md:text-base text-center">
        Built with <span className="text-red-400">❤️</span> using{" "}
        <span className="text-indigo-400 font-medium">Next.js</span> &{" "}
        <span className="text-indigo-400 font-medium">Tailwind CSS</span>
      </footer>
    </main>
  );
}
