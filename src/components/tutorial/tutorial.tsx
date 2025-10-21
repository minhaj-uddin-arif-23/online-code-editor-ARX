"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";
import { languages } from "@/utils/languages";

export default function Tutorial() {
  const icons: { [key: string]: string } = {
    python: "https://cdn-icons-png.flaticon.com/128/3098/3098090.png",
    javascript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    typescript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    csharp:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    go: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    ruby: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    swift:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    kotlin:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    rust: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
    dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    r: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    haskell:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg",
    lua: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg",
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
        <span className="inline-flex items-center gap-2">
          <Code className="w-7 h-7 text-indigo-400" />
          Learn Programming — Free & Simple
        </span>
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 max-w-6xl w-full">
        {languages.map((lang) => {
          const iconUrl = icons[lang.slug.toLowerCase()];
          if (!iconUrl) {
            console.warn(`No icon found for ${lang.slug}`);
            return null;
          }
          return (
            <Link key={lang.slug} href={`/${lang.slug}`}>
              <Card className="group flex flex-col items-center justify-center bg-gray-800 border border-gray-700 rounded-xl hover:border-indigo-500 transition-all duration-200 p-4 cursor-pointer">
                <CardHeader className="flex flex-col items-center space-y-2">
                  <div className="bg-gray-900 rounded-full p-2">
                    <Image
                      src={iconUrl}
                      alt={lang.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 transition-transform duration-200 group-hover:scale-110"
                    />
                  </div>
                  <CardTitle className="text-gray-200 text-sm md:text-base font-medium text-center group-hover:text-indigo-400">
                    {lang.name}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>

      <footer className="mt-12 text-gray-400 text-sm text-center">
        Built with <span className="text-red-400">♥</span> using{" "}
        <span className="text-indigo-400 font-medium">Next.js</span> &{" "}
        <span className="text-indigo-400 font-medium">Tailwind CSS</span>
      </footer>
    </main>
  );
}
